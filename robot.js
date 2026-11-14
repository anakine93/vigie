// Genere par robot.ps1 - ne pas modifier a la main.
window.ROBOT = {
  "config": {
    "capitalInitial": 1000,
    "partBase": 0.1,
    "partFavorable": 0.15,
    "maxPositions": 4,
    "stopLoss": 0.03,
    "priseGain": 0.05,
    "dureeMaxH": 24,
    "scoreMin": 5,
    "rsiMax": 75,
    "volumeMinUsdt": 3000000,
    "univers": 150,
    "frais": 0.001,
    "cooldownH": 2,
    "btcChute1h": -0.01
  },
  "debut": "2026-10-15T17:31:16",
  "liquidites": 257.84,
  "btcInitialEur": 73357.12629325723,
  "positions": [
    {
      "paire": "RLUSDUSDT",
      "base": "RLUSD",
      "quantite": 75.40322428610675,
      "prixEntreeUsdt": 1.00260165,
      "montant": 68.63,
      "ouvertLe": "2026-11-13T23:52:47",
      "score": 5,
      "motif": "score 5 : tendance haussiere, volume x2.5, RSI 60",
      "volUsdt": 56935089.7088,
      "avis": "aucun",
      "prixActuelUsdt": 1.0007,
      "plusHaut": 1.00260165,
      "stopSuiveur": null
    },
    {
      "paire": "SOXSBUSDT",
      "base": "SOXSB",
      "quantite": 1.354207059858647,
      "prixEntreeUsdt": 54.79832,
      "montant": 67.42,
      "ouvertLe": "2026-11-14T21:40:42",
      "score": 6,
      "motif": "score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 59",
      "volUsdt": 3900726.6431,
      "avis": "aucun",
      "prixActuelUsdt": 54.7,
      "plusHaut": 54.86,
      "stopSuiveur": null
    }
  ],
  "trades": [
    {
      "paire": "DASHUSDT",
      "base": "DASH",
      "montant": 100.0,
      "prixEntreeUsdt": 49.01528,
      "prixSortieUsdt": 48.27612,
      "ouvertLe": "2026-10-15T17:31:16",
      "fermeLe": "2026-10-16T20:12:59",
      "pnl": -1.98,
      "pnlPct": -1.98,
      "motifEntree": "score 6 : tendance haussiere, volume x2.1, elan 1 h, RSI 70",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "QNTUSDT",
      "base": "QNT",
      "montant": 100.0,
      "prixEntreeUsdt": 208.15176,
      "prixSortieUsdt": 199.96692,
      "ouvertLe": "2026-10-15T17:31:16",
      "fermeLe": "2026-10-16T20:12:59",
      "pnl": -4.39,
      "pnlPct": -4.39,
      "motifEntree": "score 6 : tendance haussiere, volume x2.8, elan 1 h, RSI 60",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "PEPEUSDT",
      "base": "PEPE",
      "montant": 100.0,
      "prixEntreeUsdt": 4.1562E-06,
      "prixSortieUsdt": 3.9442E-06,
      "ouvertLe": "2026-10-15T17:31:16",
      "fermeLe": "2026-10-16T20:12:59",
      "pnl": -5.55,
      "pnlPct": -5.55,
      "motifEntree": "score 6 : tendance haussiere, volume x3.2, elan 1 h, RSI 69",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "BCHUSDT",
      "base": "BCH",
      "montant": 100.0,
      "prixEntreeUsdt": 276.3008,
      "prixSortieUsdt": 273.0036,
      "ouvertLe": "2026-10-15T17:31:16",
      "fermeLe": "2026-10-16T20:12:59",
      "pnl": -1.66,
      "pnlPct": -1.66,
      "motifEntree": "score 6 : tendance haussiere, volume x3.6, elan 1 h, RSI 69",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "AMPUSDT",
      "base": "AMP",
      "montant": 99.33,
      "prixEntreeUsdt": 0.000785128,
      "prixSortieUsdt": 0.000739032,
      "ouvertLe": "2026-10-16T20:12:59",
      "fermeLe": "2026-10-16T23:16:11",
      "pnl": -6.08,
      "pnlPct": -6.12,
      "motifEntree": "score 5 : tendance haussiere, volume x4.4, RSI 63",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "RADUSDT",
      "base": "RAD",
      "montant": 98.63,
      "prixEntreeUsdt": 0.324292,
      "prixSortieUsdt": 0.30378,
      "ouvertLe": "2026-10-16T23:16:11",
      "fermeLe": "2026-10-17T01:40:53",
      "pnl": -6.43,
      "pnlPct": -6.52,
      "motifEntree": "score 5 : tendance haussiere, volume x2.1, RSI 65",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "LDOUSDT",
      "base": "LDO",
      "montant": 97.99,
      "prixEntreeUsdt": 0.4068208,
      "prixSortieUsdt": 0.389436,
      "ouvertLe": "2026-10-17T08:08:41",
      "fermeLe": "2026-10-17T15:57:16",
      "pnl": -4.36,
      "pnlPct": -4.45,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 70",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "LSKUSDT",
      "base": "LSK",
      "montant": 97.76,
      "prixEntreeUsdt": 0.2067236,
      "prixSortieUsdt": 0.2097576,
      "ouvertLe": "2026-10-17T15:57:16",
      "fermeLe": "2026-10-17T21:06:51",
      "pnl": 1.29,
      "pnlPct": 1.32,
      "motifEntree": "score 5 : tendance haussiere, volume x10.4, RSI 55",
      "motifSortie": "avis defavorable (agent Technique)",
      "avis": "aucun"
    },
    {
      "paire": "SANDUSDT",
      "base": "SAND",
      "montant": 97.83,
      "prixEntreeUsdt": 0.0588846,
      "prixSortieUsdt": 0.05964048,
      "ouvertLe": "2026-10-17T12:41:49",
      "fermeLe": "2026-10-17T23:26:03",
      "pnl": 1.09,
      "pnlPct": 1.11,
      "motifEntree": "score 6 : tendance haussiere, volume x6.3, elan 1 h, RSI 60",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "AVAUSDT",
      "base": "AVA",
      "montant": 97.76,
      "prixEntreeUsdt": 0.3253964,
      "prixSortieUsdt": 0.3852528,
      "ouvertLe": "2026-10-17T15:57:16",
      "fermeLe": "2026-10-18T01:19:50",
      "pnl": 17.83,
      "pnlPct": 18.23,
      "motifEntree": "score 5 : tendance haussiere, volume x2.5, RSI 60",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "ALTUSDT",
      "base": "ALT",
      "montant": 100.12,
      "prixEntreeUsdt": 0.00957816,
      "prixSortieUsdt": 0.00877476,
      "ouvertLe": "2026-10-17T23:26:03",
      "fermeLe": "2026-10-18T01:19:50",
      "pnl": -8.55,
      "pnlPct": -8.54,
      "motifEntree": "score 5 : tendance haussiere, volume x1.9, elan 1 h, RSI 67",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "CAKEUSDT",
      "base": "CAKE",
      "montant": 97.76,
      "prixEntreeUsdt": 2.206792,
      "prixSortieUsdt": 2.172276,
      "ouvertLe": "2026-10-17T15:57:16",
      "fermeLe": "2026-10-18T08:00:37",
      "pnl": -1.69,
      "pnlPct": -1.72,
      "motifEntree": "score 5 : tendance haussiere, cassure du plus haut 12 h, elan 1 h",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "BCHUSDT",
      "base": "BCH",
      "montant": 100.12,
      "prixEntreeUsdt": 277.104,
      "prixSortieUsdt": 270.2148,
      "ouvertLe": "2026-10-17T23:26:03",
      "fermeLe": "2026-10-18T16:18:37",
      "pnl": -2.67,
      "pnlPct": -2.67,
      "motifEntree": "score 5 : tendance haussiere, volume x2.1, RSI 65",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "AMPUSDT",
      "base": "AMP",
      "montant": 98.49,
      "prixEntreeUsdt": 0.00076304,
      "prixSortieUsdt": 0.000738036,
      "ouvertLe": "2026-10-18T12:54:16",
      "fermeLe": "2026-10-18T16:18:37",
      "pnl": -3.42,
      "pnlPct": -3.47,
      "motifEntree": "score 6 : tendance haussiere, volume x4.2, elan 1 h, RSI 69",
      "motifSortie": "avis defavorable (agent Technique)",
      "avis": "aucun"
    },
    {
      "paire": "SOLUSDT",
      "base": "SOL",
      "montant": 98.49,
      "prixEntreeUsdt": 104.11203,
      "prixSortieUsdt": 102.418765,
      "ouvertLe": "2026-10-18T12:54:16",
      "fermeLe": "2026-10-18T16:18:37",
      "pnl": -1.79,
      "pnlPct": -1.82,
      "motifEntree": "score 5 : tendance haussiere, volume x2.4, RSI 66",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "HBARUSDT",
      "base": "HBAR",
      "montant": 98.49,
      "prixEntreeUsdt": 0.08907488,
      "prixSortieUsdt": 0.08523196,
      "ouvertLe": "2026-10-18T12:54:16",
      "fermeLe": "2026-10-18T19:26:25",
      "pnl": -4.39,
      "pnlPct": -4.46,
      "motifEntree": "score 5 : tendance haussiere, volume x1.7, elan 1 h, RSI 67",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "OGNUSDT",
      "base": "OGN",
      "montant": 97.5,
      "prixEntreeUsdt": 0.03059188,
      "prixSortieUsdt": 0.02902344,
      "ouvertLe": "2026-10-18T16:18:37",
      "fermeLe": "2026-10-18T19:26:25",
      "pnl": -5.14,
      "pnlPct": -5.28,
      "motifEntree": "score 5 : tendance haussiere, volume x3.1, RSI 55",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "AMPUSDT",
      "base": "AMP",
      "montant": 96.81,
      "prixEntreeUsdt": 0.000779104,
      "prixSortieUsdt": 0.000864528,
      "ouvertLe": "2026-10-18T21:33:31",
      "fermeLe": "2026-10-19T16:37:21",
      "pnl": 10.5,
      "pnlPct": 10.85,
      "motifEntree": "score 6 : tendance haussiere, volume x2.9, elan 1 h, RSI 60",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "KORUBUSDT",
      "base": "KORUB",
      "montant": 96.87,
      "prixEntreeUsdt": 10.65244,
      "prixSortieUsdt": 11.952,
      "ouvertLe": "2026-10-19T01:45:20",
      "fermeLe": "2026-10-20T01:48:42",
      "pnl": 11.66,
      "pnlPct": 12.04,
      "motifEntree": "score 5 : tendance haussiere, volume x3.7, RSI 68",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "SKHYBUSDT",
      "base": "SKHYB",
      "montant": 96.87,
      "prixEntreeUsdt": 135.12836,
      "prixSortieUsdt": 138.08544,
      "ouvertLe": "2026-10-19T01:45:20",
      "fermeLe": "2026-10-20T04:09:26",
      "pnl": 1.93,
      "pnlPct": 1.99,
      "motifEntree": "score 5 : tendance haussiere, volume x10.2, RSI 58",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "DRAMBUSDT",
      "base": "DRAMB",
      "montant": 96.87,
      "prixEntreeUsdt": 46.3346,
      "prixSortieUsdt": 47.27016,
      "ouvertLe": "2026-10-19T01:45:20",
      "fermeLe": "2026-10-20T04:09:26",
      "pnl": 1.77,
      "pnlPct": 1.82,
      "motifEntree": "score 5 : tendance haussiere, volume x5.2, RSI 64",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "MORPHOUSDT",
      "base": "MORPHO",
      "montant": 100.41,
      "prixEntreeUsdt": 2.483896,
      "prixSortieUsdt": 2.433228,
      "ouvertLe": "2026-10-19T16:37:21",
      "fermeLe": "2026-10-20T09:33:09",
      "pnl": -2.42,
      "pnlPct": -2.41,
      "motifEntree": "score 6 : tendance haussiere, volume x2.2, elan 1 h, RSI 53",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "BCHUSDT",
      "base": "BCH",
      "montant": 98.7,
      "prixEntreeUsdt": 279.112,
      "prixSortieUsdt": 273.8004,
      "ouvertLe": "2026-10-20T04:09:26",
      "fermeLe": "2026-10-20T09:33:09",
      "pnl": -2.18,
      "pnlPct": -2.21,
      "motifEntree": "score 5 : tendance haussiere, volume x2.1, elan 1 h",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "BMTUSDT",
      "base": "BMT",
      "montant": 98.76,
      "prixEntreeUsdt": 0.01966836,
      "prixSortieUsdt": 0.01944192,
      "ouvertLe": "2026-10-20T14:56:59",
      "fermeLe": "2026-10-20T19:51:30",
      "pnl": -1.39,
      "pnlPct": -1.41,
      "motifEntree": "score 5 : tendance haussiere, volume x5.0, RSI 69",
      "motifSortie": "avis defavorable (agent Technique)",
      "avis": "aucun"
    },
    {
      "paire": "RAYUSDT",
      "base": "RAY",
      "montant": 99.68,
      "prixEntreeUsdt": 2.0686416,
      "prixSortieUsdt": 1.98204,
      "ouvertLe": "2026-10-20T19:51:30",
      "fermeLe": "2026-10-21T04:04:51",
      "pnl": -4.28,
      "pnlPct": -4.3,
      "motifEntree": "score 6 : tendance haussiere, volume x2.6, elan 1 h, RSI 68",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "APTUSDT",
      "base": "APT",
      "montant": 98.76,
      "prixEntreeUsdt": 0.7864332,
      "prixSortieUsdt": 0.8223972,
      "ouvertLe": "2026-10-20T14:56:59",
      "fermeLe": "2026-10-21T15:10:32",
      "pnl": 4.31,
      "pnlPct": 4.36,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 63",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "TSLABUSDT",
      "base": "TSLAB",
      "montant": 98.76,
      "prixEntreeUsdt": 370.5764,
      "prixSortieUsdt": 378.86844,
      "ouvertLe": "2026-10-20T14:56:59",
      "fermeLe": "2026-10-21T15:10:32",
      "pnl": 2.0,
      "pnlPct": 2.03,
      "motifEntree": "score 6 : tendance haussiere, volume x2.0, elan 1 h, RSI 55",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "WLDUSDT",
      "base": "WLD",
      "montant": 98.7,
      "prixEntreeUsdt": 0.5337995,
      "prixSortieUsdt": 0.573139,
      "ouvertLe": "2026-10-20T04:09:26",
      "fermeLe": "2026-10-21T20:03:34",
      "pnl": 6.9,
      "pnlPct": 6.99,
      "motifEntree": "score 5 : tendance haussiere, volume x2.1, elan 1 h",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "DOTUSDT",
      "base": "DOT",
      "montant": 99.39,
      "prixEntreeUsdt": 1.181708,
      "prixSortieUsdt": 1.146396,
      "ouvertLe": "2026-10-21T15:10:32",
      "fermeLe": "2026-10-22T02:11:49",
      "pnl": -3.19,
      "pnlPct": -3.21,
      "motifEntree": "score 7 : tendance haussiere, cassure du plus haut 12 h, volume x2.1, elan 1 h",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "ARBUSDT",
      "base": "ARB",
      "montant": 99.46,
      "prixEntreeUsdt": 0.19298905,
      "prixSortieUsdt": 0.1833636,
      "ouvertLe": "2026-10-21T04:04:51",
      "fermeLe": "2026-10-22T06:52:39",
      "pnl": -5.3,
      "pnlPct": -5.32,
      "motifEntree": "score 6 : tendance haussiere, volume x2.1, elan 1 h, RSI 65",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "ONDOUSDT",
      "base": "ONDO",
      "montant": 99.39,
      "prixEntreeUsdt": 0.4662576,
      "prixSortieUsdt": 0.4433196,
      "ouvertLe": "2026-10-21T15:10:32",
      "fermeLe": "2026-10-22T06:52:39",
      "pnl": -5.2,
      "pnlPct": -5.23,
      "motifEntree": "score 7 : tendance haussiere, cassure du plus haut 12 h, volume x2.3, elan 1 h",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "TAOUSDT",
      "base": "TAO",
      "montant": 99.26,
      "prixEntreeUsdt": 279.11805,
      "prixSortieUsdt": 264.70235,
      "ouvertLe": "2026-10-21T20:03:34",
      "fermeLe": "2026-10-22T06:52:39",
      "pnl": -5.38,
      "pnlPct": -5.42,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut 12 h, volume x1.5, elan 1 h",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "PHAUSDT",
      "base": "PHA",
      "montant": 97.18,
      "prixEntreeUsdt": 0.0675692,
      "prixSortieUsdt": 0.0621504,
      "ouvertLe": "2026-10-22T06:52:39",
      "fermeLe": "2026-10-22T11:47:09",
      "pnl": -7.85,
      "pnlPct": -8.08,
      "motifEntree": "score 5 : tendance haussiere, volume x4.1, RSI 67",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "PROMUSDT",
      "base": "PROM",
      "montant": 98.3,
      "prixEntreeUsdt": 5.931632,
      "prixSortieUsdt": 5.71704,
      "ouvertLe": "2026-10-22T02:11:49",
      "fermeLe": "2026-10-22T16:43:00",
      "pnl": -3.42,
      "pnlPct": -3.48,
      "motifEntree": "score 6 : tendance haussiere, volume x5.1, elan 1 h, RSI 62",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "ARKMUSDT",
      "base": "ARKM",
      "montant": 96.3,
      "prixEntreeUsdt": 0.1392548,
      "prixSortieUsdt": 0.1318704,
      "ouvertLe": "2026-10-22T11:47:09",
      "fermeLe": "2026-10-22T16:43:00",
      "pnl": -5.01,
      "pnlPct": -5.2,
      "motifEntree": "score 5 : tendance haussiere, volume x5.8, RSI 62",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "BMTUSDT",
      "base": "BMT",
      "montant": 95.54,
      "prixEntreeUsdt": 0.02822244,
      "prixSortieUsdt": 0.02598564,
      "ouvertLe": "2026-10-22T20:53:00",
      "fermeLe": "2026-10-23T00:02:39",
      "pnl": -7.73,
      "pnlPct": -8.09,
      "motifEntree": "score 6 : tendance haussiere, volume x2.3, elan 1 h, RSI 63",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "GTCUSDT",
      "base": "GTC",
      "montant": 95.08,
      "prixEntreeUsdt": 0.29245516,
      "prixSortieUsdt": 0.32058252,
      "ouvertLe": "2026-10-22T16:43:00",
      "fermeLe": "2026-10-23T07:20:18",
      "pnl": 8.72,
      "pnlPct": 9.17,
      "motifEntree": "score 5 : tendance haussiere, volume x2.3, RSI 59",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "RLUSDUSDT",
      "base": "RLUSD",
      "montant": 96.3,
      "prixEntreeUsdt": 1.00280195,
      "prixSortieUsdt": 0.9996982,
      "ouvertLe": "2026-10-22T11:47:09",
      "fermeLe": "2026-10-23T12:16:11",
      "pnl": -0.26,
      "pnlPct": -0.27,
      "motifEntree": "score 5 : tendance haussiere, volume x4.0, RSI 67",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "DASHUSDT",
      "base": "DASH",
      "montant": 94.82,
      "prixEntreeUsdt": 53.28228,
      "prixSortieUsdt": 53.286,
      "ouvertLe": "2026-10-23T00:02:39",
      "fermeLe": "2026-10-23T17:12:10",
      "pnl": -0.04,
      "pnlPct": -0.04,
      "motifEntree": "score 5 : tendance haussiere, cassure du plus haut 12 h, elan 1 h",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "INJUSDT",
      "base": "INJ",
      "montant": 95.01,
      "prixEntreeUsdt": 8.080192,
      "prixSortieUsdt": 7.826568,
      "ouvertLe": "2026-10-23T12:16:11",
      "fermeLe": "2026-10-23T17:12:10",
      "pnl": -3.15,
      "pnlPct": -3.32,
      "motifEntree": "score 5 : tendance haussiere, volume x2.7, elan 1 h",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "COTIUSDT",
      "base": "COTI",
      "montant": 95.04,
      "prixEntreeUsdt": 0.01195764,
      "prixSortieUsdt": 0.01117512,
      "ouvertLe": "2026-10-23T17:12:10",
      "fermeLe": "2026-10-23T21:17:20",
      "pnl": -6.37,
      "pnlPct": -6.7,
      "motifEntree": "score 6 : tendance haussiere, volume x13.1, elan 1 h, RSI 57",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "BCHUSDT",
      "base": "BCH",
      "montant": 95.43,
      "prixEntreeUsdt": 288.4492,
      "prixSortieUsdt": 281.868,
      "ouvertLe": "2026-10-23T07:20:18",
      "fermeLe": "2026-10-24T00:22:08",
      "pnl": -2.25,
      "pnlPct": -2.36,
      "motifEntree": "score 5 : tendance haussiere, volume x3.1, elan 1 h",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "BNBUSDT",
      "base": "BNB",
      "montant": 95.01,
      "prixEntreeUsdt": 749.84308,
      "prixSortieUsdt": 740.078215,
      "ouvertLe": "2026-10-23T12:16:11",
      "fermeLe": "2026-10-24T00:22:08",
      "pnl": -1.43,
      "pnlPct": -1.5,
      "motifEntree": "score 5 : tendance haussiere, volume x4.5, elan 1 h",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "ARKUSDT",
      "base": "ARK",
      "montant": 95.04,
      "prixEntreeUsdt": 0.2181692,
      "prixSortieUsdt": 0.2152356,
      "ouvertLe": "2026-10-23T17:12:10",
      "fermeLe": "2026-10-24T07:17:32",
      "pnl": -1.42,
      "pnlPct": -1.49,
      "motifEntree": "score 6 : tendance haussiere, volume x2.1, elan 1 h, RSI 63",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "ERAUSDT",
      "base": "ERA",
      "montant": 94.54,
      "prixEntreeUsdt": 0.0900588,
      "prixSortieUsdt": 0.08237625,
      "ouvertLe": "2026-10-24T02:52:44",
      "fermeLe": "2026-10-24T11:37:56",
      "pnl": -8.23,
      "pnlPct": -8.7,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut 12 h, volume x4.3",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "KATUSDT",
      "base": "KAT",
      "montant": 94.54,
      "prixEntreeUsdt": 0.00470876,
      "prixSortieUsdt": 0.0043824,
      "ouvertLe": "2026-10-24T07:17:32",
      "fermeLe": "2026-10-24T11:37:56",
      "pnl": -6.73,
      "pnlPct": -7.11,
      "motifEntree": "score 5 : tendance haussiere, volume x4.0, RSI 62",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "TREEUSDT",
      "base": "TREE",
      "montant": 92.69,
      "prixEntreeUsdt": 0.0519068,
      "prixSortieUsdt": 0.0477084,
      "ouvertLe": "2026-10-24T11:37:56",
      "fermeLe": "2026-10-24T15:35:40",
      "pnl": -7.65,
      "pnlPct": -8.25,
      "motifEntree": "score 5 : tendance haussiere, volume x5.0, RSI 67",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "NILUSDT",
      "base": "NIL",
      "montant": 92.69,
      "prixEntreeUsdt": 0.08625364,
      "prixSortieUsdt": 0.08320584,
      "ouvertLe": "2026-10-24T11:37:56",
      "fermeLe": "2026-10-24T15:35:40",
      "pnl": -3.43,
      "pnlPct": -3.71,
      "motifEntree": "score 5 : tendance haussiere, volume x1.7, elan 1 h, RSI 65",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "ERAUSDT",
      "base": "ERA",
      "montant": 91.12,
      "prixEntreeUsdt": 0.09464175,
      "prixSortieUsdt": 0.09016455,
      "ouvertLe": "2026-10-24T15:35:40",
      "fermeLe": "2026-10-24T15:37:23",
      "pnl": -4.48,
      "pnlPct": -4.92,
      "motifEntree": "score 5 : tendance haussiere, volume x2.8, RSI 66",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "LUMIAUSDT",
      "base": "LUMIA",
      "montant": 92.69,
      "prixEntreeUsdt": 0.0777096,
      "prixSortieUsdt": 0.0749988,
      "ouvertLe": "2026-10-24T11:37:56",
      "fermeLe": "2026-10-24T15:39:57",
      "pnl": -3.39,
      "pnlPct": -3.66,
      "motifEntree": "score 5 : tendance haussiere, volume x2.9, RSI 65",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "WCTUSDT",
      "base": "WCT",
      "montant": 92.69,
      "prixEntreeUsdt": 0.03828252,
      "prixSortieUsdt": 0.03667272,
      "ouvertLe": "2026-10-24T11:37:56",
      "fermeLe": "2026-10-24T21:19:15",
      "pnl": -4.07,
      "pnlPct": -4.39,
      "motifEntree": "score 5 : tendance haussiere, volume x2.1, RSI 53",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "FUSDT",
      "base": "F",
      "montant": 90.56,
      "prixEntreeUsdt": 0.003419624,
      "prixSortieUsdt": 0.00308262,
      "ouvertLe": "2026-10-24T18:56:17",
      "fermeLe": "2026-10-24T21:19:15",
      "pnl": -9.11,
      "pnlPct": -10.06,
      "motifEntree": "score 5 : tendance haussiere, volume x2.6, RSI 56",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "RWUSDUSDT",
      "base": "RWUSD",
      "montant": 90.56,
      "prixEntreeUsdt": 1.0038996,
      "prixSortieUsdt": 0.9958008,
      "ouvertLe": "2026-10-24T18:56:17",
      "fermeLe": "2026-10-24T23:41:39",
      "pnl": -0.94,
      "pnlPct": -1.04,
      "motifEntree": "score 5 : tendance haussiere, volume x2.6, RSI 67",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "REZUSDT",
      "base": "REZ",
      "montant": 89.41,
      "prixEntreeUsdt": 0.004455752,
      "prixSortieUsdt": 0.00425292,
      "ouvertLe": "2026-10-24T21:19:15",
      "fermeLe": "2026-10-24T23:41:39",
      "pnl": -4.24,
      "pnlPct": -4.75,
      "motifEntree": "score 6 : tendance haussiere, volume x3.2, elan 1 h, RSI 62",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "ANIMEUSDT",
      "base": "ANIME",
      "montant": 88.94,
      "prixEntreeUsdt": 0.00377504,
      "prixSortieUsdt": 0.00355572,
      "ouvertLe": "2026-10-24T23:41:39",
      "fermeLe": "2026-10-25T01:45:40",
      "pnl": -5.35,
      "pnlPct": -6.02,
      "motifEntree": "score 5 : tendance haussiere, volume x2.5, RSI 59",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "STEEMUSDT",
      "base": "STEEM",
      "montant": 88.38,
      "prixEntreeUsdt": 0.05754928,
      "prixSortieUsdt": 0.05277804,
      "ouvertLe": "2026-10-25T02:45:44",
      "fermeLe": "2026-10-25T07:58:58",
      "pnl": -7.51,
      "pnlPct": -8.5,
      "motifEntree": "score 5 : tendance haussiere, volume x7.5, RSI 59",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "ASTERUSDT",
      "base": "ASTER",
      "montant": 88.4,
      "prixEntreeUsdt": 0.711836,
      "prixSortieUsdt": 0.6985944,
      "ouvertLe": "2026-10-25T01:45:40",
      "fermeLe": "2026-10-25T17:44:55",
      "pnl": -1.86,
      "pnlPct": -2.1,
      "motifEntree": "score 6 : tendance haussiere, volume x2.0, elan 1 h, RSI 62",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "LUMIAUSDT",
      "base": "LUMIA",
      "montant": 87.53,
      "prixEntreeUsdt": 0.0792156,
      "prixSortieUsdt": 0.0764928,
      "ouvertLe": "2026-10-25T07:58:58",
      "fermeLe": "2026-10-25T17:44:55",
      "pnl": -3.2,
      "pnlPct": -3.65,
      "motifEntree": "score 5 : tendance haussiere, volume x5.0, RSI 56",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "UUSDT",
      "base": "U",
      "montant": 90.56,
      "prixEntreeUsdt": 1.00180045,
      "prixSortieUsdt": 0.996498,
      "ouvertLe": "2026-10-24T18:56:17",
      "fermeLe": "2026-10-25T20:19:04",
      "pnl": -0.75,
      "pnlPct": -0.83,
      "motifEntree": "score 5 : tendance haussiere, volume x2.4, RSI 67",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "QNTUSDT",
      "base": "QNT",
      "montant": 87.06,
      "prixEntreeUsdt": 195.97076,
      "prixSortieUsdt": 188.8416,
      "ouvertLe": "2026-10-25T20:19:04",
      "fermeLe": "2026-10-25T22:55:20",
      "pnl": -3.46,
      "pnlPct": -3.97,
      "motifEntree": "score 5 : tendance haussiere, volume x2.0, elan 1 h",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "ICPUSDT",
      "base": "ICP",
      "montant": 87.11,
      "prixEntreeUsdt": 2.642528,
      "prixSortieUsdt": 2.606532,
      "ouvertLe": "2026-10-25T17:44:55",
      "fermeLe": "2026-10-26T00:53:11",
      "pnl": -1.48,
      "pnlPct": -1.7,
      "motifEntree": "score 5 : tendance haussiere, volume x3.4, RSI 59",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "RLUSDUSDT",
      "base": "RLUSD",
      "montant": 88.4,
      "prixEntreeUsdt": 1.0029021,
      "prixSortieUsdt": 0.99979805,
      "ouvertLe": "2026-10-25T01:45:40",
      "fermeLe": "2026-10-26T03:52:35",
      "pnl": -0.67,
      "pnlPct": -0.76,
      "motifEntree": "score 5 : tendance haussiere, volume x2.5, RSI 60",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "NEARUSDT",
      "base": "NEAR",
      "montant": 87.11,
      "prixEntreeUsdt": 4.598888,
      "prixSortieUsdt": 4.4563055,
      "ouvertLe": "2026-10-25T17:44:55",
      "fermeLe": "2026-10-26T03:52:35",
      "pnl": -3.04,
      "pnlPct": -3.49,
      "motifEntree": "score 8 : tendance haussiere, cassure du plus haut 12 h, volume x2.1, elan 1 h, RSI 68",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "DODOUSDT",
      "base": "DODO",
      "montant": 86.49,
      "prixEntreeUsdt": 0.0272084,
      "prixSortieUsdt": 0.02522868,
      "ouvertLe": "2026-10-26T00:53:11",
      "fermeLe": "2026-10-26T03:52:35",
      "pnl": -6.5,
      "pnlPct": -7.52,
      "motifEntree": "score 6 : tendance haussiere, volume x2.8, elan 1 h, RSI 66",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "BMTUSDT",
      "base": "BMT",
      "montant": 85.35,
      "prixEntreeUsdt": 0.03580264,
      "prixSortieUsdt": 0.03420264,
      "ouvertLe": "2026-10-26T03:52:35",
      "fermeLe": "2026-10-26T03:54:03",
      "pnl": -3.98,
      "pnlPct": -4.66,
      "motifEntree": "score 5 : tendance haussiere, volume x5.0, RSI 65",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "PYTHUSDT",
      "base": "PYTH",
      "montant": 86.49,
      "prixEntreeUsdt": 0.07542048,
      "prixSortieUsdt": 0.07268808,
      "ouvertLe": "2026-10-26T00:53:11",
      "fermeLe": "2026-10-26T09:21:53",
      "pnl": -3.27,
      "pnlPct": -3.78,
      "motifEntree": "score 5 : tendance haussiere, volume x2.0, RSI 55",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "NILUSDT",
      "base": "NIL",
      "montant": 84.89,
      "prixEntreeUsdt": 0.09371336,
      "prixSortieUsdt": 0.08946072,
      "ouvertLe": "2026-10-26T09:21:53",
      "fermeLe": "2026-10-26T16:20:05",
      "pnl": -3.84,
      "pnlPct": -4.53,
      "motifEntree": "score 5 : tendance haussiere, volume x2.1, RSI 54",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "ERAUSDT",
      "base": "ERA",
      "montant": 85.35,
      "prixEntreeUsdt": 0.08785,
      "prixSortieUsdt": 0.0842616,
      "ouvertLe": "2026-10-26T03:52:35",
      "fermeLe": "2026-10-26T21:38:24",
      "pnl": -3.33,
      "pnlPct": -3.9,
      "motifEntree": "score 5 : tendance haussiere, volume x2.5, RSI 60",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "BTCUSDT",
      "base": "BTC",
      "montant": 85.01,
      "prixEntreeUsdt": 80688.334005,
      "prixSortieUsdt": 79858.6507,
      "ouvertLe": "2026-10-26T16:20:05",
      "fermeLe": "2026-10-26T21:38:24",
      "pnl": -0.97,
      "pnlPct": -1.15,
      "motifEntree": "score 8 : tendance haussiere, cassure du plus haut 12 h, volume x2.3, elan 1 h, RSI 56",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "ASTERUSDT",
      "base": "ASTER",
      "montant": 84.89,
      "prixEntreeUsdt": 0.7106312,
      "prixSortieUsdt": 0.700686,
      "ouvertLe": "2026-10-26T09:21:53",
      "fermeLe": "2026-10-27T05:56:27",
      "pnl": -1.08,
      "pnlPct": -1.27,
      "motifEntree": "score 5 : tendance haussiere, volume x3.0, RSI 66",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "SOXLBUSDT",
      "base": "SOXLB",
      "montant": 84.48,
      "prixEntreeUsdt": 93.790475,
      "prixSortieUsdt": 90.28437,
      "ouvertLe": "2026-10-27T01:04:58",
      "fermeLe": "2026-10-27T05:56:27",
      "pnl": -3.27,
      "pnlPct": -3.87,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 69",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "BEAMXUSDT",
      "base": "BEAMX",
      "montant": 84.89,
      "prixEntreeUsdt": 0.003255972,
      "prixSortieUsdt": 0.003211104,
      "ouvertLe": "2026-10-26T09:21:53",
      "fermeLe": "2026-10-27T11:16:44",
      "pnl": -0.82,
      "pnlPct": -0.97,
      "motifEntree": "score 5 : tendance haussiere, volume x5.2, RSI 62",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "SYNUSDT",
      "base": "SYN",
      "montant": 83.88,
      "prixEntreeUsdt": 0.19915344,
      "prixSortieUsdt": 0.18751692,
      "ouvertLe": "2026-10-27T05:56:27",
      "fermeLe": "2026-10-27T11:16:44",
      "pnl": -4.84,
      "pnlPct": -5.77,
      "motifEntree": "score 6 : tendance haussiere, volume x4.9, elan 1 h, RSI 69",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "REZUSDT",
      "base": "REZ",
      "montant": 83.12,
      "prixEntreeUsdt": 0.005088272,
      "prixSortieUsdt": 0.004898328,
      "ouvertLe": "2026-10-27T11:16:44",
      "fermeLe": "2026-10-28T11:52:16",
      "pnl": -3.14,
      "pnlPct": -3.78,
      "motifEntree": "score 5 : tendance haussiere, volume x2.5, RSI 65",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "NVDABUSDT",
      "base": "NVDAB",
      "montant": 82.9,
      "prixEntreeUsdt": 220.20732,
      "prixSortieUsdt": 216.879,
      "ouvertLe": "2026-10-27T16:55:06",
      "fermeLe": "2026-10-28T17:55:52",
      "pnl": -1.42,
      "pnlPct": -1.71,
      "motifEntree": "score 8 : tendance haussiere, cassure du plus haut 12 h, volume x2.2, elan 1 h, RSI 56",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "MUBUSDT",
      "base": "MUB",
      "montant": 82.9,
      "prixEntreeUsdt": 934.20192,
      "prixSortieUsdt": 966.98652,
      "ouvertLe": "2026-10-27T16:55:06",
      "fermeLe": "2026-10-28T17:55:52",
      "pnl": 2.74,
      "pnlPct": 3.3,
      "motifEntree": "score 7 : tendance haussiere, cassure du plus haut 12 h, volume x2.0, RSI 53",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "NBISBUSDT",
      "base": "NBISB",
      "montant": 83.49,
      "prixEntreeUsdt": 176.23212,
      "prixSortieUsdt": 171.33192,
      "ouvertLe": "2026-10-28T11:52:16",
      "fermeLe": "2026-10-28T17:55:52",
      "pnl": -2.64,
      "pnlPct": -3.16,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 65",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "SOXLBUSDT",
      "base": "SOXLB",
      "montant": 82.9,
      "prixEntreeUsdt": 99.819505,
      "prixSortieUsdt": 100.618845,
      "ouvertLe": "2026-10-27T16:55:06",
      "fermeLe": "2026-10-28T22:32:02",
      "pnl": 0.5,
      "pnlPct": 0.6,
      "motifEntree": "score 8 : tendance haussiere, cassure du plus haut 12 h, volume x3.3, elan 1 h, RSI 67",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "AMDBUSDT",
      "base": "AMDB",
      "montant": 83.01,
      "prixEntreeUsdt": 573.11332,
      "prixSortieUsdt": 563.238,
      "ouvertLe": "2026-10-28T17:55:52",
      "fermeLe": "2026-10-29T02:11:59",
      "pnl": -1.52,
      "pnlPct": -1.83,
      "motifEntree": "score 5 : tendance haussiere, volume x2.3, elan 1 h",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "ZROUSDT",
      "base": "ZRO",
      "montant": 82.2,
      "prixEntreeUsdt": 1.728888,
      "prixSortieUsdt": 1.665312,
      "ouvertLe": "2026-10-28T22:32:02",
      "fermeLe": "2026-10-29T02:11:59",
      "pnl": -3.1,
      "pnlPct": -3.77,
      "motifEntree": "score 5 : tendance haussiere, volume x1.6, elan 1 h, RSI 60",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "XPLUSDT",
      "base": "XPL",
      "montant": 83.01,
      "prixEntreeUsdt": 0.07681604,
      "prixSortieUsdt": 0.0740028,
      "ouvertLe": "2026-10-28T17:55:52",
      "fermeLe": "2026-10-29T08:09:18",
      "pnl": -3.14,
      "pnlPct": -3.78,
      "motifEntree": "score 5 : tendance haussiere, volume x2.2, RSI 52",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "SNDKBUSDT",
      "base": "SNDKB",
      "montant": 83.01,
      "prixEntreeUsdt": 1384.39348,
      "prixSortieUsdt": 1353.476735,
      "ouvertLe": "2026-10-28T17:55:52",
      "fermeLe": "2026-10-29T08:09:18",
      "pnl": -1.96,
      "pnlPct": -2.36,
      "motifEntree": "score 5 : tendance haussiere, volume x2.2, RSI 65",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "AIUSDT",
      "base": "AI",
      "montant": 81.75,
      "prixEntreeUsdt": 0.02008,
      "prixSortieUsdt": 0.01887165,
      "ouvertLe": "2026-10-29T02:11:59",
      "fermeLe": "2026-10-29T15:18:26",
      "pnl": -5.06,
      "pnlPct": -6.19,
      "motifEntree": "score 6 : tendance haussiere, volume x13.7, elan 1 h, RSI 57",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "KATUSDT",
      "base": "KAT",
      "montant": 81.75,
      "prixEntreeUsdt": 0.00459832,
      "prixSortieUsdt": 0.00417324,
      "ouvertLe": "2026-10-29T02:11:59",
      "fermeLe": "2026-10-30T00:38:15",
      "pnl": -8.17,
      "pnlPct": -9.99,
      "motifEntree": "score 5 : tendance haussiere, volume x2.9, elan 1 h",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "BNBUSDT",
      "base": "BNB",
      "montant": 81.45,
      "prixEntreeUsdt": 752.886255,
      "prixSortieUsdt": 703.657995,
      "ouvertLe": "2026-10-29T08:09:18",
      "fermeLe": "2026-10-30T00:38:15",
      "pnl": -5.94,
      "pnlPct": -7.3,
      "motifEntree": "score 5 : tendance haussiere, volume x2.2, RSI 63",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "INJUSDT",
      "base": "INJ",
      "montant": 80.61,
      "prixEntreeUsdt": 8.103284,
      "prixSortieUsdt": 7.31562,
      "ouvertLe": "2026-10-29T15:18:26",
      "fermeLe": "2026-10-30T00:38:15",
      "pnl": -8.45,
      "pnlPct": -10.48,
      "motifEntree": "score 6 : tendance haussiere, volume x2.1, elan 1 h, RSI 55",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "SOXLBUSDT",
      "base": "SOXLB",
      "montant": 80.61,
      "prixEntreeUsdt": 102.543585,
      "prixSortieUsdt": 88.536995,
      "ouvertLe": "2026-10-29T15:18:26",
      "fermeLe": "2026-10-30T00:38:15",
      "pnl": -11.6,
      "pnlPct": -14.39,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 60",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "SKYUSDT",
      "base": "SKY",
      "montant": 78.36,
      "prixEntreeUsdt": 0.0673684,
      "prixSortieUsdt": 0.06281772,
      "ouvertLe": "2026-10-30T00:38:15",
      "fermeLe": "2026-10-30T03:57:36",
      "pnl": -6.09,
      "pnlPct": -7.77,
      "motifEntree": "score 6 : tendance haussiere, volume x5.8, elan 1 h, RSI 54",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "TRXUSDT",
      "base": "TRX",
      "montant": 78.36,
      "prixEntreeUsdt": 0.3503751,
      "prixSortieUsdt": 0.3324337,
      "ouvertLe": "2026-10-30T00:38:15",
      "fermeLe": "2026-10-30T10:51:04",
      "pnl": -5.07,
      "pnlPct": -6.47,
      "motifEntree": "score 5 : tendance haussiere, volume x3.3, RSI 62",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "RUNEUSDT",
      "base": "RUNE",
      "montant": 78.36,
      "prixEntreeUsdt": 0.629508,
      "prixSortieUsdt": 0.644412,
      "ouvertLe": "2026-10-30T00:38:15",
      "fermeLe": "2026-10-30T17:21:56",
      "pnl": 1.53,
      "pnlPct": 1.96,
      "motifEntree": "score 5 : tendance haussiere, volume x4.0, RSI 61",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "SANDUSDT",
      "base": "SAND",
      "montant": 77.55,
      "prixEntreeUsdt": 0.04695708,
      "prixSortieUsdt": 0.04640364,
      "ouvertLe": "2026-10-30T10:51:04",
      "fermeLe": "2026-10-31T13:46:21",
      "pnl": -0.59,
      "pnlPct": -0.76,
      "motifEntree": "score 8 : tendance haussiere, cassure du plus haut 12 h, volume x3.6, elan 1 h, RSI 70",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "NIGHTUSDT",
      "base": "NIGHT",
      "montant": 77.55,
      "prixEntreeUsdt": 0.03934676,
      "prixSortieUsdt": 0.03984996,
      "ouvertLe": "2026-10-30T10:51:04",
      "fermeLe": "2026-10-31T13:46:21",
      "pnl": 1.32,
      "pnlPct": 1.71,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 63",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "BLURUSDT",
      "base": "BLUR",
      "montant": 77.55,
      "prixEntreeUsdt": 0.0086344,
      "prixSortieUsdt": 0.00810744,
      "ouvertLe": "2026-10-30T10:51:04",
      "fermeLe": "2026-10-31T13:46:21",
      "pnl": -4.43,
      "pnlPct": -5.71,
      "motifEntree": "score 5 : tendance haussiere, volume x2.6, RSI 67",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "LSKUSDT",
      "base": "LSK",
      "montant": 77.23,
      "prixEntreeUsdt": 0.2809192,
      "prixSortieUsdt": 0.2700156,
      "ouvertLe": "2026-10-31T13:46:21",
      "fermeLe": "2026-10-31T13:50:39",
      "pnl": -3.15,
      "pnlPct": -4.08,
      "motifEntree": "score 5 : tendance haussiere, volume x2.2, elan 1 h",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "TSLABUSDT",
      "base": "TSLAB",
      "montant": 77.5,
      "prixEntreeUsdt": 402.49356,
      "prixSortieUsdt": 398.11116,
      "ouvertLe": "2026-10-30T17:21:56",
      "fermeLe": "2026-10-31T18:23:27",
      "pnl": -1.43,
      "pnlPct": -1.85,
      "motifEntree": "score 5 : tendance haussiere, volume x3.2, RSI 62",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "AMPUSDT",
      "base": "AMP",
      "montant": 76.92,
      "prixEntreeUsdt": 0.000743964,
      "prixSortieUsdt": 0.00071712,
      "ouvertLe": "2026-10-31T21:34:19",
      "fermeLe": "2026-11-01T00:44:59",
      "pnl": -3.02,
      "pnlPct": -3.92,
      "motifEntree": "score 5 : tendance haussiere, volume x5.7, RSI 66",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "STXUSDT",
      "base": "STX",
      "montant": 76.86,
      "prixEntreeUsdt": 0.3249948,
      "prixSortieUsdt": 0.3190188,
      "ouvertLe": "2026-10-31T18:23:27",
      "fermeLe": "2026-11-01T10:43:14",
      "pnl": -1.0,
      "pnlPct": -1.3,
      "motifEntree": "score 6 : tendance haussiere, volume x2.4, elan 1 h, RSI 64",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "XPLUSDT",
      "base": "XPL",
      "montant": 76.92,
      "prixEntreeUsdt": 0.08240832,
      "prixSortieUsdt": 0.073579465,
      "ouvertLe": "2026-10-31T21:34:19",
      "fermeLe": "2026-11-01T10:43:14",
      "pnl": -7.91,
      "pnlPct": -10.29,
      "motifEntree": "score 6 : tendance haussiere, volume x2.8, elan 1 h, RSI 60",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "GUSDT",
      "base": "G",
      "montant": 75.69,
      "prixEntreeUsdt": 0.00397584,
      "prixSortieUsdt": 0.00372504,
      "ouvertLe": "2026-11-01T10:43:14",
      "fermeLe": "2026-11-01T17:27:08",
      "pnl": -5.06,
      "pnlPct": -6.69,
      "motifEntree": "score 5 : tendance haussiere, volume x3.6, RSI 58",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "RWUSDUSDT",
      "base": "RWUSD",
      "montant": 76.43,
      "prixEntreeUsdt": 1.004,
      "prixSortieUsdt": 0.9959004,
      "ouvertLe": "2026-11-01T03:37:04",
      "fermeLe": "2026-11-02T05:55:37",
      "pnl": 0.09,
      "pnlPct": 0.12,
      "motifEntree": "score 5 : tendance haussiere, volume x4.8, RSI 60",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "PROMUSDT",
      "base": "PROM",
      "montant": 75.69,
      "prixEntreeUsdt": 5.731836,
      "prixSortieUsdt": 5.490948,
      "ouvertLe": "2026-11-01T10:43:14",
      "fermeLe": "2026-11-02T05:55:37",
      "pnl": -3.05,
      "pnlPct": -4.03,
      "motifEntree": "score 5 : tendance haussiere, volume x15.9, RSI 57",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "BNBUSDT",
      "base": "BNB",
      "montant": 75.69,
      "prixEntreeUsdt": 712.296845,
      "prixSortieUsdt": 702.76427,
      "ouvertLe": "2026-11-01T10:43:14",
      "fermeLe": "2026-11-02T14:12:44",
      "pnl": -1.18,
      "pnlPct": -1.56,
      "motifEntree": "score 5 : tendance haussiere, volume x3.6, RSI 63",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "ARBUSDT",
      "base": "ARB",
      "montant": 74.97,
      "prixEntreeUsdt": 0.1662624,
      "prixSortieUsdt": 0.157866,
      "ouvertLe": "2026-11-01T17:27:08",
      "fermeLe": "2026-11-02T14:12:44",
      "pnl": -3.8,
      "pnlPct": -5.06,
      "motifEntree": "score 6 : tendance haussiere, volume x10.7, elan 1 h, RSI 66",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "TQQQBUSDT",
      "base": "TQQQB",
      "montant": 74.79,
      "prixEntreeUsdt": 64.09536,
      "prixSortieUsdt": 63.01692,
      "ouvertLe": "2026-11-02T05:55:37",
      "fermeLe": "2026-11-02T14:12:44",
      "pnl": -1.7,
      "pnlPct": -2.27,
      "motifEntree": "score 5 : tendance haussiere, volume x2.1, RSI 59",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "牛来USDT",
      "base": "牛来",
      "montant": 74.79,
      "prixEntreeUsdt": 0.07136432,
      "prixSortieUsdt": 0.0614034,
      "ouvertLe": "2026-11-02T05:55:37",
      "fermeLe": "2026-11-02T23:20:32",
      "pnl": -10.71,
      "pnlPct": -14.31,
      "motifEntree": "score 5 : tendance haussiere, volume x2.1, RSI 55",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "HBARUSDT",
      "base": "HBAR",
      "montant": 73.14,
      "prixEntreeUsdt": 0.07029004,
      "prixSortieUsdt": 0.06784752,
      "ouvertLe": "2026-11-03T12:16:52",
      "fermeLe": "2026-11-04T04:14:59",
      "pnl": -3.14,
      "pnlPct": -4.29,
      "motifEntree": "score 5 : tendance haussiere, cassure du plus haut 12 h, RSI 70",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "SAGAUSDT",
      "base": "SAGA",
      "montant": 73.05,
      "prixEntreeUsdt": 0.01764028,
      "prixSortieUsdt": 0.01645392,
      "ouvertLe": "2026-11-03T19:30:05",
      "fermeLe": "2026-11-04T04:14:59",
      "pnl": -5.4,
      "pnlPct": -7.4,
      "motifEntree": "score 5 : tendance haussiere, volume x3.2, RSI 59",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "LSKUSDT",
      "base": "LSK",
      "montant": 72.29,
      "prixEntreeUsdt": 0.2072256,
      "prixSortieUsdt": 0.200196,
      "ouvertLe": "2026-11-04T12:09:44",
      "fermeLe": "2026-11-04T19:40:55",
      "pnl": -2.44,
      "pnlPct": -3.37,
      "motifEntree": "score 6 : tendance haussiere, volume x2.6, elan 1 h, RSI 61",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "QNTUSDT",
      "base": "QNT",
      "montant": 72.29,
      "prixEntreeUsdt": 202.0048,
      "prixSortieUsdt": 201.0426,
      "ouvertLe": "2026-11-04T12:09:44",
      "fermeLe": "2026-11-05T14:29:31",
      "pnl": -0.31,
      "pnlPct": -0.42,
      "motifEntree": "score 7 : tendance haussiere, cassure du plus haut 12 h, volume x2.2, elan 1 h",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "HAEDALUSDT",
      "base": "HAEDAL",
      "montant": 72.29,
      "prixEntreeUsdt": 0.02837304,
      "prixSortieUsdt": 0.02546772,
      "ouvertLe": "2026-11-04T12:09:44",
      "fermeLe": "2026-11-05T14:29:31",
      "pnl": -7.37,
      "pnlPct": -10.19,
      "motifEntree": "score 5 : tendance haussiere, volume x2.1, RSI 55",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "ONDOUSDT",
      "base": "ONDO",
      "montant": 72.29,
      "prixEntreeUsdt": 0.4073228,
      "prixSortieUsdt": 0.3973044,
      "ouvertLe": "2026-11-04T12:09:44",
      "fermeLe": "2026-11-05T14:29:31",
      "pnl": -1.74,
      "pnlPct": -2.41,
      "motifEntree": "score 5 : tendance haussiere, cassure du plus haut 12 h, RSI 67",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "SOXSBUSDT",
      "base": "SOXSB",
      "montant": 71.2,
      "prixEntreeUsdt": 78.30196,
      "prixSortieUsdt": 75.61632,
      "ouvertLe": "2026-11-05T21:47:28",
      "fermeLe": "2026-11-06T02:10:23",
      "pnl": -2.54,
      "pnlPct": -3.57,
      "motifEntree": "score 6 : tendance haussiere, volume x2.7, elan 1 h, RSI 55",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "RLUSDUSDT",
      "base": "RLUSD",
      "montant": 72.18,
      "prixEntreeUsdt": 1.0025015,
      "prixSortieUsdt": 1.00079935,
      "ouvertLe": "2026-11-05T06:38:34",
      "fermeLe": "2026-11-06T08:56:02",
      "pnl": 0.24,
      "pnlPct": 0.33,
      "motifEntree": "score 5 : tendance haussiere, volume x2.5, RSI 60",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "ZECUSDT",
      "base": "ZEC",
      "montant": 70.93,
      "prixEntreeUsdt": 1321.750545,
      "prixSortieUsdt": 1264.9672,
      "ouvertLe": "2026-11-06T02:10:23",
      "fermeLe": "2026-11-06T08:56:02",
      "pnl": -2.95,
      "pnlPct": -4.17,
      "motifEntree": "score 5 : tendance haussiere, volume x2.1, elan 1 h",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "UUSDT",
      "base": "U",
      "montant": 71.85,
      "prixEntreeUsdt": 1.0023012,
      "prixSortieUsdt": 0.9988994,
      "ouvertLe": "2026-11-06T08:56:02",
      "fermeLe": "2026-11-06T16:45:57",
      "pnl": -0.8,
      "pnlPct": -1.12,
      "motifEntree": "score 5 : tendance haussiere, cassure du plus haut 12 h, RSI 60",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "CYBERUSDT",
      "base": "CYBER",
      "montant": 70.93,
      "prixEntreeUsdt": 0.32128,
      "prixSortieUsdt": 0.35946,
      "ouvertLe": "2026-11-06T02:10:23",
      "fermeLe": "2026-11-06T22:06:26",
      "pnl": 8.79,
      "pnlPct": 12.39,
      "motifEntree": "score 6 : tendance haussiere, volume x3.6, elan 1 h, RSI 68",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "ARBUSDT",
      "base": "ARB",
      "montant": 70.93,
      "prixEntreeUsdt": 0.1633508,
      "prixSortieUsdt": 0.1655352,
      "ouvertLe": "2026-11-06T02:10:23",
      "fermeLe": "2026-11-06T22:06:26",
      "pnl": 1.27,
      "pnlPct": 1.79,
      "motifEntree": "score 6 : tendance haussiere, volume x2.3, elan 1 h, RSI 61",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "ONEUSDT",
      "base": "ONE",
      "montant": 71.61,
      "prixEntreeUsdt": 0.001563228,
      "prixSortieUsdt": 0.001796784,
      "ouvertLe": "2026-11-06T16:45:57",
      "fermeLe": "2026-11-07T07:48:14",
      "pnl": 11.27,
      "pnlPct": 15.74,
      "motifEntree": "score 5 : tendance haussiere, volume x2.9, RSI 57",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "MARSCOINUSDT",
      "base": "MARSCOIN",
      "montant": 71.61,
      "prixEntreeUsdt": 0.0464852,
      "prixSortieUsdt": 0.04482,
      "ouvertLe": "2026-11-06T16:45:57",
      "fermeLe": "2026-11-07T14:37:52",
      "pnl": -2.06,
      "pnlPct": -2.87,
      "motifEntree": "score 6 : tendance haussiere, volume x2.4, elan 1 h, RSI 63",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "METUSDT",
      "base": "MET",
      "montant": 72.19,
      "prixEntreeUsdt": 0.3166616,
      "prixSortieUsdt": 0.3166284,
      "ouvertLe": "2026-11-07T19:17:22",
      "fermeLe": "2026-11-08T02:19:12",
      "pnl": -0.14,
      "pnlPct": -0.19,
      "motifEntree": "score 6 : tendance haussiere, volume x2.9, elan 1 h, RSI 68",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "ARBUSDT",
      "base": "ARB",
      "montant": 72.29,
      "prixEntreeUsdt": 0.168672,
      "prixSortieUsdt": 0.1682244,
      "ouvertLe": "2026-11-07T14:36:24",
      "fermeLe": "2026-11-08T15:29:40",
      "pnl": -0.34,
      "pnlPct": -0.47,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 67",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "BMTUSDT",
      "base": "BMT",
      "montant": 72.28,
      "prixEntreeUsdt": 0.02599356,
      "prixSortieUsdt": 0.0237546,
      "ouvertLe": "2026-11-08T08:31:37",
      "fermeLe": "2026-11-08T20:01:44",
      "pnl": -7.53,
      "pnlPct": -10.42,
      "motifEntree": "score 5 : tendance haussiere, volume x6.7, RSI 57",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "RSRUSDT",
      "base": "RSR",
      "montant": 72.02,
      "prixEntreeUsdt": 0.001692744,
      "prixSortieUsdt": 0.001750968,
      "ouvertLe": "2026-11-08T15:29:40",
      "fermeLe": "2026-11-09T21:10:27",
      "pnl": 1.81,
      "pnlPct": 2.51,
      "motifEntree": "score 5 : tendance haussiere, volume x2.0, elan 1 h, RSI 61",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "PEPEUSDT",
      "base": "PEPE",
      "montant": 71.24,
      "prixEntreeUsdt": 4.9574E-06,
      "prixSortieUsdt": 5.1223E-06,
      "ouvertLe": "2026-11-08T23:48:38",
      "fermeLe": "2026-11-10T03:44:41",
      "pnl": 1.83,
      "pnlPct": 2.56,
      "motifEntree": "score 5 : tendance haussiere, volume x3.1, elan 1 h",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "GOOGLBUSDT",
      "base": "GOOGLB",
      "montant": 71.77,
      "prixEntreeUsdt": 288.66004,
      "prixSortieUsdt": 289.49736,
      "ouvertLe": "2026-11-09T03:06:28",
      "fermeLe": "2026-11-10T03:44:41",
      "pnl": -0.15,
      "pnlPct": -0.21,
      "motifEntree": "score 7 : tendance haussiere, cassure du plus haut 12 h, volume x2.9, elan 1 h",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "ARBUSDT",
      "base": "ARB",
      "montant": 71.75,
      "prixEntreeUsdt": 0.1769048,
      "prixSortieUsdt": 0.17244095,
      "ouvertLe": "2026-11-09T10:42:51",
      "fermeLe": "2026-11-10T03:44:41",
      "pnl": -1.54,
      "pnlPct": -2.15,
      "motifEntree": "score 6 : tendance haussiere, volume x3.9, elan 1 h, RSI 63",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "RAYUSDT",
      "base": "RAY",
      "montant": 71.82,
      "prixEntreeUsdt": 1.8091076,
      "prixSortieUsdt": 1.7060484,
      "ouvertLe": "2026-11-09T21:10:27",
      "fermeLe": "2026-11-10T03:44:41",
      "pnl": -4.22,
      "pnlPct": -5.88,
      "motifEntree": "score 6 : tendance haussiere, volume x2.0, elan 1 h, RSI 65",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "BMTUSDT",
      "base": "BMT",
      "montant": 71.16,
      "prixEntreeUsdt": 0.02396548,
      "prixSortieUsdt": 0.0231072,
      "ouvertLe": "2026-11-10T19:09:53",
      "fermeLe": "2026-11-11T00:22:12",
      "pnl": -2.79,
      "pnlPct": -3.93,
      "motifEntree": "score 5 : tendance haussiere, volume x11.1, RSI 62",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "SOXLBUSDT",
      "base": "SOXLB",
      "montant": 71.2,
      "prixEntreeUsdt": 69.373905,
      "prixSortieUsdt": 62.835605,
      "ouvertLe": "2026-11-11T18:54:41",
      "fermeLe": "2026-11-12T01:06:03",
      "pnl": -6.86,
      "pnlPct": -9.63,
      "motifEntree": "score 5 : tendance haussiere, volume x2.2, elan 1 h",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "GRAMUSDT",
      "base": "GRAM",
      "montant": 71.06,
      "prixEntreeUsdt": 1.19978,
      "prixSortieUsdt": 1.1812255,
      "ouvertLe": "2026-11-11T11:12:20",
      "fermeLe": "2026-11-12T08:03:56",
      "pnl": -0.88,
      "pnlPct": -1.24,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut 12 h, volume x1.6, elan 1 h",
      "motifSortie": "tendance cassee",
      "avis": "aucun"
    },
    {
      "paire": "0GUSDT",
      "base": "0G",
      "montant": 70.77,
      "prixEntreeUsdt": 0.156624,
      "prixSortieUsdt": 0.1495992,
      "ouvertLe": "2026-11-12T08:03:56",
      "fermeLe": "2026-11-12T16:56:12",
      "pnl": -3.21,
      "pnlPct": -4.53,
      "motifEntree": "score 6 : tendance haussiere, volume x2.0, elan 1 h, RSI 64",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "ERAUSDT",
      "base": "ERA",
      "montant": 70.72,
      "prixEntreeUsdt": 0.0822276,
      "prixSortieUsdt": 0.0807756,
      "ouvertLe": "2026-11-11T03:53:12",
      "fermeLe": "2026-11-12T23:08:04",
      "pnl": -0.67,
      "pnlPct": -0.95,
      "motifEntree": "score 6 : tendance haussiere, volume x2.5, elan 1 h, RSI 60",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "AMDBUSDT",
      "base": "AMDB",
      "montant": 71.2,
      "prixEntreeUsdt": 562.65164,
      "prixSortieUsdt": 579.56244,
      "ouvertLe": "2026-11-11T18:54:41",
      "fermeLe": "2026-11-12T23:08:04",
      "pnl": 2.24,
      "pnlPct": 3.14,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 64",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "GOOGLBUSDT",
      "base": "GOOGLB",
      "montant": 70.69,
      "prixEntreeUsdt": 295.73824,
      "prixSortieUsdt": 301.12763,
      "ouvertLe": "2026-11-12T01:06:03",
      "fermeLe": "2026-11-13T03:37:06",
      "pnl": 1.38,
      "pnlPct": 1.95,
      "motifEntree": "score 5 : tendance haussiere, volume x5.8, RSI 53",
      "motifSortie": "duree maximale atteinte",
      "avis": "aucun"
    },
    {
      "paire": "TQQQBUSDT",
      "base": "TQQQB",
      "montant": 70.8,
      "prixEntreeUsdt": 60.53116,
      "prixSortieUsdt": 56.8716,
      "ouvertLe": "2026-11-12T16:56:12",
      "fermeLe": "2026-11-13T18:38:03",
      "pnl": -4.17,
      "pnlPct": -5.9,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 63",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "BARDUSDT",
      "base": "BARD",
      "montant": 69.93,
      "prixEntreeUsdt": 0.1359416,
      "prixSortieUsdt": 0.15127275,
      "ouvertLe": "2026-11-13T03:37:06",
      "fermeLe": "2026-11-13T18:38:03",
      "pnl": 7.97,
      "pnlPct": 11.4,
      "motifEntree": "score 5 : tendance haussiere, volume x2.5, RSI 64",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "PEPEUSDT",
      "base": "PEPE",
      "montant": 69.93,
      "prixEntreeUsdt": 4.6069E-06,
      "prixSortieUsdt": 4.4134E-06,
      "ouvertLe": "2026-11-13T03:37:06",
      "fermeLe": "2026-11-13T23:52:47",
      "pnl": -2.82,
      "pnlPct": -4.03,
      "motifEntree": "score 6 : tendance haussiere, volume x2.3, elan 1 h, RSI 61",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "INITUSDT",
      "base": "INIT",
      "montant": 70.0,
      "prixEntreeUsdt": 0.1231908,
      "prixSortieUsdt": 0.11283684,
      "ouvertLe": "2026-11-13T18:38:03",
      "fermeLe": "2026-11-13T23:52:47",
      "pnl": -5.96,
      "pnlPct": -8.52,
      "motifEntree": "score 5 : tendance haussiere, volume x3.6, RSI 61",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "BERAUSDT",
      "base": "BERA",
      "montant": 68.57,
      "prixEntreeUsdt": 0.1328292,
      "prixSortieUsdt": 0.1081656,
      "ouvertLe": "2026-11-14T03:51:20",
      "fermeLe": "2026-11-14T10:37:39",
      "pnl": -12.86,
      "pnlPct": -18.75,
      "motifEntree": "score 5 : tendance haussiere, volume x2.5, RSI 68",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    },
    {
      "paire": "DODOUSDT",
      "base": "DODO",
      "montant": 70.57,
      "prixEntreeUsdt": 0.02883488,
      "prixSortieUsdt": 0.03161304,
      "ouvertLe": "2026-11-13T10:58:38",
      "fermeLe": "2026-11-14T17:06:14",
      "pnl": 6.96,
      "pnlPct": 9.86,
      "motifEntree": "score 5 : tendance haussiere, volume x2.3, RSI 69",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "NIGHTUSDT",
      "base": "NIGHT",
      "montant": 70.0,
      "prixEntreeUsdt": 0.0461338,
      "prixSortieUsdt": 0.04679208,
      "ouvertLe": "2026-11-13T18:38:03",
      "fermeLe": "2026-11-14T21:40:42",
      "pnl": 0.96,
      "pnlPct": 1.37,
      "motifEntree": "score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 62",
      "motifSortie": "stop suiveur, gain securise",
      "avis": "aucun"
    },
    {
      "paire": "BANANAS31USDT",
      "base": "BANANAS31",
      "montant": 68.36,
      "prixEntreeUsdt": 0.004424628,
      "prixSortieUsdt": 0.004136388,
      "ouvertLe": "2026-11-14T17:06:14",
      "fermeLe": "2026-11-14T21:40:42",
      "pnl": -4.57,
      "pnlPct": -6.69,
      "motifEntree": "score 6 : tendance haussiere, volume x3.4, elan 1 h, RSI 62",
      "motifSortie": "stop-loss",
      "avis": "aucun"
    }
  ],
  "courbe": [
    {
      "t": "2026-10-15T17:31:16",
      "valeur": 998.5,
      "btcRef": 1000.0
    },
    {
      "t": "2026-10-15T17:53:59",
      "valeur": 999.54,
      "btcRef": 1002.34
    },
    {
      "t": "2026-10-15T21:21:38",
      "valeur": 1003.27,
      "btcRef": 1003.7
    },
    {
      "t": "2026-10-16T00:32:09",
      "valeur": 998.73,
      "btcRef": 1001.45
    },
    {
      "t": "2026-10-16T02:42:05",
      "valeur": 997.75,
      "btcRef": 1001.2
    },
    {
      "t": "2026-10-16T07:06:54",
      "valeur": 1001.08,
      "btcRef": 999.3
    },
    {
      "t": "2026-10-16T11:45:03",
      "valeur": 999.41,
      "btcRef": 994.31
    },
    {
      "t": "2026-10-16T16:20:48",
      "valeur": 1006.11,
      "btcRef": 996.53
    },
    {
      "t": "2026-10-16T20:12:59",
      "valeur": 992.83,
      "btcRef": 985.65
    },
    {
      "t": "2026-10-16T23:16:11",
      "valeur": 985.82,
      "btcRef": 990.5
    },
    {
      "t": "2026-10-17T01:40:53",
      "valeur": 979.88,
      "btcRef": 989.32
    },
    {
      "t": "2026-10-17T03:34:36",
      "valeur": 979.88,
      "btcRef": 987.38
    },
    {
      "t": "2026-10-17T08:08:41",
      "valeur": 979.39,
      "btcRef": 988.06
    },
    {
      "t": "2026-10-17T12:41:49",
      "valeur": 977.82,
      "btcRef": 989.45
    },
    {
      "t": "2026-10-17T15:57:16",
      "valeur": 976.15,
      "btcRef": 987.69
    },
    {
      "t": "2026-10-17T18:56:30",
      "valeur": 990.65,
      "btcRef": 984.1
    },
    {
      "t": "2026-10-17T21:06:51",
      "valeur": 998.96,
      "btcRef": 987.87
    },
    {
      "t": "2026-10-17T23:26:03",
      "valeur": 1000.24,
      "btcRef": 985.9
    },
    {
      "t": "2026-10-18T01:19:50",
      "valeur": 985.44,
      "btcRef": 986.33
    },
    {
      "t": "2026-10-18T03:14:17",
      "valeur": 986.03,
      "btcRef": 988.62
    },
    {
      "t": "2026-10-18T08:00:37",
      "valeur": 985.12,
      "btcRef": 990.71
    },
    {
      "t": "2026-10-18T12:54:16",
      "valeur": 983.78,
      "btcRef": 995.62
    },
    {
      "t": "2026-10-18T16:18:37",
      "valeur": 974.5,
      "btcRef": 985.52
    },
    {
      "t": "2026-10-18T19:26:25",
      "valeur": 968.05,
      "btcRef": 984.56
    },
    {
      "t": "2026-10-18T21:33:31",
      "valeur": 967.57,
      "btcRef": 981.9
    },
    {
      "t": "2026-10-18T23:49:41",
      "valeur": 966.21,
      "btcRef": 986.87
    },
    {
      "t": "2026-10-19T01:45:20",
      "valeur": 967.26,
      "btcRef": 996.35
    },
    {
      "t": "2026-10-19T03:50:33",
      "valeur": 985.1,
      "btcRef": 1001.27
    },
    {
      "t": "2026-10-19T09:03:09",
      "valeur": 1005.78,
      "btcRef": 1005.49
    },
    {
      "t": "2026-10-19T16:37:21",
      "valeur": 1003.58,
      "btcRef": 994.91
    },
    {
      "t": "2026-10-19T22:12:21",
      "valeur": 994.61,
      "btcRef": 995.53
    },
    {
      "t": "2026-10-20T01:45:01",
      "valeur": 997.0,
      "btcRef": 996.67
    },
    {
      "t": "2026-10-20T04:09:26",
      "valeur": 986.26,
      "btcRef": 990.19
    },
    {
      "t": "2026-10-20T09:33:09",
      "valeur": 984.69,
      "btcRef": 988.42
    },
    {
      "t": "2026-10-20T14:56:59",
      "valeur": 986.17,
      "btcRef": 990.22
    },
    {
      "t": "2026-10-20T19:51:30",
      "valeur": 996.35,
      "btcRef": 1004.85
    },
    {
      "t": "2026-10-20T23:00:29",
      "valeur": 998.31,
      "btcRef": 1003.79
    },
    {
      "t": "2026-10-21T01:47:27",
      "valeur": 996.08,
      "btcRef": 1007.4
    },
    {
      "t": "2026-10-21T04:04:51",
      "valeur": 994.31,
      "btcRef": 1006.72
    },
    {
      "t": "2026-10-21T09:31:13",
      "valeur": 995.85,
      "btcRef": 1008.08
    },
    {
      "t": "2026-10-21T15:10:32",
      "valeur": 992.92,
      "btcRef": 1015.79
    },
    {
      "t": "2026-10-21T20:03:34",
      "valeur": 992.32,
      "btcRef": 1026.5
    },
    {
      "t": "2026-10-21T23:36:05",
      "valeur": 992.17,
      "btcRef": 1028.58
    },
    {
      "t": "2026-10-22T02:11:49",
      "valeur": 982.48,
      "btcRef": 1021.36
    },
    {
      "t": "2026-10-22T06:52:39",
      "valeur": 971.34,
      "btcRef": 1003.53
    },
    {
      "t": "2026-10-22T11:47:09",
      "valeur": 962.25,
      "btcRef": 992.4
    },
    {
      "t": "2026-10-22T16:43:00",
      "valeur": 950.28,
      "btcRef": 995.91
    },
    {
      "t": "2026-10-22T20:53:00",
      "valeur": 954.91,
      "btcRef": 987.99
    },
    {
      "t": "2026-10-23T00:02:39",
      "valeur": 947.75,
      "btcRef": 990.01
    },
    {
      "t": "2026-10-23T02:36:00",
      "valeur": 956.12,
      "btcRef": 987.04
    },
    {
      "t": "2026-10-23T07:20:18",
      "valeur": 953.78,
      "btcRef": 993.5
    },
    {
      "t": "2026-10-23T12:16:11",
      "valeur": 949.42,
      "btcRef": 994.31
    },
    {
      "t": "2026-10-23T17:12:10",
      "valeur": 949.45,
      "btcRef": 991.7
    },
    {
      "t": "2026-10-23T21:17:20",
      "valeur": 944.09,
      "btcRef": 989.01
    },
    {
      "t": "2026-10-24T00:22:08",
      "valeur": 945.63,
      "btcRef": 988.55
    },
    {
      "t": "2026-10-24T02:52:44",
      "valeur": 944.94,
      "btcRef": 981.87
    },
    {
      "t": "2026-10-24T07:17:32",
      "valeur": 944.95,
      "btcRef": 983.67
    },
    {
      "t": "2026-10-24T11:37:56",
      "valeur": 925.09,
      "btcRef": 979.27
    },
    {
      "t": "2026-10-24T15:35:40",
      "valeur": 910.99,
      "btcRef": 981.9
    },
    {
      "t": "2026-10-24T18:56:17",
      "valeur": 904.43,
      "btcRef": 976.14
    },
    {
      "t": "2026-10-24T21:19:15",
      "valeur": 893.63,
      "btcRef": 979.25
    },
    {
      "t": "2026-10-24T23:41:39",
      "valeur": 888.94,
      "btcRef": 978.35
    },
    {
      "t": "2026-10-25T01:45:40",
      "valeur": 883.34,
      "btcRef": 983.39
    },
    {
      "t": "2026-10-25T02:45:44",
      "valeur": 883.31,
      "btcRef": 983.49
    },
    {
      "t": "2026-10-25T07:58:58",
      "valeur": 874.91,
      "btcRef": 978.79
    },
    {
      "t": "2026-10-25T13:29:55",
      "valeur": 873.3,
      "btcRef": 976.59
    },
    {
      "t": "2026-10-25T17:44:55",
      "valeur": 870.49,
      "btcRef": 979.92
    },
    {
      "t": "2026-10-25T20:19:04",
      "valeur": 870.14,
      "btcRef": 979.73
    },
    {
      "t": "2026-10-25T22:55:20",
      "valeur": 864.43,
      "btcRef": 974.93
    },
    {
      "t": "2026-10-26T00:53:11",
      "valeur": 863.99,
      "btcRef": 971.48
    },
    {
      "t": "2026-10-26T03:52:35",
      "valeur": 852.68,
      "btcRef": 964.3
    },
    {
      "t": "2026-10-26T09:21:53",
      "valeur": 847.67,
      "btcRef": 970.5
    },
    {
      "t": "2026-10-26T16:20:05",
      "valeur": 849.97,
      "btcRef": 981.33
    },
    {
      "t": "2026-10-26T21:38:24",
      "valeur": 844.77,
      "btcRef": 973.0
    },
    {
      "t": "2026-10-27T01:04:58",
      "valeur": 844.62,
      "btcRef": 976.49
    },
    {
      "t": "2026-10-27T05:56:27",
      "valeur": 838.39,
      "btcRef": 970.96
    },
    {
      "t": "2026-10-27T11:16:44",
      "valeur": 830.81,
      "btcRef": 971.83
    },
    {
      "t": "2026-10-27T16:55:06",
      "valeur": 827.95,
      "btcRef": 984.79
    },
    {
      "t": "2026-10-27T21:27:27",
      "valeur": 830.85,
      "btcRef": 986.81
    },
    {
      "t": "2026-10-28T00:56:14",
      "valeur": 834.0,
      "btcRef": 989.77
    },
    {
      "t": "2026-10-28T05:47:24",
      "valeur": 835.45,
      "btcRef": 991.32
    },
    {
      "t": "2026-10-28T11:52:16",
      "valeur": 834.53,
      "btcRef": 998.11
    },
    {
      "t": "2026-10-28T17:55:52",
      "valeur": 829.02,
      "btcRef": 985.49
    },
    {
      "t": "2026-10-28T22:32:02",
      "valeur": 821.59,
      "btcRef": 991.2
    },
    {
      "t": "2026-10-29T02:11:59",
      "valeur": 816.73,
      "btcRef": 989.1
    },
    {
      "t": "2026-10-29T08:09:18",
      "valeur": 814.4,
      "btcRef": 977.19
    },
    {
      "t": "2026-10-29T15:18:26",
      "valeur": 805.47,
      "btcRef": 983.87
    },
    {
      "t": "2026-10-29T20:43:08",
      "valeur": 811.71,
      "btcRef": 986.03
    },
    {
      "t": "2026-10-30T00:38:15",
      "valeur": 782.72,
      "btcRef": 954.54
    },
    {
      "t": "2026-10-30T03:57:36",
      "valeur": 780.08,
      "btcRef": 931.34
    },
    {
      "t": "2026-10-30T10:51:04",
      "valeur": 774.37,
      "btcRef": 932.27
    },
    {
      "t": "2026-10-30T17:21:56",
      "valeur": 774.65,
      "btcRef": 939.57
    },
    {
      "t": "2026-10-30T21:56:44",
      "valeur": 779.42,
      "btcRef": 929.22
    },
    {
      "t": "2026-10-31T01:34:35",
      "valeur": 776.67,
      "btcRef": 916.02
    },
    {
      "t": "2026-10-31T07:15:01",
      "valeur": 775.56,
      "btcRef": 922.24
    },
    {
      "t": "2026-10-31T13:46:21",
      "valeur": 771.87,
      "btcRef": 936.19
    },
    {
      "t": "2026-10-31T18:23:27",
      "valeur": 768.25,
      "btcRef": 935.52
    },
    {
      "t": "2026-10-31T21:34:19",
      "valeur": 768.4,
      "btcRef": 935.68
    },
    {
      "t": "2026-11-01T00:41:35",
      "valeur": 765.12,
      "btcRef": 933.75
    },
    {
      "t": "2026-11-01T03:37:04",
      "valeur": 763.96,
      "btcRef": 936.52
    },
    {
      "t": "2026-11-01T10:43:14",
      "valeur": 755.93,
      "btcRef": 947.93
    },
    {
      "t": "2026-11-01T17:27:08",
      "valeur": 749.33,
      "btcRef": 946.34
    },
    {
      "t": "2026-11-01T21:43:45",
      "valeur": 749.43,
      "btcRef": 945.1
    },
    {
      "t": "2026-11-02T00:55:42",
      "valeur": 750.67,
      "btcRef": 956.75
    },
    {
      "t": "2026-11-02T05:55:37",
      "valeur": 747.16,
      "btcRef": 956.45
    },
    {
      "t": "2026-11-02T14:12:44",
      "valeur": 741.89,
      "btcRef": 943.03
    },
    {
      "t": "2026-11-02T23:20:32",
      "valeur": 731.41,
      "btcRef": 936.59
    },
    {
      "t": "2026-11-03T04:31:45",
      "valeur": 731.41,
      "btcRef": 934.44
    },
    {
      "t": "2026-11-03T12:16:52",
      "valeur": 731.05,
      "btcRef": 940.78
    },
    {
      "t": "2026-11-03T19:30:05",
      "valeur": 730.17,
      "btcRef": 944.68
    },
    {
      "t": "2026-11-04T00:37:14",
      "valeur": 729.97,
      "btcRef": 946.82
    },
    {
      "t": "2026-11-04T04:14:59",
      "valeur": 722.87,
      "btcRef": 918.44
    },
    {
      "t": "2026-11-04T12:09:44",
      "valeur": 721.43,
      "btcRef": 952.19
    },
    {
      "t": "2026-11-04T19:38:11",
      "valeur": 720.23,
      "btcRef": 976.26
    },
    {
      "t": "2026-11-05T00:55:47",
      "valeur": 723.56,
      "btcRef": 976.48
    },
    {
      "t": "2026-11-05T06:38:34",
      "valeur": 721.66,
      "btcRef": 974.59
    },
    {
      "t": "2026-11-05T14:29:31",
      "valeur": 711.72,
      "btcRef": 967.35
    },
    {
      "t": "2026-11-05T21:47:28",
      "valeur": 711.65,
      "btcRef": 926.28
    },
    {
      "t": "2026-11-06T02:10:23",
      "valeur": 708.54,
      "btcRef": 926.46
    },
    {
      "t": "2026-11-06T08:56:02",
      "valeur": 718.35,
      "btcRef": 921.45
    },
    {
      "t": "2026-11-06T16:45:57",
      "valeur": 715.42,
      "btcRef": 916.67
    },
    {
      "t": "2026-11-06T22:06:26",
      "valeur": 715.72,
      "btcRef": 927.37
    },
    {
      "t": "2026-11-07T01:52:51",
      "valeur": 726.11,
      "btcRef": 927.37
    },
    {
      "t": "2026-11-07T07:46:39",
      "valeur": 724.41,
      "btcRef": 929.16
    },
    {
      "t": "2026-11-07T14:36:24",
      "valeur": 722.54,
      "btcRef": 927.84
    },
    {
      "t": "2026-11-07T19:17:22",
      "valeur": 721.54,
      "btcRef": 927.48
    },
    {
      "t": "2026-11-07T23:01:22",
      "valeur": 725.35,
      "btcRef": 926.2
    },
    {
      "t": "2026-11-08T02:19:12",
      "valeur": 721.99,
      "btcRef": 926.46
    },
    {
      "t": "2026-11-08T08:31:37",
      "valeur": 722.4,
      "btcRef": 927.22
    },
    {
      "t": "2026-11-08T15:29:40",
      "valeur": 719.87,
      "btcRef": 927.95
    },
    {
      "t": "2026-11-08T20:01:44",
      "valeur": 713.59,
      "btcRef": 911.35
    },
    {
      "t": "2026-11-08T23:48:38",
      "valeur": 712.24,
      "btcRef": 907.09
    },
    {
      "t": "2026-11-09T03:06:28",
      "valeur": 717.3,
      "btcRef": 916.98
    },
    {
      "t": "2026-11-09T10:42:51",
      "valeur": 717.14,
      "btcRef": 896.93
    },
    {
      "t": "2026-11-09T21:10:27",
      "valeur": 717.83,
      "btcRef": 909.06
    },
    {
      "t": "2026-11-10T03:44:41",
      "valeur": 712.31,
      "btcRef": 908.37
    },
    {
      "t": "2026-11-10T11:29:33",
      "valeur": 711.64,
      "btcRef": 901.8
    },
    {
      "t": "2026-11-10T19:09:53",
      "valeur": 711.27,
      "btcRef": 895.13
    },
    {
      "t": "2026-11-11T00:22:12",
      "valeur": 707.26,
      "btcRef": 899.24
    },
    {
      "t": "2026-11-11T03:53:12",
      "valeur": 706.85,
      "btcRef": 897.33
    },
    {
      "t": "2026-11-11T11:12:20",
      "valeur": 710.26,
      "btcRef": 901.69
    },
    {
      "t": "2026-11-11T18:54:41",
      "valeur": 711.46,
      "btcRef": 915.3
    },
    {
      "t": "2026-11-12T01:06:03",
      "valeur": 706.53,
      "btcRef": 908.49
    },
    {
      "t": "2026-11-12T08:03:56",
      "valeur": 707.39,
      "btcRef": 905.36
    },
    {
      "t": "2026-11-12T16:56:12",
      "valeur": 707.62,
      "btcRef": 878.72
    },
    {
      "t": "2026-11-12T23:08:04",
      "valeur": 696.31,
      "btcRef": 881.2
    },
    {
      "t": "2026-11-13T03:37:06",
      "valeur": 698.77,
      "btcRef": 867.25
    },
    {
      "t": "2026-11-13T10:58:38",
      "valeur": 705.39,
      "btcRef": 851.58
    },
    {
      "t": "2026-11-13T18:38:03",
      "valeur": 699.33,
      "btcRef": 851.38
    },
    {
      "t": "2026-11-13T23:52:47",
      "valeur": 686.16,
      "btcRef": 846.06
    },
    {
      "t": "2026-11-14T03:51:20",
      "valeur": 685.37,
      "btcRef": 837.76
    },
    {
      "t": "2026-11-14T10:37:39",
      "valeur": 681.66,
      "btcRef": 830.46
    },
    {
      "t": "2026-11-14T17:06:14",
      "valeur": 683.31,
      "btcRef": 809.66
    },
    {
      "t": "2026-11-14T21:40:42",
      "valeur": 673.86,
      "btcRef": 811.16
    }
  ],
  "journal": [
    {
      "t": "2026-10-16T20:12:59",
      "texte": "Vente QNT (stop-loss) : -4.39 EUR (-4.4 %)"
    },
    {
      "t": "2026-10-16T20:12:59",
      "texte": "Vente PEPE (stop-loss) : -5.55 EUR (-5.6 %)"
    },
    {
      "t": "2026-10-16T20:12:59",
      "texte": "Vente BCH (duree maximale atteinte) : -1.66 EUR (-1.7 %)"
    },
    {
      "t": "2026-10-16T20:12:59",
      "texte": "Achat AMP pour 99.33 EUR (score 5 : tendance haussiere, volume x4.4, RSI 63)"
    },
    {
      "t": "2026-10-16T23:16:11",
      "texte": "Vente AMP (stop-loss) : -6.08 EUR (-6.1 %)"
    },
    {
      "t": "2026-10-16T23:16:11",
      "texte": "Achat RAD pour 98.63 EUR (score 5 : tendance haussiere, volume x2.1, RSI 65)"
    },
    {
      "t": "2026-10-17T01:40:53",
      "texte": "Vente RAD (stop-loss) : -6.43 EUR (-6.5 %)"
    },
    {
      "t": "2026-10-17T08:08:41",
      "texte": "Achat LDO pour 97.99 EUR (score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 70)"
    },
    {
      "t": "2026-10-17T12:41:49",
      "texte": "Achat SAND pour 97.83 EUR (score 6 : tendance haussiere, volume x6.3, elan 1 h, RSI 60)"
    },
    {
      "t": "2026-10-17T15:57:16",
      "texte": "Vente LDO (stop-loss) : -4.36 EUR (-4.4 %)"
    },
    {
      "t": "2026-10-17T15:57:16",
      "texte": "Achat LSK pour 97.76 EUR (score 5 : tendance haussiere, volume x10.4, RSI 55)"
    },
    {
      "t": "2026-10-17T15:57:16",
      "texte": "Achat AVA pour 97.76 EUR (score 5 : tendance haussiere, volume x2.5, RSI 60)"
    },
    {
      "t": "2026-10-17T15:57:16",
      "texte": "Achat CAKE pour 97.76 EUR (score 5 : tendance haussiere, cassure du plus haut 12 h, elan 1 h)"
    },
    {
      "t": "2026-10-17T18:56:30",
      "texte": "Objectif atteint sur AVA : stop suiveur active, gain securise a +11.6 %"
    },
    {
      "t": "2026-10-17T21:06:51",
      "texte": "Vente LSK (avis defavorable (agent Technique)) : +1.29 EUR (+1.3 %)"
    },
    {
      "t": "2026-10-17T21:09:12",
      "texte": "Objectif atteint sur SAND : stop suiveur active, gain securise a +3.1 %"
    },
    {
      "t": "2026-10-17T23:26:03",
      "texte": "Vente SAND (stop suiveur, gain securise) : +1.09 EUR (+1.1 %)"
    },
    {
      "t": "2026-10-17T23:26:03",
      "texte": "Achat BCH pour 100.12 EUR (score 5 : tendance haussiere, volume x2.1, RSI 65)"
    },
    {
      "t": "2026-10-17T23:26:03",
      "texte": "Achat ALT pour 100.12 EUR (score 5 : tendance haussiere, volume x1.9, elan 1 h, RSI 67)"
    },
    {
      "t": "2026-10-18T01:19:50",
      "texte": "Vente AVA (stop suiveur, gain securise) : +17.83 EUR (+18.2 %)"
    },
    {
      "t": "2026-10-18T01:19:50",
      "texte": "Vente ALT (stop-loss) : -8.55 EUR (-8.5 %)"
    },
    {
      "t": "2026-10-18T08:00:37",
      "texte": "Vente CAKE (tendance cassee) : -1.69 EUR (-1.7 %)"
    },
    {
      "t": "2026-10-18T12:54:16",
      "texte": "Achat AMP pour 98.49 EUR (score 6 : tendance haussiere, volume x4.2, elan 1 h, RSI 69)"
    },
    {
      "t": "2026-10-18T12:54:16",
      "texte": "Achat HBAR pour 98.49 EUR (score 5 : tendance haussiere, volume x1.7, elan 1 h, RSI 67)"
    },
    {
      "t": "2026-10-18T12:54:16",
      "texte": "Achat SOL pour 98.49 EUR (score 5 : tendance haussiere, volume x2.4, RSI 66)"
    },
    {
      "t": "2026-10-18T16:18:37",
      "texte": "Vente BCH (tendance cassee) : -2.67 EUR (-2.7 %)"
    },
    {
      "t": "2026-10-18T16:18:37",
      "texte": "Vente AMP (avis defavorable (agent Technique)) : -3.42 EUR (-3.5 %)"
    },
    {
      "t": "2026-10-18T16:18:37",
      "texte": "Vente SOL (tendance cassee) : -1.79 EUR (-1.8 %)"
    },
    {
      "t": "2026-10-18T16:18:37",
      "texte": "Achat OGN pour 97.50 EUR (score 5 : tendance haussiere, volume x3.1, RSI 55)"
    },
    {
      "t": "2026-10-18T19:26:25",
      "texte": "Vente HBAR (stop-loss) : -4.39 EUR (-4.5 %)"
    },
    {
      "t": "2026-10-18T19:26:25",
      "texte": "Vente OGN (stop-loss) : -5.14 EUR (-5.3 %)"
    },
    {
      "t": "2026-10-18T21:33:31",
      "texte": "Achat AMP pour 96.81 EUR (score 6 : tendance haussiere, volume x2.9, elan 1 h, RSI 60)"
    },
    {
      "t": "2026-10-19T01:45:20",
      "texte": "Achat KORUB pour 96.87 EUR (score 5 : tendance haussiere, volume x3.7, RSI 68)"
    },
    {
      "t": "2026-10-19T01:45:20",
      "texte": "Achat SKHYB pour 96.87 EUR (score 5 : tendance haussiere, volume x10.2, RSI 58)"
    },
    {
      "t": "2026-10-19T01:45:20",
      "texte": "Achat DRAMB pour 96.87 EUR (score 5 : tendance haussiere, volume x5.2, RSI 64)"
    },
    {
      "t": "2026-10-19T03:50:33",
      "texte": "Objectif atteint sur KORUB : stop suiveur active, gain securise a +6.2 %"
    },
    {
      "t": "2026-10-19T03:52:24",
      "texte": "Objectif atteint sur AMP : stop suiveur active, gain securise a +3.0 %"
    },
    {
      "t": "2026-10-19T16:37:21",
      "texte": "Vente AMP (stop suiveur, gain securise) : +10.50 EUR (+10.8 %)"
    },
    {
      "t": "2026-10-19T16:37:21",
      "texte": "Objectif atteint sur SKHYB : stop suiveur active, gain securise a +4.4 %"
    },
    {
      "t": "2026-10-19T16:37:21",
      "texte": "Objectif atteint sur DRAMB : stop suiveur active, gain securise a +3.3 %"
    },
    {
      "t": "2026-10-19T16:37:21",
      "texte": "Achat MORPHO pour 100.41 EUR (score 6 : tendance haussiere, volume x2.2, elan 1 h, RSI 53)"
    },
    {
      "t": "2026-10-20T01:48:42",
      "texte": "Vente KORUB (stop suiveur, gain securise) : +11.66 EUR (+12.0 %)"
    },
    {
      "t": "2026-10-20T04:09:26",
      "texte": "Vente SKHYB (stop suiveur, gain securise) : +1.93 EUR (+2.0 %)"
    },
    {
      "t": "2026-10-20T04:09:26",
      "texte": "Vente DRAMB (stop suiveur, gain securise) : +1.77 EUR (+1.8 %)"
    },
    {
      "t": "2026-10-20T04:09:26",
      "texte": "Achat WLD pour 98.70 EUR (score 5 : tendance haussiere, volume x2.1, elan 1 h)"
    },
    {
      "t": "2026-10-20T04:09:26",
      "texte": "Achat BCH pour 98.70 EUR (score 5 : tendance haussiere, volume x2.1, elan 1 h)"
    },
    {
      "t": "2026-10-20T09:33:09",
      "texte": "Vente MORPHO (tendance cassee) : -2.42 EUR (-2.4 %)"
    },
    {
      "t": "2026-10-20T09:33:09",
      "texte": "Vente BCH (tendance cassee) : -2.18 EUR (-2.2 %)"
    },
    {
      "t": "2026-10-20T14:56:59",
      "texte": "Achat APT pour 98.76 EUR (score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 63)"
    },
    {
      "t": "2026-10-20T14:56:59",
      "texte": "Achat TSLAB pour 98.76 EUR (score 6 : tendance haussiere, volume x2.0, elan 1 h, RSI 55)"
    },
    {
      "t": "2026-10-20T14:56:59",
      "texte": "Achat BMT pour 98.76 EUR (score 5 : tendance haussiere, volume x5.0, RSI 69)"
    },
    {
      "t": "2026-10-20T19:51:30",
      "texte": "Objectif atteint sur WLD : stop suiveur active, gain securise a +6.4 %"
    },
    {
      "t": "2026-10-20T19:51:30",
      "texte": "Objectif atteint sur APT : stop suiveur active, gain securise a +3.4 %"
    },
    {
      "t": "2026-10-20T19:51:30",
      "texte": "Vente BMT (avis defavorable (agent Technique)) : -1.39 EUR (-1.4 %)"
    },
    {
      "t": "2026-10-20T19:51:30",
      "texte": "Achat RAY pour 99.68 EUR (score 6 : tendance haussiere, volume x2.6, elan 1 h, RSI 68)"
    },
    {
      "t": "2026-10-21T04:04:51",
      "texte": "Vente RAY (stop-loss) : -4.28 EUR (-4.3 %)"
    },
    {
      "t": "2026-10-21T04:04:51",
      "texte": "Achat ARB pour 99.46 EUR (score 6 : tendance haussiere, volume x2.1, elan 1 h, RSI 65)"
    },
    {
      "t": "2026-10-21T15:10:32",
      "texte": "Vente APT (stop suiveur, gain securise) : +4.31 EUR (+4.4 %)"
    },
    {
      "t": "2026-10-21T15:10:32",
      "texte": "Vente TSLAB (duree maximale atteinte) : +2.00 EUR (+2.0 %)"
    },
    {
      "t": "2026-10-21T15:10:32",
      "texte": "Achat DOT pour 99.39 EUR (score 7 : tendance haussiere, cassure du plus haut 12 h, volume x2.1, elan 1 h)"
    },
    {
      "t": "2026-10-21T15:10:32",
      "texte": "Achat ONDO pour 99.39 EUR (score 7 : tendance haussiere, cassure du plus haut 12 h, volume x2.3, elan 1 h)"
    },
    {
      "t": "2026-10-21T20:03:34",
      "texte": "Vente WLD (stop suiveur, gain securise) : +6.90 EUR (+7.0 %)"
    },
    {
      "t": "2026-10-21T20:03:34",
      "texte": "Achat TAO pour 99.26 EUR (score 6 : tendance haussiere, cassure du plus haut 12 h, volume x1.5, elan 1 h)"
    },
    {
      "t": "2026-10-22T02:11:49",
      "texte": "Vente DOT (tendance cassee) : -3.19 EUR (-3.2 %)"
    },
    {
      "t": "2026-10-22T02:11:49",
      "texte": "Achat PROM pour 98.30 EUR (score 6 : tendance haussiere, volume x5.1, elan 1 h, RSI 62)"
    },
    {
      "t": "2026-10-22T06:52:39",
      "texte": "Vente ARB (stop-loss) : -5.30 EUR (-5.3 %)"
    },
    {
      "t": "2026-10-22T06:52:39",
      "texte": "Vente ONDO (stop-loss) : -5.20 EUR (-5.2 %)"
    },
    {
      "t": "2026-10-22T06:52:39",
      "texte": "Vente TAO (stop-loss) : -5.38 EUR (-5.4 %)"
    },
    {
      "t": "2026-10-22T06:52:39",
      "texte": "Achat PHA pour 97.18 EUR (score 5 : tendance haussiere, volume x4.1, RSI 67)"
    },
    {
      "t": "2026-10-22T11:47:09",
      "texte": "Vente PHA (stop-loss) : -7.85 EUR (-8.1 %)"
    },
    {
      "t": "2026-10-22T11:47:09",
      "texte": "Achat RLUSD pour 96.30 EUR (score 5 : tendance haussiere, volume x4.0, RSI 67)"
    },
    {
      "t": "2026-10-22T11:47:09",
      "texte": "Achat ARKM pour 96.30 EUR (score 5 : tendance haussiere, volume x5.8, RSI 62)"
    },
    {
      "t": "2026-10-22T16:43:00",
      "texte": "Vente PROM (stop-loss) : -3.42 EUR (-3.5 %)"
    },
    {
      "t": "2026-10-22T16:43:00",
      "texte": "Vente ARKM (stop-loss) : -5.01 EUR (-5.2 %)"
    },
    {
      "t": "2026-10-22T16:43:00",
      "texte": "Achat GTC pour 95.08 EUR (score 5 : tendance haussiere, volume x2.3, RSI 59)"
    },
    {
      "t": "2026-10-22T20:53:00",
      "texte": "Achat BMT pour 95.54 EUR (score 6 : tendance haussiere, volume x2.3, elan 1 h, RSI 63)"
    },
    {
      "t": "2026-10-22T20:55:15",
      "texte": "Objectif atteint sur GTC : stop suiveur active, gain securise a +3.0 %"
    },
    {
      "t": "2026-10-23T00:02:39",
      "texte": "Vente BMT (stop-loss) : -7.73 EUR (-8.1 %)"
    },
    {
      "t": "2026-10-23T00:02:39",
      "texte": "Achat DASH pour 94.82 EUR (score 5 : tendance haussiere, cassure du plus haut 12 h, elan 1 h)"
    },
    {
      "t": "2026-10-23T07:20:18",
      "texte": "Vente GTC (stop suiveur, gain securise) : +8.72 EUR (+9.2 %)"
    },
    {
      "t": "2026-10-23T07:20:18",
      "texte": "Achat BCH pour 95.43 EUR (score 5 : tendance haussiere, volume x3.1, elan 1 h)"
    },
    {
      "t": "2026-10-23T12:16:11",
      "texte": "Vente RLUSD (duree maximale atteinte) : -0.26 EUR (-0.3 %)"
    },
    {
      "t": "2026-10-23T12:16:11",
      "texte": "Achat BNB pour 95.01 EUR (score 5 : tendance haussiere, volume x4.5, elan 1 h)"
    },
    {
      "t": "2026-10-23T12:16:11",
      "texte": "Achat INJ pour 95.01 EUR (score 5 : tendance haussiere, volume x2.7, elan 1 h)"
    },
    {
      "t": "2026-10-23T17:12:10",
      "texte": "Vente DASH (tendance cassee) : -0.04 EUR (-+0.0 %)"
    },
    {
      "t": "2026-10-23T17:12:10",
      "texte": "Vente INJ (tendance cassee) : -3.15 EUR (-3.3 %)"
    },
    {
      "t": "2026-10-23T17:12:10",
      "texte": "Achat ARK pour 95.04 EUR (score 6 : tendance haussiere, volume x2.1, elan 1 h, RSI 63)"
    },
    {
      "t": "2026-10-23T17:12:10",
      "texte": "Achat COTI pour 95.04 EUR (score 6 : tendance haussiere, volume x13.1, elan 1 h, RSI 57)"
    },
    {
      "t": "2026-10-23T21:17:20",
      "texte": "Vente COTI (stop-loss) : -6.37 EUR (-6.7 %)"
    },
    {
      "t": "2026-10-24T00:22:08",
      "texte": "Vente BCH (tendance cassee) : -2.25 EUR (-2.4 %)"
    },
    {
      "t": "2026-10-24T00:22:08",
      "texte": "Vente BNB (tendance cassee) : -1.43 EUR (-1.5 %)"
    },
    {
      "t": "2026-10-24T02:52:44",
      "texte": "Achat ERA pour 94.54 EUR (score 6 : tendance haussiere, cassure du plus haut 12 h, volume x4.3)"
    },
    {
      "t": "2026-10-24T07:17:32",
      "texte": "Vente ARK (tendance cassee) : -1.42 EUR (-1.5 %)"
    },
    {
      "t": "2026-10-24T07:17:32",
      "texte": "Achat KAT pour 94.54 EUR (score 5 : tendance haussiere, volume x4.0, RSI 62)"
    },
    {
      "t": "2026-10-24T11:37:56",
      "texte": "Vente ERA (stop-loss) : -8.23 EUR (-8.7 %)"
    },
    {
      "t": "2026-10-24T11:37:56",
      "texte": "Vente KAT (stop-loss) : -6.73 EUR (-7.1 %)"
    },
    {
      "t": "2026-10-24T11:37:56",
      "texte": "Achat TREE pour 92.69 EUR (score 5 : tendance haussiere, volume x5.0, RSI 67)"
    },
    {
      "t": "2026-10-24T11:37:56",
      "texte": "Achat LUMIA pour 92.69 EUR (score 5 : tendance haussiere, volume x2.9, RSI 65)"
    },
    {
      "t": "2026-10-24T11:37:56",
      "texte": "Achat NIL pour 92.69 EUR (score 5 : tendance haussiere, volume x1.7, elan 1 h, RSI 65)"
    },
    {
      "t": "2026-10-24T11:37:56",
      "texte": "Achat WCT pour 92.69 EUR (score 5 : tendance haussiere, volume x2.1, RSI 53)"
    },
    {
      "t": "2026-10-24T11:41:16",
      "texte": "Objectif atteint sur TREE : stop suiveur active, gain securise a +4.2 %"
    },
    {
      "t": "2026-10-24T15:35:40",
      "texte": "Vente TREE (stop suiveur, gain securise) : -7.65 EUR (-8.3 %)"
    },
    {
      "t": "2026-10-24T15:35:40",
      "texte": "Vente NIL (stop-loss) : -3.43 EUR (-3.7 %)"
    },
    {
      "t": "2026-10-24T15:35:40",
      "texte": "Achat ERA pour 91.12 EUR (score 5 : tendance haussiere, volume x2.8, RSI 66)"
    },
    {
      "t": "2026-10-24T15:37:23",
      "texte": "Vente ERA (stop-loss) : -4.48 EUR (-4.9 %)"
    },
    {
      "t": "2026-10-24T15:39:57",
      "texte": "Vente LUMIA (stop-loss) : -3.39 EUR (-3.7 %)"
    },
    {
      "t": "2026-10-24T18:56:17",
      "texte": "Achat U pour 90.56 EUR (score 5 : tendance haussiere, volume x2.4, RSI 67)"
    },
    {
      "t": "2026-10-24T18:56:17",
      "texte": "Achat RWUSD pour 90.56 EUR (score 5 : tendance haussiere, volume x2.6, RSI 67)"
    },
    {
      "t": "2026-10-24T18:56:17",
      "texte": "Achat F pour 90.56 EUR (score 5 : tendance haussiere, volume x2.6, RSI 56)"
    },
    {
      "t": "2026-10-24T21:19:15",
      "texte": "Vente WCT (stop-loss) : -4.07 EUR (-4.4 %)"
    },
    {
      "t": "2026-10-24T21:19:15",
      "texte": "Vente F (stop-loss) : -9.11 EUR (-10.1 %)"
    },
    {
      "t": "2026-10-24T21:19:15",
      "texte": "Achat REZ pour 89.41 EUR (score 6 : tendance haussiere, volume x3.2, elan 1 h, RSI 62)"
    },
    {
      "t": "2026-10-24T23:41:39",
      "texte": "Vente RWUSD (tendance cassee) : -0.94 EUR (-1.0 %)"
    },
    {
      "t": "2026-10-24T23:41:39",
      "texte": "Vente REZ (stop-loss) : -4.24 EUR (-4.7 %)"
    },
    {
      "t": "2026-10-24T23:41:39",
      "texte": "Achat ANIME pour 88.94 EUR (score 5 : tendance haussiere, volume x2.5, RSI 59)"
    },
    {
      "t": "2026-10-25T01:45:40",
      "texte": "Vente ANIME (stop-loss) : -5.35 EUR (-6.0 %)"
    },
    {
      "t": "2026-10-25T01:45:40",
      "texte": "Achat ASTER pour 88.40 EUR (score 6 : tendance haussiere, volume x2.0, elan 1 h, RSI 62)"
    },
    {
      "t": "2026-10-25T01:45:40",
      "texte": "Achat RLUSD pour 88.40 EUR (score 5 : tendance haussiere, volume x2.5, RSI 60)"
    },
    {
      "t": "2026-10-25T02:45:44",
      "texte": "Achat STEEM pour 88.38 EUR (score 5 : tendance haussiere, volume x7.5, RSI 59)"
    },
    {
      "t": "2026-10-25T07:58:58",
      "texte": "Vente STEEM (stop-loss) : -7.51 EUR (-8.5 %)"
    },
    {
      "t": "2026-10-25T07:58:58",
      "texte": "Achat LUMIA pour 87.53 EUR (score 5 : tendance haussiere, volume x5.0, RSI 56)"
    },
    {
      "t": "2026-10-25T17:44:55",
      "texte": "Vente ASTER (tendance cassee) : -1.86 EUR (-2.1 %)"
    },
    {
      "t": "2026-10-25T17:44:55",
      "texte": "Vente LUMIA (stop-loss) : -3.20 EUR (-3.7 %)"
    },
    {
      "t": "2026-10-25T17:44:55",
      "texte": "Achat NEAR pour 87.11 EUR (score 8 : tendance haussiere, cassure du plus haut 12 h, volume x2.1, elan 1 h, RSI 68)"
    },
    {
      "t": "2026-10-25T17:44:55",
      "texte": "Achat ICP pour 87.11 EUR (score 5 : tendance haussiere, volume x3.4, RSI 59)"
    },
    {
      "t": "2026-10-25T20:19:04",
      "texte": "Vente U (duree maximale atteinte) : -0.75 EUR (-0.8 %)"
    },
    {
      "t": "2026-10-25T20:19:04",
      "texte": "Achat QNT pour 87.06 EUR (score 5 : tendance haussiere, volume x2.0, elan 1 h)"
    },
    {
      "t": "2026-10-25T22:55:20",
      "texte": "Vente QNT (stop-loss) : -3.46 EUR (-4.0 %)"
    },
    {
      "t": "2026-10-26T00:53:11",
      "texte": "Vente ICP (tendance cassee) : -1.48 EUR (-1.7 %)"
    },
    {
      "t": "2026-10-26T00:53:11",
      "texte": "Achat DODO pour 86.49 EUR (score 6 : tendance haussiere, volume x2.8, elan 1 h, RSI 66)"
    },
    {
      "t": "2026-10-26T00:53:11",
      "texte": "Achat PYTH pour 86.49 EUR (score 5 : tendance haussiere, volume x2.0, RSI 55)"
    },
    {
      "t": "2026-10-26T03:52:35",
      "texte": "Vente RLUSD (duree maximale atteinte) : -0.67 EUR (-0.8 %)"
    },
    {
      "t": "2026-10-26T03:52:35",
      "texte": "Vente NEAR (tendance cassee) : -3.04 EUR (-3.5 %)"
    },
    {
      "t": "2026-10-26T03:52:35",
      "texte": "Vente DODO (stop-loss) : -6.50 EUR (-7.5 %)"
    },
    {
      "t": "2026-10-26T03:52:35",
      "texte": "Achat ERA pour 85.35 EUR (score 5 : tendance haussiere, volume x2.5, RSI 60)"
    },
    {
      "t": "2026-10-26T03:52:35",
      "texte": "Achat BMT pour 85.35 EUR (score 5 : tendance haussiere, volume x5.0, RSI 65)"
    },
    {
      "t": "2026-10-26T03:54:03",
      "texte": "Vente BMT (stop-loss) : -3.98 EUR (-4.7 %)"
    },
    {
      "t": "2026-10-26T09:21:53",
      "texte": "Vente PYTH (stop-loss) : -3.27 EUR (-3.8 %)"
    },
    {
      "t": "2026-10-26T09:21:53",
      "texte": "Achat NIL pour 84.89 EUR (score 5 : tendance haussiere, volume x2.1, RSI 54)"
    },
    {
      "t": "2026-10-26T09:21:53",
      "texte": "Achat BEAMX pour 84.89 EUR (score 5 : tendance haussiere, volume x5.2, RSI 62)"
    },
    {
      "t": "2026-10-26T09:21:53",
      "texte": "Achat ASTER pour 84.89 EUR (score 5 : tendance haussiere, volume x3.0, RSI 66)"
    },
    {
      "t": "2026-10-26T16:20:05",
      "texte": "Vente NIL (stop-loss) : -3.84 EUR (-4.5 %)"
    },
    {
      "t": "2026-10-26T16:20:05",
      "texte": "Achat BTC pour 85.01 EUR (score 8 : tendance haussiere, cassure du plus haut 12 h, volume x2.3, elan 1 h, RSI 56)"
    },
    {
      "t": "2026-10-26T21:38:24",
      "texte": "Vente ERA (stop-loss) : -3.33 EUR (-3.9 %)"
    },
    {
      "t": "2026-10-26T21:38:24",
      "texte": "Vente BTC (tendance cassee) : -0.97 EUR (-1.1 %)"
    },
    {
      "t": "2026-10-27T01:04:58",
      "texte": "Achat SOXLB pour 84.48 EUR (score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 69)"
    },
    {
      "t": "2026-10-27T05:56:27",
      "texte": "Vente ASTER (tendance cassee) : -1.08 EUR (-1.3 %)"
    },
    {
      "t": "2026-10-27T05:56:27",
      "texte": "Vente SOXLB (stop-loss) : -3.27 EUR (-3.9 %)"
    },
    {
      "t": "2026-10-27T05:56:27",
      "texte": "Achat SYN pour 83.88 EUR (score 6 : tendance haussiere, volume x4.9, elan 1 h, RSI 69)"
    },
    {
      "t": "2026-10-27T11:16:44",
      "texte": "Vente BEAMX (duree maximale atteinte) : -0.82 EUR (-1.0 %)"
    },
    {
      "t": "2026-10-27T11:16:44",
      "texte": "Vente SYN (stop-loss) : -4.84 EUR (-5.8 %)"
    },
    {
      "t": "2026-10-27T11:16:44",
      "texte": "Achat REZ pour 83.12 EUR (score 5 : tendance haussiere, volume x2.5, RSI 65)"
    },
    {
      "t": "2026-10-27T16:55:06",
      "texte": "Achat SOXLB pour 82.90 EUR (score 8 : tendance haussiere, cassure du plus haut 12 h, volume x3.3, elan 1 h, RSI 67)"
    },
    {
      "t": "2026-10-27T16:55:06",
      "texte": "Achat NVDAB pour 82.90 EUR (score 8 : tendance haussiere, cassure du plus haut 12 h, volume x2.2, elan 1 h, RSI 56)"
    },
    {
      "t": "2026-10-27T16:55:06",
      "texte": "Achat MUB pour 82.90 EUR (score 7 : tendance haussiere, cassure du plus haut 12 h, volume x2.0, RSI 53)"
    },
    {
      "t": "2026-10-28T11:52:16",
      "texte": "Vente REZ (stop-loss) : -3.14 EUR (-3.8 %)"
    },
    {
      "t": "2026-10-28T11:52:16",
      "texte": "Objectif atteint sur SOXLB : stop suiveur active, gain securise a +3.0 %"
    },
    {
      "t": "2026-10-28T11:52:16",
      "texte": "Achat NBISB pour 83.49 EUR (score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 65)"
    },
    {
      "t": "2026-10-28T17:55:52",
      "texte": "Vente NVDAB (duree maximale atteinte) : -1.42 EUR (-1.7 %)"
    },
    {
      "t": "2026-10-28T17:55:52",
      "texte": "Vente MUB (duree maximale atteinte) : +2.74 EUR (+3.3 %)"
    },
    {
      "t": "2026-10-28T17:55:52",
      "texte": "Vente NBISB (tendance cassee) : -2.64 EUR (-3.2 %)"
    },
    {
      "t": "2026-10-28T17:55:52",
      "texte": "Achat AMDB pour 83.01 EUR (score 5 : tendance haussiere, volume x2.3, elan 1 h)"
    },
    {
      "t": "2026-10-28T17:55:52",
      "texte": "Achat XPL pour 83.01 EUR (score 5 : tendance haussiere, volume x2.2, RSI 52)"
    },
    {
      "t": "2026-10-28T17:55:52",
      "texte": "Achat SNDKB pour 83.01 EUR (score 5 : tendance haussiere, volume x2.2, RSI 65)"
    },
    {
      "t": "2026-10-28T22:32:02",
      "texte": "Vente SOXLB (stop suiveur, gain securise) : +0.50 EUR (+0.6 %)"
    },
    {
      "t": "2026-10-28T22:32:02",
      "texte": "Achat ZRO pour 82.20 EUR (score 5 : tendance haussiere, volume x1.6, elan 1 h, RSI 60)"
    },
    {
      "t": "2026-10-29T02:11:59",
      "texte": "Vente AMDB (tendance cassee) : -1.52 EUR (-1.8 %)"
    },
    {
      "t": "2026-10-29T02:11:59",
      "texte": "Vente ZRO (stop-loss) : -3.10 EUR (-3.8 %)"
    },
    {
      "t": "2026-10-29T02:11:59",
      "texte": "Achat AI pour 81.75 EUR (score 6 : tendance haussiere, volume x13.7, elan 1 h, RSI 57)"
    },
    {
      "t": "2026-10-29T02:11:59",
      "texte": "Achat KAT pour 81.75 EUR (score 5 : tendance haussiere, volume x2.9, elan 1 h)"
    },
    {
      "t": "2026-10-29T08:09:18",
      "texte": "Vente XPL (stop-loss) : -3.14 EUR (-3.8 %)"
    },
    {
      "t": "2026-10-29T08:09:18",
      "texte": "Vente SNDKB (tendance cassee) : -1.96 EUR (-2.4 %)"
    },
    {
      "t": "2026-10-29T08:09:18",
      "texte": "Achat BNB pour 81.45 EUR (score 5 : tendance haussiere, volume x2.2, RSI 63)"
    },
    {
      "t": "2026-10-29T15:18:26",
      "texte": "Vente AI (stop-loss) : -5.06 EUR (-6.2 %)"
    },
    {
      "t": "2026-10-29T15:18:26",
      "texte": "Achat INJ pour 80.61 EUR (score 6 : tendance haussiere, volume x2.1, elan 1 h, RSI 55)"
    },
    {
      "t": "2026-10-29T15:18:26",
      "texte": "Achat SOXLB pour 80.61 EUR (score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 60)"
    },
    {
      "t": "2026-10-30T00:38:15",
      "texte": "Vente KAT (stop-loss) : -8.17 EUR (-10.0 %)"
    },
    {
      "t": "2026-10-30T00:38:15",
      "texte": "Vente BNB (stop-loss) : -5.94 EUR (-7.3 %)"
    },
    {
      "t": "2026-10-30T00:38:15",
      "texte": "Vente INJ (stop-loss) : -8.45 EUR (-10.5 %)"
    },
    {
      "t": "2026-10-30T00:38:15",
      "texte": "Vente SOXLB (stop-loss) : -11.60 EUR (-14.4 %)"
    },
    {
      "t": "2026-10-30T00:38:15",
      "texte": "Achat SKY pour 78.36 EUR (score 6 : tendance haussiere, volume x5.8, elan 1 h, RSI 54)"
    },
    {
      "t": "2026-10-30T00:38:15",
      "texte": "Achat TRX pour 78.36 EUR (score 5 : tendance haussiere, volume x3.3, RSI 62)"
    },
    {
      "t": "2026-10-30T00:38:15",
      "texte": "Achat RUNE pour 78.36 EUR (score 5 : tendance haussiere, volume x4.0, RSI 61)"
    },
    {
      "t": "2026-10-30T03:57:36",
      "texte": "Vente SKY (stop-loss) : -6.09 EUR (-7.8 %)"
    },
    {
      "t": "2026-10-30T04:00:42",
      "texte": "Objectif atteint sur RUNE : stop suiveur active, gain securise a +3.2 %"
    },
    {
      "t": "2026-10-30T10:51:04",
      "texte": "Vente TRX (stop-loss) : -5.07 EUR (-6.5 %)"
    },
    {
      "t": "2026-10-30T10:51:04",
      "texte": "Achat SAND pour 77.55 EUR (score 8 : tendance haussiere, cassure du plus haut 12 h, volume x3.6, elan 1 h, RSI 70)"
    },
    {
      "t": "2026-10-30T10:51:04",
      "texte": "Achat NIGHT pour 77.55 EUR (score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 63)"
    },
    {
      "t": "2026-10-30T10:51:04",
      "texte": "Achat BLUR pour 77.55 EUR (score 5 : tendance haussiere, volume x2.6, RSI 67)"
    },
    {
      "t": "2026-10-30T17:21:56",
      "texte": "Vente RUNE (stop suiveur, gain securise) : +1.53 EUR (+2.0 %)"
    },
    {
      "t": "2026-10-30T17:21:56",
      "texte": "Achat TSLAB pour 77.50 EUR (score 5 : tendance haussiere, volume x3.2, RSI 62)"
    },
    {
      "t": "2026-10-31T13:46:21",
      "texte": "Vente SAND (duree maximale atteinte) : -0.59 EUR (-0.8 %)"
    },
    {
      "t": "2026-10-31T13:46:21",
      "texte": "Vente NIGHT (duree maximale atteinte) : +1.32 EUR (+1.7 %)"
    },
    {
      "t": "2026-10-31T13:46:21",
      "texte": "Vente BLUR (stop-loss) : -4.43 EUR (-5.7 %)"
    },
    {
      "t": "2026-10-31T13:46:21",
      "texte": "Achat LSK pour 77.23 EUR (score 5 : tendance haussiere, volume x2.2, elan 1 h)"
    },
    {
      "t": "2026-10-31T13:50:39",
      "texte": "Vente LSK (stop-loss) : -3.15 EUR (-4.1 %)"
    },
    {
      "t": "2026-10-31T18:23:27",
      "texte": "Vente TSLAB (duree maximale atteinte) : -1.43 EUR (-1.8 %)"
    },
    {
      "t": "2026-10-31T18:23:27",
      "texte": "Achat STX pour 76.86 EUR (score 6 : tendance haussiere, volume x2.4, elan 1 h, RSI 64)"
    },
    {
      "t": "2026-10-31T21:34:19",
      "texte": "Achat XPL pour 76.92 EUR (score 6 : tendance haussiere, volume x2.8, elan 1 h, RSI 60)"
    },
    {
      "t": "2026-10-31T21:34:19",
      "texte": "Achat AMP pour 76.92 EUR (score 5 : tendance haussiere, volume x5.7, RSI 66)"
    },
    {
      "t": "2026-11-01T00:44:59",
      "texte": "Vente AMP (stop-loss) : -3.02 EUR (-3.9 %)"
    },
    {
      "t": "2026-11-01T03:37:04",
      "texte": "Achat RWUSD pour 76.43 EUR (score 5 : tendance haussiere, volume x4.8, RSI 60)"
    },
    {
      "t": "2026-11-01T10:43:14",
      "texte": "Vente STX (tendance cassee) : -1.00 EUR (-1.3 %)"
    },
    {
      "t": "2026-11-01T10:43:14",
      "texte": "Vente XPL (stop-loss) : -7.91 EUR (-10.3 %)"
    },
    {
      "t": "2026-11-01T10:43:14",
      "texte": "Achat BNB pour 75.69 EUR (score 5 : tendance haussiere, volume x3.6, RSI 63)"
    },
    {
      "t": "2026-11-01T10:43:14",
      "texte": "Achat PROM pour 75.69 EUR (score 5 : tendance haussiere, volume x15.9, RSI 57)"
    },
    {
      "t": "2026-11-01T10:43:14",
      "texte": "Achat G pour 75.69 EUR (score 5 : tendance haussiere, volume x3.6, RSI 58)"
    },
    {
      "t": "2026-11-01T17:27:08",
      "texte": "Vente G (stop-loss) : -5.06 EUR (-6.7 %)"
    },
    {
      "t": "2026-11-01T17:27:08",
      "texte": "Achat ARB pour 74.97 EUR (score 6 : tendance haussiere, volume x10.7, elan 1 h, RSI 66)"
    },
    {
      "t": "2026-11-02T05:55:37",
      "texte": "Vente RWUSD (duree maximale atteinte) : +0.09 EUR (+0.1 %)"
    },
    {
      "t": "2026-11-02T05:55:37",
      "texte": "Vente PROM (stop-loss) : -3.05 EUR (-4.0 %)"
    },
    {
      "t": "2026-11-02T05:55:37",
      "texte": "Achat TQQQB pour 74.79 EUR (score 5 : tendance haussiere, volume x2.1, RSI 59)"
    },
    {
      "t": "2026-11-02T05:55:37",
      "texte": "Achat 牛来 pour 74.79 EUR (score 5 : tendance haussiere, volume x2.1, RSI 55)"
    },
    {
      "t": "2026-11-02T14:12:44",
      "texte": "Vente BNB (duree maximale atteinte) : -1.18 EUR (-1.6 %)"
    },
    {
      "t": "2026-11-02T14:12:44",
      "texte": "Vente ARB (stop-loss) : -3.80 EUR (-5.1 %)"
    },
    {
      "t": "2026-11-02T14:12:44",
      "texte": "Vente TQQQB (tendance cassee) : -1.70 EUR (-2.3 %)"
    },
    {
      "t": "2026-11-02T23:20:32",
      "texte": "Vente 牛来 (stop-loss) : -10.71 EUR (-14.3 %)"
    },
    {
      "t": "2026-11-03T12:16:52",
      "texte": "Achat HBAR pour 73.14 EUR (score 5 : tendance haussiere, cassure du plus haut 12 h, RSI 70)"
    },
    {
      "t": "2026-11-03T19:30:05",
      "texte": "Achat SAGA pour 73.05 EUR (score 5 : tendance haussiere, volume x3.2, RSI 59)"
    },
    {
      "t": "2026-11-04T04:14:59",
      "texte": "Vente HBAR (stop-loss) : -3.14 EUR (-4.3 %)"
    },
    {
      "t": "2026-11-04T04:14:59",
      "texte": "Vente SAGA (stop-loss) : -5.40 EUR (-7.4 %)"
    },
    {
      "t": "2026-11-04T12:09:44",
      "texte": "Achat QNT pour 72.29 EUR (score 7 : tendance haussiere, cassure du plus haut 12 h, volume x2.2, elan 1 h)"
    },
    {
      "t": "2026-11-04T12:09:44",
      "texte": "Achat LSK pour 72.29 EUR (score 6 : tendance haussiere, volume x2.6, elan 1 h, RSI 61)"
    },
    {
      "t": "2026-11-04T12:09:44",
      "texte": "Achat HAEDAL pour 72.29 EUR (score 5 : tendance haussiere, volume x2.1, RSI 55)"
    },
    {
      "t": "2026-11-04T12:09:44",
      "texte": "Achat ONDO pour 72.29 EUR (score 5 : tendance haussiere, cassure du plus haut 12 h, RSI 67)"
    },
    {
      "t": "2026-11-04T19:40:55",
      "texte": "Vente LSK (stop-loss) : -2.44 EUR (-3.4 %)"
    },
    {
      "t": "2026-11-05T06:38:34",
      "texte": "Achat RLUSD pour 72.18 EUR (score 5 : tendance haussiere, volume x2.5, RSI 60)"
    },
    {
      "t": "2026-11-05T14:29:31",
      "texte": "Vente QNT (duree maximale atteinte) : -0.31 EUR (-0.4 %)"
    },
    {
      "t": "2026-11-05T14:29:31",
      "texte": "Vente HAEDAL (stop-loss) : -7.37 EUR (-10.2 %)"
    },
    {
      "t": "2026-11-05T14:29:31",
      "texte": "Vente ONDO (duree maximale atteinte) : -1.74 EUR (-2.4 %)"
    },
    {
      "t": "2026-11-05T21:47:28",
      "texte": "Achat SOXSB pour 71.20 EUR (score 6 : tendance haussiere, volume x2.7, elan 1 h, RSI 55)"
    },
    {
      "t": "2026-11-06T02:10:23",
      "texte": "Vente SOXSB (stop-loss) : -2.54 EUR (-3.6 %)"
    },
    {
      "t": "2026-11-06T02:10:23",
      "texte": "Achat CYBER pour 70.93 EUR (score 6 : tendance haussiere, volume x3.6, elan 1 h, RSI 68)"
    },
    {
      "t": "2026-11-06T02:10:23",
      "texte": "Achat ARB pour 70.93 EUR (score 6 : tendance haussiere, volume x2.3, elan 1 h, RSI 61)"
    },
    {
      "t": "2026-11-06T02:10:23",
      "texte": "Achat ZEC pour 70.93 EUR (score 5 : tendance haussiere, volume x2.1, elan 1 h)"
    },
    {
      "t": "2026-11-06T08:56:02",
      "texte": "Vente RLUSD (duree maximale atteinte) : +0.24 EUR (+0.3 %)"
    },
    {
      "t": "2026-11-06T08:56:02",
      "texte": "Objectif atteint sur CYBER : stop suiveur active, gain securise a +12.9 %"
    },
    {
      "t": "2026-11-06T08:56:02",
      "texte": "Vente ZEC (stop-loss) : -2.95 EUR (-4.2 %)"
    },
    {
      "t": "2026-11-06T08:56:02",
      "texte": "Achat U pour 71.85 EUR (score 5 : tendance haussiere, cassure du plus haut 12 h, RSI 60)"
    },
    {
      "t": "2026-11-06T16:45:57",
      "texte": "Vente U (tendance cassee) : -0.80 EUR (-1.1 %)"
    },
    {
      "t": "2026-11-06T16:45:57",
      "texte": "Achat MARSCOIN pour 71.61 EUR (score 6 : tendance haussiere, volume x2.4, elan 1 h, RSI 63)"
    },
    {
      "t": "2026-11-06T16:45:57",
      "texte": "Achat ONE pour 71.61 EUR (score 5 : tendance haussiere, volume x2.9, RSI 57)"
    },
    {
      "t": "2026-11-06T22:06:26",
      "texte": "Vente CYBER (stop suiveur, gain securise) : +8.79 EUR (+12.4 %)"
    },
    {
      "t": "2026-11-06T22:06:26",
      "texte": "Vente ARB (tendance cassee) : +1.27 EUR (+1.8 %)"
    },
    {
      "t": "2026-11-07T01:52:51",
      "texte": "Objectif atteint sur ONE : stop suiveur active, gain securise a +15.2 %"
    },
    {
      "t": "2026-11-07T07:48:14",
      "texte": "Vente ONE (stop suiveur, gain securise) : +11.27 EUR (+15.7 %)"
    },
    {
      "t": "2026-11-07T14:36:24",
      "texte": "Achat ARB pour 72.29 EUR (score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 67)"
    },
    {
      "t": "2026-11-07T14:37:52",
      "texte": "Vente MARSCOIN (stop-loss) : -2.06 EUR (-2.9 %)"
    },
    {
      "t": "2026-11-07T19:17:22",
      "texte": "Achat MET pour 72.19 EUR (score 6 : tendance haussiere, volume x2.9, elan 1 h, RSI 68)"
    },
    {
      "t": "2026-11-07T23:01:22",
      "texte": "Objectif atteint sur MET : stop suiveur active, gain securise a +3.0 %"
    },
    {
      "t": "2026-11-08T02:19:12",
      "texte": "Vente MET (stop suiveur, gain securise) : -0.14 EUR (-0.2 %)"
    },
    {
      "t": "2026-11-08T08:31:37",
      "texte": "Achat BMT pour 72.28 EUR (score 5 : tendance haussiere, volume x6.7, RSI 57)"
    },
    {
      "t": "2026-11-08T15:29:40",
      "texte": "Vente ARB (duree maximale atteinte) : -0.34 EUR (-0.5 %)"
    },
    {
      "t": "2026-11-08T15:29:40",
      "texte": "Achat RSR pour 72.02 EUR (score 5 : tendance haussiere, volume x2.0, elan 1 h, RSI 61)"
    },
    {
      "t": "2026-11-08T20:01:44",
      "texte": "Vente BMT (stop-loss) : -7.53 EUR (-10.4 %)"
    },
    {
      "t": "2026-11-08T23:48:38",
      "texte": "Achat PEPE pour 71.24 EUR (score 5 : tendance haussiere, volume x3.1, elan 1 h)"
    },
    {
      "t": "2026-11-09T03:06:28",
      "texte": "Achat GOOGLB pour 71.77 EUR (score 7 : tendance haussiere, cassure du plus haut 12 h, volume x2.9, elan 1 h)"
    },
    {
      "t": "2026-11-09T10:42:51",
      "texte": "Achat ARB pour 71.75 EUR (score 6 : tendance haussiere, volume x3.9, elan 1 h, RSI 63)"
    },
    {
      "t": "2026-11-09T21:10:27",
      "texte": "Vente RSR (duree maximale atteinte) : +1.81 EUR (+2.5 %)"
    },
    {
      "t": "2026-11-09T21:10:27",
      "texte": "Achat RAY pour 71.82 EUR (score 6 : tendance haussiere, volume x2.0, elan 1 h, RSI 65)"
    },
    {
      "t": "2026-11-10T03:44:41",
      "texte": "Vente PEPE (duree maximale atteinte) : +1.83 EUR (+2.6 %)"
    },
    {
      "t": "2026-11-10T03:44:41",
      "texte": "Vente GOOGLB (duree maximale atteinte) : -0.15 EUR (-0.2 %)"
    },
    {
      "t": "2026-11-10T03:44:41",
      "texte": "Vente ARB (tendance cassee) : -1.54 EUR (-2.1 %)"
    },
    {
      "t": "2026-11-10T03:44:41",
      "texte": "Vente RAY (stop-loss) : -4.22 EUR (-5.9 %)"
    },
    {
      "t": "2026-11-10T19:09:53",
      "texte": "Achat BMT pour 71.16 EUR (score 5 : tendance haussiere, volume x11.1, RSI 62)"
    },
    {
      "t": "2026-11-11T00:22:12",
      "texte": "Vente BMT (stop-loss) : -2.79 EUR (-3.9 %)"
    },
    {
      "t": "2026-11-11T03:53:12",
      "texte": "Achat ERA pour 70.72 EUR (score 6 : tendance haussiere, volume x2.5, elan 1 h, RSI 60)"
    },
    {
      "t": "2026-11-11T11:12:20",
      "texte": "Achat GRAM pour 71.06 EUR (score 6 : tendance haussiere, cassure du plus haut 12 h, volume x1.6, elan 1 h)"
    },
    {
      "t": "2026-11-11T18:54:41",
      "texte": "Achat AMDB pour 71.20 EUR (score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 64)"
    },
    {
      "t": "2026-11-11T18:54:41",
      "texte": "Achat SOXLB pour 71.20 EUR (score 5 : tendance haussiere, volume x2.2, elan 1 h)"
    },
    {
      "t": "2026-11-12T01:06:03",
      "texte": "Objectif atteint sur ERA : stop suiveur active, gain securise a +5.4 %"
    },
    {
      "t": "2026-11-12T01:06:03",
      "texte": "Vente SOXLB (stop-loss) : -6.86 EUR (-9.6 %)"
    },
    {
      "t": "2026-11-12T01:06:03",
      "texte": "Achat GOOGLB pour 70.69 EUR (score 5 : tendance haussiere, volume x5.8, RSI 53)"
    },
    {
      "t": "2026-11-12T08:03:56",
      "texte": "Vente GRAM (tendance cassee) : -0.88 EUR (-1.2 %)"
    },
    {
      "t": "2026-11-12T08:03:56",
      "texte": "Achat 0G pour 70.77 EUR (score 6 : tendance haussiere, volume x2.0, elan 1 h, RSI 64)"
    },
    {
      "t": "2026-11-12T16:56:12",
      "texte": "Vente 0G (stop-loss) : -3.21 EUR (-4.5 %)"
    },
    {
      "t": "2026-11-12T16:56:12",
      "texte": "Achat TQQQB pour 70.80 EUR (score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 63)"
    },
    {
      "t": "2026-11-12T23:08:04",
      "texte": "Vente ERA (stop suiveur, gain securise) : -0.67 EUR (-1.0 %)"
    },
    {
      "t": "2026-11-12T23:08:04",
      "texte": "Vente AMDB (duree maximale atteinte) : +2.24 EUR (+3.1 %)"
    },
    {
      "t": "2026-11-13T03:37:06",
      "texte": "Vente GOOGLB (duree maximale atteinte) : +1.38 EUR (+1.9 %)"
    },
    {
      "t": "2026-11-13T03:37:06",
      "texte": "Achat PEPE pour 69.93 EUR (score 6 : tendance haussiere, volume x2.3, elan 1 h, RSI 61)"
    },
    {
      "t": "2026-11-13T03:37:06",
      "texte": "Achat BARD pour 69.93 EUR (score 5 : tendance haussiere, volume x2.5, RSI 64)"
    },
    {
      "t": "2026-11-13T10:58:38",
      "texte": "Objectif atteint sur BARD : stop suiveur active, gain securise a +11.7 %"
    },
    {
      "t": "2026-11-13T10:58:38",
      "texte": "Achat DODO pour 70.57 EUR (score 5 : tendance haussiere, volume x2.3, RSI 69)"
    },
    {
      "t": "2026-11-13T18:38:03",
      "texte": "Vente TQQQB (stop-loss) : -4.17 EUR (-5.9 %)"
    },
    {
      "t": "2026-11-13T18:38:03",
      "texte": "Vente BARD (stop suiveur, gain securise) : +7.97 EUR (+11.4 %)"
    },
    {
      "t": "2026-11-13T18:38:03",
      "texte": "Achat NIGHT pour 70.00 EUR (score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 62)"
    },
    {
      "t": "2026-11-13T18:38:03",
      "texte": "Achat INIT pour 70.00 EUR (score 5 : tendance haussiere, volume x3.6, RSI 61)"
    },
    {
      "t": "2026-11-13T23:52:47",
      "texte": "Vente PEPE (stop-loss) : -2.82 EUR (-4.0 %)"
    },
    {
      "t": "2026-11-13T23:52:47",
      "texte": "Vente INIT (stop-loss) : -5.96 EUR (-8.5 %)"
    },
    {
      "t": "2026-11-13T23:52:47",
      "texte": "Achat RLUSD pour 68.63 EUR (score 5 : tendance haussiere, volume x2.5, RSI 60)"
    },
    {
      "t": "2026-11-14T03:51:20",
      "texte": "Achat BERA pour 68.57 EUR (score 5 : tendance haussiere, volume x2.5, RSI 68)"
    },
    {
      "t": "2026-11-14T10:37:39",
      "texte": "Objectif atteint sur DODO : stop suiveur active, gain securise a +10.3 %"
    },
    {
      "t": "2026-11-14T10:37:39",
      "texte": "Vente BERA (stop-loss) : -12.86 EUR (-18.8 %)"
    },
    {
      "t": "2026-11-14T17:06:14",
      "texte": "Vente DODO (stop suiveur, gain securise) : +6.96 EUR (+9.9 %)"
    },
    {
      "t": "2026-11-14T17:06:14",
      "texte": "Objectif atteint sur NIGHT : stop suiveur active, gain securise a +6.1 %"
    },
    {
      "t": "2026-11-14T17:06:14",
      "texte": "Achat BANANAS31 pour 68.36 EUR (score 6 : tendance haussiere, volume x3.4, elan 1 h, RSI 62)"
    },
    {
      "t": "2026-11-14T21:40:42",
      "texte": "Vente NIGHT (stop suiveur, gain securise) : +0.96 EUR (+1.4 %)"
    },
    {
      "t": "2026-11-14T21:40:42",
      "texte": "Vente BANANAS31 (stop-loss) : -4.57 EUR (-6.7 %)"
    },
    {
      "t": "2026-11-14T21:40:42",
      "texte": "Achat SOXSB pour 67.42 EUR (score 6 : tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 59)"
    }
  ],
  "signaux": [
    {
      "paire": "SOXSBUSDT",
      "base": "SOXSB",
      "prixUsdt": 54.7,
      "r1h": 1.15,
      "r4h": 1.05,
      "r24h": 6.37,
      "rsi": 58.6,
      "volRatio": 0.3,
      "cassure": true,
      "tendance": true,
      "score": 6,
      "raisons": "tendance haussiere, cassure du plus haut 12 h, elan 1 h, RSI 59",
      "volume24hUsdt": 3900727.0,
      "avis": "",
      "spark": [
        52.75,
        52.76,
        52.74,
        52.8,
        52.83,
        52.8,
        52.78,
        52.81,
        52.86,
        53.04,
        53.09,
        53.08,
        52.83,
        52.99,
        53.37,
        54.24,
        54.06,
        53.91,
        54.17,
        54.17,
        54.43,
        54.24,
        53.99,
        54.24,
        54.7
      ]
    },
    {
      "paire": "MEGAUSDT",
      "base": "MEGA",
      "prixUsdt": 0.04533,
      "r1h": 4.93,
      "r4h": 0.85,
      "r24h": 2.26,
      "rsi": 57.0,
      "volRatio": 8.27,
      "cassure": false,
      "tendance": false,
      "score": 3,
      "raisons": "volume x8.3, RSI 57",
      "volume24hUsdt": 3006994.0,
      "avis": "",
      "spark": [
        0.04482,
        0.04497,
        0.04522,
        0.04531,
        0.04527,
        0.0454,
        0.04562,
        0.04562,
        0.04569,
        0.04571,
        0.04597,
        0.04538,
        0.04547,
        0.04511,
        0.04509,
        0.04471,
        0.04461,
        0.04468,
        0.04431,
        0.044,
        0.04366,
        0.04307,
        0.04295,
        0.04617,
        0.04533
      ]
    },
    {
      "paire": "INITUSDT",
      "base": "INIT",
      "prixUsdt": 0.0995,
      "r1h": -4.95,
      "r4h": 2.11,
      "r24h": -11.27,
      "rsi": 57.7,
      "volRatio": 2.12,
      "cassure": false,
      "tendance": false,
      "score": 3,
      "raisons": "volume x2.1, RSI 58",
      "volume24hUsdt": 5829309.0,
      "avis": "",
      "spark": [
        0.10402,
        0.10415,
        0.10284,
        0.10445,
        0.10228,
        0.10134,
        0.10227,
        0.10139,
        0.10021,
        0.0982,
        0.10076,
        0.09924,
        0.09856,
        0.0976,
        0.09836,
        0.09726,
        0.09587,
        0.09728,
        0.10368,
        0.1075,
        0.10593,
        0.10929,
        0.10395,
        0.098,
        0.0995
      ]
    },
    {
      "paire": "牛来USDT",
      "base": "牛来",
      "prixUsdt": 0.04597,
      "r1h": -8.95,
      "r4h": -12.94,
      "r24h": -28.47,
      "rsi": 24.1,
      "volRatio": 2.74,
      "cassure": false,
      "tendance": false,
      "score": 2,
      "raisons": "volume x2.7",
      "volume24hUsdt": 7900837.0,
      "avis": "",
      "spark": [
        0.058,
        0.05805,
        0.05849,
        0.0586,
        0.05839,
        0.05822,
        0.05833,
        0.05777,
        0.05656,
        0.05581,
        0.0554,
        0.05209,
        0.05302,
        0.05424,
        0.05425,
        0.05325,
        0.05261,
        0.05337,
        0.05356,
        0.05296,
        0.05198,
        0.05064,
        0.04708,
        0.04661,
        0.04597
      ]
    },
    {
      "paire": "ASTERUSDT",
      "base": "ASTER",
      "prixUsdt": 0.5094,
      "r1h": -15.3,
      "r4h": -18.39,
      "r24h": -22.22,
      "rsi": 9.2,
      "volRatio": 24.82,
      "cassure": false,
      "tendance": false,
      "score": 2,
      "raisons": "volume x24.8",
      "volume24hUsdt": 20988973.0,
      "avis": "",
      "spark": [
        0.639,
        0.6395,
        0.6428,
        0.6417,
        0.6392,
        0.6373,
        0.6391,
        0.6395,
        0.6388,
        0.637,
        0.6352,
        0.6303,
        0.6275,
        0.6266,
        0.6323,
        0.623,
        0.6211,
        0.6279,
        0.6274,
        0.6146,
        0.6181,
        0.6122,
        0.5499,
        0.5217,
        0.5094
      ]
    },
    {
      "paire": "DASHUSDT",
      "base": "DASH",
      "prixUsdt": 35.78,
      "r1h": -3.56,
      "r4h": -4.82,
      "r24h": -12.99,
      "rsi": 23.5,
      "volRatio": 4.15,
      "cassure": false,
      "tendance": false,
      "score": 2,
      "raisons": "volume x4.2",
      "volume24hUsdt": 3811457.0,
      "avis": "",
      "spark": [
        39.72,
        39.75,
        39.95,
        39.69,
        39.67,
        39.66,
        39.76,
        39.56,
        39.24,
        39.12,
        39.17,
        38.32,
        38.3,
        38.08,
        38.32,
        37.31,
        37.54,
        37.97,
        37.84,
        37.46,
        37.31,
        37.08,
        36.74,
        36.34,
        35.78
      ]
    },
    {
      "paire": "BONKUSDT",
      "base": "BONK",
      "prixUsdt": 2.33E-06,
      "r1h": -3.32,
      "r4h": -2.92,
      "r24h": -13.01,
      "rsi": 29.4,
      "volRatio": 2.01,
      "cassure": false,
      "tendance": false,
      "score": 2,
      "raisons": "volume x2.0",
      "volume24hUsdt": 3325155.0,
      "avis": "",
      "spark": [
        2.59E-06,
        2.6E-06,
        2.61E-06,
        2.58E-06,
        2.59E-06,
        2.58E-06,
        2.59E-06,
        2.6E-06,
        2.57E-06,
        2.56E-06,
        2.55E-06,
        2.49E-06,
        2.48E-06,
        2.46E-06,
        2.48E-06,
        2.4E-06,
        2.4E-06,
        2.44E-06,
        2.43E-06,
        2.42E-06,
        2.42E-06,
        2.41E-06,
        2.39E-06,
        2.35E-06,
        2.33E-06
      ]
    },
    {
      "paire": "NIGHTUSDT",
      "base": "NIGHT",
      "prixUsdt": 0.04691,
      "r1h": -2.37,
      "r4h": -2.31,
      "r24h": 1.53,
      "rsi": 35.8,
      "volRatio": 0.72,
      "cassure": false,
      "tendance": true,
      "score": 2,
      "raisons": "tendance haussiere",
      "volume24hUsdt": 10179330.0,
      "avis": "",
      "spark": [
        0.04661,
        0.04698,
        0.04771,
        0.04738,
        0.04679,
        0.04699,
        0.04713,
        0.04843,
        0.04812,
        0.049,
        0.04985,
        0.04908,
        0.05021,
        0.04992,
        0.04996,
        0.04755,
        0.04796,
        0.04842,
        0.04816,
        0.04807,
        0.04786,
        0.0479,
        0.04781,
        0.04759,
        0.04691
      ]
    },
    {
      "paire": "TRUMPUSDT",
      "base": "TRUMP",
      "prixUsdt": 0.943,
      "r1h": -1.98,
      "r4h": -4.17,
      "r24h": -13.86,
      "rsi": 31.4,
      "volRatio": 2.66,
      "cassure": false,
      "tendance": false,
      "score": 2,
      "raisons": "volume x2.7",
      "volume24hUsdt": 9977923.0,
      "avis": "",
      "spark": [
        1.052,
        1.052,
        1.056,
        1.057,
        1.052,
        1.04,
        1.042,
        1.04,
        1.035,
        1.029,
        1.031,
        1.012,
        1.017,
        1.0,
        0.999,
        0.98,
        0.977,
        0.986,
        0.979,
        0.977,
        0.976,
        0.971,
        0.951,
        0.944,
        0.943
      ]
    },
    {
      "paire": "DODOUSDT",
      "base": "DODO",
      "prixUsdt": 0.032,
      "r1h": -1.39,
      "r4h": -0.25,
      "r24h": 9.63,
      "rsi": 51.9,
      "volRatio": 0.36,
      "cassure": false,
      "tendance": true,
      "score": 2,
      "raisons": "tendance haussiere",
      "volume24hUsdt": 9613370.0,
      "avis": "",
      "spark": [
        0.03211,
        0.03138,
        0.03367,
        0.03424,
        0.03484,
        0.03488,
        0.03509,
        0.03414,
        0.03432,
        0.03438,
        0.03322,
        0.0326,
        0.03298,
        0.03187,
        0.03146,
        0.0313,
        0.03269,
        0.03282,
        0.03268,
        0.03311,
        0.03362,
        0.03238,
        0.03249,
        0.03254,
        0.032
      ]
    },
    {
      "paire": "APTUSDT",
      "base": "APT",
      "prixUsdt": 0.4566,
      "r1h": -3.02,
      "r4h": -3.75,
      "r24h": -15.42,
      "rsi": 29.0,
      "volRatio": 2.23,
      "cassure": false,
      "tendance": false,
      "score": 2,
      "raisons": "volume x2.2",
      "volume24hUsdt": 6526737.0,
      "avis": "",
      "spark": [
        0.513,
        0.5136,
        0.5143,
        0.511,
        0.5103,
        0.511,
        0.5115,
        0.5112,
        0.5074,
        0.5064,
        0.5059,
        0.4926,
        0.4883,
        0.4879,
        0.4892,
        0.4709,
        0.4731,
        0.478,
        0.4761,
        0.4744,
        0.4727,
        0.4683,
        0.4683,
        0.4611,
        0.4566
      ]
    },
    {
      "paire": "PENGUUSDT",
      "base": "PENGU",
      "prixUsdt": 0.004786,
      "r1h": -4.01,
      "r4h": -6.91,
      "r24h": -21.9,
      "rsi": 21.9,
      "volRatio": 2.12,
      "cassure": false,
      "tendance": false,
      "score": 2,
      "raisons": "volume x2.1",
      "volume24hUsdt": 15755516.0,
      "avis": "",
      "spark": [
        0.005855,
        0.005876,
        0.005882,
        0.005846,
        0.005827,
        0.005819,
        0.005823,
        0.005833,
        0.005712,
        0.005643,
        0.005647,
        0.005319,
        0.005341,
        0.005329,
        0.005287,
        0.005103,
        0.005143,
        0.005163,
        0.00513,
        0.005135,
        0.005112,
        0.004986,
        0.00494,
        0.004848,
        0.004786
      ]
    },
    {
      "paire": "XPLUSDT",
      "base": "XPL",
      "prixUsdt": 0.04352,
      "r1h": -3.93,
      "r4h": -4.77,
      "r24h": -12.74,
      "rsi": 31.0,
      "volRatio": 2.22,
      "cassure": false,
      "tendance": false,
      "score": 2,
      "raisons": "volume x2.2",
      "volume24hUsdt": 6000980.0,
      "avis": "",
      "spark": [
        0.04791,
        0.04806,
        0.04828,
        0.0479,
        0.0478,
        0.04809,
        0.04828,
        0.04852,
        0.04802,
        0.04804,
        0.04849,
        0.04719,
        0.04758,
        0.0479,
        0.04759,
        0.04535,
        0.0454,
        0.04558,
        0.04609,
        0.04566,
        0.04544,
        0.04528,
        0.04489,
        0.04415,
        0.04352
      ]
    },
    {
      "paire": "QNTUSDT",
      "base": "QNT",
      "prixUsdt": 145.18,
      "r1h": -3.08,
      "r4h": -4.77,
      "r24h": -11.57,
      "rsi": 28.0,
      "volRatio": 2.84,
      "cassure": false,
      "tendance": false,
      "score": 2,
      "raisons": "volume x2.8",
      "volume24hUsdt": 8333690.0,
      "avis": "",
      "spark": [
        156.11,
        157.09,
        158.21,
        157.95,
        157.49,
        158.64,
        160.07,
        159.06,
        157.45,
        157.09,
        157.87,
        155.58,
        154.8,
        152.18,
        153.63,
        151.05,
        151.01,
        151.11,
        151.19,
        152.77,
        151.02,
        150.32,
        149.16,
        147.94,
        145.18
      ]
    },
    {
      "paire": "DOTUSDT",
      "base": "DOT",
      "prixUsdt": 0.73,
      "r1h": -2.93,
      "r4h": -2.8,
      "r24h": -11.16,
      "rsi": 27.9,
      "volRatio": 2.01,
      "cassure": false,
      "tendance": false,
      "score": 2,
      "raisons": "volume x2.0",
      "volume24hUsdt": 5080312.0,
      "avis": "",
      "spark": [
        0.784,
        0.787,
        0.787,
        0.786,
        0.784,
        0.786,
        0.79,
        0.788,
        0.782,
        0.78,
        0.78,
        0.769,
        0.767,
        0.762,
        0.764,
        0.747,
        0.749,
        0.756,
        0.753,
        0.753,
        0.752,
        0.752,
        0.746,
        0.739,
        0.73
      ]
    },
    {
      "paire": "ETHFIUSDT",
      "base": "ETHFI",
      "prixUsdt": 0.4895,
      "r1h": -1.75,
      "r4h": -4.26,
      "r24h": -14.91,
      "rsi": 31.1,
      "volRatio": 2.19,
      "cassure": false,
      "tendance": false,
      "score": 2,
      "raisons": "volume x2.2",
      "volume24hUsdt": 4118993.0,
      "avis": "",
      "spark": [
        0.5553,
        0.5543,
        0.5553,
        0.553,
        0.5518,
        0.5464,
        0.546,
        0.5429,
        0.538,
        0.54,
        0.5384,
        0.5275,
        0.524,
        0.5212,
        0.5256,
        0.5027,
        0.5062,
        0.5127,
        0.505,
        0.4991,
        0.4995,
        0.4995,
        0.4996,
        0.4922,
        0.4895
      ]
    },
    {
      "paire": "SHELLUSDT",
      "base": "SHELL",
      "prixUsdt": 0.02787,
      "r1h": 2.24,
      "r4h": 4.19,
      "r24h": -29.37,
      "rsi": 67.7,
      "volRatio": 0.32,
      "cassure": false,
      "tendance": false,
      "score": 2,
      "raisons": "elan 1 h, RSI 68",
      "volume24hUsdt": 24429243.0,
      "avis": "",
      "spark": [
        0.03363,
        0.03271,
        0.03319,
        0.03045,
        0.0306,
        0.03086,
        0.02969,
        0.02816,
        0.02841,
        0.02965,
        0.02926,
        0.02827,
        0.02768,
        0.02701,
        0.02739,
        0.02768,
        0.0265,
        0.02675,
        0.02598,
        0.02634,
        0.02671,
        0.02673,
        0.02717,
        0.02808,
        0.02787
      ]
    },
    {
      "paire": "SOPHUSDT",
      "base": "SOPH",
      "prixUsdt": 0.00216,
      "r1h": -5.26,
      "r4h": 1.89,
      "r24h": 24.14,
      "rsi": 38.1,
      "volRatio": 0.58,
      "cassure": false,
      "tendance": true,
      "score": 2,
      "raisons": "tendance haussiere",
      "volume24hUsdt": 21421910.0,
      "avis": "",
      "spark": [
        0.00157,
        0.00169,
        0.002,
        0.00194,
        0.00176,
        0.00192,
        0.00209,
        0.00241,
        0.00245,
        0.00207,
        0.0022,
        0.00215,
        0.00201,
        0.0019,
        0.00181,
        0.00208,
        0.00213,
        0.00233,
        0.00231,
        0.00224,
        0.00228,
        0.00229,
        0.00225,
        0.00217,
        0.00216
      ]
    },
    {
      "paire": "UUSDT",
      "base": "U",
      "prixUsdt": 1.0003,
      "r1h": 0.0,
      "r4h": 0.01,
      "r24h": -0.01,
      "rsi": 55.6,
      "volRatio": 0.15,
      "cassure": false,
      "tendance": false,
      "score": 1,
      "raisons": "RSI 56",
      "volume24hUsdt": 20575578.0,
      "avis": "",
      "spark": [
        1.0003,
        1.0003,
        1.0003,
        1.0003,
        1.0003,
        1.0003,
        1.0003,
        1.0003,
        1.0003,
        1.0003,
        1.0003,
        1.0003,
        1.0002,
        1.0002,
        1.0002,
        1.0001,
        1.0001,
        1.0002,
        1.0002,
        1.0003,
        1.0003,
        1.0003,
        1.0002,
        1.0002,
        1.0003
      ]
    },
    {
      "paire": "AAVEUSDT",
      "base": "AAVE",
      "prixUsdt": 100.79,
      "r1h": -1.51,
      "r4h": -2.25,
      "r24h": -10.45,
      "rsi": 33.6,
      "volRatio": 1.6,
      "cassure": false,
      "tendance": false,
      "score": 1,
      "raisons": "volume x1.6",
      "volume24hUsdt": 13732072.0,
      "avis": "",
      "spark": [
        107.35,
        107.66,
        107.84,
        107.32,
        107.14,
        107.2,
        107.19,
        107.24,
        106.67,
        105.66,
        105.7,
        104.21,
        104.02,
        103.54,
        104.31,
        102.2,
        102.86,
        103.45,
        102.96,
        102.54,
        102.06,
        101.84,
        101.97,
        101.54,
        100.79
      ]
    },
    {
      "paire": "BTCUSDT",
      "base": "BTC",
      "prixUsdt": 65561.64,
      "r1h": -0.43,
      "r4h": 0.32,
      "r24h": -4.83,
      "rsi": 59.4,
      "volRatio": 0.52,
      "cassure": false,
      "tendance": false,
      "score": 1,
      "raisons": "RSI 59",
      "volume24hUsdt": 1736310218.0,
      "avis": "",
      "spark": [
        66998.22,
        67164.0,
        67412.01,
        67244.1,
        67292.0,
        67258.01,
        67272.79,
        67188.01,
        66998.18,
        66667.7,
        66839.18,
        66268.41,
        65914.01,
        65214.46,
        65742.01,
        65322.72,
        65349.01,
        65607.46,
        65901.6,
        65930.0,
        65565.84,
        65569.21,
        65727.61,
        65596.34,
        65561.64
      ]
    },
    {
      "paire": "NVDABUSDT",
      "base": "NVDAB",
      "prixUsdt": 159.05,
      "r1h": -0.61,
      "r4h": -0.18,
      "r24h": -1.75,
      "rsi": 48.7,
      "volRatio": 1.97,
      "cassure": false,
      "tendance": false,
      "score": 1,
      "raisons": "volume x2.0",
      "volume24hUsdt": 27095572.0,
      "avis": "",
      "spark": [
        162.2,
        162.5,
        162.46,
        162.76,
        162.71,
        162.13,
        162.37,
        162.37,
        162.31,
        161.74,
        161.66,
        161.17,
        160.75,
        160.51,
        160.33,
        159.39,
        159.4,
        159.79,
        159.65,
        159.84,
        159.57,
        159.6,
        159.99,
        159.5,
        159.05
      ]
    },
    {
      "paire": "SHIBUSDT",
      "base": "SHIB",
      "prixUsdt": 3.86E-06,
      "r1h": -2.28,
      "r4h": -2.77,
      "r24h": -10.0,
      "rsi": 25.0,
      "volRatio": 1.92,
      "cassure": false,
      "tendance": false,
      "score": 1,
      "raisons": "volume x1.9",
      "volume24hUsdt": 3689966.0,
      "avis": "",
      "spark": [
        4.14E-06,
        4.15E-06,
        4.17E-06,
        4.15E-06,
        4.15E-06,
        4.15E-06,
        4.16E-06,
        4.17E-06,
        4.15E-06,
        4.13E-06,
        4.12E-06,
        4.06E-06,
        4.04E-06,
        4.01E-06,
        4.04E-06,
        3.96E-06,
        3.96E-06,
        4E-06,
        3.98E-06,
        3.97E-06,
        3.95E-06,
        3.94E-06,
        3.93E-06,
        3.89E-06,
        3.86E-06
      ]
    },
    {
      "paire": "DOGEUSDT",
      "base": "DOGE",
      "prixUsdt": 0.05905,
      "r1h": -1.78,
      "r4h": -1.89,
      "r24h": -9.7,
      "rsi": 38.7,
      "volRatio": 1.52,
      "cassure": false,
      "tendance": false,
      "score": 1,
      "raisons": "volume x1.5",
      "volume24hUsdt": 50893922.0,
      "avis": "",
      "spark": [
        0.0625,
        0.06286,
        0.06313,
        0.06293,
        0.06292,
        0.06293,
        0.06305,
        0.06314,
        0.06269,
        0.06238,
        0.06257,
        0.06145,
        0.06132,
        0.06073,
        0.06112,
        0.05986,
        0.05996,
        0.06057,
        0.06039,
        0.06031,
        0.06001,
        0.05983,
        0.05974,
        0.05946,
        0.05905
      ]
    },
    {
      "paire": "ETHUSDT",
      "base": "ETH",
      "prixUsdt": 1826.07,
      "r1h": -0.77,
      "r4h": -0.02,
      "r24h": -6.17,
      "rsi": 54.3,
      "volRatio": 0.64,
      "cassure": false,
      "tendance": false,
      "score": 1,
      "raisons": "RSI 54",
      "volume24hUsdt": 679735381.0,
      "avis": "",
      "spark": [
        1895.0,
        1905.33,
        1913.51,
        1908.92,
        1909.15,
        1909.11,
        1910.49,
        1908.11,
        1900.06,
        1888.85,
        1893.8,
        1858.4,
        1853.91,
        1833.36,
        1841.23,
        1821.81,
        1825.88,
        1842.23,
        1843.28,
        1841.95,
        1830.98,
        1830.47,
        1835.09,
        1828.81,
        1826.07
      ]
    }
  ],
  "stats": {
    "nbTrades": 142,
    "gagnants": 27,
    "frais": 23.91814780578809,
    "pnl": -320.7864333462749
  },
  "marche": {
    "eurusdt": 1.1018,
    "btcUsdt": 65561.64,
    "btc1h": -0.43,
    "univers": 84,
    "analyses": 84,
    "achatsBloques": null
  },
  "regime": "normal",
  "derniereExecution": "2026-11-14T21:40:42",
  "derniereVerif": "2026-11-14T21:44:59"
};
