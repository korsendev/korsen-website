import Link from "next/link"
import { SITE } from "@/lib/content/global"

export type Crumb = { label: string; href?: string }

/** Migas de pan visibles + datos estructurados (BreadcrumbList) para buscadores. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Inicio", href: "/" }, ...items]
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE.url}${c.href === "/" ? "" : c.href}` } : {}),
    })),
  }
  return (
    <nav aria-label="Ruta de navegación" className="mb-8">
      <ol className="mn-code flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-[var(--mn-text-3)]">
        {all.map((c, i) => (
          <li key={c.label} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden>/</span> : null}
            {c.href ? (
              <Link href={c.href} className="mn-tap transition-colors hover:text-[var(--mn-lime)]">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-[var(--mn-text-2)]">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </nav>
  )
}
