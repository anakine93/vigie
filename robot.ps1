# Robot de micro-transactions virtuelles Vigie Crypto (argent fictif, aucun ordre reel).
# Toutes les 5 minutes : scanne les paires USDT les plus liquides de Binance, calcule des
# indicateurs techniques sur les bougies de 15 minutes, applique les avis des agents
# (orientations.json et predictions en cours de portefeuille.json), puis vend et achete
# virtuellement selon des regles fixes. Ecrit robot.json (etat) et robot.js (tableau de bord).
# Usage : un seul cycle  -> powershell -NoProfile -ExecutionPolicy Bypass -File robot.ps1
#         en continu     -> powershell -NoProfile -ExecutionPolicy Bypass -File robot.ps1 -Boucle
param([switch]$Boucle, [switch]$VerifSeule,[int]$IntervalleSec = 300, [string]$Dossier = (Join-Path $PSScriptRoot "crypto-dashboard"))
$ErrorActionPreference = "Stop"
[Threading.Thread]::CurrentThread.CurrentCulture = [Globalization.CultureInfo]::InvariantCulture

$etatPath   = Join-Path $Dossier "robot.json"
$jsPath     = Join-Path $Dossier "robot.js"
$orientPath = Join-Path $Dossier "orientations.json"
$pfPath     = Join-Path $Dossier "portefeuille.json"
$fmt  = "yyyy-MM-ddTHH:mm:ss"
$utf8 = New-Object System.Text.UTF8Encoding($false)
. (Join-Path $PSScriptRoot "caisse.ps1")
# Dans le cloud (GitHub), Binance refuse les serveurs americains : on passe alors par son service de donnees public.
$API  = $(if ($env:BINANCE_API) { $env:BINANCE_API } else { "https://api.binance.com/api/v3" })

$CFG = [ordered]@{
  capitalInitial = 1000; partBase = 0.10; partFavorable = 0.15; maxPositions = 4
  stopLoss = 0.03; priseGain = 0.05; dureeMaxH = 24; scoreMin = 5; rsiMax = 75
  volumeMinUsdt = 3000000; univers = 150; frais = 0.001; cooldownH = 2; btcChute1h = -0.01
}
$STABLES = @("USDC","FDUSD","TUSD","USDP","DAI","BUSD","EUR","EURI","AEUR","USDE","XUSD","USD1","BFUSD","PYUSD","UST","USTC","GBP","TRY","BRL","PAXG","WBTC","WBETH","BNSOL")
$CG = @{ bitcoin="BTC"; ethereum="ETH"; solana="SOL"; ripple="XRP"; binancecoin="BNB"; arbitrum="ARB"; tron="TRX"
  hyperliquid="HYPE"; cardano="ADA"; dogecoin="DOGE"; chainlink="LINK"; "avalanche-2"="AVAX"; polkadot="DOT"
  litecoin="LTC"; "shiba-inu"="SHIB"; sui="SUI"; near="NEAR"; aptos="APT"; optimism="OP"; pepe="PEPE"
  uniswap="UNI"; "the-open-network"="TON"; injective="INJ"; filecoin="FIL"; ethena="ENA" }

function Lire-Json($p) { [IO.File]::ReadAllText($p, [Text.Encoding]::UTF8) | ConvertFrom-Json }
function En-Liste($x) { $l = New-Object System.Collections.Generic.List[object]; foreach ($i in @($x)) { if ($null -ne $i) { $l.Add($i) } }; return ,$l }
function Api($chemin) {
  for ($i = 1; $i -le 3; $i++) {
    try { return Invoke-RestMethod -Uri ($API + $chemin) -TimeoutSec 20 }
    catch { if ($i -eq 3) { throw }; Start-Sleep -Seconds (5 * $i) }
  }
}
function Ecrire($chemin, $texte) { $tmp = "$chemin.tmp"; [IO.File]::WriteAllText($tmp, $texte, $utf8); Move-Item -Force $tmp $chemin }
function Ema($v, [int]$n) { $k = 2 / ($n + 1); $e = $v[0]; for ($i = 1; $i -lt $v.Count; $i++) { $e = $v[$i] * $k + $e * (1 - $k) }; return $e }
function Rsi($v, [int]$n) {
  $g = 0.0; $p = 0.0
  for ($i = $v.Count - $n; $i -lt $v.Count; $i++) { $d = $v[$i] - $v[$i - 1]; if ($d -gt 0) { $g += $d } else { $p -= $d } }
  if ($p -eq 0) { return 100.0 }; return 100 - 100 / (1 + $g / $p)
}
# Glissement simule selon la liquidite : plus un actif est petit, plus l'execution coute cher.
function Glissement($volUsdt) { if ($volUsdt -ge 100e6) { 0.0005 } elseif ($volUsdt -ge 20e6) { 0.0015 } else { 0.004 } }

# Vend virtuellement une position et l'inscrit dans l'historique ; renvoie le montant net recupere en EUR.
function Cloturer($p, [double]$px, [double]$volUsdt, [double]$eurusdt, [string]$motif, $now, $trades, $journal, $st) {
  $pxS = $px * (1 - (Glissement $volUsdt))
  $brut = $p.quantite * $pxS / $eurusdt; $fr = $brut * $CFG.frais; $net = $brut - $fr; $pnl = $net - $p.montant
  $st.nbTrades++; if ($pnl -gt 0) { $st.gagnants++ }; $st.frais += $fr; $st.pnl += $pnl
  $trades.Add([pscustomobject]@{ paire = $p.paire; base = $p.base; montant = $p.montant; prixEntreeUsdt = $p.prixEntreeUsdt
    prixSortieUsdt = [math]::Round($pxS, 10); ouvertLe = $p.ouvertLe; fermeLe = $now.ToString($fmt)
    pnl = [math]::Round($pnl, 2); pnlPct = [math]::Round(100 * $pnl / $p.montant, 2); motifEntree = $p.motif; motifSortie = $motif; avis = $p.avis })
  $journal.Add([pscustomobject]@{ t = $now.ToString($fmt); texte = ("Vente {0} ({1}) : {2:+0.00;-0.00} EUR ({3:+0.0;-0.0} %)" -f $p.base, $motif, $pnl, (100 * $pnl / $p.montant)) })
  return $net
}

# Verification rapide (toutes les 30 s) : cours des positions ouvertes, stop-loss et prise de gain.
# Le scan complet (nouveaux achats, tendance, avis des agents) reste dans Cycle, toutes les 5 minutes.
function Verif-Rapide {
  if (-not (Test-Path $etatPath)) { return }
  $e = Lire-Json $etatPath
  $positions = En-Liste $e.positions
  if ($positions.Count -eq 0) { return }
  $now = Get-Date
  $syms = @(@($positions | ForEach-Object { $_.paire }) + "EURUSDT" | Select-Object -Unique)
  $q = "[" + (($syms | ForEach-Object { '"' + $_ + '"' }) -join ",") + "]"
  $prix = @{}; foreach ($t in (Api ("/ticker/price?symbols=" + [uri]::EscapeDataString($q)))) { $prix[$t.symbol] = [double]$t.price }
  $eurusdt = $prix["EURUSDT"]; if (-not $eurusdt) { return }
  $trades = En-Liste $e.trades; $journal = En-Liste $e.journal; $liq = Lire-Caisse; $st = $e.stats
  $restantes = New-Object System.Collections.Generic.List[object]; $ventes = 0
  foreach ($p in $positions) {
    $px = $prix[$p.paire]; if (-not $px) { $restantes.Add($p); continue }
    $p | Add-Member -Force prixActuelUsdt $px
    $avant = $p.stopSuiveur
    $motif = Suivre $p $px $p.prixEntreeUsdt $CFG.stopLoss $CFG.priseGain
    if (-not $avant -and $p.stopSuiveur) { $journal.Add([pscustomobject]@{ t = $now.ToString($fmt); texte = ("Objectif atteint sur {0} : stop suiveur active, gain securise a +{1:N1} %" -f $p.base, (100 * ($p.stopSuiveur / $p.prixEntreeUsdt - 1))) }) }
    if (-not $motif) { $restantes.Add($p); continue }
    $vol = $(if ($p.volUsdt) { [double]$p.volUsdt } else { 20e6 })
    $liq += Cloturer $p $px $vol $eurusdt $motif $now $trades $journal $st; $ventes++
  }
  $e.positions = $restantes.ToArray(); $e.trades = $trades.ToArray(); $e.journal = $journal.ToArray()
  $e.liquidites = [math]::Round($liq, 2); Ecrire-Caisse $liq
  $e | Add-Member -Force derniereVerif $now.ToString($fmt)
  $json = $e | ConvertTo-Json -Depth 8
  Ecrire $etatPath $json
  Ecrire $jsPath "// Genere par robot.ps1 - ne pas modifier a la main.`nwindow.ROBOT = $json;`n"
  if ($ventes) { Write-Host ("[{0:HH:mm:ss}] Verification rapide : {1} vente(s)" -f $now, $ventes) }
}

# Indicateurs sur des bougies de 15 minutes (100 bougies = 25 h).
function Analyser($k) {
  $n = $k.Count; if ($n -lt 60) { return $null }
  $c = New-Object double[] $n; $h = New-Object double[] $n; $q = New-Object double[] $n
  for ($i = 0; $i -lt $n; $i++) { $c[$i] = [double]$k[$i][4]; $h[$i] = [double]$k[$i][2]; $q[$i] = [double]$k[$i][7] }
  $last = $c[$n - 1]
  $e20 = Ema $c 20; $e50 = Ema $c 50
  $r1h = $last / $c[$n - 5] - 1; $r4h = $last / $c[$n - 17] - 1
  $rsi = Rsi $c 14
  $vRecent = 0.0; for ($i = $n - 4; $i -lt $n; $i++) { $vRecent += $q[$i] }
  $vAvant = 0.0; for ($i = 0; $i -lt $n - 4; $i++) { $vAvant += $q[$i] }
  $vMoy = $vAvant / (($n - 4) / 4)
  $volRatio = $(if ($vMoy -gt 0) { $vRecent / $vMoy } else { 0 })
  $hautPrec = 0.0; for ($i = $n - 49; $i -lt $n - 1; $i++) { if ($h[$i] -gt $hautPrec) { $hautPrec = $h[$i] } }
  $cassure = $last -gt $hautPrec
  $tendance = $e20 -gt $e50
  $score = 0; $raisons = @()
  if ($tendance) { $score += 2; $raisons += "tendance haussiere" }
  if ($cassure) { $score += 2; $raisons += "cassure du plus haut 12 h" }
  if ($volRatio -ge 2) { $score += 2; $raisons += ("volume x{0:N1}" -f $volRatio) } elseif ($volRatio -ge 1.5) { $score += 1; $raisons += ("volume x{0:N1}" -f $volRatio) }
  if ($r1h -ge 0.005 -and $r1h -le 0.04) { $score += 1; $raisons += "elan 1 h" }
  if ($rsi -ge 52 -and $rsi -le 70) { $score += 1; $raisons += ("RSI {0:N0}" -f $rsi) }
  if ($rsi -gt 78) { $score -= 3; $raisons += ("RSI {0:N0} surachete" -f $rsi) }
  $spark = @(); for ($i = $n - 48; $i -lt $n; $i += 2) { $spark += [math]::Round($c[$i], 8) }; $spark += $last
  return [pscustomobject]@{ prix = $last; tendance = $tendance; r1h = $r1h; r4h = $r4h; rsi = $rsi; volRatio = $volRatio; cassure = $cassure; score = $score; raisons = ($raisons -join ", "); spark = $spark }
}

function Cycle {
  $now = Get-Date
  if (Test-Path $etatPath) { $e = Lire-Json $etatPath } else {
    $e = [pscustomobject]@{
      config = $CFG; debut = $now.ToString($fmt); liquidites = $CFG.capitalInitial; btcInitialEur = $null
      positions = @(); trades = @(); courbe = @(); journal = @(); signaux = @()
      stats = [pscustomobject]@{ nbTrades = 0; gagnants = 0; frais = 0.0; pnl = 0.0 }
      marche = $null; regime = "normal"; derniereExecution = $null
    }
  }
  $positions = En-Liste $e.positions; $trades = En-Liste $e.trades
  $courbe = En-Liste $e.courbe; $journal = En-Liste $e.journal
  $liq = Lire-Caisse; $st = $e.stats
  function Noter($texte) { $journal.Add([pscustomobject]@{ t = $now.ToString($fmt); texte = $texte }) }

  # Cours en direct de toutes les paires
  $Tick = @{}; foreach ($t in (Api "/ticker/24hr")) { $Tick[$t.symbol] = $t }
  $eurusdt = [double]$Tick["EURUSDT"].lastPrice
  $btc = [double]$Tick["BTCUSDT"].lastPrice
  if (-not $eurusdt -or -not $btc) { throw "Cours EURUSDT ou BTCUSDT introuvable." }
  if (-not $e.btcInitialEur) { $e.btcInitialEur = $btc / $eurusdt }

  # Univers : paires USDT les plus liquides, hors stablecoins
  $cands = @($Tick.Values | Where-Object {
      $_.symbol.EndsWith("USDT") -and [double]$_.quoteVolume -ge $CFG.volumeMinUsdt -and [int64]$_.count -gt 0 -and
      ($STABLES -notcontains $_.symbol.Substring(0, $_.symbol.Length - 4)) } |
    Sort-Object { [double]$_.quoteVolume } -Descending | Select-Object -First $CFG.univers)

  # Avis des agents : predictions en cours (agents du matin) puis orientations (agent Technique, prioritaires)
  $avis = @{}; $sourceAvis = @{}; $regime = "normal"
  if (Test-Path $pfPath) {
    try { foreach ($p in @((Lire-Json $pfPath).predictions)) {
        if ($p -and $p.statut -eq "en cours" -and $CG.ContainsKey($p.actif)) {
          $s = $CG[$p.actif]
          if ($p.sens -eq "baisse") { $avis[$s] = "defavorable"; $sourceAvis[$s] = "agent $($p.agent)" }
          elseif (-not $avis.ContainsKey($s)) { $avis[$s] = "favorable"; $sourceAvis[$s] = "agent $($p.agent)" } } } } catch {}
  }
  if (Test-Path $orientPath) {
    try { $o = Lire-Json $orientPath
      if ($o.regime -match "stop") { $regime = "stop" } elseif ($o.regime -match "prudent") { $regime = "prudent" }
      foreach ($a in @($o.avis)) {
        if ($a -and $a.symbole -and [datetime]$a.expire -gt $now) {
          $s = ([string]$a.symbole).ToUpper() -replace "USDT$", ""
          $avis[$s] = $(if ($a.avis -match "^d") { "defavorable" } elseif ($a.avis -match "fav") { "favorable" } else { "neutre" })
          $sourceAvis[$s] = "agent Technique" } } } catch {}
  }

  # Bougies et indicateurs : univers + positions ouvertes
  $paires = New-Object System.Collections.Generic.List[string]
  foreach ($c in $cands) { $paires.Add($c.symbol) }
  foreach ($p in $positions) { if (-not $paires.Contains($p.paire)) { $paires.Add($p.paire) } }
  if (-not $paires.Contains("BTCUSDT")) { $paires.Add("BTCUSDT") }
  $Ana = @{}
  foreach ($s in $paires) { try { $r = Analyser (Api "/klines?symbol=$s&interval=15m&limit=100"); if ($r) { $Ana[$s] = $r } } catch {} }
  $btc1h = $(if ($Ana["BTCUSDT"]) { $Ana["BTCUSDT"].r1h } else { 0 })

  # --- Ventes ---
  $restantes = New-Object System.Collections.Generic.List[object]
  foreach ($p in $positions) {
    $t = $Tick[$p.paire]; if (-not $t) { $restantes.Add($p); continue }
    $px = [double]$t.lastPrice
    $age = ($now - [datetime]$p.ouvertLe).TotalHours; $a = $Ana[$p.paire]
    $avant = $p.stopSuiveur
    $motif = Suivre $p $px $p.prixEntreeUsdt $CFG.stopLoss $CFG.priseGain
    if (-not $avant -and $p.stopSuiveur) { Noter ("Objectif atteint sur {0} : stop suiveur active, gain securise a +{1:N1} %" -f $p.base, (100 * ($p.stopSuiveur / $p.prixEntreeUsdt - 1))) }
    # Une fois le stop suiveur actif, seule la baisse depuis le plus haut declenche la vente.
    if ($motif -or $p.stopSuiveur) { }
    elseif ($age -ge $CFG.dureeMaxH) { $motif = "duree maximale atteinte" }
    elseif ($a -and -not $a.tendance -and $a.r1h -lt 0) { $motif = "tendance cassee" }
    elseif ($avis[$p.base] -eq "defavorable") { $motif = "avis defavorable ($($sourceAvis[$p.base]))" }
    if (-not $motif) { $restantes.Add($p); continue }
    $liq += Cloturer $p $px ([double]$t.quoteVolume) $eurusdt $motif $now $trades $journal $st
  }
  $positions = $restantes

  # --- Achats ---
  $valPos = 0.0; foreach ($p in $positions) { $t = $Tick[$p.paire]; if ($t) { $valPos += $p.quantite * [double]$t.lastPrice / $eurusdt } }
  $total = $liq + $valPos + (Valeur-Marches)
  $mult = $(if ($regime -eq "prudent") { 0.5 } else { 1 })
  $bloque = $null
  if ($regime -eq "stop") { $bloque = "achats suspendus par l'agent Technique" }
  elseif ($btc1h -le $CFG.btcChute1h) { $bloque = ("BTC en chute ({0:N1} % sur 1 h)" -f (100 * $btc1h)) }
  $classement = @($Ana.GetEnumerator() | Sort-Object { $_.Value.score } -Descending)
  $autres = Nb-Positions "robot-marches.json"
  if (-not $bloque) {
    foreach ($kv in $classement) {
      if ($positions.Count -ge $CFG.maxPositions) { break }
      $s = $kv.Key; $a = $kv.Value; $base = $s.Substring(0, $s.Length - 4)
      if ($a.score -lt $CFG.scoreMin) { break }
      if (-not $a.tendance -or $a.rsi -gt $CFG.rsiMax) { continue }
      if ($STABLES -contains $base) { continue }
      if (@($positions | Where-Object { $_.paire -eq $s }).Count) { continue }
      if ($avis[$base] -eq "defavorable") { continue }
      $recent = @($trades | Where-Object { $_.paire -eq $s -and ($now - [datetime]$_.fermeLe).TotalHours -lt $CFG.cooldownH }).Count
      if ($recent) { continue }
      $fav = $avis[$base] -eq "favorable"
      $montant = [math]::Min($(if ($fav) { $CFG.partFavorable } else { $CFG.partBase }) * $mult * $total, $liq - 1)
      if ($montant -lt 5) { break }
      $t = $Tick[$s]; $pxE = [double]$t.lastPrice * (1 + (Glissement ([double]$t.quoteVolume)))
      $fr = $montant * $CFG.frais; $qte = ($montant - $fr) * $eurusdt / $pxE
      $liq -= $montant; $st.frais += $fr
      $motif = "score $($a.score) : $($a.raisons)"
      $positions.Add([pscustomobject]@{ paire = $s; base = $base; quantite = $qte; prixEntreeUsdt = [math]::Round($pxE, 10)
        montant = [math]::Round($montant, 2); ouvertLe = $now.ToString($fmt); score = $a.score; motif = $motif; volUsdt = [double]$t.quoteVolume
        avis = $(if ($fav) { "favorable ($($sourceAvis[$base]))" } else { "aucun" }) })
      Noter ("Achat {0} pour {1:N2} EUR ({2})" -f $base, $montant, $motif)
    }
  }

  # --- Signaux, courbe, ecriture ---
  $e.signaux = @($classement | Select-Object -First 25 | ForEach-Object {
      $s = $_.Key; $a = $_.Value; $base = $s.Substring(0, $s.Length - 4); $t = $Tick[$s]
      [pscustomobject]@{ paire = $s; base = $base; prixUsdt = $a.prix; r1h = [math]::Round(100 * $a.r1h, 2); r4h = [math]::Round(100 * $a.r4h, 2)
        r24h = [math]::Round([double]$t.priceChangePercent, 2); rsi = [math]::Round($a.rsi, 1); volRatio = [math]::Round($a.volRatio, 2)
        cassure = $a.cassure; tendance = $a.tendance; score = $a.score; raisons = $a.raisons; volume24hUsdt = [math]::Round([double]$t.quoteVolume)
        avis = $(if ($avis[$base]) { "$($avis[$base]) ($($sourceAvis[$base]))" } else { "" }); spark = $a.spark } })
  $valPos = 0.0; foreach ($p in $positions) { $t = $Tick[$p.paire]; if ($t) { $p | Add-Member -Force prixActuelUsdt ([double]$t.lastPrice); $valPos += $p.quantite * [double]$t.lastPrice / $eurusdt } }
  $valeur = $liq + $valPos + (Valeur-Marches)
  $courbe.Add([pscustomobject]@{ t = $now.ToString($fmt); valeur = [math]::Round($valeur, 2); btcRef = [math]::Round($CFG.capitalInitial * ($btc / $eurusdt) / $e.btcInitialEur, 2) })
  while ($courbe.Count -gt 3000) { $courbe.RemoveAt(0) }
  while ($journal.Count -gt 300) { $journal.RemoveAt(0) }
  while ($trades.Count -gt 1000) { $trades.RemoveAt(0) }
  $e.liquidites = [math]::Round($liq, 2); Ecrire-Caisse $liq; $e.positions = $positions.ToArray(); $e.trades = $trades.ToArray()
  $e.courbe = $courbe.ToArray(); $e.journal = $journal.ToArray(); $e.regime = $regime
  $e.marche = [pscustomobject]@{ eurusdt = $eurusdt; btcUsdt = $btc; btc1h = [math]::Round(100 * $btc1h, 2); univers = $cands.Count; analyses = $Ana.Count; achatsBloques = $bloque }
  $e.derniereExecution = $now.ToString($fmt); $e.config = $CFG
  $json = $e | ConvertTo-Json -Depth 8
  Ecrire $etatPath $json
  Ecrire $jsPath "// Genere par robot.ps1 - ne pas modifier a la main.`nwindow.ROBOT = $json;`n"
  Write-Host ("[{0:HH:mm}] {1} paires analysees, valeur {2:N2} EUR, {3} positions, {4} trades clotures{5}" -f $now, $Ana.Count, $valeur, $positions.Count, $st.nbTrades, $(if ($bloque) { " - achats bloques : $bloque" } else { "" }))
}

if ($Boucle) {
  $host.UI.RawUI.WindowTitle = "Robot Vigie Crypto (argent fictif) - fermez cette fenetre pour l'arreter"
  Write-Host "Robot Vigie Crypto demarre : scan complet toutes les $IntervalleSec s, stop-loss et prise de gain verifies toutes les 30 s. Argent fictif, aucun ordre reel. Fermez la fenetre pour l'arreter."
  $prochainScan = Get-Date
  while ($true) {
    if ((Get-Date) -ge $prochainScan) {
      $prochainScan = (Get-Date).AddSeconds($IntervalleSec)
      try { Avec-Verrou { Cycle } } catch { Write-Host ("[{0:HH:mm}] Erreur : {1}" -f (Get-Date), $_.Exception.Message) }
    } else {
      try { Avec-Verrou { Verif-Rapide } } catch { Write-Host ("[{0:HH:mm:ss}] Erreur (verification rapide) : {1}" -f (Get-Date), $_.Exception.Message) }
    }
    Start-Sleep -Seconds 30
  }
} elseif ($VerifSeule) { Avec-Verrou { Verif-Rapide } } else { Avec-Verrou { Cycle } }
