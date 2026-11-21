/** Contacto §9 */
export const CONTACTO = {
  seoTitle: "Contacto",
  seoDescription: "Hablemos de tu proyecto. Respondemos en menos de 24 horas, en tu zona horaria.",
  label: "CONTACTO",
  title: "Hablemos de tu",
  accent: "proyecto.",
  intro: "Respondemos en menos de 24 horas, en tu zona horaria.",
  cta: { label: "Evaluar mi proyecto", href: "/diagnostico" },
  channels: [
    { kicker: "Web", value: "maynode.dev", href: "/" },
    { kicker: "Correo", value: "team@maynode.dev", href: "mailto:team@maynode.dev" },
    { kicker: "Teléfono / WhatsApp", value: "+44 7848 445738", href: "tel:+447848445738" },
    { kicker: "Sede", value: "República Dominicana · remoto global" },
  ] as { kicker: string; value: string; href?: string }[],
} as const
