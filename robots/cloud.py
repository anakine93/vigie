"""Lanceur cloud des robots Vigie (GitHub Actions, argent fictif, aucun ordre reel).

Un passage dure environ 5 h 40 sans interruption :
  - robot Crypto : scan complet toutes les 5 minutes, verification des stops toutes les 30 secondes ;
  - robot Marches : scan complet toutes les 10 minutes, verification des stops toutes les 60 secondes ;
  - publication de l'etat sur la branche Git "donnees" toutes les 2 minutes (lue par la page en ligne).
A la fin, le workflow relance aussitot le passage suivant ; une tache horaire sert de filet de securite.

Usage : python robots/cloud.py --donnees ./donnees [--duree 20400] [--sans-publication]
"""
import argparse, os, shutil, subprocess, sys, time, traceback
from commun import VERSION, lire, ecrire, maintenant, texte_date
import crypto, marches


def publier(dossier):
    """Recopie les avis des agents (branche claude/avis), puis pousse l'etat sur la branche donnees, sans historique."""
    depot = os.environ.get("DEPOT")
    if not depot:
        return
    def git(*args, ok=False):
        r = subprocess.run(["git", "-C", dossier, *args], capture_output=True, text=True)
        if r.returncode and not ok:
            raise RuntimeError("git %s : %s" % (args[0], r.stderr.strip()))
        return r
    shutil.rmtree(os.path.join(dossier, ".git"), ignore_errors=True)
    git("init", "-q", "-b", "donnees")
    git("config", "user.name", "Robots Vigie"); git("config", "user.email", "robots-vigie@users.noreply.github.com")
    git("remote", "add", "origin", depot)
    if git("fetch", "-q", "--depth", "1", "origin", "claude/avis", ok=True).returncode == 0:
        for f in ("orientations.json", "orientations-marches.json"):
            r = git("show", "FETCH_HEAD:" + f, ok=True)
            if r.returncode == 0 and r.stdout.strip():
                with open(os.path.join(dossier, f), "w", encoding="utf-8") as fh:
                    fh.write(r.stdout)
    for f in os.listdir(dossier):
        if f.endswith(".tmp"):
            os.remove(os.path.join(dossier, f))
    git("add", "-A")
    git("commit", "-q", "-m", "Etat des robots au " + maintenant().strftime("%d/%m/%Y %H:%M"))
    git("push", "-q", "--force", "origin", "donnees")


def remise_a_zero(dossier):
    """Nouvelles regles : l'ancienne simulation est archivee dans archives/v<n>/ et la caisse repart a 1 000 EUR."""
    v = (lire(dossier, "version.json") or {}).get("version", 1)
    if v >= VERSION:
        return
    arch = os.path.join(dossier, "archives", "v%d" % v)
    os.makedirs(arch, exist_ok=True)
    for f in ("robot.json", "robot-marches.json", "caisse.json", "robot.js", "robot-marches.js", "caisse.js"):
        p = os.path.join(dossier, f)
        if os.path.exists(p):
            shutil.move(p, os.path.join(arch, f))
    ecrire(dossier, "version.json", {"version": VERSION, "depuis": texte_date(maintenant()),
                                     "archive": "archives/v%d" % v})
    print("Nouvelles regles (version %d) : ancienne simulation archivee dans archives/v%d, caisse remise a 1 000 EUR" % (VERSION, v), flush=True)


def tenter(nom, f, dossier):
    try:
        f(dossier)
    except Exception as ex:
        print("[%s] Erreur %s : %s" % (maintenant().strftime("%H:%M:%S"), nom, ex), flush=True)
        traceback.print_exc(limit=2)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--donnees", default="donnees")
    ap.add_argument("--duree", type=int, default=20400)  # 5 h 40
    ap.add_argument("--sans-publication", action="store_true")
    a = ap.parse_args()
    dossier = os.path.abspath(a.donnees)
    os.makedirs(dossier, exist_ok=True)
    remise_a_zero(dossier)
    debut = time.time()
    prochain = {"crypto": 0, "marches": 0, "verifC": 0, "verifM": 0, "pub": 0}
    while True:
        t = time.time()
        fin = t - debut >= a.duree
        if t >= prochain["crypto"]:
            prochain["crypto"] = t + 300; tenter("crypto", crypto.cycle, dossier); prochain["verifC"] = time.time() + 30
        elif t >= prochain["verifC"]:
            prochain["verifC"] = t + 30; tenter("crypto (verification)", crypto.verif, dossier)
        if t >= prochain["marches"]:
            prochain["marches"] = t + 600; tenter("marches", marches.cycle, dossier); prochain["verifM"] = time.time() + 60
        elif t >= prochain["verifM"]:
            prochain["verifM"] = t + 60; tenter("marches (verification)", marches.verif, dossier)
        if not a.sans_publication and (fin or time.time() >= prochain["pub"]):
            prochain["pub"] = time.time() + 120
            try:
                publier(dossier)
            except Exception as ex:
                print("Publication impossible : %s" % ex, flush=True)
        if fin:
            break
        time.sleep(max(1.0, min(prochain.values()) - time.time()))
    print("Passage termine en %.0f min" % ((time.time() - debut) / 60), flush=True)


if __name__ == "__main__":
    sys.exit(main())
