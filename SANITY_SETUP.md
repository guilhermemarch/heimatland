# Configuração do Sanity Studio - Heimatland Blog

## 🚀 Configuração Inicial

### 1. Criar projeto no Sanity.io

1. Acesse [sanity.io](https://www.sanity.io/) e crie uma conta
2. Crie um novo projeto
3. Anote o **Project ID** que será gerado

### 2. Configurar variáveis de ambiente

1. Renomeie o arquivo `.env.local.example` para `.env.local`
2. Edite o arquivo `.env.local` e substitua os valores:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=cf0sq1lg
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. Inicializar o Sanity no projeto

Execute no terminal:

```bash
# Instalar o Sanity CLI globalmente (se não tiver)
npm install -g @sanity/cli

# Fazer login no Sanity
sanity login

# Inicializar o projeto (na pasta raiz)
sanity init --project-id cf0sq1lg --dataset production
```

### 4. Rodar o projeto

```bash
# Desenvolvimento do Next.js
npm run dev

# Desenvolvimento do Sanity Studio (em terminal separado)
npm run sanity:dev
```

## 🎯 Acessar o Studio

### Opção 1: Via Next.js (Recomendado)
- Acesse: `http://localhost:3000/studio`
- Studio integrado na aplicação

### Opção 2: Via Sanity CLI
- Execute: `npm run sanity:dev`
- Acesse: `http://localhost:3333`
- Studio standalone

## 📝 Schemas Disponíveis

O projeto já inclui os seguintes schemas:

- **Blog Post**: Posts do blog com título, conteúdo, categoria, autor
- **Category**: Categorias com cores personalizadas  
- **Author**: Autores com nome, bio e imagem
- **Block Content**: Conteúdo rico com formatação

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev                 # Next.js
npm run sanity:dev         # Sanity Studio

# Build
npm run build              # Next.js
npm run sanity:build       # Sanity Studio

# Deploy
npm run sanity:deploy      # Deploy do Studio
```

## 🚨 Solução de Problemas

### Erro: "Project ID not found"
- Verifique se o `NEXT_PUBLIC_SANITY_PROJECT_ID` está correto no `.env.local`
- Certifique-se que o projeto existe no Sanity.io

### Erro: "Dataset not found"
- Verifique se o dataset existe no seu projeto Sanity
- Use `production` como padrão

### Studio não carrega
- Verifique se as dependências estão instaladas: `npm install`
- Limpe o cache: `rm -rf .next` e `npm run dev`

## 📚 Recursos

- [Documentação Sanity](https://www.sanity.io/docs)
- [Next.js + Sanity](https://www.sanity.io/guides/nextjs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
