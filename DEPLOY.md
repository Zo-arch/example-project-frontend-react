# Guia de Deploy White Label - AWS S3 + CloudFront

Este projeto possui configuração de CI/CD white label. Basta configurar as variáveis de ambiente (secrets) no GitHub e o deploy será feito automaticamente para AWS S3 + CloudFront.

## Opções de Setup

Você pode configurar a infraestrutura AWS de duas formas:

### Opção 1: Terraform (Recomendado - Automático) ⚡

O método mais rápido e confiável. Automatiza a criação de toda a infraestrutura necessária.

**Vantagens:**
- ✅ Setup completo em minutos
- ✅ Infraestrutura como código (versionável)
- ✅ Elimina erros de configuração manual
- ✅ Outputs prontos para secrets do GitHub

**Como usar:**
1. Instale o Terraform (https://www.terraform.io/downloads)
2. Configure suas credenciais AWS (`aws configure`)
3. Edite `terraform/terraform.tfvars.example` e renomeie para `terraform.tfvars`
4. Execute:
   ```bash
   cd terraform
   terraform init
   terraform plan
   terraform apply
   ```
5. Use os outputs do Terraform para configurar os secrets no GitHub:
   ```bash
   terraform output
   ```

**Documentação completa:** Veja [`terraform/README.md`](./terraform/README.md)

### Opção 2: Setup Manual (Console AWS)

Se preferir criar a infraestrutura manualmente no console AWS, siga as instruções abaixo.

---

## Pré-requisitos AWS (Setup Manual)

Antes de configurar o deploy, você precisa ter:

1. **Bucket S3** criado e configurado para hospedar site estático
2. **CloudFront Distribution** (opcional, mas recomendado) para CDN
3. **Usuário IAM** com permissões para:
   - `s3:PutObject`
   - `s3:DeleteObject`
   - `s3:ListBucket`
   - `cloudfront:CreateInvalidation` (se usar CloudFront)

### Configuração do Bucket S3

1. Crie um bucket S3
2. Habilite "Static website hosting"
3. Configure política de bucket para acesso público (ou configure CloudFront como origem)

### Configuração do CloudFront (Opcional)

1. Crie uma distribuição CloudFront
2. Configure origem apontando para o bucket S3
3. Anote o Distribution ID

### Permissões IAM Mínimas

#### Opção 1: Política para um único bucket (recomendado para projetos isolados)

Exemplo de política IAM para um único projeto:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::SEU-BUCKET-NAME",
        "arn:aws:s3:::SEU-BUCKET-NAME/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "*"
    }
  ]
}
```

**Substitua `SEU-BUCKET-NAME` pelo nome real do seu bucket S3.**

#### Opção 2: Política para múltiplos buckets (para gerenciar vários projetos)

Se você quiser usar um único usuário IAM para múltiplos projetos, liste todos os buckets:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::projeto1-bucket",
        "arn:aws:s3:::projeto1-bucket/*",
        "arn:aws:s3:::projeto2-bucket",
        "arn:aws:s3:::projeto2-bucket/*",
        "arn:aws:s3:::projeto3-bucket",
        "arn:aws:s3:::projeto3-bucket/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "*"
    }
  ]
}
```

**Importante:** Quando criar um novo projeto, edite esta política e adicione o novo bucket à lista.

#### Opção 3: Política com padrão de nome (para buckets com prefixo comum)

Se seus buckets seguirem um padrão (ex: `meus-saas-projeto1`, `meus-saas-projeto2`), você pode usar wildcards:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::meus-saas-*",
        "arn:aws:s3:::meus-saas-*/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "*"
    }
  ]
}
```

**Atenção:** Esta política dará acesso a todos os buckets que começam com `meus-saas-`.

### Como Aplicar a Política IAM

1. Acesse o Console AWS > IAM
2. Vá em **Users** > **Add users**
3. Escolha **Programmatic access** e selecione **Anexar políticas diretamente**
4. Clique em **Create policy**
5. Na aba **JSON**, cole uma das políticas acima (adaptando para seu caso)
6. Revise e salve a política
7. Volte para criação do usuário e selecione a política criada
8. Finalize criando o usuário
9. **Importante:** Anote o **Access Key ID** e **Secret Access Key** gerados - você precisará deles para configurar os secrets no GitHub

**Nota:** No caso de uso, escolha **"Serviço de terceiros"** (GitHub Actions é um serviço externo à AWS).

## Configuração no GitHub

### 1. Configurar Secrets

Vá em **Settings > Secrets and variables > Actions** e adicione os seguintes secrets:

#### Secrets Obrigatórios

- `AWS_ACCESS_KEY_ID` - Access Key ID do usuário IAM
- `AWS_SECRET_ACCESS_KEY` - Secret Access Key do usuário IAM
- `AWS_S3_BUCKET` - Nome do bucket S3 (ex: `meu-app-prod`)
- `VITE_API_URL` - URL da API backend (ex: `https://api.exemplo.com/api`)
- `VITE_APP_NAME` - Nome da aplicação (ex: `meu-app`)

#### Secrets Opcionais

- `AWS_REGION` - Região AWS (padrão: `us-east-1` se não informado)
- `AWS_CLOUDFRONT_DISTRIBUTION_ID` - ID da distribuição CloudFront (se não informado, invalidação será ignorada)
- `VITE_GOOGLE_CLIENT_ID` - Client ID do Google OAuth (se usar autenticação Google)
- `VITE_APPLE_CLIENT_ID` - Client ID do Apple OAuth (se usar autenticação Apple)

### 2. Como Funciona

O workflow (`.github/workflows/deploy.yml`) é acionado automaticamente:

- **Push para `main` ou `master`** - Deploy automático para produção
- **Workflow dispatch** - Permite acionar deploy manual pelo GitHub Actions

### 3. Processo de Deploy

O workflow executa os seguintes passos:

1. Checkout do código
2. Setup do Node.js 18
3. Instalação de dependências (`npm ci`)
4. Build do projeto com variáveis de ambiente
5. Configuração de credenciais AWS
6. Sincronização dos arquivos para S3 (com `--delete` para remover arquivos antigos)
7. Invalidação do cache CloudFront (se `AWS_CLOUDFRONT_DISTRIBUTION_ID` estiver configurado)

## Teste Local do Build

Você pode testar o build localmente antes de fazer deploy:

### 1. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=example-project
VITE_GOOGLE_CLIENT_ID=seu-google-client-id
VITE_APPLE_CLIENT_ID=seu-apple-client-id
```

### 2. Build Local

```bash
# Instalar dependências
npm install

# Build do projeto
npm run build
```

O build será gerado na pasta `dist/`. Você pode testar localmente usando:

```bash
# Preview do build
npm run preview
```

## Variáveis de Ambiente Disponíveis

| Variável | Obrigatória | Descrição | Exemplo |
|----------|------------|-----------|---------|
| `VITE_API_URL` | Sim | URL da API backend | `https://api.exemplo.com/api` |
| `VITE_APP_NAME` | Sim | Nome da aplicação | `meu-app` |
| `VITE_GOOGLE_CLIENT_ID` | Não | Client ID do Google OAuth | `123456789.apps.googleusercontent.com` |
| `VITE_APPLE_CLIENT_ID` | Não | Client ID do Apple OAuth | `com.exemplo.app` |

## Troubleshooting

### Build falha com erro de variável de ambiente

- Verifique se todos os secrets obrigatórios estão configurados no GitHub
- Certifique-se de que os nomes dos secrets estão corretos (case-sensitive)

### Deploy para S3 falha

- Verifique se as credenciais AWS estão corretas
- Confirme se o nome do bucket está correto
- Verifique as permissões IAM do usuário

### CloudFront não invalida cache

- Verifique se `AWS_CLOUDFRONT_DISTRIBUTION_ID` está configurado
- Confirme se o usuário IAM tem permissão `cloudfront:CreateInvalidation`

### Arquivos não aparecem no S3 após deploy

- Verifique os logs do workflow no GitHub Actions
- Confirme que o build foi concluído com sucesso
- Verifique se há erros de permissão no S3

## Customização

Para desabilitar o deploy automático em push:

1. Edite `.github/workflows/deploy.yml`
2. Remova o trigger `push` do `on:` e mantenha apenas `workflow_dispatch`

Para adicionar mais variáveis de ambiente:

1. Adicione a variável no `env:` do step "Build" no workflow
2. Adicione como secret no GitHub
3. Documente no `env.example` e neste guia

## Suporte

Para problemas ou dúvidas, consulte:
- [Documentação AWS S3](https://docs.aws.amazon.com/s3/)
- [Documentação CloudFront](https://docs.aws.amazon.com/cloudfront/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

