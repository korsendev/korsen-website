import Link from "next/link"
import type { ReactNode } from "react"

export function Tag({ children, href }: { children: ReactNode; href?: string }) {
  if (href) {
    return (
      <Link href={href} className="mn-tag transition-colors hover:border-[var(--mn-lime-45)]">
        {children}
      </Link>
    )
  }
  return <span className="mn-tag">{children}</span>
}
