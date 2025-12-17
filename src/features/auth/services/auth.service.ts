import { apiClient } from '@/shared/lib/api-client'
import { tokenStorage } from '@/shared/lib/token-storage'
import type {
	LoginDto,
	RegisterDto,
	VerifyEmailDto,
	ForgotPasswordDto,
	ResetPasswordDto,
	GoogleLoginDto,
	AppleLoginDto,
	RefreshTokenDto,
	AuthResponseDto,
} from '@/shared/types'

class AuthService {
	private readonly basePath = '/v1/auth'

	/**
	 * Registra um novo usuário
	 */
	async register(data: RegisterDto): Promise<AuthResponseDto> {
		const response = await apiClient.post<AuthResponseDto>(
			`${this.basePath}/register`,
			data
		)

		// Salvar tokens se recebidos
		if (response.data.accessToken && response.data.refreshToken) {
			tokenStorage.saveTokens({
				accessToken: response.data.accessToken,
				refreshToken: response.data.refreshToken,
			})
		}

		return response.data
	}

	/**
	 * Verifica o email do usuário com código de 6 dígitos
	 */
	async verifyEmail(data: VerifyEmailDto): Promise<void> {
		await apiClient.post(`${this.basePath}/verify-email`, data)
	}

	/**
	 * Reenvia código de verificação de email
	 */
	async resendVerification(email: string): Promise<void> {
		await apiClient.post(`${this.basePath}/resend-verification`, { email })
	}

	/**
	 * Login com email e senha
	 */
	async login(data: LoginDto): Promise<AuthResponseDto> {
		const response = await apiClient.post<AuthResponseDto>(
			`${this.basePath}/login`,
			data
		)

		// Salvar tokens
		tokenStorage.saveTokens({
			accessToken: response.data.accessToken,
			refreshToken: response.data.refreshToken,
		})

		return response.data
	}

	/**
	 * Login com Google
	 */
	async googleLogin(token: string): Promise<AuthResponseDto> {
		const data: GoogleLoginDto = { token }
		const response = await apiClient.post<AuthResponseDto>(
			`${this.basePath}/google`,
			data
		)

		// Salvar tokens
		tokenStorage.saveTokens({
			accessToken: response.data.accessToken,
			refreshToken: response.data.refreshToken,
		})

		return response.data
	}

	/**
	 * Login com Apple
	 */
	async appleLogin(token: string): Promise<AuthResponseDto> {
		const data: AppleLoginDto = { token }
		const response = await apiClient.post<AuthResponseDto>(
			`${this.basePath}/apple`,
			data
		)

		// Salvar tokens
		tokenStorage.saveTokens({
			accessToken: response.data.accessToken,
			refreshToken: response.data.refreshToken,
		})

		return response.data
	}

	/**
	 * Solicita redefinição de senha
	 */
	async forgotPassword(email: string): Promise<void> {
		const data: ForgotPasswordDto = { email }
		await apiClient.post(`${this.basePath}/forgot-password`, data)
	}

	/**
	 * Redefine a senha com código de verificação
	 */
	async resetPassword(data: ResetPasswordDto): Promise<void> {
		await apiClient.post(`${this.basePath}/reset-password`, data)
	}

	/**
	 * Atualiza o access token usando o refresh token
	 */
	async refreshToken(refreshToken: string): Promise<AuthResponseDto> {
		const data: RefreshTokenDto = { refreshToken }
		const response = await apiClient.post<AuthResponseDto>(
			`${this.basePath}/refresh`,
			data
		)

		// Salvar novos tokens
		tokenStorage.saveTokens({
			accessToken: response.data.accessToken,
			refreshToken: response.data.refreshToken,
		})

		return response.data
	}

	/**
	 * Logout (limpa tokens localmente)
	 */
	async logout(): Promise<void> {
		tokenStorage.clearTokens()
		// Opcional: chamar endpoint de logout no backend
		// await apiClient.post(`${this.basePath}/logout`)
	}
}

export const authService = new AuthService()

