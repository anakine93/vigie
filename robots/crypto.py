"""Robot Vigie Crypto : micro-transactions virtuelles (argent fictif, aucun ordre reel).

Scan complet (toutes les 5 minutes) : bougies de 15 minutes des cryptos de la liste, regime de marche
(BTC), avis de l'agent Technique (orientations.json), puis ventes et achats virtuels selon des regles fixes.
Verification rapide (toutes les 30 secondes) : les bougies d'une minute ecoulees depuis le passage
precedent sont parcourues pour executer les stops au bon prix, meme si le robot a pris du retard.
"""
import json, os, time, urllib.parse
from commun import (FMT, maintenant, texte_date, lire_date, get_json, lire, ecrire, lire_caisse, ecrire_caisse,
                    valeur_marches, parcourir, ema, rsi, atr, borner)

API = os.environ.get("BINANCE_API", "https://data-api.binance.vision/api/v3")

CFG = {
    "capitalInitial": 1000, "partBase": 0.10, "partFavorable": 0.15, "maxPositions": 4,
    # Stop-loss adapte a la volatilite (ATR des bougies 15 min), borne entre slMin et slMax ; objectif = rr x stop.
    "slAtr": 3.0, "slMin": 0.015, "slMax": 0.05, "rr": 2.0,
    # Achat sur repli dans une tendance haussiere : RSI entre rsiBas et rsiHaut, cours a moins de prox x ATR de la moyenne 20.
    "rsiBas": 40, "rsiHaut": 55, "prox": 0.5,
    "dureeMaxH": 72, "volumeMinUsdt": 5e6, "frais": 0.001, "cooldownH": 4, "btcChute1h": -0.01,
}
# Reglages choisis par un test sur l'historique (20/09 -> 23/11/2026, bougies 15 min, frais, glissement et stops
# executes au prix du stop) : 1 000 EUR -> 871 EUR, contre 677 EUR avec les anciennes regles et 718 EUR en gardant
# du Bitcoin. Le marche a chute de 25 a 60 % sur la periode : aucun reglage n'y gagnait.
# Seules des cryptos liquides et etablies sont traitees : pas de stablecoins, pas d'actions tokenisees,
# pas d'ETF a effet de levier, pas de jetons fraichement listes.
LISTE = ["BTC", "ETH", "SOL", "XRP", "BNB", "DOGE", "ADA", "TRX", "LINK", "AVAX", "SUI", "LTC", "BCH", "NEAR",
         "UNI", "AAVE", "INJ", "PEPE", "TAO", "ENA", "WLD", "HYPE", "FET", "XLM", "APT", "DOT", "ARB", "FIL"]


def api(chemin):
    return get_json(API + chemin)


def gliss(vol):
    """Glissement de prix simule selon la liquidite : plus un actif est petit, plus l'execution coute cher."""
    return 0.0005 if vol >= 100e6 else 0.0015 if vol >= 20e6 else 0.004


def nouvel_etat(now):
    return {"version": 2, "config": CFG, "debut": texte_date(now), "liquidites": CFG["capitalInitial"], "btcInitialEur": None,
            "positions": [], "trades": [], "courbe": [], "journal": [], "signaux": [],
            "stats": {"nbTrades": 0, "gagnants": 0, "frais": 0.0, "pnl": 0.0},
            "marche": None, "regime": "normal", "derniereExecution": None, "derniereVerif": None}


def noter(e, now, texte):
    e["journal"].append({"t": texte_date(now), "texte": texte})


def cloturer(e, p, px, eurusdt, motif, now):
    """Vend virtuellement une position ; renvoie le montant net recupere en EUR."""
    pxs = px * (1 - gliss(p.get("volUsdt") or 20e6))
    brut = p["quantite"] * pxs / eurusdt
    fr = brut * CFG["frais"]
    net = brut - fr
    pnl = net - p["montant"]
    st = e["stats"]
    st["nbTrades"] += 1; st["gagnants"] += pnl > 0; st["frais"] += fr; st["pnl"] += pnl
    e["trades"].append({"paire": p["paire"], "base": p["base"], "montant": p["montant"], "prixEntreeUsdt": p["prixEntreeUsdt"],
                        "prixSortieUsdt": round(pxs, 10), "ouvertLe": p["ouvertLe"], "fermeLe": texte_date(now),
                        "pnl": round(pnl, 2), "pnlPct": round(100 * pnl / p["montant"], 2), "motifEntree": p["motif"],
                        "motifSortie": motif, "avis": p.get("avis")})
    noter(e, now, "Vente %s (%s) : %+.2f EUR (%+.1f %%)" % (p["base"], motif, pnl, 100 * pnl / p["montant"]))
    return net


def bougies_minute(paire, depuis_ms):
    """Bougies 1 min depuis depuis_ms (incluse), jusqu'a maintenant. Liste de (temps_ms, o, h, l, c)."""
    out = []
    t = depuis_ms
    for _ in range(5):
        k = api("/klines?symbol=%s&interval=1m&startTime=%d&limit=1000" % (paire, t))
        out += [(x[0], float(x[1]), float(x[2]), float(x[3]), float(x[4])) for x in k]
        if len(k) < 1000:
            break
        t = k[-1][0] + 60000
    return out


def suivre_positions(e, eurusdt, now):
    """Parcourt les bougies 1 min de chaque position ouverte ; vend celles dont le stop a ete touche."""
    liq = None
    restantes = []
    for p in e["positions"]:
        try:
            b = bougies_minute(p["paire"], p["verifMs"])
        except Exception:
            restantes.append(p)
            continue
        avant = p.get("stopSuiveur")
        sortie = parcourir(p, [x[1:] for x in b], p["prixEntreeUsdt"], p["slPct"], p["tpPct"])
        if b:
            p["verifMs"] = b[-1][0]  # la bougie en cours sera relue au prochain passage
            p["prixActuelUsdt"] = b[-1][4]
        if not avant and p.get("stopSuiveur"):
            noter(e, now, "Objectif atteint sur %s : stop suiveur active, gain securise a +%.1f %%" % (p["base"], 100 * (p["stopSuiveur"] / p["prixEntreeUsdt"] - 1)))
        if sortie:
            liq = (liq if liq is not None else 0.0) + cloturer(e, p, sortie[0], eurusdt, sortie[1], now)
        else:
            restantes.append(p)
    e["positions"] = restantes
    return liq or 0.0


def verif(dossier):
    e = lire(dossier, "robot.json")
    if not e or not e["positions"]:
        return
    now = maintenant()
    eurusdt = float(api("/ticker/price?symbol=EURUSDT")["price"])
    n = len(e["positions"])
    liq = lire_caisse(dossier) + suivre_positions(e, eurusdt, now)
    e["marche"]["eurusdt"] = eurusdt
    e["liquidites"] = round(liq, 2)
    e["derniereVerif"] = texte_date(now)
    ecrire_caisse(dossier, liq)
    ecrire(dossier, "robot.json", e)
    if len(e["positions"]) < n:
        print("[%s] Crypto, verification : %d vente(s)" % (now.strftime("%H:%M:%S"), n - len(e["positions"])), flush=True)


def analyser(k):
    """Indicateurs sur les bougies 15 min."""
    if len(k) < 210:
        return None
    o = [float(x[1]) for x in k]; h = [float(x[2]) for x in k]; l = [float(x[3]) for x in k]; c = [float(x[4]) for x in k]
    q = [float(x[7]) for x in k]
    last = c[-1]
    e20, e50, e200 = ema(c, 20), ema(c, 50), ema(c, 200)
    r = rsi(c)
    a = atr(h, l, c)
    atrp = a / last
    r1h, r4h = last / c[-5] - 1, last / c[-17] - 1
    v_recent = sum(q[-4:]); v_avant = sum(q[-100:-4]) / 24
    vol_ratio = v_recent / v_avant if v_avant else 0
    tendance = e20 > e50 > e200 and last > e200
    repli = CFG["rsiBas"] <= r <= CFG["rsiHaut"] and abs(last - e20) <= CFG["prox"] * a
    reprise = last > c[-2]
    raisons = []
    raisons.append("tendance haussiere" if tendance else "pas de tendance haussiere")
    if repli: raisons.append("repli vers la moyenne")
    if reprise: raisons.append("reprise")
    raisons.append("RSI %.0f" % r)
    score = 2 * tendance + repli + reprise
    sl = min(CFG["slMax"], max(CFG["slMin"], CFG["slAtr"] * atrp))
    spark = [round(x, 8) for x in c[-48::2]] + [last]
    return {"prix": last, "tendance": tendance, "repli": repli, "reprise": reprise, "r1h": r1h, "r4h": r4h, "rsi": r,
            "volRatio": vol_ratio, "atrPct": atrp, "e50": e50, "e200": e200, "sl": sl, "tp": sl * CFG["rr"],
            "force": (e20 / e50 - 1) / atrp if atrp else 0, "score": score, "raisons": ", ".join(raisons), "spark": spark}


def cycle(dossier):
    now = maintenant()
    e = lire(dossier, "robot.json") or nouvel_etat(now)

    # Cours en direct des cryptos de la liste et des positions ouvertes
    paires = ["%sUSDT" % b for b in LISTE]
    for p in e["positions"]:
        if p["paire"] not in paires:
            paires.append(p["paire"])
    q = urllib.parse.quote(json.dumps(paires + ["EURUSDT"], separators=(",", ":")))
    tick = {t["symbol"]: t for t in api("/ticker/24hr?symbols=" + q)}
    eurusdt = float(tick["EURUSDT"]["lastPrice"]); btc = float(tick["BTCUSDT"]["lastPrice"])
    if not e.get("btcInitialEur"):
        e["btcInitialEur"] = btc / eurusdt

    # Avis de l'agent Technique (branche claude/avis), prioritaires sur les regles techniques
    avis, regime = {}, "normal"
    o = lire(dossier, "orientations.json")
    if o:
        try:
            if "stop" in (o.get("regime") or ""): regime = "stop"
            elif "prudent" in (o.get("regime") or ""): regime = "prudent"
            for a in o.get("avis") or []:
                if a and a.get("symbole") and lire_date(a["expire"]) > now:
                    s = a["symbole"].upper().removesuffix("USDT")
                    avis[s] = "defavorable" if a["avis"].startswith("d") else "favorable" if "fav" in a["avis"] else "neutre"
        except Exception:
            pass

    # Indicateurs (1 000 bougies de 15 min, environ 10 jours, pour des moyennes longues bien calculees)
    ana, btc_long = {}, None
    for s in paires:
        try:
            k = api("/klines?symbol=%s&interval=15m&limit=1000" % s)
            r = analyser(k)
            if s == "BTCUSDT": btc_long = ema([float(x[4]) for x in k], 800)
            if r: ana[s] = r
        except Exception:
            pass
    # Regime de marche : on n'achete que si le Bitcoin est au-dessus de ses moyennes 50 h et 200 h (bougies 15 min).
    B = ana.get("BTCUSDT")
    btc1h = B["r1h"] if B else 0
    marche_haussier = bool(B and btc_long and B["prix"] > B["e200"] and B["e50"] > B["e200"] and B["prix"] > btc_long)

    # --- Ventes : stops (bougies 1 min depuis le dernier passage), puis duree maximale et avis ---
    liq = lire_caisse(dossier) + suivre_positions(e, eurusdt, now)
    restantes = []
    for p in e["positions"]:
        t = tick.get(p["paire"])
        motif = None
        if t and not p.get("stopSuiveur"):
            if (now - lire_date(p["ouvertLe"])).total_seconds() / 3600 >= CFG["dureeMaxH"]:
                motif = "duree maximale atteinte"
            elif avis.get(p["base"]) == "defavorable":
                motif = "avis defavorable (agent Technique)"
        if motif:
            liq += cloturer(e, p, float(t["lastPrice"]), eurusdt, motif, now)
        else:
            restantes.append(p)
    e["positions"] = restantes

    # --- Achats ---
    def val_pos():
        return sum(p["quantite"] * float(tick[p["paire"]]["lastPrice"]) / eurusdt for p in e["positions"] if p["paire"] in tick)
    total = liq + val_pos() + valeur_marches(dossier)
    bloque = None
    if regime == "stop": bloque = "achats suspendus par l'agent Technique"
    elif not marche_haussier: bloque = "marche baissier : le Bitcoin est sous ses moyennes 50 h / 200 h, le robot reste en liquidites"
    elif btc1h <= CFG["btcChute1h"]: bloque = "BTC en chute (%.1f %% sur 1 h)" % (100 * btc1h)
    mult = 0.5 if regime == "prudent" else 1
    candidats = sorted(((a["force"], s, a) for s, a in ana.items() if a["tendance"] and a["repli"] and a["reprise"]), reverse=True)
    if not bloque:
        for _, s, a in candidats:
            if len(e["positions"]) >= CFG["maxPositions"]: break
            base = s.removesuffix("USDT"); t = tick[s]
            if base not in LISTE or any(p["paire"] == s for p in e["positions"]): continue
            if float(t["quoteVolume"]) < CFG["volumeMinUsdt"] or avis.get(base) == "defavorable": continue
            if any(x["paire"] == s and (now - lire_date(x["fermeLe"])).total_seconds() < CFG["cooldownH"] * 3600 for x in e["trades"]): continue
            fav = avis.get(base) == "favorable"
            montant = min((CFG["partFavorable"] if fav else CFG["partBase"]) * mult * total, liq - 1)
            if montant < 5: break
            vol = float(t["quoteVolume"])
            px = float(t["lastPrice"]) * (1 + gliss(vol))
            fr = montant * CFG["frais"]
            liq -= montant; e["stats"]["frais"] += fr
            motif = "%s ; stop -%.1f %%, objectif +%.1f %%" % (a["raisons"], 100 * a["sl"], 100 * a["tp"])
            e["positions"].append({"paire": s, "base": base, "quantite": (montant - fr) * eurusdt / px, "prixEntreeUsdt": round(px, 10),
                                   "montant": round(montant, 2), "ouvertLe": texte_date(now), "motif": motif, "volUsdt": vol,
                                   "slPct": round(a["sl"], 4), "tpPct": round(a["tp"], 4), "prixActuelUsdt": float(t["lastPrice"]),
                                   "plusHaut": px, "stopSuiveur": None, "verifMs": (int(time.time()) // 60 + 1) * 60000,
                                   "avis": ("favorable (agent Technique)" if fav else "aucun")})
            noter(e, now, "Achat %s pour %.2f EUR (%s)" % (base, montant, motif))

    # --- Signaux, courbe, ecriture ---
    classement = sorted(ana.items(), key=lambda kv: (kv[1]["score"], kv[1]["force"]), reverse=True)
    e["signaux"] = [{"paire": s, "base": s.removesuffix("USDT"), "prixUsdt": a["prix"], "r1h": round(100 * a["r1h"], 2),
                     "r4h": round(100 * a["r4h"], 2), "r24h": round(float(tick[s]["priceChangePercent"]), 2), "rsi": round(a["rsi"], 1),
                     "volRatio": round(a["volRatio"], 2), "tendance": a["tendance"], "score": a["score"], "raisons": a["raisons"],
                     "volume24hUsdt": round(float(tick[s]["quoteVolume"])), "avis": avis.get(s.removesuffix("USDT"), ""), "spark": a["spark"]}
                    for s, a in classement[:25] if s in tick]
    for p in e["positions"]:
        if p["paire"] in tick: p["prixActuelUsdt"] = float(tick[p["paire"]]["lastPrice"])
    valeur = liq + val_pos() + valeur_marches(dossier)
    e["courbe"].append({"t": texte_date(now), "valeur": round(valeur, 2), "btcRef": round(CFG["capitalInitial"] * (btc / eurusdt) / e["btcInitialEur"], 2)})
    e["courbe"] = borner(e["courbe"], 3000); e["journal"] = borner(e["journal"], 300); e["trades"] = borner(e["trades"], 1000)
    e["liquidites"] = round(liq, 2); e["regime"] = regime; e["config"] = CFG
    e["marche"] = {"eurusdt": eurusdt, "btcUsdt": btc, "btc1h": round(100 * btc1h, 2), "marcheHaussier": marche_haussier,
                   "univers": len(LISTE), "analyses": len(ana), "achatsBloques": bloque}
    e["derniereExecution"] = e["derniereVerif"] = texte_date(now)
    ecrire_caisse(dossier, liq)
    ecrire(dossier, "robot.json", e)
    print("[%s] Crypto : %d paires analysees, valeur %.2f EUR, %d positions, %d trades clotures%s" % (
        now.strftime("%H:%M"), len(ana), valeur, len(e["positions"]), e["stats"]["nbTrades"], (" - achats bloques : " + bloque) if bloque else ""), flush=True)
