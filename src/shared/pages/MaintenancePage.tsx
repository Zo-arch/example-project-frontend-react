import { Link } from 'react-router-dom'
import { Home, Wrench, Clock } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { ROUTES } from '@/shared/constants/routes'

export function MaintenancePage() {
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
							<Wrench className="h-24 w-24 text-primary" />
						</div>
					</div>
				</div>

				{/* Título */}
				<div className="space-y-2">
					<h1 className="text-4xl font-bold">Manutenção programada</h1>
					<h2 className="text-xl font-semibold text-muted-foreground">
						Estamos trabalhando para melhorar nossos serviços
					</h2>
				</div>

				{/* Descrição */}
				<div className="space-y-4">
					<p className="text-muted-foreground text-lg">
						Nosso sistema está temporariamente indisponível devido a uma
						manutenção programada. Voltaremos em breve!
					</p>

					{/* Informação de tempo */}
					<div className="flex items-center justify-center gap-2 text-muted-foreground">
						<Clock className="h-4 w-4" />
						<span className="text-sm">
							Previsão de retorno: em breve
						</span>
					</div>
				</div>

				{/* Botão de ação */}
				<div className="flex justify-center pt-4">
					<Button asChild size="lg" className="w-full sm:w-auto">
						<Link to={ROUTES.home}>
							<Home className="mr-2 h-4 w-4" />
							Voltar para home
						</Link>
					</Button>
				</div>

				{/* Mensagem adicional */}
				<p className="text-sm text-muted-foreground pt-4">
					Obrigado pela sua paciência!
				</p>
			</div>
		</div>
	)
}

