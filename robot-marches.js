// Genere par robot-marches.ps1 - ne pas modifier a la main.
window.ROBOT_MARCHES = {
  "config": {
    "capitalInitial": 1000,
    "partBase": 0.1,
    "partFavorable": 0.15,
    "maxPositions": 4,
    "scoreMin": 5,
    "rsiMax": 75,
    "slAtr": 3,
    "tpAtr": 5,
    "slMin": 0.002,
    "slMax": 0.04,
    "dureeMaxH": 48,
    "cooldownH": 4,
    "reference": "^GSPC"
  },
  "debut": "2026-10-15T17:32:37",
  "liquidites": 578.61,
  "refInitial": 7726.45,
  "positions": [
    {
      "symbole": "RI.PA",
      "nom": "Pernod Ricard SA",
      "classe": "actions",
      "devise": "EUR",
      "montant": 71.36,
      "investiNet": 71.28757569498704,
      "prixEntree": 70.93545,
      "slPct": 0.008,
      "tpPct": 0.0134,
      "ouvertLe": "2026-11-06T16:46:37",
      "score": 5,
      "motif": "score 5 : tendance haussiere, volume x1.6, elan 1 h, RSI 69",
      "avis": "aucun",
      "prixActuel": 71.14,
      "plusHaut": 71.14,
      "stopSuiveur": null
    }
  ],
  "trades": [
    {
      "symbole": "AAPL",
      "nom": "Apple Inc.",
      "classe": "actions",
      "montant": 99.85,
      "prixEntree": 343.87185,
      "prixSortie": 342.48867,
      "devise": "USD",
      "ouvertLe": "2026-10-15T17:32:37",
      "fermeLe": "2026-10-16T20:14:00",
      "pnl": -0.6,
      "pnlPct": -0.6,
      "motifEntree": "score 5 : tendance haussiere, volume x2.6, RSI 54",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "symbole": "ML.PA",
      "nom": "MICHELIN",
      "classe": "actions",
      "montant": 99.85,
      "prixEntree": 34.006995,
      "prixSortie": 33.653165,
      "devise": "EUR",
      "ouvertLe": "2026-10-15T17:32:37",
      "fermeLe": "2026-10-16T20:15:23",
      "pnl": -1.24,
      "pnlPct": -1.24,
      "motifEntree": "score 6 : tendance haussiere, volume x3.5, elan 1 h, RSI 55",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "symbole": "RHM.DE",
      "nom": "Rheinmetall AG",
      "classe": "actions",
      "montant": 99.85,
      "prixEntree": 1031.9157,
      "prixSortie": 1048.6754,
      "devise": "EUR",
      "ouvertLe": "2026-10-15T17:32:37",
      "fermeLe": "2026-10-19T16:38:18",
      "pnl": 1.42,
      "pnlPct": 1.42,
      "motifEntree": "score 6 : tendance haussiere, volume x11.4, elan 1 h, RSI 67",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "symbole": "RI.PA",
      "nom": "Pernod Ricard SA",
      "classe": "actions",
      "montant": 99.85,
      "prixEntree": 66.6333,
      "prixSortie": 67.48624,
      "devise": "EUR",
      "ouvertLe": "2026-10-15T17:32:37",
      "fermeLe": "2026-10-19T16:38:18",
      "pnl": 1.08,
      "pnlPct": 1.08,
      "motifEntree": "score 5 : tendance haussiere, volume x2.6, RSI 52",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "symbole": "XOM",
      "nom": "ExxonMobil Holdings Corporation",
      "classe": "actions",
      "montant": 99.46,
      "prixEntree": 178.364138,
      "prixSortie": 177.25133,
      "devise": "USD",
      "ouvertLe": "2026-10-19T22:13:10",
      "fermeLe": "2026-10-20T19:52:17",
      "pnl": -0.82,
      "pnlPct": -0.82,
      "motifEntree": "score 5 : tendance haussiere, volume x6.1, RSI 58",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "symbole": "AUDUSD=X",
      "nom": "AUD/USD",
      "classe": "devises",
      "montant": 99.43,
      "prixEntree": 0.70247,
      "prixSortie": 0.70183,
      "devise": "USD",
      "ouvertLe": "2026-10-21T04:05:39",
      "fermeLe": "2026-10-22T11:48:03",
      "pnl": -0.11,
      "pnlPct": -0.11,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 69",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "symbole": "AIR.PA",
      "nom": "Airbus SE",
      "classe": "actions",
      "montant": 99.31,
      "prixEntree": 196.01796,
      "prixSortie": 195.88201,
      "devise": "EUR",
      "ouvertLe": "2026-10-21T15:11:30",
      "fermeLe": "2026-10-22T11:48:03",
      "pnl": -0.27,
      "pnlPct": -0.27,
      "motifEntree": "score 6 : tendance haussiere, volume x3.3, elan 1 h, RSI 69",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "symbole": "CS.PA",
      "nom": "AXA SA",
      "classe": "actions",
      "montant": 99.31,
      "prixEntree": 43.231605,
      "prixSortie": 42.27885,
      "devise": "EUR",
      "ouvertLe": "2026-10-21T15:11:30",
      "fermeLe": "2026-10-22T11:48:03",
      "pnl": -2.39,
      "pnlPct": -2.4,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 69",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "symbole": "SAF.PA",
      "nom": "Safran SA",
      "classe": "actions",
      "montant": 99.31,
      "prixEntree": 313.1565,
      "prixSortie": 307.74605,
      "devise": "EUR",
      "ouvertLe": "2026-10-21T15:11:30",
      "fermeLe": "2026-10-22T11:48:03",
      "pnl": -1.91,
      "pnlPct": -1.93,
      "motifEntree": "score 5 : tendance haussiere, volume x1.8, elan 1 h, RSI 53",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "symbole": "NG=F",
      "nom": "Gaz naturel",
      "classe": "matieres",
      "montant": 95.03,
      "prixEntree": 2.798398,
      "prixSortie": 2.765616,
      "devise": "USD",
      "ouvertLe": "2026-10-22T16:44:11",
      "fermeLe": "2026-10-23T02:37:09",
      "pnl": -1.21,
      "pnlPct": -1.27,
      "motifEntree": "score 5 : tendance haussiere, volume x1.6, elan 1 h, RSI 66",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "symbole": "GBPUSD=X",
      "nom": "GBP/USD",
      "classe": "devises",
      "montant": 95.57,
      "prixEntree": 1.340834,
      "prixSortie": 1.338866,
      "devise": "USD",
      "ouvertLe": "2026-10-23T02:37:09",
      "fermeLe": "2026-10-23T07:21:27",
      "pnl": -0.16,
      "pnlPct": -0.17,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 59",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "symbole": "AUDUSD=X",
      "nom": "AUD/USD",
      "classe": "devises",
      "montant": 94.44,
      "prixEntree": 0.70417,
      "prixSortie": 0.70263,
      "devise": "USD",
      "ouvertLe": "2026-10-23T21:18:20",
      "fermeLe": "2026-10-25T20:20:58",
      "pnl": -0.23,
      "pnlPct": -0.24,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 57",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "symbole": "OR.PA",
      "nom": "L'Oréal S.A.",
      "classe": "actions",
      "montant": 95.03,
      "prixEntree": 410.555175,
      "prixSortie": 435.9819,
      "devise": "EUR",
      "ouvertLe": "2026-10-22T16:44:11",
      "fermeLe": "2026-10-26T21:40:33",
      "pnl": 5.68,
      "pnlPct": 5.98,
      "motifEntree": "score 6 : tendance haussiere, volume x2.2, elan 1 h, RSI 63",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "symbole": "VOW3.DE",
      "nom": "Volkswagen AG",
      "classe": "actions",
      "montant": 84.82,
      "prixEntree": 69.93495,
      "prixSortie": 67.92602,
      "devise": "EUR",
      "ouvertLe": "2026-10-26T09:22:29",
      "fermeLe": "2026-10-27T11:17:26",
      "pnl": -2.6,
      "pnlPct": -3.07,
      "motifEntree": "score 6 : tendance haussiere, volume x2.5, elan 1 h, RSI 60",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "symbole": "AI.PA",
      "nom": "L'Air Liquide S.A.",
      "classe": "actions",
      "montant": 84.82,
      "prixEntree": 174.30711,
      "prixSortie": 173.25333,
      "devise": "EUR",
      "ouvertLe": "2026-10-26T09:22:29",
      "fermeLe": "2026-10-28T11:52:58",
      "pnl": -0.68,
      "pnlPct": -0.81,
      "motifEntree": "score 6 : tendance haussiere, volume x2.9, elan 1 h, RSI 62",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "symbole": "CRWD",
      "nom": "CrowdStrike Holdings, Inc.",
      "classe": "actions",
      "montant": 94.44,
      "prixEntree": 255.477675,
      "prixSortie": 264.877495,
      "devise": "USD",
      "ouvertLe": "2026-10-23T21:18:20",
      "fermeLe": "2026-10-28T17:56:44",
      "pnl": 3.27,
      "pnlPct": 3.47,
      "motifEntree": "score 5 : tendance haussiere, cassure du plus haut recent, elan 1 h",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "symbole": "ORA.PA",
      "nom": "Orange S.A.",
      "classe": "actions",
      "montant": 82.89,
      "prixEntree": 14.292142,
      "prixSortie": 14.217888,
      "devise": "EUR",
      "ouvertLe": "2026-10-27T11:17:26",
      "fermeLe": "2026-10-28T17:56:44",
      "pnl": -0.6,
      "pnlPct": -0.72,
      "motifEntree": "score 6 : tendance haussiere, volume x4.4, elan 1 h, RSI 58",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "symbole": "BN.PA",
      "nom": "Danone S.A.",
      "classe": "actions",
      "montant": 82.71,
      "prixEntree": 63.27162,
      "prixSortie": 64.34781,
      "devise": "EUR",
      "ouvertLe": "2026-10-28T17:56:44",
      "fermeLe": "2026-10-29T20:45:23",
      "pnl": 1.24,
      "pnlPct": 1.5,
      "motifEntree": "score 5 : tendance haussiere, volume x2.3, RSI 65",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "symbole": "ML.PA",
      "nom": "MICHELIN",
      "classe": "actions",
      "montant": 82.98,
      "prixEntree": 31.945965,
      "prixSortie": 32.10394,
      "devise": "EUR",
      "ouvertLe": "2026-10-27T16:55:48",
      "fermeLe": "2026-10-30T10:52:19",
      "pnl": 0.24,
      "pnlPct": 0.29,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 65",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "symbole": "RNO.PA",
      "nom": "Renault SA",
      "classe": "actions",
      "montant": 82.71,
      "prixEntree": 26.363175,
      "prixSortie": 27.66616,
      "devise": "EUR",
      "ouvertLe": "2026-10-28T17:56:44",
      "fermeLe": "2026-10-30T10:52:19",
      "pnl": 3.91,
      "pnlPct": 4.73,
      "motifEntree": "score 6 : tendance haussiere, volume x2.8, elan 1 h, RSI 54",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "symbole": "SAN.PA",
      "nom": "Sanofi",
      "classe": "actions",
      "montant": 82.71,
      "prixEntree": 75.547755,
      "prixSortie": 79.78009,
      "devise": "EUR",
      "ouvertLe": "2026-10-28T17:56:44",
      "fermeLe": "2026-10-30T17:23:26",
      "pnl": 4.46,
      "pnlPct": 5.39,
      "motifEntree": "score 5 : tendance haussiere, volume x4.1, RSI 57",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "symbole": "EL.PA",
      "nom": "ESSILORLUXOTTICA",
      "classe": "actions",
      "montant": 77.71,
      "prixEntree": 181.6908,
      "prixSortie": 184.457725,
      "devise": "EUR",
      "ouvertLe": "2026-10-30T10:52:19",
      "fermeLe": "2026-11-02T14:13:30",
      "pnl": 1.03,
      "pnlPct": 1.32,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 59",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "symbole": "PUB.PA",
      "nom": "Publicis Groupe S.A.",
      "classe": "actions",
      "montant": 77.71,
      "prixEntree": 100.35015,
      "prixSortie": 100.399775,
      "devise": "EUR",
      "ouvertLe": "2026-10-30T10:52:19",
      "fermeLe": "2026-11-02T14:13:30",
      "pnl": -0.11,
      "pnlPct": -0.15,
      "motifEntree": "score 5 : tendance haussiere, volume x4.8, RSI 63",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "symbole": "PL=F",
      "nom": "Platine",
      "classe": "matieres",
      "montant": 72.05,
      "prixEntree": 1498.749,
      "prixSortie": 1516.2415,
      "devise": "USD",
      "ouvertLe": "2026-11-04T19:38:59",
      "fermeLe": "2026-11-06T02:11:25",
      "pnl": 0.77,
      "pnlPct": 1.07,
      "motifEntree": "score 5 : tendance haussiere, volume x2.1, RSI 67",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "symbole": "ZW=F",
      "nom": "Ble",
      "classe": "matieres",
      "montant": 72.14,
      "prixEntree": 601.550625,
      "prixSortie": 596.20175,
      "devise": "USX",
      "ouvertLe": "2026-11-04T12:10:32",
      "fermeLe": "2026-11-06T08:56:58",
      "pnl": -0.71,
      "pnlPct": -0.98,
      "motifEntree": "score 5 : tendance haussiere, volume x4.1, elan 1 h",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "symbole": "PUB.PA",
      "nom": "Publicis Groupe S.A.",
      "classe": "actions",
      "montant": 71.21,
      "prixEntree": 105.0525,
      "prixSortie": 102.298825,
      "devise": "EUR",
      "ouvertLe": "2026-11-05T14:30:25",
      "fermeLe": "2026-11-06T16:46:37",
      "pnl": -2.01,
      "pnlPct": -2.82,
      "motifEntree": "score 5 : tendance haussiere, volume x3.7, RSI 60",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    }
  ],
  "courbe": [
    {
      "t": "2026-10-15T17:32:37",
      "valeur": 997.91,
      "ref": 1000.0
    },
    {
      "t": "2026-10-15T17:54:56",
      "valeur": 999.33,
      "ref": 999.62
    },
    {
      "t": "2026-10-15T21:23:00",
      "valeur": 1003.17,
      "ref": 1003.52
    },
    {
      "t": "2026-10-16T00:33:02",
      "valeur": 998.41,
      "ref": 1002.28
    },
    {
      "t": "2026-10-16T02:43:09",
      "valeur": 997.75,
      "ref": 1002.28
    },
    {
      "t": "2026-10-16T07:08:11",
      "valeur": 1001.08,
      "ref": 1002.28
    },
    {
      "t": "2026-10-16T11:46:11",
      "valeur": 1007.06,
      "ref": 1002.28
    },
    {
      "t": "2026-10-16T16:21:58",
      "valeur": 1006.5,
      "ref": 1001.22
    },
    {
      "t": "2026-10-16T20:14:00",
      "valeur": 992.05,
      "ref": 990.87
    },
    {
      "t": "2026-10-16T23:17:00",
      "valeur": 985.82,
      "ref": 991.33
    },
    {
      "t": "2026-10-17T01:41:54",
      "valeur": 979.88,
      "ref": 991.33
    },
    {
      "t": "2026-10-17T03:35:26",
      "valeur": 979.88,
      "ref": 991.33
    },
    {
      "t": "2026-10-17T08:09:26",
      "valeur": 979.39,
      "ref": 991.33
    },
    {
      "t": "2026-10-17T12:42:33",
      "valeur": 977.82,
      "ref": 991.33
    },
    {
      "t": "2026-10-17T15:58:00",
      "valeur": 976.16,
      "ref": 991.33
    },
    {
      "t": "2026-10-17T18:57:10",
      "valeur": 990.65,
      "ref": 991.33
    },
    {
      "t": "2026-10-17T21:07:41",
      "valeur": 998.96,
      "ref": 991.33
    },
    {
      "t": "2026-10-17T23:26:58",
      "valeur": 1000.24,
      "ref": 991.33
    },
    {
      "t": "2026-10-18T01:20:40",
      "valeur": 985.44,
      "ref": 991.33
    },
    {
      "t": "2026-10-18T03:14:57",
      "valeur": 986.03,
      "ref": 991.33
    },
    {
      "t": "2026-10-18T08:01:15",
      "valeur": 985.12,
      "ref": 991.33
    },
    {
      "t": "2026-10-18T12:55:09",
      "valeur": 983.79,
      "ref": 991.33
    },
    {
      "t": "2026-10-18T16:19:28",
      "valeur": 974.5,
      "ref": 991.33
    },
    {
      "t": "2026-10-18T19:27:02",
      "valeur": 968.05,
      "ref": 991.33
    },
    {
      "t": "2026-10-18T21:34:09",
      "valeur": 967.56,
      "ref": 991.33
    },
    {
      "t": "2026-10-18T23:50:35",
      "valeur": 966.21,
      "ref": 991.33
    },
    {
      "t": "2026-10-19T01:46:01",
      "valeur": 967.26,
      "ref": 991.33
    },
    {
      "t": "2026-10-19T03:51:14",
      "valeur": 985.1,
      "ref": 991.33
    },
    {
      "t": "2026-10-19T09:04:01",
      "valeur": 1005.78,
      "ref": 991.33
    },
    {
      "t": "2026-10-19T16:38:18",
      "valeur": 998.27,
      "ref": 996.78
    },
    {
      "t": "2026-10-19T22:13:10",
      "valeur": 994.46,
      "ref": 995.38
    },
    {
      "t": "2026-10-20T01:45:55",
      "valeur": 997.0,
      "ref": 995.38
    },
    {
      "t": "2026-10-20T04:10:07",
      "valeur": 986.27,
      "ref": 995.38
    },
    {
      "t": "2026-10-20T09:34:15",
      "valeur": 984.69,
      "ref": 995.38
    },
    {
      "t": "2026-10-20T14:57:39",
      "valeur": 986.17,
      "ref": 995.38
    },
    {
      "t": "2026-10-20T19:52:17",
      "valeur": 995.68,
      "ref": 999.53
    },
    {
      "t": "2026-10-20T23:01:30",
      "valeur": 998.31,
      "ref": 998.2
    },
    {
      "t": "2026-10-21T01:48:14",
      "valeur": 996.08,
      "ref": 998.2
    },
    {
      "t": "2026-10-21T04:05:39",
      "valeur": 994.29,
      "ref": 998.2
    },
    {
      "t": "2026-10-21T09:32:09",
      "valeur": 995.79,
      "ref": 998.2
    },
    {
      "t": "2026-10-21T15:11:30",
      "valeur": 992.63,
      "ref": 998.2
    },
    {
      "t": "2026-10-21T20:04:26",
      "valeur": 993.71,
      "ref": 1004.82
    },
    {
      "t": "2026-10-21T23:37:14",
      "valeur": 992.12,
      "ref": 1003.98
    },
    {
      "t": "2026-10-22T02:12:40",
      "valeur": 982.56,
      "ref": 1003.98
    },
    {
      "t": "2026-10-22T06:53:32",
      "valeur": 971.1,
      "ref": 1003.98
    },
    {
      "t": "2026-10-22T11:48:03",
      "valeur": 956.39,
      "ref": 1003.98
    },
    {
      "t": "2026-10-22T16:44:11",
      "valeur": 950.04,
      "ref": 990.47
    },
    {
      "t": "2026-10-22T20:53:59",
      "valeur": 954.85,
      "ref": 989.22
    },
    {
      "t": "2026-10-23T00:03:42",
      "valeur": 946.83,
      "ref": 991.84
    },
    {
      "t": "2026-10-23T02:37:09",
      "valeur": 955.67,
      "ref": 991.84
    },
    {
      "t": "2026-10-23T07:21:27",
      "valeur": 953.63,
      "ref": 991.84
    },
    {
      "t": "2026-10-23T12:17:07",
      "valeur": 954.11,
      "ref": 991.84
    },
    {
      "t": "2026-10-23T17:12:54",
      "valeur": 950.22,
      "ref": 989.75
    },
    {
      "t": "2026-10-23T21:18:20",
      "valeur": 944.19,
      "ref": 987.55
    },
    {
      "t": "2026-10-24T00:23:10",
      "valeur": 946.31,
      "ref": 986.7
    },
    {
      "t": "2026-10-24T02:53:49",
      "valeur": 944.94,
      "ref": 986.7
    },
    {
      "t": "2026-10-24T07:18:38",
      "valeur": 944.95,
      "ref": 986.7
    },
    {
      "t": "2026-10-24T11:39:00",
      "valeur": 925.09,
      "ref": 986.7
    },
    {
      "t": "2026-10-24T15:36:39",
      "valeur": 910.99,
      "ref": 986.7
    },
    {
      "t": "2026-10-24T18:57:24",
      "valeur": 904.43,
      "ref": 986.7
    },
    {
      "t": "2026-10-24T21:20:17",
      "valeur": 893.63,
      "ref": 986.7
    },
    {
      "t": "2026-10-24T23:42:28",
      "valeur": 888.93,
      "ref": 986.7
    },
    {
      "t": "2026-10-25T01:46:31",
      "valeur": 883.34,
      "ref": 986.7
    },
    {
      "t": "2026-10-25T02:46:26",
      "valeur": 883.31,
      "ref": 986.7
    },
    {
      "t": "2026-10-25T07:59:39",
      "valeur": 874.91,
      "ref": 986.7
    },
    {
      "t": "2026-10-25T13:30:45",
      "valeur": 873.3,
      "ref": 986.7
    },
    {
      "t": "2026-10-25T17:45:32",
      "valeur": 870.49,
      "ref": 986.7
    },
    {
      "t": "2026-10-25T20:19:41",
      "valeur": 869.99,
      "ref": 986.7
    },
    {
      "t": "2026-10-25T22:56:12",
      "valeur": 864.42,
      "ref": 986.7
    },
    {
      "t": "2026-10-26T00:54:05",
      "valeur": 864.0,
      "ref": 986.7
    },
    {
      "t": "2026-10-26T03:53:11",
      "valeur": 852.69,
      "ref": 986.7
    },
    {
      "t": "2026-10-26T09:22:29",
      "valeur": 847.92,
      "ref": 986.7
    },
    {
      "t": "2026-10-26T16:21:03",
      "valeur": 851.8,
      "ref": 996.51
    },
    {
      "t": "2026-10-26T21:39:13",
      "valeur": 843.87,
      "ref": 993.57
    },
    {
      "t": "2026-10-27T01:06:00",
      "valeur": 844.62,
      "ref": 993.57
    },
    {
      "t": "2026-10-27T05:57:17",
      "valeur": 838.4,
      "ref": 993.57
    },
    {
      "t": "2026-10-27T11:17:26",
      "valeur": 828.78,
      "ref": 993.57
    },
    {
      "t": "2026-10-27T16:55:48",
      "valeur": 829.66,
      "ref": 1000.41
    },
    {
      "t": "2026-10-27T21:28:16",
      "valeur": 830.67,
      "ref": 999.5
    },
    {
      "t": "2026-10-28T00:56:56",
      "valeur": 834.0,
      "ref": 999.5
    },
    {
      "t": "2026-10-28T05:48:07",
      "valeur": 835.45,
      "ref": 999.5
    },
    {
      "t": "2026-10-28T11:52:58",
      "valeur": 834.15,
      "ref": 999.5
    },
    {
      "t": "2026-10-28T17:56:44",
      "valeur": 826.72,
      "ref": 1002.13
    },
    {
      "t": "2026-10-28T22:32:43",
      "valeur": 821.6,
      "ref": 1002.27
    },
    {
      "t": "2026-10-29T02:12:52",
      "valeur": 816.73,
      "ref": 1002.27
    },
    {
      "t": "2026-10-29T08:10:15",
      "valeur": 814.4,
      "ref": 1002.27
    },
    {
      "t": "2026-10-29T15:19:27",
      "valeur": 814.89,
      "ref": 999.26
    },
    {
      "t": "2026-10-29T20:44:05",
      "valeur": 811.36,
      "ref": 997.55
    },
    {
      "t": "2026-10-30T00:39:34",
      "valeur": 782.72,
      "ref": 999.22
    },
    {
      "t": "2026-10-30T03:59:00",
      "valeur": 780.08,
      "ref": 999.22
    },
    {
      "t": "2026-10-30T10:52:19",
      "valeur": 776.9,
      "ref": 999.22
    },
    {
      "t": "2026-10-30T17:23:26",
      "valeur": 775.05,
      "ref": 982.89
    },
    {
      "t": "2026-10-30T21:57:41",
      "valeur": 779.45,
      "ref": 981.05
    },
    {
      "t": "2026-10-31T01:35:37",
      "valeur": 776.67,
      "ref": 981.05
    },
    {
      "t": "2026-10-31T07:16:02",
      "valeur": 775.56,
      "ref": 981.05
    },
    {
      "t": "2026-10-31T13:46:58",
      "valeur": 771.87,
      "ref": 981.05
    },
    {
      "t": "2026-10-31T18:24:21",
      "valeur": 768.24,
      "ref": 981.05
    },
    {
      "t": "2026-10-31T21:34:55",
      "valeur": 768.4,
      "ref": 981.05
    },
    {
      "t": "2026-11-01T00:42:08",
      "valeur": 765.12,
      "ref": 981.05
    },
    {
      "t": "2026-11-01T03:37:38",
      "valeur": 763.96,
      "ref": 981.05
    },
    {
      "t": "2026-11-01T10:43:44",
      "valeur": 755.93,
      "ref": 981.05
    },
    {
      "t": "2026-11-01T17:27:36",
      "valeur": 749.33,
      "ref": 981.05
    },
    {
      "t": "2026-11-01T21:44:18",
      "valeur": 749.43,
      "ref": 981.05
    },
    {
      "t": "2026-11-02T00:56:09",
      "valeur": 750.67,
      "ref": 981.05
    },
    {
      "t": "2026-11-02T05:56:22",
      "valeur": 747.16,
      "ref": 981.05
    },
    {
      "t": "2026-11-02T14:13:30",
      "valeur": 742.0,
      "ref": 981.05
    },
    {
      "t": "2026-11-02T23:21:15",
      "valeur": 731.41,
      "ref": 976.05
    },
    {
      "t": "2026-11-03T04:32:40",
      "valeur": 731.41,
      "ref": 976.05
    },
    {
      "t": "2026-11-03T12:17:44",
      "valeur": 731.05,
      "ref": 976.05
    },
    {
      "t": "2026-11-03T19:30:39",
      "valeur": 730.17,
      "ref": 981.84
    },
    {
      "t": "2026-11-04T00:37:54",
      "valeur": 729.97,
      "ref": 979.61
    },
    {
      "t": "2026-11-04T04:15:35",
      "valeur": 722.87,
      "ref": 979.61
    },
    {
      "t": "2026-11-04T12:10:32",
      "valeur": 721.36,
      "ref": 979.61
    },
    {
      "t": "2026-11-04T19:38:59",
      "valeur": 720.43,
      "ref": 996.74
    },
    {
      "t": "2026-11-05T00:56:52",
      "valeur": 723.33,
      "ref": 995.1
    },
    {
      "t": "2026-11-05T06:39:20",
      "valeur": 722.65,
      "ref": 995.1
    },
    {
      "t": "2026-11-05T14:30:25",
      "valeur": 711.95,
      "ref": 995.1
    },
    {
      "t": "2026-11-05T21:48:06",
      "valeur": 711.45,
      "ref": 954.8
    },
    {
      "t": "2026-11-06T02:11:25",
      "valeur": 708.28,
      "ref": 951.76
    },
    {
      "t": "2026-11-06T08:56:58",
      "valeur": 717.77,
      "ref": 951.76
    },
    {
      "t": "2026-11-06T16:46:37",
      "valeur": 713.48,
      "ref": 960.15
    },
    {
      "t": "2026-11-06T22:07:22",
      "valeur": 716.03,
      "ref": 954.75
    },
    {
      "t": "2026-11-07T01:53:36",
      "valeur": 726.11,
      "ref": 954.75
    },
    {
      "t": "2026-11-07T07:47:28",
      "valeur": 724.41,
      "ref": 954.75
    },
    {
      "t": "2026-11-07T14:37:01",
      "valeur": 722.54,
      "ref": 954.75
    }
  ],
  "journal": [
    {
      "t": "2026-10-15T17:32:37",
      "texte": "Achat Rheinmetall AG pour 99.85 EUR (stop -1.9 %, gain +3.1 % ; score 6 : tendance haussiere, volume x11.4, elan 1 h, RSI 67)"
    },
    {
      "t": "2026-10-15T17:32:37",
      "texte": "Achat MICHELIN pour 99.85 EUR (stop -0.7 %, gain +1.2 % ; score 6 : tendance haussiere, volume x3.5, elan 1 h, RSI 55)"
    },
    {
      "t": "2026-10-15T17:32:37",
      "texte": "Achat Pernod Ricard SA pour 99.85 EUR (stop -1.5 %, gain +2.5 % ; score 5 : tendance haussiere, volume x2.6, RSI 52)"
    },
    {
      "t": "2026-10-15T17:32:37",
      "texte": "Achat Apple Inc. pour 99.85 EUR (stop -1.3 %, gain +2.1 % ; score 5 : tendance haussiere, volume x2.6, RSI 54)"
    },
    {
      "t": "2026-10-16T11:46:11",
      "texte": "Objectif atteint sur Rheinmetall AG : stop suiveur active, gain securise a +3.2 %"
    },
    {
      "t": "2026-10-16T11:46:11",
      "texte": "Objectif atteint sur Pernod Ricard SA : stop suiveur active, gain securise a +1.8 %"
    },
    {
      "t": "2026-10-16T20:14:00",
      "texte": "Vente Apple Inc. (tendance cassee) : -0.60 EUR (-0.6 %)"
    },
    {
      "t": "2026-10-16T20:15:23",
      "texte": "Vente MICHELIN (stop-loss) : -1.24 EUR (-1.2 %)"
    },
    {
      "t": "2026-10-19T16:38:18",
      "texte": "Vente Rheinmetall AG (stop suiveur, gain securise) : +1.42 EUR (+1.4 %)"
    },
    {
      "t": "2026-10-19T16:38:18",
      "texte": "Vente Pernod Ricard SA (stop suiveur, gain securise) : +1.08 EUR (+1.1 %)"
    },
    {
      "t": "2026-10-19T22:13:10",
      "texte": "Achat ExxonMobil Holdings Corporation pour 99.46 EUR (stop -0.6 %, gain +0.9 % ; score 5 : tendance haussiere, volume x6.1, RSI 58)"
    },
    {
      "t": "2026-10-20T19:52:17",
      "texte": "Vente ExxonMobil Holdings Corporation (stop-loss) : -0.82 EUR (-0.8 %)"
    },
    {
      "t": "2026-10-21T04:05:39",
      "texte": "Achat AUD/USD pour 99.43 EUR (stop -0.2 %, gain +0.3 % ; score 6 : tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 69)"
    },
    {
      "t": "2026-10-21T15:11:30",
      "texte": "Achat Airbus SE pour 99.31 EUR (stop -0.7 %, gain +1.2 % ; score 6 : tendance haussiere, volume x3.3, elan 1 h, RSI 69)"
    },
    {
      "t": "2026-10-21T15:11:30",
      "texte": "Achat AXA SA pour 99.31 EUR (stop -0.3 %, gain +0.5 % ; score 6 : tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 69)"
    },
    {
      "t": "2026-10-21T15:11:30",
      "texte": "Achat Safran SA pour 99.31 EUR (stop -0.7 %, gain +1.2 % ; score 5 : tendance haussiere, volume x1.8, elan 1 h, RSI 53)"
    },
    {
      "t": "2026-10-21T20:04:26",
      "texte": "Objectif atteint sur Airbus SE : stop suiveur active, gain securise a +0.9 %"
    },
    {
      "t": "2026-10-22T11:48:03",
      "texte": "Vente AUD/USD (tendance cassee) : -0.11 EUR (-0.1 %)"
    },
    {
      "t": "2026-10-22T11:48:03",
      "texte": "Vente Airbus SE (stop suiveur, gain securise) : -0.27 EUR (-0.3 %)"
    },
    {
      "t": "2026-10-22T11:48:03",
      "texte": "Vente AXA SA (stop-loss) : -2.39 EUR (-2.4 %)"
    },
    {
      "t": "2026-10-22T11:48:03",
      "texte": "Vente Safran SA (stop-loss) : -1.91 EUR (-1.9 %)"
    },
    {
      "t": "2026-10-22T16:44:11",
      "texte": "Achat L'Oréal S.A. pour 95.03 EUR (stop -1.0 %, gain +1.6 % ; score 6 : tendance haussiere, volume x2.2, elan 1 h, RSI 63)"
    },
    {
      "t": "2026-10-22T16:44:11",
      "texte": "Achat Gaz naturel pour 95.03 EUR (stop -2.3 %, gain +3.9 % ; score 5 : tendance haussiere, volume x1.6, elan 1 h, RSI 66)"
    },
    {
      "t": "2026-10-23T02:37:09",
      "texte": "Vente Gaz naturel (tendance cassee) : -1.21 EUR (-1.3 %)"
    },
    {
      "t": "2026-10-23T02:37:09",
      "texte": "Achat GBP/USD pour 95.57 EUR (stop -0.2 %, gain +0.3 % ; score 6 : tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 59)"
    },
    {
      "t": "2026-10-23T07:21:27",
      "texte": "Vente GBP/USD (tendance cassee) : -0.16 EUR (-0.2 %)"
    },
    {
      "t": "2026-10-23T12:17:07",
      "texte": "Objectif atteint sur L'Oréal S.A. : stop suiveur active, gain securise a +4.9 %"
    },
    {
      "t": "2026-10-23T21:18:20",
      "texte": "Achat AUD/USD pour 94.44 EUR (stop -0.2 %, gain +0.3 % ; score 6 : tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 57)"
    },
    {
      "t": "2026-10-23T21:18:20",
      "texte": "Achat CrowdStrike Holdings, Inc. pour 94.44 EUR (stop -1.2 %, gain +2.0 % ; score 5 : tendance haussiere, cassure du plus haut recent, elan 1 h)"
    },
    {
      "t": "2026-10-25T20:20:58",
      "texte": "Vente AUD/USD (stop-loss) : -0.23 EUR (-0.2 %)"
    },
    {
      "t": "2026-10-26T09:22:29",
      "texte": "Achat Volkswagen AG pour 84.82 EUR (stop -1.6 %, gain +2.6 % ; score 6 : tendance haussiere, volume x2.5, elan 1 h, RSI 60)"
    },
    {
      "t": "2026-10-26T09:22:29",
      "texte": "Achat L'Air Liquide S.A. pour 84.82 EUR (stop -0.7 %, gain +1.2 % ; score 6 : tendance haussiere, volume x2.9, elan 1 h, RSI 62)"
    },
    {
      "t": "2026-10-26T16:21:03",
      "texte": "Objectif atteint sur CrowdStrike Holdings, Inc. : stop suiveur active, gain securise a +1.8 %"
    },
    {
      "t": "2026-10-26T21:40:33",
      "texte": "Vente L'Oréal S.A. (stop suiveur, gain securise) : +5.68 EUR (+6.0 %)"
    },
    {
      "t": "2026-10-27T11:17:26",
      "texte": "Vente Volkswagen AG (stop-loss) : -2.60 EUR (-3.1 %)"
    },
    {
      "t": "2026-10-27T11:17:26",
      "texte": "Achat Orange S.A. pour 82.89 EUR (stop -1.7 %, gain +2.8 % ; score 6 : tendance haussiere, volume x4.4, elan 1 h, RSI 58)"
    },
    {
      "t": "2026-10-27T16:55:48",
      "texte": "Achat MICHELIN pour 82.98 EUR (stop -0.6 %, gain +1.0 % ; score 6 : tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 65)"
    },
    {
      "t": "2026-10-28T11:52:58",
      "texte": "Vente L'Air Liquide S.A. (duree maximale atteinte) : -0.68 EUR (-0.8 %)"
    },
    {
      "t": "2026-10-28T17:56:44",
      "texte": "Vente CrowdStrike Holdings, Inc. (stop suiveur, gain securise) : +3.27 EUR (+3.5 %)"
    },
    {
      "t": "2026-10-28T17:56:44",
      "texte": "Vente Orange S.A. (tendance cassee) : -0.60 EUR (-0.7 %)"
    },
    {
      "t": "2026-10-28T17:56:44",
      "texte": "Achat Renault SA pour 82.71 EUR (stop -1.1 %, gain +1.8 % ; score 6 : tendance haussiere, volume x2.8, elan 1 h, RSI 54)"
    },
    {
      "t": "2026-10-28T17:56:44",
      "texte": "Achat Danone S.A. pour 82.71 EUR (stop -0.9 %, gain +1.5 % ; score 5 : tendance haussiere, volume x2.3, RSI 65)"
    },
    {
      "t": "2026-10-28T17:56:44",
      "texte": "Achat Sanofi pour 82.71 EUR (stop -1.0 %, gain +1.7 % ; score 5 : tendance haussiere, volume x4.1, RSI 57)"
    },
    {
      "t": "2026-10-29T15:19:27",
      "texte": "Objectif atteint sur Renault SA : stop suiveur active, gain securise a +5.9 %"
    },
    {
      "t": "2026-10-29T15:19:27",
      "texte": "Objectif atteint sur Danone S.A. : stop suiveur active, gain securise a +2.4 %"
    },
    {
      "t": "2026-10-29T20:45:23",
      "texte": "Vente Danone S.A. (stop suiveur, gain securise) : +1.24 EUR (+1.5 %)"
    },
    {
      "t": "2026-10-30T10:52:19",
      "texte": "Vente MICHELIN (duree maximale atteinte) : +0.24 EUR (+0.3 %)"
    },
    {
      "t": "2026-10-30T10:52:19",
      "texte": "Vente Renault SA (stop suiveur, gain securise) : +3.91 EUR (+4.7 %)"
    },
    {
      "t": "2026-10-30T10:52:19",
      "texte": "Objectif atteint sur Sanofi : stop suiveur active, gain securise a +5.6 %"
    },
    {
      "t": "2026-10-30T10:52:19",
      "texte": "Achat ESSILORLUXOTTICA pour 77.71 EUR (stop -1.5 %, gain +2.5 % ; score 6 : tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 59)"
    },
    {
      "t": "2026-10-30T10:52:19",
      "texte": "Achat Publicis Groupe S.A. pour 77.71 EUR (stop -1.2 %, gain +2.0 % ; score 5 : tendance haussiere, volume x4.8, RSI 63)"
    },
    {
      "t": "2026-10-30T17:23:26",
      "texte": "Vente Sanofi (stop suiveur, gain securise) : +4.46 EUR (+5.4 %)"
    },
    {
      "t": "2026-11-02T14:13:30",
      "texte": "Vente ESSILORLUXOTTICA (duree maximale atteinte) : +1.03 EUR (+1.3 %)"
    },
    {
      "t": "2026-11-02T14:13:30",
      "texte": "Vente Publicis Groupe S.A. (duree maximale atteinte) : -0.11 EUR (-0.1 %)"
    },
    {
      "t": "2026-11-04T12:10:32",
      "texte": "Achat Ble pour 72.14 EUR (stop -0.7 %, gain +1.2 % ; score 5 : tendance haussiere, volume x4.1, elan 1 h)"
    },
    {
      "t": "2026-11-04T19:38:59",
      "texte": "Achat Platine pour 72.05 EUR (stop -1.3 %, gain +2.2 % ; score 5 : tendance haussiere, volume x2.1, RSI 67)"
    },
    {
      "t": "2026-11-05T14:30:25",
      "texte": "Achat Publicis Groupe S.A. pour 71.21 EUR (stop -0.5 %, gain +0.9 % ; score 5 : tendance haussiere, volume x3.7, RSI 60)"
    },
    {
      "t": "2026-11-06T02:11:25",
      "texte": "Vente Platine (tendance cassee) : +0.77 EUR (+1.1 %)"
    },
    {
      "t": "2026-11-06T08:56:58",
      "texte": "Vente Ble (stop-loss) : -0.71 EUR (-1.0 %)"
    },
    {
      "t": "2026-11-06T16:46:37",
      "texte": "Vente Publicis Groupe S.A. (stop-loss) : -2.01 EUR (-2.8 %)"
    },
    {
      "t": "2026-11-06T16:46:37",
      "texte": "Achat Pernod Ricard SA pour 71.36 EUR (stop -0.8 %, gain +1.3 % ; score 5 : tendance haussiere, volume x1.6, elan 1 h, RSI 69)"
    }
  ],
  "signaux": [
    {
      "symbole": "RNO.PA",
      "nom": "Renault SA",
      "classe": "actions",
      "prix": 28.9,
      "devise": "EUR",
      "ouvert": false,
      "r1h": 0.52,
      "r4h": 1.55,
      "rsi": 68.2,
      "volRatio": 0.68,
      "atrPct": 0.395,
      "score": 6,
      "raisons": "tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 68",
      "avis": "",
      "spark": [
        28.639999,
        28.790001,
        28.77,
        28.57,
        28.43,
        28.540001,
        28.59,
        28.469999,
        28.6,
        28.719999,
        28.610001,
        28.469999,
        28.32,
        28.49,
        28.42,
        28.48,
        28.49,
        28.58,
        28.48,
        28.43,
        28.73,
        28.84,
        28.73,
        28.84,
        28.9
      ]
    },
    {
      "symbole": "ZC=F",
      "nom": "Mais",
      "classe": "matieres",
      "prix": 441.5,
      "devise": "USX",
      "ouvert": false,
      "r1h": 0.11,
      "r4h": 0.34,
      "rsi": 69.2,
      "volRatio": 3.88,
      "atrPct": 0.263,
      "score": 5,
      "raisons": "tendance haussiere, volume x3.9, RSI 69",
      "avis": "",
      "spark": [
        440.75,
        440.75,
        441.25,
        441.0,
        440.5,
        440.0,
        440.75,
        440.75,
        441.0,
        440.5,
        439.5,
        440.0,
        439.5,
        440.25,
        440.25,
        440.75,
        439.0,
        440.75,
        440.5,
        441.0,
        441.5,
        441.25,
        441.5,
        441.5,
        441.5
      ]
    },
    {
      "symbole": "RI.PA",
      "nom": "Pernod Ricard SA",
      "classe": "actions",
      "prix": 71.14,
      "devise": "EUR",
      "ouvert": false,
      "r1h": 0.62,
      "r4h": 1.28,
      "rsi": 65.9,
      "volRatio": 1.24,
      "atrPct": 0.398,
      "score": 4,
      "raisons": "tendance haussiere, elan 1 h, RSI 66",
      "avis": "",
      "spark": [
        70.620003,
        70.860001,
        70.900002,
        71.220001,
        71.379997,
        71.720001,
        71.300003,
        70.860001,
        70.760002,
        70.519997,
        70.519997,
        70.18,
        70.199997,
        70.199997,
        70.139999,
        70.300003,
        70.339996,
        70.360001,
        70.139999,
        70.199997,
        70.68,
        70.879997,
        70.900002,
        70.800003,
        71.14
      ]
    },
    {
      "symbole": "IONQ",
      "nom": "IonQ, Inc.",
      "classe": "actions",
      "prix": 32.62,
      "devise": "USD",
      "ouvert": false,
      "r1h": 1.21,
      "r4h": 6.67,
      "rsi": 91.7,
      "volRatio": 2.15,
      "atrPct": 1.144,
      "score": 4,
      "raisons": "tendance haussiere, cassure du plus haut recent, volume x2.2, elan 1 h, RSI 92 surachete",
      "avis": "",
      "spark": [
        25.27,
        26.51,
        26.3382,
        26.099899,
        25.790001,
        26.08,
        26.165001,
        26.344999,
        26.955,
        26.469999,
        26.48,
        29.215799,
        29.23,
        29.73,
        29.885,
        30.32,
        31.165001,
        30.77,
        31.084999,
        31.305,
        31.615,
        31.975,
        32.195,
        32.584999,
        32.62
      ]
    },
    {
      "symbole": "VIE.PA",
      "nom": "Veolia Environnement SA",
      "classe": "actions",
      "prix": 33.78,
      "devise": "EUR",
      "ouvert": false,
      "r1h": 0.36,
      "r4h": 0.99,
      "rsi": 69.1,
      "volRatio": 1.14,
      "atrPct": 0.29,
      "score": 4,
      "raisons": "tendance haussiere, elan 1 h, RSI 69",
      "avis": "",
      "spark": [
        33.66,
        33.740002,
        33.619999,
        33.650002,
        33.610001,
        33.91,
        33.880001,
        33.360001,
        33.59,
        33.790001,
        33.759998,
        33.59,
        33.509998,
        33.57,
        33.490002,
        33.540001,
        33.459999,
        33.52,
        33.490002,
        33.419998,
        33.540001,
        33.73,
        33.740002,
        33.790001,
        33.78
      ]
    },
    {
      "symbole": "AFRM",
      "nom": "Affirm Holdings, Inc.",
      "classe": "actions",
      "prix": 68.11,
      "devise": "USD",
      "ouvert": false,
      "r1h": 0.94,
      "r4h": -0.0,
      "rsi": 65.3,
      "volRatio": 2.1,
      "atrPct": 0.916,
      "score": 4,
      "raisons": "volume x2.1, elan 1 h, RSI 65",
      "avis": "",
      "spark": [
        69.535004,
        70.389999,
        70.050003,
        69.989998,
        69.504997,
        69.82,
        68.550003,
        68.474998,
        69.962502,
        69.720001,
        69.400002,
        69.949997,
        68.800003,
        68.584999,
        67.790001,
        68.595001,
        68.18,
        67.190002,
        67.464996,
        67.980003,
        67.419998,
        67.548103,
        67.400002,
        68.080002,
        68.11
      ]
    },
    {
      "symbole": "RIVN",
      "nom": "Rivian Automotive, Inc.",
      "classe": "actions",
      "prix": 13.61,
      "devise": "USD",
      "ouvert": false,
      "r1h": 0.96,
      "r4h": 0.74,
      "rsi": 77.0,
      "volRatio": 0.73,
      "atrPct": 0.528,
      "score": 3,
      "raisons": "tendance haussiere, elan 1 h",
      "avis": "",
      "spark": [
        12.9123,
        13.2,
        12.9867,
        12.94,
        12.875,
        12.9777,
        13.065,
        13.075,
        13.3,
        13.26,
        13.275,
        13.192,
        13.405,
        13.535,
        13.41,
        13.51,
        13.5,
        13.4,
        13.405,
        13.471,
        13.47,
        13.435,
        13.49,
        13.615,
        13.61
      ]
    },
    {
      "symbole": "KC=F",
      "nom": "Cafe",
      "classe": "matieres",
      "prix": 280.15,
      "devise": "USX",
      "ouvert": false,
      "r1h": -0.25,
      "r4h": 1.1,
      "rsi": 57.1,
      "volRatio": 0.55,
      "atrPct": 0.467,
      "score": 3,
      "raisons": "tendance haussiere, RSI 57",
      "avis": "",
      "spark": [
        278.5,
        277.850006,
        277.049988,
        277.049988,
        277.350006,
        277.399994,
        276.25,
        277.0,
        270.149994,
        269.649994,
        269.75,
        269.700012,
        269.75,
        271.0,
        278.299988,
        277.700012,
        278.799988,
        280.799988,
        279.799988,
        279.549988,
        279.0,
        279.75,
        280.899994,
        280.549988,
        280.15
      ]
    },
    {
      "symbole": "INTC",
      "nom": "Intel Corporation",
      "classe": "actions",
      "prix": 56.28,
      "devise": "USD",
      "ouvert": false,
      "r1h": -1.12,
      "r4h": 0.36,
      "rsi": 62.1,
      "volRatio": 0.99,
      "atrPct": 0.976,
      "score": 3,
      "raisons": "tendance haussiere, RSI 62",
      "avis": "",
      "spark": [
        53.395,
        55.57,
        55.240002,
        54.43,
        54.035,
        53.940102,
        54.099998,
        53.775002,
        54.544998,
        53.575001,
        52.125,
        56.25,
        55.099899,
        55.82,
        55.66,
        55.875,
        56.066799,
        55.880001,
        56.020901,
        57.005001,
        56.744999,
        56.897999,
        56.924999,
        56.34,
        56.28
      ]
    },
    {
      "symbole": "AI.PA",
      "nom": "L'Air Liquide S.A.",
      "classe": "actions",
      "prix": 187.78,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.29,
      "r4h": 0.47,
      "rsi": 59.7,
      "volRatio": 0.92,
      "atrPct": 0.265,
      "score": 3,
      "raisons": "tendance haussiere, RSI 60",
      "avis": "",
      "spark": [
        189.759995,
        190.279999,
        190.339996,
        190.199997,
        190.520004,
        190.839996,
        189.720001,
        186.639999,
        187.100006,
        186.880005,
        187.300003,
        186.720001,
        186.580002,
        186.440002,
        186.740005,
        187.139999,
        186.919998,
        187.339996,
        187.139999,
        187.220001,
        187.740005,
        188.580002,
        188.320007,
        188.139999,
        187.78
      ]
    },
    {
      "symbole": "EURGBP=X",
      "nom": "EUR/GBP",
      "classe": "devises",
      "prix": 0.8347,
      "devise": "GBP",
      "ouvert": false,
      "r1h": 0.02,
      "r4h": 0.01,
      "rsi": 55.6,
      "volRatio": 0.0,
      "atrPct": 0.031,
      "score": 3,
      "raisons": "tendance haussiere, RSI 56",
      "avis": "",
      "spark": [
        0.83448,
        0.83423,
        0.83404,
        0.83396,
        0.83413,
        0.83399,
        0.83366,
        0.8343,
        0.83393,
        0.8343,
        0.8341,
        0.83422,
        0.83426,
        0.83399,
        0.83423,
        0.83469,
        0.83449,
        0.83434,
        0.83438,
        0.83423,
        0.83431,
        0.83438,
        0.8344,
        0.8347,
        0.8347
      ]
    },
    {
      "symbole": "PL=F",
      "nom": "Platine",
      "classe": "matieres",
      "prix": 1536.9,
      "devise": "USD",
      "ouvert": false,
      "r1h": 0.26,
      "r4h": 0.01,
      "rsi": 46.2,
      "volRatio": 0.59,
      "atrPct": 0.226,
      "score": 3,
      "raisons": "tendance haussiere, elan 1 h",
      "avis": "",
      "spark": [
        1522.900024,
        1520.199951,
        1521.400024,
        1532.900024,
        1530.900024,
        1539.400024,
        1535.699951,
        1526.800049,
        1522.5,
        1522.400024,
        1544.099976,
        1543.800049,
        1547.800049,
        1539.300049,
        1537.0,
        1534.800049,
        1540.099976,
        1542.400024,
        1541.5,
        1533.400024,
        1535.0,
        1533.400024,
        1533.400024,
        1534.599976,
        1536.9
      ]
    },
    {
      "symbole": "USDJPY=X",
      "nom": "USD/JPY",
      "classe": "devises",
      "prix": 158.425,
      "devise": "JPY",
      "ouvert": false,
      "r1h": -0.05,
      "r4h": 0.11,
      "rsi": 63.3,
      "volRatio": 0.0,
      "atrPct": 0.038,
      "score": 3,
      "raisons": "tendance haussiere, RSI 63",
      "avis": "",
      "spark": [
        158.281998,
        158.264999,
        158.285004,
        158.320007,
        158.339996,
        158.328003,
        158.311996,
        158.421997,
        158.412994,
        158.304001,
        158.134995,
        158.240005,
        158.341003,
        158.227997,
        158.238007,
        158.276001,
        158.294998,
        158.360992,
        158.488998,
        158.488007,
        158.477997,
        158.481995,
        158.505005,
        158.449997,
        158.425
      ]
    },
    {
      "symbole": "USDCAD=X",
      "nom": "USD/CAD",
      "classe": "devises",
      "prix": 1.4128,
      "devise": "CAD",
      "ouvert": false,
      "r1h": 0.04,
      "r4h": 0.0,
      "rsi": 52.6,
      "volRatio": 0.0,
      "atrPct": 0.06,
      "score": 3,
      "raisons": "tendance haussiere, RSI 53",
      "avis": "",
      "spark": [
        1.40719,
        1.4065,
        1.4059,
        1.40632,
        1.40564,
        1.40621,
        1.40601,
        1.41071,
        1.41204,
        1.40977,
        1.40985,
        1.41042,
        1.40973,
        1.41068,
        1.41154,
        1.41239,
        1.4127,
        1.41284,
        1.4126,
        1.4128,
        1.4133,
        1.41248,
        1.41249,
        1.4126,
        1.4128
      ]
    },
    {
      "symbole": "RIOT",
      "nom": "Riot Platforms, Inc.",
      "classe": "actions",
      "prix": 16.71,
      "devise": "USD",
      "ouvert": false,
      "r1h": -0.09,
      "r4h": -0.18,
      "rsi": 55.0,
      "volRatio": 1.03,
      "atrPct": 1.356,
      "score": 3,
      "raisons": "tendance haussiere, RSI 55",
      "avis": "",
      "spark": [
        13.36,
        13.96,
        14.09,
        14.43,
        14.525,
        14.685,
        15.03,
        14.805,
        15.0887,
        15.135,
        14.77,
        15.815,
        15.31,
        15.5269,
        15.815,
        16.549999,
        16.825001,
        16.455,
        16.475,
        16.98,
        16.725,
        16.92,
        16.645,
        16.719999,
        16.71
      ]
    },
    {
      "symbole": "ACA.PA",
      "nom": "Crédit Agricole S.A.",
      "classe": "actions",
      "prix": 15.84,
      "devise": "EUR",
      "ouvert": false,
      "r1h": 0.19,
      "r4h": 0.83,
      "rsi": 66.7,
      "volRatio": 0.96,
      "atrPct": 0.322,
      "score": 3,
      "raisons": "tendance haussiere, RSI 67",
      "avis": "",
      "spark": [
        15.87,
        15.9,
        15.85,
        15.745,
        15.69,
        15.665,
        15.765,
        15.74,
        15.805,
        15.845,
        15.85,
        15.78,
        15.71,
        15.71,
        15.695,
        15.73,
        15.71,
        15.745,
        15.705,
        15.695,
        15.745,
        15.815,
        15.78,
        15.835,
        15.84
      ]
    },
    {
      "symbole": "ZS=F",
      "nom": "Soja",
      "classe": "matieres",
      "prix": 1193.75,
      "devise": "USX",
      "ouvert": false,
      "r1h": 0.48,
      "r4h": 0.51,
      "rsi": 70.7,
      "volRatio": 3.68,
      "atrPct": 0.205,
      "score": 3,
      "raisons": "volume x3.7, elan 1 h",
      "avis": "",
      "spark": [
        1189.0,
        1188.25,
        1190.0,
        1190.5,
        1189.75,
        1189.0,
        1190.5,
        1190.5,
        1190.75,
        1188.5,
        1187.75,
        1188.25,
        1189.25,
        1190.0,
        1185.75,
        1189.25,
        1185.5,
        1185.5,
        1188.75,
        1188.5,
        1187.25,
        1185.25,
        1189.25,
        1194.5,
        1193.75
      ]
    },
    {
      "symbole": "BA",
      "nom": "The Boeing Company",
      "classe": "actions",
      "prix": 173.4,
      "devise": "USD",
      "ouvert": false,
      "r1h": 0.2,
      "r4h": 0.29,
      "rsi": 62.0,
      "volRatio": 0.92,
      "atrPct": 0.293,
      "score": 3,
      "raisons": "tendance haussiere, RSI 62",
      "avis": "",
      "spark": [
        170.532501,
        171.699997,
        172.149994,
        170.449997,
        170.229996,
        169.809998,
        170.460007,
        170.880005,
        172.339996,
        171.429993,
        172.440002,
        173.130005,
        172.929993,
        172.800003,
        172.350006,
        172.929993,
        172.860001,
        172.75,
        173.029999,
        173.539993,
        174.110001,
        173.040298,
        173.009995,
        173.350006,
        173.4
      ]
    },
    {
      "symbole": "SOUN",
      "nom": "SoundHound AI, Inc.",
      "classe": "actions",
      "prix": 4.11,
      "devise": "USD",
      "ouvert": false,
      "r1h": 2.75,
      "r4h": 2.24,
      "rsi": 64.6,
      "volRatio": 1.81,
      "atrPct": 1.086,
      "score": 3,
      "raisons": "volume x1.8, elan 1 h, RSI 65",
      "avis": "",
      "spark": [
        3.975,
        4.125,
        4.16,
        4.105,
        4.08,
        4.085,
        4.065,
        4.115,
        4.19,
        4.15,
        4.255,
        4.08,
        4.045,
        4.015,
        4.065,
        4.0652,
        4.0101,
        3.965,
        3.945,
        3.955,
        3.991,
        4.03,
        4.01,
        4.11,
        4.11
      ]
    },
    {
      "symbole": "ML.PA",
      "nom": "MICHELIN",
      "classe": "actions",
      "prix": 33.2,
      "devise": "EUR",
      "ouvert": false,
      "r1h": 0.67,
      "r4h": 0.42,
      "rsi": 69.3,
      "volRatio": 0.91,
      "atrPct": 0.29,
      "score": 2,
      "raisons": "elan 1 h, RSI 69",
      "avis": "",
      "spark": [
        33.400002,
        33.470001,
        33.330002,
        33.23,
        33.32,
        33.259998,
        33.259998,
        33.130001,
        33.330002,
        33.400002,
        33.349998,
        33.220001,
        33.189999,
        33.240002,
        33.169998,
        33.150002,
        32.98,
        32.880001,
        32.740002,
        32.709999,
        32.950001,
        33.060001,
        33.09,
        33.110001,
        33.2
      ]
    },
    {
      "symbole": "^HSI",
      "nom": "Hang Seng",
      "classe": "indices",
      "prix": 24481.86,
      "devise": "HKD",
      "ouvert": false,
      "r1h": -0.09,
      "r4h": -0.41,
      "rsi": 42.9,
      "volRatio": 0.0,
      "atrPct": 0.198,
      "score": 2,
      "raisons": "tendance haussiere",
      "avis": "",
      "spark": [
        24510.859375,
        24593.210938,
        24675.599609,
        24747.480469,
        24722.130859,
        24659.029297,
        24693.830078,
        24632.080078,
        24747.710938,
        24784.349609,
        24759.970703,
        24798.689453,
        24500.539062,
        24579.310547,
        24647.490234,
        24691.240234,
        24483.869141,
        24533.330078,
        24487.990234,
        24547.380859,
        24564.470703,
        24512.859375,
        24451.220703,
        24486.359375,
        24481.86
      ]
    },
    {
      "symbole": "SI=F",
      "nom": "Argent",
      "classe": "matieres",
      "prix": 51.942,
      "devise": "USD",
      "ouvert": false,
      "r1h": -0.06,
      "r4h": 0.1,
      "rsi": 48.5,
      "volRatio": 0.29,
      "atrPct": 0.234,
      "score": 2,
      "raisons": "tendance haussiere",
      "avis": "",
      "spark": [
        52.049999,
        52.0,
        51.869999,
        52.154999,
        52.0,
        52.099998,
        52.060001,
        51.990002,
        51.619999,
        51.720001,
        52.099998,
        51.875,
        51.915001,
        51.955002,
        51.935001,
        51.775002,
        51.990002,
        52.084999,
        52.110001,
        51.91,
        52.040001,
        51.965,
        51.959999,
        51.924999,
        51.942
      ]
    },
    {
      "symbole": "^STOXX50E",
      "nom": "Euro Stoxx 50",
      "classe": "indices",
      "prix": 6170.49,
      "devise": null,
      "ouvert": false,
      "r1h": 0.31,
      "r4h": 0.53,
      "rsi": 68.2,
      "volRatio": 0.0,
      "atrPct": 0.213,
      "score": 2,
      "raisons": "elan 1 h, RSI 68",
      "avis": "",
      "spark": [
        6304.220215,
        6315.919922,
        6302.140137,
        6254.779785,
        6229.669922,
        6213.620117,
        6226.169922,
        6157.649902,
        6168.140137,
        6184.759766,
        6180.330078,
        6142.97998,
        6132.680176,
        6137.669922,
        6135.220215,
        6148.169922,
        6135.089844,
        6148.970215,
        6135.120117,
        6128.879883,
        6152.189941,
        6155.049805,
        6160.819824,
        6167.120117,
        6170.49
      ]
    },
    {
      "symbole": "AMD",
      "nom": "Advanced Micro Devices, Inc.",
      "classe": "actions",
      "prix": 449.04,
      "devise": "USD",
      "ouvert": false,
      "r1h": 0.07,
      "r4h": 1.12,
      "rsi": 76.9,
      "volRatio": 0.89,
      "atrPct": 0.86,
      "score": 2,
      "raisons": "tendance haussiere",
      "avis": "",
      "spark": [
        411.184998,
        428.920013,
        419.481689,
        417.220001,
        414.072815,
        414.200012,
        415.095215,
        414.124115,
        421.290009,
        414.105011,
        402.51001,
        456.533813,
        442.320007,
        442.66629,
        444.165009,
        445.140015,
        443.799988,
        438.109985,
        438.859985,
        445.816711,
        445.934998,
        448.144989,
        449.964996,
        449.029999,
        449.04
      ]
    },
    {
      "symbole": "NZDUSD=X",
      "nom": "NZD/USD",
      "classe": "devises",
      "prix": 0.5548,
      "devise": "USD",
      "ouvert": false,
      "r1h": 0.12,
      "r4h": 0.11,
      "rsi": 61.2,
      "volRatio": 0.0,
      "atrPct": 0.031,
      "score": 2,
      "raisons": "elan 1 h, RSI 61",
      "avis": "",
      "spark": [
        0.554385,
        0.55457,
        0.554539,
        0.554693,
        0.555031,
        0.5546,
        0.553925,
        0.553097,
        0.554477,
        0.555216,
        0.554785,
        0.55497,
        0.555062,
        0.555001,
        0.554508,
        0.554293,
        0.554324,
        0.554416,
        0.554262,
        0.554354,
        0.554109,
        0.554324,
        0.554232,
        0.554754,
        0.5548
      ]
    }
  ],
  "stats": {
    "nbTrades": 26,
    "gagnants": 10,
    "frais": 3.9718564529894116,
    "pnl": 7.4523191642750675
  },
  "marche": {
    "analyses": 126,
    "echecs": 0,
    "ouverts": {
      "matieres": 0,
      "devises": 0,
      "indices": 0,
      "actions": 0
    },
    "achatsBloques": null
  },
  "regime": "normal",
  "derniereExecution": "2026-11-07T14:37:01",
  "derniereVerif": "2026-11-07T14:40:26"
};
