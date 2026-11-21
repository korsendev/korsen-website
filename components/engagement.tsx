import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { CheckList } from "@/components/ui/check-list"
import { MnCard } from "@/components/ui/mn-card"
import { Badge } from "@/components/ui/pill"
import { Stat } from "@/components/ui/stat"
import { ENGAGEMENT as C } from "@/lib/content/engagement"

export function Engagement({ id = "contratacion" }: { id?: string }) {
  return (
    <Section id={id}>
      <SectionHeader label={C.label} title={C.title} intro={C.intro} />
      <div className="mn-sec-body">
        <ul className="mn-grid mn-grid--4">
          {C.models.map((m, i) => {
            const badge = "badge" in m ? m.badge : undefined
            return (
              <li key={m.n}>
                <Reveal delay={i * 60}>
                  <MnCard hl={!!badge}>
                    <div className="flex items-start justify-between gap-3">
                      {badge ? <Badge>★ {badge}</Badge> : <span />}
                      <span className="mn-ghostnum" style={{ fontSize: 44 }} aria-hidden>
                        {m.n}
                      </span>
                    </div>
                    <h3 className="mn-h2 mt-6" style={{ fontSize: 26 }}>
                      {m.name}
                    </h3>
                    <p className="mn-body mt-3">{m.what}</p>
                    <p className="mn-kicker mt-6">{C.idealKicker}</p>
                    <p className="mt-1.5 text-sm leading-snug">{m.ideal}</p>
                    <div className="mn-card__foot">
                      <p className="mn-kicker">{C.includesKicker}</p>
                      <CheckList items={m.includes} className="mt-1" />
                    </div>
                  </MnCard>
                </Reveal>
              </li>
            )
          })}
        </ul>

        <div className="mt-[clamp(48px,6vw,80px)] grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {C.timings.map((t) => (
            <Stat key={t.label} size="md" value={/^\d+$/.test(t.value) ? Number(t.value) : t.value} unit={t.unit} label={t.label} />
          ))}
        </div>
      </div>
    </Section>
  )
}
