import { SERVICIOS } from "@/lib/content/servicios"
import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "@/lib/og"
import { getServicio } from "@/lib/content/servicios"
import { splitAccent } from "@/lib/utils"

export const alt = "MAYNODE — Servicio"
export function generateStaticParams() {
  return SERVICIOS.map((s) => ({ slug: s.slug }))
}

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = getServicio(slug)
  const t = splitAccent(s?.title ?? "Servicios")
  return renderOg({ kicker: s ? `SERVICIO ${s.n}` : "SERVICIOS", title: t.title, accent: t.accent })
}
