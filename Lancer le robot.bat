@echo off
rem Lance les deux robots de micro-transactions virtuelles Vigie (argent fictif, aucun ordre reel) :
rem le robot Marches (actions, indices, matieres, devises) dans une seconde fenetre, puis le robot Crypto ici.
rem Fermez une fenetre pour arreter le robot correspondant.
start "Robot Vigie Marches" /min powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0robot-marches.ps1" -Boucle
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0robot.ps1" -Boucle
pause
