"use client"

import { useState } from "react"
import { COVERAGE } from "@/lib/content/coverage"
import { cn } from "@/lib/utils"

/** Mapa grande con selector de región: lista a la izquierda, mapa en el panel derecho. */
export function CoverageMap() {
  const [i, setI] = useState(0)
  const regions = COVERAGE.regions
  const r = regions[i]

  return (
    <div className="grid gap-[var(--mn-gap)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <ul className="order-2 grid gap-[var(--mn-gap)] lg:order-1" style={{ gridAutoRows: "1fr" }} role="tablist" aria-label="Regiones">
        {regions.map((reg, idx) => (
          <li key={reg.name} className="flex">
            <button
              type="button"
              role="tab"
              id={`reg-${idx}`}
              aria-selected={idx === i}
              aria-controls="reg-panel"
              onClick={() => setI(idx)}
              className={cn(
                "mn-card w-full items-start text-left",
                idx === i && "mn-card--hl",
              )}
            >
              <span className="mn-kicker flex items-center gap-2" style={idx === i ? { color: "var(--mn-lime)" } : undefined}>
                <span className={cn("h-2 w-2 rounded-full", idx === i ? "bg-[var(--mn-lime)]" : "bg-[var(--mn-text-3)]")} style={idx === i ? { animation: "mn-pulse 2s infinite" } : undefined} aria-hidden />
                {reg.kicker}
              </span>
              <span className="mn-h2 mt-3" style={{ fontSize: 26 }}>
                {reg.name}
              </span>
              <span className="mn-body mt-2">{reg.detail}</span>
            </button>
          </li>
        ))}
      </ul>

      <div id="reg-panel" role="tabpanel" aria-labelledby={`reg-${i}`} className="mn-card order-1 min-h-[320px] !p-4 sm:!p-8 lg:order-2">
        <div className="mn-nodegrid pointer-events-none absolute inset-0 rounded-[var(--mn-r-card)]" aria-hidden />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img key={r.map} src={r.map} alt={r.alt} decoding="async" width={300} height={250} className="relative my-auto aspect-[6/5] w-full object-contain" />
        <p className="mn-kicker relative mt-4 text-center">
          {r.name} · {r.detail}
        </p>
      </div>
    </div>
  )
}
