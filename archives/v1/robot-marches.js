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
  "liquidites": 375.34,
  "refInitial": 7726.45,
  "positions": [],
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
    },
    {
      "symbole": "SU.PA",
      "nom": "Schneider Electric S.E.",
      "classe": "actions",
      "montant": 70.76,
      "prixEntree": 243.7218,
      "prixSortie": 241.17935,
      "devise": "EUR",
      "ouvertLe": "2026-11-12T16:56:49",
      "fermeLe": "2026-11-16T12:43:06",
      "pnl": -0.88,
      "pnlPct": -1.24,
      "motifEntree": "score 5 : tendance haussiere, volume x2.0, elan 1 h, RSI 55",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "symbole": "TSLA",
      "nom": "Tesla, Inc.",
      "classe": "actions",
      "montant": 71.13,
      "prixEntree": 393.026415,
      "prixSortie": 379.55013,
      "devise": "USD",
      "ouvertLe": "2026-11-11T18:55:36",
      "fermeLe": "2026-11-16T22:16:02",
      "pnl": -2.58,
      "pnlPct": -3.63,
      "motifEntree": "score 5 : tendance haussiere, volume x2.0, RSI 69",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "symbole": "GOOGL",
      "nom": "Alphabet Inc.",
      "classe": "actions",
      "montant": 70.76,
      "prixEntree": 296.823338,
      "prixSortie": 283.57814,
      "devise": "USD",
      "ouvertLe": "2026-11-12T16:56:49",
      "fermeLe": "2026-11-16T22:16:02",
      "pnl": -3.29,
      "pnlPct": -4.65,
      "motifEntree": "score 6 : tendance haussiere, volume x2.3, elan 1 h, RSI 68",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "symbole": "LLY",
      "nom": "Eli Lilly and Company",
      "classe": "actions",
      "montant": 68.96,
      "prixEntree": 1444.406842,
      "prixSortie": 1430.954165,
      "devise": "USD",
      "ouvertLe": "2026-11-13T18:38:41",
      "fermeLe": "2026-11-16T22:16:02",
      "pnl": -0.78,
      "pnlPct": -1.13,
      "motifEntree": "score 5 : tendance haussiere, volume x2.5, RSI 63",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "symbole": "NKE",
      "nom": "NIKE, Inc.",
      "classe": "actions",
      "montant": 66.07,
      "prixEntree": 38.27913,
      "prixSortie": 35.832075,
      "devise": "USD",
      "ouvertLe": "2026-11-16T22:16:02",
      "fermeLe": "2026-11-17T22:46:13",
      "pnl": -4.35,
      "pnlPct": -6.58,
      "motifEntree": "score 5 : tendance haussiere, volume x1.9, elan 1 h, RSI 66",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "symbole": "NG=F",
      "nom": "Gaz naturel",
      "classe": "matieres",
      "montant": 64.33,
      "prixEntree": 3.686842,
      "prixSortie": 3.647176,
      "devise": "USD",
      "ouvertLe": "2026-11-20T17:51:47",
      "fermeLe": "2026-11-23T00:53:05",
      "pnl": -0.75,
      "pnlPct": -1.17,
      "motifEntree": "score 5 : tendance haussiere, volume x1.6, elan 1 h, RSI 59",
      "motifSortie": "duree maximale atteinte",
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
    },
    {
      "t": "2026-11-15T01:21:30",
      "valeur": 673.24,
      "ref": 978.67
    },
    {
      "t": "2026-11-15T07:52:42",
      "valeur": 672.51,
      "ref": 978.67
    },
    {
      "t": "2026-11-15T15:27:41",
      "valeur": 673.8,
      "ref": 978.67
    },
    {
      "t": "2026-11-15T20:55:55",
      "valeur": 670.41,
      "ref": 978.67
    },
    {
      "t": "2026-11-16T00:47:15",
      "valeur": 673.09,
      "ref": 978.67
    },
    {
      "t": "2026-11-16T04:15:55",
      "valeur": 670.22,
      "ref": 978.67
    },
    {
      "t": "2026-11-16T12:43:06",
      "valeur": 664.47,
      "ref": 978.67
    },
    {
      "t": "2026-11-16T22:16:02",
      "valeur": 660.58,
      "ref": 959.9
    },
    {
      "t": "2026-11-17T04:59:34",
      "valeur": 661.4,
      "ref": 959.9
    },
    {
      "t": "2026-11-17T14:05:55",
      "valeur": 663.93,
      "ref": 959.9
    },
    {
      "t": "2026-11-17T22:44:59",
      "valeur": 652.49,
      "ref": 950.05
    },
    {
      "t": "2026-11-18T04:10:45",
      "valeur": 653.49,
      "ref": 950.05
    },
    {
      "t": "2026-11-18T12:43:13",
      "valeur": 647.01,
      "ref": 950.05
    },
    {
      "t": "2026-11-18T20:38:35",
      "valeur": 643.71,
      "ref": 947.44
    },
    {
      "t": "2026-11-19T02:29:35",
      "valeur": 643.12,
      "ref": 947.86
    },
    {
      "t": "2026-11-19T10:25:28",
      "valeur": 651.6,
      "ref": 947.86
    },
    {
      "t": "2026-11-19T19:31:19",
      "valeur": 636.27,
      "ref": 935.9
    },
    {
      "t": "2026-11-20T01:52:51",
      "valeur": 632.48,
      "ref": 928.74
    },
    {
      "t": "2026-11-20T08:57:25",
      "valeur": 638.3,
      "ref": 928.74
    },
    {
      "t": "2026-11-20T17:51:47",
      "valeur": 643.28,
      "ref": 911.63
    },
    {
      "t": "2026-11-20T23:52:05",
      "valeur": 635.54,
      "ref": 894.38
    },
    {
      "t": "2026-11-21T04:39:31",
      "valeur": 633.33,
      "ref": 894.38
    },
    {
      "t": "2026-11-21T12:49:13",
      "valeur": 632.27,
      "ref": 894.38
    },
    {
      "t": "2026-11-21T19:17:59",
      "valeur": 631.38,
      "ref": 894.38
    },
    {
      "t": "2026-11-22T00:28:51",
      "valeur": 629.88,
      "ref": 894.38
    },
    {
      "t": "2026-11-22T04:25:51",
      "valeur": 630.69,
      "ref": 894.38
    },
    {
      "t": "2026-11-22T12:50:35",
      "valeur": 631.32,
      "ref": 894.38
    },
    {
      "t": "2026-11-22T19:43:04",
      "valeur": 632.73,
      "ref": 894.38
    },
    {
      "t": "2026-11-23T00:53:05",
      "valeur": 629.72,
      "ref": 894.38
    },
    {
      "t": "2026-11-23T06:06:25",
      "valeur": 630.0,
      "ref": 894.38
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
    },
    {
      "t": "2026-11-16T12:43:06",
      "texte": "Vente Schneider Electric S.E. (duree maximale atteinte) : -0.88 EUR (-1.2 %)"
    },
    {
      "t": "2026-11-16T22:16:02",
      "texte": "Vente Tesla, Inc. (stop-loss) : -2.58 EUR (-3.6 %)"
    },
    {
      "t": "2026-11-16T22:16:02",
      "texte": "Vente Alphabet Inc. (stop-loss) : -3.29 EUR (-4.7 %)"
    },
    {
      "t": "2026-11-16T22:16:02",
      "texte": "Vente Eli Lilly and Company (duree maximale atteinte) : -0.78 EUR (-1.1 %)"
    },
    {
      "t": "2026-11-16T22:16:02",
      "texte": "Achat NIKE, Inc. pour 66.07 EUR (stop -1.1 %, gain +1.8 % ; score 5 : tendance haussiere, volume x1.9, elan 1 h, RSI 66)"
    },
    {
      "t": "2026-11-17T22:46:13",
      "texte": "Vente NIKE, Inc. (stop-loss) : -4.35 EUR (-6.6 %)"
    },
    {
      "t": "2026-11-20T17:51:47",
      "texte": "Achat Gaz naturel pour 64.33 EUR (stop -2.7 %, gain +4.4 % ; score 5 : tendance haussiere, volume x1.6, elan 1 h, RSI 59)"
    },
    {
      "t": "2026-11-23T00:53:05",
      "texte": "Vente Gaz naturel (duree maximale atteinte) : -0.75 EUR (-1.2 %)"
    }
  ],
  "signaux": [
    {
      "symbole": "ML.PA",
      "nom": "MICHELIN",
      "classe": "actions",
      "prix": 31.21,
      "devise": "EUR",
      "ouvert": false,
      "r1h": 0.39,
      "r4h": 0.35,
      "rsi": 62.1,
      "volRatio": 4.92,
      "atrPct": 0.253,
      "score": 4,
      "raisons": "volume x4.9, elan 1 h, RSI 62",
      "avis": "",
      "spark": [
        31.82,
        31.799999,
        31.780001,
        31.77,
        31.809999,
        31.690001,
        31.639999,
        31.290001,
        31.389999,
        31.190001,
        31.01,
        31.200001,
        31.190001,
        31.219999,
        31.200001,
        31.17,
        31.1,
        31.040001,
        31.049999,
        31.02,
        31.190001,
        31.08,
        31.129999,
        31.18,
        31.21
      ]
    },
    {
      "symbole": "COST",
      "nom": "Costco Wholesale Corporation",
      "classe": "actions",
      "prix": 1102.15,
      "devise": "USD",
      "ouvert": false,
      "r1h": -0.55,
      "r4h": -1.44,
      "rsi": 23.5,
      "volRatio": 3.19,
      "atrPct": 0.296,
      "score": 4,
      "raisons": "tendance haussiere, volume x3.2",
      "avis": "",
      "spark": [
        1085.22998,
        1085.5,
        1085.930054,
        1089.432495,
        1088.859985,
        1091.797974,
        1092.449951,
        1091.214966,
        1091.880005,
        1092.130005,
        1093.670044,
        1106.390015,
        1116.51001,
        1119.670044,
        1120.0,
        1119.109985,
        1116.780029,
        1114.790039,
        1113.060059,
        1113.400024,
        1107.0,
        1107.334961,
        1107.624023,
        1104.02002,
        1102.15
      ]
    },
    {
      "symbole": "SI=F",
      "nom": "Argent",
      "classe": "matieres",
      "prix": 42.085,
      "devise": "USD",
      "ouvert": true,
      "r1h": 1.36,
      "r4h": 0.17,
      "rsi": 53.0,
      "volRatio": 0.58,
      "atrPct": 0.734,
      "score": 4,
      "raisons": "tendance haussiere, elan 1 h, RSI 53",
      "avis": "",
      "spark": [
        42.330002,
        41.48,
        41.57,
        41.32,
        41.314999,
        41.055,
        40.939999,
        40.865002,
        41.334999,
        40.915001,
        41.02,
        40.875,
        40.810001,
        40.860001,
        41.07,
        41.959999,
        42.205002,
        41.965,
        41.924999,
        42.16,
        41.945,
        41.619999,
        41.445,
        42.075001,
        42.085
      ]
    },
    {
      "symbole": "WMT",
      "nom": "Walmart Inc.",
      "classe": "actions",
      "prix": 127.95,
      "devise": "USD",
      "ouvert": false,
      "r1h": -0.72,
      "r4h": -1.39,
      "rsi": 24.0,
      "volRatio": 2.43,
      "atrPct": 0.353,
      "score": 4,
      "raisons": "tendance haussiere, volume x2.4",
      "avis": "",
      "spark": [
        125.544998,
        125.139999,
        125.445,
        126.677498,
        126.0,
        126.235001,
        126.389999,
        126.300003,
        126.050003,
        126.239998,
        126.050003,
        129.089996,
        130.074707,
        130.210007,
        130.044998,
        129.669998,
        129.761993,
        129.779999,
        129.600006,
        129.634003,
        128.600006,
        128.815002,
        128.815002,
        128.009995,
        127.95
      ]
    },
    {
      "symbole": "GC=F",
      "nom": "Or",
      "classe": "matieres",
      "prix": 3610.3,
      "devise": "USD",
      "ouvert": true,
      "r1h": 0.78,
      "r4h": 0.86,
      "rsi": 65.9,
      "volRatio": 0.37,
      "atrPct": 0.422,
      "score": 4,
      "raisons": "tendance haussiere, elan 1 h, RSI 66",
      "avis": "",
      "spark": [
        3578.899902,
        3537.0,
        3551.899902,
        3543.800049,
        3547.5,
        3530.5,
        3531.699951,
        3514.5,
        3535.600098,
        3513.600098,
        3524.699951,
        3515.699951,
        3526.199951,
        3523.800049,
        3515.399902,
        3574.300049,
        3584.399902,
        3574.0,
        3572.899902,
        3614.600098,
        3599.600098,
        3583.300049,
        3590.800049,
        3606.0,
        3610.3
      ]
    },
    {
      "symbole": "DTE.DE",
      "nom": "Deutsche Telekom AG",
      "classe": "actions",
      "prix": 26.34,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.11,
      "r4h": 0.73,
      "rsi": 67.9,
      "volRatio": 1.27,
      "atrPct": 0.278,
      "score": 3,
      "raisons": "tendance haussiere, RSI 68",
      "avis": "",
      "spark": [
        26.139999,
        26.209999,
        26.280001,
        26.110001,
        26.190001,
        26.1,
        26.059999,
        26.34,
        26.27,
        26.34,
        26.26,
        26.26,
        26.32,
        26.280001,
        26.299999,
        26.200001,
        26.18,
        26.129999,
        26.209999,
        26.23,
        26.299999,
        26.280001,
        26.33,
        26.389999,
        26.34
      ]
    },
    {
      "symbole": "ZS=F",
      "nom": "Soja",
      "classe": "matieres",
      "prix": 1228.0,
      "devise": "USX",
      "ouvert": true,
      "r1h": 0.06,
      "r4h": 0.39,
      "rsi": 67.9,
      "volRatio": 0.11,
      "atrPct": 0.208,
      "score": 3,
      "raisons": "tendance haussiere, RSI 68",
      "avis": "",
      "spark": [
        1211.25,
        1207.25,
        1208.25,
        1211.25,
        1211.25,
        1209.5,
        1210.75,
        1210.75,
        1212.25,
        1217.75,
        1217.75,
        1218.25,
        1218.25,
        1220.5,
        1221.0,
        1219.25,
        1223.0,
        1219.0,
        1221.75,
        1220.75,
        1225.25,
        1227.25,
        1228.25,
        1226.75,
        1228.0
      ]
    },
    {
      "symbole": "ACA.PA",
      "nom": "Crédit Agricole S.A.",
      "classe": "actions",
      "prix": 15.305,
      "devise": "EUR",
      "ouvert": false,
      "r1h": 0.26,
      "r4h": 0.56,
      "rsi": 62.3,
      "volRatio": 2.34,
      "atrPct": 0.266,
      "score": 3,
      "raisons": "volume x2.3, RSI 62",
      "avis": "",
      "spark": [
        15.555,
        15.55,
        15.565,
        15.59,
        15.53,
        15.51,
        15.44,
        15.335,
        15.34,
        15.295,
        15.225,
        15.335,
        15.31,
        15.285,
        15.27,
        15.24,
        15.23,
        15.23,
        15.26,
        15.295,
        15.34,
        15.3,
        15.245,
        15.26,
        15.305
      ]
    },
    {
      "symbole": "BZ=F",
      "nom": "Petrole Brent",
      "classe": "matieres",
      "prix": 90.01,
      "devise": "USD",
      "ouvert": true,
      "r1h": 0.28,
      "r4h": 0.07,
      "rsi": 65.9,
      "volRatio": 0.2,
      "atrPct": 0.302,
      "score": 3,
      "raisons": "tendance haussiere, RSI 66",
      "avis": "",
      "spark": [
        89.040001,
        88.18,
        88.410004,
        88.190002,
        88.800003,
        88.860001,
        89.239998,
        89.059998,
        89.059998,
        89.349998,
        89.699997,
        89.660004,
        89.68,
        90.099998,
        90.07,
        89.919998,
        89.309998,
        89.370003,
        89.279999,
        89.32,
        89.730003,
        89.720001,
        89.470001,
        89.489998,
        90.01
      ]
    },
    {
      "symbole": "ALV.DE",
      "nom": "Allianz SE",
      "classe": "actions",
      "prix": 451.8,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.13,
      "r4h": 0.16,
      "rsi": 57.1,
      "volRatio": 2.11,
      "atrPct": 0.22,
      "score": 3,
      "raisons": "volume x2.1, RSI 57",
      "avis": "",
      "spark": [
        458.950012,
        460.700012,
        461.0,
        461.299988,
        461.5,
        459.299988,
        458.100006,
        455.799988,
        453.600006,
        453.299988,
        450.200012,
        453.200012,
        453.200012,
        452.100006,
        452.700012,
        451.899994,
        451.600006,
        451.0,
        452.100006,
        451.799988,
        453.399994,
        452.399994,
        452.299988,
        451.299988,
        451.8
      ]
    },
    {
      "symbole": "EURJPY=X",
      "nom": "EUR/JPY",
      "classe": "devises",
      "prix": 174.613,
      "devise": "JPY",
      "ouvert": true,
      "r1h": 0.01,
      "r4h": 0.06,
      "rsi": 68.1,
      "volRatio": 0.0,
      "atrPct": 0.031,
      "score": 3,
      "raisons": "tendance haussiere, RSI 68",
      "avis": "",
      "spark": [
        174.419998,
        174.320007,
        174.268005,
        174.235001,
        174.235001,
        174.192993,
        174.154007,
        173.944,
        173.781006,
        173.764999,
        173.845001,
        173.860001,
        173.904007,
        174.457993,
        174.393005,
        174.419006,
        174.537994,
        174.503998,
        174.533997,
        174.572998,
        174.602005,
        174.597,
        174.548004,
        174.612,
        174.613
      ]
    },
    {
      "symbole": "CL=F",
      "nom": "Petrole WTI",
      "classe": "matieres",
      "prix": 83.49,
      "devise": "USD",
      "ouvert": true,
      "r1h": 0.26,
      "r4h": 0.66,
      "rsi": 67.6,
      "volRatio": 0.12,
      "atrPct": 0.317,
      "score": 3,
      "raisons": "tendance haussiere, RSI 68",
      "avis": "",
      "spark": [
        82.190002,
        81.669998,
        81.639999,
        81.989998,
        81.660004,
        82.160004,
        82.300003,
        82.779999,
        83.0,
        83.080002,
        83.279999,
        83.010002,
        83.660004,
        83.970001,
        83.739998,
        83.410004,
        82.839996,
        82.879997,
        82.830002,
        82.910004,
        83.209999,
        83.239998,
        83.010002,
        83.010002,
        83.49
      ]
    },
    {
      "symbole": "VIE.PA",
      "nom": "Veolia Environnement SA",
      "classe": "actions",
      "prix": 33.75,
      "devise": "EUR",
      "ouvert": false,
      "r1h": 0.36,
      "r4h": 0.6,
      "rsi": 72.5,
      "volRatio": 2.18,
      "atrPct": 0.212,
      "score": 3,
      "raisons": "volume x2.2, elan 1 h",
      "avis": "",
      "spark": [
        33.970001,
        34.080002,
        34.040001,
        33.950001,
        33.939999,
        33.93,
        33.93,
        33.790001,
        33.689999,
        33.599998,
        33.459999,
        33.700001,
        33.68,
        33.630001,
        33.650002,
        33.650002,
        33.560001,
        33.509998,
        33.549999,
        33.509998,
        33.68,
        33.610001,
        33.73,
        33.73,
        33.75
      ]
    },
    {
      "symbole": "ORA.PA",
      "nom": "Orange S.A.",
      "classe": "actions",
      "prix": 15.115,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.3,
      "r4h": 0.03,
      "rsi": 55.3,
      "volRatio": 2.72,
      "atrPct": 0.182,
      "score": 3,
      "raisons": "volume x2.7, RSI 55",
      "avis": "",
      "spark": [
        14.995,
        15.05,
        15.08,
        15.005,
        15.02,
        15.01,
        15.01,
        15.185,
        15.19,
        15.165,
        15.115,
        15.13,
        15.14,
        15.15,
        15.15,
        15.13,
        15.13,
        15.09,
        15.09,
        15.105,
        15.11,
        15.11,
        15.15,
        15.12,
        15.115
      ]
    },
    {
      "symbole": "EURUSD=X",
      "nom": "EUR/USD",
      "classe": "devises",
      "prix": 1.0985,
      "devise": "USD",
      "ouvert": true,
      "r1h": 0.03,
      "r4h": -0.0,
      "rsi": 45.8,
      "volRatio": 0.0,
      "atrPct": 0.026,
      "score": 3,
      "raisons": "tendance haussiere, elan 1 h",
      "avis": "",
      "spark": [
        1.098298,
        1.098901,
        1.098418,
        1.097815,
        1.097333,
        1.096972,
        1.097213,
        1.097454,
        1.097093,
        1.096732,
        1.096611,
        1.096491,
        1.097454,
        1.098056,
        1.098056,
        1.098298,
        1.098418,
        1.098418,
        1.099022,
        1.098539,
        1.098418,
        1.098177,
        1.098177,
        1.098539,
        1.0985
      ]
    },
    {
      "symbole": "RI.PA",
      "nom": "Pernod Ricard SA",
      "classe": "actions",
      "prix": 71.24,
      "devise": "EUR",
      "ouvert": false,
      "r1h": 0.2,
      "r4h": 0.37,
      "rsi": 61.1,
      "volRatio": 1.48,
      "atrPct": 0.257,
      "score": 3,
      "raisons": "tendance haussiere, RSI 61",
      "avis": "",
      "spark": [
        70.779999,
        70.919998,
        70.760002,
        70.519997,
        70.559998,
        70.459999,
        70.760002,
        71.239998,
        71.239998,
        71.160004,
        70.779999,
        71.019997,
        71.239998,
        71.199997,
        71.220001,
        71.019997,
        71.099998,
        71.019997,
        71.120003,
        71.120003,
        71.139999,
        71.160004,
        71.139999,
        71.220001,
        71.24
      ]
    },
    {
      "symbole": "CAP.PA",
      "nom": "Capgemini SE",
      "classe": "actions",
      "prix": 117.7,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.47,
      "r4h": 1.25,
      "rsi": 69.2,
      "volRatio": 1.31,
      "atrPct": 0.464,
      "score": 3,
      "raisons": "tendance haussiere, RSI 69",
      "avis": "",
      "spark": [
        116.400002,
        117.050003,
        116.75,
        116.199997,
        115.900002,
        116.199997,
        115.900002,
        115.25,
        116.199997,
        115.849998,
        115.400002,
        116.5,
        116.25,
        117.199997,
        116.75,
        116.599998,
        116.300003,
        116.099998,
        116.550003,
        117.0,
        117.949997,
        118.699997,
        118.25,
        118.099998,
        117.7
      ]
    },
    {
      "symbole": "USDJPY=X",
      "nom": "USD/JPY",
      "classe": "devises",
      "prix": 158.998,
      "devise": "JPY",
      "ouvert": true,
      "r1h": -0.02,
      "r4h": 0.06,
      "rsi": 63.7,
      "volRatio": 0.0,
      "atrPct": 0.038,
      "score": 3,
      "raisons": "tendance haussiere, RSI 64",
      "avis": "",
      "spark": [
        158.671997,
        158.845993,
        158.686005,
        158.688995,
        158.740997,
        158.820999,
        158.841003,
        158.764999,
        158.542007,
        158.425003,
        158.468994,
        158.567993,
        158.597,
        158.925003,
        158.867004,
        158.845993,
        158.942001,
        158.904999,
        158.867004,
        158.949997,
        159.001007,
        159.018005,
        158.988007,
        159.001007,
        158.998
      ]
    },
    {
      "symbole": "EURCHF=X",
      "nom": "EUR/CHF",
      "classe": "devises",
      "prix": 0.9223,
      "devise": "CHF",
      "ouvert": true,
      "r1h": -0.01,
      "r4h": -0.02,
      "rsi": 49.5,
      "volRatio": 0.0,
      "atrPct": 0.07,
      "score": 2,
      "raisons": "tendance haussiere",
      "avis": "",
      "spark": [
        0.92181,
        0.92119,
        0.92126,
        0.92129,
        0.92102,
        0.92139,
        0.92132,
        0.92007,
        0.92033,
        0.92054,
        0.92094,
        0.92136,
        0.92081,
        0.92251,
        0.92252,
        0.92253,
        0.92271,
        0.9225,
        0.92219,
        0.92262,
        0.92256,
        0.9224,
        0.92224,
        0.9223,
        0.9223
      ]
    },
    {
      "symbole": "NFLX",
      "nom": "Netflix, Inc.",
      "classe": "actions",
      "prix": 56.73,
      "devise": "USD",
      "ouvert": false,
      "r1h": -0.5,
      "r4h": -1.6,
      "rsi": 31.9,
      "volRatio": 2.04,
      "atrPct": 0.567,
      "score": 2,
      "raisons": "volume x2.0",
      "avis": "",
      "spark": [
        59.435001,
        59.494999,
        59.439999,
        59.41,
        58.884998,
        58.799999,
        58.640099,
        58.525002,
        58.395,
        58.23,
        58.450001,
        59.02,
        58.869999,
        58.07,
        57.91,
        57.700001,
        57.57,
        57.555,
        57.294998,
        57.404999,
        57.415001,
        57.360001,
        57.064999,
        56.77,
        56.73
      ]
    },
    {
      "symbole": "BMW.DE",
      "nom": "BAYERISCHE MOTOREN WERKE AG S",
      "classe": "actions",
      "prix": 53.46,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.3,
      "r4h": -1.22,
      "rsi": 36.5,
      "volRatio": 3.88,
      "atrPct": 0.366,
      "score": 2,
      "raisons": "volume x3.9",
      "avis": "",
      "spark": [
        54.599998,
        54.400002,
        54.52,
        54.66,
        54.599998,
        54.619999,
        54.259998,
        54.380001,
        54.880001,
        54.84,
        54.48,
        54.700001,
        54.860001,
        54.740002,
        54.459999,
        54.32,
        54.040001,
        53.880001,
        54.02,
        54.02,
        53.860001,
        53.639999,
        53.52,
        53.639999,
        53.46
      ]
    },
    {
      "symbole": "CC=F",
      "nom": "Cacao",
      "classe": "matieres",
      "prix": 5150.0,
      "devise": "USD",
      "ouvert": false,
      "r1h": -3.05,
      "r4h": -3.63,
      "rsi": 13.8,
      "volRatio": 0.22,
      "atrPct": 0.748,
      "score": 2,
      "raisons": "tendance haussiere",
      "avis": "",
      "spark": [
        5205.0,
        5204.0,
        5192.0,
        5148.0,
        5188.0,
        5166.0,
        4994.0,
        5147.0,
        5183.0,
        5222.0,
        5242.0,
        5248.0,
        5225.0,
        5254.0,
        5318.0,
        5347.0,
        5383.0,
        5303.0,
        5286.0,
        5280.0,
        5285.0,
        5302.0,
        5315.0,
        5294.0,
        5150.0
      ]
    },
    {
      "symbole": "SAN.PA",
      "nom": "Sanofi",
      "classe": "actions",
      "prix": 84.92,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.06,
      "r4h": -0.36,
      "rsi": 35.5,
      "volRatio": 0.94,
      "atrPct": 0.251,
      "score": 2,
      "raisons": "tendance haussiere",
      "avis": "",
      "spark": [
        83.989998,
        84.370003,
        84.410004,
        84.029999,
        83.75,
        83.68,
        83.5,
        84.480003,
        84.550003,
        85.150002,
        84.900002,
        85.220001,
        85.230003,
        85.360001,
        85.529999,
        85.419998,
        85.25,
        85.239998,
        85.260002,
        85.290001,
        85.25,
        84.949997,
        84.82,
        84.82,
        84.92
      ]
    },
    {
      "symbole": "JPM",
      "nom": "JPMorgan Chase & Co.",
      "classe": "actions",
      "prix": 310.53,
      "devise": "USD",
      "ouvert": false,
      "r1h": -0.23,
      "r4h": -1.5,
      "rsi": 31.2,
      "volRatio": 2.79,
      "atrPct": 0.418,
      "score": 2,
      "raisons": "volume x2.8",
      "avis": "",
      "spark": [
        321.765015,
        320.829987,
        319.765015,
        320.269989,
        320.309998,
        320.48999,
        320.595001,
        320.815002,
        320.799988,
        320.429993,
        320.26001,
        320.450012,
        318.959991,
        317.168304,
        316.339996,
        315.989899,
        314.51001,
        314.019989,
        313.362,
        314.434998,
        311.674988,
        311.700012,
        310.350006,
        310.540009,
        310.53
      ]
    },
    {
      "symbole": "ADS.DE",
      "nom": "adidas AG",
      "classe": "actions",
      "prix": 165.0,
      "devise": "EUR",
      "ouvert": false,
      "r1h": -0.57,
      "r4h": -1.81,
      "rsi": 24.3,
      "volRatio": 2.04,
      "atrPct": 0.406,
      "score": 2,
      "raisons": "volume x2.0",
      "avis": "",
      "spark": [
        173.050003,
        173.449997,
        173.25,
        173.649994,
        173.050003,
        172.0,
        171.899994,
        171.350006,
        171.0,
        170.449997,
        169.800003,
        170.350006,
        170.100006,
        168.75,
        169.199997,
        168.449997,
        168.0,
        167.399994,
        167.350006,
        167.300003,
        167.050003,
        166.149994,
        166.25,
        165.800003,
        165.0
      ]
    }
  ],
  "stats": {
    "nbTrades": 39,
    "gagnants": 11,
    "frais": 5.436544653761044,
    "pnl": -16.366127932293104
  },
  "marche": {
    "analyses": 125,
    "echecs": 1,
    "ouverts": {
      "matieres": 10,
      "indices": 0,
      "devises": 10,
      "actions": 0
    },
    "achatsBloques": null
  },
  "regime": "normal",
  "derniereExecution": "2026-11-23T06:06:25",
  "derniereVerif": "2026-11-22T19:46:29"
};
