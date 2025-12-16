# example-project-frontend-react

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
- Backend API rodando (veja seção de integração)

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

```
example-project-frontend-react/
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/         # Imagens, fontes, etc
│   ├── components/     # Componentes React
│   │   ├── ui/        # Componentes shadcn/ui
│   │   ├── layout/    # Header, Footer, etc
│   │   └── features/  # Componentes específicos
│   ├── models/        # TypeScript interfaces/types
│   ├── services/      # Camada de comunicação com API
│   ├── pages/         # Páginas da aplicação
│   ├── hooks/         # Custom React hooks
│   ├── store/         # Zustand stores
│   ├── config/        # Configurações (routes, API)
│   ├── lib/           # Utilitários
│   ├── App.tsx        # Componente principal com rotas
│   ├── main.tsx       # Entry point
│   └── globals.css    # Estilos globais Tailwind
├── .env.example       # Exemplo de variáveis de ambiente
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── components.json    # Configuração shadcn/ui
```

## 📦 Stack Tecnológica

- **React 18+** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápida
- **Tailwind CSS** - Estilização utilitária
- **shadcn/ui** - Componentes UI modernos
- **React Router** - Roteamento
- **Zustand** - Gerenciamento de estado
- **React Hook Form** - Formulários
- **Zod** - Validação de schemas
- **Axios** - Cliente HTTP
- **Lucide React** - Ícones

## 🎨 Padronização de Nomes

- **Models**: `*.model.ts` (ex: `user.model.ts`, `billing.model.ts`)
- **Services**: `*.service.ts` (ex: `auth.service.ts`, `billing.service.ts`)
- **Components**: PascalCase (ex: `Header.tsx`, `PricingCard.tsx`)
- **Pages**: PascalCase com sufixo `Page` (ex: `LoginPage.tsx`, `BillingPage.tsx`)
- **Hooks**: `use*.ts` (ex: `useAuth.ts`, `useTheme.ts`)
- **Stores**: `*Store.ts` (ex: `authStore.ts`, `themeStore.ts`)
- **Config**: `*.config.ts` (ex: `routes.config.ts`, `api.config.ts`)

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# URL da API Backend
VITE_API_URL=http://localhost:3000/api

# Nome da aplicação
VITE_APP_NAME=example-project
```

### Integração com Backend

O template espera uma API backend NestJS com os seguintes endpoints:

**Autenticação:**
- `POST /auth/login` - Login
- `POST /auth/register` - Registro
- `POST /auth/logout` - Logout
- `GET /auth/me` - Obter usuário atual

**Usuário:**
- `GET /user/profile` - Obter perfil
- `PATCH /user/profile` - Atualizar perfil

**Billing:**
- `GET /billing/plans` - Listar planos
- `GET /billing/subscription` - Obter assinatura atual
- `POST /billing/subscribe` - Assinar plano
- `GET /billing/invoices` - Listar faturas

**Formato de Resposta Esperado:**

```typescript
{
  data: T,           // Dados da resposta
  message?: string,  // Mensagem opcional
  statusCode?: number
}
```

**Autenticação:**

As requisições autenticadas devem incluir o token JWT no header:
```
Authorization: Bearer <token>
```

O token é armazenado automaticamente no localStorage após login.

## 🎯 Features Principais

### 1. Landing Page
- Hero section moderna com gradientes
- Seção de features destacando funcionalidades
- Preview de planos com cards elegantes
- Design responsivo e moderno
- Animações suaves

### 2. Sistema de Autenticação
- Login com validação completa (React Hook Form + Zod)
- Registro de usuários com confirmação de senha
- Gerenciamento de sessão (Zustand + localStorage)
- Proteção de rotas
- Design moderno e profissional

### 3. Tela de Billing
- Listagem de planos com cards destacados
- Assinatura de planos integrada com backend
- Visualização de assinatura atual
- Design moderno com badges e animações
- Estados de loading e feedback visual

### 4. Dark Mode
- Suporte completo a tema claro/escuro
- Persistência da preferência no localStorage
- Transições suaves entre temas
- Detecção automática do tema do sistema
- Toggle no header e em múltiplos locais

### 5. Dashboard
- Página de exemplo com métricas
- Cards de estatísticas
- Layout responsivo
- Integração com autenticação

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa linter

## 🎨 Customização

### Cores e Tema

As cores podem ser customizadas no arquivo `src/globals.css` nas variáveis CSS:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --accent: 262.1 83.3% 57.8%;
  /* ... */
}
```

### Adicionar Componentes shadcn/ui

```bash
npx shadcn-ui@latest add [component-name]
```

### Alterar Nome do Projeto

1. Busque `example-project` em todos os arquivos
2. Substitua pelo nome do seu projeto
3. Atualize `package.json` com o novo nome
4. Atualize variáveis de ambiente

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

### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

Feito com ❤️ usando React + TypeScript + Tailwind CSS + shadcn/ui

