import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { MnCard } from "@/components/ui/mn-card"
import { COVERAGE as C } from "@/lib/content/coverage"

/** Los cuatro mapas a la vez: 2×2 en escritorio y tablet ancha, 1 columna en móvil. */
export function Coverage({ id = "cobertura", as = "h2" }: { id?: string; as?: "h1" | "h2" }) {
  return (
    <Section id={id} bg={<div className="mn-glow -left-[300px] top-1/3" aria-hidden />}>
      <SectionHeader label={C.label} title={C.title} intro={C.intro} as={as} />
      <div className="mn-sec-body">
        <ul className="grid gap-[var(--mn-gap)] md:grid-cols-2" style={{ gridAutoRows: "1fr" }}>
          {C.regions.map((r, i) => {
            const active = "active" in r && r.active
            return (
              <li key={r.name}>
                <Reveal delay={(i % 2) * 60}>
                  <MnCard hl={active} as="article">
                    <div className="mn-nodegrid pointer-events-none absolute inset-0 rounded-[var(--mn-r-card)] opacity-60" aria-hidden />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.map} alt={r.alt} loading="lazy" decoding="async" width={300} height={250} className="relative aspect-[6/5] w-full object-contain" />
                    <div className="mn-card__foot relative flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-t border-[var(--mn-border-1)] !pt-5">
                      <div>
                        <p className="mn-kicker flex items-center gap-2" style={active ? { color: "var(--mn-lime)" } : undefined}>
                          {active ? <span className="h-2 w-2 rounded-full bg-[var(--mn-lime)]" style={{ animation: "mn-pulse 2s infinite" }} aria-hidden /> : null}
                          {r.kicker}
                        </p>
                        <h3 className="mn-h2 mt-2" style={{ fontSize: 28 }}>
                          {r.name}
                        </h3>
                      </div>
                      <p className="mn-body">{r.detail}</p>
                    </div>
                  </MnCard>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
