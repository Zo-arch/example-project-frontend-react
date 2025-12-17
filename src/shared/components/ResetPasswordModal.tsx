import { useState } from 'react'
import { Lock, CheckCircle2, Loader2, Eye, EyeOff } from 'lucide-react'
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

export interface ResetPasswordModalProps {
	open: boolean
	onOpenChange: (open: boolean) => void
	onReset: (newPassword: string) => void | Promise<void>
	isLoading?: boolean
}

export function ResetPasswordModal({
	open,
	onOpenChange,
	onReset,
	isLoading = false,
}: ResetPasswordModalProps) {
	const [newPassword, setNewPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [showNewPassword, setShowNewPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const [error, setError] = useState('')

	const validatePassword = (password: string) => {
		if (password.length < 6) {
			return 'A senha deve ter no mínimo 6 caracteres'
		}
		return null
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError('')

		const passwordError = validatePassword(newPassword)
		if (passwordError) {
			setError(passwordError)
			return
		}

		if (newPassword !== confirmPassword) {
			setError('As senhas não coincidem')
			return
		}

		try {
			await onReset(newPassword)
		} catch (err) {
			setError(
				err instanceof Error
					? err.message
					: 'Erro ao redefinir senha. Tente novamente.'
			)
		}
	}

	const handleOpenChange = (newOpen: boolean) => {
		if (!newOpen) {
			setNewPassword('')
			setConfirmPassword('')
			setError('')
			setShowNewPassword(false)
			setShowConfirmPassword(false)
		}
		onOpenChange(newOpen)
	}

	const isFormValid =
		newPassword.length >= 6 &&
		confirmPassword.length >= 6 &&
		newPassword === confirmPassword

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
						<Lock className="h-8 w-8 text-primary" />
					</div>
					<DialogTitle className="text-center text-2xl">
						Redefinir senha
					</DialogTitle>
					<DialogDescription className="text-center">
						Digite sua nova senha abaixo. Certifique-se de que ela tenha pelo
						menos 6 caracteres.
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="space-y-4 py-4">
					<div className="space-y-2">
						<Label htmlFor="newPassword">Nova senha</Label>
						<div className="relative">
							<Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								id="newPassword"
								type={showNewPassword ? 'text' : 'password'}
								placeholder="••••••••"
								value={newPassword}
								onChange={(e) => {
									setNewPassword(e.target.value)
									setError('')
								}}
								className={cn(
									'pl-10 pr-10',
									error && 'border-destructive focus-visible:ring-destructive'
								)}
								disabled={isLoading}
								required
								minLength={6}
							/>
							<button
								type="button"
								onClick={() => setShowNewPassword(!showNewPassword)}
								className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
								tabIndex={-1}
							>
								{showNewPassword ? (
									<EyeOff className="h-4 w-4" />
								) : (
									<Eye className="h-4 w-4" />
								)}
							</button>
						</div>
						{newPassword && (
							<p className="text-xs text-muted-foreground">
								Mínimo de 6 caracteres
							</p>
						)}
					</div>

					<div className="space-y-2">
						<Label htmlFor="confirmPassword">Confirmar senha</Label>
						<div className="relative">
							<Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								id="confirmPassword"
								type={showConfirmPassword ? 'text' : 'password'}
								placeholder="••••••••"
								value={confirmPassword}
								onChange={(e) => {
									setConfirmPassword(e.target.value)
									setError('')
								}}
								className={cn(
									'pl-10 pr-10',
									error && 'border-destructive focus-visible:ring-destructive'
								)}
								disabled={isLoading}
								required
								minLength={6}
							/>
							<button
								type="button"
								onClick={() =>
									setShowConfirmPassword(!showConfirmPassword)
								}
								className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
								tabIndex={-1}
							>
								{showConfirmPassword ? (
									<EyeOff className="h-4 w-4" />
								) : (
									<Eye className="h-4 w-4" />
								)}
							</button>
						</div>
						{confirmPassword &&
							newPassword !== confirmPassword &&
							confirmPassword.length >= 6 && (
								<p className="text-xs text-destructive">
									As senhas não coincidem
								</p>
							)}
						{confirmPassword &&
							newPassword === confirmPassword &&
							confirmPassword.length >= 6 && (
								<div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
									<CheckCircle2 className="h-3 w-3" />
									<span>Senhas coincidem</span>
								</div>
							)}
					</div>

					{error && (
						<div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
							{error}
						</div>
					)}

					<Button
						type="submit"
						className="w-full"
						size="lg"
						disabled={isLoading || !isFormValid}
					>
						{isLoading ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
								Redefinindo...
							</>
						) : (
							<>
								<CheckCircle2 className="mr-2 h-4 w-4" />
								Redefinir senha
							</>
						)}
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	)
}

