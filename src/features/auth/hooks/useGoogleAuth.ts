import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/auth.store'
import { authService } from '../services/auth.service'
import { ROUTES } from '@/shared/constants/routes'
import { getErrorMessage } from '@/shared/lib/error-handler'
import { toast } from '@/shared/ui/use-toast'

export function useGoogleAuth() {
	const navigate = useNavigate()
	const { setUser, setTokens, setLoading, isLoading } = useAuthStore()

	/**
	 * Processa o login com Google após obter o id_token (credential)
	 * @param credential - ID Token JWT do Google (começa com eyJ...)
	 */
	const handleGoogleLogin = useCallback(
		async (credential: string) => {
			setLoading(true)
			try {
				// Enviar o id_token (credential) para o backend
				const response = await authService.googleLogin(credential)
				setUser(response.user)
				setTokens(response.accessToken, response.refreshToken)
				toast({
					title: 'Login realizado com sucesso!',
					description: 'Bem-vindo de volta!',
				})
				navigate(ROUTES.home)
				return response
			} catch (error) {
				toast({
					title: 'Erro ao fazer login com Google',
					description: getErrorMessage(error),
					variant: 'destructive',
				})
				throw error
			} finally {
				setLoading(false)
			}
		},
		[setUser, setTokens, setLoading, navigate]
	)

	/**
	 * Callback para quando o Google Login for bem-sucedido
	 * Recebe o credential (id_token) do componente GoogleLogin
	 */
	const onGoogleSuccess = useCallback(
		(credentialResponse: { credential: string }) => {
			if (credentialResponse.credential) {
				// credential é o id_token (JWT) que o backend espera
				handleGoogleLogin(credentialResponse.credential)
			}
		},
		[handleGoogleLogin]
	)

	/**
	 * Callback para quando ocorrer erro no Google Login
	 */
	const onGoogleError = useCallback(() => {
		// Usuário cancelou ou ocorreu erro
		// Não mostrar erro se o usuário apenas cancelou
		setLoading(false)
	}, [setLoading])

	return {
		onGoogleSuccess,
		onGoogleError,
		isLoading,
	}
}

