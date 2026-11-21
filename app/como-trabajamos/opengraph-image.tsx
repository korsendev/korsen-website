import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "@/lib/og"

export const alt = "MAYNODE — Cómo trabajamos"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return renderOg({ kicker: "CÓMO TRABAJAMOS", title: "Rápido, sin", accent: "sorpresas." })
}
