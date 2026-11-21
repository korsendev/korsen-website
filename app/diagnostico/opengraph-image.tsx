import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "@/lib/og"

export const alt = "MAYNODE — Evaluar mi proyecto"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return renderOg({ kicker: "EVALUACIÓN DE PROYECTO", title: "Cuéntanos qué quieres", accent: "resolver." })
}
