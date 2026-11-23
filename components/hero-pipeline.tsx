"use client"

import { useEffect, useState } from "react"
import { METHOD } from "@/lib/content/method"
import { Pill } from "@/components/ui/pill"
import { cn } from "@/lib/utils"

const PHASES = METHOD.phases

/**
 * Panel de producto del hero: la ruta del proyecto en cinco fases.
 * Avanza sola (se detiene al pasar el cursor o con prefers-reduced-motion) y cada fase es seleccionable.
 */
export function HeroPipeline() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.classList.contains("lite"))
  }, [])

  useEffect(() => {
    if (paused || reduce) return
    const id = window.setInterval(() => {
      if (!document.hidden) setActive((a) => (a + 1) % PHASES.length)
    }, 3400)
    return () => window.clearInterval(id)
  }, [paused, reduce])

  const pct = (active / (PHASES.length - 1)) * 100
  const cur = PHASES[active]

  return (
    <div
      className="mn-card mx-auto w-full max-w-[1080px] !p-0 text-left"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Barra superior */}
      <div className="flex items-center justify-between gap-4 border-b border-[var(--mn-border-1)] px-5 py-3.5 sm:px-7">
        <div className="flex items-center gap-3">
          <span className="flex gap-1.5" aria-hidden>
            <i className="h-2.5 w-2.5 rounded-full bg-[var(--mn-border-2)]" />
            <i className="h-2.5 w-2.5 rounded-full bg-[var(--mn-border-2)]" />
            <i className="h-2.5 w-2.5 rounded-full bg-[var(--mn-lime)]" />
          </span>
          <span className="mn-kicker">Ruta del proyecto</span>
        </div>
        <span className="mn-kicker hidden sm:inline">De la idea a producción</span>
      </div>

      {/* Ruta */}
      <div className="px-5 pb-2 pt-7 sm:px-7 sm:pt-9">
        <div className="relative">
          {/* línea base y progreso: horizontal en escritorio, vertical en móvil */}
          <div className="absolute bottom-3 left-[7px] top-3 w-px bg-[var(--mn-border-2)] sm:hidden" aria-hidden>
            <div className="w-full bg-[var(--mn-lime)] shadow-[0_0_10px_var(--mn-lime)] transition-[height] duration-700" style={{ height: `${pct}%` }} />
          </div>
          <div className="absolute left-[10%] right-[10%] top-[7px] hidden h-px bg-[var(--mn-border-2)] sm:block" aria-hidden>
            <div className="h-full bg-[var(--mn-lime)] shadow-[0_0_10px_var(--mn-lime)] transition-[width] duration-700" style={{ width: `${pct}%` }} />
          </div>

          <ol className="relative grid gap-5 sm:grid-cols-5 sm:gap-0">
            {PHASES.map((p, i) => {
              const done = i < active
              const on = i === active
              return (
                <li key={p.n}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={on ? "step" : undefined}
                    className="group flex w-full items-start gap-4 text-left sm:flex-col sm:items-center sm:gap-4 sm:text-center"
                  >
                    <span
                      className={cn(
                        "relative z-10 mt-0.5 grid h-[15px] w-[15px] shrink-0 place-items-center rounded-full border transition-all duration-500",
                        on && "scale-125 border-[var(--mn-lime)] bg-[var(--mn-lime)] shadow-[0_0_16px_var(--mn-lime)]",
                        done && "border-[var(--mn-lime)] bg-[var(--mn-lime)]/70",
                        !on && !done && "border-[var(--mn-text-3)] bg-[var(--mn-bg)] group-hover:border-[var(--mn-lime)]",
                      )}
                    >
                      {on ? <span className="absolute inset-[-6px] rounded-full border border-[var(--mn-lime)]/40" style={{ animation: "mn-pulse 2s infinite" }} /> : null}
                    </span>
                    <span className="min-w-0">
                      <span className={cn("mn-code block text-[11px] tracking-[0.1em]", on ? "text-[var(--mn-accent)]" : "text-[var(--mn-text-3)]")}>{p.n}</span>
                      <span className={cn("mt-1 block text-[15px] font-extrabold uppercase tracking-[-0.01em] transition-colors", on ? "text-[var(--mn-text)]" : "text-[var(--mn-text-2)] group-hover:text-[var(--mn-text)]")}>
                        {p.name}
                      </span>
                      <span className="mn-code mt-1 block text-[12px] text-[var(--mn-text-3)]">{p.duration}</span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </div>

      {/* Detalle de la fase activa */}
      <div className="m-5 mt-6 grid gap-4 rounded-[var(--mn-r-lg)] border border-[var(--mn-lime-25)] bg-[var(--mn-lime-06)] p-5 sm:m-7 sm:mt-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8" aria-live="polite">
        <div>
          <p className="mn-kicker" style={{ color: "var(--mn-lime)" }}>
            Fase {cur.n} · {cur.name}
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-[var(--mn-text)]">{cur.text}</p>
        </div>
        <div className="sm:text-right">
          <p className="mn-kicker">{METHOD.deliverableKicker}</p>
          <div className="mt-2">
            <Pill>{cur.deliverable}</Pill>
          </div>
        </div>
      </div>
    </div>
  )
}
