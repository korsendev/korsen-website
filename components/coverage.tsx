import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { MnCard } from "@/components/ui/mn-card"
import { COVERAGE as C } from "@/lib/content/coverage"

export function Coverage({ id = "cobertura" }: { id?: string }) {
  return (
    <Section id={id} bg={<div className="mn-nodegrid pointer-events-none absolute inset-0 opacity-70" aria-hidden />}>
      <SectionHeader label={C.label} title={C.title} intro={C.intro} />
      <div className="mn-sec-body">
        <ul className="mn-grid mn-grid--4">
          {C.regions.map((r, i) => (
            <li key={r.name}>
              <Reveal delay={i * 60}>
                <MnCard hl={"active" in r && r.active}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.map} alt={r.alt} loading="lazy" decoding="async" width={300} height={250} className="aspect-[6/5] w-full object-contain" />
                  <div className="mn-card__foot !pt-6">
                    <p className="mn-kicker flex items-center gap-2" style={"active" in r && r.active ? { color: "var(--mn-lime)" } : undefined}>
                      {"active" in r && r.active ? <span className="h-2 w-2 rounded-full bg-[var(--mn-lime)]" style={{ animation: "mn-pulse 2s infinite" }} aria-hidden /> : null}
                      {r.kicker}
                    </p>
                    <h3 className="mn-h3 mt-2">{r.name}</h3>
                    <p className="mn-body mt-1.5">{r.detail}</p>
                  </div>
                </MnCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
