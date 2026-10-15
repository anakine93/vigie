# Caisse commune des deux robots Vigie (charge par robot.ps1 et robot-marches.ps1).
# Un seul capital fictif de 1 000 EUR, partage entre la crypto et les autres marches.
# Un verrou systeme (mutex) empeche les deux robots de modifier la caisse en meme temps.
$CAPITAL    = 1000
$caissePath = Join-Path $Dossier "caisse.json"
$caisseJs   = Join-Path $Dossier "caisse.js"
$verrou     = New-Object System.Threading.Mutex($false, "Local\VigieCaisse")

function Avec-Verrou([scriptblock]$bloc) {
  try { [void]$verrou.WaitOne() } catch [System.Threading.AbandonedMutexException] { }
  try { & $bloc } finally { $verrou.ReleaseMutex() }
}
function Lire-Caisse { if (Test-Path $caissePath) { return [double](Lire-Json $caissePath).liquidites }; return [double]$CAPITAL }
function Ecrire-Caisse([double]$liq) {
  $j = [pscustomobject]@{ capitalInitial = $CAPITAL; liquidites = [math]::Round($liq, 2); maj = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ss") } | ConvertTo-Json
  Ecrire $caissePath $j
  Ecrire $caisseJs "// Genere par les robots Vigie - ne pas modifier a la main.`nwindow.CAISSE = $j;`n"
}
# Chaque robot a ses propres places reservees (maxPositions dans sa configuration) : 4 crypto + 4 autres marches.
$MAX_POSITIONS_TOTAL = 8   # pour information : 4 + 4
function Nb-Positions($fichier) { $f = Join-Path $Dossier $fichier; if (-not (Test-Path $f)) { return 0 }; return @((Lire-Json $f).positions | Where-Object { $_ }).Count }

# Stop suiveur commun aux deux robots. Tant que l'objectif (+tp) n'est pas atteint, le stop-loss (-sl) protege.
# Une fois l'objectif atteint, on ne vend plus : le stop suit le plus haut atteint a une distance de 2/3 du
# stop-loss, sans jamais descendre sous +60 % de l'objectif (gain securise). Renvoie le motif de vente ou $null.
function Suivre($p, [double]$px, [double]$entree, [double]$sl, [double]$tp) {
  $haut = [math]::Max($(if ($p.plusHaut) { [double]$p.plusHaut } else { $entree }), $px)
  $p | Add-Member -Force plusHaut $haut
  $dist = $sl * 2 / 3
  $stop = $(if ($p.stopSuiveur) { [double]$p.stopSuiveur } else { 0.0 })
  if (-not $stop -and $px / $entree - 1 -ge $tp) { $stop = [math]::Max($entree * (1 + 0.6 * $tp), $haut * (1 - $dist)) }
  elseif ($stop) { $stop = [math]::Max($stop, $haut * (1 - $dist)) }
  $p | Add-Member -Force stopSuiveur $(if ($stop) { $stop } else { $null })
  if ($stop -and $px -le $stop) { return "stop suiveur, gain securise" }
  if (-not $stop -and $px / $entree - 1 -le -$sl) { return "stop-loss" }
  return $null
}

# Valeur actuelle (EUR) des positions ouvertes de chaque robot, d'apres son dernier fichier d'etat.
function Valeur-Crypto {
  $f = Join-Path $Dossier "robot.json"; if (-not (Test-Path $f)) { return 0.0 }
  $r = Lire-Json $f; $fx = [double]$r.marche.eurusdt; if (-not $fx) { return 0.0 }
  $s = 0.0; foreach ($x in @($r.positions)) { if ($x) { $px = $(if ($x.prixActuelUsdt) { $x.prixActuelUsdt } else { $x.prixEntreeUsdt }); $s += $x.quantite * $px / $fx } }
  return $s
}
function Valeur-Marches {
  $f = Join-Path $Dossier "robot-marches.json"; if (-not (Test-Path $f)) { return 0.0 }
  $r = Lire-Json $f
  $s = 0.0; foreach ($x in @($r.positions)) { if ($x) { $px = $(if ($x.prixActuel) { $x.prixActuel } else { $x.prixEntree }); $s += $x.investiNet * $px / $x.prixEntree } }
  return $s
}
