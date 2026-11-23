import { META, NAV, SITE } from "@/lib/content/global"
import { NOSOTROS } from "@/lib/content/nosotros"
import { SERVICIOS } from "@/lib/content/servicios"
import { JsonLd, ORG_ID, WEBSITE_ID } from "@/lib/seo"

/** Datos estructurados del sitio: organización, sitio web y navegación principal (ayuda a los enlaces de sitio de Google y a los asistentes de IA). */
export function SiteJsonLd() {
  const L = NOSOTROS.leadership
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": ORG_ID,
        name: SITE.name,
        legalName: SITE.name,
        alternateName: "Korsen Dev",
        slogan: SITE.tagline,
        url: SITE.url,
        logo: { "@type": "ImageObject", url: `${SITE.url}/brand/maynode-isotipo.svg` },
        image: `${SITE.url}/opengraph-image`,
        email: SITE.email,
        telephone: SITE.phone,
        description: META.description,
        foundingDate: "2019",
        founder: { "@type": "Person", name: L.name, jobTitle: L.role },
        areaServed: ["DO", "US", "CA", "ES", "GB", "Latinoamérica"],
        address: { "@type": "PostalAddress", addressCountry: "DO" },
        knowsAbout: SERVICIOS.map((s) => s.title),
        knowsLanguage: ["es", "en"],
        contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: SITE.email, telephone: SITE.phone, availableLanguage: ["es", "en"] }],
        sameAs: ["https://bosqra.app"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de MAYNODE",
          itemListElement: SERVICIOS.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.short, url: `${SITE.url}/servicios/${s.slug}` },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE.url,
        name: SITE.name,
        description: META.description,
        inLanguage: ["es", "en"],
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${SITE.url}/#navigation`,
        name: NAV.map((n) => n.label),
        url: NAV.map((n) => `${SITE.url}${n.href}`),
      },
    ],
  }
  return <JsonLd data={data} />
}
