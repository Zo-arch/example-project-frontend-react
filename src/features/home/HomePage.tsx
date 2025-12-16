import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { Hero } from './components/Hero'
import { Partners } from './components/Partners'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'

export function HomePage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<Hero />
			<Partners />
			<Features />
			<HowItWorks />
			<Pricing />
			<Testimonials />
			<FAQ />
			<CTA />
			<Footer />
		</div>
	)
}

