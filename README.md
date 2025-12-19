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
cp env.example .env

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
├── env.example            # Exemplo de variáveis de ambiente
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

### Variáveis de Ambiente - Guia Completo

Este projeto usa diferentes tipos de variáveis de ambiente dependendo do contexto. É importante entender onde configurar cada uma:

Este projeto usa variáveis de ambiente em diferentes contextos:

**1. Desenvolvimento Local (`.env`)**
- Copie `env.example` para `.env` e configure com seus valores locais
- Usado apenas para rodar `npm run dev` localmente

**2. Produção (GitHub Secrets)**
- Configure em: Settings > Secrets and variables > Actions
- Usado pelo workflow de deploy para build de produção

**3. Infraestrutura (terraform.tfvars)**
- Configure em `terraform/terraform.tfvars` (copie de `terraform.tfvars.example`)
- Usado apenas pelo Terraform para criar recursos AWS

**Todas as variáveis disponíveis estão documentadas em `env.example`, organizadas por seção.**

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


## 🚢 Deploy

### AWS S3 + CloudFront (Recomendado)

Deploy automático via GitHub Actions. O workflow é acionado automaticamente em push para `main` ou `master`.

#### Opção 1: Terraform (Automático - Recomendado) ⚡

O método mais rápido e confiável. Automatiza a criação de toda a infraestrutura necessária.

**Vantagens:**
- ✅ Setup completo em minutos
- ✅ Infraestrutura como código (versionável)
- ✅ Elimina erros de configuração manual
- ✅ Outputs prontos para secrets do GitHub

**Passos:**

1. **Instalar Terraform** (https://www.terraform.io/downloads)
2. **Configurar credenciais AWS:**
   ```bash
   aws configure
   ```
3. **Configurar Terraform:**
   ```bash
   cd terraform
   cp terraform.tfvars.example terraform.tfvars
   # Edite terraform.tfvars com seus valores
   ```
4. **Criar infraestrutura:**
   ```bash
   terraform init
   terraform plan
   terraform apply
   ```
5. **Obter outputs para GitHub Secrets:**
   ```bash
   terraform output
   ```
6. **Configurar secrets no GitHub:**
   - Settings > Secrets and variables > Actions
   - Use os outputs do Terraform para configurar os secrets (veja tabela abaixo)

**Documentação completa:** [`terraform/README.md`](./terraform/README.md)

#### Opção 2: Setup Manual (Console AWS)

Se preferir criar a infraestrutura manualmente:

**Pré-requisitos:**
1. **Bucket S3** criado e configurado
2. **CloudFront Distribution** configurada apontando para o bucket
3. **Usuário IAM** com permissões:
   - `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket`
   - `cloudfront:CreateInvalidation`

**Configurar Secrets no GitHub:**
- Settings > Secrets and variables > Actions > New repository secret

#### Secrets do GitHub Actions

| Secret | Descrição | Como Obter |
|--------|-----------|------------|
| `AWS_ACCESS_KEY_ID` | Access Key do usuário IAM | Terraform output ou criar manualmente no IAM |
| `AWS_SECRET_ACCESS_KEY` | Secret Key do usuário IAM | Terraform output ou criar manualmente no IAM |
| `AWS_S3_BUCKET` | Nome do bucket S3 | Terraform output ou nome do bucket criado |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | ID da distribuição CloudFront | Terraform output ou ID da distribuição |
| `AWS_REGION` | Região AWS | `us-east-1` (ou sua região) |
| `VITE_API_URL` | URL da API em produção | Sua URL da API |
| `VITE_APP_NAME` | Nome da aplicação | Nome do seu projeto |
| `VITE_GOOGLE_CLIENT_ID` | (Opcional) Google OAuth | Se usar autenticação Google |
| `VITE_APPLE_CLIENT_ID` | (Opcional) Apple OAuth | Se usar autenticação Apple |

#### Como Funciona o Deploy

O workflow (`.github/workflows/deploy.yml`) executa automaticamente:

1. Checkout do código
2. Setup Node.js 18
3. Instalação de dependências (`npm ci`)
4. Build do projeto com variáveis de ambiente dos secrets
5. Configuração de credenciais AWS
6. Sincronização dos arquivos para S3 (`aws s3 sync`)
7. Invalidação do cache CloudFront (se configurado)

Após configurar os secrets, basta fazer push para `main` ou `master` e o deploy acontece automaticamente.

#### Troubleshooting

**Build falha com erro de variável:**
- Verifique se todos os secrets obrigatórios estão configurados
- Confirme que os nomes dos secrets estão corretos (case-sensitive)

**Deploy para S3 falha:**
- Verifique credenciais AWS (Access Key ID e Secret)
- Confirme nome do bucket
- Verifique permissões IAM do usuário

**CloudFront não invalida cache:**
- Verifique se `AWS_CLOUDFRONT_DISTRIBUTION_ID` está configurado
- Confirme permissão `cloudfront:CreateInvalidation` no IAM

### Outras Plataformas

#### Vercel

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático em cada push

#### Netlify

1. Conecte seu repositório ao Netlify
2. Configure build command: `npm run build`
3. Publish directory: `dist`
4. Configure variáveis de ambiente

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

Feito com ❤️ usando React + TypeScript + Tailwind CSS + shadcn/ui
