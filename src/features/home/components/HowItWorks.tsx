import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card'
import { Badge } from '@/shared/ui/badge'
import { UserPlus, Settings, Rocket } from 'lucide-react'

const steps = [
	{
		icon: UserPlus,
		number: '01',
		title: 'Crie sua conta',
		description: 'Cadastre-se em segundos com apenas seu email. Sem necessidade de cartão de crédito.',
	},
	{
		icon: Settings,
		number: '02',
		title: 'Configure seu projeto',
		description: 'Personalize as configurações de acordo com suas necessidades. Interface intuitiva e fácil de usar.',
	},
	{
		icon: Rocket,
		number: '03',
		title: 'Comece a usar',
		description: 'Pronto! Você já pode começar a usar todas as funcionalidades e ver resultados imediatos.',
	},
]

export function HowItWorks() {
	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<Badge variant="outline" className="mb-4">
						Como funciona
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
						Como começar em{' '}
						<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
							3 passos simples
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Explique como começar a usar o produto em 3 passos simples
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{steps.map((step, index) => {
						const Icon = step.icon
						return (
							<Card key={index} className="border-2 text-center relative">
								<CardHeader>
									<div className="flex justify-center mb-4">
										<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
											<Icon className="h-8 w-8 text-primary" />
										</div>
									</div>
									<div className="absolute top-4 right-4 text-6xl font-bold text-muted/20">
										{step.number}
									</div>
									<CardTitle className="text-xl">{step.title}</CardTitle>
									<CardDescription className="text-base">
										{step.description}
									</CardDescription>
								</CardHeader>
							</Card>
						)
					})}
				</div>
			</div>
		</section>
	)
}

