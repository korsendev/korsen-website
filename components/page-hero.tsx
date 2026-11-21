import type { ReactNode } from "react"
import { Breadcrumbs, type Crumb } from "@/components/breadcrumbs"
import { FactsStrip } from "@/components/facts-strip"
import { SectionHeader } from "@/components/section-header"

type Props = {
  label: string
  title: ReactNode
  accent?: string
  intro?: ReactNode
  /** Botones u otros elementos bajo la cabecera */
  actions?: ReactNode
  children?: ReactNode
  /** Franja lima inferior con datos clave */
  facts?: readonly string[]
  crumbs?: Crumb[]
}

/** Cabecera de página interior: misma SectionHeader (h1) sobre fondo con halo. */
export function PageHero({ label, title, accent, intro, actions, children, facts, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="mn-columns pointer-events-none absolute inset-0" aria-hidden />
      <div className="mn-glow -right-[320px] -top-[320px]" aria-hidden />
      <div className="mn-container relative pb-[clamp(56px,7vw,100px)] pt-[clamp(56px,8vw,120px)]">
        {crumbs ? <Breadcrumbs items={crumbs} /> : null}
        <SectionHeader as="h1" label={label} title={title} accent={accent} intro={intro} />
        {actions ? <div className="mt-10 flex flex-wrap items-center gap-4">{actions}</div> : null}
        {children}
      </div>
      {facts ? <FactsStrip facts={facts} /> : null}
    </section>
  )
}
