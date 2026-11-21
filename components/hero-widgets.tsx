"use client"

import { useEffect, useState } from "react"
import { MnCard } from "@/components/ui/mn-card"

const LOGS = [
  { m: "GET", p: "/api/v1/auth", s: 200 },
  { m: "POST", p: "/api/v1/deploy", s: 201 },
  { m: "GET", p: "/api/v1/clientes", s: 200 },
  { m: "POST", p: "/api/v1/facturas", s: 201 },
  { m: "GET", p: "/api/v1/reportes", s: 200 },
  { m: "PATCH", p: "/api/v1/inventario", s: 200 },
]

const TONE: Record<string, string> = {
  POST: "text-emerald-400 bg-emerald-400/10",
  PATCH: "text-amber-400 bg-amber-400/10",
  GET: "text-sky-400 bg-sky-400/10",
}

/** Paneles ilustrativos del hero (estilo Korsen). Los valores son una simulación, no métricas reales. */
export function HeroWidgets() {
  const [cpu, setCpu] = useState(24)
  const [latency, setLatency] = useState(12)
  const [logs, setLogs] = useState(LOGS.slice(0, 4))

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const a = setInterval(() => {
      setCpu(18 + Math.floor(Math.random() * 20))
      setLatency(8 + Math.floor(Math.random() * 8))
    }, 2500)
    const b = setInterval(() => setLogs((prev) => [...prev.slice(1), LOGS[Math.floor(Math.random() * LOGS.length)]]), 3000)
    return () => {
      clearInterval(a)
      clearInterval(b)
    }
  }, [])

  return (
    <div className="hidden w-full max-w-sm flex-col gap-4 justify-self-end lg:flex" aria-hidden>
      <MnCard className="!p-5" hl>
        <div className="flex items-center justify-between">
          <span className="mn-kicker">Estado del sistema</span>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
        </div>
        <div className="mt-4 space-y-3 text-xs">
          <div>
            <div className="mb-1 flex justify-between">
              <span className="text-[var(--mn-text-2)]">CPU</span>
              <span className="mn-code font-bold text-[var(--mn-lime)]">{cpu}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-[var(--mn-lime)] transition-all duration-1000" style={{ width: `${cpu}%` }} />
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--mn-text-2)]">LATENCIA</span>
            <span className="mn-code font-bold">{latency} ms</span>
          </div>
        </div>
      </MnCard>

      <MnCard className="!p-5">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="mn-kicker">Tráfico de API</span>
          <span className="mn-code text-[10px] font-bold text-[var(--mn-lime)]">EN VIVO</span>
        </div>
        <ul className="mn-code mt-3 space-y-2 text-[11px]">
          {logs.map((l, i) => (
            <li key={`${l.p}-${i}`} className="flex items-center justify-between gap-2">
              <span className="flex min-w-0 items-center gap-1.5">
                <span className={`shrink-0 rounded-[4px] px-1 font-bold ${TONE[l.m]}`}>{l.m}</span>
                <span className="truncate text-white/70">{l.p}</span>
              </span>
              <span className="shrink-0 font-bold text-[var(--mn-lime)]">{l.s}</span>
            </li>
          ))}
        </ul>
      </MnCard>
      <p className="mn-kicker text-center">Vista ilustrativa</p>
    </div>
  )
}
