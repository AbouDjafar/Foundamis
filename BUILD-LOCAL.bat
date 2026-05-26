@echo off
setlocal

cd /d "%~dp0"

echo ==========================================
echo  International Foundation and Mission School
echo  Build local
echo ==========================================
echo.

where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js / npm n'est pas installe sur cette machine.
  echo Installe Node.js puis relance ce fichier.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installation des dependances...
  call npm install
  if errorlevel 1 (
    echo Echec de l'installation des dependances.
    pause
    exit /b 1
  )
)

echo Lancement du build...
call npm run build
if errorlevel 1 (
  echo.
  echo Le build a echoue.
  pause
  exit /b 1
)

echo.
echo Build termine avec succes.
echo Dossier genere:
echo %cd%\dist
echo.

if exist dist (
  start "" explorer "%cd%\dist"
)

pause
endlocal
