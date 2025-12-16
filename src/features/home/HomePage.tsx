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
		<>
			<Hero />
			<Partners />
			<Features />
			<HowItWorks />
			<Pricing />
			<Testimonials />
			<FAQ />
			<CTA />
		</>
	)
}

