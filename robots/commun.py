"""Outils communs aux deux robots Vigie (argent fictif, aucun ordre reel).

Une seule caisse de 1 000 EUR fictifs est partagee par le robot Crypto et le robot Marches.
Les etats sont des fichiers JSON du dossier de donnees (branche Git "donnees" dans le cloud).
"""
import json, os, time, urllib.parse, urllib.request
from datetime import datetime

FMT = "%Y-%m-%dT%H:%M:%S"
CAPITAL = 1000
VERSION = 2  # version des regles : un changement remet la simulation a 1 000 EUR (l'ancienne est archivee)


def maintenant():
    return datetime.now().replace(microsecond=0)


def texte_date(d):
    return d.strftime(FMT)


def lire_date(s):
    return datetime.strptime(s[:19], FMT)


def get_json(url, essais=3, entetes=None, delai=20):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0", **(entetes or {})})
    for i in range(1, essais + 1):
        try:
            with urllib.request.urlopen(req, timeout=delai) as r:
                return json.load(r)
        except Exception:
            if i == essais:
                raise
            time.sleep(3 * i)


def lire(dossier, nom, defaut=None):
    p = os.path.join(dossier, nom)
    if not os.path.exists(p):
        return defaut
    try:
        with open(p, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return defaut


def ecrire(dossier, nom, obj):
    p = os.path.join(dossier, nom)
    tmp = p + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(obj, f, ensure_ascii=False, indent=1)
    os.replace(tmp, p)


# --- Caisse commune ---
def lire_caisse(dossier):
    k = lire(dossier, "caisse.json")
    return float(k["liquidites"]) if k else float(CAPITAL)


def ecrire_caisse(dossier, liq):
    ecrire(dossier, "caisse.json", {"capitalInitial": CAPITAL, "liquidites": round(liq, 2), "maj": texte_date(maintenant())})


def valeur_crypto(dossier):
    r = lire(dossier, "robot.json")
    if not r or not (r.get("marche") or {}).get("eurusdt"):
        return 0.0
    fx = float(r["marche"]["eurusdt"])
    return sum(p["quantite"] * (p.get("prixActuelUsdt") or p["prixEntreeUsdt"]) / fx for p in r.get("positions") or [])


def valeur_marches(dossier):
    r = lire(dossier, "robot-marches.json")
    if not r:
        return 0.0
    return sum(p["investiNet"] * (p.get("prixActuel") or p["prixEntree"]) / p["prixEntree"] for p in r.get("positions") or [])


# --- Stop-loss et stop suiveur ---
# Tant que l'objectif (+tp) n'est pas atteint, le stop-loss (-sl) protege. Une fois l'objectif atteint,
# on ne vend plus : le stop suit le plus haut atteint a une distance de 2/3 du stop-loss, sans jamais
# descendre sous +60 % de l'objectif (gain securise).
#
# Les bougies d'une minute ecoulees depuis la derniere verification sont parcourues dans l'ordre :
# un stop touche entre deux passages du robot est execute au prix du stop, ou au prix d'ouverture
# de la bougie si le cours a saute par-dessus, comme le ferait un vrai ordre stop place chez le courtier.
def niveau_stop(p, entree, sl):
    return p["stopSuiveur"] if p.get("stopSuiveur") else entree * (1 - sl)


def parcourir(p, bougies, entree, sl, tp):
    """bougies : liste de (ouverture, haut, bas, cloture), dans l'ordre. Met a jour plusHaut et stopSuiveur.
    Renvoie (prix_de_sortie, motif) si un stop est touche, sinon None."""
    dist = sl * 2 / 3
    for o, h, l, c in bougies:
        stop = niveau_stop(p, entree, sl)
        if l <= stop:
            return min(stop, o), ("stop suiveur, gain securise" if p.get("stopSuiveur") else "stop-loss")
        haut = max(p.get("plusHaut") or entree, h)
        p["plusHaut"] = haut
        if not p.get("stopSuiveur") and h >= entree * (1 + tp):
            p["stopSuiveur"] = max(entree * (1 + 0.6 * tp), haut * (1 - dist))
            p["objectifAtteint"] = True
        elif p.get("stopSuiveur"):
            p["stopSuiveur"] = max(p["stopSuiveur"], haut * (1 - dist))
        if p.get("stopSuiveur") and c <= p["stopSuiveur"]:
            return c, "stop suiveur, gain securise"
    return None


# --- Indicateurs ---
def ema(v, n):
    k = 2 / (n + 1)
    e = v[0]
    for x in v[1:]:
        e = x * k + e * (1 - k)
    return e


def rsi(c, n=14):
    """RSI de Wilder."""
    g = l = 0.0
    for i in range(1, len(c)):
        d = c[i] - c[i - 1]
        gi, li = max(d, 0.0), max(-d, 0.0)
        if i <= n:
            g += gi / n
            l += li / n
        else:
            g = (g * (n - 1) + gi) / n
            l = (l * (n - 1) + li) / n
    return 100.0 if l == 0 else 100 - 100 / (1 + g / l)


def atr(h, l, c, n=14):
    a = 0.0
    for i in range(1, len(c)):
        tr = max(h[i] - l[i], abs(h[i] - c[i - 1]), abs(l[i] - c[i - 1]))
        a = tr if i == 1 else (a * (n - 1) + tr) / n
    return a


def borner(liste, n):
    return liste[-n:] if len(liste) > n else liste
