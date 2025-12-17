import { Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'

export function PrivacyPolicyPage() {
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
								<Shield className="h-16 w-16 text-primary" />
							</div>
						</div>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						Política de Privacidade
					</h1>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Última atualização: {new Date().toLocaleDateString('pt-BR')}
					</p>
				</div>

				{/* Content */}
				<div className="max-w-4xl mx-auto space-y-8">
					<Card>
						<CardHeader>
							<CardTitle>1. Introdução</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Esta Política de Privacidade descreve como coletamos, usamos e
								protegemos suas informações pessoais quando você usa nosso
								serviço. Estamos comprometidos em proteger sua privacidade e
								garantir a segurança de seus dados.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>2. Informações que Coletamos</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="text-muted-foreground">
								Coletamos os seguintes tipos de informações:
							</p>
							<div className="space-y-3">
								<div>
									<h4 className="font-semibold mb-2">
										Informações de Identificação Pessoal
									</h4>
									<ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
										<li>Nome completo</li>
										<li>Endereço de e-mail</li>
										<li>Número de telefone (quando fornecido)</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold mb-2">
										Informações Técnicas
									</h4>
									<ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
										<li>Endereço IP</li>
										<li>Tipo de navegador e versão</li>
										<li>Sistema operacional</li>
										<li>Dados de uso e interação com o serviço</li>
									</ul>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>3. Como Usamos suas Informações</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground mb-4">
								Utilizamos as informações coletadas para:
							</p>
							<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
								<li>
									Fornecer, manter e melhorar nossos serviços
								</li>
								<li>
									Processar transações e enviar notificações relacionadas
								</li>
								<li>
									Enviar comunicações importantes sobre o serviço
								</li>
								<li>
									Personalizar sua experiência e conteúdo
								</li>
								<li>
									Detectar, prevenir e resolver problemas técnicos
								</li>
								<li>
									Cumprir obrigações legais e regulatórias
								</li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>4. Compartilhamento de Informações</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="text-muted-foreground">
								Não vendemos suas informações pessoais. Podemos compartilhar suas
								informações apenas nas seguintes circunstâncias:
							</p>
							<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
								<li>
									Com prestadores de serviços que nos ajudam a operar nosso
									serviço (sob obrigações de confidencialidade)
								</li>
								<li>
									Quando exigido por lei ou processo legal
								</li>
								<li>
									Para proteger nossos direitos, propriedade ou segurança
								</li>
								<li>
									Com seu consentimento explícito
								</li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>5. Cookies e Tecnologias Similares</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Utilizamos cookies e tecnologias similares para melhorar sua
								experiência, analisar o uso do serviço e personalizar conteúdo.
								Você pode controlar o uso de cookies através das configurações
								do seu navegador, mas isso pode afetar a funcionalidade do
								serviço.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>6. Segurança dos Dados</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Implementamos medidas de segurança técnicas e organizacionais
								adequadas para proteger suas informações pessoais contra acesso
								não autorizado, alteração, divulgação ou destruição. No entanto,
								nenhum método de transmissão pela Internet ou armazenamento
								eletrônico é 100% seguro.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>7. Seus Direitos</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground mb-4">
								Você tem os seguintes direitos em relação às suas informações
								pessoais:
							</p>
							<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
								<li>
									Direito de acesso às suas informações pessoais
								</li>
								<li>
									Direito de retificação de informações incorretas
								</li>
								<li>
									Direito de exclusão de suas informações
								</li>
								<li>
									Direito de portabilidade dos dados
								</li>
								<li>
									Direito de oposição ao processamento
								</li>
								<li>
									Direito de retirar consentimento a qualquer momento
								</li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>8. Retenção de Dados</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Mantemos suas informações pessoais apenas pelo tempo necessário
								para cumprir os propósitos descritos nesta política, a menos que
								um período de retenção mais longo seja exigido ou permitido por
								lei.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>9. Privacidade de Menores</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Nosso serviço não é direcionado a menores de 18 anos. Não
								coletamos intencionalmente informações pessoais de menores. Se
								descobrirmos que coletamos informações de um menor, tomaremos
								medidas para excluir essas informações imediatamente.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>10. Alterações nesta Política</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Podemos atualizar esta Política de Privacidade periodicamente.
								Notificaremos você sobre mudanças significativas publicando a
								nova política nesta página e atualizando a data de "Última
								atualização". Recomendamos que você revise esta política
								periodicamente.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>11. Contato</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Se você tiver dúvidas ou preocupações sobre esta Política de
								Privacidade ou sobre como tratamos suas informações pessoais,
								entre em contato conosco através de [email de contato] ou visite
								nossa página de contato.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

