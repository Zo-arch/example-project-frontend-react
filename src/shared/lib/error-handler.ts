import type { AxiosError } from 'axios'

export interface ApiError {
	message: string
	status?: number
	code?: string
}

/**
 * Extrai mensagem de erro amigável da resposta da API
 */
export function getErrorMessage(error: unknown): string {
	if (error instanceof Error) {
		// Erro do Axios
		const axiosError = error as AxiosError<{ message?: string; error?: string }>

		if (axiosError.response) {
			const { data, status } = axiosError.response

			// Mensagem do backend
			if (data?.message) {
				return data.message
			}

			if (data?.error) {
				return data.error
			}

			// Mensagens padrão por status
			switch (status) {
				case 400:
					return 'Dados inválidos. Verifique as informações e tente novamente.'
				case 401:
					return 'Não autorizado. Faça login novamente.'
				case 403:
					return 'Acesso negado. Você não tem permissão para esta ação.'
				case 404:
					return 'Recurso não encontrado.'
				case 409:
					return 'Conflito. Este recurso já existe.'
				case 422:
					return 'Dados inválidos. Verifique as informações fornecidas.'
				case 500:
					return 'Erro interno do servidor. Tente novamente mais tarde.'
				default:
					return 'Ocorreu um erro. Tente novamente.'
			}
		}

		// Erro de rede
		if (axiosError.request) {
			return 'Erro de conexão. Verifique sua internet e tente novamente.'
		}

		// Outro erro
		return error.message || 'Ocorreu um erro inesperado.'
	}

	// Erro desconhecido
	return 'Ocorreu um erro inesperado. Tente novamente.'
}

/**
 * Extrai objeto de erro estruturado
 */
export function getApiError(error: unknown): ApiError {
	const message = getErrorMessage(error)
	const axiosError = error as AxiosError

	return {
		message,
		status: axiosError.response?.status,
		code: axiosError.code,
	}
}

