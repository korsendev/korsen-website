import type { Metadata } from "next"
import { CtaFinal } from "@/components/cta-final"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { ServiceGrid } from "@/components/service-lines"
import { HERO } from "@/lib/content/hero"
import { SERVICIOS_INDEX as C } from "@/lib/content/servicios"

export const metadata: Metadata = {
  title: C.seoTitle,
  description: C.seoDescription,
  alternates: { canonical: "/servicios" },
}

export default function ServiciosPage() {
  return (
    <>
      <PageHero label={C.pageLabel} title={C.title} intro={C.intro} facts={HERO.facts} />
      <Section line={false}>
        <ServiceGrid />
      </Section>
      <CtaFinal />
    </>
  )
}
