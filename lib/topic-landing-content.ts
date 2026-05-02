import type { CotizarTopicDef } from "@/lib/cotizar-topics"

export type LandingDetailBlock = { title: string; text: string }

export type TopicLandingCopy = {
  intro: string
  details: LandingDetailBlock[]
  /** IDs de `showcaseProjects` */
  relatedProjectIds: string[]
}

const ALL_SHOWCASE = ["raapydo", "dorka", "raelix", "vortex"]

/** Ajustes por slug; el resto usa `defaultLandingCopy` */
const overrides: Partial<Record<string, Partial<TopicLandingCopy>>> = {
  "apps-moviles": {
    intro:
      "Diseñamos y publicamos apps iOS y Android (nativas o multiplataforma) con foco en rendimiento, notificaciones y experiencia offline cuando aplica.",
    relatedProjectIds: ["raapydo", "raelix"],
  },
  "integraciones-apis": {
    intro:
      "Conectamos ERPs, pasarelas de pago, CRMs y servicios propios mediante APIs REST/GraphQL, colas y contratos versionados.",
    relatedProjectIds: ["raelix", "vortex", "raapydo"],
  },
  "ia-ml": {
    intro:
      "Prototipos y productos con modelos de lenguaje, visión o datos tabulares: pipelines, evaluación, despliegue y gobernanza básica.",
    relatedProjectIds: ["vortex"],
  },
  react: {
    intro:
      "Interfaces con React y ecosistema moderno: componentes reutilizables, estado predecible y rendimiento medido en Core Web Vitals.",
  },
  nextjs: {
    intro:
      "Sitios y apps con Next.js: SSR/SSG, rutas dinámicas, edge cuando conviene y despliegue optimizado para producción.",
  },
}

function defaultLandingCopy(topic: CotizarTopicDef): TopicLandingCopy {
  if (topic.kind === "servicio") {
    return {
      intro: `En Korsen impulsamos **${topic.title}** con arquitectura clara, entregas iterativas y código listo para producción. Acompañamos desde el descubrimiento hasta el mantenimiento.`,
      details: [
        {
          title: "Alcance típico",
          text: "Análisis de requerimientos, diseño técnico, implementación, pruebas, despliegue y documentación operativa.",
        },
        {
          title: "Cómo colaboramos",
          text: "Equipos alineados a tu zona horaria, comunicación en español/inglés y transparencia en avances y riesgos.",
        },
      ],
      relatedProjectIds: [...ALL_SHOWCASE],
    }
  }
  return {
    intro: `Desarrollo y consultoría con **${topic.title}**: buenas prácticas, seguridad y escalabilidad desde el primer sprint.`,
    details: [
      {
        title: "Casos de uso",
        text: "APIs, frontends, datos en tiempo real y automatización integrados con tu ecosistema actual.",
      },
      {
        title: "Equipo",
        text: "Ingenieros con experiencia en productos digitales y entornos que exigen estabilidad y trazabilidad.",
      },
    ],
    relatedProjectIds: [...ALL_SHOWCASE],
  }
}

export function getLandingCopy(topic: CotizarTopicDef): TopicLandingCopy {
  const base = defaultLandingCopy(topic)
  const o = overrides[topic.slug]
  if (!o) return base
  return {
    intro: o.intro ?? base.intro,
    details: o.details ?? base.details,
    relatedProjectIds: o.relatedProjectIds ?? base.relatedProjectIds,
  }
}
