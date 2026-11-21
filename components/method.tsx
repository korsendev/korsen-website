import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { MnCard } from "@/components/ui/mn-card"
import { Pill } from "@/components/ui/pill"
import { METHOD as C } from "@/lib/content/method"

/** Cinco fases: 5 columnas en escritorio, carrusel horizontal en tablet y móvil. */
export function MethodGrid() {
  return (
    <ol className="mn-scroller" aria-label="Fases del método">
      {C.phases.map((p, i) => (
        <li key={p.n} className="min-w-0">
          <Reveal delay={i * 60}>
            <MnCard>
              <div className="flex items-start justify-between gap-3">
                <Pill>{p.duration}</Pill>
                <span className="mn-ghostnum" style={{ fontSize: 44 }} aria-hidden>
                  {p.n}
                </span>
              </div>
              <h3 className="mn-h2 mt-8" style={{ fontSize: 26 }}>
                {p.name}
              </h3>
              <p className="mn-body mt-3">{p.text}</p>
              <div className="mn-card__foot border-t border-[var(--mn-border-1)]">
                <span className="mn-kicker block">{C.deliverableKicker}</span>
                <span className="mt-1 block text-sm font-semibold">{p.deliverable}</span>
              </div>
            </MnCard>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}

export function Method() {
  return (
    <Section id="metodo" band>
      <SectionHeader label={C.label} title={C.title} intro={C.intro} />
      <div className="mn-sec-body">
        <MethodGrid />
        <div className="mt-10">
          <Button href={C.cta.href} variant="ghost">
            {C.cta.label}
          </Button>
        </div>
      </div>
    </Section>
  )
}
