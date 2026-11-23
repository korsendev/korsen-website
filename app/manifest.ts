import type { MetadataRoute } from "next"
import { META, SITE } from "@/lib/content/global"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: META.description,
    start_url: "/",
    display: "browser",
    lang: "es",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  }
}
