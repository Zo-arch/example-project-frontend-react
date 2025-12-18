# example-project

Frontend React template moderno para aplicações SAAS, construído com React, TypeScript, Vite, Tailwind CSS e shadcn/ui.

## 📋 Template Instructions

Este repositório é um template de projeto. Para usar em um novo projeto:

1. Clone este repositório
2. Busque por `example-project` (Ctrl+F / Cmd+F) em todos os arquivos
3. Substitua todas as ocorrências pelo nome do seu projeto
4. Atualize as variáveis de ambiente no arquivo `.env`
5. Personalize as cores e branding conforme necessário

## 🚀 Quick Start

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Editar .env com suas configurações
```

### Executar em Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento estará rodando em `http://localhost:5173`

### Build para Produção

```bash
# Build
npm run build

# Preview do build
npm run preview
```

## 🏗️ Estrutura do Projeto

Arquitetura moderna baseada em **features** (Feature-based Architecture):

```
example-project/
├── public/                    # Arquivos estáticos
├── src/
│   ├── app/                  # Configuração da aplicação
│   │   ├── App.tsx          # Componente raiz
│   │   └── providers/       # Providers (Router, Theme, etc)
│   │       └── RouterProvider.tsx
│   │
│   ├── features/            # Funcionalidades isoladas (Feature-based)
│   │   ├── home/           # Feature: Landing Page
│   │   │   ├── components/ # Componentes específicos
│   │   │   ├── hooks/      # Hooks específicos
│   │   │   ├── types/      # Types específicos
│   │   │   ├── HomePage.tsx
│   │   │   └── index.ts    # Exports públicos
│   │   │
│   │   └── auth/           # Feature: Autenticação
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── types/
│   │       └── index.ts
│   │
│   ├── shared/              # Código compartilhado
│   │   ├── ui/             # Componentes shadcn/ui
│   │   ├── components/     # Componentes reutilizáveis (Header, Footer)
│   │   ├── hooks/          # Hooks compartilhados
│   │   ├── lib/            # Utilitários (utils.ts)
│   │   ├── types/          # Types compartilhados
│   │   └── constants/      # Constantes (routes.ts)
│   │
│   ├── assets/             # Assets estáticos
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── styles/             # Estilos
│   │   └── globals.css     # Estilos globais Tailwind
│   │
│   └── main.tsx            # Entry point
│
├── .env.example            # Exemplo de variáveis de ambiente
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── components.json         # Configuração shadcn/ui
```

## 🎯 Arquitetura

### Feature-based Architecture

Cada feature é **auto-contida** e isolada:

```
features/[feature-name]/
├── components/    # Componentes específicos da feature
├── hooks/         # Hooks específicos (useAuth, useLogin, etc)
├── types/         # Types específicos (User, LoginRequest, etc)
├── services/      # Lógica de negócio/API (quando necessário)
├── [Feature]Page.tsx  # Página principal
└── index.ts       # Exports públicos (barrel exports)
```

**Benefícios:**
- ✅ Código organizado por funcionalidade
- ✅ Fácil de escalar e manter
- ✅ Features isoladas e reutilizáveis
- ✅ Imports limpos via `index.ts`

### Shared Code

Código compartilhado entre features:

- `shared/ui/` - Componentes shadcn/ui
- `shared/components/` - Componentes reutilizáveis (Header, Footer)
- `shared/hooks/` - Hooks compartilhados
- `shared/lib/` - Utilitários
- `shared/types/` - Types compartilhados
- `shared/constants/` - Constantes (rotas, configurações)

## 📦 Stack Tecnológica

- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápida
- **Tailwind CSS** - Estilização utilitária
- **shadcn/ui** - Componentes UI modernos
- **React Router** - Roteamento
- **Zustand** - Gerenciamento de estado (quando necessário)
- **React Hook Form** - Formulários
- **Zod** - Validação de schemas
- **Axios** - Cliente HTTP (quando necessário)
- **Lucide React** - Ícones

## 🎨 Padronização de Nomes

- **Components**: PascalCase (ex: `Header.tsx`, `LoginPage.tsx`)
- **Hooks**: `use*.ts` (ex: `useAuth.ts`, `useTheme.ts`)
- **Types**: `*.types.ts` ou `*.types.ts` (ex: `user.types.ts`)
- **Services**: `*.service.ts` (ex: `auth.service.ts`)
- **Constants**: `*.ts` (ex: `routes.ts`)

## 🔧 Configuração

### Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env` e configure:

```env
# URL da API Backend
VITE_API_URL=http://localhost:3000/api

# Nome da aplicação
VITE_APP_NAME=example-project

# Habilitar Scalar API Reference (opcional)
VITE_ENABLE_SCALAR=false
```

### Path Aliases

O projeto usa path aliases configurados:

- `@/` → `src/`
- `@/shared/` → `src/shared/`
- `@/features/` → `src/features/`

Exemplo de uso:
```typescript
import { Button } from '@/shared/ui/button'
import { HomePage } from '@/features/home'
```

## 🎯 Features Implementadas

### 1. Landing Page Completa
- ✅ Hero section com social proof e visual do produto
- ✅ Seção de parceiros (Partners)
- ✅ Grid de funcionalidades (Features)
- ✅ Como funciona (How it works)
- ✅ Seção de preços (Pricing)
- ✅ Depoimentos (Testimonials)
- ✅ FAQ (Perguntas frequentes)
- ✅ Call-to-action final
- ✅ Design responsivo e moderno

### 2. Sistema de Autenticação
- ✅ Página de Login com design moderno
- ✅ Página de Registro com design moderno
- ✅ Botões de login social (Google e Apple)
- ✅ Formulários bem estruturados
- ✅ Design focado em conversão

### 3. Roteamento
- ✅ React Router configurado
- ✅ Layout wrapper para rotas com Header/Footer
- ✅ Rotas públicas e de autenticação
- ✅ Navegação funcional

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa linter

## 🎨 Customização

### Cores e Tema

As cores podem ser customizadas no arquivo `src/styles/globals.css` nas variáveis CSS:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --accent: 262.1 83.3% 57.8%;
  /* ... */
}
```

### Adicionar Componentes shadcn/ui

```bash
npx shadcn@latest add [component-name]
```

### Adicionar Nova Feature

1. Crie a pasta em `src/features/[feature-name]/`
2. Siga a estrutura padrão (components, hooks, types, index.ts)
3. Exporte no `index.ts` da feature
4. Adicione a rota em `app/providers/RouterProvider.tsx`

### Alterar Nome do Projeto

1. Busque `example-project` em todos os arquivos (Ctrl+F / Cmd+F)
2. Substitua pelo nome do seu projeto
3. Atualize `package.json` com o novo nome
4. Atualize variáveis de ambiente no `.env`

## 🔍 Encontrar Nomes Específicos do Projeto

Para customizar este template para um novo projeto, busque por:

- `example-project` - Identificador principal do projeto
- `example-project-frontend-react` - Nome do package

## 🚢 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático em cada push

### Netlify

1. Conecte seu repositório ao Netlify
2. Configure build command: `npm run build`
3. Publish directory: `dist`
4. Configure variáveis de ambiente

### AWS S3 + CloudFront

Deploy automático via GitHub Actions. Consulte o arquivo [DEPLOY.md](./DEPLOY.md) para instruções completas de configuração.

**Opção Recomendada - Terraform (Automático):**
1. Use Terraform para criar toda a infraestrutura automaticamente
2. Consulte [`terraform/README.md`](./terraform/README.md) para guia completo
3. Configure os secrets no GitHub usando os outputs do Terraform
4. Faça push para `main` ou `master` - deploy automático

**Opção Manual:**
1. Configure bucket S3 e CloudFront manualmente na AWS
2. Configure os secrets no GitHub (Settings > Secrets and variables > Actions)
3. Faça push para `main` ou `master` - deploy automático

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

Feito com ❤️ usando React + TypeScript + Tailwind CSS + shadcn/ui
