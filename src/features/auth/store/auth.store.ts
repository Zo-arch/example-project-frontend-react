import { create } from 'zustand'
import type { UserResponseDto } from '@/shared/types'
import { tokenStorage } from '@/shared/lib/token-storage'

interface AuthState {
	user: UserResponseDto | null
	isAuthenticated: boolean
	isLoading: boolean
	accessToken: string | null
	refreshToken: string | null

	// Actions
	setUser: (user: UserResponseDto | null) => void
	setTokens: (accessToken: string, refreshToken: string) => void
	clearAuth: () => void
	checkAuth: () => void
	setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
	// Initial state
	user: null,
	isAuthenticated: false,
	isLoading: false,
	accessToken: null,
	refreshToken: null,

	// Actions
	setUser: (user) =>
		set({
			user,
			isAuthenticated: !!user,
		}),

	setTokens: (accessToken, refreshToken) => {
		tokenStorage.saveTokens({ accessToken, refreshToken })
		set({
			accessToken,
			refreshToken,
		})
	},

	clearAuth: () => {
		tokenStorage.clearTokens()
		set({
			user: null,
			isAuthenticated: false,
			accessToken: null,
			refreshToken: null,
		})
	},

	checkAuth: () => {
		const accessToken = tokenStorage.getAccessToken()
		const refreshToken = tokenStorage.getRefreshToken()

		set({
			accessToken,
			refreshToken,
			isAuthenticated: !!(accessToken && refreshToken),
		})
	},

	setLoading: (isLoading) => set({ isLoading }),
}))

