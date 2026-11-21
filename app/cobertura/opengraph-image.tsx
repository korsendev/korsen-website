import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "@/lib/og"

export const alt = "MAYNODE — Cobertura"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return renderOg({ kicker: "COBERTURA", title: "Desde el Caribe para el", accent: "mundo" })
}
