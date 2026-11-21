/** Inicio §1.4 */
export const DIAGNOSIS = {
  label: "02 · DIAGNÓSTICO",
  title: "¿Qué está frenando tu negocio?",
  intro: "No todos los problemas tecnológicos necesitan la misma solución. Primero entendemos el problema real; después diseñamos lo que necesitas.",
  items: [
    { kicker: "01 / MANUAL", icon: "refresh", title: "Procesos manuales", text: "Tu equipo pierde tiempo en tareas repetitivas que podrían estar automatizadas." },
    { kicker: "02 / SCALE", icon: "chart", title: "Sistemas que no escalan", text: "Tu tecnología funcionó al inicio, pero hoy limita la operación y el crecimiento." },
    { kicker: "03 / SILOS", icon: "plug", title: "Herramientas desconectadas", text: "Tu información está repartida en plataformas que no se comunican entre sí." },
    { kicker: "04 / OWNERSHIP", icon: "code", title: "Necesitas una plataforma propia", text: "Tu negocio requiere software diseñado a la medida de tu operación." },
    { kicker: "05 / COGNITIVE", icon: "sparkles", title: "Quieres incorporar IA", text: "Buscas optimizar decisiones o automatizar flujos con inteligencia artificial." },
    { kicker: "06 / VISION", icon: "network", title: "Tienes una idea de producto", text: "Necesitas el equipo técnico que convierta tu idea en un producto real." },
  ],
  closing: "¿Te identificas con alguno?",
  cta: { label: "Hacer el diagnóstico gratis", href: "/diagnostico" },
} as const
