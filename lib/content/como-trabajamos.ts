/** Cómo trabajamos §6 */
export const COMO_TRABAJAMOS = {
  seoTitle: "Cómo trabajamos",
  seoDescription: "Método en 5 fases, gestión de proyectos con director asignado, entregas semanales y soporte con tiempos de respuesta definidos.",
  label: "CÓMO TRABAJAMOS",
  title: "Rápido, sin",
  accent: "sorpresas.",
  intro: "De la primera reunión al plan técnico en una semana. Desde ahí, entregas funcionales cada semana y control total de tu inversión.",
  pm: {
    label: "GESTIÓN DE PROYECTOS",
    title: "Control total, sin sorpresas",
    intro: "Cada proyecto tiene un director, un plan aprobado y entregables documentados. Sabes en qué punto está tu inversión en todo momento.",
    govTitle: "Gobierno del proyecto",
    governance: [
      { role: "Sponsor del cliente", text: "Define prioridades y aprueba entregables." },
      { role: "Director de proyecto", text: "Planifica, controla alcance, tiempos y riesgos." },
      { role: "Líder técnico", text: "Garantiza la arquitectura y la calidad del código." },
      { role: "Calidad (QA)", text: "Valida cada entrega contra los criterios de aceptación." },
    ],
    delTitle: "Entregables por fase",
    deliverables: [
      { phase: "Inicio", items: ["Acta de inicio", "Alcance", "Cronograma"] },
      { phase: "Requerimientos", items: ["Especificación funcional", "Matriz de trazabilidad"] },
      { phase: "Ejecución", items: ["Reporte semanal", "Registro de riesgos", "Control de cambios"] },
      { phase: "Calidad", items: ["Matriz de QA y aceptación", "Demos por sprint"] },
      { phase: "Cierre", items: ["Acta de entrega", "Manuales", "Plan de soporte"] },
    ],
    cadenceTitle: "Cadencia",
    cadence: [
      { freq: "Diario", text: "Avance en tu canal de comunicación." },
      { freq: "Semanal", text: "Demo funcional y reporte de riesgos." },
      { freq: "Mensual", text: "Comité ejecutivo de seguimiento." },
    ],
  },
} as const
