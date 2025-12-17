export interface BaseQueryDto {
	page?: number
	size?: number
	sortBy?: string
	sortDirection?: 'asc' | 'desc'
}

