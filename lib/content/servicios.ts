/** Servicios: Inicio §1.6, índice §3.1 y detalle §3.2 */

export type Servicio = {
  slug: string
  n: string
  icon: "network" | "chart" | "code" | "refresh" | "shield" | "panels" | "cart" | "database"
  title: string
  short: string
  lead: string
  services: string[]
  deliverables: string[]
  /** slugs de soluciones relacionadas */
  related: string[]
}

export const SERVICIOS_INDEX = {
  seoTitle: "Servicios",
  seoDescription: "Ocho líneas de servicio integradas: estrategia, gestión de proyectos, desarrollo, automatización, infraestructura, diseño, marca y capacitación.",
  label: "04 · PORTAFOLIO DE SERVICIOS",
  pageLabel: "PORTAFOLIO DE SERVICIOS",
  title: "Un solo aliado para toda tu tecnología",
  intro: "Ocho líneas de servicio integradas: desde la estrategia y la gestión del proyecto hasta el soporte, la marca y la capacitación de tu equipo.",
  cardLink: "Ver servicio",
} as const

export const SERVICIO_DETAIL = {
  servicesLabel: "Servicios",
  servicesTitle: "Qué incluye esta línea",
  deliverablesLabel: "Entregables clave",
  deliverablesTitle: "Lo que recibes",
  relatedLabel: "Soluciones relacionadas",
  relatedTitle: "Dónde lo aplicamos",
} as const

export const SERVICIOS: Servicio[] = [
  {
    slug: "estrategia-y-consultoria",
    n: "01",
    icon: "network",
    title: "Estrategia y consultoría",
    short: "Alineamos la tecnología con los objetivos del negocio antes de invertir.",
    lead: "Alineamos la tecnología con los objetivos del negocio antes de invertir.",
    services: [
      "Diagnóstico y auditoría tecnológica",
      "Hoja de ruta de transformación digital",
      "Arquitectura empresarial y de sistemas",
      "Evaluación técnica de proveedores y software",
      "Propuestas técnicas para licitaciones",
      "Asesoría ejecutiva para la toma de decisiones",
    ],
    deliverables: ["Informe de diagnóstico", "Roadmap priorizado", "Brief de decisión ejecutiva"],
    related: ["centraliza-tu-negocio", "automatiza-tu-operacion"],
  },
  {
    slug: "gestion-de-proyectos",
    n: "02",
    icon: "chart",
    title: "Gestión de proyectos",
    short: "Dirigimos el proyecto de punta a punta con control de alcance, tiempos y calidad.",
    lead: "Dirigimos el proyecto de punta a punta con control de alcance, tiempos y calidad.",
    services: [
      "Planificación, cronograma e hitos",
      "Levantamiento y trazabilidad de requerimientos",
      "Gestión de riesgos y control de cambios",
      "Matrices de calidad y aceptación",
      "Reportes ejecutivos y tableros de avance",
      "Coordinación de equipos y proveedores",
    ],
    deliverables: ["Acta de inicio", "Matriz de trazabilidad", "Reporte semanal"],
    related: ["centraliza-tu-negocio", "lleva-tu-servicio-al-movil"],
  },
  {
    slug: "desarrollo-de-software",
    n: "03",
    icon: "code",
    title: "Desarrollo de software",
    short: "Construimos el sistema que tu operación necesita, listo para crecer.",
    lead: "Construimos el sistema que tu operación necesita, listo para crecer.",
    services: [
      "Software y plataformas a la medida",
      "ERP, CRM y sistemas de gestión",
      "Aplicaciones móviles iOS y Android",
      "Productos SaaS multiempresa",
      "Integraciones, APIs y migraciones",
      "Comercio electrónico y pasarelas de pago",
    ],
    deliverables: ["Sistema en producción", "Código y documentación", "Manual de usuario"],
    related: ["centraliza-tu-negocio", "vende-y-cobra-en-linea", "lleva-tu-servicio-al-movil"],
  },
  {
    slug: "automatizacion-y-datos",
    n: "04",
    icon: "refresh",
    title: "Automatización e inteligencia de datos",
    short: "Hacemos que los procesos repetitivos trabajen solos y que los datos hablen.",
    lead: "Hacemos que los procesos repetitivos trabajen solos y que los datos hablen.",
    services: [
      "Automatización de procesos y flujos",
      "Asistentes conversacionales para WhatsApp y web",
      "Recepción y atención telefónica automatizada",
      "Tableros de indicadores e inteligencia de negocio",
      "Conciliación y reportes automáticos",
      "Integración entre sistemas existentes",
    ],
    deliverables: ["Mapa de procesos", "Flujos automatizados", "Tablero de KPIs"],
    related: ["automatiza-tu-operacion", "atiende-y-vende-con-ia"],
  },
  {
    slug: "infraestructura-seguridad-y-soporte",
    n: "05",
    icon: "shield",
    title: "Infraestructura, seguridad y soporte",
    short: "Mantenemos tus sistemas disponibles, seguros y al día.",
    lead: "Mantenemos tus sistemas disponibles, seguros y al día.",
    services: [
      "Nube, servidores y DevOps",
      "Ciberseguridad y hardening de sistemas",
      "Respaldos y recuperación ante desastres",
      "Monitoreo de disponibilidad y rendimiento",
      "Mesa de ayuda y soporte remoto",
      "Mantenimiento correctivo y evolutivo",
    ],
    deliverables: ["Plan de continuidad", "Acuerdo de nivel de servicio", "Informe mensual"],
    related: ["automatiza-tu-operacion", "centraliza-tu-negocio"],
  },
  {
    slug: "diseno-de-producto",
    n: "06",
    icon: "panels",
    title: "Diseño de producto y experiencia",
    short: "Diseñamos interfaces claras que tus usuarios entienden sin capacitación.",
    lead: "Diseñamos interfaces claras que tus usuarios entienden sin capacitación.",
    services: [
      "Investigación y arquitectura de información",
      "Prototipos y diseño UX/UI",
      "Sistemas de diseño y componentes",
      "Pruebas de usabilidad",
      "Diseño de paneles y aplicaciones",
      "Guías de estilo para desarrollo",
    ],
    deliverables: ["Prototipo navegable", "Sistema de diseño", "Especificación visual"],
    related: ["lleva-tu-servicio-al-movil", "capta-clientes-en-internet"],
  },
  {
    slug: "marca-y-comunicacion",
    n: "07",
    icon: "cart",
    title: "Marca y comunicación corporativa",
    short: "Construimos marcas y materiales que transmiten confianza desde el primer contacto.",
    lead: "Construimos marcas y materiales que transmiten confianza desde el primer contacto.",
    services: [
      "Identidad visual y manual de marca",
      "Dossiers y presentaciones corporativas",
      "Catálogos y material comercial",
      "Campañas y contenido para redes",
      "Video corporativo y piezas animadas",
      "Sitios web y páginas de captación",
    ],
    deliverables: ["Brandbook", "Kit de campaña", "Presentación ejecutiva"],
    related: ["capta-clientes-en-internet", "vende-y-cobra-en-linea"],
  },
  {
    slug: "capacitacion-y-adopcion",
    n: "08",
    icon: "database",
    title: "Capacitación y adopción",
    short: "Aseguramos que tu equipo use el sistema desde el primer día.",
    lead: "Aseguramos que tu equipo use el sistema desde el primer día.",
    services: [
      "Capacitación presencial y remota",
      "Videos tutoriales por módulo",
      "Manuales y guías de usuario",
      "Documentación técnica y de procesos",
      "Acompañamiento en la puesta en marcha",
      "Gestión del cambio en el equipo",
    ],
    deliverables: ["Plan de capacitación", "Biblioteca de videos", "Guías por rol"],
    related: ["automatiza-tu-operacion", "centraliza-tu-negocio"],
  },
]

export function getServicio(slug: string) {
  return SERVICIOS.find((s) => s.slug === slug)
}
