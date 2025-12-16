import { Card, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card'
import { Badge } from '@/shared/ui/badge'
import {
	Zap,
	Shield,
	Rocket,
	BarChart3,
	Users,
	Globe,
	Lock,
	Sparkles,
	TrendingUp
} from 'lucide-react'

const features = [
	{
		icon: Zap,
		title: 'Performance Rápida',
		description: 'Construído com as melhores tecnologias para garantir velocidade e eficiência máxima.',
	},
	{
		icon: Shield,
		title: 'Segurança Total',
		description: 'Proteção de dados de nível empresarial com criptografia end-to-end.',
	},
	{
		icon: Rocket,
		title: 'Escalável',
		description: 'Cresça sem limites. Nossa infraestrutura escala automaticamente com seu negócio.',
	},
	{
		icon: BarChart3,
		title: 'Analytics Avançado',
		description: 'Dashboards poderosos com insights em tempo real sobre seu negócio.',
	},
	{
		icon: Users,
		title: 'Colaboração em Equipe',
		description: 'Ferramentas de colaboração que mantêm sua equipe sincronizada e produtiva.',
	},
	{
		icon: Globe,
		title: 'Multi-idioma',
		description: 'Suporte completo para múltiplos idiomas e localizações globais.',
	},
	{
		icon: Lock,
		title: 'Privacidade Garantida',
		description: 'Controle total sobre seus dados com políticas de privacidade transparentes.',
	},
	{
		icon: Sparkles,
		title: 'Interface Moderna',
		description: 'Design elegante e intuitivo que seus usuários vão adorar usar.',
	},
	{
		icon: TrendingUp,
		title: 'Crescimento Contínuo',
		description: 'Atualizações regulares com novas funcionalidades e melhorias constantes.',
	},
]

export function Features() {
	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<Badge variant="outline" className="mb-4">
						Funcionalidades
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
						Tudo que você precisa para{' '}
						<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
							sucesso
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Ferramentas poderosas projetadas para ajudar seu negócio a crescer
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{features.map((feature, index) => {
						const Icon = feature.icon
						return (
							<Card key={index} className="border-2 hover:border-primary/50 transition-colors group">
								<CardHeader>
									<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
										<Icon className="h-6 w-6 text-primary" />
									</div>
									<CardTitle className="text-xl">{feature.title}</CardTitle>
									<CardDescription className="text-base">
										{feature.description}
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

