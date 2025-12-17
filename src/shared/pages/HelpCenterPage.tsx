import { useState } from 'react'
import { Search, HelpCircle, BookOpen, GraduationCap, MessageCircle, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { ROUTES } from '@/shared/constants/routes'
import { Link } from 'react-router-dom'

interface FAQItem {
	id: string
	question: string
	answer: string
	category: string
}

const faqData: FAQItem[] = [
	{
		id: '1',
		question: 'Como criar uma conta?',
		answer:
			'Para criar uma conta, clique no botão "Criar conta" no canto superior direito, preencha seus dados e confirme seu email através do código de verificação que será enviado.',
		category: 'Geral',
	},
	{
		id: '2',
		question: 'Esqueci minha senha, como recuperar?',
		answer:
			'Na página de login, clique em "Esqueci minha senha". Você receberá um código de verificação por email e poderá criar uma nova senha.',
		category: 'Geral',
	},
	{
		id: '3',
		question: 'Como altero meu plano?',
		answer:
			'Você pode alterar seu plano a qualquer momento acessando as configurações da conta e selecionando a opção "Planos". As alterações serão aplicadas imediatamente.',
		category: 'Planos',
	},
	{
		id: '4',
		question: 'Quais métodos de pagamento são aceitos?',
		answer:
			'Aceitamos cartões de crédito (Visa, Mastercard, American Express), débito e PIX. Todos os pagamentos são processados de forma segura.',
		category: 'Planos',
	},
	{
		id: '5',
		question: 'Como cancelar minha assinatura?',
		answer:
			'Você pode cancelar sua assinatura a qualquer momento nas configurações da conta. O cancelamento será efetivado no final do período de cobrança atual.',
		category: 'Planos',
	},
	{
		id: '6',
		question: 'Onde posso encontrar a documentação da API?',
		answer:
			'A documentação completa da API está disponível em nossa seção de Documentação. Você também pode acessar exemplos de código e tutoriais.',
		category: 'Técnico',
	},
	{
		id: '7',
		question: 'Como faço backup dos meus dados?',
		answer:
			'Seus dados são automaticamente salvos em nossos servidores seguros. Você também pode exportar seus dados a qualquer momento nas configurações da conta.',
		category: 'Técnico',
	},
	{
		id: '8',
		question: 'Qual é o limite de armazenamento?',
		answer:
			'O limite de armazenamento varia conforme seu plano. O plano gratuito inclui 5GB, enquanto os planos pagos oferecem de 50GB a ilimitado.',
		category: 'Técnico',
	},
]

const categories = [
	{ id: 'all', name: 'Todos', icon: HelpCircle },
	{ id: 'Geral', name: 'Geral', icon: HelpCircle },
	{ id: 'Planos', name: 'Planos', icon: BookOpen },
	{ id: 'Técnico', name: 'Técnico', icon: GraduationCap },
]

export function HelpCenterPage() {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('all')
	const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

	const toggleItem = (id: string) => {
		const newExpanded = new Set(expandedItems)
		if (newExpanded.has(id)) {
			newExpanded.delete(id)
		} else {
			newExpanded.add(id)
		}
		setExpandedItems(newExpanded)
	}

	const filteredFAQ = faqData.filter((item) => {
		const matchesSearch =
			searchQuery === '' ||
			item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.answer.toLowerCase().includes(searchQuery.toLowerCase())
		const matchesCategory =
			selectedCategory === 'all' || item.category === selectedCategory
		return matchesSearch && matchesCategory
	})

	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
			{/* Grid pattern background */}
			<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Header */}
				<div className="text-center mb-12 animate-slide-fade-in">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						Central de Ajuda
					</h1>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Encontre respostas para suas perguntas ou entre em contato com nosso
						suporte
					</p>
				</div>

				{/* Search */}
				<div className="max-w-2xl mx-auto mb-8">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
						<Input
							type="text"
							placeholder="Buscar ajuda..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="pl-10"
						/>
					</div>
				</div>

				{/* Categories */}
				<div className="flex flex-wrap gap-4 justify-center mb-12">
					{categories.map((category) => {
						const Icon = category.icon
						return (
							<Button
								key={category.id}
								variant={
									selectedCategory === category.id ? 'default' : 'outline'
								}
								onClick={() => setSelectedCategory(category.id)}
								className="gap-2"
							>
								<Icon className="h-4 w-4" />
								{category.name}
							</Button>
						)
					})}
				</div>

				{/* Quick Links */}
				<div className="grid md:grid-cols-3 gap-6 mb-12">
					<Card className="hover:shadow-lg transition-shadow cursor-pointer">
						<CardHeader>
							<div className="flex items-center gap-3">
								<BookOpen className="h-6 w-6 text-primary" />
								<CardTitle>Documentação</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground text-sm mb-4">
								Acesse nossa documentação completa com guias detalhados e
								exemplos.
							</p>
							<Button variant="outline" size="sm" className="w-full">
								Ver Documentação
								<ExternalLink className="ml-2 h-3 w-3" />
							</Button>
						</CardContent>
					</Card>

					<Card className="hover:shadow-lg transition-shadow cursor-pointer">
						<CardHeader>
							<div className="flex items-center gap-3">
								<GraduationCap className="h-6 w-6 text-primary" />
								<CardTitle>Tutoriais</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground text-sm mb-4">
								Aprenda a usar todas as funcionalidades com nossos tutoriais
								passo a passo.
							</p>
							<Button variant="outline" size="sm" className="w-full">
								Ver Tutoriais
								<ExternalLink className="ml-2 h-3 w-3" />
							</Button>
						</CardContent>
					</Card>

					<Card className="hover:shadow-lg transition-shadow cursor-pointer">
						<CardHeader>
							<div className="flex items-center gap-3">
								<MessageCircle className="h-6 w-6 text-primary" />
								<CardTitle>Suporte</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground text-sm mb-4">
								Não encontrou o que procura? Entre em contato com nossa equipe
								de suporte.
							</p>
							<Button variant="outline" size="sm" className="w-full" asChild>
								<Link to={ROUTES.contact}>
									Entrar em Contato
									<ExternalLink className="ml-2 h-3 w-3" />
								</Link>
							</Button>
						</CardContent>
					</Card>
				</div>

				{/* FAQ */}
				<div className="max-w-4xl mx-auto">
					<h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
					<div className="space-y-4">
						{filteredFAQ.length > 0 ? (
							filteredFAQ.map((item) => (
								<Card key={item.id}>
									<CardHeader
										className="cursor-pointer"
										onClick={() => toggleItem(item.id)}
									>
										<div className="flex items-center justify-between">
											<CardTitle className="text-lg">{item.question}</CardTitle>
											<Button
												variant="ghost"
												size="icon"
												className="h-6 w-6"
											>
												<span className="text-xl">
													{expandedItems.has(item.id) ? '−' : '+'}
												</span>
											</Button>
										</div>
									</CardHeader>
									{expandedItems.has(item.id) && (
										<CardContent>
											<p className="text-muted-foreground">{item.answer}</p>
										</CardContent>
									)}
								</Card>
							))
						) : (
							<Card>
								<CardContent className="pt-6 text-center">
									<p className="text-muted-foreground">
										Nenhum resultado encontrado. Tente uma busca diferente ou{' '}
										<Link
											to={ROUTES.contact}
											className="text-primary hover:underline"
										>
											entre em contato
										</Link>
										.
									</p>
								</CardContent>
							</Card>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

