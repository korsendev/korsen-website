import { SERVICIOS } from "@/lib/content/servicios"
import { OG_CONTENT_TYPE, OG_SIZE, ogFromFile } from "@/lib/og"

export const alt = "MAYNODE — Servicio"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export function generateStaticParams() {
  return SERVICIOS.map((s) => ({ slug: s.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return ogFromFile("servicios", slug)
}
