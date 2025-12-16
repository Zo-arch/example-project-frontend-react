import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/shared/ui/accordion'
import { Badge } from '@/shared/ui/badge'

const faqs = [
	{
		question: 'Posso cancelar minha assinatura a qualquer momento?',
		answer:
			'Sim! Você pode cancelar sua assinatura a qualquer momento sem nenhuma taxa ou penalidade. Seu acesso continuará até o final do período pago.',
	},
	{
		question: 'Há reembolso disponível?',
		answer:
			'Oferecemos reembolso completo dentro dos primeiros 14 dias após a compra. Após esse período, não oferecemos reembolsos, mas você pode cancelar a qualquer momento.',
	},
	{
		question: 'Quais métodos de pagamento são aceitos?',
		answer:
			'Aceitamos cartões de crédito (Visa, Mastercard, American Express), PayPal e transferências bancárias para planos anuais.',
	},
	{
		question: 'Posso mudar de plano depois?',
		answer:
			'Absolutamente! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas imediatamente e o valor é ajustado proporcionalmente.',
	},
	{
		question: 'Há limite de uso?',
		answer:
			'Depende do seu plano. O plano Starter tem algumas limitações, enquanto os planos Pro e Advanced oferecem recursos ilimitados. Consulte a seção de preços para mais detalhes.',
	},
	{
		question: 'Oferecem suporte técnico?',
		answer:
			'Sim! Oferecemos suporte por email para todos os planos. Os planos Pro e Advanced incluem suporte prioritário e 24/7 respectivamente.',
	},
]

export function FAQ() {
	return (
		<section className="py-24 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<Badge variant="outline" className="mb-4">
						FAQ
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
						Perguntas{' '}
						<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
							Frequentes
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Resolva suas dúvidas antes de tomar a decisão final
					</p>
				</div>

				<div className="max-w-3xl mx-auto">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem key={index} value={`item-${index}`}>
								<AccordionTrigger className="text-left">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	)
}

