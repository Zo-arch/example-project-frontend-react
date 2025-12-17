import { Link } from 'react-router-dom'
import { Separator } from '@/shared/ui/separator'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { ROUTES } from '@/shared/constants/routes'

const footerLinks = {
	Produto: [
		{ label: 'Funcionalidades', href: '#' },
		{ label: 'Preços', href: '#' },
		{ label: 'Changelog', href: '#' },
		{ label: 'Roadmap', href: '#' },
	],
	Empresa: [
		{ label: 'Sobre', href: ROUTES.about },
		{ label: 'Blog', href: '#' },
		{ label: 'Carreiras', href: '#' },
		{ label: 'Contato', href: ROUTES.contact },
	],
	Recursos: [
		{ label: 'Documentação', href: '#' },
		{ label: 'API', href: '#' },
		{ label: 'Suporte', href: ROUTES.help },
		{ label: 'Comunidade', href: '#' },
	],
	Legal: [
		{ label: 'Privacidade', href: ROUTES.privacy },
		{ label: 'Termos', href: ROUTES.terms },
		{ label: 'Cookies', href: '#' },
	],
}

export function Footer() {
	return (
		<footer className="border-t bg-background">
			<div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
					{Object.entries(footerLinks).map(([category, links]) => (
						<div key={category}>
							<h3 className="font-semibold mb-4">{category}</h3>
							<ul className="space-y-2">
								{links.map((link) => (
									<li key={link.label}>
										{link.href === '#' ? (
											<a
												href={link.href}
												className="text-sm text-muted-foreground hover:text-foreground transition-colors"
											>
												{link.label}
											</a>
										) : (
											<Link
												to={link.href}
												className="text-sm text-muted-foreground hover:text-foreground transition-colors"
											>
												{link.label}
											</Link>
										)}
									</li>
								))}
							</ul>
						</div>
					))}
					{/* Newsletter */}
					<div>
						<h3 className="font-semibold mb-4">Newsletter</h3>
						<p className="text-sm text-muted-foreground mb-4">
							Receba atualizações e novidades
						</p>
						<form className="flex gap-2">
							<Input
								type="email"
								placeholder="Seu email"
								className="flex-1"
							/>
							<Button type="submit">Inscrever</Button>
						</form>
					</div>
				</div>

				<Separator className="mb-8" />

				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<div>
						<p className="text-sm text-muted-foreground mb-1">
							© {new Date().getFullYear()} example-project. Todos os direitos reservados.
						</p>
						<div className="flex gap-4 text-sm">
							<Link
								to={ROUTES.privacy}
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								Política de Privacidade
							</Link>
							<Link
								to={ROUTES.terms}
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								Termos de Uso
							</Link>
						</div>
					</div>
					<div className="flex gap-6">
						<a
							href="#"
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							Twitter
						</a>
						<a
							href="#"
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							GitHub
						</a>
						<a
							href="#"
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							LinkedIn
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

