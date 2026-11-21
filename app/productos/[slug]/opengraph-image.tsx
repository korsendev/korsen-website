import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "@/lib/og"

export const alt = "BOSQRA — Cada pie tablar cuenta"
export function generateStaticParams() {
  return [{ slug: "bosqra" }]
}

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return renderOg({ kicker: "BOSQRA · MAYNODE LABS", title: "Cada pie tablar", accent: "cuenta." })
}
