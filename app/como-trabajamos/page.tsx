import type { Metadata } from "next"
import { CtaFinal } from "@/components/cta-final"
import { Engagement } from "@/components/engagement"
import { MethodGrid } from "@/components/method"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { MnCard } from "@/components/ui/mn-card"
import { Pill } from "@/components/ui/pill"
import { Support } from "@/components/support"
import { COMO_TRABAJAMOS as C } from "@/lib/content/como-trabajamos"
import { HERO } from "@/lib/content/hero"
import { METHOD } from "@/lib/content/method"

export const metadata: Metadata = {
  title: C.seoTitle,
  description: C.seoDescription,
  alternates: { canonical: "/como-trabajamos" },
}

export default function ComoTrabajamosPage() {
  const pm = C.pm
  return (
    <>
      <PageHero label={C.label} title={C.title} accent={C.accent} intro={C.intro} facts={HERO.facts} />

      <Section id="metodo" line={false}>
        <SectionHeader label={METHOD.label} title={METHOD.title} intro={METHOD.intro} />
        <div className="mn-sec-body">
          <MethodGrid />
        </div>
      </Section>

      <Section id="gestion" band>
        <SectionHeader label={pm.label} title={pm.title} intro={pm.intro} />
        <div className="mn-sec-body space-y-14">
          <div>
            <h3 className="mn-kicker mb-5">{pm.govTitle}</h3>
            <ul className="mn-grid mn-grid--4">
              {pm.governance.map((g, i) => (
                <li key={g.role}>
                  <Reveal delay={i * 60}>
                    <MnCard>
                      <span className="mn-ghostnum" style={{ fontSize: 44 }} aria-hidden>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h4 className="mn-h3 mt-8">{g.role}</h4>
                      <p className="mn-body mt-3">{g.text}</p>
                    </MnCard>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mn-kicker mb-5">{pm.delTitle}</h3>
            <MnCard>
              <dl>
                {pm.deliverables.map((d) => (
                  <div key={d.phase} className="grid gap-3 border-t border-[var(--mn-border-1)] py-5 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-[200px_1fr] md:items-center">
                    <dt className="mn-h3">{d.phase}</dt>
                    <dd className="flex flex-wrap gap-2">
                      {d.items.map((it) => (
                        <Pill key={it}>{it}</Pill>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </MnCard>
          </div>

          <div>
            <h3 className="mn-kicker mb-5">{pm.cadenceTitle}</h3>
            <ul className="mn-grid mn-grid--3x">
              {pm.cadence.map((c, i) => (
                <li key={c.freq}>
                  <Reveal delay={i * 60}>
                    <MnCard>
                      <h4 className="mn-h2" style={{ fontSize: 28 }}>
                        {c.freq}
                      </h4>
                      <p className="mn-body mt-3">{c.text}</p>
                    </MnCard>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Engagement />
      <Support />
      <CtaFinal />
    </>
  )
}
