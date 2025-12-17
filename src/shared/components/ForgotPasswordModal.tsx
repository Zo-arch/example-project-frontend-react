import { useState } from 'react'
import { Mail, Send, Loader2 } from 'lucide-react'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/shared/ui/dialog'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { cn } from '@/shared/lib/utils'

export interface ForgotPasswordModalProps {
	open: boolean
	onOpenChange: (open: boolean) => void
	onSubmit: (email: string) => void | Promise<void>
	isLoading?: boolean
}

export function ForgotPasswordModal({
	open,
	onOpenChange,
	onSubmit,
	isLoading = false,
}: ForgotPasswordModalProps) {
	const [email, setEmail] = useState('')
	const [error, setError] = useState('')

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError('')

		if (!email) {
			setError('Por favor, insira seu email')
			return
		}

		if (!validateEmail(email)) {
			setError('Por favor, insira um email válido')
			return
		}

		try {
			await onSubmit(email)
		} catch (err) {
			setError(
				err instanceof Error
					? err.message
					: 'Erro ao enviar código. Tente novamente.'
			)
		}
	}

	const handleOpenChange = (newOpen: boolean) => {
		if (!newOpen) {
			setEmail('')
			setError('')
		}
		onOpenChange(newOpen)
	}

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
						<Mail className="h-8 w-8 text-primary" />
					</div>
					<DialogTitle className="text-center text-2xl">
						Esqueceu sua senha?
					</DialogTitle>
					<DialogDescription className="text-center">
						Digite seu email e enviaremos um código de verificação para você
						redefinir sua senha.
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="space-y-4 py-4">
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<div className="relative">
							<Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								id="email"
								type="email"
								placeholder="seu@email.com"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value)
									setError('')
								}}
								className={cn(
									'pl-10',
									error && 'border-destructive focus-visible:ring-destructive'
								)}
								disabled={isLoading}
								required
							/>
						</div>
						{error && (
							<p className="text-sm text-destructive">{error}</p>
						)}
					</div>

					<Button
						type="submit"
						className="w-full"
						size="lg"
						disabled={isLoading || !email}
					>
						{isLoading ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
								Enviando...
							</>
						) : (
							<>
								<Send className="mr-2 h-4 w-4" />
								Enviar código
							</>
						)}
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	)
}

