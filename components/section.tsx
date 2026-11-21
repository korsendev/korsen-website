import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  id?: string
  children: ReactNode
  /** Banda alterna #0B0B0B */
  band?: boolean
  /** Borde superior de separación */
  line?: boolean
  className?: string
  /** Decoración de fondo (halo, rejilla) detrás del contenido */
  bg?: ReactNode
}

/** Contenedor de sección: padding vertical y margen lateral estándar. */
export function Section({ id, children, band, line = true, className, bg }: Props) {
  return (
    <section id={id} className={cn("mn-section overflow-hidden", band && "mn-section--band", line && "mn-section--line", className)}>
      {bg}
      <div className="mn-container relative">{children}</div>
    </section>
  )
}
