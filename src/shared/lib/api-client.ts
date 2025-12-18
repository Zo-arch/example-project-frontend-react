import axios, {
	type AxiosInstance,
	type AxiosError,
	type InternalAxiosRequestConfig,
} from 'axios'
import { tokenStorage } from './token-storage'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

// Criar instância do Axios
export const apiClient: AxiosInstance = axios.create({
	baseURL: API_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
})

// Flag para evitar loop infinito no refresh token
let isRefreshing = false
let failedQueue: Array<{
	resolve: (value?: unknown) => void
	reject: (error?: unknown) => void
}> = []

const processQueue = (error: AxiosError | null, token: string | null = null) => {
	failedQueue.forEach((prom) => {
		if (error) {
			prom.reject(error)
		} else {
			prom.resolve(token)
		}
	})

	failedQueue = []
}

// Interceptor de requisição: adiciona token automaticamente
apiClient.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const token = tokenStorage.getAccessToken()

		if (token && config.headers) {
			config.headers.Authorization = `Bearer ${token}`
		}

		return config
	},
	(error: AxiosError) => {
		return Promise.reject(error)
	}
)

// Interceptor de resposta: trata erros e refresh token
apiClient.interceptors.response.use(
	(response) => {
		return response
	},
	async (error: AxiosError) => {
		const originalRequest = error.config as InternalAxiosRequestConfig & {
			_retry?: boolean
		}

		// Se for erro 401 e não for uma tentativa de refresh
		if (error.response?.status === 401 && !originalRequest._retry) {
			if (isRefreshing) {
				// Se já está fazendo refresh, adiciona à fila
				return new Promise((resolve, reject) => {
					failedQueue.push({ resolve, reject })
				})
					.then((token) => {
						if (originalRequest.headers && token) {
							originalRequest.headers.Authorization = `Bearer ${token}`
						}
						return apiClient(originalRequest)
					})
					.catch((err) => {
						return Promise.reject(err)
					})
			}

			originalRequest._retry = true
			isRefreshing = true

			const refreshToken = tokenStorage.getRefreshToken()

			if (!refreshToken) {
				// Não há refresh token, limpar e redirecionar para login
				tokenStorage.clearTokens()
				processQueue(error, null)
				isRefreshing = false
				// Redirecionar para login será feito pelo componente
				return Promise.reject(error)
			}

			try {
				// Tentar fazer refresh do token
				const response = await axios.post(
					`${API_URL}/v1/auth/refresh`,
					{ refreshToken },
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)

				const { accessToken, refreshToken: newRefreshToken } = response.data

				// Salvar novos tokens
				tokenStorage.saveTokens({
					accessToken,
					refreshToken: newRefreshToken,
				})

				// Processar fila de requisições pendentes
				processQueue(null, accessToken)

				// Retentar requisição original
				if (originalRequest.headers) {
					originalRequest.headers.Authorization = `Bearer ${accessToken}`
				}

				isRefreshing = false
				return apiClient(originalRequest)
			} catch (refreshError) {
				// Refresh falhou, limpar tokens e redirecionar
				tokenStorage.clearTokens()
				processQueue(refreshError as AxiosError, null)
				isRefreshing = false
				return Promise.reject(refreshError)
			}
		}

		// Para outros erros, apenas rejeitar
		return Promise.reject(error)
	}
)

export default apiClient

