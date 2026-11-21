"use client"

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Entrada `mn-rise` al llegar a pantalla; `delay` en ms para escalonar. */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in")
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("is-in")
            io.disconnect()
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={cn("mn-rv h-full", className)} style={{ "--d": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  )
}
