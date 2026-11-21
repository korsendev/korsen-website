import { SOLUCIONES } from "@/lib/content/soluciones"
import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "@/lib/og"
import { getSolucion } from "@/lib/content/soluciones"

export const alt = "MAYNODE — Solución"
export function generateStaticParams() {
  return SOLUCIONES.map((s) => ({ slug: s.slug }))
}

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = getSolucion(slug)
  return renderOg({ kicker: s ? `SOLUCIÓN ${s.n}` : "SOLUCIONES", title: s?.h1 ?? "Soluciones", accent: s?.accent })
}
