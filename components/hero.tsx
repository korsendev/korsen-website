import { Button } from "@/components/ui/button"
import { Chip } from "@/components/ui/chip"
import { HERO } from "@/lib/content/hero"

export function Hero() {
  return (
    <section className="mn-grain relative overflow-hidden pb-[clamp(72px,9vw,140px)] pt-[clamp(64px,9vw,150px)]">
      <div className="mn-columns pointer-events-none absolute inset-0" aria-hidden />
      <div className="mn-glow -right-[300px] -top-[260px]" aria-hidden />
      <div className="mn-container relative">
        <div className="mn-reveal">
          <Chip>{HERO.chip}</Chip>
        </div>
        <h1 className="mn-display mn-reveal mt-8 max-w-[14ch] sm:max-w-[16ch] lg:max-w-[13ch]" style={{ animationDelay: "60ms" }}>
          {HERO.titleBefore} <span className="mn-accent">{HERO.accent}</span> {HERO.titleAfter}
        </h1>
        <p className="mn-lead mn-reveal mt-8" style={{ animationDelay: "120ms", maxWidth: "58ch" }}>
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
    </section>
  )
}
