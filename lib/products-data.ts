/** Productos propios de korsen.dev (software que operamos y vendemos por suscripción). */
export type Product = {
  slug: string
  name: string
  category: string
  tagline: string
  summary: string
  description: string
  logo: string
  image: string
  url: string
  appUrl?: string
  status: "En producción" | "Beta" | "Próximamente"
  tags: string[]
  features: string[]
  audience: string
}

export const products: Product[] = [
  {
    slug: "bosqra",
    name: "BOSQRA",
    category: "SaaS · Gestión para aserraderos",
    tagline: "Cada pie tablar cuenta.",
    summary:
      "El sistema de gestión hecho para la industria maderera: ventas con factura automática, inventario en pies tablares, crédito de clientes, nómina y asistente de IA.",
    description:
      "BOSQRA nació de trabajar de cerca con aserraderos dominicanos. Reemplaza el cuaderno, el Excel y los cálculos a mano por una plataforma que corre en el celular, la tablet y la computadora: se vende en segundos, el inventario se descuenta solo y cada factura sale con NCF e ITBIS. Cada aserradero opera en un espacio de datos aislado, con roles para administración, despacho e inventario, y la plataforma incluye la gestión de suscripciones para el proveedor.",
    logo: "/productos/bosqra-logo.png",
    image: "/productos/bosqra-demo.jpg",
    url: "https://bosqra.app",
    appUrl: "https://plataforma.bosqra.app",
    status: "En producción",
    tags: ["Expo / React Native", "Node.js", "PostgreSQL", "Multi-inquilino", "IA"],
    features: [
      "Ventas y facturación con NCF e ITBIS en RD$, con impresión y envío por WhatsApp.",
      "Inventario en pies tablares (grosor × ancho × largo ÷ 12) por especie y medida.",
      "Crédito de clientes, abonos y cuentas por cobrar.",
      "Gastos, recibos de madera, nómina y reportes.",
      "Asistente de IA que consulta y registra datos conversando.",
      "Roles y permisos: administrador, despacho e inventario.",
      "Suscripciones, planes y panel de super administrador para el proveedor.",
    ],
    audience: "Aserraderos, madereras y depósitos de madera en República Dominicana y el Caribe.",
  },
]

export const getProduct = (slug: string) => products.find((p) => p.slug === slug)
