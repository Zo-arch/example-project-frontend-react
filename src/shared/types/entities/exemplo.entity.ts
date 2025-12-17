import type { ExemploEnum } from '../enums/exemplo.enum'

export interface Exemplo {
	enumType: ExemploEnum
	descricao: string
	valor: number
	dataExemplo: Date
	ativo: boolean
}

