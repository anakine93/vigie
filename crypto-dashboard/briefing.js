// Briefing écrit par les agents de recherche. Rempli par Claude.
window.BRIEFING = {
  date: "15/10/2026 · 5 agents, rapports relus par l'agent Risques",
  synthese: "Fond de marché défensif. Une inflation américaine plus forte que prévu (CPI de septembre à 3,7 % sur un an) relance le risque d'une hausse de taux de la Fed le 28/10. BTC repasse sous 81 000 $ et la capitalisation totale recule d'environ 5,5 % sur 24 h. Le sentiment est retombé à neutre (53) sans excès de levier. Les flux d'ETF sont irréguliers, en sortie sur ETH et SOL. Seul signal structurel positif : les réserves de BTC sur les exchanges continuent de baisser. L'agent Risques nuance deux chiffres clés : la probabilité d'une hausse de la Fed n'est pas fiable (de 20 à 49 % selon les sources) et l'impact d'une décision MSCI est probablement surestimé.",
  scenarios: [
    { nom: "Favorable", ton: "up", texte: "Déclencheurs : MSCI renonce ou reporte (16/10), le PPI et le PCE ralentissent, la Fed maintient ses taux le 28/10 sans durcir le ton, le 10 ans repasse sous 5 %. On verrait alors plusieurs jours d'entrées dans les ETF BTC, une offre de stablecoins en hausse et un BTC au-dessus de 84–85 000 $." },
    { nom: "Central", ton: "", texte: "Déclencheurs : MSCI applique une période tampon (pas d'exclusion immédiate), la Fed fait une pause mais annonce une hausse en décembre. On verrait des flux d'ETF hésitants, des taux de financement neutres et un BTC entre environ 75 000 et 85 000 $." },
    { nom: "Défavorable", ton: "down", texte: "Déclencheurs : exclusion de Strategy confirmée, hausse de la Fed le 28/10 ou PCE chaud le 29/10, Brent en hausse. On verrait des sorties d'ETF de plus de 300 M$ par jour, plus de 1 Md$ de positions longues liquidées, un BTC cassant les 75 000 $ vers la zone 60–75 000 $, et une pression sur les altcoins détenus par des sociétés de trésorerie (SOL)." }
  ],
  surveiller: [
    "16/10 : décision MSCI sur les sociétés de trésorerie crypto (Strategy) ; unlocks ARB et STBL",
    "23/10 : PMI flash (zone euro, Royaume-Uni, États-Unis)",
    "28/10 : décision de la Fed (FOMC), l'événement principal",
    "29/10 : décision de la BCE, PIB US du T3 et PCE de septembre",
    "03/11 : élections de mi-mandat américaines"
  ],
  agents: [
    {
      nom: "Actualités", confiance: "moyenne",
      resume: "BTC sous 81 000 $ après le CPI ; régulation américaine bloquée ; décision MSCI imminente sur Strategy.",
      points: [
        { texte: "CPI US de septembre à +3,7 % sur un an (3,6 % attendu), core à 2,6 %. BTC sous 82 000 $ le 14/10, puis sous 81 000 $ le 15/10.", url: "https://www.theblock.co/news/markets/2026-10-14-bitcoin-falls-below-82000-core-inflation-fed-rate-hike-418582" },
        { texte: "MSCI annonce d'ici le 16/10 si les sociétés de trésorerie crypto restent dans ses indices. En cas d'exclusion, elle s'appliquerait lors de la revue de novembre, avec une période tampon possible. Ventes forcées estimées à 2,8 Md$ (ancienne estimation JPMorgan).", url: "https://finance.yahoo.com/news/msci-retains-strategy-indices-keeps-154527087.html" },
        { texte: "Départ de Patrick Witt, conseiller crypto de la Maison-Blanche. Le Clarity Act reste bloqué au Sénat.", url: "https://www.theblock.co/news/regulation/2026-10-14-white-house-crypto-adviser-patrick-witt-departs-418611" },
        { texte: "L'EBA classe USDC comme premier e-money token « significatif » dans l'UE, avec une supervision directe à partir du 12/11.", url: "https://www.theblock.co/news/regulation/2026-10-15-eba-designates-circles-usdc-as-the-eus-first-significant-e-money-token-418637" },
        { texte: "Les entreprises continuent d'acheter : Strive +3 311 BTC, Strategy +250 BTC (848 250 BTC détenus).", url: "https://bitcoinnewsdigest.substack.com/p/bitcoin-news-digest-october-14-2026" },
        { texte: "SkyAI (trésorerie SOL) : réserves en baisse d'environ 70 % en un mois et conflit avec l'actionnaire Bastion.", url: "https://www.theblock.co/news/business/2026-10-14-solana-treasury-skyai-bastion-sol-sales-tender-offer-418598" },
        { texte: "Unlocks de tokens ARB et STBL le 16/10 (montants non vérifiés).", url: "https://www.bittime.com/en/blog/token-unlock-oktober" },
        { texte: "Aucun piratage majeur ni nouvelle décision de la SEC trouvés cette semaine. Rien de nouveau sur XRP, à part la conférence Swell du 27 au 29/10." }
      ],
      contestation: "Le chiffre de −679 M$ de sorties d'ETF sur la semaine (agrégateur secondaire) ne colle pas avec les données de l'agent Fondamentaux, qui donnent déjà −729 M$ sur deux jours. Sur MSCI, le haut de fourchette de 24 Md$ n'a aucune source solide, et les fonds indexés MSCI ne détiennent qu'environ 3 % des actions Strategy."
    },
    {
      nom: "Fondamentaux", confiance: "moyenne",
      resume: "Données on-chain contrastées : offre de BTC en baisse sur les exchanges, mais activité et frais en recul sur la plupart des réseaux.",
      points: [
        { texte: "BTC : réserves sur exchanges d'environ 2,67 M BTC, au plus bas depuis 3 ans (moins d'offre immédiatement disponible).", url: "https://en.coinotag.com/bitcoin-btc-exchange-reserve-falls-2-68-million-lowest-three-years" },
        { texte: "ETH : 9 séances consécutives de sorties des ETF (−201,9 M$ le 06/10) ; frais en baisse de 36,8 % sur 7 jours ; TVL de 49,4 Md$.", url: "https://cryip.co/us-ether-etfs-bleed-201-9-million-in-a-single-day-almost-entirely-from-blackrocks-etha/" },
        { texte: "SOL : frais en baisse de 22,4 % sur 7 jours ; ETF à −24,8 M$ sur la semaine du 5 au 9/10.", url: "https://www.altcoinbuzz.io/xrp-etfs-narrow-160m-gap-on-solana-as-october-flows-split" },
        { texte: "XRP : seul grand actif avec des ETF en entrée (+11,3 M$ sur la semaine).", url: "https://www.altcoinbuzz.io/xrp-etfs-narrow-160m-gap-on-solana-as-october-flows-split" },
        { texte: "BNB : frais en baisse de 47 % sur 1 mois. HYPE : revenus stables (71,6 M$ sur 30 jours), mais pression d'offre liée aux unlocks.", url: "https://api.llama.fi/summary/fees/bsc" },
        { texte: "Liquidité : USDT + USDC à 256,5 Md$, en légère baisse sur 1 semaine et bien sous le pic de mai 2026.", url: "https://stablecoins.llama.fi/stablecoins" },
        { texte: "ETF BTC : +2,65 Md$ en septembre, mais −484,9 M$ le 07/10 et −244,1 M$ le 08/10.", url: "https://www.kucoin.com/news/flash/bitcoin-etfs-see-118-8m-net-inflow-on-october-6-2026" }
      ],
      contestation: "La baisse des frais suit surtout celle des prix : c'est une conséquence, pas un signal indépendant. Le « plus bas de 3 ans » des réserves sur exchanges vient d'un agrégateur dont la méthode varie, et cette lecture haussière va contre les sorties d'ETF, la baisse des stablecoins et les liquidations de positions longues."
    },
    {
      nom: "Macro", confiance: "moyenne",
      resume: "Régime risk-off : inflation qui repart, banques centrales en resserrement, taux longs et dollar élevés.",
      points: [
        { texte: "Probabilité d'une hausse de la Fed le 28/10 : environ 44–49 % selon FedWatch, mais les chiffres varient de 27 à 54 % selon les sources. Taux actuels : 3,75–4,00 %.", url: "https://decrypt.co/380950/bitcoin-falls-hot-inflation-fed-hike-odds" },
        { texte: "10 ans US vers 5,3 %, proche de ses plus hauts depuis plus de 20 ans ; DXY vers 102,9, au plus haut depuis avril 2025.", url: "https://www.fxstreet.com/news/us-dollar-index-roars-towards-103-as-hot-cpi-reignite-fed-hike-bets-202610141545" },
        { texte: "Corrélation BTC/Nasdaq en baisse (environ 0,33 sur 90 jours en septembre) ; corrélation avec l'or au-dessus de 0,5.", url: "https://cryptobriefing.com/bitcoin-decouples-nasdaq-aligns-gold/" },
        { texte: "Guerre avec l'Iran et tensions sur le détroit d'Ormuz : pétrole cher, donc pression inflationniste.", url: "https://www.wsmv.com/2026/09/09/trump-oil-prices-likely-wont-come-down-until-after-midterms-iran-war-continues/" },
        { texte: "BCE : taux de dépôt à 2,50 % selon une source, mais d'autres sources divergent ; décision le 29/10.", url: "https://admiralmarkets.com/analytics/traders-blog/ecb-meeting-october-2026" }
      ],
      contestation: "La probabilité d'une hausse de 44–49 % n'est pas confirmée : le 07/10, le marché donnait plutôt 20–25 %. Le CPI chaud a pu la faire monter, mais ce n'est pas vérifié. Autre point : une corrélation BTC/Nasdaq faible laisse penser que la baisse vient des taux et du pétrole plutôt que des actions."
    },
    {
      nom: "Sentiment", confiance: "moyenne",
      resume: "Retour au neutre sans excès de levier : aucun signal contrarien fort dans un sens ou dans l'autre.",
      points: [
        { texte: "Fear & Greed à 53 (neutre), contre 74 le 01/10 et un pic à 78 le 22/09.", url: "https://api.alternative.me/fng/?limit=30" },
        { texte: "Taux de financement quasi nuls (BTC +0,0003 % et ETH +0,0055 % par 8 h) et open interest stable : pas d'euphorie à crédit.", url: "https://fapi.binance.com/fapi/v1/premiumIndex?symbol=BTCUSDT" },
        { texte: "Liquidations de 555 M$ le 06/10 et d'environ 1,08 Md$ le 09/10, surtout des positions longues.", url: "https://www.theblock.co/news/markets/2026-10-06-bitcoin-slides-crypto-long-liquidations-surge-417882" },
        { texte: "Dominance BTC à 59,5 % et Altcoin Season Index à 47 : marché défensif, les altcoins sont à la traîne.", url: "https://www.blockchaincenter.net/en/altcoin-season-index/" },
        { texte: "Cibles d'analystes très dispersées : Bernstein vise 125 000 $ fin 2026, K33 parle de « chopping lower » (fourchette 60–75 000 $), 10x Research avait un scénario baissier à 46 000 $. Plusieurs de ces cibles datent d'avant octobre.", url: "https://247wallst.com/investing/cryptocurrency/2026/10/05/bernstein-says-125000-by-december-and-michael-van-de-poppe-says-a-new-high-by-january-can-bitcoin-reach-125000-by-the-end-of-2026/" }
      ],
      contestation: "Les cibles d'analystes sont pour la plupart périmées (février, juillet) ; seule celle de K33 date d'octobre. Un Fear & Greed à 53 un jour où la capitalisation totale perd 5,5 % montre que l'indicateur réagit en retard. L'open interest ne couvre que Binance, sans le CME ni les options."
    },
    {
      nom: "Risques (contradicteur)", confiance: "moyenne",
      resume: "A relu les quatre rapports et vérifié lui-même plusieurs chiffres clés. Ses objections apparaissent sous chaque agent, et les scénarios de la synthèse viennent de lui.",
      points: [
        { texte: "16/10, décision MSCI : la simulation de mai excluait Strategy. L'impact passerait surtout par le sentiment, moins par des ventes de BTC.", url: "https://finance.yahoo.com/news/msci-retains-strategy-indices-keeps-154527087.html" },
        { texte: "28/10, FOMC : une deuxième hausse ou un ton très ferme, avec un 10 ans au-dessus de 5 %, resserrerait directement la liquidité. Vérifié : la hausse de septembre était votée à 12-0, et les minutes évoquent une nouvelle hausse d'ici la fin de l'année.", url: "https://www.babypips.com/news/headline-sept-fomc-minutes-support-hawkish-stance-2026-10-08" },
        { texte: "29/10 : le PCE, le PIB du T3 et la BCE tombent le même jour, d'où un risque de volatilité concentrée." },
        { texte: "En continu : un pétrole au-dessus de 100 $ (conflit avec l'Iran) entretient l'inflation et limite les marges de manœuvre de la Fed." },
        { texte: "Altcoins : les unlocks ARB et STBL et les sociétés de trésorerie fragiles (SkyAI) risquent d'entraîner des ventes forcées." },
        { texte: "Non vérifiés : chiffres exacts du CPI (3,7 % et 2,6 %), 10 ans à 5,3 % au 14/10, DXY, unlocks, arrestation de Richard Heart, statut de l'USDC auprès de l'EBA.", url: "https://www.bitrue.com/blog/us-cpi-september-2026-inflation-report-bitcoin" }
      ]
    }
  ]
};
