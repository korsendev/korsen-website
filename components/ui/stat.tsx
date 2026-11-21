"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  value: number | string
  /** "+" en lima tras el número */
  plus?: boolean
  /** Unidad pequeña tras el valor (ej. "días") */
  unit?: string
  label: string
}

/** Cifra grande con conteo de 0 al valor en 1.2 s al entrar en pantalla. */
export function Stat({ value, plus, unit, label }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const target = typeof value === "number" ? value : null
  const [n, setN] = useState<number | null>(target)

  useEffect(() => {
    if (target === null) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") return
    setN(0)
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (t: number) => {
          const p = Math.min((t - start) / 1200, 1)
          setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target])

  return (
    <div ref={ref} className="mn-stat">
      <div className="mn-stat__n">
        <span>{target === null ? value : n}</span>
        {plus ? <span className="plus">+</span> : null}
        {unit ? <span className="ml-2 text-[0.3em] font-bold tracking-normal text-[var(--mn-text-2)]">{unit}</span> : null}
      </div>
      <p className="mn-kicker mt-3">{label}</p>
    </div>
  )
}
