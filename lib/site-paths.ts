/** Catálogo detallado de soluciones (servicios) y stacks tecnológicos */
export const PATH_SOLUCIONES_TECNOLOGIAS = "/soluciones-y-tecnologias" as const

export function pathSolucionLanding(slug: string): string {
  return `/soluciones/${slug}`
}

export function pathTecnologiaLanding(slug: string): string {
  return `/tecnologias/${slug}`
}
