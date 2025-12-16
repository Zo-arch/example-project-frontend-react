import { Card, CardContent } from '@/shared/ui/card'
import { TrendingUp, Users, Globe, Zap } from 'lucide-react'

const stats = [
	{
		icon: Users,
		value: '10K+',
		label: 'Usuários Ativos',
		description: 'Crescendo todos os dias',
	},
	{
		icon: Globe,
		value: '50+',
		label: 'Países',
		description: 'Alcance global',
	},
	{
		icon: Zap,
		value: '99.9%',
		label: 'Uptime',
		description: 'Disponibilidade garantida',
	},
	{
		icon: TrendingUp,
		value: '500%',
		label: 'Crescimento',
		description: 'No último ano',
	},
]

export function Stats() {
	return (
		<section className="py-24 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{stats.map((stat, index) => {
						const Icon = stat.icon
						return (
							<Card key={index} className="border-2 text-center">
								<CardContent className="pt-6">
									<div className="flex justify-center mb-4">
										<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
											<Icon className="h-6 w-6 text-primary" />
										</div>
									</div>
									<div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
										{stat.value}
									</div>
									<div className="text-lg font-semibold mb-1">{stat.label}</div>
									<div className="text-sm text-muted-foreground">{stat.description}</div>
								</CardContent>
							</Card>
						)
					})}
				</div>
			</div>
		</section>
	)
}

