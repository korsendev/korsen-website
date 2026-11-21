import type { Metadata } from "next"
import { CtaFinal } from "@/components/cta-final"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { SolutionsGrid } from "@/components/solutions"
import { SOLUCIONES_INDEX as C } from "@/lib/content/soluciones"

export const metadata: Metadata = {
  title: C.seoTitle,
  description: C.seoDescription,
  alternates: { canonical: "/soluciones" },
}

export default function SolucionesPage() {
  return (
    <>
      <PageHero label={C.pageLabel} title={C.title} accent={C.accent} intro={C.introPage} />
      <Section line={false} className="!pt-0">
        <SolutionsGrid />
      </Section>
      <CtaFinal />
    </>
  )
}
