import type { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blog-data"
import { SITE } from "@/lib/content/global"
import { SERVICIOS } from "@/lib/content/servicios"
import { SOLUCIONES } from "@/lib/content/soluciones"
import { TECNOLOGIAS } from "@/lib/content/tecnologias"

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["", "/soluciones", "/servicios", "/proyectos", "/cobertura", "/productos", "/productos/bosqra", "/como-trabajamos", "/nosotros", "/diagnostico", "/contacto", "/blog", "/privacidad", "/terminos"]
  const dynamic = [
    ...SOLUCIONES.map((s) => `/soluciones/${s.slug}`),
    ...SERVICIOS.map((s) => `/servicios/${s.slug}`),
    ...TECNOLOGIAS.map((t) => `/tecnologias/${t.slug}`),
    ...blogPosts.map((p) => `/blog/${p.slug}`),
  ]
  return [...fixed, ...dynamic].map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
  }))
}
