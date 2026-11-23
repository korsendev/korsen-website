import Link from "next/link"

type Item = { label: string; title: string; href: string }

/** Enlaces anterior / siguiente al pie de las páginas de detalle. */
export function AdjacentNav({ prev, next }: { prev?: Item; next?: Item }) {
  return (
    <nav aria-label="Más páginas" className="border-t border-[var(--mn-border-2)]">
      <div className="mn-container grid sm:grid-cols-2">
        {prev ? (
          <Link href={prev.href} className="flex min-h-[96px] flex-col justify-center gap-1 py-6 transition-colors hover:text-[var(--mn-accent)] sm:pr-8">
            <span className="mn-kicker">← {prev.label}</span>
            <span className="mn-h3 text-[20px]">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={next.href}
            className="flex min-h-[96px] flex-col justify-center gap-1 border-t border-[var(--mn-border-2)] py-6 transition-colors hover:text-[var(--mn-accent)] sm:items-end sm:border-l sm:border-t-0 sm:pl-8 sm:text-right"
          >
            <span className="mn-kicker">{next.label} →</span>
            <span className="mn-h3 text-[20px]">{next.title}</span>
          </Link>
        ) : null}
      </div>
    </nav>
  )
}
