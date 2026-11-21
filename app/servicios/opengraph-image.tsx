import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "@/lib/og"

export const alt = "MAYNODE — Servicios"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return renderOg({ kicker: "SERVICIOS", title: "Un solo aliado para toda tu", accent: "tecnología" })
}
