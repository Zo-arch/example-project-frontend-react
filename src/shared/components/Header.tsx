import { Link } from 'react-router-dom'
import { Button } from '@/shared/ui/button'
import { Menu } from 'lucide-react'
import { ROUTES } from '@/shared/constants/routes'

export function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Logo */}
				<Link to={ROUTES.home} className="flex items-center space-x-2">
					<span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
						example-project
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-6">
					<a
						href="#features"
						className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
					>
						Funcionalidades
					</a>
					<a
						href="#pricing"
						className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
					>
						Preços
					</a>
					<a
						href="#about"
						className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
					>
						Sobre
					</a>
				</nav>

				{/* CTA Buttons */}
				<div className="flex items-center gap-4">
					<Button variant="ghost" className="hidden md:inline-flex" asChild>
						<Link to={ROUTES.login}>Entrar</Link>
					</Button>
					<Button className="hidden md:inline-flex" asChild>
						<Link to={ROUTES.register}>Começar Grátis</Link>
					</Button>
					<Button variant="ghost" size="icon" className="md:hidden">
						<Menu className="h-5 w-5" />
					</Button>
				</div>
			</div>
		</header>
	)
}

