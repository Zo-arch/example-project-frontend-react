import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthStore } from '@/features/auth/store/auth.store'
import { ROUTES } from '@/shared/constants/routes'

interface ProtectedRouteProps {
	children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
	const { isAuthenticated, isLoading, checkAuth } = useAuthStore()

	// Verificar autenticação ao montar
	useEffect(() => {
		checkAuth()
	}, [checkAuth])

	// Mostrar loading durante verificação
	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
			</div>
		)
	}

	// Redirecionar para login se não autenticado
	if (!isAuthenticated) {
		return <Navigate to={ROUTES.login} replace />
	}

	return <>{children}</>
}

