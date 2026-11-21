import { HeroNetwork } from "@/components/hero-network"
import { Button } from "@/components/ui/button"
import { Chip } from "@/components/ui/chip"
import { HERO } from "@/lib/content/hero"

/**
 * Estructura del hero (de arriba abajo):
 *  1. Zona principal: texto a la izquierda (chip, titular, intro, botones) y la esfera de nodos a la derecha.
 *  2. Franja inferior: tres datos de tiempo en celdas separadas por divisores.
 */
export function Hero() {
  return (
    <section className="mn-grain relative overflow-hidden">
      <div className="mn-columns pointer-events-none absolute inset-0" aria-hidden />
      <div className="mn-glow -right-[300px] -top-[260px]" aria-hidden />
      {/* En móvil y tablet la esfera queda como fondo tenue */}
      <HeroNetwork className="pointer-events-none absolute right-[-25%] top-[2%] aspect-square w-[105%] opacity-30 sm:right-[-12%] sm:w-[75%] lg:hidden" />

      <div className="mn-container relative grid items-center gap-12 pb-[clamp(56px,7vw,96px)] pt-[clamp(56px,7vw,112px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-8">
        <div>
          <div className="mn-reveal flex flex-wrap items-center gap-x-5 gap-y-3">
            <Chip>{HERO.chip}</Chip>
            <span className="mn-kicker">{HERO.signature}</span>
          </div>

          <h1 className="mn-display mt-8">
            {HERO.titleBefore} <span className="mn-accent">{HERO.accent}</span> {HERO.titleAfter}
          </h1>

          <p className="mn-lead mt-8" style={{ maxWidth: "54ch" }}>
            {HERO.lead}
          </p>

          <div className="mn-reveal mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "180ms" }}>
            <Button href={HERO.primary.href} arrow>
              {HERO.primary.label}
            </Button>
            <Button href={HERO.ghost.href} variant="ghost">
              {HERO.ghost.label}
            </Button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <HeroNetwork className="mx-auto aspect-square w-full max-w-[600px]" />
        </div>
      </div>

      <div className="relative border-t border-[var(--mn-border-2)] bg-[rgba(5,5,5,0.6)] backdrop-blur-sm">
        <ul className="mn-container mn-code grid text-[13px] sm:grid-cols-3">
          {HERO.facts.map((f, i) => (
            <li
              key={f}
              className={`flex items-center gap-3 py-5 text-[var(--mn-text-2)] ${i > 0 ? "border-t border-[var(--mn-border-2)] sm:border-l sm:border-t-0 sm:pl-8" : ""}`}
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
