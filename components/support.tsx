import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { CheckList } from "@/components/ui/check-list"
import { MnCard } from "@/components/ui/mn-card"
import { Badge } from "@/components/ui/pill"
import { SUPPORT as C } from "@/lib/content/support"

export function Support({ id = "soporte" }: { id?: string }) {
  return (
    <Section id={id} band>
      <SectionHeader label={C.label} title={C.title} accent={C.accent} intro={C.intro} />
      <div className="mn-sec-body">
        <ul className="mn-grid mn-grid--3x">
          {C.plans.map((p, i) => {
            const badge = "badge" in p ? p.badge : undefined
            return (
              <li key={p.name}>
                <Reveal delay={i * 60}>
                  <MnCard hl={!!badge}>
                    <div className="min-h-[26px]">{badge ? <Badge>★ {badge}</Badge> : null}</div>
                    <h3 className="mn-h2 mt-4" style={{ fontSize: 28 }}>
                      {p.name}
                    </h3>
                    <dl className="mt-6">
                      {C.rows.map((row, r) => (
                        <div key={row} className="grid grid-cols-[96px_1fr] items-baseline gap-4 border-t border-[var(--mn-border-1)] py-3 first:border-t-0 first:pt-0">
                          <dt className="mn-kicker">{row}</dt>
                          <dd className={r === 0 ? "text-sm text-[var(--mn-text-2)]" : "mn-code text-sm font-medium"}>{p.values[r]}</dd>
                        </div>
                      ))}
                    </dl>
                  </MnCard>
                </Reveal>
              </li>
            )
          })}
        </ul>

        <Reveal className="mt-[var(--mn-gap)] !h-auto">
          <MnCard>
            <p className="mn-kicker">{C.security.kicker}</p>
            <h3 className="mn-h2 mt-3">{C.security.title}</h3>
            <CheckList items={C.security.items} className="mt-6 grid gap-x-12 md:grid-cols-2" />
          </MnCard>
        </Reveal>
      </div>
    </Section>
  )
}
