export type CaseStudy = {
  slug: string
  title: string
  category: string
  heroImage: string
  url: string
  tags: string[]
  contexto: string
  problema: string
  objetivo: string
  solucion: string
  funcionalidades: string[]
  resultado: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "raapydo",
    title: "Raapydo",
    category: "Logística y Delivery",
    heroImage: "/raapydo.png",
    url: "https://www.raapydo.com/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    contexto: "Raapydo es una aplicación dominicana que conecta de manera directa y eficiente a comercios, clientes y repartidores, facilitando compras y envíos locales rápidos.",
    problema: "Los comercios locales en la República Dominicana carecían de un canal ágil y económico para recibir pedidos en línea y gestionar la logística de entrega de forma automatizada, dependiendo en gran medida de procesos manuales lentos.",
    objetivo: "Desarrollar una plataforma transaccional de alto rendimiento que centralice la toma de pedidos, simplifique las operaciones logísticas para los comercios y ofrezca una experiencia de usuario rápida a los clientes.",
    solucion: "korsen.dev diseñó y desarrolló la plataforma completa utilizando tecnologías web modernas. El sistema incluye paneles de administración en tiempo real para comercios, una interfaz rápida orientada al cliente y flujos eficientes para la asignación y despacho de repartidores.",
    funcionalidades: [
      "Gestión de catálogos y menús para comercios afiliados.",
      "Buscador rápido e interactivo de productos y tiendas.",
      "Sistema de pedidos con cálculo automático de distancias y costos de envío.",
      "Flujo logístico interactivo para asignación automática de repartidores.",
      "Panel administrativo unificado para control de métricas operacionales.",
    ],
    resultado: "Una solución digital escalable y robusta que unifica toda la cadena de delivery dominicana, eliminando fricción y automatizando la gestión de envíos en tiempo real.",
  },
  {
    slug: "dorka-jimenez",
    title: "Dr. Dorka Jiménez",
    category: "Salud y MedTech",
    heroImage: "/dorka.png",
    url: "https://dorkadentalcenter-web.vercel.app/",
    tags: ["Next.js", "TypeScript", "CSS"],
    contexto: "La Dra. Dorka Jiménez es una reconocida ortodoncista con más de 15 años de experiencia transformando sonrisas mediante odontología de alta precisión.",
    problema: "Falta de una presencia en línea sólida y premium que reflejara el prestigio clínico de su práctica médica y facilitara la captación de leads calificados interesados en tratamientos especializados.",
    objetivo: "Crear una plataforma web corporativa con diseño impecable, carga ultra rápida y enfocada a la conversión de leads médicos calificados.",
    solucion: "Desarrollamos una landing page premium optimizada para buscadores (SEO) y con un fuerte enfoque visual en la conversión. Se integraron módulos interactivos para la explicación de tratamientos y llamado directo al agendamiento de citas médicas.",
    funcionalidades: [
      "Presentación interactiva de especialidades clínicas y ortodoncia avanzada.",
      "Galería de casos de éxito visuales antes/después.",
      "Formulario de captación directa para agendamiento de citas integrado.",
      "Optimización extrema en tiempos de carga y SEO para posicionamiento local.",
    ],
    resultado: "Un canal digital optimizado que eleva la reputación de la clínica y capta pacientes interesados de manera automatizada.",
  },
  {
    slug: "raelix-drive",
    title: "Raelix Drive",
    category: "Marketplace Transaccional",
    heroImage: "/raelixdrive.png",
    url: "https://www.raelixdrive.app/",
    tags: ["Next.js", "TypeScript", "CSS"],
    contexto: "Raelix Drive es una plataforma web peer-to-peer diseñada para conectar de forma segura a propietarios de bienes de alquiler con usuarios interesados en arrendarlos.",
    problema: "La informalidad en el alquiler de bienes causaba desconfianza en los pagos, falta de claridad en las reservas y dificultad para encontrar catálogos unificados.",
    solucion: "Construimos un marketplace interactivo seguro con pasarela de pagos integrada, control de disponibilidad en tiempo real y paneles para la autogestión de inventarios de los propietarios.",
    objetivo: "Facilitar la búsqueda, reserva y procesamiento seguro de transacciones de alquiler en línea sin intermediarios manuales.",
    funcionalidades: [
      "Buscador con filtros avanzados de disponibilidad y ubicación de bienes.",
      "Pasarela transaccional para pagos seguros integrados.",
      "Calendario interactivo de reservas en tiempo real.",
      "Panel de autogestión para que los propietarios publiquen y administren inventarios.",
    ],
    resultado: "Una plataforma transaccional fluida y automatizada que reduce la fricción en el mercado de alquiler local.",
  },
  {
    slug: "the-vortex-capital",
    title: "The Vortex Capital",
    category: "Fintech & Blockchain",
    heroImage: "/vortex.png",
    url: "https://thevortexcapital.com/",
    tags: ["Next.js", "TypeScript", "Blockchain API"],
    contexto: "The Vortex Capital es una emisora de tokens regulada en El Salvador dedicada a la digitalización y tokenización de activos del mundo real (RWA) mediante tecnología blockchain.",
    problema: "La complejidad de las tecnologías financieras descentralizadas suele causar confusión y desconfianza en inversionistas tradicionales que buscan comprender el respaldo real de sus activos.",
    objetivo: "Diseñar y desarrollar un portal institucional corporativo con estética premium que explique de forma sencilla y transparente el modelo de inversión y la seguridad del ecosistema.",
    solucion: "Desarrollamos una interfaz sofisticada con diseño de alta fidelidad, animaciones sutiles y diagramación técnica clara para educar al usuario y orientarlo hacia la evaluación y agendamiento de asesorías especializadas.",
    funcionalidades: [
      "Explicación interactiva del modelo de tokenización de activos reales (RWA).",
      "Simulador de rendimiento y beneficios de tokenización.",
      "Integración segura de canales de consulta y registro para inversionistas.",
      "Diseño adaptativo de alto impacto visual alineado a estándares de la industria Fintech.",
    ],
    resultado: "Una plataforma institucional de alto impacto visual que transmite seguridad regulatoria y simplicidad conceptual.",
  },
]

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
