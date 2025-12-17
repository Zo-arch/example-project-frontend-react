import { Target, Users, Zap, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'

export function AboutPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
			{/* Grid pattern background */}
			<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Hero Section */}
				<div className="text-center mb-16 animate-slide-fade-in">
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						Sobre Nós
					</h1>
					<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
						Somos uma equipe apaixonada por tecnologia, dedicada a criar
						soluções inovadoras que transformam a forma como as pessoas trabalham
						e colaboram.
					</p>
				</div>

				{/* Mission & Vision */}
				<div className="grid md:grid-cols-2 gap-8 mb-16">
					<Card>
						<CardHeader>
							<div className="flex items-center gap-3 mb-2">
								<Target className="h-6 w-6 text-primary" />
								<CardTitle>Nossa Missão</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Democratizar o acesso a ferramentas poderosas e intuitivas que
								capacitam indivíduos e empresas a alcançarem seu potencial máximo.
								Acreditamos que a tecnologia deve ser acessível, simples e
								poderosa.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<div className="flex items-center gap-3 mb-2">
								<Zap className="h-6 w-6 text-primary" />
								<CardTitle>Nossa Visão</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Ser a plataforma de referência que milhões de pessoas escolhem
								para transformar suas ideias em realidade. Visualizamos um futuro
								onde a colaboração e a inovação são facilitadas por tecnologia
								excepcional.
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Values */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold text-center mb-12">
						Nossos Valores
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<Card>
							<CardHeader>
								<Users className="h-8 w-8 text-primary mb-2" />
								<CardTitle>Colaboração</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground text-sm">
									Acreditamos no poder do trabalho em equipe e na construção de
									soluções juntos.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<Zap className="h-8 w-8 text-primary mb-2" />
								<CardTitle>Inovação</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground text-sm">
									Buscamos constantemente novas formas de resolver problemas e
									melhorar experiências.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<Heart className="h-8 w-8 text-primary mb-2" />
								<CardTitle>Paixão</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground text-sm">
									Fazemos o que amamos e amamos o que fazemos, sempre com
									dedicação e entusiasmo.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<Target className="h-8 w-8 text-primary mb-2" />
								<CardTitle>Excelência</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground text-sm">
									Comprometemo-nos com a qualidade em cada detalhe, desde o
									design até a experiência do usuário.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Timeline */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold text-center mb-12">
						Nossa História
					</h2>
					<div className="max-w-3xl mx-auto space-y-8">
						<Card>
							<CardHeader>
								<CardTitle className="text-primary">2024 - Fundação</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									Começamos nossa jornada com uma visão clara: criar uma
									plataforma que realmente faça a diferença na vida das pessoas.
									Lançamos nossa primeira versão com recursos essenciais e
									feedback valioso de nossos primeiros usuários.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="text-primary">2024 - Crescimento</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									Expandimos nossa equipe e melhoramos continuamente nossa
									plataforma com base no feedback dos usuários. Adicionamos
									novos recursos, melhoramos a performance e focamos na
									experiência do usuário.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="text-primary">Hoje - Inovação Contínua</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									Continuamos inovando e evoluindo, sempre com foco em
									fornecer valor real aos nossos usuários. Estamos entusiasmados
									com o futuro e com as possibilidades que estão por vir.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Team Section */}
				<div className="text-center">
					<h2 className="text-3xl font-bold mb-6">Nossa Equipe</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto mb-8">
						Somos um grupo diversificado de profissionais talentosos, unidos pela
						paixão por criar produtos excepcionais e impactar positivamente a vida
						das pessoas.
					</p>
					<Card className="max-w-2xl mx-auto">
						<CardContent className="pt-6">
							<p className="text-muted-foreground">
								Estamos sempre em busca de pessoas talentosas para se juntarem à
								nossa equipe. Se você compartilha nossos valores e paixão pela
								excelência, entre em contato conosco!
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

