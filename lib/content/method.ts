/** Inicio §1.8 y Cómo trabajamos §6 */
export const METHOD = {
  label: "06 · MÉTODO",
  title: "Cómo trabajamos",
  intro: "Un proceso riguroso y rápido: de la primera reunión al plan técnico en una semana, con entregas funcionales cada semana.",
  cta: { label: "Ver cómo trabajamos", href: "/como-trabajamos" },
  phases: [
    {
      n: "01",
      name: "Discovery",
      duration: "2–3 días",
      text: "Entendemos tu negocio, analizamos la operación y definimos el problema real antes de proponer código.",
      deliverable: "Diagnóstico y alcance",
    },
    {
      n: "02",
      name: "Architecture",
      duration: "3–5 días",
      text: "Diseñamos la estructura técnica, modelamos la base de datos y planificamos integraciones seguras.",
      deliverable: "Arquitectura y plan técnico",
    },
    {
      n: "03",
      name: "Build",
      duration: "Sprints de 1 semana",
      text: "Desarrollamos en ciclos ágiles con código limpio y entregas funcionales y testeadas.",
      deliverable: "Entregas funcionales por sprint",
    },
    {
      n: "04",
      name: "Launch",
      duration: "24–48 h",
      text: "Pruebas de estrés en entornos simulados y despliegue en producción sin interrupciones.",
      deliverable: "Sistema en producción",
    },
    {
      n: "05",
      name: "Scale",
      duration: "Continuo",
      text: "Monitoreo en tiempo real, corrección proactiva y nuevas funcionalidades.",
      deliverable: "Monitoreo y mejoras",
    },
  ],
  deliverableKicker: "Entregable",
} as const
