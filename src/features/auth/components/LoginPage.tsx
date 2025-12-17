import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { ROUTES } from '@/shared/constants/routes'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/ui/card'
import { Separator } from '@/shared/ui/separator'
import { Mail, Lock, Chrome, Apple, Loader2 } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { useGoogleAuth } from '../hooks/useGoogleAuth'
import { useAppleAuth } from '../hooks/useAppleAuth'
import { getErrorMessage } from '@/shared/lib/error-handler'
import { toast } from '@/shared/ui/use-toast'

export function LoginPage() {
	const navigate = useNavigate()
	const { login, isLoading: isAuthLoading } = useAuth()
	const { onGoogleSuccess, onGoogleError, isLoading: isGoogleLoading } =
		useGoogleAuth()
	const { loginWithApple } = useAppleAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const googleLoginRef = useRef<HTMLDivElement>(null)

	const isLoading = isAuthLoading || isGoogleLoading

	const handleGoogleLoginClick = () => {
		// Dispara o clique no botão do GoogleLogin que está escondido
		const googleButton = googleLoginRef.current?.querySelector(
			'div[role="button"]'
		) as HTMLElement
		if (googleButton) {
			googleButton.click()
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			await login({ email, password })
			toast({
				title: 'Login realizado com sucesso!',
				description: 'Redirecionando...',
			})
			// Redirecionar para home após login
			navigate(ROUTES.home)
		} catch (error) {
			toast({
				title: 'Erro ao fazer login',
				description: getErrorMessage(error),
				variant: 'destructive',
			})
		}
	}


	const handleAppleLogin = async () => {
		try {
			// TODO: Integrar com Apple SDK quando instalado
			// Por enquanto, apenas mostra mensagem
			toast({
				title: 'Apple Login',
				description: 'Integração com Apple SDK será implementada em breve.',
			})
			// Exemplo de uso quando SDK estiver configurado:
			// const token = await getAppleToken()
			// await loginWithApple(token)
			// navigate(ROUTES.home)
		} catch (error) {
			toast({
				title: 'Erro ao fazer login com Apple',
				description: getErrorMessage(error),
				variant: 'destructive',
			})
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
			{/* Grid pattern background */}
			<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

			<Card className="w-full max-w-md border-2 shadow-xl">
				<CardHeader className="space-y-1 text-center">
					<CardTitle className="text-3xl font-bold">Bem-vindo de volta</CardTitle>
					<CardDescription>
						Entre na sua conta para continuar
					</CardDescription>
				</CardHeader>

				<CardContent className="space-y-4">
					{/* Social Login Buttons */}
					<div className="grid grid-cols-2 gap-3">
						{/* Google Login - Botão customizado que dispara o GoogleLogin oculto */}
						<div className="relative w-full">
							{/* GoogleLogin escondido */}
							<div ref={googleLoginRef} className="absolute opacity-0 pointer-events-none">
								<GoogleLogin
									onSuccess={onGoogleSuccess}
									onError={onGoogleError}
									useOneTap={false}
								/>
							</div>
							{/* Botão customizado bonito */}
							<Button
								type="button"
								variant="outline"
								className="w-full"
								onClick={handleGoogleLoginClick}
								disabled={isLoading}
							>
								{isGoogleLoading ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										Entrando...
									</>
								) : (
									<>
										<Chrome className="mr-2 h-4 w-4" />
										Google
									</>
								)}
							</Button>
						</div>
						<Button
							type="button"
							variant="outline"
							className="w-full"
							onClick={handleAppleLogin}
							disabled={isLoading}
						>
							<Apple className="mr-2 h-4 w-4" />
							Apple
						</Button>
					</div>

					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<Separator />
						</div>
						<div className="relative flex justify-center text-xs uppercase">
							<span className="bg-card px-2 text-muted-foreground">
								Ou continue com email
							</span>
						</div>
					</div>

					{/* Login Form */}
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<div className="relative">
								<Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<Input
									id="email"
									type="email"
									placeholder="seu@email.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="pl-10"
									required
								/>
							</div>
						</div>

						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<Label htmlFor="password">Senha</Label>
								<Link
									to={ROUTES.forgotPassword}
									className="text-sm text-primary hover:underline"
								>
									Esqueceu a senha?
								</Link>
							</div>
							<div className="relative">
								<Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<Input
									id="password"
									type="password"
									placeholder="••••••••"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="pl-10"
									required
								/>
							</div>
						</div>

						<Button
							type="submit"
							className="w-full"
							size="lg"
							disabled={isAuthLoading}
						>
							{isAuthLoading ? (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									Entrando...
								</>
							) : (
								'Entrar'
							)}
						</Button>
					</form>
				</CardContent>

				<CardFooter className="flex flex-col space-y-4">
					<div className="text-sm text-center text-muted-foreground">
						Não tem uma conta?{' '}
						<Link
							to={ROUTES.register}
							className="text-primary font-medium hover:underline"
						>
							Criar conta
						</Link>
					</div>
					<div className="text-xs text-center text-muted-foreground">
						Ao continuar, você concorda com nossos{' '}
						<Link to={ROUTES.terms} className="text-primary hover:underline">
							Termos de Serviço
						</Link>{' '}
						e{' '}
						<Link to={ROUTES.privacy} className="text-primary hover:underline">
							Política de Privacidade
						</Link>
					</div>
				</CardFooter>
			</Card>
		</div>
	)
}

