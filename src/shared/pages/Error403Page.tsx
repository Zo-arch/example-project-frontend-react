import { Link } from 'react-router-dom'
import { Home, Lock, ShieldAlert } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { ROUTES } from '@/shared/constants/routes'

export function Error403Page() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
			{/* Grid pattern background */}
			<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

			<div className="text-center space-y-6 max-w-md w-full animate-slide-fade-in">
				{/* Ícone grande */}
				<div className="flex justify-center">
					<div className="relative">
						<div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-3xl"></div>
						<div className="relative bg-yellow-500/10 rounded-full p-8">
							<ShieldAlert className="h-24 w-24 text-yellow-600 dark:text-yellow-500" />
						</div>
					</div>
				</div>

				{/* Código de erro */}
				<div className="space-y-2">
					<h1 className="text-8xl font-bold text-yellow-600 dark:text-yellow-500">
						403
					</h1>
					<h2 className="text-3xl font-semibold">Acesso negado</h2>
				</div>

				{/* Descrição */}
				<p className="text-muted-foreground text-lg">
					Você não tem permissão para acessar esta página. Se você acredita que
					isto é um erro, entre em contato com o administrador.
				</p>

				{/* Botões de ação */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
					<Button asChild size="lg" className="w-full sm:w-auto">
						<Link to={ROUTES.home}>
							<Home className="mr-2 h-4 w-4" />
							Voltar para home
						</Link>
					</Button>
					<Button
						asChild
						variant="outline"
						size="lg"
						className="w-full sm:w-auto"
					>
						<Link to={ROUTES.login}>
							<Lock className="mr-2 h-4 w-4" />
							Fazer login
						</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}

