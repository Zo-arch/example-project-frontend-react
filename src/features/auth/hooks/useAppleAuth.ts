import { useCallback } from 'react'
import { useAuthStore } from '../store/auth.store'
import { authService } from '../services/auth.service'

export function useAppleAuth() {
	const { setUser, setTokens, setLoading } = useAuthStore()

	/**
	 * Login com Apple
	 * @param token - Token do Apple Sign-In
	 */
	const loginWithApple = useCallback(
		async (token: string) => {
			setLoading(true)
			try {
				const response = await authService.appleLogin(token)
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

	return {
		loginWithApple,
	}
}

