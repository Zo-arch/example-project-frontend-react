# IAM User para GitHub Actions
resource "aws_iam_user" "github_actions" {
  name = "${var.project_name}-${var.environment}-github-actions"
  path = "/"

  tags = {
    Name        = "${var.project_name}-${var.environment}-github-actions"
    Environment = var.environment
    Project     = var.project_name
  }
}

# IAM Access Key para o usuário
resource "aws_iam_access_key" "github_actions" {
  user = aws_iam_user.github_actions.name
}

# Política IAM inline com permissões mínimas necessárias
data "aws_iam_policy_document" "github_actions_policy" {
  # Permissões para S3
  statement {
    sid    = "S3BucketAccess"
    effect = "Allow"

    actions = [
      "s3:PutObject",
      "s3:DeleteObject",
      "s3:ListBucket"
    ]

    resources = [
      aws_s3_bucket.app.arn,
      "${aws_s3_bucket.app.arn}/*"
    ]
  }

  # Permissões para CloudFront
  statement {
    sid    = "CloudFrontInvalidation"
    effect = "Allow"

    actions = [
      "cloudfront:CreateInvalidation"
    ]

    resources = [
      aws_cloudfront_distribution.app.arn
    ]
  }
}

# Anexar política ao usuário
resource "aws_iam_user_policy" "github_actions" {
  name   = "${var.project_name}-${var.environment}-github-actions-policy"
  user   = aws_iam_user.github_actions.name
  policy = data.aws_iam_policy_document.github_actions_policy.json
}

