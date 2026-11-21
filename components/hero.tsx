import { HeroNetwork } from "@/components/hero-network"
import { Button } from "@/components/ui/button"
import { Chip } from "@/components/ui/chip"
import { HERO } from "@/lib/content/hero"

/**
 * Hero centrado: la esfera de nodos ocupa el fondo, al centro, y todo el contenido
 * (chip, titular, intro, botones y datos) se alinea al centro sobre ella.
 */
export function Hero() {
  return (
    <section className="mn-grain relative overflow-hidden text-center">
      <div className="mn-columns pointer-events-none absolute inset-0" aria-hidden />
      <div className="mn-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden />

      {/* Esfera centrada detrás del texto */}
      <HeroNetwork className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(1100px,150vw)] -translate-x-1/2 -translate-y-[52%] opacity-60 sm:opacity-80" />
      {/* Viñeta para que el texto se lea sobre los nodos */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 55% at 50% 48%, rgba(5,5,5,0.62) 0%, rgba(5,5,5,0.2) 55%, transparent 100%)" }}
        aria-hidden
      />

      <div className="mn-container relative flex flex-col items-center pb-[clamp(72px,9vw,128px)] pt-[clamp(72px,9vw,128px)]">
        <div className="mn-reveal flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          <Chip>{HERO.chip}</Chip>
          <span className="mn-kicker">{HERO.signature}</span>
        </div>

        <h1 className="mn-display mt-8 max-w-[18ch] text-balance sm:max-w-[16ch]">
          {HERO.titleBefore} <span className="mn-accent">{HERO.accent}</span> {HERO.titleAfter}
        </h1>

        <p className="mn-lead mt-8 text-[var(--mn-text)]/80" style={{ maxWidth: "56ch" }}>
          {HERO.lead}
        </p>

        <div className="mn-reveal mt-10 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: "180ms" }}>
          <Button href={HERO.primary.href} arrow>
            {HERO.primary.label}
          </Button>
          <Button href={HERO.ghost.href} variant="ghost">
            {HERO.ghost.label}
          </Button>
        </div>
      </div>

      <div className="relative border-t border-[var(--mn-border-2)] bg-[rgba(5,5,5,0.6)] backdrop-blur-sm">
        <ul className="mn-container mn-code grid text-[13px] sm:grid-cols-3">
          {HERO.facts.map((f, i) => (
            <li
              key={f}
              className={`flex items-center justify-center gap-3 py-5 text-[var(--mn-text-2)] ${i > 0 ? "border-t border-[var(--mn-border-2)] sm:border-l sm:border-t-0" : ""}`}
            >
              <span className="h-1.5 w-1.5 shrink-0 bg-[var(--mn-lime)]" aria-hidden />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
