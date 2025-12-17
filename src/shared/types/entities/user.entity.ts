import type { AuthProvider } from '../enums/auth-provider.enum'
import type { UserRole } from '../enums/user-role.enum'

export interface User {
	email: string
	nome: string
	password?: string
	roles: UserRole[]
	refreshToken?: string
	passwordResetExpires?: Date
	ativo: boolean
	emailVerified: boolean
	emailVerificationCode?: string
	emailVerificationExpires?: Date
	passwordResetCode?: string
	provider: AuthProvider
	providerId?: string
}

