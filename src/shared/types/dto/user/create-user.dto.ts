import type { AuthProvider } from '../../enums/auth-provider.enum'
import type { UserRole } from '../../enums/user-role.enum'

export interface CreateUserDto {
	email: string
	nome: string
	password?: string
	roles?: UserRole[]
	provider?: AuthProvider
	providerId?: string
}

