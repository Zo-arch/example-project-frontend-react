import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card'
import { Button } from '@/shared/ui/button'
import { Badge } from '@/shared/ui/badge'
import { Check } from 'lucide-react'

const plans = [
	{
		name: 'Starter',
		price: '$100',
		period: '/mês',
		description: 'Perfeito para começar',
		features: [
			'Até 5 projetos',
			'10GB de armazenamento',
			'Suporte por email',
			'Atualizações regulares',
			'Documentação completa',
		],
		cta: 'Começar Agora',
		popular: false,
	},
	{
		name: 'Pro',
		price: '$200',
		period: '/mês',
		description: 'Mais popular',
		features: [
			'Tudo do Starter',
			'Projetos ilimitados',
			'100GB de armazenamento',
			'Suporte prioritário',
			'Integrações avançadas',
			'Analytics avançado',
		],
		cta: 'Começar Agora',
		popular: true,
	},
	{
		name: 'Advanced',
		price: '$300',
		period: '/mês',
		description: 'Para empresas',
		features: [
			'Tudo do Pro',
			'Equipe ilimitada',
			'Armazenamento ilimitado',
			'Suporte 24/7',
			'API personalizada',
			'Onboarding dedicado',
		],
		cta: 'Falar com Vendas',
		popular: false,
	},
]

export function Pricing() {
	return (
		<section id="pricing" className="py-24 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<Badge variant="outline" className="mb-4">
						Preços
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
						Planos que se adaptam ao seu{' '}
						<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
							negócio
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Escolha o plano ideal. Todos incluem teste gratuito de 14 dias.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{plans.map((plan, index) => (
						<Card
							key={index}
							className={`border-2 relative ${
								plan.popular
									? 'border-primary shadow-lg scale-105 md:scale-110'
									: 'hover:border-primary/50'
							} transition-all`}
						>
							{plan.popular && (
								<div className="absolute -top-4 left-1/2 -translate-x-1/2">
									<Badge className="bg-primary text-primary-foreground">
										Mais Popular
									</Badge>
								</div>
							)}
							<CardHeader>
								<CardTitle className="text-2xl">{plan.name}</CardTitle>
								<CardDescription>{plan.description}</CardDescription>
								<div className="mt-4">
									<span className="text-4xl font-bold">{plan.price}</span>
									<span className="text-muted-foreground">{plan.period}</span>
								</div>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3">
									{plan.features.map((feature, featureIndex) => (
										<li key={featureIndex} className="flex items-start gap-2">
											<Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
											<span className="text-sm">{feature}</span>
										</li>
									))}
								</ul>
							</CardContent>
							<CardFooter>
								<Button
									className="w-full"
									variant={plan.popular ? 'default' : 'outline'}
									size="lg"
								>
									{plan.cta}
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

