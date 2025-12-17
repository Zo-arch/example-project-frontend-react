import { FileText } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'

export function TermsOfServicePage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
			{/* Grid pattern background */}
			<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Header */}
				<div className="text-center mb-12 animate-slide-fade-in">
					<div className="flex justify-center mb-6">
						<div className="relative">
							<div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
							<div className="relative bg-primary/10 rounded-full p-6">
								<FileText className="h-16 w-16 text-primary" />
							</div>
						</div>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						Termos de Serviço
					</h1>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Última atualização: {new Date().toLocaleDateString('pt-BR')}
					</p>
				</div>

				{/* Content */}
				<div className="max-w-4xl mx-auto space-y-8">
					<Card>
						<CardHeader>
							<CardTitle>1. Aceitação dos Termos</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Ao acessar e usar este serviço, você concorda em cumprir e estar
								vinculado aos seguintes termos e condições de uso. Se você não
								concordar com alguma parte destes termos, não deve usar nosso
								serviço.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>2. Descrição do Serviço</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground mb-4">
								Nosso serviço fornece uma plataforma para [descrição do serviço].
								Reservamo-nos o direito de modificar, suspender ou descontinuar
								qualquer aspecto do serviço a qualquer momento, com ou sem aviso
								prévio.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>3. Conta de Usuário</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="text-muted-foreground">
								Ao criar uma conta, você é responsável por:
							</p>
							<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
								<li>
									Manter a confidencialidade de suas credenciais de acesso
								</li>
								<li>
									Notificar-nos imediatamente sobre qualquer uso não autorizado
									de sua conta
								</li>
								<li>
									Fornecer informações precisas e atualizadas durante o
									registro
								</li>
								<li>
									Ser responsável por todas as atividades que ocorrem em sua
									conta
								</li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>4. Uso Aceitável</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="text-muted-foreground">
								Você concorda em não usar o serviço para:
							</p>
							<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
								<li>
									Violar qualquer lei ou regulamento aplicável
								</li>
								<li>
									Infringir direitos de propriedade intelectual de terceiros
								</li>
								<li>
									Transmitir vírus, malware ou qualquer código malicioso
								</li>
								<li>
									Coletar informações de outros usuários sem autorização
								</li>
								<li>
									Interferir ou interromper o funcionamento do serviço
								</li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>5. Propriedade Intelectual</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Todo o conteúdo do serviço, incluindo textos, gráficos, logos,
								ícones, imagens e software, é propriedade nossa ou de nossos
								fornecedores de conteúdo e está protegido por leis de direitos
								autorais e outras leis de propriedade intelectual.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>6. Limitação de Responsabilidade</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Em nenhuma circunstância seremos responsáveis por danos
								diretos, indiretos, incidentais, especiais ou consequenciais
								resultantes do uso ou incapacidade de usar nosso serviço, mesmo
								se tivermos sido avisados da possibilidade de tais danos.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>7. Modificações dos Termos</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Reservamo-nos o direito de modificar estes termos a qualquer
								momento. Notificaremos os usuários sobre mudanças significativas
								através do serviço ou por e-mail. O uso continuado do serviço
								após tais modificações constitui sua aceitação dos novos termos.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>8. Lei Aplicável</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Estes termos serão regidos e interpretados de acordo com as leis
								do [país/estado], sem dar efeito a quaisquer princípios de
								conflitos de leis.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>9. Contato</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Se você tiver dúvidas sobre estes Termos de Serviço, entre em
								contato conosco através de [email de contato] ou visite nossa
								página de contato.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

