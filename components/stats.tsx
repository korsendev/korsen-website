import { Stat } from "@/components/ui/stat"
import { STATS } from "@/lib/content/hero"

/** Franja de cifras. */
export function Stats({ className = "" }: { className?: string }) {
  return (
    <section aria-label="Cifras de MAYNODE" className={`border-t border-[var(--mn-border-2)] bg-[var(--mn-surface-1)] ${className}`}>
      <div className="mn-container grid grid-cols-2 gap-x-6 gap-y-12 py-[clamp(56px,7vw,96px)] lg:grid-cols-4">
        {STATS.map((s) => (
          <Stat key={s.label} value={s.value} plus label={s.label} />
        ))}
      </div>
    </section>
  )
}
