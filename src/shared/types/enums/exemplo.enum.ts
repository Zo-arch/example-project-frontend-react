export const ExemploEnum = {
	TIPO_A: 'Tipo A',
	TIPO_B: 'Tipo B',
	TIPO_C: 'Tipo C',
} as const

export type ExemploEnum = typeof ExemploEnum[keyof typeof ExemploEnum]

