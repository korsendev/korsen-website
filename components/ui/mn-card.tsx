import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  /** Variante destacada (borde lima): como máximo una por fila */
  hl?: boolean
  href?: string
  className?: string
  as?: "div" | "article" | "li"
  label?: string
}

/** Tarjeta de vidrio oscuro. Con `href` se vuelve enlace completo. */
export function MnCard({ children, hl, href, className, as: Tag = "div", label }: Props) {
  const cls = cn("mn-card", hl && "mn-card--hl", href && "mn-card--link", "h-full", className)
  if (href) {
    return (
      <Link href={href} className={cls} aria-label={label}>
        {children}
      </Link>
    )
  }
  return <Tag className={cls}>{children}</Tag>
}

/** Cabecera estándar de tarjeta: icono a la izquierda, numeral fantasma a la derecha. */
export function CardTop({ icon, ghost }: { icon?: ReactNode; ghost?: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      {icon ?? <span />}
      {ghost ? (
        <span className="mn-ghostnum" style={{ fontSize: 44 }} aria-hidden>
          {ghost}
        </span>
      ) : null}
    </div>
  )
}
