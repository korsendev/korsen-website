import { SITE } from "@/lib/content/global"

/** Inserta datos estructurados (JSON-LD). El "<" se escapa para que el contenido no pueda cerrar el script. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }} />
}

export const ORG_ID = `${SITE.url}/#organization`
export const WEBSITE_ID = `${SITE.url}/#website`

const abs = (path: string) => `${SITE.url}${path === "/" ? "" : path}`

/** Servicio de MAYNODE (soluciones y líneas de servicio). */
export function serviceLd(o: { path: string; name: string; description: string; serviceType: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${abs(o.path)}#service`,
    name: o.name,
    description: o.description,
    serviceType: o.serviceType,
    url: abs(o.path),
    provider: { "@id": ORG_ID },
    areaServed: ["DO", "US", "CA", "ES", "GB", "Latinoamérica"],
    availableLanguage: ["es", "en"],
  }
}

/** Preguntas frecuentes visibles en la página (FAQPage). */
export function faqLd(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  }
}

/** Página genérica con su tipo (AboutPage, ContactPage, CollectionPage…). */
export function pageLd(o: { type: string; path: string; name: string; description: string; extra?: Record<string, unknown> }) {
  return {
    "@context": "https://schema.org",
    "@type": o.type,
    "@id": `${abs(o.path)}#webpage`,
    url: abs(o.path),
    name: o.name,
    description: o.description,
    inLanguage: "es",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    ...o.extra,
  }
}
