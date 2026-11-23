import type { MetadataRoute } from "next"
import { SITE } from "@/lib/content/global"

/**
 * Rastreadores de IA y de búsqueda con IA a los que se invita expresamente: el sitio es público y
 * queremos que los asistentes puedan leerlo, citarlo y recomendarlo. Se listan por nombre para que
 * cualquier regla genérica futura no los bloquee por accidente.
 */
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "DuckAssistBot",
  "MistralAI-User",
  "cohere-ai",
  "Meta-ExternalAgent",
  "CCBot",
]

/** Variantes por parámetro (idioma forzado, preselección del formulario) que no deben indexarse como páginas aparte. */
const NO_INDEX_PARAMS = ["/*?lang=", "/*&lang=", "/*?tema=", "/*&tema="]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: NO_INDEX_PARAMS },
      { userAgent: AI_BOTS, allow: "/", disallow: NO_INDEX_PARAMS },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
