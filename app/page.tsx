import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Diagnosis } from "@/components/diagnosis"
import { Solutions } from "@/components/solutions"
import { ServiceLines } from "@/components/service-lines"
import { Ecosystem } from "@/components/ecosystem"
import { Method } from "@/components/method"
import { Projects } from "@/components/projects"
import { Industries } from "@/components/industries"
import { Stack } from "@/components/stack"
import { Bosqra } from "@/components/bosqra"
import { Engagement } from "@/components/engagement"
import { Support } from "@/components/support"
import { Coverage } from "@/components/coverage"
import { Faq } from "@/components/faq"
import { CtaFinal } from "@/components/cta-final"

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Diagnosis />
      <Solutions />
      <ServiceLines />
      <Ecosystem />
      <Method />
      <Projects />
      <Industries />
      <Stack />
      <Bosqra />
      <Engagement />
      <Support />
      <Coverage />
      <Faq />
      <CtaFinal />
    </>
  )
}
