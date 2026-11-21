import type { Metadata } from "next"
import { BosqraCard } from "@/components/bosqra"
import { CtaFinal } from "@/components/cta-final"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { PRODUCTOS as C } from "@/lib/content/bosqra"

export const metadata: Metadata = {
  title: C.seoTitle,
  description: C.seoDescription,
  alternates: { canonical: "/productos" },
}

export default function ProductosPage() {
  return (
    <>
      <PageHero label={C.label} title={C.title} accent={C.accent} intro={C.intro} />
      <Section line={false} className="!pt-0">
        <BosqraCard />
      </Section>
      <CtaFinal />
    </>
  )
}
