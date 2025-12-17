import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/constants/routes'
import { ForgotPasswordModal } from '@/shared/components/ForgotPasswordModal'
import { EmailVerificationModal } from '@/shared/components/EmailVerificationModal'
import { ResetPasswordModal } from '@/shared/components/ResetPasswordModal'
import { useAuth } from '../hooks/useAuth'
import { getErrorMessage } from '@/shared/lib/error-handler'
import { toast } from '@/shared/ui/use-toast'

type FlowStep = 'email' | 'verification' | 'reset'

export function ForgotPasswordPage() {
	const navigate = useNavigate()
	const { forgotPassword, resetPassword, isLoading } = useAuth()
	const [currentStep, setCurrentStep] = useState<FlowStep>('email')
	const [email, setEmail] = useState('')
	const [verificationCode, setVerificationCode] = useState('')

	const handleEmailSubmit = async (submittedEmail: string) => {
		try {
			await forgotPassword(submittedEmail)
			setEmail(submittedEmail)
			toast({
				title: 'Código enviado!',
				description: 'Verifique seu email para o código de redefinição.',
			})
			setCurrentStep('verification')
		} catch (error) {
			toast({
				title: 'Erro ao enviar código',
				description: getErrorMessage(error),
				variant: 'destructive',
			})
			throw error
		}
	}

	const handleCodeVerify = async (code: string) => {
		try {
			// Salvar código para usar no reset
			setVerificationCode(code)
			// Transição para modal de reset
			setTimeout(() => {
				setCurrentStep('reset')
			}, 400) // Delay para animação
		} catch (error) {
			throw error
		}
	}

	const handleCodeResend = async () => {
		try {
			await forgotPassword(email)
			toast({
				title: 'Código reenviado',
				description: 'Verifique seu email para o novo código.',
			})
		} catch (error) {
			toast({
				title: 'Erro ao reenviar código',
				description: getErrorMessage(error),
				variant: 'destructive',
			})
		}
	}

	const handlePasswordReset = async (newPassword: string) => {
		try {
			await resetPassword({
				email,
				code: verificationCode,
				newPassword,
			})
			toast({
				title: 'Senha redefinida!',
				description: 'Sua senha foi alterada com sucesso.',
			})
			// Redirecionar para login após sucesso
			navigate(ROUTES.login)
		} catch (error) {
			toast({
				title: 'Erro ao redefinir senha',
				description: getErrorMessage(error),
				variant: 'destructive',
			})
			throw error
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
			{/* Grid pattern background */}
			<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

			{/* Modal de Solicitar Email */}
			<ForgotPasswordModal
				open={currentStep === 'email'}
				onOpenChange={(open) => {
					if (!open) navigate(ROUTES.login)
				}}
				onSubmit={handleEmailSubmit}
				isLoading={isLoading}
			/>

			{/* Modal de Verificação de Código */}
			<EmailVerificationModal
				open={currentStep === 'verification'}
				onOpenChange={(open) => {
					if (!open) navigate(ROUTES.login)
				}}
				email={email}
				title="Verificar código"
				description={`Enviamos um código de 6 dígitos para ${email}. Por favor, insira o código abaixo para continuar.`}
				onVerify={handleCodeVerify}
				onResend={handleCodeResend}
				isLoading={false}
			/>

			{/* Modal de Redefinir Senha */}
			<ResetPasswordModal
				open={currentStep === 'reset'}
				onOpenChange={(open) => {
					if (!open) navigate(ROUTES.login)
				}}
				onReset={handlePasswordReset}
				isLoading={isLoading}
			/>
		</div>
	)
}

