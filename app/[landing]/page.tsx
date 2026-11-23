import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CtaFinal } from "@/components/cta-final"
import { FaqList } from "@/components/faq"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { CheckList } from "@/components/ui/check-list"
import { MnCard } from "@/components/ui/mn-card"
import { CTA } from "@/lib/content/global"
import { HERO } from "@/lib/content/hero"
import { LANDING_COPY as C, LANDINGS, getLanding } from "@/lib/content/posicionamiento"
import { getSolucion } from "@/lib/content/soluciones"
import { JsonLd, faqLd, serviceLd } from "@/lib/seo"

type Props = { params: Promise<{ landing: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return LANDINGS.map((l) => ({ landing: l.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { landing } = await params
  const l = getLanding(landing)
  if (!l) return {}
  return { title: l.seoTitle, description: l.seoDescription, alternates: { canonical: `/${l.slug}` } }
}

export default async function LandingPage({ params }: Props) {
  const { landing } = await params
  const l = getLanding(landing)
  if (!l) notFound()
  const half = Math.ceil(l.build.length / 2)
  const solutions = l.solutions.map((s) => getSolucion(s)).filter((s): s is NonNullable<typeof s> => Boolean(s))
  const others = LANDINGS.filter((x) => x.slug !== l.slug)
  const more = [...C.moreLinks, ...others.map((o) => ({ label: o.seoTitle, href: `/${o.slug}`, text: o.lead }))].slice(0, 4)

  return (
    <>
      <JsonLd data={serviceLd({ path: `/${l.slug}`, name: l.seoTitle, description: l.seoDescription, serviceType: l.seoTitle })} />
      <JsonLd data={faqLd(l.faqs)} />
      <PageHero
        crumbs={[{ label: C.crumb }, { label: l.seoTitle }]}
        label={l.label}
        title={l.title}
        accent={l.accent}
        intro={l.lead}
        facts={HERO.facts}
        actions={
          <Button href="/diagnostico" arrow>
            {CTA.primary}
          </Button>
        }
      />

      <Section id="que-construimos" band>
        <SectionHeader label={C.buildLabel} title={l.buildTitle} />
        <div className="mn-sec-body grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="space-y-5">
            {l.intro.map((p) => (
              <p key={p} className="mn-lead">
                {p}
              </p>
            ))}
          </div>
          <MnCard>
            <div className="grid gap-x-12 md:grid-cols-2">
              <CheckList items={l.build.slice(0, half)} variant="chev" />
              <CheckList items={l.build.slice(half)} variant="chev" />
            </div>
          </MnCard>
        </div>
      </Section>

      <Section id="por-que">
        <SectionHeader label={C.whyLabel} title={C.whyTitle} />
        <ul className="mn-grid mn-grid--4 mn-sec-body">
          {C.why.map((w, i) => (
            <li key={w.title}>
              <Reveal delay={i * 60}>
                <MnCard>
                  <h3 className="mn-h3 text-[20px]">{w.title}</h3>
                  <p className="mn-body mt-3">{w.text}</p>
                </MnCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="soluciones" band>
        <SectionHeader label={C.solutionsLabel} title={C.solutionsTitle} />
        <ul className="mn-grid mn-grid--3 mn-sec-body">
          {solutions.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={i * 60}>
                <Link href={`/soluciones/${s.slug}`} className="mn-card mn-card--link h-full">
                  <h3 className="mn-h3 text-[22px]">{s.title}</h3>
                  <p className="mn-body mt-3">{s.seoDescription}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="mas">
        <SectionHeader label={C.moreLabel} title={C.moreTitle} />
        <ul className="mn-grid mn-grid--4 mn-sec-body">
          {more.map((m) => (
            <li key={m.href}>
              <Link href={m.href} className="mn-card mn-card--link h-full">
                <h3 className="mn-h3 text-[20px]">{m.label}</h3>
                <p className="mn-body mt-3">{m.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="preguntas" band>
        <SectionHeader label={C.faqLabel} title={C.faqTitle} />
        <div className="mn-sec-body max-w-[980px]">
          <FaqList items={l.faqs} />
        </div>
      </Section>

      <CtaFinal />
    </>
  )
}
