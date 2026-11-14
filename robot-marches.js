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
  "liquidites": 257.84,
  "refInitial": 7726.45,
  "positions": [
    {
      "symbole": "TSLA",
      "nom": "Tesla, Inc.",
      "classe": "actions",
      "devise": "USD",
      "montant": 71.13,
      "investiNet": 71.05393469495453,
      "prixEntree": 393.026415,
      "slPct": 0.0142,
      "tpPct": 0.0237,
      "ouvertLe": "2026-11-11T18:55:36",
      "score": 5,
      "motif": "score 5 : tendance haussiere, volume x2.0, RSI 69",
      "avis": "aucun",
      "prixActuel": 390.22,
      "plusHaut": 397.45,
      "stopSuiveur": null
    },
    {
      "symbole": "GOOGL",
      "nom": "Alphabet Inc.",
      "classe": "actions",
      "devise": "USD",
      "montant": 70.76,
      "investiNet": 70.689632739863,
      "prixEntree": 296.823338,
      "slPct": 0.0125,
      "tpPct": 0.0209,
      "ouvertLe": "2026-11-12T16:56:49",
      "score": 6,
      "motif": "score 6 : tendance haussiere, volume x2.3, elan 1 h, RSI 68",
      "avis": "aucun",
      "prixActuel": 295.77,
      "plusHaut": 298.7,
      "stopSuiveur": null
    },
    {
      "symbole": "SU.PA",
      "nom": "Schneider Electric S.E.",
      "classe": "actions",
      "devise": "EUR",
      "montant": 70.76,
      "investiNet": 70.689632739863,
      "prixEntree": 243.7218,
      "slPct": 0.0122,
      "tpPct": 0.0204,
      "ouvertLe": "2026-11-12T16:56:49",
      "score": 5,
      "motif": "score 5 : tendance haussiere, volume x2.0, elan 1 h, RSI 55",
      "avis": "aucun",
      "prixActuel": 243.45,
      "plusHaut": 244.8,
      "stopSuiveur": null
    },
    {
      "symbole": "LLY",
      "nom": "Eli Lilly and Company",
      "classe": "actions",
      "devise": "USD",
      "montant": 68.96,
      "investiNet": 68.88742485246429,
      "prixEntree": 1444.406842,
      "slPct": 0.0132,
      "tpPct": 0.022,
      "ouvertLe": "2026-11-13T18:38:41",
      "score": 5,
      "motif": "score 5 : tendance haussiere, volume x2.5, RSI 63",
      "avis": "aucun",
      "prixActuel": 1443.5,
      "plusHaut": 1444.406842,
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
    },
    {
      "symbole": "RI.PA",
      "nom": "Pernod Ricard SA",
      "classe": "actions",
      "montant": 71.36,
      "prixEntree": 70.93545,
      "prixSortie": 71.14441,
      "devise": "EUR",
      "ouvertLe": "2026-11-06T16:46:37",
      "fermeLe": "2026-11-09T10:43:24",
      "pnl": 0.07,
      "pnlPct": 0.09,
      "motifEntree": "score 5 : tendance haussiere, volume x1.6, elan 1 h, RSI 69",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "symbole": "NZDUSD=X",
      "nom": "NZD/USD",
      "classe": "devises",
      "montant": 71.71,
      "prixEntree": 0.560856,
      "prixSortie": 0.559544,
      "devise": "USD",
      "ouvertLe": "2026-11-09T10:43:24",
      "fermeLe": "2026-11-10T19:10:43",
      "pnl": -0.19,
      "pnlPct": -0.26,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 60",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "symbole": "META",
      "nom": "Meta Platforms, Inc.",
      "classe": "actions",
      "montant": 71.82,
      "prixEntree": 644.532105,
      "prixSortie": 638.349666,
      "devise": "USD",
      "ouvertLe": "2026-11-09T21:11:08",
      "fermeLe": "2026-11-10T19:10:43",
      "pnl": -0.83,
      "pnlPct": -1.16,
      "motifEntree": "score 6 : tendance haussiere, volume x3.6, elan 1 h, RSI 62",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "symbole": "AAPL",
      "nom": "Apple Inc.",
      "classe": "actions",
      "montant": 71.82,
      "prixEntree": 351.760792,
      "prixSortie": 347.70606,
      "devise": "USD",
      "ouvertLe": "2026-11-09T21:11:08",
      "fermeLe": "2026-11-10T19:10:43",
      "pnl": -0.97,
      "pnlPct": -1.35,
      "motifEntree": "score 5 : tendance haussiere, volume x2.9, RSI 59",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "symbole": "CL=F",
      "nom": "Petrole WTI",
      "classe": "matieres",
      "montant": 70.73,
      "prixEntree": 86.26311,
      "prixSortie": 86.146905,
      "devise": "USD",
      "ouvertLe": "2026-11-11T00:22:51",
      "fermeLe": "2026-11-12T01:06:44",
      "pnl": -0.17,
      "pnlPct": -0.24,
      "motifEntree": "score 5 : tendance haussiere, volume x23.4, RSI 53",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "symbole": "AVGO",
      "nom": "Broadcom Inc.",
      "classe": "actions",
      "montant": 71.13,
      "prixEntree": 355.542682,
      "prixSortie": 345.04739,
      "devise": "USD",
      "ouvertLe": "2026-11-11T18:55:36",
      "fermeLe": "2026-11-12T01:08:08",
      "pnl": -2.24,
      "pnlPct": -3.15,
      "motifEntree": "score 5 : tendance haussiere, volume x3.6, RSI 67",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "symbole": "AMD",
      "nom": "Advanced Micro Devices, Inc.",
      "classe": "actions",
      "montant": 70.76,
      "prixEntree": 579.079395,
      "prixSortie": 524.088824,
      "devise": "USD",
      "ouvertLe": "2026-11-12T16:56:49",
      "fermeLe": "2026-11-13T18:38:41",
      "pnl": -6.85,
      "pnlPct": -9.68,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 65",
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
    },
    {
      "t": "2026-11-07T19:17:53",
      "valeur": 721.54,
      "ref": 954.75
    },
    {
      "t": "2026-11-07T23:01:52",
      "valeur": 725.35,
      "ref": 954.75
    },
    {
      "t": "2026-11-08T02:19:45",
      "valeur": 721.99,
      "ref": 954.75
    },
    {
      "t": "2026-11-08T08:32:11",
      "valeur": 722.39,
      "ref": 954.75
    },
    {
      "t": "2026-11-08T15:30:15",
      "valeur": 719.86,
      "ref": 954.75
    },
    {
      "t": "2026-11-08T20:02:17",
      "valeur": 713.59,
      "ref": 954.75
    },
    {
      "t": "2026-11-08T23:49:17",
      "valeur": 712.25,
      "ref": 954.75
    },
    {
      "t": "2026-11-09T03:07:14",
      "valeur": 717.29,
      "ref": 954.75
    },
    {
      "t": "2026-11-09T10:43:24",
      "valeur": 717.05,
      "ref": 954.75
    },
    {
      "t": "2026-11-09T21:11:08",
      "valeur": 717.96,
      "ref": 978.99
    },
    {
      "t": "2026-11-10T03:45:28",
      "valeur": 711.62,
      "ref": 977.16
    },
    {
      "t": "2026-11-10T11:30:15",
      "valeur": 711.61,
      "ref": 977.16
    },
    {
      "t": "2026-11-10T19:10:43",
      "valeur": 709.7,
      "ref": 968.64
    },
    {
      "t": "2026-11-11T00:22:51",
      "valeur": 707.19,
      "ref": 973.4
    },
    {
      "t": "2026-11-11T03:54:00",
      "valeur": 707.28,
      "ref": 973.4
    },
    {
      "t": "2026-11-11T11:12:57",
      "valeur": 710.41,
      "ref": 973.4
    },
    {
      "t": "2026-11-11T18:55:36",
      "valeur": 711.04,
      "ref": 988.28
    },
    {
      "t": "2026-11-12T01:06:44",
      "valeur": 703.72,
      "ref": 986.14
    },
    {
      "t": "2026-11-12T08:04:43",
      "valeur": 707.39,
      "ref": 986.14
    },
    {
      "t": "2026-11-12T16:56:49",
      "valeur": 707.29,
      "ref": 986.25
    },
    {
      "t": "2026-11-12T23:08:41",
      "valeur": 698.11,
      "ref": 982.65
    },
    {
      "t": "2026-11-13T03:37:43",
      "valeur": 698.78,
      "ref": 982.65
    },
    {
      "t": "2026-11-13T10:59:36",
      "valeur": 704.99,
      "ref": 982.65
    },
    {
      "t": "2026-11-13T18:38:41",
      "valeur": 689.46,
      "ref": 975.84
    },
    {
      "t": "2026-11-13T23:53:41",
      "valeur": 686.54,
      "ref": 978.67
    },
    {
      "t": "2026-11-14T03:51:58",
      "valeur": 685.37,
      "ref": 978.67
    },
    {
      "t": "2026-11-14T10:38:13",
      "valeur": 681.66,
      "ref": 978.67
    },
    {
      "t": "2026-11-14T17:06:59",
      "valeur": 683.3,
      "ref": 978.67
    },
    {
      "t": "2026-11-14T21:41:17",
      "valeur": 673.85,
      "ref": 978.67
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
    },
    {
      "t": "2026-11-09T10:43:24",
      "texte": "Vente Pernod Ricard SA (duree maximale atteinte) : +0.07 EUR (+0.1 %)"
    },
    {
      "t": "2026-11-09T10:43:24",
      "texte": "Achat NZD/USD pour 71.71 EUR (stop -0.2 %, gain +0.3 % ; score 6 : tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 60)"
    },
    {
      "t": "2026-11-09T21:11:08",
      "texte": "Objectif atteint sur NZD/USD : stop suiveur active, gain securise a +0.3 %"
    },
    {
      "t": "2026-11-09T21:11:08",
      "texte": "Achat Meta Platforms, Inc. pour 71.82 EUR (stop -0.7 %, gain +1.2 % ; score 6 : tendance haussiere, volume x3.6, elan 1 h, RSI 62)"
    },
    {
      "t": "2026-11-09T21:11:08",
      "texte": "Achat Apple Inc. pour 71.82 EUR (stop -0.7 %, gain +1.1 % ; score 5 : tendance haussiere, volume x2.9, RSI 59)"
    },
    {
      "t": "2026-11-10T19:10:43",
      "texte": "Vente NZD/USD (stop suiveur, gain securise) : -0.19 EUR (-0.3 %)"
    },
    {
      "t": "2026-11-10T19:10:43",
      "texte": "Vente Meta Platforms, Inc. (stop-loss) : -0.83 EUR (-1.2 %)"
    },
    {
      "t": "2026-11-10T19:10:43",
      "texte": "Vente Apple Inc. (stop-loss) : -0.97 EUR (-1.4 %)"
    },
    {
      "t": "2026-11-11T00:22:51",
      "texte": "Achat Petrole WTI pour 70.73 EUR (stop -0.7 %, gain +1.2 % ; score 5 : tendance haussiere, volume x23.4, RSI 53)"
    },
    {
      "t": "2026-11-11T18:55:36",
      "texte": "Achat Broadcom Inc. pour 71.13 EUR (stop -2.0 %, gain +3.4 % ; score 5 : tendance haussiere, volume x3.6, RSI 67)"
    },
    {
      "t": "2026-11-11T18:55:36",
      "texte": "Achat Tesla, Inc. pour 71.13 EUR (stop -1.4 %, gain +2.4 % ; score 5 : tendance haussiere, volume x2.0, RSI 69)"
    },
    {
      "t": "2026-11-12T01:06:44",
      "texte": "Vente Petrole WTI (tendance cassee) : -0.17 EUR (-0.2 %)"
    },
    {
      "t": "2026-11-12T01:08:08",
      "texte": "Vente Broadcom Inc. (stop-loss) : -2.24 EUR (-3.2 %)"
    },
    {
      "t": "2026-11-12T16:56:49",
      "texte": "Achat Alphabet Inc. pour 70.76 EUR (stop -1.3 %, gain +2.1 % ; score 6 : tendance haussiere, volume x2.3, elan 1 h, RSI 68)"
    },
    {
      "t": "2026-11-12T16:56:49",
      "texte": "Achat Advanced Micro Devices, Inc. pour 70.76 EUR (stop -3.9 %, gain +6.5 % ; score 6 : tendance haussiere, cassure du plus haut recent, elan 1 h, RSI 65)"
    },
    {
      "t": "2026-11-12T16:56:49",
      "texte": "Achat Schneider Electric S.E. pour 70.76 EUR (stop -1.2 %, gain +2.0 % ; score 5 : tendance haussiere, volume x2.0, elan 1 h, RSI 55)"
    },
    {
      "t": "2026-11-13T18:38:41",
      "texte": "Vente Advanced Micro Devices, Inc. (stop-loss) : -6.85 EUR (-9.7 %)"
    },
    {
      "t": "2026-11-13T18:38:41",
      "texte": "Achat Eli Lilly and Company pour 68.96 EUR (stop -1.3 %, gain +2.2 % ; score 5 : tendance haussiere, volume x2.5, RSI 63)"
    }
  ],
  "signaux": [
    {
      "symbole": "DSY.PA",
      "nom": "Dassault Systèmes SE",
      "classe": "actions",
      "prix": 25.98,
      "devise": "EUR",
      "ouvert": false,
      "r1h": 0.7,
      "r4h": 0.78,
      "rsi": 65.4,
      "volRatio": 2.44,
      "atrPct": 0.331,
      "score": 8,
      "raisons": "tendance haussiere, cassure du plus haut recent, volume x2.4, elan 1 h, RSI 65",
      "avis": "",
      "spark": [
        25.32,
        25.379999,
        25.4,
        25.49,
        25.620001,
        25.75,
        25.790001,
        25.82,
        25.889999,
        25.93,
        25.969999,
        25.889999,
        25.82,
        25.860001,
        25.879999,
        25.75,
        25.83,
        25.85,
        25.83,
        25.889999,
        25.84,
        25.77,
        25.940001,
        25.959999,
        25.98
      ]
    },
    {
      "symbole": "VIE.PA",
      "nom": "Veolia Environnement SA",
      "classe": "actions",
      "prix": 34.94,
      "devise": "EUR",
      "ouvert": false,
      "r1h": 0.23,
      "r4h": 0.75,
      "rsi": 65.3,
      "volRatio": 2.11,
      "atrPct": 0.199,
      "score": 8,
      "raisons": "tendance haussiere, cassure du plus haut recent, volume x2.1, elan 1 h, RSI 65",
      "avis": "",
      "spark": [
        34.66,
        34.59,
        34.59,
        34.509998,
        34.57,
        34.599998,
        34.610001,
        34.619999,
        34.619999,
        34.73,
        34.77,
        34.880001,
        34.799999,
        34.73,
        34.709999,
        34.740002,
        34.73,
        34.740002,
        34.68,
        34.639999,
        34.849998,
        34.799999,
        34.82,
        34.84,
        34.94
      ]
    },
    {
      "symbole": "BN.PA",
      "nom": "Danone S.A.",
      "classe": "actions",
      "prix": 69.8,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.09,
      "r4h": 0.4,
      "rsi": 58.3,
      "volRatio": 2.38,
      "atrPct": 0.186,
      "score": 5,
      "raisons": "tendance haussiere, volume x2.4, RSI 58",
      "avis": "",
      "spark": [
        69.059998,
        69.440002,
        69.379997,
        69.220001,
        69.379997,
        69.32,
        69.199997,
        69.580002,
        69.639999,
        69.760002,
        69.82,
        69.720001,
        69.620003,
        69.639999,
        69.5,
        69.5,
        69.540001,
        69.620003,
        69.68,
        69.68,
        69.860001,
        69.720001,
        69.860001,
        69.860001,
        69.8
      ]
    },
    {
      "symbole": "TTE.PA",
      "nom": "TotalEnergies SE",
      "classe": "actions",
      "prix": 82.17,
      "devise": "EUR",
      "ouvert": false,
      "r1h": 0.33,
      "r4h": 0.56,
      "rsi": 61.9,
      "volRatio": 1.54,
      "atrPct": 0.268,
      "score": 5,
      "raisons": "tendance haussiere, volume x1.5, elan 1 h, RSI 62",
      "avis": "",
      "spark": [
        80.120003,
        80.32,
        80.029999,
        80.209999,
        80.589996,
        80.470001,
        80.550003,
        81.400002,
        81.699997,
        81.779999,
        81.93,
        81.650002,
        81.68,
        81.739998,
        81.75,
        81.809998,
        81.779999,
        81.730003,
        81.870003,
        81.860001,
        81.839996,
        81.959999,
        82.059998,
        82.050003,
        82.17
      ]
    },
    {
      "symbole": "XOM",
      "nom": "ExxonMobil Holdings Corporation",
      "classe": "actions",
      "prix": 170.59,
      "devise": "USD",
      "ouvert": false,
      "r1h": 0.31,
      "r4h": 0.68,
      "rsi": 74.3,
      "volRatio": 2.39,
      "atrPct": 0.167,
      "score": 5,
      "raisons": "tendance haussiere, volume x2.4, elan 1 h",
      "avis": "",
      "spark": [
        168.177399,
        168.490005,
        169.449997,
        169.970001,
        170.020004,
        170.360001,
        170.619995,
        170.559998,
        170.570007,
        170.389999,
        169.785004,
        170.110596,
        170.645004,
        170.25,
        169.619995,
        169.330002,
        169.580002,
        169.690002,
        169.899994,
        170.119995,
        169.801407,
        170.020096,
        170.050003,
        170.619995,
        170.59
      ]
    },
    {
      "symbole": "ORA.PA",
      "nom": "Orange S.A.",
      "classe": "actions",
      "prix": 15.62,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.13,
      "r4h": 0.77,
      "rsi": 64.3,
      "volRatio": 1.84,
      "atrPct": 0.184,
      "score": 4,
      "raisons": "tendance haussiere, volume x1.8, RSI 64",
      "avis": "",
      "spark": [
        15.555,
        15.58,
        15.57,
        15.515,
        15.505,
        15.515,
        15.47,
        15.56,
        15.58,
        15.565,
        15.605,
        15.565,
        15.555,
        15.54,
        15.515,
        15.5,
        15.505,
        15.54,
        15.57,
        15.565,
        15.6,
        15.6075,
        15.62,
        15.65,
        15.62
      ]
    },
    {
      "symbole": "DTE.DE",
      "nom": "Deutsche Telekom AG",
      "classe": "actions",
      "prix": 26.6,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.11,
      "r4h": 0.57,
      "rsi": 47.1,
      "volRatio": 2.1,
      "atrPct": 0.22,
      "score": 4,
      "raisons": "tendance haussiere, volume x2.1",
      "avis": "",
      "spark": [
        26.459999,
        26.540001,
        26.58,
        26.35,
        26.43,
        26.49,
        26.49,
        26.5,
        26.6,
        26.68,
        26.700001,
        26.700001,
        26.690001,
        26.629999,
        26.559999,
        26.459999,
        26.530001,
        26.59,
        26.58,
        26.559999,
        26.58,
        26.57,
        26.6,
        26.57,
        26.6
      ]
    },
    {
      "symbole": "KC=F",
      "nom": "Cafe",
      "classe": "matieres",
      "prix": 279.25,
      "devise": "USX",
      "ouvert": false,
      "r1h": 2.1,
      "r4h": 1.1,
      "rsi": 65.8,
      "volRatio": 0.38,
      "atrPct": 0.531,
      "score": 4,
      "raisons": "tendance haussiere, elan 1 h, RSI 66",
      "avis": "",
      "spark": [
        278.25,
        273.649994,
        274.799988,
        274.549988,
        274.549988,
        275.100006,
        280.25,
        278.549988,
        273.700012,
        273.899994,
        277.600006,
        277.75,
        276.0,
        276.049988,
        276.149994,
        275.200012,
        275.600006,
        274.5,
        273.25,
        274.0,
        273.850006,
        273.549988,
        273.799988,
        274.5,
        279.25
      ]
    },
    {
      "symbole": "AI.PA",
      "nom": "L'Air Liquide S.A.",
      "classe": "actions",
      "prix": 193.32,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.41,
      "r4h": -0.12,
      "rsi": 38.7,
      "volRatio": 2.52,
      "atrPct": 0.204,
      "score": 4,
      "raisons": "tendance haussiere, volume x2.5",
      "avis": "",
      "spark": [
        193.059998,
        193.699997,
        193.779999,
        193.300003,
        193.520004,
        193.720001,
        193.580002,
        194.220001,
        193.679993,
        194.020004,
        194.5,
        194.460007,
        194.259995,
        194.139999,
        193.860001,
        193.699997,
        193.940002,
        194.039993,
        194.240005,
        194.179993,
        194.139999,
        193.539993,
        193.679993,
        193.600006,
        193.32
      ]
    },
    {
      "symbole": "DIS",
      "nom": "The Walt Disney Company",
      "classe": "actions",
      "prix": 118.97,
      "devise": "USD",
      "ouvert": false,
      "r1h": -0.16,
      "r4h": -0.2,
      "rsi": 35.6,
      "volRatio": 2.31,
      "atrPct": 0.173,
      "score": 4,
      "raisons": "tendance haussiere, volume x2.3",
      "avis": "",
      "spark": [
        119.269997,
        119.290001,
        118.959999,
        119.019997,
        118.900002,
        118.980003,
        118.949997,
        118.629997,
        118.470001,
        118.339996,
        118.230003,
        119.330002,
        118.709999,
        118.980003,
        119.139999,
        119.010002,
        119.275002,
        119.294998,
        119.089996,
        119.400002,
        119.275002,
        119.169998,
        119.1576,
        118.989998,
        118.97
      ]
    },
    {
      "symbole": "ENGI.PA",
      "nom": "Engie SA",
      "classe": "actions",
      "prix": 25.28,
      "devise": "EUR",
      "ouvert": false,
      "r1h": 0.16,
      "r4h": 0.08,
      "rsi": 48.1,
      "volRatio": 2.96,
      "atrPct": 0.201,
      "score": 4,
      "raisons": "tendance haussiere, volume x3.0",
      "avis": "",
      "spark": [
        25.030001,
        25.01,
        25.02,
        25.0,
        25.120001,
        25.09,
        25.110001,
        25.09,
        25.059999,
        25.110001,
        25.209999,
        25.35,
        25.32,
        25.290001,
        25.299999,
        25.299999,
        25.290001,
        25.290001,
        25.26,
        25.219999,
        25.27,
        25.219999,
        25.26,
        25.25,
        25.28
      ]
    },
    {
      "symbole": "DG.PA",
      "nom": "Vinci SA",
      "classe": "actions",
      "prix": 115.5,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.13,
      "r4h": 0.52,
      "rsi": 59.4,
      "volRatio": 1.47,
      "atrPct": 0.192,
      "score": 3,
      "raisons": "tendance haussiere, RSI 59",
      "avis": "",
      "spark": [
        115.349998,
        115.449997,
        115.400002,
        115.099998,
        115.150002,
        115.25,
        115.25,
        115.150002,
        114.900002,
        115.0,
        115.050003,
        115.25,
        115.300003,
        115.25,
        115.300003,
        115.099998,
        115.099998,
        115.199997,
        115.150002,
        115.150002,
        115.5,
        115.550003,
        115.449997,
        115.300003,
        115.5
      ]
    },
    {
      "symbole": "PYPL",
      "nom": "PayPal Holdings, Inc.",
      "classe": "actions",
      "prix": 59.28,
      "devise": "USD",
      "ouvert": false,
      "r1h": 0.01,
      "r4h": -0.1,
      "rsi": 42.2,
      "volRatio": 1.5,
      "atrPct": 0.137,
      "score": 3,
      "raisons": "tendance haussiere, volume x1.5",
      "avis": "",
      "spark": [
        59.16,
        59.299999,
        59.145,
        59.055,
        59.02,
        58.945,
        58.869999,
        58.740002,
        58.615002,
        58.465,
        58.290001,
        59.244999,
        59.035,
        59.07,
        59.32,
        59.25,
        59.299999,
        59.305,
        59.275002,
        59.334999,
        59.345001,
        59.294998,
        59.285,
        59.27,
        59.28
      ]
    },
    {
      "symbole": "SU.PA",
      "nom": "Schneider Electric S.E.",
      "classe": "actions",
      "prix": 243.45,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.14,
      "r4h": 0.02,
      "rsi": 46.1,
      "volRatio": 1.54,
      "atrPct": 0.396,
      "score": 3,
      "raisons": "tendance haussiere, volume x1.5",
      "avis": "",
      "spark": [
        242.600006,
        242.899994,
        242.550003,
        242.600006,
        242.600006,
        244.699997,
        244.5,
        243.199997,
        242.649994,
        243.25,
        243.300003,
        243.800003,
        243.75,
        243.350006,
        243.800003,
        243.300003,
        243.850006,
        244.149994,
        243.5,
        243.899994,
        243.149994,
        243.850006,
        243.149994,
        243.800003,
        243.45
      ]
    },
    {
      "symbole": "ENEL.MI",
      "nom": "Enel SpA",
      "classe": "actions",
      "prix": 9.955,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.18,
      "r4h": 0.57,
      "rsi": 59.4,
      "volRatio": 1.45,
      "atrPct": 0.221,
      "score": 3,
      "raisons": "tendance haussiere, RSI 59",
      "avis": "",
      "spark": [
        9.816,
        9.851,
        9.876,
        9.855,
        9.892,
        9.901,
        9.91,
        9.859,
        9.841,
        9.881,
        9.906,
        9.936,
        9.907,
        9.904,
        9.901,
        9.907,
        9.93,
        9.942,
        9.925,
        9.921,
        9.979,
        9.966,
        9.962,
        9.934,
        9.955
      ]
    },
    {
      "symbole": "PUB.PA",
      "nom": "Publicis Groupe S.A.",
      "classe": "actions",
      "prix": 105.7,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.05,
      "r4h": 0.86,
      "rsi": 64.7,
      "volRatio": 1.36,
      "atrPct": 0.253,
      "score": 3,
      "raisons": "tendance haussiere, RSI 65",
      "avis": "",
      "spark": [
        104.800003,
        105.150002,
        105.25,
        105.0,
        105.150002,
        105.300003,
        105.050003,
        105.0,
        104.949997,
        105.0,
        105.0,
        105.0,
        104.900002,
        104.75,
        104.849998,
        104.849998,
        104.949997,
        105.400002,
        105.0,
        105.0,
        105.650002,
        105.5,
        105.800003,
        105.5,
        105.7
      ]
    },
    {
      "symbole": "ADS.DE",
      "nom": "adidas AG",
      "classe": "actions",
      "prix": 177.65,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.42,
      "r4h": 0.91,
      "rsi": 63.8,
      "volRatio": 1.08,
      "atrPct": 0.301,
      "score": 3,
      "raisons": "tendance haussiere, RSI 64",
      "avis": "",
      "spark": [
        177.75,
        178.449997,
        178.0,
        177.649994,
        176.899994,
        176.649994,
        177.100006,
        176.800003,
        177.199997,
        177.199997,
        177.399994,
        177.5,
        177.399994,
        176.899994,
        176.449997,
        176.0,
        176.100006,
        177.350006,
        177.149994,
        176.899994,
        177.899994,
        177.899994,
        178.399994,
        178.25,
        177.65
      ]
    },
    {
      "symbole": "ALV.DE",
      "nom": "Allianz SE",
      "classe": "actions",
      "prix": 477.2,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.04,
      "r4h": 0.63,
      "rsi": 69.6,
      "volRatio": 0.87,
      "atrPct": 0.188,
      "score": 3,
      "raisons": "tendance haussiere, RSI 70",
      "avis": "",
      "spark": [
        470.100006,
        472.399994,
        473.100006,
        472.899994,
        473.799988,
        472.700012,
        472.799988,
        474.700012,
        475.0,
        476.5,
        477.799988,
        478.0,
        476.5,
        475.200012,
        475.399994,
        474.799988,
        474.700012,
        474.5,
        475.700012,
        475.899994,
        477.600006,
        476.799988,
        476.5,
        477.399994,
        477.2
      ]
    },
    {
      "symbole": "ADBE",
      "nom": "Adobe Inc.",
      "classe": "actions",
      "prix": 243.08,
      "devise": "USD",
      "ouvert": false,
      "r1h": -0.12,
      "r4h": 0.73,
      "rsi": 66.5,
      "volRatio": 1.03,
      "atrPct": 0.245,
      "score": 3,
      "raisons": "tendance haussiere, RSI 67",
      "avis": "",
      "spark": [
        236.852493,
        237.925003,
        239.429993,
        239.929993,
        239.494995,
        239.190002,
        240.380005,
        239.929993,
        239.2901,
        239.009995,
        238.550003,
        240.850006,
        240.080002,
        240.524994,
        240.455002,
        240.990005,
        241.149994,
        242.074997,
        241.860001,
        242.839996,
        242.820007,
        243.149994,
        243.570496,
        243.080002,
        243.08
      ]
    },
    {
      "symbole": "OR.PA",
      "nom": "L'Oréal S.A.",
      "classe": "actions",
      "prix": 451.2,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.03,
      "r4h": 0.64,
      "rsi": 61.5,
      "volRatio": 1.4,
      "atrPct": 0.199,
      "score": 3,
      "raisons": "tendance haussiere, RSI 61",
      "avis": "",
      "spark": [
        445.600006,
        447.25,
        447.100006,
        445.399994,
        446.5,
        446.350006,
        446.799988,
        449.200012,
        449.450012,
        449.950012,
        449.75,
        449.850006,
        449.200012,
        448.399994,
        447.75,
        447.299988,
        449.100006,
        449.700012,
        448.950012,
        449.450012,
        450.850006,
        450.5,
        451.25,
        451.649994,
        451.2
      ]
    },
    {
      "symbole": "SAP.DE",
      "nom": "SAP SE",
      "classe": "actions",
      "prix": 213.45,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.14,
      "r4h": -0.05,
      "rsi": 46.0,
      "volRatio": 1.84,
      "atrPct": 0.378,
      "score": 3,
      "raisons": "tendance haussiere, volume x1.8",
      "avis": "",
      "spark": [
        210.149994,
        211.350006,
        211.100006,
        209.149994,
        211.449997,
        211.899994,
        212.25,
        212.949997,
        212.800003,
        212.800003,
        213.550003,
        213.399994,
        213.25,
        213.300003,
        213.550003,
        213.300003,
        214.050003,
        214.350006,
        213.899994,
        214.350006,
        213.75,
        213.100006,
        213.600006,
        213.449997,
        213.45
      ]
    },
    {
      "symbole": "EL.PA",
      "nom": "ESSILORLUXOTTICA",
      "classe": "actions",
      "prix": 182.35,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.05,
      "r4h": 0.63,
      "rsi": 57.7,
      "volRatio": 0.99,
      "atrPct": 0.264,
      "score": 3,
      "raisons": "tendance haussiere, RSI 58",
      "avis": "",
      "spark": [
        180.949997,
        182.149994,
        182.149994,
        180.5,
        180.649994,
        180.75,
        180.199997,
        181.449997,
        181.199997,
        181.149994,
        181.050003,
        180.949997,
        181.050003,
        180.850006,
        181.300003,
        181.350006,
        181.399994,
        182.149994,
        181.850006,
        181.649994,
        182.600006,
        182.350006,
        182.449997,
        182.449997,
        182.35
      ]
    },
    {
      "symbole": "WMT",
      "nom": "Walmart Inc.",
      "classe": "actions",
      "prix": 128.09,
      "devise": "USD",
      "ouvert": false,
      "r1h": 0.55,
      "r4h": -0.03,
      "rsi": 48.0,
      "volRatio": 1.45,
      "atrPct": 0.191,
      "score": 3,
      "raisons": "tendance haussiere, elan 1 h",
      "avis": "",
      "spark": [
        125.974998,
        125.709999,
        125.769997,
        126.394997,
        126.07,
        125.940002,
        125.809998,
        125.82,
        125.6661,
        125.980003,
        126.160004,
        127.809998,
        127.419998,
        127.82,
        127.864998,
        127.82,
        128.139999,
        128.039993,
        127.934998,
        127.519997,
        127.425003,
        127.43,
        127.669998,
        128.130005,
        128.09
      ]
    },
    {
      "symbole": "ZS=F",
      "nom": "Soja",
      "classe": "matieres",
      "prix": 1231.5,
      "devise": "USX",
      "ouvert": false,
      "r1h": -0.1,
      "r4h": -0.5,
      "rsi": 28.6,
      "volRatio": 1.62,
      "atrPct": 0.158,
      "score": 3,
      "raisons": "tendance haussiere, volume x1.6",
      "avis": "",
      "spark": [
        1231.25,
        1231.75,
        1232.5,
        1233.0,
        1233.25,
        1233.0,
        1234.0,
        1234.75,
        1235.0,
        1235.75,
        1236.5,
        1236.5,
        1235.75,
        1233.0,
        1234.0,
        1240.25,
        1234.25,
        1233.5,
        1231.0,
        1232.0,
        1232.5,
        1233.5,
        1232.75,
        1231.25,
        1231.5
      ]
    },
    {
      "symbole": "^FTSE",
      "nom": "FTSE 100",
      "classe": "indices",
      "prix": 10902.56,
      "devise": "GBP",
      "ouvert": false,
      "r1h": 0.07,
      "r4h": 0.34,
      "rsi": 62.7,
      "volRatio": 0.0,
      "atrPct": 0.12,
      "score": 3,
      "raisons": "tendance haussiere, RSI 63",
      "avis": "",
      "spark": [
        10836.990234,
        10848.080078,
        10846.400391,
        10824.009766,
        10840.459961,
        10860.709961,
        10867.290039,
        10854.019531,
        10863.589844,
        10881.719727,
        10894.120117,
        10893.759766,
        10889.25,
        10873.980469,
        10872.320312,
        10871.040039,
        10874.209961,
        10881.75,
        10876.55957,
        10877.049805,
        10887.650391,
        10887.259766,
        10897.30957,
        10907.410156,
        10902.56
      ]
    }
  ],
  "stats": {
    "nbTrades": 33,
    "gagnants": 11,
    "frais": 4.970370085781903,
    "pnl": -3.7325220563183663
  },
  "marche": {
    "analyses": 125,
    "echecs": 1,
    "ouverts": {
      "devises": 0,
      "indices": 0,
      "actions": 0,
      "matieres": 0
    },
    "achatsBloques": null
  },
  "regime": "normal",
  "derniereExecution": "2026-11-14T21:41:17",
  "derniereVerif": "2026-11-14T21:44:28"
};
