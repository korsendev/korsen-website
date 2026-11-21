import type { Metadata } from "next"
import { DiagnosticoForm } from "@/components/diagnostico-form"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { HERO } from "@/lib/content/hero"
import { DIAGNOSTICO as C } from "@/lib/content/diagnostico"

export const metadata: Metadata = {
  title: C.seoTitle,
  description: C.seoDescription,
  alternates: { canonical: "/diagnostico" },
}

export default function DiagnosticoPage() {
  return (
    <>
      <PageHero label={C.label} title={C.title} accent={C.accent} intro={C.intro} facts={HERO.facts} />
      <Section line={false}>
        <div className="max-w-[860px]">
          <DiagnosticoForm />
        </div>
      </Section>
    </>
  )
}
