variable "project_name" {
  description = "Nome do projeto (será usado no nome do bucket e outros recursos)"
  type        = string
}

variable "aws_region" {
  description = "Região AWS onde os recursos serão criados"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Ambiente (ex: prod, staging, dev)"
  type        = string
  default     = "prod"
}

variable "enable_versioning" {
  description = "Habilitar versionamento no bucket S3"
  type        = bool
  default     = false
}

variable "allowed_cors_origins" {
  description = "Origens CORS permitidas para o CloudFront (opcional)"
  type        = list(string)
  default     = []
}

