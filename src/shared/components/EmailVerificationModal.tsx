import { useState, useRef, useEffect } from 'react'
import { Mail, RefreshCw, CheckCircle2, XCircle } from 'lucide-react'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/shared/ui/dialog'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { cn } from '@/shared/lib/utils'

export interface EmailVerificationModalProps {
	open: boolean
	onOpenChange: (open: boolean) => void
	email: string
	title?: string
	description?: string
	onVerify: (code: string) => void | Promise<void>
	onResend?: () => void | Promise<void>
	isLoading?: boolean
}

export function EmailVerificationModal({
	open,
	onOpenChange,
	email,
	title = 'Verificar email',
	description,
	onVerify,
	onResend,
	isLoading = false,
}: EmailVerificationModalProps) {
	const [codes, setCodes] = useState<string[]>(['', '', '', '', '', ''])
	const [error, setError] = useState<string>('')
	const [isResending, setIsResending] = useState(false)
	const inputRefs = useRef<(HTMLInputElement | null)[]>([])

	const defaultDescription = `Enviamos um código de 6 dígitos para ${email}. Por favor, insira o código abaixo para continuar.`

	useEffect(() => {
		if (open) {
			// Reset codes when modal opens
			setCodes(['', '', '', '', '', ''])
			setError('')
			// Focus first input after a short delay
			setTimeout(() => {
				inputRefs.current[0]?.focus()
			}, 100)
		}
	}, [open])

	const handleCodeChange = (index: number, value: string) => {
		// Only allow numbers
		if (value && !/^\d$/.test(value)) {
			return
		}

		const newCodes = [...codes]
		newCodes[index] = value
		setCodes(newCodes)
		setError('')

		// Auto-focus next input
		if (value && index < 5) {
			inputRefs.current[index + 1]?.focus()
		}

		// Auto-submit when all 6 digits are filled
		if (newCodes.every((code) => code !== '') && index === 5) {
			handleVerify(newCodes.join(''))
		}
	}

	const handleKeyDown = (
		index: number,
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		// Handle backspace
		if (e.key === 'Backspace' && !codes[index] && index > 0) {
			inputRefs.current[index - 1]?.focus()
		}

		// Handle paste
		if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
			e.preventDefault()
			navigator.clipboard.readText().then((text) => {
				const digits = text.replace(/\D/g, '').slice(0, 6)
				if (digits.length === 6) {
					const newCodes = digits.split('')
					setCodes(newCodes)
					setError('')
					inputRefs.current[5]?.focus()
					// Auto-submit
					setTimeout(() => {
						handleVerify(digits)
					}, 100)
				}
			})
		}
	}

	const handleVerify = async (code?: string) => {
		const verificationCode = code || codes.join('')

		if (verificationCode.length !== 6) {
			setError('Por favor, insira o código completo de 6 dígitos')
			return
		}

		if (!/^\d{6}$/.test(verificationCode)) {
			setError('O código deve conter apenas números')
			return
		}

		setError('')
		try {
			await onVerify(verificationCode)
		} catch (err) {
			setError(
				err instanceof Error ? err.message : 'Código inválido. Tente novamente.'
			)
			// Clear codes on error
			setCodes(['', '', '', '', '', ''])
			inputRefs.current[0]?.focus()
		}
	}

	const handleResend = async () => {
		if (!onResend) return

		setIsResending(true)
		setError('')
		try {
			await onResend()
		} catch (err) {
			setError(
				err instanceof Error
					? err.message
					: 'Erro ao reenviar código. Tente novamente.'
			)
		} finally {
			setIsResending(false)
		}
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
						<Mail className="h-8 w-8 text-primary" />
					</div>
					<DialogTitle className="text-center text-2xl">
						{title}
					</DialogTitle>
					<DialogDescription className="text-center">
						{description || defaultDescription}
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-6 py-4">
					{/* Code Inputs */}
					<div className="flex justify-center gap-2">
						{codes.map((code, index) => (
							<Input
								key={index}
								ref={(el) => {
									inputRefs.current[index] = el
								}}
								type="text"
								inputMode="numeric"
								maxLength={1}
								value={code}
								onChange={(e) => handleCodeChange(index, e.target.value)}
								onKeyDown={(e) => handleKeyDown(index, e)}
								className={cn(
									'h-14 w-14 text-center text-2xl font-bold transition-all',
									error
										? 'border-destructive focus-visible:ring-destructive'
										: 'border-input focus-visible:ring-ring',
									code && !error && 'border-primary'
								)}
								disabled={isLoading}
								autoComplete="off"
							/>
						))}
					</div>

					{/* Error Message */}
					{error && (
						<div className="flex items-center justify-center gap-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
							<XCircle className="h-4 w-4" />
							<span>{error}</span>
						</div>
					)}

					{/* Verify Button */}
					<Button
						onClick={() => handleVerify()}
						className="w-full"
						size="lg"
						disabled={isLoading || codes.some((code) => !code)}
					>
						{isLoading ? (
							<>
								<RefreshCw className="mr-2 h-4 w-4 animate-spin" />
								Verificando...
							</>
						) : (
							<>
								<CheckCircle2 className="mr-2 h-4 w-4" />
								Verificar código
							</>
						)}
					</Button>

					{/* Resend Code */}
					{onResend && (
						<div className="text-center">
							<p className="text-sm text-muted-foreground">
								Não recebeu o código?{' '}
								<button
									type="button"
									onClick={handleResend}
									disabled={isResending || isLoading}
									className="font-medium text-primary hover:underline disabled:opacity-50"
								>
									{isResending ? (
										<>
											<RefreshCw className="mr-1 inline h-3 w-3 animate-spin" />
											Reenviando...
										</>
									) : (
										'Reenviar código'
									)}
								</button>
							</p>
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	)
}

