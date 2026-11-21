/** Proyectos (web-copy §4). Datos separados del diseño. */

export type ProjectFilter = "gestion" | "ventas" | "movil" | "web" | "propio"

export type Project = {
  id: string
  code: string
  sector: string
  name: string
  description: string
  tags: [string, string]
  /** Texto de estado; si hay `url` se muestra como enlace externo */
  status: string
  url?: string
  filters: ProjectFilter[]
}

export const PROJECT_FILTERS: { id: ProjectFilter | "todos"; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "gestion", label: "Gestión" },
  { id: "ventas", label: "Ventas" },
  { id: "movil", label: "Móvil" },
  { id: "web", label: "Web" },
  { id: "propio", label: "Producto propio" },
]

export const PROJECTS: Project[] = [
  {
    id: "puerta-divina-crm",
    code: "P.01",
    sector: "CRM · Servicios funerarios",
    name: "Puerta Divina CRM",
    description: "Cada chat de WhatsApp entra como contacto y lead, avanza por un embudo de ventas y recibe seguimiento con IA y automatizaciones.",
    tags: ["WhatsApp + IA", "Web, Windows, Android e iOS"],
    status: "Uso interno del cliente",
    filters: ["ventas", "gestion"],
  },
  {
    id: "maderera-duran",
    code: "P.02",
    sector: "Gestión industrial",
    name: "Maderera Durán",
    description: "Control de madera, ventas, facturación, clientes a crédito, nómina, gastos y reportes de un aserradero, con asistente de IA.",
    tags: ["Datos en la nube", "Funciona sin internet"],
    status: "App móvil y de escritorio",
    filters: ["gestion"],
  },
  {
    id: "inside",
    code: "P.03",
    sector: "Eventos y ticketing",
    name: "INSIDE",
    description: "Venta de boletos en línea con pago, boletos digitales con QR, verificación en puerta y cortesías desde un panel propio.",
    tags: ["Pagos en RD$", "Validación QR"],
    status: "inside-event-tickets.vercel.app",
    url: "https://inside-event-tickets.vercel.app",
    filters: ["ventas", "web"],
  },
  {
    id: "punto-mandao",
    code: "P.04",
    sector: "Logística y delivery",
    name: "Punto Mandao",
    description: "App de mandados y entregas con seguimiento GPS en tiempo real entre cliente y repartidor, y chat integrado.",
    tags: ["GPS en vivo", "Rutas optimizadas"],
    status: "App móvil · Android e iOS",
    filters: ["movil"],
  },
  {
    id: "eleva-tus-ventas",
    code: "P.05",
    sector: "Educación y ventas",
    name: "Eleva Tus Ventas",
    description: "Landing de venta, cobro con Stripe, academia en línea con videos y progreso, CRM de prospectos y asistente de IA.",
    tags: ["Pagos automáticos", "Academia + IA"],
    status: "En desarrollo",
    filters: ["ventas", "web"],
  },
  {
    id: "brisas-del-cerro",
    code: "P.06",
    sector: "Bienes raíces",
    name: "Brisas del Cerro",
    description: "Web del proyecto urbanístico: solares, viviendas, casa club y contacto directo con un asesor.",
    tags: ["Captación de clientes", "WhatsApp directo"],
    status: "brisasdelcerro.vercel.app",
    url: "https://brisasdelcerro.vercel.app",
    filters: ["web"],
  },
  {
    id: "maynode-erp",
    code: "P.07",
    sector: "Gestión empresarial",
    name: "MAYNODE ERP",
    description: "Clientes, facturación con ITBIS, cotizaciones, cobros y libro mayor contable en tiempo real, con facturas PDF de marca.",
    tags: ["Contabilidad automática", "Multiplataforma"],
    status: "Producto interno",
    filters: ["gestion", "propio"],
  },
  {
    id: "avance-credits",
    code: "P.08",
    sector: "Fintech · Crédito",
    name: "Avance Credits",
    description: "App de reparación de crédito para iOS, Android y web, con seguimiento por etapas del proceso del cliente.",
    tags: ["Seguimiento por etapas", "iOS, Android y web"],
    status: "Demo funcional",
    filters: ["movil", "web"],
  },
]

export const FEATURED_PROJECT_IDS = ["puerta-divina-crm", "maderera-duran", "inside", "punto-mandao"] as const

export const PROJECTS_COPY = {
  seoTitle: "Proyectos",
  seoDescription: "Sistemas en producción: CRM con WhatsApp, gestión industrial, ticketing, delivery, ERP, fintech y más.",
  homeLabel: "07 · PROYECTOS",
  pageLabel: "PROYECTOS",
  title: "Sistemas que ya",
  accent: "trabajan.",
  intro: "Una muestra de los sistemas que diseñamos, construimos y mantenemos para nuestros clientes y para productos propios.",
  homeCta: { label: "Ver todos los proyectos", href: "/proyectos" },
  closing: "¿Tu proyecto es el próximo?",
  closingCta: { label: "Evaluar mi proyecto", href: "/diagnostico" },
  viewProject: "Ver proyecto",
  filterLabel: "Filtrar proyectos",
} as const

export function getProjectByName(name: string) {
  return PROJECTS.find((p) => p.name === name)
}
