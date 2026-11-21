/** Inicio §1.13 */
export const ENGAGEMENT = {
  label: "11 · MODELOS DE CONTRATACIÓN",
  title: "Trabajemos como te convenga",
  intro: "Cuatro formas de trabajar con nosotros, según la etapa y el tamaño de tu proyecto.",
  idealKicker: "Ideal para",
  includesKicker: "Incluye",
  models: [
    {
      n: "01",
      name: "Proyecto cerrado",
      what: "Alcance, precio y fechas definidos desde el inicio.",
      ideal: "Productos nuevos, MVPs y sistemas con requerimientos claros.",
      includes: ["Precio fijo por fases", "Entregables por hito", "Garantía post-lanzamiento"],
    },
    {
      n: "02",
      name: "Equipo dedicado",
      badge: "MÁS ELEGIDO",
      what: "Un equipo de MAYNODE trabajando como parte de tu empresa.",
      ideal: "Empresas en crecimiento con una hoja de ruta continua.",
      includes: ["Capacidad mensual reservada", "Director de proyecto incluido", "Escala según la demanda"],
    },
    {
      n: "03",
      name: "Soporte y evolución",
      what: "Mantenimiento mensual de tus sistemas en producción.",
      ideal: "Mantener la operación estable y seguir mejorando.",
      includes: ["Mesa de ayuda", "Mejoras continuas", "Informe mensual"],
    },
    {
      n: "04",
      name: "Consultoría",
      what: "Acompañamiento experto por horas o por entregable.",
      ideal: "Diagnósticos, auditorías y decisiones tecnológicas.",
      includes: ["Diagnóstico técnico", "Roadmap y presupuesto", "Revisión de proveedores"],
    },
  ],
  timings: [
    { value: "48", unit: "h", label: "Propuesta formal" },
    { value: "7", unit: "días", label: "Sitio web corporativo" },
    { value: "2–3", unit: "sem.", label: "Plataformas y apps acotadas" },
    { value: "4–6", unit: "sem.", label: "Primera versión (MVP)" },
  ],
} as const
