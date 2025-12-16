import { useState } from 'react'
import { Link } from 'react-router-dom'
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
import { Mail, Lock, User, Chrome, Apple, Check } from 'lucide-react'

export function RegisterPage() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// TODO: Implementar registro
		console.log('Register:', { name, email, password })
	}

	const handleGoogleLogin = () => {
		// TODO: Implementar registro com Google
		console.log('Registro com Google')
	}

	const handleAppleLogin = () => {
		// TODO: Implementar registro com Apple
		console.log('Registro com Apple')
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
			{/* Grid pattern background */}
			<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

			<Card className="w-full max-w-md border-2 shadow-xl">
				<CardHeader className="space-y-1 text-center">
					<CardTitle className="text-3xl font-bold">Criar conta</CardTitle>
					<CardDescription>
						Preencha os dados abaixo para começar
					</CardDescription>
				</CardHeader>

				<CardContent className="space-y-4">
					{/* Social Login Buttons */}
					<div className="grid grid-cols-2 gap-3">
						<Button
							type="button"
							variant="outline"
							className="w-full"
							onClick={handleGoogleLogin}
						>
							<Chrome className="mr-2 h-4 w-4" />
							Google
						</Button>
						<Button
							type="button"
							variant="outline"
							className="w-full"
							onClick={handleAppleLogin}
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

					{/* Register Form */}
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="name">Nome completo</Label>
							<div className="relative">
								<User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<Input
									id="name"
									type="text"
									placeholder="João Silva"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="pl-10"
									required
								/>
							</div>
						</div>

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
							<Label htmlFor="password">Senha</Label>
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
									minLength={6}
								/>
							</div>
							<p className="text-xs text-muted-foreground">
								Mínimo de 6 caracteres
							</p>
						</div>

						<div className="space-y-2">
							<Label htmlFor="confirmPassword">Confirmar senha</Label>
							<div className="relative">
								<Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<Input
									id="confirmPassword"
									type="password"
									placeholder="••••••••"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									className="pl-10"
									required
								/>
							</div>
						</div>

						{/* Benefits */}
						<div className="rounded-lg bg-muted/50 p-4 space-y-2">
							<div className="flex items-center gap-2 text-sm">
								<Check className="h-4 w-4 text-primary" />
								<span className="text-muted-foreground">
									14 dias de teste gratuito
								</span>
							</div>
							<div className="flex items-center gap-2 text-sm">
								<Check className="h-4 w-4 text-primary" />
								<span className="text-muted-foreground">
									Sem cartão de crédito necessário
								</span>
							</div>
							<div className="flex items-center gap-2 text-sm">
								<Check className="h-4 w-4 text-primary" />
								<span className="text-muted-foreground">
									Cancele a qualquer momento
								</span>
							</div>
						</div>

						<Button type="submit" className="w-full" size="lg">
							Criar conta
						</Button>
					</form>
				</CardContent>

				<CardFooter className="flex flex-col space-y-4">
					<div className="text-sm text-center text-muted-foreground">
						Já tem uma conta?{' '}
						<Link
							to={ROUTES.login}
							className="text-primary font-medium hover:underline"
						>
							Entrar
						</Link>
					</div>
					<div className="text-xs text-center text-muted-foreground">
						Ao criar uma conta, você concorda com nossos{' '}
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

