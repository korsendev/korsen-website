import { SOLUCIONES } from "@/lib/content/soluciones"
import { OG_CONTENT_TYPE, OG_SIZE, ogFromFile } from "@/lib/og"

export const alt = "MAYNODE — Solución"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export function generateStaticParams() {
  return SOLUCIONES.map((s) => ({ slug: s.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return ogFromFile("soluciones", slug)
}
