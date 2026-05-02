export type ShowcaseProject = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  url: string
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "raapydo",
    title: "Raapydo",
    description:
      "Raapydo es una app dominicana que conecta comercios, clientes y deliverys para facilitar compras y envíos locales de forma rápida y sencilla.",
    image: "/raapydo.png",
    tags: ["NEXT.JS", "CSS", "TYPESCRIPT"],
    category: "Sitio Web",
    url: "https://www.raapydo.com/",
  },
  {
    id: "dorka",
    title: "Dr. Dorka Jimenez",
    description:
      "Soy la Dra. Dorka Jiménez, ortodoncista especialista con más de 15 años de experiencia transformando sonrisas con tecnología de vanguardia y atención personalizada.",
    image: "/dorka.png",
    tags: ["NEXT.JS", "CSS", "TYPESCRIPT"],
    category: "Sitio Web",
    url: "https://dorkadentalcenter-web.vercel.app/",
  },
  {
    id: "raelix",
    title: "Raelix Drive",
    description:
      "Raelix Drive actúa como intermediario entre propietarios de bienes para alquiler y usuarios interesados en alquilar dichos bienes. Facilitamos la búsqueda, reserva y pago de alquileres a través de nuestra plataforma en línea.",
    image: "/raelixdrive.png",
    tags: ["NEXT.JS", "CSS", "TYPESCRIPT"],
    category: "Sitio Web",
    url: "https://www.raelixdrive.app/",
  },
  {
    id: "vortex",
    title: "The Vortex Capital",
    description:
      "The Vortex Capital es una emisora de tokens registrada en El Salvador que convierte activos del mundo real en activos digitales mediante blockchain, brindando acceso a nuevas oportunidades de inversión.",
    image: "/vortex.png",
    tags: ["NEXT.JS", "CSS", "TYPESCRIPT"],
    category: "Sitio Web",
    url: "https://thevortexcapital.com/",
  },
]

export function getProjectsByIds(ids: string[]): ShowcaseProject[] {
  const set = new Set(ids)
  return showcaseProjects.filter((p) => set.has(p.id))
}
