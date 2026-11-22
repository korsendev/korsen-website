import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { MnCard } from "@/components/ui/mn-card"
import { COVERAGE as C } from "@/lib/content/coverage"

/** Los cuatro mapas: 2×2 desde tablet; en móvil, mapa de altura fija y texto debajo. */
export function Coverage({ id = "cobertura", as = "h2", priority = false }: { id?: string; as?: "h1" | "h2"; priority?: boolean }) {
  return (
    <Section id={id} bg={<div className="mn-glow -left-[300px] top-1/3" aria-hidden />}>
      <SectionHeader label={C.label} title={C.title} intro={C.intro} as={as} />
      <div className="mn-sec-body">
        <ul className="mn-coverage grid grid-cols-[minmax(0,1fr)] gap-[var(--mn-gap)] md:grid-cols-2 md:auto-rows-fr">
          {C.regions.map((r, i) => {
            const active = "active" in r && r.active
            return (
              <li key={r.name} className="min-w-0">
                <Reveal delay={(i % 2) * 60}>
                  <MnCard hl={active} as="article" className="!p-0">
                    <div className="mn-nodegrid pointer-events-none absolute inset-0 rounded-[var(--mn-r-card)] opacity-60" aria-hidden />
                    <div className="relative flex h-[210px] items-center justify-center overflow-hidden p-4 sm:h-[320px] sm:p-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={r.map} alt={r.alt} loading={priority && i < 2 ? "eager" : "lazy"} fetchPriority={priority && i < 2 ? "high" : "auto"} decoding="async" width={300} height={250} className="block h-full w-full max-w-full object-contain" />
                    </div>
                    <div className="relative mt-auto border-t border-[var(--mn-border-1)] p-6 sm:p-7">
                      <div>
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
                      </div>
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
