/** Textos y datos globales (web-copy.md §0). */

export const SITE = {
  name: "MAYNODE",
  url: "https://maynode.dev",
  domain: "maynode.dev",
  email: "team@maynode.dev",
  phone: "+44 7848 445738",
  tagline: "Software que hace crecer tu negocio",
  location: "República Dominicana · remoto global",
} as const

export const META = {
  titleDefault: "MAYNODE | Software que hace crecer tu negocio",
  titleTemplate: "%s | MAYNODE",
  description:
    "Grupo tecnológico que diseña, construye y opera software a medida, apps, automatizaciones y plataformas para empresas que quieren vender más, operar mejor y escalar.",
  keywords: [
    "MAYNODE",
    "maynode.dev",
    "desarrollo de software a medida",
    "apps móviles",
    "automatización de procesos",
    "ERP",
    "CRM",
    "sistemas de facturación",
    "transformación digital",
    "República Dominicana",
    "Korsen Dev",
  ],
  ogAlt: "MAYNODE — Software que produce resultados",
  locale: "es_DO",
} as const

export const TRANSITION_BAR = {
  strong: "Korsen Dev ahora es MAYNODE.",
  text: "Mismo equipo, misma calidad, nueva etapa.",
  cta: "Conoce el cambio",
  href: "/nosotros#nueva-marca",
  storageKey: "mn-transition-dismissed",
} as const

export const NAV = [
  { label: "Soluciones", href: "/soluciones" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Cobertura", href: "/cobertura" },
  { label: "Productos", href: "/productos" },
  { label: "Cómo trabajamos", href: "/como-trabajamos" },
  { label: "Nosotros", href: "/nosotros" },
] as const

export const HEADER_CTA = { label: "Evaluar proyecto", href: "/diagnostico" } as const

export const FOOTER = {
  phrase: "Convertimos problemas de negocio en software que produce resultados.",
  columns: [
    {
      title: "Soluciones",
      links: [
        { label: "Automatiza tu operación", href: "/soluciones/automatiza-tu-operacion" },
        { label: "Vende y cobra en línea", href: "/soluciones/vende-y-cobra-en-linea" },
        { label: "Centraliza tu negocio", href: "/soluciones/centraliza-tu-negocio" },
        { label: "Atiende y vende con IA", href: "/soluciones/atiende-y-vende-con-ia" },
        { label: "Lleva tu servicio al móvil", href: "/soluciones/lleva-tu-servicio-al-movil" },
        { label: "Capta clientes en internet", href: "/soluciones/capta-clientes-en-internet" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Nosotros", href: "/nosotros" },
        { label: "Cómo trabajamos", href: "/como-trabajamos" },
        { label: "Proyectos", href: "/proyectos" },
  { label: "Cobertura", href: "/cobertura" },
        { label: "Productos", href: "/productos" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Servicios",
      links: [
        { label: "Estrategia y consultoría", href: "/servicios/estrategia-y-consultoria" },
        { label: "Gestión de proyectos", href: "/servicios/gestion-de-proyectos" },
        { label: "Desarrollo de software", href: "/servicios/desarrollo-de-software" },
        { label: "Automatización y datos", href: "/servicios/automatizacion-y-datos" },
        { label: "Infraestructura y soporte", href: "/servicios/infraestructura-seguridad-y-soporte" },
        { label: "Diseño de producto", href: "/servicios/diseno-de-producto" },
        { label: "Marca y comunicación", href: "/servicios/marca-y-comunicacion" },
        { label: "Capacitación", href: "/servicios/capacitacion-y-adopcion" },
      ],
    },
  ],
  contactTitle: "Contacto",
  legal: "© 2026 MAYNODE · antes Korsen Dev · Todos los derechos reservados",
  legalLinks: ["Privacidad", "Términos"],
} as const

export const WHATSAPP = {
  tooltip: "Hablemos por WhatsApp",
  message: "Hola MAYNODE, quiero evaluar un proyecto.",
} as const

export const CTA = {
  primary: "Evaluar mi proyecto",
  whatsapp: "Escribir por WhatsApp",
  diagnostico: "/diagnostico",
} as const

export const NOT_FOUND = {
  title: "Esta página no",
  accent: "existe.",
  text: "Puede que el enlace sea de korsen.dev o que la página haya cambiado.",
  cta: "Volver al inicio",
} as const
