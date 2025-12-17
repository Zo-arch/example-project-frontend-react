import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { Textarea } from '@/shared/ui/textarea'
import { toast } from '@/shared/ui/use-toast'

export function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		// Simular envio (substituir por chamada de API real)
		await new Promise((resolve) => setTimeout(resolve, 1500))

		toast({
			title: 'Mensagem enviada!',
			description:
				'Obrigado pelo contato. Responderemos em breve.',
		})

		setFormData({ name: '', email: '', subject: '', message: '' })
		setIsSubmitting(false)
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
			{/* Grid pattern background */}
			<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Header */}
				<div className="text-center mb-12 animate-slide-fade-in">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						Entre em Contato
					</h1>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Estamos aqui para ajudar. Envie-nos uma mensagem e responderemos o
						mais breve possível.
					</p>
				</div>

				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
					{/* Contact Information */}
					<div className="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle>Informações de Contato</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="bg-primary/10 rounded-lg p-3">
										<Mail className="h-5 w-5 text-primary" />
									</div>
									<div>
										<h3 className="font-semibold mb-1">Email</h3>
										<p className="text-muted-foreground">
											contato@example-project.com
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="bg-primary/10 rounded-lg p-3">
										<Phone className="h-5 w-5 text-primary" />
									</div>
									<div>
										<h3 className="font-semibold mb-1">Telefone</h3>
										<p className="text-muted-foreground">
											+55 (11) 99999-9999
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="bg-primary/10 rounded-lg p-3">
										<MapPin className="h-5 w-5 text-primary" />
									</div>
									<div>
										<h3 className="font-semibold mb-1">Endereço</h3>
										<p className="text-muted-foreground">
											São Paulo, SP<br />
											Brasil
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Horário de Atendimento</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-2 text-muted-foreground">
									<p>
										<strong className="text-foreground">Segunda a Sexta:</strong>{' '}
										9h às 18h
									</p>
									<p>
										<strong className="text-foreground">Sábado:</strong> 9h às
										13h
									</p>
									<p>
										<strong className="text-foreground">Domingo:</strong>{' '}
										Fechado
									</p>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Contact Form */}
					<Card>
						<CardHeader>
							<CardTitle>Envie uma Mensagem</CardTitle>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="name">Nome</Label>
									<Input
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										placeholder="Seu nome completo"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleChange}
										required
										placeholder="seu@email.com"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="subject">Assunto</Label>
									<Input
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										required
										placeholder="Qual é o assunto?"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="message">Mensagem</Label>
									<Textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										placeholder="Sua mensagem aqui..."
										rows={6}
									/>
								</div>

								<Button
									type="submit"
									className="w-full"
									disabled={isSubmitting}
								>
									{isSubmitting ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />
											Enviando...
										</>
									) : (
										<>
											<Send className="mr-2 h-4 w-4" />
											Enviar Mensagem
										</>
									)}
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

