export type BlogPost = {
  slug: string
  title: string
  /** Fecha legible en español */
  date: string
  /** Fecha ISO para metadatos */
  isoDate: string
  readTime: string
  excerpt: string
  category: string
  /** Solución de MAYNODE relacionada con el tema del artículo */
  related: { slug: string; title: string }
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "optimizacion-velocidad-ventas",
    title: "Por qué la velocidad de tu web afecta tus ventas",
    date: "1 de agosto de 2026",
    isoDate: "2026-08-01",
    readTime: "4 min de lectura",
    excerpt: "Una web lenta pierde visitas antes de que lean tu oferta. Qué revisamos primero y cómo se corrige.",
    category: "Rendimiento",
    related: { slug: "capta-clientes-en-internet", title: "Capta clientes en internet" },
    content: `
Una persona que llega a tu web desde el teléfono decide en segundos si se queda. Si la página tarda en mostrar algo útil, se va, y la visita que pagaste con publicidad o ganaste en Google no se convierte en contacto.

## Qué pasa cuando tu web es lenta
- **Se pierden visitas:** quien no ve contenido rápido vuelve atrás, sobre todo en móvil y con conexiones lentas.
- **Se pierde confianza:** una web que tarda proyecta una operación poco cuidada.
- **Se pierde posicionamiento:** los buscadores tienen en cuenta la velocidad y la experiencia móvil al ordenar los resultados.

## Qué revisamos primero
- **Imágenes pesadas:** fotos sin comprimir ni dimensionar para cada pantalla.
- **Scripts de terceros:** chats, analítica y píxeles que se cargan antes que el contenido.
- **Servidor y caché:** dónde está alojada la web y si se sirve desde un punto cercano a tu cliente.
- **Código innecesario:** plantillas que cargan funciones que tu sitio no usa.

## Cómo lo trabajamos en MAYNODE
Medimos el rendimiento y la accesibilidad antes de tocar nada, corregimos primero lo que más pesa y volvemos a medir. También probamos en móviles de gama baja, porque ahí es donde una web lenta se nota más.

Un sitio corporativo a la medida lo entregamos en 7 días, ya pensado para cargar rápido, conectado a WhatsApp y con analítica para medir resultados.
    `,
  },
  {
    slug: "automatizacion-ia-costos-operativos",
    title: "Cómo la automatización con IA libera tiempo en tu empresa",
    date: "15 de julio de 2026",
    isoDate: "2026-07-15",
    readTime: "4 min de lectura",
    excerpt: "Qué tareas repetitivas se pueden automatizar hoy, cómo empezar por una sola y qué debe seguir en manos de una persona.",
    category: "Automatización",
    related: { slug: "atiende-y-vende-con-ia", title: "Atiende y vende con IA" },
    content: `
En muchas empresas el equipo dedica horas a tareas que se repiten todos los días: responder los mismos mensajes, pasar datos de una factura a un sistema, clasificar contactos o actualizar reportes. Son tareas necesarias, pero no requieren criterio humano cada vez.

## Qué se puede automatizar
- **Facturas y pedidos:** leer un documento recibido, extraer los datos y cargarlos en tu sistema de gestión.
- **Atención de primer nivel:** responder las preguntas frecuentes por WhatsApp o web a cualquier hora, y resumir cada conversación.
- **Seguimiento de clientes:** convertir cada mensaje en un contacto con responsable, etapa y recordatorios automáticos.
- **Reportes:** generar y enviar los informes que hoy se arman a mano.

## Cómo empezar
1. **Mapea el proceso:** anota qué se hace, quién lo hace y cuánto tiempo toma.
2. **Elige un solo flujo:** el más repetitivo y con reglas claras.
3. **Pruébalo con datos reales:** y ajusta antes de ampliarlo.
4. **Mide el resultado:** tiempo ahorrado, mensajes respondidos o errores corregidos.

## Qué sigue en manos de una persona
La automatización responde lo frecuente y deja a tu equipo lo importante: una queja delicada, una negociación o una decisión con consecuencias. Por eso los asistentes que construimos pasan la conversación a una persona, con el resumen de lo ocurrido, cuando el caso lo requiere.

El objetivo no es reemplazar a tu equipo, sino darle tiempo para vender, atender mejor y mejorar la operación.
    `,
  },
  {
    slug: "costo-oculto-software-barato",
    title: "El costo oculto del software barato",
    date: "28 de junio de 2026",
    isoDate: "2026-06-28",
    readTime: "5 min de lectura",
    excerpt: "Elegir solo por precio suele salir caro después. Las señales de un sistema que frena tu crecimiento y qué preguntar antes de contratar.",
    category: "Estrategia",
    related: { slug: "centraliza-tu-negocio", title: "Centraliza tu negocio" },
    content: `
El software no es un gasto más: es la base sobre la que opera tu negocio. Cuando se elige solo por el precio más bajo, lo habitual es pagar la diferencia después, en caídas, parches y semanas perdidas.

## Las señales de un sistema que te frena
- **Cambiar algo simple tarda meses:** agregar un método de pago o exportar un reporte se vuelve un proyecto, o el proveedor dice que no es posible.
- **Falla cuando el negocio crece:** el sistema se vuelve lento o se cae cuando aumenta el número de usuarios.
- **Todo se concilia a mano:** los datos viven en hojas de cálculo porque los sistemas no se conectan entre sí.
- **Nadie conoce el sistema por dentro:** no hay documentación y todo depende de una sola persona.

## Qué preguntar antes de contratar
- ¿El código y los accesos serán míos al terminar?
- ¿Hay documentación y manual de usuario?
- ¿Cómo se protegen los datos y se hacen los respaldos?
- ¿Quién me atiende después del lanzamiento y en cuánto tiempo responde?
- ¿Se puede conectar con las herramientas que ya uso?

## Cómo lo hacemos en MAYNODE
- **Tu sistema es tuyo:** al cierre entregamos el código, la documentación y los accesos.
- **Seguridad desde el diseño:** buenas prácticas OWASP, cifrado en tránsito y en reposo, respaldos automáticos y control de accesos por rol.
- **Calidad en cada entrega:** pruebas automatizadas y revisión de código.
- **Soporte con tiempos definidos:** planes con respuesta desde 1 hora, 24/7.

Un buen sistema no es el más caro ni el más barato: es el que seguirá funcionando cuando tu negocio sea el doble de grande.
    `,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
