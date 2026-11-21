import { TECNOLOGIAS } from "@/lib/content/tecnologias"
import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "@/lib/og"
import { getTecnologia } from "@/lib/content/tecnologias"

export const alt = "MAYNODE — Tecnología"
export function generateStaticParams() {
  return TECNOLOGIAS.map((t) => ({ slug: t.slug }))
}

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const t = getTecnologia(slug)
  return renderOg({ kicker: "TECNOLOGÍA", title: "Desarrollo con", accent: t?.title ?? "tecnología" })
}
