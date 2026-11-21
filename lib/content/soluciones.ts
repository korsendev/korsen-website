/** Soluciones: Inicio §1.5, índice §2.1 y landings §2.2 */

export type Solucion = {
  slug: string
  n: string
  icon: "refresh" | "cart" | "database" | "sparkles" | "phone" | "panels"
  title: string
  seoTitle: string
  seoDescription: string
  h1: string
  accent: string
  lead: string
  problem: string
  includes: string[]
  result: string
  caseName: string
  caseText: string
  caseUrl?: string
  time: string
  faqs: { q: string; a: string }[]
}

export const SOLUCIONES_INDEX = {
  seoTitle: "Soluciones",
  seoDescription: "Seis soluciones para automatizar, vender, centralizar, atender, movilizar y captar clientes. Resultados medibles, no tecnologías.",
  label: "03 · SOLUCIONES",
  pageLabel: "SOLUCIONES",
  title: "Resolvemos, no solo",
  accent: "programamos.",
  introHome: "No vendemos tecnologías: vendemos resultados medibles. Elegimos la herramienta después de entender qué necesita tu negocio.",
  introPage: "Elige el problema que quieres resolver. Diseñamos la solución a la medida y la entregamos funcionando, con soporte después del lanzamiento.",
  cardLink: "Ver solución",
  problemKicker: "Problema",
  caseKicker: "Caso",
} as const

export const SOLUCIONES: Solucion[] = [
  {
    slug: "automatiza-tu-operacion",
    n: "01",
    icon: "refresh",
    title: "Automatiza tu operación",
    seoTitle: "Automatiza tu operación",
    seoDescription: "Inventario, facturación con NCF e ITBIS, nómina y reportes automáticos, incluso sin internet.",
    h1: "Automatiza tu",
    accent: "operación.",
    lead: "Deja de perder horas en hojas de cálculo. Tu inventario, tus facturas y tus reportes se actualizan solos.",
    problem: "Tu equipo pierde horas en hojas de cálculo, facturas a mano y reportes que nadie actualiza. Los errores cuestan dinero y las decisiones llegan tarde.",
    includes: [
      "Inventario y despachos en tiempo real",
      "Facturación automática con NCF e ITBIS",
      "Nómina, gastos y reportes en PDF",
      "Funciona sin internet y sincroniza en la nube",
    ],
    result: "Menos trabajo manual y datos confiables para decidir.",
    caseName: "Maderera Durán",
    caseText: "Control de madera, ventas, facturación, clientes a crédito, nómina, gastos y reportes de un aserradero, en app móvil y de escritorio.",
    time: "2–3 semanas para la primera versión.",
    faqs: [
      { q: "¿Puedo seguir usando Excel mientras migramos?", a: "Sí, importamos tus datos y trabajamos en paralelo hasta que el sistema esté listo." },
      { q: "¿Funciona en varias sucursales?", a: "Sí, con usuarios y permisos por sede." },
    ],
  },
  {
    slug: "vende-y-cobra-en-linea",
    n: "02",
    icon: "cart",
    title: "Vende y cobra en línea",
    seoTitle: "Vende y cobra en línea",
    seoDescription: "Tienda, reservas o venta de boletos con pagos con tarjeta, comprobantes con QR y panel de ventas.",
    h1: "Vende y cobra",
    accent: "en línea.",
    lead: "Tu negocio vendiendo las 24 horas, con cada pago confirmado y registrado automáticamente.",
    problem: "Vendes por WhatsApp o transferencia y cada pago se confirma a mano. Se pierden ventas fuera de horario y no sabes cuánto vendiste hasta cerrar el día.",
    includes: [
      "Tienda, reservas o venta de boletos",
      "Pagos con tarjeta o transferencia",
      "Comprobantes y boletos digitales con QR",
      "Panel para aprobar órdenes y ver ventas",
    ],
    result: "Vendes las 24 horas y cada cobro queda registrado.",
    caseName: "INSIDE",
    caseText: "Venta de boletos en línea con pago, boletos digitales con QR, verificación en puerta y cortesías desde un panel propio.",
    caseUrl: "https://inside-event-tickets.vercel.app",
    time: "7 días a 3 semanas, según el catálogo y los métodos de pago.",
    faqs: [
      { q: "¿Qué pasarelas usan?", a: "Stripe, PayPal y pasarelas locales según tu país." },
      { q: "¿Puedo validar entradas en la puerta?", a: "Sí, con lector de QR desde cualquier teléfono." },
    ],
  },
  {
    slug: "centraliza-tu-negocio",
    n: "03",
    icon: "database",
    title: "Centraliza tu negocio",
    seoTitle: "Centraliza tu negocio",
    seoDescription: "Clientes, cotizaciones, facturas, cobros y contabilidad en un solo sistema, en web, móvil y escritorio.",
    h1: "Centraliza tu",
    accent: "negocio.",
    lead: "Clientes, ventas, cobros y contabilidad en un solo sistema que todo tu equipo consulta en tiempo real.",
    problem: "Tu información vive en Excel, libretas y apps que no se comunican entre sí. Nadie tiene la versión correcta de los números.",
    includes: [
      "Clientes, cotizaciones y facturas en un sistema",
      "Cobros y cuentas por cobrar al día",
      "Libro mayor contable automático",
      "Acceso desde web, móvil y escritorio",
    ],
    result: "Una sola fuente de verdad para todo tu equipo.",
    caseName: "MAYNODE ERP",
    caseText: "Clientes, facturación con ITBIS, cotizaciones, cobros y libro mayor contable en tiempo real, con facturas PDF de marca.",
    time: "4–6 semanas para la primera versión.",
    faqs: [
      { q: "¿Se adapta a mi forma de trabajar?", a: "Sí, el sistema se configura sobre tus procesos, no al revés." },
      { q: "¿Cumple con la DGII?", a: "Sí, con NCF, ITBIS y facturación electrónica." },
    ],
  },
  {
    slug: "atiende-y-vende-con-ia",
    n: "04",
    icon: "sparkles",
    title: "Atiende y vende con IA",
    seoTitle: "Atiende y vende con IA",
    seoDescription: "WhatsApp conectado a tu CRM, embudo de ventas y asistente que responde y resume cada conversación.",
    h1: "Atiende y vende",
    accent: "con IA.",
    lead: "Cada mensaje se convierte en una oportunidad con responsable, etapa y seguimiento automático.",
    problem: "Los mensajes de WhatsApp se pierden y nadie sabe en qué etapa está cada cliente. Los leads se enfrían mientras esperan respuesta.",
    includes: [
      "WhatsApp conectado a tu CRM",
      "Cada chat se convierte en lead con responsable",
      "Embudo de ventas y seguimiento automático",
      "Asistente de IA que responde y resume",
    ],
    result: "Ningún cliente se queda sin respuesta.",
    caseName: "Puerta Divina CRM",
    caseText: "Cada chat de WhatsApp entra como contacto y lead, avanza por un embudo de ventas y recibe seguimiento con IA y automatizaciones.",
    time: "2–3 semanas.",
    faqs: [
      { q: "¿El asistente responde solo?", a: "Responde lo frecuente y pasa a una persona lo importante, con el resumen de la conversación." },
      { q: "¿Puedo usar mi número actual?", a: "Sí, con la API oficial de WhatsApp Business." },
    ],
  },
  {
    slug: "lleva-tu-servicio-al-movil",
    n: "05",
    icon: "phone",
    title: "Lleva tu servicio al móvil",
    seoTitle: "Lleva tu servicio al móvil",
    seoDescription: "Apps para iOS y Android con GPS en tiempo real, chat, notificaciones y modo sin conexión.",
    h1: "Lleva tu servicio",
    accent: "al móvil.",
    lead: "Tus clientes piden, rastrean y pagan desde su teléfono. Tu equipo opera desde el suyo.",
    problem: "Tus clientes quieren pedir, rastrear y pagar desde su teléfono, y hoy todo pasa por llamadas y mensajes.",
    includes: [
      "Apps para iOS y Android",
      "GPS y seguimiento en tiempo real",
      "Chat entre cliente y operador",
      "Notificaciones y modo sin conexión",
    ],
    result: "Tu servicio en el bolsillo de tus clientes.",
    caseName: "Punto Mandao",
    caseText: "App de mandados y entregas con seguimiento GPS en tiempo real entre cliente y repartidor, y chat integrado.",
    time: "4–6 semanas para publicar en tiendas.",
    faqs: [
      { q: "¿Publican en App Store y Google Play?", a: "Sí, nos encargamos de todo el proceso de publicación." },
      { q: "¿Hay panel para administrar?", a: "Sí, un panel web para operadores y administradores." },
    ],
  },
  {
    slug: "capta-clientes-en-internet",
    n: "06",
    icon: "panels",
    title: "Capta clientes en internet",
    seoTitle: "Capta clientes en internet",
    seoDescription: "Sitios web a la medida, rápidos y posicionados, conectados a WhatsApp y con analítica de resultados.",
    h1: "Capta clientes",
    accent: "en internet.",
    lead: "Una web rápida, bien posicionada y conectada a WhatsApp, diseñada para convertir visitas en contactos.",
    problem: "Tu web no aparece en Google o no convierte las visitas en contactos.",
    includes: [
      "Diseño a la medida de tu marca",
      "Carga rápida y posicionamiento local",
      "WhatsApp y formularios conectados",
      "Analítica para medir resultados",
    ],
    result: "Visitas que se convierten en clientes.",
    caseName: "Brisas del Cerro",
    caseText: "Web del proyecto urbanístico con solares, viviendas, casa club y contacto directo con un asesor.",
    caseUrl: "https://brisasdelcerro.vercel.app",
    time: "7 días.",
    faqs: [
      { q: "¿Incluye dominio y hosting?", a: "Te ayudamos a configurarlos y lo dejamos funcionando." },
      { q: "¿Puedo editar los textos?", a: "Sí, con un panel sencillo." },
    ],
  },
]

export const SOLUCION_LANDING = {
  problemLabel: "El problema",
  includesLabel: "Qué incluye",
  methodLabel: "Cómo lo hacemos",
  caseLabel: "Caso real",
  resultLabel: "Resultado",
  faqLabel: "Preguntas",
  timeKicker: "Tiempo típico",
  caseCta: "Ver proyectos",
} as const

export function getSolucion(slug: string) {
  return SOLUCIONES.find((s) => s.slug === slug)
}
