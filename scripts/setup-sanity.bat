@echo off
echo.
echo 🚀 Configuração do Sanity Studio - Heimatland
echo =============================================
echo.
echo 📋 Passos para configurar o Sanity:
echo.
echo 1️⃣  Instalar Sanity CLI globalmente:
echo     npm install -g @sanity/cli
echo.
echo 2️⃣  Fazer login no Sanity:
echo     sanity login
echo.
echo 3️⃣  Criar projeto no Sanity.io e obter Project ID
echo.
echo 4️⃣  Configurar .env.local com seu Project ID:
echo     NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id_aqui
echo.
echo 5️⃣  Inicializar projeto Sanity:
echo     sanity init --project-id SEU_PROJECT_ID --dataset production
echo.
echo 6️⃣  Rodar o desenvolvimento:
echo     npm run dev          # Next.js (porta 3000)
echo     npm run sanity:dev   # Sanity Studio (porta 3333)
echo.
echo 🌐 Acessar o Studio:
echo    - Integrado: http://localhost:3000/studio
echo    - Standalone: http://localhost:3333
echo.
echo 📚 Veja SANITY_SETUP.md para instruções detalhadas
echo.
pause
