# Simulateur de portefeuille virtuel Vigie Crypto (argent fictif, aucun ordre reel).
# Lit crypto-dashboard\predictions-du-jour.json, recupere les cours CoinGecko en EUR,
# cloture les positions arrivees a echeance, note les predictions, ouvre les nouvelles
# positions, puis ecrit portefeuille.json (etat) et portefeuille.js (lu par le tableau de bord).
# Usage : powershell -NoProfile -ExecutionPolicy Bypass -File simulateur.ps1
param([string]$Dossier = (Join-Path $PSScriptRoot "crypto-dashboard"))
$ErrorActionPreference = "Stop"
[Threading.Thread]::CurrentThread.CurrentCulture = [Globalization.CultureInfo]::InvariantCulture

$etatPath = Join-Path $Dossier "portefeuille.json"
$predPath = Join-Path $Dossier "predictions-du-jour.json"
$jsPath   = Join-Path $Dossier "portefeuille.js"
$maintenant = Get-Date
$fmt = "yyyy-MM-ddTHH:mm:ss"
$utf8 = New-Object System.Text.UTF8Encoding($false)

function Lire-Json($p) { [IO.File]::ReadAllText($p, [Text.Encoding]::UTF8) | ConvertFrom-Json }
function En-Liste($x) {
  $l = New-Object System.Collections.Generic.List[object]
  foreach ($i in @($x)) { if ($null -ne $i) { $l.Add($i) } }
  return ,$l
}

# --- Etat ---
if (Test-Path $etatPath) { $e = Lire-Json $etatPath } else {
  $e = [pscustomobject]@{
    config = [pscustomobject]@{ capitalInitial = 1000; partElevee = 0.10; partMoyenne = 0.05; frais = 0.001; glissement = 0.0005; devise = "eur" }
    debut = $maintenant.ToString($fmt); btcInitial = $null; liquidites = 1000
    positions = @(); cloturees = @(); predictions = @(); courbe = @()
    dernierLot = $null; derniereExecution = $null
  }
}
$cfg = $e.config
$positions   = En-Liste $e.positions
$cloturees   = En-Liste $e.cloturees
$predictions = En-Liste $e.predictions
$courbe      = En-Liste $e.courbe
$liquidites  = [double]$e.liquidites

# --- Nouvelles predictions ---
$lot = $null
if (Test-Path $predPath) {
  $lot = Lire-Json $predPath
  if ($lot.date -eq $e.dernierLot) { Write-Host "Lot du $($lot.date) deja traite : aucune nouvelle position."; $lot = $null }
}

# --- Cours ---
$ids = New-Object System.Collections.Generic.HashSet[string]
[void]$ids.Add("bitcoin")
foreach ($p in $positions) { [void]$ids.Add($p.actif) }
foreach ($p in $predictions) { if ($p.statut -eq "en cours") { [void]$ids.Add($p.actif) } }
if ($lot) { foreach ($p in @($lot.predictions)) { if ($p.actif) { [void]$ids.Add(([string]$p.actif).ToLower()) } } }
$url = "https://api.coingecko.com/api/v3/simple/price?ids=" + (($ids | Sort-Object) -join ",") + "&vs_currencies=eur"
# L'API gratuite limite le nombre d'appels : en cas de refus, on attend puis on reessaie.
$cours = $null
for ($essai = 1; $essai -le 4 -and -not $cours; $essai++) {
  try { $cours = Invoke-RestMethod -Uri $url -TimeoutSec 30 }
  catch { if ($essai -eq 4) { throw }; Write-Host "CoinGecko indisponible (essai $essai/4), nouvel essai dans 60 s..."; Start-Sleep -Seconds 60 }
}
function Prix($id) { $o = $cours.$id; if ($o -and $o.eur) { return [double]$o.eur } return $null }
$btc = Prix "bitcoin"
if (-not $btc) { throw "Cours du bitcoin introuvable : execution annulee." }
if (-not $e.btcInitial) { $e.btcInitial = $btc }

# --- Cloture des positions arrivees a echeance ---
$restantes = New-Object System.Collections.Generic.List[object]
foreach ($p in $positions) {
  $px = Prix $p.actif
  if ([datetime]$p.echeance -le $maintenant -and $px) {
    $pxSortie = $px * (1 - $cfg.glissement)
    $brut = $p.quantite * $pxSortie
    $net = $brut - $brut * $cfg.frais
    $liquidites += $net
    $pnl = $net - $p.montant
    $cloturees.Add([pscustomobject]@{
      id = $p.id; actif = $p.actif; agent = $p.agent; predictionId = $p.predictionId
      montant = $p.montant; quantite = $p.quantite; prixEntree = $p.prixEntree; ouvertLe = $p.ouvertLe
      prixSortie = [math]::Round($pxSortie, 6); fermeLe = $maintenant.ToString($fmt)
      pnl = [math]::Round($pnl, 2); pnlPct = [math]::Round(100 * $pnl / $p.montant, 2)
    })
  } else { $restantes.Add($p) }
}
$positions = $restantes

# --- Notation des predictions arrivees a echeance ---
foreach ($p in $predictions) {
  if ($p.statut -ne "en cours" -or [datetime]$p.echeance -gt $maintenant) { continue }
  $px = Prix $p.actif
  if (-not $px) { continue }
  $var = 100 * ($px - $p.prixRef) / $p.prixRef
  $juste = ($p.sens -eq "hausse" -and $px -gt $p.prixRef) -or ($p.sens -eq "baisse" -and $px -lt $p.prixRef)
  $p.statut = $(if ($juste) { "juste" } else { "fausse" })
  $p | Add-Member -Force prixFinal ([math]::Round($px, 6))
  $p | Add-Member -Force variationPct ([math]::Round($var, 2))
}

# --- Valeur du portefeuille ---
function Valeur-Positions { $s = 0.0; foreach ($p in $positions) { $px = Prix $p.actif; if (-not $px) { $px = $p.prixEntree }; $s += $p.quantite * $px }; return $s }

# --- Nouvelles predictions et ouverture de positions (uniquement a l'achat : pas de vente a decouvert) ---
if ($lot) {
  $n = 0
  foreach ($q in @($lot.predictions)) {
    $n++
    $actif = ([string]$q.actif).ToLower(); $sens = [string]$q.sens; $conf = [string]$q.confiance
    $px = Prix $actif
    if (-not $px -or ($sens -ne "hausse" -and $sens -ne "baisse")) { Write-Host "Prediction ignoree (actif ou sens invalide) : $actif $sens"; continue }
    $h = [int]$q.horizonJours; if ($h -lt 1) { $h = 1 }; if ($h -gt 7) { $h = 7 }
    $predId = "$($lot.date)-$n"
    $pred = [pscustomobject]@{
      id = $predId; date = $maintenant.ToString($fmt); agent = $q.agent; actif = $actif; sens = $sens
      horizonJours = $h; confiance = $conf; raison = $q.raison; prixRef = [math]::Round($px, 6)
      echeance = $maintenant.AddDays($h).ToString($fmt); statut = "en cours"; position = ""
    }
    if ($sens -eq "baisse") { $pred.position = "non tradee (baisse : pas de vente a decouvert)" }
    elseif ($conf -notmatch "lev|moyen") { $pred.position = "non tradee (confiance faible)" }
    elseif (@($positions | Where-Object { $_.actif -eq $actif }).Count -gt 0) { $pred.position = "non tradee (actif deja en portefeuille)" }
    else {
      $total = $liquidites + (Valeur-Positions)
      $part = $(if ($conf -match "lev") { $cfg.partElevee } else { $cfg.partMoyenne })
      $montant = [math]::Min($part * $total, $liquidites)
      if ($montant -lt 10) { $pred.position = "non tradee (liquidites insuffisantes)" }
      else {
        $pxEntree = $px * (1 + $cfg.glissement)
        $qte = ($montant - $montant * $cfg.frais) / $pxEntree
        $liquidites -= $montant
        $positions.Add([pscustomobject]@{
          id = "P-$predId"; actif = $actif; agent = $q.agent; predictionId = $predId
          montant = [math]::Round($montant, 2); quantite = [math]::Round($qte, 10); prixEntree = [math]::Round($pxEntree, 6)
          ouvertLe = $maintenant.ToString($fmt); echeance = $pred.echeance
        })
        $pred.position = "ouverte : " + [math]::Round($montant, 2) + " EUR"
      }
    }
    $predictions.Add($pred)
  }
  $e.dernierLot = $lot.date
}

# --- Courbe (un point par jour, le dernier remplace) ---
$valeur = $liquidites + (Valeur-Positions)
$jour = $maintenant.ToString("yyyy-MM-dd")
$courbe = En-Liste ($courbe | Where-Object { $_.date -ne $jour })
$courbe.Add([pscustomobject]@{ date = $jour; valeur = [math]::Round($valeur, 2); btcRef = [math]::Round($cfg.capitalInitial * $btc / $e.btcInitial, 2) })

# --- Ecriture ---
$e.liquidites = [math]::Round($liquidites, 2)
$e.positions = $positions.ToArray(); $e.cloturees = $cloturees.ToArray()
$e.predictions = $predictions.ToArray(); $e.courbe = $courbe.ToArray()
$e.derniereExecution = $maintenant.ToString($fmt)
$json = $e | ConvertTo-Json -Depth 10
[IO.File]::WriteAllText($etatPath, $json, $utf8)
[IO.File]::WriteAllText($jsPath, "// Genere par simulateur.ps1 - ne pas modifier a la main.`nwindow.PORTEFEUILLE = $json;`n", $utf8)
Write-Host ("Valeur du portefeuille : {0:N2} EUR (liquidites {1:N2}, {2} positions ouvertes, {3} predictions au total)" -f $valeur, $liquidites, $positions.Count, $predictions.Count)
