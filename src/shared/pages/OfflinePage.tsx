import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Home, Wifi, WifiOff, RefreshCw } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { ROUTES } from '@/shared/constants/routes'

export function OfflinePage() {
	const [isOnline, setIsOnline] = useState(navigator.onLine)
	const [isChecking, setIsChecking] = useState(false)

	useEffect(() => {
		const handleOnline = () => setIsOnline(true)
		const handleOffline = () => setIsOnline(false)

		window.addEventListener('online', handleOnline)
		window.addEventListener('offline', handleOffline)

		return () => {
			window.removeEventListener('online', handleOnline)
			window.removeEventListener('offline', handleOffline)
		}
	}, [])

	const handleRetry = () => {
		setIsChecking(true)
		// Simular verificação de conexão
		setTimeout(() => {
			if (navigator.onLine) {
				setIsOnline(true)
				// Recarregar página quando voltar online
				window.location.reload()
			}
			setIsChecking(false)
		}, 1000)
	}

	if (isOnline) {
		return null // Não mostrar página se estiver online
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
			{/* Grid pattern background */}
			<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

			<div className="text-center space-y-6 max-w-md w-full animate-slide-fade-in">
				{/* Ícone grande */}
				<div className="flex justify-center">
					<div className="relative">
						<div className="absolute inset-0 bg-muted/50 rounded-full blur-3xl"></div>
						<div className="relative bg-muted/30 rounded-full p-8">
							<WifiOff className="h-24 w-24 text-muted-foreground" />
						</div>
					</div>
				</div>

				{/* Título */}
				<div className="space-y-2">
					<h1 className="text-4xl font-bold">Sem conexão</h1>
					<h2 className="text-xl font-semibold text-muted-foreground">
						Você está offline
					</h2>
				</div>

				{/* Descrição */}
				<p className="text-muted-foreground text-lg">
					Parece que você perdeu a conexão com a internet. Verifique sua
					conexão e tente novamente.
				</p>

				{/* Indicador de status */}
				<div className="flex items-center justify-center gap-2 text-muted-foreground">
					<WifiOff className="h-4 w-4" />
					<span className="text-sm">Sem conexão com a internet</span>
				</div>

				{/* Botões de ação */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
					<Button
						onClick={handleRetry}
						size="lg"
						className="w-full sm:w-auto"
						disabled={isChecking}
					>
						{isChecking ? (
							<>
								<RefreshCw className="mr-2 h-4 w-4 animate-spin" />
								Verificando...
							</>
						) : (
							<>
								<Wifi className="mr-2 h-4 w-4" />
								Tentar novamente
							</>
						)}
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
			</div>
		</div>
	)
}

