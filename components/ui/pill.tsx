import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Entregable o duración, fondo lima. */
export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("mn-pill", className)}>{children}</span>
}

/** Badge de estado: MÁS ELEGIDO / RECOMENDADO / EN PRODUCCIÓN / EN DESARROLLO. */
export function Badge({ children, tone = "lime" }: { children: ReactNode; tone?: "lime" | "ok" | "wip" }) {
  return <span className={cn("mn-badge", tone === "ok" && "mn-badge--ok", tone === "wip" && "mn-badge--wip")}>{children}</span>
}
