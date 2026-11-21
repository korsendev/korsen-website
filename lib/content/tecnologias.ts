/** Páginas SEO del stack: /tecnologias/[slug] */

export type Tecnologia = {
  slug: string
  title: string
  /** Frase breve sobre para qué la usamos */
  lead: string
  uses: string[]
  /** slugs de soluciones donde encaja */
  solutions: string[]
}

export const TECNOLOGIAS_COPY = {
  label: "TECNOLOGÍA",
  titlePrefix: "Desarrollo con",
  usesLabel: "Qué construimos",
  usesTitle: "Dónde la aplicamos",
  solutionsLabel: "Soluciones",
  solutionsTitle: "Resultados que entregamos",
  cta: { label: "Evaluar mi proyecto", href: "/diagnostico" },
  seoDescription: (t: string) => `Desarrollo de software con ${t} en MAYNODE: la elegimos cuando es la mejor opción para tu caso y la integramos con lo que ya usas.`,
} as const

const web = ["automatiza-tu-operacion", "vende-y-cobra-en-linea", "capta-clientes-en-internet"]
const sys = ["centraliza-tu-negocio", "automatiza-tu-operacion"]
const mobile = ["lleva-tu-servicio-al-movil", "vende-y-cobra-en-linea"]

export const TECNOLOGIAS: Tecnologia[] = [
  { slug: "react", title: "React", lead: "Interfaces web reutilizables, rápidas y fáciles de mantener.", uses: ["Paneles y aplicaciones web", "Sitios de captación", "Portales de clientes"], solutions: web },
  { slug: "nextjs", title: "Next.js", lead: "Sitios y plataformas con carga rápida, buen posicionamiento y despliegue sencillo.", uses: ["Sitios corporativos y landings", "Tiendas y plataformas web", "Paneles de administración"], solutions: web },
  { slug: "nodejs", title: "Node.js", lead: "Servicios y APIs para conectar tus sistemas en tiempo real.", uses: ["APIs e integraciones", "Procesos en segundo plano", "Chat y notificaciones en tiempo real"], solutions: ["atiende-y-vende-con-ia", ...sys] },
  { slug: "typescript", title: "TypeScript", lead: "Código más seguro y mantenible a medida que el sistema crece.", uses: ["Plataformas de larga vida", "Equipos que evolucionan el producto", "Menos errores en producción"], solutions: sys },
  { slug: "python", title: "Python", lead: "Automatización, datos y asistentes inteligentes.", uses: ["Automatización de procesos", "Reportes y análisis de datos", "Asistentes y flujos con IA"], solutions: ["automatiza-tu-operacion", "atiende-y-vende-con-ia"] },
  { slug: "dotnet", title: ".NET / C#", lead: "Sistemas empresariales robustos y aplicaciones de escritorio.", uses: ["Sistemas de gestión", "Aplicaciones de escritorio", "Integraciones corporativas"], solutions: sys },
  { slug: "java", title: "Java", lead: "Sistemas empresariales estables y de largo plazo.", uses: ["Sistemas de misión crítica", "Integraciones corporativas", "Modernización de sistemas existentes"], solutions: sys },
  { slug: "flutter", title: "Flutter", lead: "Apps móviles para iOS y Android desde una sola base de código.", uses: ["Apps de clientes y operadores", "Apps con GPS y notificaciones", "Publicación en tiendas"], solutions: mobile },
  { slug: "react-native", title: "React Native", lead: "Apps móviles nativas para iOS y Android con tecnología web.", uses: ["Apps de pedidos y seguimiento", "Apps con modo sin conexión", "Publicación en tiendas"], solutions: mobile },
  { slug: "aws", title: "AWS", lead: "Infraestructura en la nube segura, escalable y monitoreada.", uses: ["Servidores y almacenamiento", "Respaldos y recuperación", "Monitoreo y alertas"], solutions: sys },
  { slug: "azure", title: "Microsoft Azure", lead: "Nube para empresas que ya trabajan con el ecosistema Microsoft.", uses: ["Hosting de sistemas", "Integración con herramientas Microsoft", "Respaldos y seguridad"], solutions: sys },
  { slug: "postgresql", title: "PostgreSQL", lead: "Base de datos relacional confiable para información que no puede fallar.", uses: ["Facturación y contabilidad", "Inventarios y operación", "Reportes y consultas complejas"], solutions: sys },
  { slug: "mongodb", title: "MongoDB", lead: "Base de datos flexible para información que cambia de forma.", uses: ["Catálogos y contenido", "Registros de actividad", "Productos que evolucionan rápido"], solutions: web },
  { slug: "kubernetes", title: "Kubernetes / DevOps", lead: "Despliegues automatizados y sistemas siempre disponibles.", uses: ["Despliegue continuo", "Escalado según la demanda", "Monitoreo de disponibilidad"], solutions: sys },
  { slug: "ia-ml", title: "IA / Machine Learning", lead: "Asistentes y análisis que responden, resumen y ayudan a decidir.", uses: ["Asistentes para WhatsApp y web", "Resumen y clasificación de conversaciones", "Análisis de datos del negocio"], solutions: ["atiende-y-vende-con-ia", "automatiza-tu-operacion"] },
]

export function getTecnologia(slug: string) {
  return TECNOLOGIAS.find((t) => t.slug === slug)
}
