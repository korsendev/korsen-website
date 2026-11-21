import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { MnCard } from "@/components/ui/mn-card"
import { COVERAGE as C } from "@/lib/content/coverage"

/** Los cuatro mapas a la vez: 2×2 en pantallas anchas; mapa y texto lado a lado. */
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
                  <MnCard hl={active} as="article" className="!p-0 sm:!flex-row">
                    <div className="mn-nodegrid pointer-events-none absolute inset-0 rounded-[var(--mn-r-card)] opacity-60" aria-hidden />
                    <div className="relative flex shrink-0 items-center justify-center p-5 sm:w-[58%] sm:p-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={r.map} alt={r.alt} loading="lazy" decoding="async" width={300} height={250} className="aspect-[6/5] w-full object-contain" />
                    </div>
                    <div className="relative flex flex-1 flex-col justify-end border-t border-[var(--mn-border-1)] p-6 sm:border-l sm:border-t-0 sm:p-7">
                      <p className="mn-kicker flex items-center gap-2" style={active ? { color: "var(--mn-lime)" } : undefined}>
                        <span
                          className="h-2 w-2 shrink-0 rounded-full"
                          style={active ? { background: "var(--mn-lime)", animation: "mn-pulse 2s infinite" } : { background: "var(--mn-text-3)" }}
                          aria-hidden
                        />
                        {r.kicker}
                      </p>
                      <h3 className="mn-h2 mt-3" style={{ fontSize: 26 }}>
                        {r.name}
                      </h3>
                      <p className="mn-body mt-2">{r.detail}</p>
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
