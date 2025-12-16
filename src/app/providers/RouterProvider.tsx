import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '@/features/home'
import { LoginPage, RegisterPage } from '@/features/auth'
import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { ROUTES } from '@/shared/constants/routes'

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-1">{children}</main>
			<Footer />
		</div>
	)
}

export function RouterProvider() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Public routes with layout */}
				<Route
					path={ROUTES.home}
					element={
						<Layout>
							<HomePage />
						</Layout>
					}
				/>

				{/* Auth routes without layout */}
				<Route path={ROUTES.login} element={<LoginPage />} />
				<Route path={ROUTES.register} element={<RegisterPage />} />

				{/* 404 - Redirect to home */}
				<Route path="*" element={<Navigate to={ROUTES.home} replace />} />
			</Routes>
		</BrowserRouter>
	)
}

