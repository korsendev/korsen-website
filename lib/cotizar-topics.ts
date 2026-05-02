export type CotizarKind = "servicio" | "tecnologia"

export type CotizarTopicDef = {
  slug: string
  title: string
  kind: CotizarKind
}

const SERVICIOS: CotizarTopicDef[] = [
  { slug: "desarrollo-software-a-medida", title: "Desarrollo de software a medida", kind: "servicio" },
  { slug: "apps-moviles", title: "Aplicaciones móviles (iOS / Android)", kind: "servicio" },
  { slug: "plataformas-web", title: "Plataformas web escalables", kind: "servicio" },
  { slug: "arquitectura-software", title: "Arquitectura y diseño de sistemas", kind: "servicio" },
  { slug: "cloud-infrastructure", title: "Infraestructura y DevOps en la nube", kind: "servicio" },
  { slug: "consultoria-transformacion-digital", title: "Consultoría tecnológica y transformación digital", kind: "servicio" },
  { slug: "evaluacion-madurez-digital", title: "Evaluación de madurez digital", kind: "servicio" },
  { slug: "modernizacion-legado", title: "Modernización de sistemas legacy", kind: "servicio" },
  { slug: "automatizacion-procesos", title: "Automatización de procesos empresariales", kind: "servicio" },
  { slug: "integraciones-apis", title: "Integraciones y APIs", kind: "servicio" },
  { slug: "data-analytics", title: "Analytics y Business Intelligence", kind: "servicio" },
  { slug: "big-data-ml", title: "Big Data y Machine Learning", kind: "servicio" },
  { slug: "integracion-ecommerce", title: "Integración e-commerce y pagos", kind: "servicio" },
  { slug: "diseno-ux-ui", title: "Diseño UX/UI y brand strategy", kind: "servicio" },
  { slug: "experience-design", title: "Diseño de experiencia digital (CX/DX)", kind: "servicio" },
  { slug: "ciberseguridad-compliance", title: "Ciberseguridad y compliance", kind: "servicio" },
  { slug: "auditoria-seguridad", title: "Auditoría y fortalecimiento de seguridad", kind: "servicio" },
  { slug: "soporte-mantenimiento", title: "Soporte y mantenimiento 24/7", kind: "servicio" },
  { slug: "staffing-dedicado", title: "Team extension y staff augmentation", kind: "servicio" },
  { slug: "managed-services", title: "Servicios gestionados (SLA guaranteed)", kind: "servicio" },
  { slug: "fintech-soluciones", title: "Soluciones Fintech y Banking", kind: "servicio" },
  { slug: "healthcare-medtech", title: "HealthTech y soluciones médicas", kind: "servicio" },
  { slug: "ecommerce-retail", title: "Soluciones E-commerce y Retail", kind: "servicio" },
  { slug: "proptech-realstate", title: "PropTech y soluciones inmobiliarias", kind: "servicio" },
  { slug: "estrategia-digital", title: "Estrategia digital y roadmap tecnológico", kind: "servicio" },
  { slug: "innovation-labs", title: "Innovation labs y proof of concept", kind: "servicio" },
  { slug: "vendor-selection", title: "Evaluación y selección de vendors", kind: "servicio" },
]

const TECNOLOGIAS: CotizarTopicDef[] = [
  { slug: "react", title: "React", kind: "tecnologia" },
  { slug: "nextjs", title: "Next.js", kind: "tecnologia" },
  { slug: "nodejs", title: "Node.js", kind: "tecnologia" },
  { slug: "typescript", title: "TypeScript", kind: "tecnologia" },
  { slug: "python", title: "Python", kind: "tecnologia" },
  { slug: "dotnet", title: ".NET / C#", kind: "tecnologia" },
  { slug: "java", title: "Java", kind: "tecnologia" },
  { slug: "flutter", title: "Flutter", kind: "tecnologia" },
  { slug: "react-native", title: "React Native", kind: "tecnologia" },
  { slug: "aws", title: "AWS", kind: "tecnologia" },
  { slug: "azure", title: "Microsoft Azure", kind: "tecnologia" },
  { slug: "postgresql", title: "PostgreSQL", kind: "tecnologia" },
  { slug: "mongodb", title: "MongoDB", kind: "tecnologia" },
  { slug: "kubernetes", title: "Kubernetes / DevOps", kind: "tecnologia" },
  { slug: "ia-ml", title: "IA / Machine Learning", kind: "tecnologia" },
]

const bySlug = new Map<string, CotizarTopicDef>()
for (const t of [...SERVICIOS, ...TECNOLOGIAS]) {
  bySlug.set(t.slug, t)
}

export function getAllCotizarTopics(): { servicios: CotizarTopicDef[]; tecnologias: CotizarTopicDef[] } {
  return { servicios: SERVICIOS, tecnologias: TECNOLOGIAS }
}

export function getTopicBySlug(slug: string): CotizarTopicDef | undefined {
  return bySlug.get(slug)
}

/** Slug desconocido: título legible a partir del path */
export function titleFromUnknownSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ")
}
