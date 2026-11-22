import { OG_CONTENT_TYPE, OG_SIZE, ogFromFile } from "@/lib/og"

export const alt = "BOSQRA — Cada pie tablar cuenta"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export function generateStaticParams() {
  return [{ slug: "bosqra" }]
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return ogFromFile("productos", slug)
}
