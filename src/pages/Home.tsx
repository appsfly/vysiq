import { Hero } from '../components/Hero'
import { ProblemSection } from '../components/ProblemSection'
import { HowItWorks } from '../components/HowItWorks'
import { Capabilities } from '../components/Capabilities'
import { UseCases } from '../components/UseCases'
import { CTASection } from '../components/CTASection'

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Capabilities />
      <UseCases />
      <CTASection />
    </main>
  )
}
