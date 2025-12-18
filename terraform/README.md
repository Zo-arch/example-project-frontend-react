# Terraform - Infraestrutura AWS

Este diretório contém a configuração Terraform para criar automaticamente toda a infraestrutura AWS necessária para o deploy: S3 Bucket, CloudFront Distribution, Origin Access Control e usuário IAM.

## Pré-requisitos

1. **Terraform instalado** (versão >= 1.0)
   - Download: https://www.terraform.io/downloads
   - Ou via package manager: `brew install terraform` (macOS) / `choco install terraform` (Windows)

2. **AWS CLI configurado** com credenciais
   - Configure: `aws configure`
   - Ou use variáveis de ambiente: `AWS_ACCESS_KEY_ID` e `AWS_SECRET_ACCESS_KEY`

3. **Permissões AWS** para criar recursos:
   - S3 Buckets
   - CloudFront Distributions
   - IAM Users e Policies

## Uso Rápido

### 1. Configurar Variáveis

Copie o arquivo de exemplo e edite com seus valores:

```bash
cd terraform
cp terraform.tfvars.example terraform.tfvars
```

Edite `terraform.tfvars`:

```hcl
project_name = "meu-app"
aws_region   = "us-east-1"
environment  = "prod"
```

### 2. Inicializar Terraform

```bash
terraform init
```

### 3. Visualizar o Plano

Verifique o que será criado:

```bash
terraform plan
```

### 4. Aplicar as Mudanças

Crie a infraestrutura:

```bash
terraform apply
```

Confirme digitando `yes` quando solicitado.

### 5. Obter Outputs

Após a criação, obtenha os valores necessários para configurar os secrets no GitHub:

```bash
terraform output
```

Para valores específicos:

```bash
# Nome do bucket S3
terraform output s3_bucket_name

# ID da distribuição CloudFront
terraform output cloudfront_distribution_id

# Access Key ID (não sensível)
terraform output iam_access_key_id

# Secret Access Key (sensível - não compartilhe!)
terraform output -raw iam_secret_access_key
```

## Recursos Criados

### S3 Bucket
- Bucket com nome: `{project_name}-{environment}`
- Versionamento (opcional, configurável)
- Criptografia server-side (AES256)
- Block Public Access habilitado (acesso apenas via CloudFront)
- Bucket Policy permitindo apenas CloudFront via OAC

### CloudFront Distribution
- Origin Access Control (OAC) configurado
- Default root object: `index.html`
- Custom error responses para SPA (404/403 → index.html)
- Cache otimizado para assets estáticos
- HTTPS obrigatório

### IAM User
- Usuário IAM específico para GitHub Actions
- Access Keys geradas automaticamente
- Política inline com permissões mínimas:
  - `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket` (apenas no bucket criado)
  - `cloudfront:CreateInvalidation` (apenas na distribuição criada)

## Configurar Secrets no GitHub

Após executar `terraform apply`, configure os seguintes secrets no GitHub:

**Settings > Secrets and variables > Actions > New repository secret**

| Secret | Valor (use `terraform output`) |
|--------|--------------------------------|
| `AWS_ACCESS_KEY_ID` | `terraform output -raw iam_access_key_id` |
| `AWS_SECRET_ACCESS_KEY` | `terraform output -raw iam_secret_access_key` |
| `AWS_S3_BUCKET` | `terraform output -raw s3_bucket_name` |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | `terraform output -raw cloudfront_distribution_id` |
| `AWS_REGION` | `terraform output -raw aws_region` |

## Variáveis Disponíveis

| Variável | Descrição | Padrão | Obrigatória |
|----------|-----------|--------|-------------|
| `project_name` | Nome do projeto (usado no bucket) | - | Sim |
| `aws_region` | Região AWS | `us-east-1` | Não |
| `environment` | Ambiente (prod, staging, dev) | `prod` | Não |
| `enable_versioning` | Habilitar versionamento S3 | `false` | Não |
| `allowed_cors_origins` | Origens CORS permitidas | `[]` | Não |

## Comandos Úteis

```bash
# Ver outputs
terraform output

# Ver estado atual
terraform show

# Destruir infraestrutura (CUIDADO!)
terraform destroy

# Formatar arquivos .tf
terraform fmt

# Validar configuração
terraform validate

# Ver apenas mudanças específicas
terraform plan -target=aws_s3_bucket.app
```

## Segurança

⚠️ **Importante:**
- O arquivo `terraform.tfvars` contém suas configurações - **não commite no Git**!
- O `terraform.tfstate` contém informações sensíveis (incluindo Secret Access Key) - **não commite no Git**!
- Sempre use `.terraformignore` e `.gitignore` corretamente configurados

## Troubleshooting

### Erro: "Bucket already exists"
- O nome do bucket S3 deve ser único globalmente
- Mude o `project_name` no `terraform.tfvars`

### Erro: "Access Denied"
- Verifique se suas credenciais AWS têm permissões suficientes
- Verifique se a região está correta

### Erro: "Invalid OAC configuration"
- Certifique-se de que o OAC foi criado antes da Distribution
- Execute `terraform apply` novamente se necessário

### CloudFront demora para provisionar
- Distribuições CloudFront podem levar 15-30 minutos para ficarem ativas
- Use `terraform apply` e aguarde a conclusão

## Próximos Passos

Após criar a infraestrutura:

1. ✅ Configure os secrets no GitHub (veja seção acima)
2. ✅ Configure as variáveis de ambiente do app (`VITE_API_URL`, `VITE_APP_NAME`, etc)
3. ✅ Faça push para a branch `main` - deploy automático!
4. ✅ Acesse sua aplicação via URL do CloudFront: `terraform output cloudfront_domain_name`

## Referências

- [Documentação Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [Terraform Documentation](https://www.terraform.io/docs)

