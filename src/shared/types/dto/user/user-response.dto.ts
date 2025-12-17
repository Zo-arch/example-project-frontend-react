import type { AuthProvider } from '../../enums/auth-provider.enum'
import type { UserRole } from '../../enums/user-role.enum'

export interface UserResponseDto {
	id: number
	email: string
	nome: string
	roles: UserRole[]
	ativo: boolean
	emailVerified: boolean
	provider: AuthProvider
	providerId?: string
	version: number
	createdDate: Date
	lastModifiedDate: Date
}

