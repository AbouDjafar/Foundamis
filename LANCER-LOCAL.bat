@echo off
setlocal

cd /d "%~dp0"

echo ==========================================
echo  International Foundation and Mission School
echo  Lancement local
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

echo Le site va etre accessible sur:
echo http://localhost:3000
echo.
echo Laisse cette fenetre ouverte pendant le test.
echo Pour arreter le site, appuie sur Ctrl + C.
echo.

call npm run dev -- --host 127.0.0.1 --port 3000

endlocal
