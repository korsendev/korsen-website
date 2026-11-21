import type { CSSProperties, ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Entrada suave al hacer scroll, sin JavaScript: se resuelve con CSS (`animation-timeline: view()`).
 * Si el navegador no lo soporta, el contenido simplemente se ve desde el inicio.
 * `delay` se conserva por compatibilidad con el escalonado anterior.
 */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div className={cn("mn-rv h-full", className)} style={{ "--d": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  )
}
