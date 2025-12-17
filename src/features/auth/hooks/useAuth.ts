import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/auth.store'
import { authService } from '../services/auth.service'
import type {
	LoginDto,
	RegisterDto,
	VerifyEmailDto,
	ResetPasswordDto,
} from '@/shared/types'
import { ROUTES } from '@/shared/constants/routes'

export function useAuth() {
	const navigate = useNavigate()
	const {
		user,
		isAuthenticated,
		isLoading,
		setUser,
		setTokens,
		clearAuth,
		checkAuth,
		setLoading,
	} = useAuthStore()

	/**
	 * Login com email e senha
	 */
	const login = useCallback(
		async (data: LoginDto) => {
			setLoading(true)
			try {
				const response = await authService.login(data)
				setUser(response.user)
				setTokens(response.accessToken, response.refreshToken)
				return response
			} catch (error) {
				throw error
			} finally {
				setLoading(false)
			}
		},
		[setUser, setTokens, setLoading]
	)

	/**
	 * Registro de novo usuário
	 */
	const register = useCallback(
		async (data: RegisterDto) => {
			setLoading(true)
			try {
				const response = await authService.register(data)
				// Não definir como autenticado ainda, pois email não está verificado
				setTokens(response.accessToken, response.refreshToken)
				return response
			} catch (error) {
				throw error
			} finally {
				setLoading(false)
			}
		},
		[setTokens, setLoading]
	)

	/**
	 * Verifica email com código
	 */
	const verifyEmail = useCallback(
		async (data: VerifyEmailDto) => {
			setLoading(true)
			try {
				await authService.verifyEmail(data)
				// Após verificação, buscar dados atualizados do usuário
				// Por enquanto, apenas marcar como autenticado
				checkAuth()
			} catch (error) {
				throw error
			} finally {
				setLoading(false)
			}
		},
		[checkAuth, setLoading]
	)

	/**
	 * Reenvia código de verificação
	 */
	const resendVerification = useCallback(
		async (email: string) => {
			setLoading(true)
			try {
				await authService.resendVerification(email)
			} catch (error) {
				throw error
			} finally {
				setLoading(false)
			}
		},
		[setLoading]
	)

	/**
	 * Solicita redefinição de senha
	 */
	const forgotPassword = useCallback(
		async (email: string) => {
			setLoading(true)
			try {
				await authService.forgotPassword(email)
			} catch (error) {
				throw error
			} finally {
				setLoading(false)
			}
		},
		[setLoading]
	)

	/**
	 * Redefine senha
	 */
	const resetPassword = useCallback(
		async (data: ResetPasswordDto) => {
			setLoading(true)
			try {
				await authService.resetPassword(data)
			} catch (error) {
				throw error
			} finally {
				setLoading(false)
			}
		},
		[setLoading]
	)

	/**
	 * Logout
	 */
	const logout = useCallback(async () => {
		setLoading(true)
		try {
			await authService.logout()
			clearAuth()
			navigate(ROUTES.login)
		} catch (error) {
			// Mesmo se der erro, limpar localmente
			clearAuth()
			navigate(ROUTES.login)
		} finally {
			setLoading(false)
		}
	}, [clearAuth, navigate, setLoading])

	/**
	 * Verifica autenticação ao carregar
	 */
	const initializeAuth = useCallback(() => {
		checkAuth()
	}, [checkAuth])

	return {
		user,
		isAuthenticated,
		isLoading,
		login,
		register,
		verifyEmail,
		resendVerification,
		forgotPassword,
		resetPassword,
		logout,
		initializeAuth,
	}
}

