import type { Metadata } from "next"
import { Suspense } from "react"
import { DiagnosticoForm } from "@/components/diagnostico-form"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DIAGNOSTICO as C } from "@/lib/content/diagnostico"

export const metadata: Metadata = {
  title: C.seoTitle,
  description: C.seoDescription,
  alternates: { canonical: "/diagnostico" },
}

export default function DiagnosticoPage() {
  return (
    <>
      <PageHero label={C.label} title={C.title} accent={C.accent} intro={C.intro} />
      <Section line={false} className="!pt-0">
        <div className="max-w-[860px]">
          <Suspense fallback={null}>
            <DiagnosticoForm />
          </Suspense>
        </div>
      </Section>
    </>
  )
}
