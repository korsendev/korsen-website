import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "@/lib/og"

export const alt = "MAYNODE — Blog"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return renderOg({ kicker: "BLOG", title: "Ideas para hacer crecer tu negocio con", accent: "tecnología." })
}
