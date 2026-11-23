import type { Metadata } from "next"
import { JsonLd, serviceLd } from "@/lib/seo"
import { notFound } from "next/navigation"
import { AdjacentNav } from "@/components/adjacent-nav"
import { CtaFinal } from "@/components/cta-final"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { CheckList } from "@/components/ui/check-list"
import { MnCard } from "@/components/ui/mn-card"
import { Pill } from "@/components/ui/pill"
import { ResultBox } from "@/components/ui/result-box"
import { CTA } from "@/lib/content/global"
import { SERVICIOS, SERVICIO_DETAIL as D, getServicio } from "@/lib/content/servicios"
import { getSolucion } from "@/lib/content/soluciones"
import { splitAccent } from "@/lib/utils"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return SERVICIOS.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const s = getServicio(slug)
  if (!s) return {}
  return {
    title: s.title,
    description: `${s.lead} ${s.services.slice(0, 3).join(", ")}.`,
    alternates: { canonical: `/servicios/${s.slug}` },
  }
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params
  const s = getServicio(slug)
  if (!s) notFound()
  const { title, accent } = splitAccent(s.title)
  const idx = SERVICIOS.findIndex((x) => x.slug === s.slug)
  const prevS = SERVICIOS[(idx - 1 + SERVICIOS.length) % SERVICIOS.length]
  const nextS = SERVICIOS[(idx + 1) % SERVICIOS.length]
  const related = s.related.map((r) => getSolucion(r)).filter((r): r is NonNullable<typeof r> => Boolean(r))
  const cols = related.length
  const half = Math.ceil(s.services.length / 2)

  return (
    <>
      <JsonLd data={serviceLd({ path: `/servicios/${s.slug}`, name: s.title, description: s.lead, serviceType: s.title })} />
      <PageHero
        crumbs={[{ label: "Servicios", href: "/servicios" }, { label: s.title }]}
        label={`SERVICIO ${s.n}`}
        title={title}
        accent={accent}
        intro={s.lead}
        facts={s.deliverables.map((d) => `Entregable · ${d}`)}
        actions={
          <Button href="/diagnostico" arrow>
            {CTA.primary}
          </Button>
        }
      />

      <Section id="servicios" band>
        <SectionHeader label={`${s.n} · ${D.servicesLabel.toUpperCase()}`} title={D.servicesTitle} />
        <div className="mn-sec-body">
          <MnCard>
            <div className="grid gap-x-16 md:grid-cols-2">
              <CheckList items={s.services.slice(0, half)} variant="chev" />
              <CheckList items={s.services.slice(half)} variant="chev" />
            </div>
          </MnCard>
        </div>
      </Section>

      <Section id="entregables">
        <SectionHeader label={`${s.n} · ${D.deliverablesLabel.toUpperCase()}`} title={D.deliverablesTitle} />
        <div className="mn-sec-body">
          <ul className="mn-grid mn-grid--3x">
            {s.deliverables.map((d, i) => (
              <li key={d}>
                <Reveal delay={i * 60}>
                  <MnCard>
                    <span className="mn-ghostnum" style={{ fontSize: 44 }} aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mn-h3 mt-8 text-[22px]">{d}</h3>
                    <div className="mn-card__foot">
                      <Pill>Entregable</Pill>
                    </div>
                  </MnCard>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="relacionadas" band>
        <SectionHeader label={`${s.n} · ${D.relatedLabel.toUpperCase()}`} title={D.relatedTitle} />
        <div className="mn-sec-body">
          <ul className="mn-grid mn-grid--cols" style={{ ["--cols" as string]: cols, ["--cols-md" as string]: cols % 2 === 0 ? 2 : 1 }}>
            {related.map((r, i) => (
              <li key={r.slug}>
                <Reveal delay={i * 60}>
                  <MnCard href={`/soluciones/${r.slug}`} label={r.title}>
                    <span className="mn-ghostnum" style={{ fontSize: 44 }} aria-hidden>
                      {r.n}
                    </span>
                    <h3 className="mn-h3 mt-8 text-[22px]">{r.title}</h3>
                    <div className="mt-5">
                      <ResultBox>{r.result}</ResultBox>
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
      <AdjacentNav
        prev={{ label: "Servicio anterior", title: prevS.title, href: `/servicios/${prevS.slug}` }}
        next={{ label: "Siguiente servicio", title: nextS.title, href: `/servicios/${nextS.slug}` }}
      />
    </>
  )
}
