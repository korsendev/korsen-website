import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CtaFinal } from "@/components/cta-final"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { MnCard } from "@/components/ui/mn-card"
import { BOSQRA, BOSQRA_PAGE as C } from "@/lib/content/bosqra"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return [{ slug: BOSQRA.slug }]
}

export async function generateMetadata(): Promise<Metadata> {
  return { title: C.seoTitle, description: C.seoDescription, alternates: { canonical: `/productos/${BOSQRA.slug}` } }
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params
  if (slug !== BOSQRA.slug) notFound()

  return (
    <>
      <PageHero
        crumbs={[{ label: "Productos", href: "/productos" }, { label: "BOSQRA" }]}
        label={C.label}
        title={C.title}
        accent={C.accent}
        intro={C.lead}
        actions={
          <>
            <Button href={BOSQRA.demoHref} arrow>
              {BOSQRA.demo}
            </Button>
            <Button href={BOSQRA.url} variant="ghost" arrow>
              {BOSQRA.urlLabel}
            </Button>
          </>
        }
      />

      <Section line={false} className="!pt-0">
        <div className="overflow-hidden rounded-[var(--mn-r-xl)] border border-[var(--mn-border-2)]">
          <Image
            src="/productos/bosqra-demo.jpg"
            alt="Pantalla de BOSQRA, sistema de gestión para la industria maderera"
            width={1200}
            height={676}
            priority
            className="h-auto w-full"
          />
        </div>
      </Section>

      <Section id="beneficios" band>
        <SectionHeader label={`01 · ${C.benefitsLabel.toUpperCase()}`} title={BOSQRA.panelTitle} intro={BOSQRA.panelText} />
        <div className="mn-sec-body">
          <ul className="mn-grid mn-grid--4">
            {BOSQRA.benefits.map((b, i) => (
              <li key={b}>
                <Reveal delay={i * 60}>
                  <MnCard>
                    <span className="mn-ghostnum" style={{ fontSize: 44 }} aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mn-h3 mt-8">{b}</p>
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
