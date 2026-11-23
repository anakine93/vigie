"""Robot Vigie Marches : actions, indices, matieres premieres et devises (argent fictif, aucun ordre reel).

Donnees : Yahoo Finance (bougies de 15 minutes, parfois retardees de 15 minutes selon la bourse).
Scan complet (toutes les 10 minutes) : avis de l'agent Marches (orientations-marches.json), ventes et achats.
Verification rapide (toutes les 60 secondes) : les bougies d'une minute ecoulees depuis le passage precedent
sont parcourues pour executer les stops au bon prix. Les positions sont suivies en pourcentage de variation
du cours : l'effet de change est ignore.
"""
import time, urllib.parse
from commun import (maintenant, texte_date, lire_date, get_json, lire, ecrire, lire_caisse, ecrire_caisse,
                    valeur_crypto, parcourir, ema, rsi, borner)

CFG = {"capitalInitial": 1000, "partBase": 0.10, "partFavorable": 0.15, "maxPositions": 4, "scoreMin": 5, "rsiMax": 75,
       "slAtr": 3, "tpAtr": 6, "slMin": 0.004, "slMax": 0.04, "dureeMaxH": 48, "cooldownH": 4, "reference": "^GSPC"}
# Couts simules par classe d'actifs : frais de courtage et glissement de prix (ecart achat/vente).
COUTS = {"actions": (0.001, 0.0005), "indices": (0.0005, 0.0002), "matieres": (0.0005, 0.0005), "devises": (0.0001, 0.0001)}
UNIVERS = {
    "actions": [
        "AAPL", "MSFT", "NVDA", "AMZN", "GOOGL", "META", "TSLA", "AVGO", "AMD", "NFLX", "JPM", "V", "MA", "XOM", "LLY", "UNH", "COST", "WMT",
        "PLTR", "COIN", "MSTR", "HOOD", "SMCI", "MU", "INTC", "ORCL", "CRM", "ADBE", "UBER", "SHOP", "SNOW", "CRWD", "PANW", "ARM", "BA", "DIS",
        "NKE", "PYPL", "SOFI", "RIVN", "LCID", "MARA", "RIOT", "IONQ", "RKLB", "SOUN", "AFRM", "UPST", "DKNG", "ROKU",
        "MC.PA", "OR.PA", "AI.PA", "TTE.PA", "SAN.PA", "BNP.PA", "AIR.PA", "SU.PA", "EL.PA", "CS.PA", "DG.PA", "RI.PA", "KER.PA", "SAF.PA",
        "ACA.PA", "GLE.PA", "ORA.PA", "CAP.PA", "HO.PA", "RNO.PA", "VIE.PA", "ENGI.PA", "BN.PA", "SGO.PA", "ML.PA", "DSY.PA", "PUB.PA", "STMPA.PA", "STLAP.PA",
        "SAP.DE", "SIE.DE", "ALV.DE", "DTE.DE", "BMW.DE", "MBG.DE", "VOW3.DE", "RHM.DE", "IFX.DE", "ADS.DE", "ASML.AS", "INGA.AS", "ENEL.MI", "ISP.MI"],
    "indices": ["^GSPC", "^NDX", "^DJI", "^RUT", "^FCHI", "^GDAXI", "^STOXX50E", "^FTSE", "^N225", "^HSI"],
    "matieres": ["GC=F", "SI=F", "PL=F", "HG=F", "CL=F", "BZ=F", "NG=F", "ZW=F", "ZC=F", "ZS=F", "KC=F", "CC=F", "SB=F"],
    "devises": ["EURUSD=X", "GBPUSD=X", "USDJPY=X", "USDCHF=X", "AUDUSD=X", "USDCAD=X", "NZDUSD=X", "EURGBP=X", "EURJPY=X", "EURCHF=X"],
}
NOMS = {"^GSPC": "S&P 500", "^NDX": "Nasdaq 100", "^DJI": "Dow Jones", "^RUT": "Russell 2000", "^FCHI": "CAC 40", "^GDAXI": "DAX",
        "^STOXX50E": "Euro Stoxx 50", "^FTSE": "FTSE 100", "^N225": "Nikkei 225", "^HSI": "Hang Seng", "GC=F": "Or", "SI=F": "Argent",
        "PL=F": "Platine", "HG=F": "Cuivre", "CL=F": "Petrole WTI", "BZ=F": "Petrole Brent", "NG=F": "Gaz naturel", "ZW=F": "Ble",
        "ZC=F": "Mais", "ZS=F": "Soja", "KC=F": "Cafe", "CC=F": "Cacao", "SB=F": "Sucre"}


def graphique(sym, intervalle, periode):
    url = "https://query1.finance.yahoo.com/v8/finance/chart/%s?interval=%s&range=%s" % (urllib.parse.quote(sym), intervalle, periode)
    return get_json(url, essais=2)["chart"]["result"][0]


def classe(sym):
    return next((k for k, v in UNIVERS.items() if sym in v), "actions")


def bougies(res):
    """Bougies completes (sans trous) : liste de (temps_s, o, h, l, c, volume)."""
    q = res["indicators"]["quote"][0]
    out = []
    for i, t in enumerate(res.get("timestamp") or []):
        o, h, l, c = q["open"][i], q["high"][i], q["low"][i], q["close"][i]
        if None in (o, h, l, c):
            continue
        out.append((t, o, h, l, c, q["volume"][i] or 0.0))
    return out


def analyser(res):
    """Indicateurs sur les 100 dernieres bougies de 15 minutes. Les seuils d'elan et le stop-loss s'adaptent
    a la volatilite de chaque actif (ATR), car une devise bouge bien moins qu'une petite action."""
    b = bougies(res)
    if len(b) < 60:
        return None
    b = b[-100:]
    c = [x[4] for x in b]; h = [x[2] for x in b]; lo = [x[3] for x in b]; vo = [x[5] for x in b]
    n = len(c)
    last = float(res["meta"].get("regularMarketPrice") or c[-1])
    tr = sum(max(h[i] - lo[i], abs(h[i] - c[i - 1]), abs(lo[i] - c[i - 1])) for i in range(n - 14, n))
    atrp = tr / 14 / last
    e20, e50 = ema(c, 20), ema(c, 50)
    tendance = e20 > e50
    r1h, r4h, r = last / c[-5] - 1, last / c[-17] - 1, rsi(c)
    v_moy = sum(vo[:-4]) / ((n - 4) / 4)
    vol_ratio = sum(vo[-4:]) / v_moy if v_moy else 0
    cassure = last > max(h[-49:-1])
    score, raisons = 0, []
    if tendance: score += 2; raisons.append("tendance haussiere")
    if cassure: score += 2; raisons.append("cassure du plus haut recent")
    if vol_ratio >= 2: score += 2; raisons.append("volume x%.1f" % vol_ratio)
    elif vol_ratio >= 1.5: score += 1; raisons.append("volume x%.1f" % vol_ratio)
    if atrp <= r1h <= 6 * atrp: score += 1; raisons.append("elan 1 h")
    if 52 <= r <= 70: score += 1; raisons.append("RSI %.0f" % r)
    if r > 78: score -= 3; raisons.append("RSI %.0f surachete" % r)
    ouvert = time.time() - b[-1][0] < 45 * 60
    m = res["meta"]; sym = m["symbol"]
    nom = NOMS.get(sym)
    if not nom and sym.endswith("=X") and len(sym) == 8: nom = sym[:3] + "/" + sym[3:6]
    if not nom and m.get("longName") and len(m["longName"]) <= 28: nom = m["longName"]
    nom = " ".join(str(nom or m.get("shortName") or m.get("longName") or sym).split())
    spark = [round(x, 6) for x in c[-48::2]] + [last]
    return {"prix": last, "devise": m.get("currency"), "nom": nom, "tendance": tendance, "r1h": r1h, "r4h": r4h, "rsi": r,
            "volRatio": vol_ratio, "cassure": cassure, "atrPct": atrp, "score": score, "raisons": ", ".join(raisons), "ouvert": ouvert, "spark": spark}


def nouvel_etat(now):
    return {"version": 2, "config": CFG, "debut": texte_date(now), "liquidites": CFG["capitalInitial"], "refInitial": None,
            "positions": [], "trades": [], "courbe": [], "journal": [], "signaux": [],
            "stats": {"nbTrades": 0, "gagnants": 0, "frais": 0.0, "pnl": 0.0},
            "marche": None, "regime": "normal", "derniereExecution": None, "derniereVerif": None}


def noter(e, now, texte):
    e["journal"].append({"t": texte_date(now), "texte": texte})


def cloturer(e, p, px, motif, now):
    """Vend virtuellement une position ; renvoie le montant net recupere en EUR."""
    frais, gl = COUTS[p["classe"]]
    pxs = px * (1 - gl)
    brut = p["investiNet"] * pxs / p["prixEntree"]
    fr = brut * frais; net = brut - fr; pnl = net - p["montant"]
    st = e["stats"]
    st["nbTrades"] += 1; st["gagnants"] += pnl > 0; st["frais"] += fr; st["pnl"] += pnl
    e["trades"].append({"symbole": p["symbole"], "nom": p["nom"], "classe": p["classe"], "montant": p["montant"], "prixEntree": p["prixEntree"],
                        "prixSortie": round(pxs, 6), "devise": p["devise"], "ouvertLe": p["ouvertLe"], "fermeLe": texte_date(now),
                        "pnl": round(pnl, 2), "pnlPct": round(100 * pnl / p["montant"], 2), "motifEntree": p["motif"], "motifSortie": motif, "avis": p.get("avis")})
    noter(e, now, "Vente %s (%s) : %+.2f EUR (%+.1f %%)" % (p["nom"], motif, pnl, 100 * pnl / p["montant"]))
    return net


def suivre_positions(e, now):
    """Parcourt les bougies 1 min de chaque position depuis le dernier passage ; vend celles dont le stop a ete touche."""
    gain = 0.0
    restantes = []
    for p in e["positions"]:
        try:
            res = graphique(p["symbole"], "1m", "5d")
        except Exception:
            restantes.append(p)
            continue
        b = [x for x in bougies(res) if x[0] >= p["verifS"]]
        avant = p.get("stopSuiveur")
        sortie = parcourir(p, [x[1:5] for x in b], p["prixEntree"], p["slPct"], p["tpPct"])
        if b:
            p["verifS"] = b[-1][0]
        px = res["meta"].get("regularMarketPrice") or (b[-1][4] if b else None)
        if px: p["prixActuel"] = float(px)
        if not avant and p.get("stopSuiveur"):
            noter(e, now, "Objectif atteint sur %s : stop suiveur active, gain securise a +%.1f %%" % (p["nom"], 100 * (p["stopSuiveur"] / p["prixEntree"] - 1)))
        if sortie:
            gain += cloturer(e, p, sortie[0], sortie[1], now)
        else:
            restantes.append(p)
    e["positions"] = restantes
    return gain


def verif(dossier):
    e = lire(dossier, "robot-marches.json")
    if not e or not e["positions"]:
        return
    now = maintenant(); n = len(e["positions"])
    liq = lire_caisse(dossier) + suivre_positions(e, now)
    e["liquidites"] = round(liq, 2); e["derniereVerif"] = texte_date(now)
    ecrire_caisse(dossier, liq)
    ecrire(dossier, "robot-marches.json", e)
    if len(e["positions"]) < n:
        print("[%s] Marches, verification : %d vente(s)" % (now.strftime("%H:%M:%S"), n - len(e["positions"])), flush=True)


def valeur(p):
    return p["investiNet"] * (p.get("prixActuel") or p["prixEntree"]) / p["prixEntree"]


def cycle(dossier):
    now = maintenant()
    e = lire(dossier, "robot-marches.json") or nouvel_etat(now)

    # Avis de l'agent Marches
    avis, regime, prudents = {}, "normal", []
    o = lire(dossier, "orientations-marches.json")
    if o:
        try:
            if "stop" in (o.get("regime") or ""): regime = "stop"
            elif "prudent" in (o.get("regime") or ""): regime = "prudent"
            prudents = o.get("classesPrudentes") or []
            for a in o.get("avis") or []:
                if a and a.get("symbole") and lire_date(a["expire"]) > now:
                    avis[a["symbole"]] = "defavorable" if a["avis"].startswith("d") else "favorable" if "fav" in a["avis"] else "neutre"
        except Exception:
            pass

    # Scan de tout l'univers
    ana, echecs = {}, 0
    for k, syms in UNIVERS.items():
        for s in syms:
            try:
                r = analyser(graphique(s, "15m", "5d"))
                if r:
                    r["classe"] = k; ana[s] = r
            except Exception:
                echecs += 1
    ref_px = ana[CFG["reference"]]["prix"] if CFG["reference"] in ana else None
    if not e.get("refInitial") and ref_px:
        e["refInitial"] = ref_px

    # --- Ventes : stops (bougies 1 min depuis le dernier passage), puis duree maximale, tendance et avis ---
    liq = lire_caisse(dossier) + suivre_positions(e, now)
    restantes = []
    for p in e["positions"]:
        an = ana.get(p["symbole"])
        motif = None
        if an and an["ouvert"] and not p.get("stopSuiveur"):
            if (now - lire_date(p["ouvertLe"])).total_seconds() / 3600 >= CFG["dureeMaxH"]: motif = "duree maximale atteinte"
            elif not an["tendance"] and an["r1h"] < 0: motif = "tendance cassee"
            elif avis.get(p["symbole"]) == "defavorable": motif = "avis defavorable (agent Marches)"
        if motif:
            liq += cloturer(e, p, an["prix"], motif, now)
        else:
            restantes.append(p)
    e["positions"] = restantes

    # --- Achats (uniquement sur un marche ouvert) ---
    total = liq + sum(valeur(p) for p in e["positions"]) + valeur_crypto(dossier)
    classement = sorted(ana.items(), key=lambda kv: kv[1]["score"], reverse=True)
    bloque = "achats suspendus par l'agent Marches" if regime == "stop" else None
    if not bloque:
        for s, an in classement:
            if len(e["positions"]) >= CFG["maxPositions"] or an["score"] < CFG["scoreMin"]: break
            if not an["ouvert"] or not an["tendance"] or an["rsi"] > CFG["rsiMax"]: continue
            if any(p["symbole"] == s for p in e["positions"]) or avis.get(s) == "defavorable": continue
            if any(x["symbole"] == s and (now - lire_date(x["fermeLe"])).total_seconds() < CFG["cooldownH"] * 3600 for x in e["trades"]): continue
            fav = avis.get(s) == "favorable"
            mult = 0.5 if regime == "prudent" or an["classe"] in prudents else 1
            montant = min((CFG["partFavorable"] if fav else CFG["partBase"]) * mult * total, liq - 1)
            if montant < 5: break
            frais, gl = COUTS[an["classe"]]
            sl = min(CFG["slMax"], max(CFG["slMin"], CFG["slAtr"] * an["atrPct"])); tp = sl * CFG["tpAtr"] / CFG["slAtr"]
            liq -= montant; e["stats"]["frais"] += montant * frais
            motif = "score %d : %s" % (an["score"], an["raisons"])
            e["positions"].append({"symbole": s, "nom": an["nom"], "classe": an["classe"], "devise": an["devise"], "montant": round(montant, 2),
                                   "investiNet": montant * (1 - frais), "prixEntree": round(an["prix"] * (1 + gl), 6), "prixActuel": an["prix"],
                                   "slPct": round(sl, 4), "tpPct": round(tp, 4), "ouvertLe": texte_date(now), "score": an["score"], "motif": motif,
                                   "verifS": int(time.time()) // 60 * 60 + 60, "avis": "favorable (agent Marches)" if fav else "aucun"})
            noter(e, now, "Achat %s pour %.2f EUR (stop -%.1f %%, gain +%.1f %% ; %s)" % (an["nom"], montant, 100 * sl, 100 * tp, motif))

    # --- Signaux, courbe, ecriture ---
    e["signaux"] = [{"symbole": s, "nom": an["nom"], "classe": an["classe"], "prix": an["prix"], "devise": an["devise"], "ouvert": an["ouvert"],
                     "r1h": round(100 * an["r1h"], 2), "r4h": round(100 * an["r4h"], 2), "rsi": round(an["rsi"], 1), "volRatio": round(an["volRatio"], 2),
                     "atrPct": round(100 * an["atrPct"], 3), "score": an["score"], "raisons": an["raisons"],
                     "avis": ("%s (agent Marches)" % avis[s]) if s in avis else "", "spark": an["spark"]} for s, an in classement[:25]]
    for p in e["positions"]:
        if p["symbole"] in ana: p["prixActuel"] = ana[p["symbole"]]["prix"]
    val = liq + sum(valeur(p) for p in e["positions"]) + valeur_crypto(dossier)
    ref = round(CFG["capitalInitial"] * ref_px / e["refInitial"], 2) if e.get("refInitial") and ref_px else CFG["capitalInitial"]
    e["courbe"].append({"t": texte_date(now), "valeur": round(val, 2), "ref": ref})
    e["courbe"] = borner(e["courbe"], 3000); e["journal"] = borner(e["journal"], 300); e["trades"] = borner(e["trades"], 1000)
    e["liquidites"] = round(liq, 2); e["regime"] = regime; e["config"] = CFG
    e["marche"] = {"analyses": len(ana), "echecs": echecs,
                   "ouverts": {k: sum(1 for a in ana.values() if a["classe"] == k and a["ouvert"]) for k in UNIVERS}, "achatsBloques": bloque}
    e["derniereExecution"] = e["derniereVerif"] = texte_date(now)
    ecrire_caisse(dossier, liq)
    ecrire(dossier, "robot-marches.json", e)
    print("[%s] Marches : %d actifs analyses (%d echecs), valeur %.2f EUR, %d positions, %d trades clotures" % (
        now.strftime("%H:%M"), len(ana), echecs, val, len(e["positions"]), e["stats"]["nbTrades"]), flush=True)
