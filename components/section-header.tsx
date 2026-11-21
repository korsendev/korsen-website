import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  /** Etiqueta mono: "NN · NOMBRE" (el cuadrado lima lo pinta CSS) */
  label: string
  title: ReactNode
  /** Palabra o frase final en lima (máx. una por titular) */
  accent?: string
  intro?: ReactNode
  /** Nivel semántico: h1 en cabeceras de página, h2 en secciones */
  as?: "h1" | "h2"
  className?: string
}

/** Cabecera única de sección: etiqueta + título + intro, siempre en la misma posición. */
export function SectionHeader({ label, title, accent, intro, as: Tag = "h2", className }: Props) {
  return (
    <header className={cn("mn-sec-head", className)}>
      <span className="mn-label">{label}</span>
      <Tag className="mn-h1">
        {title}
        {accent ? (
          <>
            {" "}
            <span className="mn-accent">{accent}</span>
          </>
        ) : null}
      </Tag>
      {intro ? <p className="mn-lead">{intro}</p> : null}
    </header>
  )
}
