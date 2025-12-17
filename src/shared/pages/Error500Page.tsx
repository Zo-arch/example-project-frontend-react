import { Link } from 'react-router-dom'
import { Home, RefreshCw, AlertTriangle } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { ROUTES } from '@/shared/constants/routes'

export function Error500Page() {
	const handleRetry = () => {
		window.location.reload()
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
			{/* Grid pattern background */}
			<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

			<div className="text-center space-y-6 max-w-md w-full animate-slide-fade-in">
				{/* Ícone grande */}
				<div className="flex justify-center">
					<div className="relative">
						<div className="absolute inset-0 bg-destructive/20 rounded-full blur-3xl"></div>
						<div className="relative bg-destructive/10 rounded-full p-8">
							<AlertTriangle className="h-24 w-24 text-destructive" />
						</div>
					</div>
				</div>

				{/* Código de erro */}
				<div className="space-y-2">
					<h1 className="text-8xl font-bold text-destructive">500</h1>
					<h2 className="text-3xl font-semibold">Erro interno do servidor</h2>
				</div>

				{/* Descrição */}
				<p className="text-muted-foreground text-lg">
					Ops! Algo deu errado no nosso servidor. Nossa equipe foi notificada e
					está trabalhando para resolver o problema.
				</p>

				{/* Botões de ação */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
					<Button onClick={handleRetry} size="lg" className="w-full sm:w-auto">
						<RefreshCw className="mr-2 h-4 w-4" />
						Tentar novamente
					</Button>
					<Button
						asChild
						variant="outline"
						size="lg"
						className="w-full sm:w-auto"
					>
						<Link to={ROUTES.home}>
							<Home className="mr-2 h-4 w-4" />
							Voltar para home
						</Link>
					</Button>
				</div>

				{/* Link de suporte */}
				<p className="text-sm text-muted-foreground pt-4">
					Se o problema persistir, entre em contato com o{' '}
					<a
						href="mailto:support@example.com"
						className="text-primary hover:underline"
					>
						suporte
					</a>
					.
				</p>
			</div>
		</div>
	)
}

