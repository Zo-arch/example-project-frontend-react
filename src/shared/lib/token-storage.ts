const ACCESS_TOKEN_KEY = 'accessToken'
const REFRESH_TOKEN_KEY = 'refreshToken'
const TOKEN_EXPIRES_AT_KEY = 'tokenExpiresAt'

interface TokenData {
	accessToken: string
	refreshToken: string
	expiresAt?: number
}

export const tokenStorage = {
	/**
	 * Salva os tokens no localStorage
	 */
	saveTokens(data: TokenData): void {
		localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken)
		localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken)
		if (data.expiresAt) {
			localStorage.setItem(TOKEN_EXPIRES_AT_KEY, data.expiresAt.toString())
		}
	},

	/**
	 * Obtém o access token
	 */
	getAccessToken(): string | null {
		return localStorage.getItem(ACCESS_TOKEN_KEY)
	},

	/**
	 * Obtém o refresh token
	 */
	getRefreshToken(): string | null {
		return localStorage.getItem(REFRESH_TOKEN_KEY)
	},

	/**
	 * Obtém a data de expiração do token
	 */
	getExpiresAt(): number | null {
		const expiresAt = localStorage.getItem(TOKEN_EXPIRES_AT_KEY)
		return expiresAt ? parseInt(expiresAt, 10) : null
	},

	/**
	 * Verifica se o token está expirado
	 */
	isTokenExpired(): boolean {
		const expiresAt = this.getExpiresAt()
		if (!expiresAt) return true
		return Date.now() >= expiresAt
	},

	/**
	 * Remove todos os tokens
	 */
	clearTokens(): void {
		localStorage.removeItem(ACCESS_TOKEN_KEY)
		localStorage.removeItem(REFRESH_TOKEN_KEY)
		localStorage.removeItem(TOKEN_EXPIRES_AT_KEY)
	},

	/**
	 * Verifica se há tokens salvos
	 */
	hasTokens(): boolean {
		return !!this.getAccessToken() && !!this.getRefreshToken()
	},
}

