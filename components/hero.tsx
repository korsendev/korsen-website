import { HeroNetwork } from "@/components/hero-network"
import { Button } from "@/components/ui/button"
import { Chip } from "@/components/ui/chip"
import { HERO } from "@/lib/content/hero"

export function Hero() {
  return (
    <section className="mn-grain relative overflow-hidden pb-[clamp(72px,9vw,140px)] pt-[clamp(64px,9vw,150px)]">
      <div className="mn-columns pointer-events-none absolute inset-0" aria-hidden />
      <div className="mn-glow -right-[300px] -top-[260px]" aria-hidden />
      <HeroNetwork className="pointer-events-none absolute right-[-30%] top-[4%] aspect-square w-[110%] opacity-30 sm:right-[-15%] sm:w-[80%] lg:hidden" />
      <div className="mn-container relative grid items-center gap-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(340px,0.75fr)]">
        <div>
          <div className="mn-reveal">
            <Chip>{HERO.chip}</Chip>
          </div>
          <h1 className="mn-display mt-8 max-w-[14ch] sm:max-w-[16ch] lg:max-w-none">
            {HERO.titleBefore} <span className="mn-accent">{HERO.accent}</span> {HERO.titleAfter}
          </h1>
          <p className="mn-lead mt-8" style={{ maxWidth: "58ch" }}>
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
          <ul className="mn-code mn-reveal mt-10 flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-[var(--mn-text-2)]" style={{ animationDelay: "240ms" }}>
            {HERO.facts.map((f) => (
              <li key={f} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 bg-[var(--mn-lime)]" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
          <p className="mn-kicker mn-reveal mt-12" style={{ animationDelay: "300ms" }}>
            MAYNODE · {HERO.signature}
          </p>
        </div>
        <div className="relative hidden lg:block">
          <HeroNetwork className="-mx-[20%] aspect-square w-[140%] max-w-none" />
        </div>
      </div>
    </section>
  )
}
