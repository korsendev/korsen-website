import Link from "next/link"
import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"

type Variant = "primary" | "ghost" | "link"

type Common = {
  variant?: Variant
  compact?: boolean
  /** Muestra la flecha: → en primario/fantasma, ↗ en enlace externo */
  arrow?: boolean
  className?: string
  children: ReactNode
}

type AsLink = Common & { href: string } & Omit<ComponentProps<"a">, "href" | "children" | "className">
type AsButton = Common & { href?: undefined } & Omit<ComponentProps<"button">, "children" | "className">

function classes(variant: Variant, compact?: boolean, className?: string) {
  return cn(
    "mn-btn",
    variant === "primary" && "mn-btn--primary",
    variant === "ghost" && "mn-btn--ghost",
    variant === "link" && "mn-btn--link",
    compact && variant !== "link" && "mn-btn--compact",
    className,
  )
}

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", compact, arrow, className, children, ...rest } = props
  const cls = classes(variant, compact, className)

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...anchor } = rest as { href: string } & Omit<ComponentProps<"a">, "href">
    const external = /^(https?:|mailto:|tel:)/.test(href)
    const mark = arrow ? (
      <span className="mn-arrow" aria-hidden>
        {variant === "link" || external ? "↗" : "→"}
      </span>
    ) : null
    if (external) {
      return (
        <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" {...anchor}>
          {children}
          {mark}
        </a>
      )
    }
    return (
      <Link href={href} className={cls} {...anchor}>
        {children}
        {mark}
      </Link>
    )
  }

  return (
    <button type="button" className={cls} {...(rest as ComponentProps<"button">)}>
      {children}
      {arrow ? (
        <span className="mn-arrow" aria-hidden>
          →
        </span>
      ) : null}
    </button>
  )
}
