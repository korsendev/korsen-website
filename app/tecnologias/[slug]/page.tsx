import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CtaFinal } from "@/components/cta-final"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { MnCard } from "@/components/ui/mn-card"
import { ResultBox } from "@/components/ui/result-box"
import { getSolucion } from "@/lib/content/soluciones"
import { TECNOLOGIAS, TECNOLOGIAS_COPY as C, getTecnologia } from "@/lib/content/tecnologias"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return TECNOLOGIAS.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const t = getTecnologia(slug)
  if (!t) return {}
  return { title: `Desarrollo con ${t.title}`, description: C.seoDescription(t.title), alternates: { canonical: `/tecnologias/${t.slug}` } }
}

export default async function TecnologiaPage({ params }: Props) {
  const { slug } = await params
  const t = getTecnologia(slug)
  if (!t) notFound()
  const solutions = t.solutions.map((s) => getSolucion(s)).filter((s): s is NonNullable<typeof s> => Boolean(s))

  return (
    <>
      <PageHero
        crumbs={[{ label: "Servicios", href: "/servicios" }, { label: t.title }]}
        label={C.label}
        title={C.titlePrefix}
        accent={t.title}
        intro={t.lead}
        actions={
          <Button href={C.cta.href} arrow>
            {C.cta.label}
          </Button>
        }
      />

      <Section id="usos" band>
        <SectionHeader label={`01 · ${C.usesLabel.toUpperCase()}`} title={C.usesTitle} />
        <div className="mn-sec-body">
          <ul className="mn-grid mn-grid--3x">
            {t.uses.map((u, i) => (
              <li key={u}>
                <Reveal delay={i * 60}>
                  <MnCard>
                    <span className="mn-ghostnum" style={{ fontSize: 44 }} aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mn-h3 mt-8">{u}</p>
                  </MnCard>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="soluciones">
        <SectionHeader label={`02 · ${C.solutionsLabel.toUpperCase()}`} title={C.solutionsTitle} />
        <div className="mn-sec-body">
          <ul className="mn-grid mn-grid--cols" style={{ ["--cols" as string]: solutions.length, ["--cols-md" as string]: solutions.length % 2 === 0 ? 2 : 1 }}>
            {solutions.map((s, i) => (
              <li key={s.slug}>
                <Reveal delay={i * 60}>
                  <MnCard href={`/soluciones/${s.slug}`} label={s.title}>
                    <h3 className="mn-h3 text-[22px]">{s.title}</h3>
                    <div className="mt-5">
                      <ResultBox>{s.result}</ResultBox>
                    </div>
                    <div className="mn-card__foot">
                      <span className="mn-code text-[13px] text-[var(--mn-accent)]">Ver solución →</span>
                    </div>
                  </MnCard>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaFinal />
    </>
  )
}
