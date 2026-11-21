import type { Metadata } from "next"
import { About } from "@/components/about"
import { Coverage } from "@/components/coverage"
import { CtaFinal } from "@/components/cta-final"
import { Ecosystem } from "@/components/ecosystem"
import { Leadership } from "@/components/leadership"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Stats } from "@/components/stats"
import { CheckList } from "@/components/ui/check-list"
import { MnCard } from "@/components/ui/mn-card"
import { NOSOTROS as C } from "@/lib/content/nosotros"

export const metadata: Metadata = {
  title: C.seoTitle,
  description: C.seoDescription,
  alternates: { canonical: "/nosotros" },
}

export default function NosotrosPage() {
  const b = C.brand
  return (
    <>
      <About as="h1" id="hero" cta={false} />
      <Stats />

      <Section id={b.id} band>
        <SectionHeader label={b.label} title={b.title} accent={b.accent} intro={b.text} />
        <div className="mn-sec-body">
          <ul className="mn-grid mn-grid--2">
            {[b.changes, b.stays].map((col, i) => (
              <li key={col.title}>
                <Reveal delay={i * 60}>
                  <MnCard hl={i === 0}>
                    <h3 className="mn-h2">{col.title}</h3>
                    <CheckList items={col.items} className="mt-5" />
                  </MnCard>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mn-code mt-8 text-sm text-[var(--mn-text-2)]">{b.note}</p>
        </div>
      </Section>

      <Leadership />
      <Ecosystem />
      <Coverage />

      <Section id="valores" band>
        <SectionHeader label={C.values.label} title={C.values.title} accent={C.values.accent} />
        <div className="mn-sec-body">
          <ul className="mn-grid mn-grid--4">
            {C.values.items.map((v, i) => (
              <li key={v.title}>
                <Reveal delay={i * 60}>
                  <MnCard>
                    <span className="mn-ghostnum" style={{ fontSize: 44 }} aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mn-h3 mt-8">{v.title}</h3>
                    <p className="mn-body mt-3">{v.text}</p>
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
