# Lanceur cloud des robots Vigie (execute par GitHub Actions toutes les 5 minutes).
# Une execution dure environ 4 min 30 : un scan complet du robot Crypto, un scan du robot Marches
# s'il date de plus de 9 minutes, puis des verifications rapides des stops jusqu'a la fin.
# Les fichiers d'etat sont lus et ecrits dans le dossier "donnees" (branche Git "donnees").
param([int]$DureeSec = 270, [string]$Donnees = (Join-Path $PSScriptRoot "donnees"))
$ErrorActionPreference = "Continue"
$debut = Get-Date
$crypto  = Join-Path $PSScriptRoot "robot.ps1"
$marches = Join-Path $PSScriptRoot "robot-marches.ps1"
New-Item -ItemType Directory -Force $Donnees | Out-Null

function Lancer($script, [switch]$Verif) {
  try { if ($Verif) { & $script -Dossier $Donnees -VerifSeule } else { & $script -Dossier $Donnees } }
  catch { Write-Host ("[{0:HH:mm:ss}] Erreur {1} : {2}" -f (Get-Date), (Split-Path $script -Leaf), $_.Exception.Message) }
}
function Age-Marches {
  $f = Join-Path $Donnees "robot-marches.json"
  if (-not (Test-Path $f)) { return 1e9 }
  try { return ((Get-Date) - [datetime](Get-Content $f -Raw | ConvertFrom-Json).derniereExecution).TotalMinutes } catch { return 1e9 }
}

Lancer $crypto
if ((Age-Marches) -ge 9) { Lancer $marches }
$tour = 0
while (((Get-Date) - $debut).TotalSeconds -lt $DureeSec - 30) {
  Start-Sleep -Seconds 30; $tour++
  Lancer $crypto -Verif
  if ($tour % 2 -eq 0) { Lancer $marches -Verif }
}
Write-Host ("Execution terminee en {0:N0} s" -f ((Get-Date) - $debut).TotalSeconds)
