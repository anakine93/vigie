"""Test des regles du robot Vigie Crypto sur l'historique (bougies 15 min de Binance, argent fictif).

Compare les anciennes regles (v1) et les regles actuelles (v2) avec frais, glissement de prix et stops executes
au prix du stop (ou a l'ouverture si le cours saute par-dessus), comme un vrai ordre stop.
Usage : python robots/test_historique.py 2026-09-20   (date de debut ; les bougies sont mises en cache dans robots/historique/)
"""
import json, os, sys, time, urllib.request

D = os.path.join(os.path.dirname(os.path.abspath(__file__)), "historique")
FEE = 0.001

def load(syms):
    data = {}
    for s in syms:
        p = os.path.join(D, s + ".json")
        if os.path.exists(p):
            data[s] = json.load(open(p))
    return data

def ema_series(v, n):
    k = 2 / (n + 1); out = []; e = v[0]
    for x in v:
        e = x * k + e * (1 - k); out.append(e)
    return out

def rsi_series(c, n=14):
    out = [50.0] * len(c); g = l = 0.0
    for i in range(1, len(c)):
        d = c[i] - c[i - 1]
        gi, li = max(d, 0), max(-d, 0)
        if i <= n:
            g += gi / n; l += li / n
        else:
            g = (g * (n - 1) + gi) / n; l = (l * (n - 1) + li) / n
        out[i] = 100.0 if l == 0 else 100 - 100 / (1 + g / l)
    return out

def atr_series(h, l, c, n=14):
    out = [0.0] * len(c); a = 0.0
    for i in range(1, len(c)):
        tr = max(h[i] - l[i], abs(h[i] - c[i - 1]), abs(l[i] - c[i - 1]))
        a = tr if i == 1 else (a * (n - 1) + tr) / n
        out[i] = a
    return out

def slip(vol24):
    return 0.0005 if vol24 >= 100e6 else 0.0015 if vol24 >= 20e6 else 0.004

def prep(k):
    t = [x[0] for x in k]; o = [x[1] for x in k]; h = [x[2] for x in k]; l = [x[3] for x in k]; c = [x[4] for x in k]; q = [x[5] for x in k]
    e20, e50, e200 = ema_series(c, 20), ema_series(c, 50), ema_series(c, 200)
    r = rsi_series(c); a = atr_series(h, l, c)
    vol24 = [sum(q[max(0, i - 95):i + 1]) for i in range(len(q))]
    eLong = ema_series(c, 800)
    return dict(eLong=eLong, t=t, o=o, h=h, l=l, c=c, q=q, e20=e20, e50=e50, e200=e200, rsi=r, atr=a, vol24=vol24)

def score_ancien(S, i):
    c, h, q = S["c"], S["h"], S["q"]
    tend = S["e20"][i] > S["e50"][i]
    cass = c[i] > max(h[i - 48:i])
    vr_recent = sum(q[i - 3:i + 1]); vr_avant = sum(q[i - 99:i - 3]) / (96 / 4)
    vr = vr_recent / vr_avant if vr_avant else 0
    r1h = c[i] / c[i - 4] - 1; rsi = S["rsi"][i]
    sc = 0
    if tend: sc += 2
    if cass: sc += 2
    if vr >= 2: sc += 2
    elif vr >= 1.5: sc += 1
    if 0.005 <= r1h <= 0.04: sc += 1
    if 52 <= rsi <= 70: sc += 1
    if rsi > 78: sc -= 3
    return sc, tend, r1h

def run(data, P, debut=None, fin=None, detail=False):
    syms = [s for s in data if s not in ("EURUSDT",)]
    S = {s: prep(data[s]) for s in syms}
    T = S["BTCUSDT"]["t"]; idx = {s: {t: i for i, t in enumerate(S[s]["t"])} for s in syms}
    cash = 1000.0; pos = {}; trades = []; last_close = {}; courbe = []
    for bi, t in enumerate(T):
        if bi < 210: continue
        if debut and t < debut: continue
        if fin and t > fin: break
        # --- sorties (bougie courante) ---
        for s in list(pos):
            i = idx[s].get(t)
            if i is None: continue
            p = pos[s]; X = S[s]
            if i <= p["i"]: continue
            o, h, l, c = X["o"][i], X["h"][i], X["l"][i], X["c"][i]
            stop = p["suiv"] if p["suiv"] else p["entree"] * (1 - p["sl"])
            sortie = None
            if l <= stop:
                sortie = (min(stop, o), "suiveur" if p["suiv"] else "stop-loss")
            else:
                p["haut"] = max(p["haut"], h)
                dist = p["sl"] * P["dist"]
                if not p["suiv"] and h >= p["entree"] * (1 + p["tp"]):
                    p["suiv"] = max(p["entree"] * (1 + P["secur"] * p["tp"]), p["haut"] * (1 - dist))
                elif p["suiv"]:
                    p["suiv"] = max(p["suiv"], p["haut"] * (1 - dist))
                if p["suiv"] and c <= p["suiv"]:
                    sortie = (c, "suiveur")
                elif not p["suiv"]:
                    age_h = (i - p["i"]) / 4
                    if age_h >= P["dureeH"]: sortie = (c, "duree")
                    elif P["sortieTendance"] and X["e20"][i] < X["e50"][i] and c / X["c"][i - 4] - 1 < 0: sortie = (c, "tendance")
            if sortie:
                px = sortie[0] * (1 - slip(X["vol24"][i]))
                net = p["qte"] * px * (1 - FEE)
                cash += net; pnl = net - p["montant"]
                trades.append(dict(s=s, pnl=pnl, pct=pnl / p["montant"], motif=sortie[1], t0=p["t"], t1=t))
                last_close[s] = t; del pos[s]
        # --- valeur ---
        val = cash
        for s, p in pos.items():
            i = idx[s].get(t)
            if i is not None: p["dernier"] = S[s]["c"][i]
            val += p["qte"] * p.get("dernier", p["entree"])
        courbe.append((t, val))
        # --- regime de marche ---
        B = S["BTCUSDT"]; j = idx["BTCUSDT"][t]
        if B["c"][j] / B["c"][j - 4] - 1 <= -0.01: continue
        if P["regime"] and not (B["c"][j] > B["e200"][j] and B["e50"][j] > B["e200"][j]): continue
        if P.get("btc24") and not (B["c"][j] > B["c"][j - 96]): continue
        if P.get("btcLong") and not (B["c"][j] > B["eLong"][j]): continue
        if len(pos) >= P["maxPos"]: continue
        # --- entrees ---
        cands = []
        for s in syms:
            if s in pos: continue
            i = idx[s].get(t)
            if i is None or i < 210: continue
            X = S[s]
            if X["vol24"][i] < P["volMin"]: continue
            if s in last_close and (t - last_close[s]) < P["cooldownH"] * 3600e3: continue
            c = X["c"][i]; rsi = X["rsi"][i]; atrp = X["atr"][i] / c
            if P["mode"] == "ancien":
                sc, tend, r1h = score_ancien(X, i)
                if sc < 5 or not tend or rsi > 75: continue
                cands.append((sc, s, 0.03, 0.05))
            else:
                if not (X["e20"][i] > X["e50"][i] > X["e200"][i]): continue
                if c < X["e200"][i]: continue
                if P.get("a24") and not (c > X["c"][i - 96]): continue
                # repli vers la moyenne 20 dans une tendance haussiere, puis reprise
                if not (P["rsiBas"] <= rsi <= P["rsiHaut"]): continue
                if not (c > X["c"][i - 1] and abs(c - X["e20"][i]) <= P["prox"] * X["atr"][i]): continue
                sl = min(P["slMax"], max(P["slMin"], P["slAtr"] * atrp)); tp = sl * P["rr"]
                force = (X["e20"][i] / X["e50"][i] - 1) / atrp
                cands.append((force, s, sl, tp))
        cands.sort(reverse=True)
        for sc, s, sl, tp in cands:
            if len(pos) >= P["maxPos"]: break
            tot = val
            montant = min(P["part"] * tot, cash - 1)
            if montant < 5: break
            X = S[s]; i = idx[s][t]
            px = X["c"][i] * (1 + slip(X["vol24"][i]))
            qte = montant * (1 - FEE) / px
            cash -= montant
            pos[s] = dict(i=i, t=t, entree=px, qte=qte, montant=montant, sl=sl, tp=tp, haut=px, suiv=None)
    val = courbe[-1][1] if courbe else 1000
    n = len(trades); g = [x for x in trades if x["pnl"] > 0]
    pire = 0; m = 0
    for _, v in courbe:
        m = max(m, v); pire = min(pire, v / m - 1)
    res = dict(valeur=round(val, 1), trades=n, gagnants=round(100 * len(g) / n) if n else 0,
               moyG=round(sum(x["pnl"] for x in g) / len(g), 2) if g else 0,
               moyP=round(sum(x["pnl"] for x in trades if x["pnl"] <= 0) / max(1, n - len(g)), 2),
               baissemax=round(100 * pire, 1))
    if detail:
        mot = {}
        for x in trades: mot.setdefault(x["motif"], [0, 0.0]); mot[x["motif"]][0] += 1; mot[x["motif"]][1] += x["pnl"]
        res["motifs"] = {k: (v[0], round(v[1], 1)) for k, v in mot.items()}
    return res

BASE_NOUV = dict(mode="nouveau", regime=True, maxPos=4, part=0.10, volMin=5e6, cooldownH=4, dureeH=48, sortieTendance=False,
                 rsiBas=40, rsiHaut=58, prox=1.0, slAtr=2.5, slMin=0.015, slMax=0.05, rr=2.0, dist=2 / 3, secur=0.6)
ACTUEL = {**BASE_NOUV, "rsiHaut": 55, "slAtr": 3.0, "rr": 2.0, "prox": 0.5, "dureeH": 72, "btcLong": True}
ANCIEN = dict(mode="ancien", regime=False, maxPos=4, part=0.10, volMin=3e6, cooldownH=2, dureeH=24, sortieTendance=True, dist=2 / 3, secur=0.6)


def telecharger(debut):
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    from crypto import LISTE
    os.makedirs(D, exist_ok=True)
    t0 = int(time.mktime(time.strptime(debut, "%Y-%m-%d"))) * 1000
    for b in LISTE:
        s, out, t = b + "USDT", [], t0
        while True:
            u = "https://data-api.binance.vision/api/v3/klines?symbol=%s&interval=15m&startTime=%d&limit=1000" % (s, t)
            k = json.load(urllib.request.urlopen(u, timeout=30))
            out += k
            if len(k) < 1000: break
            t = k[-1][0] + 1
        json.dump([[x[0], float(x[1]), float(x[2]), float(x[3]), float(x[4]), float(x[7])] for x in out], open(os.path.join(D, s + ".json"), "w"))
        print(s, len(out), flush=True)


if __name__ == "__main__":
    telecharger(sys.argv[1] if len(sys.argv) > 1 else time.strftime("%Y-%m-%d", time.localtime(time.time() - 60 * 86400)))
    d = load([f[:-5] for f in os.listdir(D)])
    for nom, P in (("anciennes regles (v1)", ANCIEN), ("regles actuelles (v2)", ACTUEL)):
        print(nom, run(d, P, detail=True))
    print("Bitcoin garde :", round(1000 * d["BTCUSDT"][-1][4] / d["BTCUSDT"][210][4], 1))
