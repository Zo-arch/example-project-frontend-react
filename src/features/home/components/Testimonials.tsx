import { Card, CardContent } from '@/shared/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
	{
		name: 'João Silva',
		role: 'CEO, TechStart',
		content:
			'Incrível como este template acelerou nosso desenvolvimento. Em semanas tínhamos um produto funcional que normalmente levaria meses.',
		rating: 5,
	},
	{
		name: 'Maria Santos',
		role: 'Product Manager, Inovação Co',
		content:
			'A melhor decisão que tomamos. O template é completo, bem documentado e a comunidade é muito ativa. Recomendo 100%.',
		rating: 5,
	},
	{
		name: 'Pedro Costa',
		role: 'Founder, StartupXYZ',
		content:
			'Economizamos milhares de horas de desenvolvimento. O ROI foi imediato e nosso time está muito mais produtivo.',
		rating: 5,
	},
]

export function Testimonials() {
	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
						Amado por pessoas ao redor do{' '}
						<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
							mundo
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Veja o que nossos clientes estão dizendo sobre o produto
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{testimonials.map((testimonial, index) => (
						<Card key={index} className="border-2">
							<CardContent className="pt-6">
								<div className="flex gap-1 mb-4">
									{Array.from({ length: testimonial.rating }).map((_, i) => (
										<Star
											key={i}
											className="h-5 w-5 fill-yellow-400 text-yellow-400"
										/>
									))}
								</div>
								<p className="text-muted-foreground mb-4">
									"{testimonial.content}"
								</p>
								<div>
									<p className="font-semibold">{testimonial.name}</p>
									<p className="text-sm text-muted-foreground">
										{testimonial.role}
									</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

