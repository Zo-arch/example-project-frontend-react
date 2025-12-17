import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Home } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { ROUTES } from '@/shared/constants/routes'

interface SuccessPageProps {
	title: string
	description: string
	icon?: ReactNode
	actionButton?: ReactNode
	onActionClick?: () => void
}

export function SuccessPage({
	title,
	description,
	icon,
	actionButton,
	onActionClick,
}: SuccessPageProps) {
	const defaultIcon = icon || (
		<CheckCircle className="h-24 w-24 text-primary" />
	)

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
			{/* Grid pattern background */}
			<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

			<div className="text-center space-y-6 max-w-md w-full animate-slide-fade-in">
				{/* Ícone grande */}
				<div className="flex justify-center">
					<div className="relative">
						<div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
						<div className="relative bg-primary/10 rounded-full p-8">
							{defaultIcon}
						</div>
					</div>
				</div>

				{/* Título */}
				<div className="space-y-2">
					<h1 className="text-4xl font-bold">{title}</h1>
				</div>

				{/* Descrição */}
				<p className="text-muted-foreground text-lg">{description}</p>

				{/* Botões de ação */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
					{actionButton || (
						<Button
							asChild
							size="lg"
							className="w-full sm:w-auto"
							onClick={onActionClick}
						>
							<Link to={ROUTES.home}>
								<Home className="mr-2 h-4 w-4" />
								Voltar para home
							</Link>
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}

