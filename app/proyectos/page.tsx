import type { Metadata } from "next"
import { CtaStrip } from "@/components/cta-strip"
import { PageHero } from "@/components/page-hero"
import { ProjectsGrid } from "@/components/projects-grid"
import { Section } from "@/components/section"
import { HERO } from "@/lib/content/hero"
import { PROJECTS_COPY as C } from "@/lib/projects-data"

export const metadata: Metadata = {
  title: C.seoTitle,
  description: C.seoDescription,
  alternates: { canonical: "/proyectos" },
}

export default function ProyectosPage() {
  return (
    <>
      <PageHero label={C.pageLabel} title={C.title} accent={C.accent} intro={C.intro} facts={HERO.facts} />
      <Section line={false}>
        <ProjectsGrid />
      </Section>
      <CtaStrip text={C.closing} label={C.closingCta.label} href={C.closingCta.href} />
    </>
  )
}
