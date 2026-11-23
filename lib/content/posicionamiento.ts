/**
 * Páginas de aterrizaje para las búsquedas principales ("desarrollo de software en República Dominicana", etc.).
 * Solo hechos que el sitio ya publica: nada de cifras, clientes ni premios inventados.
 */

export type Landing = {
  slug: string
  /** Título SEO (<title>) */
  seoTitle: string
  seoDescription: string
  label: string
  title: string
  accent: string
  lead: string
  /** Párrafos introductorios */
  intro: string[]
  buildTitle: string
  build: string[]
  /** Soluciones relacionadas (slugs) */
  solutions: string[]
  faqs: { q: string; a: string }[]
}

export const LANDING_COPY = {
  buildLabel: "QUÉ CONSTRUIMOS",
  whyLabel: "POR QUÉ MAYNODE",
  whyTitle: "Un solo equipo, de la idea al soporte",
  why: [
    { title: "Propuesta en 48 horas", text: "Tras la llamada de discovery recibes alcance, tiempos y presupuesto por fases, sin costos ocultos." },
    { title: "El sistema es tuyo", text: "Al cierre entregamos el código, la documentación y los accesos." },
    { title: "Cumplimiento local", text: "Facturación con NCF e ITBIS, facturación electrónica DGII y tratamiento de datos conforme a la Ley 172-13." },
    { title: "Soporte con tiempos definidos", text: "Planes con respuesta desde 1 hora, 24/7, y garantía post-lanzamiento." },
  ],
  solutionsLabel: "SOLUCIONES",
  solutionsTitle: "Problemas que resolvemos",
  moreLabel: "MÁS INFORMACIÓN",
  moreTitle: "Explora MAYNODE",
  moreLinks: [
    { label: "Servicios", href: "/servicios", text: "Las ocho líneas de servicio, de la estrategia al soporte." },
    { label: "Proyectos", href: "/proyectos", text: "Sistemas que ya trabajan para nuestros clientes." },
    { label: "Cómo trabajamos", href: "/como-trabajamos", text: "Método, gobierno del proyecto y entregables." },
    { label: "Cobertura", href: "/cobertura", text: "Desde República Dominicana, de forma remota a todo el mundo." },
  ],
  faqLabel: "PREGUNTAS FRECUENTES",
  faqTitle: "Lo que preguntan antes de contratar",
  crumb: "Desarrollo de software",
} as const

export const LANDINGS: Landing[] = [
  {
    slug: "desarrollo-de-software-republica-dominicana",
    seoTitle: "Desarrollo de software en República Dominicana",
    seoDescription:
      "MAYNODE diseña, construye y opera software a medida desde República Dominicana: plataformas, apps, ERP, CRM y automatizaciones para empresas locales e internacionales.",
    label: "DESARROLLO DE SOFTWARE · RD",
    title: "Desarrollo de software en",
    accent: "República Dominicana.",
    lead: "Somos un grupo tecnológico con sede en República Dominicana. Diseñamos, construimos y operamos software a medida para empresas que quieren vender más, operar mejor y escalar.",
    intro: [
      "Desde 2019, primero como Korsen Dev y hoy como MAYNODE, desarrollamos plataformas web, aplicaciones móviles, sistemas de gestión y automatizaciones para empresas de distintos sectores: logística, salud, finanzas, bienes raíces, eventos, industria maderera, educación y comercio.",
      "Conocemos el contexto local: facturación con NCF e ITBIS, facturación electrónica DGII, pagos en RD$ y la Ley 172-13 de protección de datos. Y trabajamos con la misma calidad para empresas fuera del país, de forma remota y en tu zona horaria.",
    ],
    buildTitle: "Software para tu operación",
    build: [
      "Software y plataformas web a la medida",
      "ERP, CRM y sistemas de gestión",
      "Facturación con NCF, ITBIS y e-CF (DGII)",
      "Aplicaciones móviles iOS y Android",
      "Automatización de procesos e inteligencia artificial",
      "Integraciones con WhatsApp, pasarelas de pago y APIs",
      "Comercio electrónico y venta de boletos en línea",
      "Soporte, monitoreo y evolución continua",
    ],
    solutions: ["automatiza-tu-operacion", "centraliza-tu-negocio", "vende-y-cobra-en-linea"],
    faqs: [
      { q: "¿Desarrollan software a medida en República Dominicana?", a: "Sí. MAYNODE tiene su sede y su equipo base en República Dominicana y construye plataformas, apps y sistemas de gestión a la medida de cada operación." },
      { q: "¿Cuánto tarda un proyecto de software?", a: "Un sitio corporativo, en 7 días. Una plataforma o app acotada, en 2–3 semanas. La primera versión de un producto (MVP), en 4–6 semanas." },
      { q: "¿El software cumple con la facturación de la DGII?", a: "Sí. Construimos sistemas con NCF, ITBIS y facturación electrónica conforme a la DGII." },
      { q: "¿Atienden empresas fuera de República Dominicana?", a: "Sí. Atendemos clientes en Norteamérica, Latinoamérica y Europa de forma remota, con reuniones en tu zona horaria." },
    ],
  },
  {
    slug: "desarrollo-de-software-a-medida",
    seoTitle: "Desarrollo de software a medida para empresas",
    seoDescription:
      "Software a medida para empresas: sistemas de gestión, plataformas, SaaS, integraciones y automatización. Propuesta formal en 48 horas y código tuyo al cierre.",
    label: "SOFTWARE A MEDIDA",
    title: "Desarrollo de software",
    accent: "a medida.",
    lead: "Cuando las herramientas genéricas ya no encajan con tu operación, construimos el sistema que sí: diseñado alrededor de tus procesos, listo para crecer y tuyo al cierre del proyecto.",
    intro: [
      "No vendemos tecnologías: vendemos resultados medibles. Primero entendemos el problema real de tu negocio y después elegimos la herramienta, entre más de 60 tecnologías en producción, y la integramos con lo que ya usas.",
      "Trabajamos con un director de proyecto asignado, avances diarios en tu canal, una demo funcional cada semana y entregas por fases con precio cerrado.",
    ],
    buildTitle: "Qué incluye el desarrollo a medida",
    build: [
      "Levantamiento de requerimientos y arquitectura",
      "Sistemas de gestión, ERP y CRM",
      "Productos SaaS multiempresa",
      "Integraciones, APIs y migraciones de datos",
      "Paneles de administración y portales de clientes",
      "Pruebas automatizadas y revisión de código en cada entrega",
      "Código, documentación y accesos al cierre",
      "Capacitación y acompañamiento en la puesta en marcha",
    ],
    solutions: ["centraliza-tu-negocio", "automatiza-tu-operacion", "atiende-y-vende-con-ia"],
    faqs: [
      { q: "¿Cuánto cuesta el software a medida?", a: "Depende del alcance. Después de la llamada de discovery recibes en 48 horas una propuesta formal con precio cerrado por fases, sin costos ocultos." },
      { q: "¿El código y el sistema son míos?", a: "Sí. Al cierre del proyecto entregamos el código, la documentación y los accesos. Tu sistema es tuyo." },
      { q: "¿Pueden integrar lo que ya uso?", a: "Sí. Conectamos tu sistema con WhatsApp, pasarelas de pago, facturación electrónica DGII, ERPs, hojas de cálculo y más de 60 tecnologías." },
      { q: "¿Mis datos están seguros?", a: "Aplicamos buenas prácticas OWASP, cifrado en tránsito y en reposo, respaldos automáticos y control de accesos por rol." },
    ],
  },
  {
    slug: "desarrollo-de-apps-moviles-republica-dominicana",
    seoTitle: "Desarrollo de apps móviles en República Dominicana",
    seoDescription:
      "Apps móviles para iOS y Android con GPS en tiempo real, chat, pagos y modo sin conexión. Diseñamos, desarrollamos y publicamos en App Store y Google Play desde República Dominicana.",
    label: "APPS MÓVILES · RD",
    title: "Desarrollo de apps móviles en",
    accent: "República Dominicana.",
    lead: "Tus clientes piden, rastrean y pagan desde su teléfono. Tu equipo opera desde el suyo. Construimos la app, la publicamos en las tiendas y la mantenemos.",
    intro: [
      "Desarrollamos aplicaciones para iOS y Android desde una sola base de código, con funciones como seguimiento GPS en tiempo real, chat entre cliente y operador, notificaciones y modo sin conexión, además de un panel web para administrar la operación.",
      "Hemos entregado apps de pedidos y entregas, sistemas con validación de boletos por QR y herramientas de seguimiento por etapas, y nos encargamos de todo el proceso de publicación en App Store y Google Play.",
    ],
    buildTitle: "Qué incluye una app con MAYNODE",
    build: [
      "Apps para iOS y Android",
      "GPS y seguimiento en tiempo real",
      "Chat entre cliente y operador",
      "Notificaciones y modo sin conexión",
      "Pagos en línea y comprobantes digitales",
      "Panel web para operadores y administradores",
      "Publicación en App Store y Google Play",
      "Soporte y evolución después del lanzamiento",
    ],
    solutions: ["lleva-tu-servicio-al-movil", "vende-y-cobra-en-linea", "atiende-y-vende-con-ia"],
    faqs: [
      { q: "¿Publican la app en App Store y Google Play?", a: "Sí, nos encargamos de todo el proceso de publicación." },
      { q: "¿Cuánto tarda una app móvil?", a: "La primera versión se publica en 4–6 semanas, con avances funcionando desde la primera semana." },
      { q: "¿Hay panel para administrar?", a: "Sí, un panel web para operadores y administradores." },
      { q: "¿La app funciona sin internet?", a: "Sí, podemos construirla con modo sin conexión para que siga operando y sincronice después." },
    ],
  },
]

export function getLanding(slug: string) {
  return LANDINGS.find((l) => l.slug === slug)
}
