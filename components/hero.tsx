import { HeroPipeline } from "@/components/hero-pipeline"
import { Button } from "@/components/ui/button"
import { FactsStrip } from "@/components/facts-strip"
import { Chip } from "@/components/ui/chip"
import { HERO } from "@/lib/content/hero"

/**
 * Hero centrado, en cinco niveles de jerarquía:
 *  1. Chip de marca  2. Titular  3. Intro de una frase  4. Acciones
 *  5. Panel de producto (la ruta del proyecto) y, al pie, la franja lima con los tres compromisos de tiempo.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden text-center">
      <div className="mn-columns pointer-events-none absolute inset-0" aria-hidden />
      {/* Luz superior central: enfoca la mirada en el titular */}
      <div className="mn-glow left-1/2 -top-[520px] -translate-x-1/2" style={{ width: 1100, height: 1100, opacity: 0.16 }} aria-hidden />

      <div className="mn-container relative flex flex-col items-center pb-[clamp(56px,7vw,96px)] pt-[clamp(48px,6vw,96px)]">
        <div className="mn-reveal flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          <Chip>{HERO.chip}</Chip>
          <span className="mn-kicker">{HERO.signature}</span>
        </div>

        <h1 className="mn-display mt-7 max-w-[17ch] text-balance" style={{ fontSize: "clamp(42px, 6.4vw, 96px)" }}>
          {HERO.titleBefore} <span className="mn-accent">{HERO.accent}</span> {HERO.titleAfter}
        </h1>

        <p className="mn-lead mt-6" style={{ maxWidth: "58ch" }}>
          {HERO.lead}
        </p>

        <div className="mn-reveal mt-9 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: "160ms" }}>
          <Button href={HERO.primary.href} arrow>
            {HERO.primary.label}
          </Button>
          <Button href={HERO.ghost.href} variant="ghost">
            {HERO.ghost.label}
          </Button>
        </div>

        <div className="mt-[clamp(40px,5vw,72px)] w-full">
          <HeroPipeline />
        </div>
      </div>

      <FactsStrip facts={HERO.facts} />
    </section>
  )
}
