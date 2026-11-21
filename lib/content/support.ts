/** Inicio §1.14 */
export const SUPPORT = {
  label: "12 · SOPORTE Y CONTINUIDAD",
  title: "Tu operación, siempre",
  accent: "encendida.",
  intro: "Planes de soporte con tiempos de respuesta definidos y estándares de seguridad en cada entrega.",
  rows: ["Para", "Respuesta", "Canal", "Monitoreo", "Mejoras", "Informe"],
  plans: [
    {
      name: "Esencial",
      values: ["Sistemas en operación estable.", "24 h hábiles", "Correo y WhatsApp", "Diario", "Bajo solicitud", "Trimestral"],
    },
    {
      name: "Profesional",
      badge: "RECOMENDADO",
      values: ["Operaciones que no pueden detenerse.", "4 h hábiles", "Mesa de ayuda dedicada", "Continuo", "Horas incluidas", "Mensual"],
    },
    {
      name: "Empresarial",
      values: ["Sistemas críticos y múltiples sedes.", "1 h · 24/7", "Línea prioritaria", "24/7 con alertas", "Equipo asignado", "Comité mensual"],
    },
  ],
  security: {
    kicker: "Seguridad y calidad",
    title: "Estándares en cada proyecto",
    items: [
      "Desarrollo seguro según buenas prácticas OWASP",
      "Cifrado de datos en tránsito y en reposo",
      "Respaldos automáticos y plan de recuperación",
      "Control de accesos por rol y registro de actividad",
      "Tratamiento de datos conforme a la Ley 172-13 de RD",
      "Pruebas automatizadas y revisión de código en cada entrega",
    ],
  },
} as const
