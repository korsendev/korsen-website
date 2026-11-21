import { META, SITE } from "@/lib/content/global"

/** Datos estructurados del sitio: Organization + WebSite (solo hechos que ya publica el sitio). */
export function SiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        alternateName: "Korsen Dev",
        url: SITE.url,
        logo: `${SITE.url}/brand/maynode-isotipo.svg`,
        email: SITE.email,
        telephone: SITE.phone,
        description: META.description,
        areaServed: ["DO", "US", "CA", "ES", "GB", "Latinoamérica"],
        address: { "@type": "PostalAddress", addressCountry: "DO" },
        contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: SITE.email, telephone: SITE.phone, availableLanguage: "es" }],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        inLanguage: "es",
        publisher: { "@id": `${SITE.url}/#organization` },
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
