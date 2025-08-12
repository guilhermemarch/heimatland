# Grupo Folclórico Alemão Heimatland

Site institucional do Grupo Folclórico Alemão Heimatland, fundado em 1987 em Cerro Largo, RS.

## 🎯 Sobre o Projeto

Este é um site institucional desenvolvido em Next.js 14 com design inspirado na cultura alemã, utilizando as cores da bandeira alemã (preto, vermelho e dourado) como base da identidade visual.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de CSS utilitário
- **React 18** - Biblioteca de componentes
- **Lucide React** - Ícones

## 🎨 Design

- **Cores principais**: Preto (#000000), Vermelho (#D41B1B), Dourado (#FFD500)
- **Tipografia**: Fonte gótica para títulos (UnifrakturCook) e serif para conteúdo
- **Layout**: Design responsivo e mobile-first
- **Elementos visuais**: Texturas de papel envelhecido e bordas gradientes

## 📂 Estrutura do Projeto

```
heimatland-novo/
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Cabeçalho/navegação
│   └── Footer.tsx         # Rodapé
├── lib/                   # Utilitários
│   └── utils.ts           # Funções helper
├── public/                # Arquivos estáticos
├── tailwind.config.js     # Configuração do Tailwind
└── next.config.js         # Configuração do Next.js
```

## 🏠 Página Inicial

A página inicial (home) contém:

1. **Hero Section**: Banner com apresentação do grupo e call-to-actions
2. **Destaques**: Cards com Nossa História, Próximos Eventos e Últimas Notícias
3. **Tradição e Cultura**: Seção sobre a preservação da cultura alemã
4. **Call to Action**: Convite para contato

## 🧭 Navegação

- **Início**: Página principal
- **Sobre**: História do grupo (em desenvolvimento)
- **Trajes**: Trajes típicos alemães (em desenvolvimento)
- **Galeria**: Fotos e vídeos (em desenvolvimento)
- **Notícias**: Blog e novidades (em desenvolvimento)
- **Contato**: Formulário de contato (em desenvolvimento)

## 🎭 Características Culturais

- Design autêntico inspirado na cultura alemã
- Uso respeitoso das cores da bandeira alemã
- Tipografia gótica para preservar a estética tradicional
- Layout que reflete seriedade e tradição cultural

## 🚀 Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código

## 🎯 Próximos Passos

- [ ] Implementar páginas secundárias (Sobre, Trajes, Galeria, etc.)
- [ ] Adicionar sistema de blog com MDX
- [ ] Integrar galeria de fotos
- [ ] Criar formulário de contato funcional
- [ ] Implementar SEO avançado
- [ ] Adicionar suporte multilíngue (Português/Alemão)

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (até 767px)

## 🎨 Acessibilidade

- Uso de semantic HTML
- Contraste adequado de cores
- Labels ARIA apropriados
- Navegação por teclado

---

**Desenvolvido com ❤️ para preservar a cultura alemã no Brasil**
