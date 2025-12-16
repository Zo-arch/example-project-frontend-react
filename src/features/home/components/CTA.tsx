import { Button } from '@/shared/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
	return (
		<section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
						Pronto para começar?
					</h2>
					<p className="text-lg text-muted-foreground mb-8">
						Junte-se a milhares de empresas que já estão usando nosso template
						para construir produtos incríveis.
					</p>
					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Button size="lg" className="group text-base px-8 py-6 h-auto">
							Começar Agora
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Button>
						<Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto">
							Falar com Vendas
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

