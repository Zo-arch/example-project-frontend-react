import { GoogleOAuthProvider } from '@react-oauth/google'
import { RouterProvider } from './providers/RouterProvider'
import { Toaster } from '@/shared/ui/toaster'

function App() {
	const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

	return (
		<GoogleOAuthProvider clientId={googleClientId || ''}>
			<RouterProvider />
			<Toaster />
		</GoogleOAuthProvider>
	)
}

export default App