import { Button } from '@/shared/ui/button'
import { ArrowRight, Sparkles, Check } from 'lucide-react'

export function Hero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 py-20 md:py-32">
			{/* Grid pattern background */}
			<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

			{/* Gradient orb */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

			<div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left side - Content */}
					<div className="mx-auto max-w-2xl lg:max-w-none text-center lg:text-left">
						{/* Badges */}
						<div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
							{/* Social Proof */}
							<div className="inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur-sm shadow-sm">
								<span className="text-muted-foreground">
									<strong className="text-foreground">1200+</strong> usuários ativos
								</span>
							</div>

							{/* Badge */}
							<div className="inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur-sm shadow-sm">
								<Sparkles className="h-4 w-4 text-primary" />
								<span className="text-muted-foreground">
									Novo template SAAS moderno disponível
								</span>
							</div>
						</div>

						{/* Heading */}
						<h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
							Construa seu
							<span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
								{' '}produto SAAS{' '}
							</span>
							com confiança
						</h1>

						{/* Description */}
						<p className="mb-8 text-lg text-muted-foreground md:text-xl lg:max-w-2xl">
							Template completo e moderno com todas as ferramentas necessárias
							para criar aplicações SAAS profissionais. Comece em minutos, não em semanas.
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-col items-center lg:items-start gap-4 sm:flex-row mb-12">
							<Button size="lg" className="group text-base px-8 py-6 h-auto">
								Começar Grátis
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
							<Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto">
								Ver Demonstração
							</Button>
						</div>

						{/* Trust indicators */}
						<div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<Check className="h-4 w-4 text-primary" />
								<span>Sem cartão de crédito</span>
							</div>
							<div className="flex items-center gap-2">
								<Check className="h-4 w-4 text-primary" />
								<span>14 dias de teste gratuito</span>
							</div>
							<div className="flex items-center gap-2">
								<Check className="h-4 w-4 text-primary" />
								<span>Cancelamento a qualquer momento</span>
							</div>
						</div>
					</div>

					{/* Right side - Product Visual */}
					<div className="relative">
						<div className="aspect-video rounded-lg border-2 bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center p-8">
							<div className="text-center">
								<div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-primary/20 flex items-center justify-center">
									<Sparkles className="h-12 w-12 text-primary" />
								</div>
								<p className="text-sm text-muted-foreground">
									Screenshot ou vídeo do produto
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

