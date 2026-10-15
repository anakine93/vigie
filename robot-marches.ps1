# Robot de micro-transactions virtuelles Vigie - marches traditionnels (argent fictif, aucun ordre reel).
# Actions (Etats-Unis, France, Allemagne, Pays-Bas, Italie), indices, matieres premieres et devises.
# Donnees : Yahoo Finance (bougies de 15 minutes, parfois retardees de 15 minutes selon la bourse).
# Toutes les 10 minutes : scan complet, avis de l'agent Marches (orientations-marches.json), ventes et achats.
# Toutes les 60 secondes : verification des stop-loss et prises de gain des positions ouvertes.
# Les positions sont suivies en pourcentage de variation du cours : l'effet de change est ignore.
# Usage : un cycle -> powershell -NoProfile -ExecutionPolicy Bypass -File robot-marches.ps1
#         continu  -> ... -File robot-marches.ps1 -Boucle
param([switch]$Boucle, [switch]$VerifSeule, [int]$IntervalleSec = 600, [string]$Dossier = (Join-Path $PSScriptRoot "crypto-dashboard"))
$ErrorActionPreference = "Stop"
[Threading.Thread]::CurrentThread.CurrentCulture = [Globalization.CultureInfo]::InvariantCulture

$etatPath   = Join-Path $Dossier "robot-marches.json"
$jsPath     = Join-Path $Dossier "robot-marches.js"
$orientPath = Join-Path $Dossier "orientations-marches.json"
$fmt  = "yyyy-MM-ddTHH:mm:ss"
$utf8 = New-Object System.Text.UTF8Encoding($false)
. (Join-Path $PSScriptRoot "caisse.ps1")
$entetes = @{ "User-Agent" = "Mozilla/5.0" }

$CFG = [ordered]@{
  capitalInitial = 1000; partBase = 0.10; partFavorable = 0.15; maxPositions = 4; scoreMin = 5; rsiMax = 75
  slAtr = 3; tpAtr = 5; slMin = 0.002; slMax = 0.04; dureeMaxH = 48; cooldownH = 4; reference = "^GSPC"
}
# Couts simules par classe d'actifs : frais de courtage et glissement de prix (ecart achat/vente).
$COUTS = @{
  actions  = @{ frais = 0.001;  gliss = 0.0005 }
  indices  = @{ frais = 0.0005; gliss = 0.0002 }
  matieres = @{ frais = 0.0005; gliss = 0.0005 }
  devises  = @{ frais = 0.0001; gliss = 0.0001 }
}
$UNIVERS = [ordered]@{
  actions = @(
    "AAPL","MSFT","NVDA","AMZN","GOOGL","META","TSLA","AVGO","AMD","NFLX","JPM","V","MA","XOM","LLY","UNH","COST","WMT",
    "PLTR","COIN","MSTR","HOOD","SMCI","MU","INTC","ORCL","CRM","ADBE","UBER","SHOP","SNOW","CRWD","PANW","ARM","BA","DIS",
    "NKE","PYPL","SOFI","RIVN","LCID","MARA","RIOT","IONQ","RKLB","SOUN","AFRM","UPST","DKNG","ROKU",
    "MC.PA","OR.PA","AI.PA","TTE.PA","SAN.PA","BNP.PA","AIR.PA","SU.PA","EL.PA","CS.PA","DG.PA","RI.PA","KER.PA","SAF.PA",
    "ACA.PA","GLE.PA","ORA.PA","CAP.PA","HO.PA","RNO.PA","VIE.PA","ENGI.PA","BN.PA","SGO.PA","ML.PA","DSY.PA","PUB.PA","STMPA.PA","STLAP.PA",
    "SAP.DE","SIE.DE","ALV.DE","DTE.DE","BMW.DE","MBG.DE","VOW3.DE","RHM.DE","IFX.DE","ADS.DE","ASML.AS","INGA.AS","ENEL.MI","ISP.MI")
  indices  = @("^GSPC","^NDX","^DJI","^RUT","^FCHI","^GDAXI","^STOXX50E","^FTSE","^N225","^HSI")
  matieres = @("GC=F","SI=F","PL=F","HG=F","CL=F","BZ=F","NG=F","ZW=F","ZC=F","ZS=F","KC=F","CC=F","SB=F")
  devises  = @("EURUSD=X","GBPUSD=X","USDJPY=X","USDCHF=X","AUDUSD=X","USDCAD=X","NZDUSD=X","EURGBP=X","EURJPY=X","EURCHF=X")
}
$NOMS = @{ "^GSPC"="S&P 500"; "^NDX"="Nasdaq 100"; "^DJI"="Dow Jones"; "^RUT"="Russell 2000"; "^FCHI"="CAC 40"; "^GDAXI"="DAX"
  "^STOXX50E"="Euro Stoxx 50"; "^FTSE"="FTSE 100"; "^N225"="Nikkei 225"; "^HSI"="Hang Seng"; "GC=F"="Or"; "SI=F"="Argent"
  "PL=F"="Platine"; "HG=F"="Cuivre"; "CL=F"="Petrole WTI"; "BZ=F"="Petrole Brent"; "NG=F"="Gaz naturel"; "ZW=F"="Ble"
  "ZC=F"="Mais"; "ZS=F"="Soja"; "KC=F"="Cafe"; "CC=F"="Cacao"; "SB=F"="Sucre" }

function Lire-Json($p) { [IO.File]::ReadAllText($p, [Text.Encoding]::UTF8) | ConvertFrom-Json }
function En-Liste($x) { $l = New-Object System.Collections.Generic.List[object]; foreach ($i in @($x)) { if ($null -ne $i) { $l.Add($i) } }; return ,$l }
function Ecrire($chemin, $texte) { $tmp = "$chemin.tmp"; [IO.File]::WriteAllText($tmp, $texte, $utf8); Move-Item -Force $tmp $chemin }
function Graphique($sym, $intervalle, $periode) {
  $url = "https://query1.finance.yahoo.com/v8/finance/chart/" + [uri]::EscapeDataString($sym) + "?interval=$intervalle&range=$periode"
  for ($i = 1; $i -le 2; $i++) {
    try { $r = Invoke-RestMethod -Uri $url -Headers $entetes -TimeoutSec 20; return $r.chart.result[0] }
    catch { if ($i -eq 2) { throw }; Start-Sleep -Seconds 3 }
  }
}
function Classe($sym) { foreach ($k in $UNIVERS.Keys) { if ($UNIVERS[$k] -contains $sym) { return $k } }; return "actions" }
function Ema($v, [int]$n) { $k = 2 / ($n + 1); $e = $v[0]; for ($i = 1; $i -lt $v.Count; $i++) { $e = $v[$i] * $k + $e * (1 - $k) }; return $e }
function Rsi($v, [int]$n) {
  $g = 0.0; $pe = 0.0
  for ($i = $v.Count - $n; $i -lt $v.Count; $i++) { $d = $v[$i] - $v[$i - 1]; if ($d -gt 0) { $g += $d } else { $pe -= $d } }
  if ($pe -eq 0) { return 100.0 }; return 100 - 100 / (1 + $g / $pe)
}

# Indicateurs sur les 100 dernieres bougies de 15 minutes. Les seuils d'elan et le stop-loss
# s'adaptent a la volatilite de chaque actif (ATR), car une devise bouge bien moins qu'une petite action.
function Analyser($res) {
  $q = $res.indicators.quote[0]; $ts = @($res.timestamp)
  $c = New-Object System.Collections.Generic.List[double]; $h = New-Object System.Collections.Generic.List[double]
  $lo = New-Object System.Collections.Generic.List[double]; $vo = New-Object System.Collections.Generic.List[double]; $dernierTs = 0
  for ($i = 0; $i -lt $ts.Count; $i++) {
    if ($null -eq $q.close[$i] -or $null -eq $q.high[$i] -or $null -eq $q.low[$i]) { continue }
    $c.Add([double]$q.close[$i]); $h.Add([double]$q.high[$i]); $lo.Add([double]$q.low[$i])
    $vo.Add($(if ($null -ne $q.volume[$i]) { [double]$q.volume[$i] } else { 0.0 })); $dernierTs = $ts[$i]
  }
  $n = $c.Count; if ($n -lt 60) { return $null }
  $deb = [math]::Max(0, $n - 100)
  $c = $c.GetRange($deb, $n - $deb).ToArray(); $h = $h.GetRange($deb, $n - $deb).ToArray()
  $lo = $lo.GetRange($deb, $n - $deb).ToArray(); $vo = $vo.GetRange($deb, $n - $deb).ToArray(); $n = $c.Count
  $last = [double]$res.meta.regularMarketPrice; if (-not $last) { $last = $c[$n - 1] }
  $tr = 0.0; for ($i = $n - 14; $i -lt $n; $i++) { $tr += [math]::Max($h[$i] - $lo[$i], [math]::Max([math]::Abs($h[$i] - $c[$i - 1]), [math]::Abs($lo[$i] - $c[$i - 1]))) }
  $atrPct = ($tr / 14) / $last
  $e20 = Ema $c 20; $e50 = Ema $c 50; $tendance = $e20 -gt $e50
  $r1h = $last / $c[$n - 5] - 1; $r4h = $last / $c[$n - 17] - 1; $rsi = Rsi $c 14
  $vRecent = 0.0; for ($i = $n - 4; $i -lt $n; $i++) { $vRecent += $vo[$i] }
  $vAvant = 0.0; for ($i = 0; $i -lt $n - 4; $i++) { $vAvant += $vo[$i] }
  $vMoy = $vAvant / (($n - 4) / 4); $volRatio = $(if ($vMoy -gt 0) { $vRecent / $vMoy } else { 0 })
  $hautPrec = 0.0; for ($i = $n - 49; $i -lt $n - 1; $i++) { if ($h[$i] -gt $hautPrec) { $hautPrec = $h[$i] } }
  $cassure = $last -gt $hautPrec
  $score = 0; $raisons = @()
  if ($tendance) { $score += 2; $raisons += "tendance haussiere" }
  if ($cassure) { $score += 2; $raisons += "cassure du plus haut recent" }
  if ($volRatio -ge 2) { $score += 2; $raisons += ("volume x{0:N1}" -f $volRatio) } elseif ($volRatio -ge 1.5) { $score += 1; $raisons += ("volume x{0:N1}" -f $volRatio) }
  if ($r1h -ge $atrPct -and $r1h -le 6 * $atrPct) { $score += 1; $raisons += "elan 1 h" }
  if ($rsi -ge 52 -and $rsi -le 70) { $score += 1; $raisons += ("RSI {0:N0}" -f $rsi) }
  if ($rsi -gt 78) { $score -= 3; $raisons += ("RSI {0:N0} surachete" -f $rsi) }
  $ouvert = ((Get-Date).ToUniversalTime() - [DateTimeOffset]::FromUnixTimeSeconds([int64]$dernierTs).UtcDateTime).TotalMinutes -lt 45
  $spark = @(); for ($i = $n - 48; $i -lt $n; $i += 2) { $spark += [math]::Round($c[$i], 6) }; $spark += $last
  $nom = $NOMS[$res.meta.symbol]
  if (-not $nom -and $res.meta.symbol -match "^([A-Z]{3})([A-Z]{3})=X$") { $nom = "$($Matches[1])/$($Matches[2])" }
  if (-not $nom -and $res.meta.longName -and ([string]$res.meta.longName).Length -le 28) { $nom = $res.meta.longName }
  if (-not $nom) { $nom = $res.meta.shortName }; if (-not $nom) { $nom = $res.meta.longName }; if (-not $nom) { $nom = $res.meta.symbol }
  $nom = ([string]$nom -replace "\s+", " ").Trim()
  return [pscustomobject]@{ prix = $last; devise = $res.meta.currency; nom = $nom; tendance = $tendance; r1h = $r1h; r4h = $r4h
    rsi = $rsi; volRatio = $volRatio; cassure = $cassure; atrPct = $atrPct; score = $score; raisons = ($raisons -join ", "); ouvert = $ouvert; spark = $spark }
}

function Nouvel-Etat($now) {
  [pscustomobject]@{ config = $CFG; debut = $now.ToString($fmt); liquidites = $CFG.capitalInitial; refInitial = $null
    positions = @(); trades = @(); courbe = @(); journal = @(); signaux = @()
    stats = [pscustomobject]@{ nbTrades = 0; gagnants = 0; frais = 0.0; pnl = 0.0 }
    marche = $null; regime = "normal"; derniereExecution = $null; derniereVerif = $null }
}
function Valeur($p, [double]$px) { $p.investiNet * $px / $p.prixEntree }

# Vend virtuellement une position ; renvoie le montant net recupere en EUR.
function Cloturer($p, [double]$px, [string]$motif, $now, $trades, $journal, $st) {
  $cout = $COUTS[$p.classe]
  $pxS = $px * (1 - $cout.gliss); $brut = Valeur $p $pxS; $fr = $brut * $cout.frais; $net = $brut - $fr; $pnl = $net - $p.montant
  $st.nbTrades++; if ($pnl -gt 0) { $st.gagnants++ }; $st.frais += $fr; $st.pnl += $pnl
  $trades.Add([pscustomobject]@{ symbole = $p.symbole; nom = $p.nom; classe = $p.classe; montant = $p.montant; prixEntree = $p.prixEntree
    prixSortie = [math]::Round($pxS, 6); devise = $p.devise; ouvertLe = $p.ouvertLe; fermeLe = $now.ToString($fmt)
    pnl = [math]::Round($pnl, 2); pnlPct = [math]::Round(100 * $pnl / $p.montant, 2); motifEntree = $p.motif; motifSortie = $motif; avis = $p.avis })
  $journal.Add([pscustomobject]@{ t = $now.ToString($fmt); texte = ("Vente {0} ({1}) : {2:+0.00;-0.00} EUR ({3:+0.0;-0.0} %)" -f $p.nom, $motif, $pnl, (100 * $pnl / $p.montant)) })
  return $net
}
function Sauver($e) {
  $json = $e | ConvertTo-Json -Depth 8
  Ecrire $etatPath $json
  Ecrire $jsPath "// Genere par robot-marches.ps1 - ne pas modifier a la main.`nwindow.ROBOT_MARCHES = $json;`n"
}

function Cycle {
  $now = Get-Date
  $e = $(if (Test-Path $etatPath) { Lire-Json $etatPath } else { Nouvel-Etat $now })
  $positions = En-Liste $e.positions; $trades = En-Liste $e.trades; $courbe = En-Liste $e.courbe; $journal = En-Liste $e.journal
  $liq = Lire-Caisse; $st = $e.stats

  # Avis de l'agent Marches
  $avis = @{}; $regime = "normal"; $prudents = @()
  if (Test-Path $orientPath) {
    try { $o = Lire-Json $orientPath
      if ($o.regime -match "stop") { $regime = "stop" } elseif ($o.regime -match "prudent") { $regime = "prudent" }
      $prudents = @($o.classesPrudentes)
      foreach ($a in @($o.avis)) {
        if ($a -and $a.symbole -and [datetime]$a.expire -gt $now) {
          $avis[[string]$a.symbole] = $(if ($a.avis -match "^d") { "defavorable" } elseif ($a.avis -match "fav") { "favorable" } else { "neutre" }) } } } catch {}
  }

  # Scan de tout l'univers
  $Ana = @{}; $echecs = 0
  foreach ($k in $UNIVERS.Keys) { foreach ($s in $UNIVERS[$k]) {
      try { $r = Analyser (Graphique $s "15m" "5d"); if ($r) { $r | Add-Member -Force classe $k; $Ana[$s] = $r } } catch { $echecs++ } } }
  $refPx = $(if ($Ana[$CFG.reference]) { $Ana[$CFG.reference].prix } else { $null })
  if (-not $e.refInitial -and $refPx) { $e.refInitial = $refPx }

  # Ventes
  $restantes = New-Object System.Collections.Generic.List[object]
  foreach ($p in $positions) {
    $an = $Ana[$p.symbole]; if (-not $an) { $restantes.Add($p); continue }
    $px = $an.prix; $p | Add-Member -Force prixActuel $px
    $age = ($now - [datetime]$p.ouvertLe).TotalHours
    $avant = $p.stopSuiveur
    $motif = Suivre $p $px $p.prixEntree $p.slPct $p.tpPct
    if (-not $avant -and $p.stopSuiveur) { $journal.Add([pscustomobject]@{ t = $now.ToString($fmt); texte = ("Objectif atteint sur {0} : stop suiveur active, gain securise a +{1:N1} %" -f $p.nom, (100 * ($p.stopSuiveur / $p.prixEntree - 1))) }) }
    # Une fois le stop suiveur actif, seule la baisse depuis le plus haut declenche la vente.
    if ($motif -or $p.stopSuiveur -or -not $an.ouvert) { }
    elseif ($age -ge $CFG.dureeMaxH) { $motif = "duree maximale atteinte" }
    elseif (-not $an.tendance -and $an.r1h -lt 0) { $motif = "tendance cassee" }
    elseif ($avis[$p.symbole] -eq "defavorable") { $motif = "avis defavorable (agent Marches)" }
    if ($motif -and $an.ouvert) { $liq += Cloturer $p $px $motif $now $trades $journal $st } else { $restantes.Add($p) }
  }
  $positions = $restantes

  # Achats (uniquement sur un marche ouvert)
  $valPos = 0.0; foreach ($p in $positions) { $px = $(if ($p.prixActuel) { $p.prixActuel } else { $p.prixEntree }); $valPos += Valeur $p $px }
  $total = $liq + $valPos + (Valeur-Crypto)
  $classement = @($Ana.GetEnumerator() | Sort-Object { $_.Value.score } -Descending)
  $bloque = $(if ($regime -eq "stop") { "achats suspendus par l'agent Marches" } else { $null })
  $autres = Nb-Positions "robot.json"
  if (-not $bloque) {
    foreach ($kv in $classement) {
      if ($positions.Count -ge $CFG.maxPositions) { break }
      $s = $kv.Key; $an = $kv.Value
      if ($an.score -lt $CFG.scoreMin) { break }
      if (-not $an.ouvert -or -not $an.tendance -or $an.rsi -gt $CFG.rsiMax) { continue }
      if (@($positions | Where-Object { $_.symbole -eq $s }).Count) { continue }
      if ($avis[$s] -eq "defavorable") { continue }
      if (@($trades | Where-Object { $_.symbole -eq $s -and ($now - [datetime]$_.fermeLe).TotalHours -lt $CFG.cooldownH }).Count) { continue }
      $fav = $avis[$s] -eq "favorable"
      $mult = $(if ($regime -eq "prudent" -or $prudents -contains $an.classe) { 0.5 } else { 1 })
      $montant = [math]::Min($(if ($fav) { $CFG.partFavorable } else { $CFG.partBase }) * $mult * $total, $liq - 1)
      if ($montant -lt 5) { break }
      $cout = $COUTS[$an.classe]
      $sl = [math]::Min($CFG.slMax, [math]::Max($CFG.slMin, $CFG.slAtr * $an.atrPct)); $tp = $sl * $CFG.tpAtr / $CFG.slAtr
      $liq -= $montant; $st.frais += $montant * $cout.frais
      $motif = "score $($an.score) : $($an.raisons)"
      $positions.Add([pscustomobject]@{ symbole = $s; nom = $an.nom; classe = $an.classe; devise = $an.devise
        montant = [math]::Round($montant, 2); investiNet = $montant * (1 - $cout.frais); prixEntree = [math]::Round($an.prix * (1 + $cout.gliss), 6)
        prixActuel = $an.prix; slPct = [math]::Round($sl, 4); tpPct = [math]::Round($tp, 4); ouvertLe = $now.ToString($fmt)
        score = $an.score; motif = $motif; avis = $(if ($fav) { "favorable (agent Marches)" } else { "aucun" }) })
      $journal.Add([pscustomobject]@{ t = $now.ToString($fmt); texte = ("Achat {0} pour {1:N2} EUR (stop -{2:N1} %, gain +{3:N1} % ; {4})" -f $an.nom, $montant, (100 * $sl), (100 * $tp), $motif) })
    }
  }

  # Signaux, courbe, ecriture
  $e.signaux = @($classement | Select-Object -First 25 | ForEach-Object {
      $s = $_.Key; $an = $_.Value
      [pscustomobject]@{ symbole = $s; nom = $an.nom; classe = $an.classe; prix = $an.prix; devise = $an.devise; ouvert = $an.ouvert
        r1h = [math]::Round(100 * $an.r1h, 2); r4h = [math]::Round(100 * $an.r4h, 2); rsi = [math]::Round($an.rsi, 1)
        volRatio = [math]::Round($an.volRatio, 2); atrPct = [math]::Round(100 * $an.atrPct, 3); score = $an.score; raisons = $an.raisons
        avis = $(if ($avis[$s]) { "$($avis[$s]) (agent Marches)" } else { "" }); spark = $an.spark } })
  $valPos = 0.0; foreach ($p in $positions) { $px = $(if ($p.prixActuel) { $p.prixActuel } else { $p.prixEntree }); $valPos += Valeur $p $px }
  $valeur = $liq + $valPos + (Valeur-Crypto)
  $refVal = $(if ($e.refInitial -and $refPx) { [math]::Round($CFG.capitalInitial * $refPx / $e.refInitial, 2) } else { $CFG.capitalInitial })
  $courbe.Add([pscustomobject]@{ t = $now.ToString($fmt); valeur = [math]::Round($valeur, 2); ref = $refVal })
  while ($courbe.Count -gt 3000) { $courbe.RemoveAt(0) }
  while ($journal.Count -gt 300) { $journal.RemoveAt(0) }
  while ($trades.Count -gt 1000) { $trades.RemoveAt(0) }
  $ouverts = @{}; foreach ($k in $UNIVERS.Keys) { $ouverts[$k] = @($Ana.Values | Where-Object { $_.classe -eq $k -and $_.ouvert }).Count }
  $e.liquidites = [math]::Round($liq, 2); Ecrire-Caisse $liq; $e.positions = $positions.ToArray(); $e.trades = $trades.ToArray()
  $e.courbe = $courbe.ToArray(); $e.journal = $journal.ToArray(); $e.regime = $regime; $e.config = $CFG
  $e.marche = [pscustomobject]@{ analyses = $Ana.Count; echecs = $echecs; ouverts = [pscustomobject]$ouverts; achatsBloques = $bloque }
  $e.derniereExecution = $now.ToString($fmt)
  Sauver $e
  Write-Host ("[{0:HH:mm}] Marches : {1} actifs analyses ({2} echecs), valeur {3:N2} EUR, {4} positions, {5} trades clotures" -f $now, $Ana.Count, $echecs, $valeur, $positions.Count, $st.nbTrades)
}

# Verification rapide (toutes les 60 s) : cours des positions ouvertes, stop-loss et prise de gain.
function Verif-Rapide {
  if (-not (Test-Path $etatPath)) { return }
  $e = Lire-Json $etatPath; $positions = En-Liste $e.positions
  if ($positions.Count -eq 0) { return }
  $now = Get-Date; $trades = En-Liste $e.trades; $journal = En-Liste $e.journal; $liq = Lire-Caisse; $st = $e.stats
  $restantes = New-Object System.Collections.Generic.List[object]; $ventes = 0
  foreach ($p in $positions) {
    try { $px = [double](Graphique $p.symbole "1d" "1d").meta.regularMarketPrice } catch { $px = 0 }
    if (-not $px) { $restantes.Add($p); continue }
    $p | Add-Member -Force prixActuel $px
    $avant = $p.stopSuiveur
    $motif = Suivre $p $px $p.prixEntree $p.slPct $p.tpPct
    if (-not $avant -and $p.stopSuiveur) { $journal.Add([pscustomobject]@{ t = $now.ToString($fmt); texte = ("Objectif atteint sur {0} : stop suiveur active, gain securise a +{1:N1} %" -f $p.nom, (100 * ($p.stopSuiveur / $p.prixEntree - 1))) }) }
    if ($motif) { $liq += Cloturer $p $px $motif $now $trades $journal $st; $ventes++ } else { $restantes.Add($p) }
  }
  $e.positions = $restantes.ToArray(); $e.trades = $trades.ToArray(); $e.journal = $journal.ToArray(); $e.liquidites = [math]::Round($liq, 2); Ecrire-Caisse $liq
  $e.derniereVerif = $now.ToString($fmt)
  Sauver $e
  if ($ventes) { Write-Host ("[{0:HH:mm:ss}] Marches, verification rapide : {1} vente(s)" -f $now, $ventes) }
}

if ($Boucle) {
  $host.UI.RawUI.WindowTitle = "Robot Vigie Marches (argent fictif) - fermez cette fenetre pour l'arreter"
  Write-Host "Robot Vigie Marches demarre : scan complet toutes les $IntervalleSec s, stop-loss et prise de gain verifies toutes les 60 s. Argent fictif, aucun ordre reel."
  $prochainScan = Get-Date
  while ($true) {
    if ((Get-Date) -ge $prochainScan) {
      $prochainScan = (Get-Date).AddSeconds($IntervalleSec)
      try { Avec-Verrou { Cycle } } catch { Write-Host ("[{0:HH:mm}] Erreur : {1}" -f (Get-Date), $_.Exception.Message) }
    } else {
      try { Avec-Verrou { Verif-Rapide } } catch { Write-Host ("[{0:HH:mm:ss}] Erreur (verification rapide) : {1}" -f (Get-Date), $_.Exception.Message) }
    }
    Start-Sleep -Seconds 60
  }
} elseif ($VerifSeule) { Avec-Verrou { Verif-Rapide } } else { Avec-Verrou { Cycle } }
