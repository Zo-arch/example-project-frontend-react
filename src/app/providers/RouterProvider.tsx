import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '@/features/home'
import { LoginPage, RegisterPage } from '@/features/auth'
import { ForgotPasswordPage } from '@/features/auth/components/ForgotPasswordPage'
import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { Error404Page } from '@/shared/pages/Error404Page'
import { Error403Page } from '@/shared/pages/Error403Page'
import { Error500Page } from '@/shared/pages/Error500Page'
import { MaintenancePage } from '@/shared/pages/MaintenancePage'
import { OfflinePage } from '@/shared/pages/OfflinePage'
import { TermsOfServicePage } from '@/shared/pages/TermsOfServicePage'
import { PrivacyPolicyPage } from '@/shared/pages/PrivacyPolicyPage'
import { AboutPage } from '@/shared/pages/AboutPage'
import { ContactPage } from '@/shared/pages/ContactPage'
import { HelpCenterPage } from '@/shared/pages/HelpCenterPage'
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
				<Route
					path={ROUTES.terms}
					element={
						<Layout>
							<TermsOfServicePage />
						</Layout>
					}
				/>
				<Route
					path={ROUTES.privacy}
					element={
						<Layout>
							<PrivacyPolicyPage />
						</Layout>
					}
				/>
				<Route
					path={ROUTES.about}
					element={
						<Layout>
							<AboutPage />
						</Layout>
					}
				/>
				<Route
					path={ROUTES.contact}
					element={
						<Layout>
							<ContactPage />
						</Layout>
					}
				/>
				<Route
					path={ROUTES.help}
					element={
						<Layout>
							<HelpCenterPage />
						</Layout>
					}
				/>

				{/* Auth routes without layout */}
				<Route path={ROUTES.login} element={<LoginPage />} />
				<Route path={ROUTES.register} element={<RegisterPage />} />
				<Route
					path={ROUTES.forgotPassword}
					element={<ForgotPasswordPage />}
				/>

				{/* Error pages without layout */}
				<Route path={ROUTES.error404} element={<Error404Page />} />
				<Route path={ROUTES.error403} element={<Error403Page />} />
				<Route path={ROUTES.error500} element={<Error500Page />} />
				<Route path={ROUTES.maintenance} element={<MaintenancePage />} />
				<Route path={ROUTES.offline} element={<OfflinePage />} />

				{/* 404 - Catch all */}
				<Route path="*" element={<Error404Page />} />
			</Routes>
		</BrowserRouter>
	)
}

