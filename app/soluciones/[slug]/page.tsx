import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CtaFinal } from "@/components/cta-final"
import { FaqList } from "@/components/faq"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { MnCard } from "@/components/ui/mn-card"
import { Pill } from "@/components/ui/pill"
import { ResultBox } from "@/components/ui/result-box"
import { CTA } from "@/lib/content/global"
import { METHOD } from "@/lib/content/method"
import { SOLUCIONES, SOLUCION_LANDING as L, getSolucion } from "@/lib/content/soluciones"
import { getProjectByName } from "@/lib/projects-data"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return SOLUCIONES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const s = getSolucion(slug)
  if (!s) return {}
  return { title: s.seoTitle, description: s.seoDescription, alternates: { canonical: `/soluciones/${s.slug}` } }
}

export default async function SolucionPage({ params }: Props) {
  const { slug } = await params
  const s = getSolucion(slug)
  if (!s) notFound()
  const project = getProjectByName(s.caseName)

  return (
    <>
      <PageHero
        label={`SOLUCIÓN ${s.n}`}
        title={s.h1}
        accent={s.accent}
        intro={s.lead}
        actions={
          <>
            <Button href={`/diagnostico?tema=${s.slug}`} arrow>
              {CTA.primary}
            </Button>
            <span className="mn-code flex items-center gap-3 text-[13px] text-[var(--mn-text-2)]">
              <span className="mn-kicker">{L.timeKicker}</span>
              <Pill>{s.time}</Pill>
            </span>
          </>
        }
      />

      <Section id="problema" band>
        <SectionHeader label={`${s.n} · ${L.problemLabel.toUpperCase()}`} title={L.problemLabel} intro={s.problem} />
      </Section>

      <Section id="incluye">
        <SectionHeader label={`${s.n} · ${L.includesLabel.toUpperCase()}`} title={L.includesLabel} />
        <div className="mn-sec-body">
          <ul className="mn-grid mn-grid--4">
            {s.includes.map((item, i) => (
              <li key={item}>
                <Reveal delay={i * 60}>
                  <MnCard>
                    <span className="mn-ghostnum" style={{ fontSize: 44 }} aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mn-h3 mt-8">{item}</p>
                  </MnCard>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-6 max-w-[640px]">
            <ResultBox kicker={L.resultLabel}>{s.result}</ResultBox>
          </div>
        </div>
      </Section>

      <Section id="metodo" band>
        <SectionHeader label={`${s.n} · ${L.methodLabel.toUpperCase()}`} title={L.methodLabel} />
        <div className="mn-sec-body">
          <ol className="mn-grid mn-grid--4">
            {METHOD.phases.slice(0, 4).map((st, i) => (
              <li key={st.n}>
                <Reveal delay={i * 60}>
                  <MnCard>
                    <span className="mn-ghostnum" style={{ fontSize: 44 }} aria-hidden>
                      {st.n}
                    </span>
                    <h3 className="mn-h3 mt-8">{st.name}</h3>
                    <p className="mn-body mt-3">{st.text}</p>
                  </MnCard>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="caso">
        <SectionHeader label={`${s.n} · ${L.caseLabel.toUpperCase()}`} title={s.caseName} intro={s.caseText} />
        <div className="mn-sec-body flex flex-wrap items-center gap-x-8 gap-y-4">
          {s.caseUrl ? (
            <Button href={s.caseUrl} variant="link" arrow>
              {s.caseUrl.replace("https://", "")}
            </Button>
          ) : null}
          {project ? (
            <Button href="/proyectos" variant="ghost">
              {L.caseCta}
            </Button>
          ) : null}
        </div>
      </Section>

      <Section id="preguntas" band>
        <SectionHeader label={`${s.n} · ${L.faqLabel.toUpperCase()}`} title={L.faqLabel} />
        <div className="mn-sec-body max-w-[980px]">
          <FaqList items={s.faqs} />
        </div>
      </Section>

      <CtaFinal />
    </>
  )
}
