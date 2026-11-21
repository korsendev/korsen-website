/** Páginas legales. Texto basado únicamente en lo que el sitio hace hoy; conviene revisión legal antes de publicar. */

export type LegalSection = { title: string; paragraphs?: string[]; items?: string[] }
export type LegalPage = {
  slug: "privacidad" | "terminos"
  seoTitle: string
  seoDescription: string
  label: string
  title: string
  accent: string
  intro: string
  updated: string
  sections: LegalSection[]
}

export const LEGAL_UPDATED = "24 de noviembre de 2026"

export const PRIVACIDAD: LegalPage = {
  slug: "privacidad",
  seoTitle: "Privacidad",
  seoDescription: "Cómo MAYNODE trata los datos que compartes al evaluar un proyecto o escribirnos, conforme a la Ley 172-13 de República Dominicana.",
  label: "PRIVACIDAD",
  title: "Tus datos, con",
  accent: "cuidado.",
  intro: "Tus datos se usan solo para responder tu solicitud, conforme a la Ley 172-13.",
  updated: LEGAL_UPDATED,
  sections: [
    {
      title: "Qué datos recibimos",
      paragraphs: ["Solo los que tú nos compartes al evaluar un proyecto o al escribirnos:"],
      items: [
        "Datos de contacto: nombre, correo y número de WhatsApp.",
        "Datos de tu empresa: nombre, sector, país y tamaño del equipo.",
        "Información del proyecto: necesidad, descripción, plazo y presupuesto estimado.",
      ],
    },
    {
      title: "Para qué los usamos",
      paragraphs: ["Para responder tu solicitud, agendar la llamada de discovery y prepararte una propuesta con alcance, tiempos y presupuesto. No los usamos para otros fines sin tu consentimiento."],
    },
    {
      title: "Cómo llegan a nosotros",
      paragraphs: [
        "El formulario de evaluación abre una conversación de WhatsApp con el mensaje ya redactado; tú decides si lo envías. También puedes escribirnos a team@maynode.dev. WhatsApp trata los mensajes según sus propias condiciones.",
      ],
    },
    {
      title: "Analítica",
      paragraphs: ["Usamos analítica anónima para entender cómo se usa el sitio y mejorarlo. No la usamos para identificarte."],
    },
    {
      title: "Seguridad",
      paragraphs: ["Aplicamos buenas prácticas de desarrollo seguro y control de accesos a la información que gestionamos."],
    },
    {
      title: "Tus derechos",
      paragraphs: ["Puedes pedirnos acceder a tus datos, corregirlos o que los eliminemos escribiendo a team@maynode.dev. Te respondemos en un plazo razonable."],
    },
  ],
}

export const TERMINOS: LegalPage = {
  slug: "terminos",
  seoTitle: "Términos",
  seoDescription: "Condiciones de uso del sitio maynode.dev y alcance de las propuestas de MAYNODE.",
  label: "TÉRMINOS",
  title: "Términos de",
  accent: "uso.",
  intro: "Condiciones básicas para usar maynode.dev y alcance de la información que publicamos.",
  updated: LEGAL_UPDATED,
  sections: [
    {
      title: "Sobre este sitio",
      paragraphs: ["maynode.dev presenta los servicios, soluciones y productos de MAYNODE (antes Korsen Dev). La información tiene carácter informativo y puede actualizarse sin previo aviso."],
    },
    {
      title: "Propuestas y proyectos",
      paragraphs: [
        "Los tiempos y plazos mostrados en el sitio son referencias habituales. El alcance, el precio y las fechas de cada proyecto se definen en una propuesta formal y en el contrato que firmemos contigo.",
      ],
    },
    {
      title: "Propiedad intelectual",
      paragraphs: [
        "El nombre MAYNODE, el logo y los contenidos del sitio pertenecen a MAYNODE. No puedes reutilizarlos sin autorización. El código y el sistema de cada proyecto se entregan según lo acordado en su contrato.",
      ],
    },
    {
      title: "Enlaces a terceros",
      paragraphs: ["El sitio enlaza a proyectos y servicios de terceros (por ejemplo, sitios de clientes y WhatsApp). No controlamos su contenido ni sus políticas."],
    },
    {
      title: "Contacto",
      paragraphs: ["Para cualquier duda sobre estos términos, escríbenos a team@maynode.dev."],
    },
  ],
}

export const LEGAL_PAGES = [PRIVACIDAD, TERMINOS]
