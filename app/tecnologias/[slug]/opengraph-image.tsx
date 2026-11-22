import { TECNOLOGIAS } from "@/lib/content/tecnologias"
import { OG_CONTENT_TYPE, OG_SIZE, ogFromFile } from "@/lib/og"

export const alt = "MAYNODE — Tecnología"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export function generateStaticParams() {
  return TECNOLOGIAS.map((t) => ({ slug: t.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return ogFromFile("tecnologias", slug)
}
