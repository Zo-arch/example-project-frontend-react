import { Building2 } from 'lucide-react'

const partners = [
	{ name: 'Empresa 1', logo: <Building2 className="h-8 w-8" /> },
	{ name: 'Empresa 2', logo: <Building2 className="h-8 w-8" /> },
	{ name: 'Empresa 3', logo: <Building2 className="h-8 w-8" /> },
	{ name: 'Empresa 4', logo: <Building2 className="h-8 w-8" /> },
	{ name: 'Empresa 5', logo: <Building2 className="h-8 w-8" /> },
]

export function Partners() {
	return (
		<section className="py-12 bg-muted/30 border-y">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<p className="text-center text-sm text-muted-foreground mb-6">
					Trusted by employees at:
				</p>
				<div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
					{partners.map((partner, index) => (
						<div
							key={index}
							className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
						>
							{partner.logo}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

