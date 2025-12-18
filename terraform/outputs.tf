# S3 Bucket
output "s3_bucket_name" {
  description = "Nome do bucket S3 criado"
  value       = aws_s3_bucket.app.id
}

output "s3_bucket_arn" {
  description = "ARN do bucket S3"
  value       = aws_s3_bucket.app.arn
}

# CloudFront
output "cloudfront_distribution_id" {
  description = "ID da distribuição CloudFront"
  value       = aws_cloudfront_distribution.app.id
}

output "cloudfront_domain_name" {
  description = "Domain name do CloudFront (URL para acessar a aplicação)"
  value       = aws_cloudfront_distribution.app.domain_name
}

output "cloudfront_arn" {
  description = "ARN da distribuição CloudFront"
  value       = aws_cloudfront_distribution.app.arn
}

# AWS Region
output "aws_region" {
  description = "Região AWS onde os recursos foram criados"
  value       = var.aws_region
}

# IAM Credentials (Sensíveis - usar com cuidado!)
output "iam_access_key_id" {
  description = "Access Key ID do usuário IAM para GitHub Actions"
  value       = aws_iam_access_key.github_actions.id
  sensitive   = false
}

output "iam_secret_access_key" {
  description = "Secret Access Key do usuário IAM para GitHub Actions (CONFIDENCIAL - configure no GitHub Secrets)"
  value       = aws_iam_access_key.github_actions.secret
  sensitive   = true
}

output "iam_user_name" {
  description = "Nome do usuário IAM criado"
  value       = aws_iam_user.github_actions.name
}

