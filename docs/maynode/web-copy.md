# MAYNODE® — Textos del sitio web (maynode.dev)

> Copy definitivo en español, alineado con el Dossier corporativo 2026.
> Estilo y componentes: [`design-system.md`](./design-system.md). Estructura y rutas: [`README.md`](./README.md).
> Convenciones: `[lima]…[/lima]` = palabra en color lima · `■` = etiqueta de sección · `→` = botón primario · `○` = botón fantasma.

---

## 0. Global

### 0.1 Metadata base (`app/layout.tsx`)
- **title.default:** MAYNODE | Software que hace crecer tu negocio
- **title.template:** %s | MAYNODE
- **description:** Grupo tecnológico que diseña, construye y opera software a medida, apps, automatizaciones y plataformas para empresas que quieren vender más, operar mejor y escalar.
- **keywords:** MAYNODE, maynode.dev, desarrollo de software a medida, apps móviles, automatización de procesos, ERP, CRM, sistemas de facturación, transformación digital, República Dominicana, Korsen Dev
- **siteName:** MAYNODE
- **og:image alt:** MAYNODE — Software que produce resultados
- **locale:** es_DO

### 0.2 Barra de transición (arriba del header, hasta marzo 2027)
> **Korsen Dev ahora es MAYNODE.** Mismo equipo, misma calidad, nueva etapa. [Conoce el cambio →](/nosotros#nueva-marca)

(Botón ✕ para cerrar; recordar cierre en `localStorage`.)

### 0.3 Header
- **Navegación:** Soluciones · Servicios · Proyectos · Productos · Cómo trabajamos · Nosotros
- **Botón:** Evaluar proyecto →
- **Menú móvil, pie:** team@maynode.dev · +44 7848 445738

### 0.4 Footer
- **Frase:** Convertimos problemas de negocio en software que produce resultados.
- **Columna Soluciones:** Automatiza tu operación · Vende y cobra en línea · Centraliza tu negocio · Atiende y vende con IA · Lleva tu servicio al móvil · Capta clientes en internet
- **Columna Empresa:** Nosotros · Cómo trabajamos · Proyectos · Productos · Blog
- **Columna Servicios:** Estrategia y consultoría · Gestión de proyectos · Desarrollo de software · Automatización y datos · Infraestructura y soporte · Diseño de producto · Marca y comunicación · Capacitación
- **Columna Contacto:** maynode.dev · team@maynode.dev · +44 7848 445738 · República Dominicana · remoto global
- **Legal:** © 2026 MAYNODE · antes Korsen Dev · Todos los derechos reservados · Privacidad · Términos

### 0.5 Botón de WhatsApp
- **Tooltip:** Hablemos por WhatsApp
- **Mensaje prellenado:** Hola MAYNODE, quiero evaluar un proyecto.

---

## 1. Inicio (`/`)

### 1.1 Hero
- **Chip:** MAYNODE // SOFTWARE STUDIO
- **H1:** Software que hace [lima]crecer[/lima] tu negocio.
- **Lead:** Diseñamos, construimos y operamos plataformas, apps y automatizaciones para empresas que quieren vender más, operar mejor y escalar sin límites.
- **→** Evaluar mi proyecto
- **○** Ver soluciones
- **Fila de datos (bajo los botones, mono):** Propuesta en 48 h · Primera versión en 4–6 semanas · Soporte 24/7
- **Firma pequeña:** antes Korsen Dev

### 1.2 Cifras (franja)
| Cifra | Texto |
| --- | --- |
| 50+ | Proyectos entregados |
| 30+ | Clientes de confianza |
| 5+ | Años de trayectoria |
| 60+ | Tecnologías dominadas |

### 1.3 Quiénes somos (resumen)
- **■** 01 · QUIÉNES SOMOS
- **H1:** Convertimos problemas de negocio en software que produce [lima]resultados.[/lima]
- **Párrafo 1:** Somos un grupo de tecnología que diseña, construye y opera plataformas web, aplicaciones y sistemas a medida para empresas que necesitan **automatizar, vender más y escalar**.
- **Párrafo 2:** Desde 2019, primero como Korsen Dev y hoy como **MAYNODE**, acompañamos a empresas de distintos países desde la estrategia hasta el soporte, con un solo equipo responsable de todo.
- **○** Conoce MAYNODE

### 1.4 Diagnóstico — "¿Qué está frenando tu negocio?"
- **■** 02 · DIAGNÓSTICO
- **H1:** ¿Qué está frenando tu negocio?
- **Lead:** No todos los problemas tecnológicos necesitan la misma solución. Primero entendemos el problema real; después diseñamos lo que necesitas.

| Kicker | Título | Texto |
| --- | --- | --- |
| 01 / MANUAL | Procesos manuales | Tu equipo pierde tiempo en tareas repetitivas que podrían estar automatizadas. |
| 02 / SCALE | Sistemas que no escalan | Tu tecnología funcionó al inicio, pero hoy limita la operación y el crecimiento. |
| 03 / SILOS | Herramientas desconectadas | Tu información está repartida en plataformas que no se comunican entre sí. |
| 04 / OWNERSHIP | Necesitas una plataforma propia | Tu negocio requiere software diseñado a la medida de tu operación. |
| 05 / COGNITIVE | Quieres incorporar IA | Buscas optimizar decisiones o automatizar flujos con inteligencia artificial. |
| 06 / VISION | Tienes una idea de producto | Necesitas el equipo técnico que convierta tu idea en un producto real. |

- **Cierre:** ¿Te identificas con alguno? → Hacer el diagnóstico gratis

### 1.5 Soluciones (6 tarjetas — enlazan a `/soluciones/[slug]`)
- **■** 03 · SOLUCIONES
- **H1:** Resolvemos, no solo [lima]programamos.[/lima]
- **Lead:** No vendemos tecnologías: vendemos resultados medibles. Elegimos la herramienta después de entender qué necesita tu negocio.

| # | Título | Problema | Resultado | Caso |
| --- | --- | --- | --- | --- |
| 01 | Automatiza tu operación | Tu equipo pierde horas en hojas de cálculo, facturas a mano y reportes que nadie actualiza. | Menos trabajo manual y datos confiables para decidir. | Maderera Durán |
| 02 | Vende y cobra en línea | Vendes por WhatsApp o transferencia y cada pago se confirma a mano. | Vendes las 24 horas y cada cobro queda registrado. | INSIDE |
| 03 | Centraliza tu negocio | Tu información vive en Excel, libretas y apps que no se comunican entre sí. | Una sola fuente de verdad para todo tu equipo. | MAYNODE ERP |
| 04 | Atiende y vende con IA | Los mensajes de WhatsApp se pierden y nadie sabe en qué etapa está cada cliente. | Ningún cliente se queda sin respuesta. | Puerta Divina CRM |
| 05 | Lleva tu servicio al móvil | Tus clientes quieren pedir, rastrear y pagar desde su teléfono. | Tu servicio en el bolsillo de tus clientes. | Punto Mandao |
| 06 | Capta clientes en internet | Tu web no aparece en Google o no convierte las visitas en contactos. | Visitas que se convierten en clientes. | Brisas del Cerro |

- **Enlace en cada tarjeta:** Ver solución →

### 1.6 Servicios (8 líneas — enlazan a `/servicios/[slug]`)
- **■** 04 · PORTAFOLIO DE SERVICIOS
- **H1:** Un solo aliado para toda tu tecnología
- **Lead:** Ocho líneas de servicio integradas: desde la estrategia y la gestión del proyecto hasta el soporte, la marca y la capacitación de tu equipo.

| # | Línea | Descripción corta |
| --- | --- | --- |
| 01 | Estrategia y consultoría | Alineamos la tecnología con los objetivos del negocio antes de invertir. |
| 02 | Gestión de proyectos | Dirigimos el proyecto de punta a punta con control de alcance, tiempos y calidad. |
| 03 | Desarrollo de software | Construimos el sistema que tu operación necesita, listo para crecer. |
| 04 | Automatización e inteligencia de datos | Hacemos que los procesos repetitivos trabajen solos y que los datos hablen. |
| 05 | Infraestructura, seguridad y soporte | Mantenemos tus sistemas disponibles, seguros y al día. |
| 06 | Diseño de producto y experiencia | Diseñamos interfaces claras que tus usuarios entienden sin capacitación. |
| 07 | Marca y comunicación corporativa | Construimos marcas y materiales que transmiten confianza desde el primer contacto. |
| 08 | Capacitación y adopción | Aseguramos que tu equipo use el sistema desde el primer día. |

### 1.7 Ecosistema
- **■** 05 · ECOSISTEMA MAYNODE
- **H1:** Siete unidades. Un solo [lima]equipo.[/lima]
- **Lead:** MAYNODE opera como un grupo de unidades especializadas que trabajan sobre el mismo método. Contratas una, accedes a todas.

| Unidad | Descripción |
| --- | --- |
| MAYNODE Consulting | Estrategia, consultoría y dirección de proyectos. |
| MAYNODE Engineering | Software a medida, plataformas, apps y SaaS. |
| MAYNODE Automation | Automatización de procesos e inteligencia de datos. |
| MAYNODE Cloud | Infraestructura, seguridad, monitoreo y soporte. |
| MAYNODE Studio | Diseño de producto, marca y comunicación. |
| MAYNODE Labs | Productos propios como BOSQRA. |
| MAYNODE Academy | Capacitación, documentación y adopción. |

- **Tarjeta lima final:** Un contrato · Todas las capacidades

### 1.8 Método (resumen)
- **■** 06 · MÉTODO
- **H1:** Cómo trabajamos
- **Lead:** Un proceso riguroso y rápido: de la primera reunión al plan técnico en una semana, con entregas funcionales cada semana.

| # | Fase | Duración | Texto | Entregable |
| --- | --- | --- | --- | --- |
| 01 | Discovery | 2–3 días | Entendemos tu negocio, analizamos la operación y definimos el problema real antes de proponer código. | Diagnóstico y alcance |
| 02 | Architecture | 3–5 días | Diseñamos la estructura técnica, modelamos la base de datos y planificamos integraciones seguras. | Arquitectura y plan técnico |
| 03 | Build | Sprints de 1 semana | Desarrollamos en ciclos ágiles con código limpio y entregas funcionales y testeadas. | Entregas funcionales por sprint |
| 04 | Launch | 24–48 h | Pruebas de estrés en entornos simulados y despliegue en producción sin interrupciones. | Sistema en producción |
| 05 | Scale | Continuo | Monitoreo en tiempo real, corrección proactiva y nuevas funcionalidades. | Monitoreo y mejoras |

- **○** Ver cómo trabajamos

### 1.9 Proyectos destacados (4 tarjetas — ver lista completa en §4)
- **■** 07 · PROYECTOS
- **H1:** Sistemas que ya [lima]trabajan.[/lima]
- **Lead:** Una muestra de los sistemas que diseñamos, construimos y mantenemos para nuestros clientes y para productos propios.
- **Tarjetas:** Puerta Divina CRM · Maderera Durán · INSIDE · Punto Mandao
- **○** Ver todos los proyectos

### 1.10 Industrias
- **■** 08 · INDUSTRIAS
- **H1:** Experiencia en tu sector
- **Lead:** Hemos resuelto problemas reales en industrias muy distintas. Esa variedad nos permite traer a tu proyecto soluciones que ya funcionaron en otros mercados.

| Industria | Descripción |
| --- | --- |
| Logística y delivery | Pedidos, rutas y repartidores con seguimiento en tiempo real. |
| Salud y bienestar | Citas, expedientes y recordatorios para clínicas y centros. |
| Finanzas y crédito | Solicitudes, expedientes y seguimiento de cada cliente. |
| Bienes raíces | Webs de proyectos, inventario de unidades y captación de leads. |
| Eventos y entretenimiento | Venta de boletos, pagos en línea y control de acceso con QR. |
| Industria maderera | Producción, inventario en pies tablares y facturación fiscal. |
| Servicios funerarios | CRM, planes, contratos y atención por WhatsApp. |
| Educación en línea | Academias, cursos en video y seguimiento de alumnos. |
| Comercio y retail | Tiendas en línea, inventario, POS y facturación. |
| Servicios profesionales | Portales de clientes, agenda, cotizaciones y cobros. |

### 1.11 Stack tecnológico
- **■** 09 · STACK TECNOLÓGICO
- **H1:** Cualquier stack, [lima]dominado.[/lima]
- **Lead:** Más de 60 tecnologías en producción. No te adaptamos a una herramienta: elegimos la mejor para tu caso y la integramos con lo que ya usas.

| Área | Tecnologías |
| --- | --- |
| Frontend web | React · Next.js · Vue · Angular · Svelte · Astro · TypeScript · Tailwind |
| Móvil | React Native · Expo · Flutter · Swift · Kotlin · PWA |
| Backend | Node.js · NestJS · Python · Django · FastAPI · Laravel · Go · .NET · Java |
| Datos | PostgreSQL · MySQL · MongoDB · Redis · Supabase · Firebase · Convex · Prisma |
| Nube y DevOps | AWS · Google Cloud · Azure · Vercel · Docker · Kubernetes · Terraform · CI/CD |
| Inteligencia y datos | OpenAI · Anthropic · LangChain · Vector DB · Power BI · Metabase · Python ML |
| Integraciones | Stripe · PayPal · WhatsApp API · Meta · Google APIs · DGII e-CF · Twilio · REST · GraphQL |
| Producto y negocio | Shopify · WordPress · Strapi · Figma · n8n · Zapier · Odoo |

(Cada tag puede enlazar a `/tecnologias/[slug]` si existe.)

### 1.12 Producto propio — BOSQRA
- **■** 10 · PRODUCTO PROPIO
- **H1:** Cada pie tablar [lima]cuenta.[/lima]
- **Lead:** Además de construir para clientes, diseñamos y operamos nuestros propios productos.
- **Chip:** SAAS · ASERRADEROS · **Badge:** EN PRODUCCIÓN
- **Nombre:** BOSQRA
- **Texto:** El sistema de gestión hecho para la industria maderera. App para Android, iOS y web.
- **Panel "Qué resuelve" — título:** Todo el aserradero en una sola app
- **Texto:** Producción, inventario, ventas y cobros conectados en tiempo real, desde el patio hasta la factura.
- **Lista:** Ventas en segundos con factura automática (NCF e ITBIS). · Inventario en pies tablares por especie y medida. · Crédito de clientes, abonos y cuentas por cobrar. · Asistente de IA que responde por ti.
- **Enlace:** ↗ bosqra.app · **→** Solicitar demo

### 1.13 Modelos de contratación
- **■** 11 · MODELOS DE CONTRATACIÓN
- **H1:** Trabajemos como te convenga
- **Lead:** Cuatro formas de trabajar con nosotros, según la etapa y el tamaño de tu proyecto.

| # | Modelo | Qué es | Ideal para | Incluye |
| --- | --- | --- | --- | --- |
| 01 | Proyecto cerrado | Alcance, precio y fechas definidos desde el inicio. | Productos nuevos, MVPs y sistemas con requerimientos claros. | Precio fijo por fases · Entregables por hito · Garantía post-lanzamiento |
| 02 ★ MÁS ELEGIDO | Equipo dedicado | Un equipo de MAYNODE trabajando como parte de tu empresa. | Empresas en crecimiento con una hoja de ruta continua. | Capacidad mensual reservada · Director de proyecto incluido · Escala según la demanda |
| 03 | Soporte y evolución | Mantenimiento mensual de tus sistemas en producción. | Mantener la operación estable y seguir mejorando. | Mesa de ayuda · Mejoras continuas · Informe mensual |
| 04 | Consultoría | Acompañamiento experto por horas o por entregable. | Diagnósticos, auditorías y decisiones tecnológicas. | Diagnóstico técnico · Roadmap y presupuesto · Revisión de proveedores |

- **Franja de tiempos (cifras en lima):** **48 h** Propuesta formal · **7 días** Sitio web corporativo · **2–3 sem.** Plataformas y apps acotadas · **4–6 sem.** Primera versión (MVP)

### 1.14 Soporte y continuidad
- **■** 12 · SOPORTE Y CONTINUIDAD
- **H1:** Tu operación, siempre [lima]encendida.[/lima]
- **Lead:** Planes de soporte con tiempos de respuesta definidos y estándares de seguridad en cada entrega.

| | Esencial | Profesional ★ RECOMENDADO | Empresarial |
| --- | --- | --- | --- |
| Para | Sistemas en operación estable. | Operaciones que no pueden detenerse. | Sistemas críticos y múltiples sedes. |
| Respuesta | 24 h hábiles | 4 h hábiles | 1 h · 24/7 |
| Canal | Correo y WhatsApp | Mesa de ayuda dedicada | Línea prioritaria |
| Monitoreo | Diario | Continuo | 24/7 con alertas |
| Mejoras | Bajo solicitud | Horas incluidas | Equipo asignado |
| Informe | Trimestral | Mensual | Comité mensual |

- **Panel "Seguridad y calidad" — título:** Estándares en cada proyecto
- **Lista:** Desarrollo seguro según buenas prácticas OWASP · Cifrado de datos en tránsito y en reposo · Respaldos automáticos y plan de recuperación · Control de accesos por rol y registro de actividad · Tratamiento de datos conforme a la Ley 172-13 de RD · Pruebas automatizadas y revisión de código en cada entrega

### 1.15 Cobertura (con mapas)
- **■** 13 · COBERTURA
- **H1:** Desde el Caribe para el mundo
- **Lead:** Operamos de forma remota con comunicación diaria, reuniones en tu horario y entregas por fases, sin importar dónde esté tu empresa.

| Kicker | Región | Detalle |
| --- | --- | --- |
| SEDE Y EQUIPO BASE | República Dominicana | Operación a nivel nacional |
| ATENCIÓN REMOTA | Norteamérica | EE. UU. y Canadá |
| ATENCIÓN REMOTA | Latinoamérica | Centroamérica, Caribe y Sudamérica |
| ATENCIÓN REMOTA | Europa | España y Reino Unido |

### 1.16 Preguntas frecuentes
- **■** 14 · PREGUNTAS FRECUENTES
- **H1:** Lo que nos preguntan antes de empezar

1. **¿Cuánto cuesta un proyecto?** Depende del alcance. Después de la llamada de discovery recibes en 48 horas una propuesta formal con precio cerrado por fases, sin costos ocultos.
2. **¿Cuánto tarda?** Un sitio corporativo, en 7 días. Una plataforma o app acotada, en 2–3 semanas. La primera versión de un producto (MVP), en 4–6 semanas. Desde la primera semana ves avances funcionando.
3. **¿Trabajan con empresas fuera de República Dominicana?** Sí. Atendemos clientes en Norteamérica, Latinoamérica y Europa de forma remota, con reuniones en tu zona horaria.
4. **¿El código y el sistema son míos?** Sí. Al cierre del proyecto entregamos el código, la documentación y los accesos. Tu sistema es tuyo.
5. **¿Qué pasa después del lanzamiento?** Incluimos garantía post-lanzamiento y puedes elegir un plan de soporte con tiempos de respuesta desde 1 hora, 24/7.
6. **¿Pueden integrar lo que ya uso?** Sí. Conectamos tu sistema con WhatsApp, pasarelas de pago, facturación electrónica DGII, ERPs, hojas de cálculo y más de 60 tecnologías.
7. **¿Cómo sé en qué va mi proyecto?** Tienes un director de proyecto asignado, avances diarios en tu canal, demo funcional cada semana y comité ejecutivo mensual.
8. **¿Mis datos están seguros?** Aplicamos buenas prácticas OWASP, cifrado en tránsito y en reposo, respaldos automáticos y control de accesos por rol, conforme a la Ley 172-13.

### 1.17 CTA final
- **■** 15 · EMPECEMOS
- **H1:** ¿Qué quieres [lima]construir?[/lima]
- **Lead:** Tres pasos para pasar de la idea a una propuesta formal con alcance, tiempos y presupuesto.

| # | Paso | Texto |
| --- | --- | --- |
| 01 | Evaluación | Completa el formulario de evaluación de proyecto con tu problema u objetivo. |
| 02 | Llamada de discovery | En menos de 24 horas agendamos una llamada para entender tu operación. |
| 03 | Propuesta técnica | En 48 horas recibes una propuesta formal con alcance, tiempos y presupuesto. |

- **→** Evaluar mi proyecto · **○** Escribir por WhatsApp
- **Pie:** team@maynode.dev · +44 7848 445738

---

## 2. Soluciones

### 2.1 Índice (`/soluciones`)
- **SEO title:** Soluciones · **description:** Seis soluciones para automatizar, vender, centralizar, atender, movilizar y captar clientes. Resultados medibles, no tecnologías.
- **■** SOLUCIONES
- **H1:** Resolvemos, no solo [lima]programamos.[/lima]
- **Lead:** Elige el problema que quieres resolver. Diseñamos la solución a la medida y la entregamos funcionando, con soporte después del lanzamiento.
- Rejilla de 6 tarjetas (igual que §1.5) + CTA final (§1.17).

### 2.2 Plantilla de landing (`/soluciones/[slug]`)
Estructura: Hero → El problema → Qué incluye → Cómo lo hacemos (método corto) → Caso real → Resultado → Preguntas → CTA.

#### `automatiza-tu-operacion`
- **SEO title:** Automatiza tu operación · **description:** Inventario, facturación con NCF e ITBIS, nómina y reportes automáticos, incluso sin internet.
- **■** SOLUCIÓN 01
- **H1:** Automatiza tu [lima]operación.[/lima]
- **Lead:** Deja de perder horas en hojas de cálculo. Tu inventario, tus facturas y tus reportes se actualizan solos.
- **El problema:** Tu equipo pierde horas en hojas de cálculo, facturas a mano y reportes que nadie actualiza. Los errores cuestan dinero y las decisiones llegan tarde.
- **Qué incluye:** Inventario y despachos en tiempo real · Facturación automática con NCF e ITBIS · Nómina, gastos y reportes en PDF · Funciona sin internet y sincroniza en la nube
- **Resultado:** Menos trabajo manual y datos confiables para decidir.
- **Caso:** Maderera Durán — control de madera, ventas, facturación, clientes a crédito, nómina, gastos y reportes de un aserradero, en app móvil y de escritorio.
- **Tiempo típico:** 2–3 semanas para la primera versión.
- **Preguntas:** ¿Puedo seguir usando Excel mientras migramos? Sí, importamos tus datos y trabajamos en paralelo hasta que el sistema esté listo. · ¿Funciona en varias sucursales? Sí, con usuarios y permisos por sede.

#### `vende-y-cobra-en-linea`
- **SEO title:** Vende y cobra en línea · **description:** Tienda, reservas o venta de boletos con pagos con tarjeta, comprobantes con QR y panel de ventas.
- **■** SOLUCIÓN 02
- **H1:** Vende y cobra [lima]en línea.[/lima]
- **Lead:** Tu negocio vendiendo las 24 horas, con cada pago confirmado y registrado automáticamente.
- **El problema:** Vendes por WhatsApp o transferencia y cada pago se confirma a mano. Se pierden ventas fuera de horario y no sabes cuánto vendiste hasta cerrar el día.
- **Qué incluye:** Tienda, reservas o venta de boletos · Pagos con tarjeta o transferencia · Comprobantes y boletos digitales con QR · Panel para aprobar órdenes y ver ventas
- **Resultado:** Vendes las 24 horas y cada cobro queda registrado.
- **Caso:** INSIDE — venta de boletos en línea con pago, boletos digitales con QR, verificación en puerta y cortesías desde un panel propio. ↗ inside-event-tickets.vercel.app
- **Tiempo típico:** 7 días a 3 semanas, según el catálogo y los métodos de pago.
- **Preguntas:** ¿Qué pasarelas usan? Stripe, PayPal y pasarelas locales según tu país. · ¿Puedo validar entradas en la puerta? Sí, con lector de QR desde cualquier teléfono.

#### `centraliza-tu-negocio`
- **SEO title:** Centraliza tu negocio · **description:** Clientes, cotizaciones, facturas, cobros y contabilidad en un solo sistema, en web, móvil y escritorio.
- **■** SOLUCIÓN 03
- **H1:** Centraliza tu [lima]negocio.[/lima]
- **Lead:** Clientes, ventas, cobros y contabilidad en un solo sistema que todo tu equipo consulta en tiempo real.
- **El problema:** Tu información vive en Excel, libretas y apps que no se comunican entre sí. Nadie tiene la versión correcta de los números.
- **Qué incluye:** Clientes, cotizaciones y facturas en un sistema · Cobros y cuentas por cobrar al día · Libro mayor contable automático · Acceso desde web, móvil y escritorio
- **Resultado:** Una sola fuente de verdad para todo tu equipo.
- **Caso:** MAYNODE ERP — clientes, facturación con ITBIS, cotizaciones, cobros y libro mayor contable en tiempo real, con facturas PDF de marca.
- **Tiempo típico:** 4–6 semanas para la primera versión.
- **Preguntas:** ¿Se adapta a mi forma de trabajar? Sí, el sistema se configura sobre tus procesos, no al revés. · ¿Cumple con la DGII? Sí, con NCF, ITBIS y facturación electrónica.

#### `atiende-y-vende-con-ia`
- **SEO title:** Atiende y vende con IA · **description:** WhatsApp conectado a tu CRM, embudo de ventas y asistente que responde y resume cada conversación.
- **■** SOLUCIÓN 04
- **H1:** Atiende y vende [lima]con IA.[/lima]
- **Lead:** Cada mensaje se convierte en una oportunidad con responsable, etapa y seguimiento automático.
- **El problema:** Los mensajes de WhatsApp se pierden y nadie sabe en qué etapa está cada cliente. Los leads se enfrían mientras esperan respuesta.
- **Qué incluye:** WhatsApp conectado a tu CRM · Cada chat se convierte en lead con responsable · Embudo de ventas y seguimiento automático · Asistente de IA que responde y resume
- **Resultado:** Ningún cliente se queda sin respuesta.
- **Caso:** Puerta Divina CRM — cada chat de WhatsApp entra como contacto y lead, avanza por un embudo de ventas y recibe seguimiento con IA y automatizaciones.
- **Tiempo típico:** 2–3 semanas.
- **Preguntas:** ¿El asistente responde solo? Responde lo frecuente y pasa a una persona lo importante, con el resumen de la conversación. · ¿Puedo usar mi número actual? Sí, con la API oficial de WhatsApp Business.

#### `lleva-tu-servicio-al-movil`
- **SEO title:** Lleva tu servicio al móvil · **description:** Apps para iOS y Android con GPS en tiempo real, chat, notificaciones y modo sin conexión.
- **■** SOLUCIÓN 05
- **H1:** Lleva tu servicio [lima]al móvil.[/lima]
- **Lead:** Tus clientes piden, rastrean y pagan desde su teléfono. Tu equipo opera desde el suyo.
- **El problema:** Tus clientes quieren pedir, rastrear y pagar desde su teléfono, y hoy todo pasa por llamadas y mensajes.
- **Qué incluye:** Apps para iOS y Android · GPS y seguimiento en tiempo real · Chat entre cliente y operador · Notificaciones y modo sin conexión
- **Resultado:** Tu servicio en el bolsillo de tus clientes.
- **Caso:** Punto Mandao — app de mandados y entregas con seguimiento GPS en tiempo real entre cliente y repartidor, y chat integrado.
- **Tiempo típico:** 4–6 semanas para publicar en tiendas.
- **Preguntas:** ¿Publican en App Store y Google Play? Sí, nos encargamos de todo el proceso de publicación. · ¿Hay panel para administrar? Sí, un panel web para operadores y administradores.

#### `capta-clientes-en-internet`
- **SEO title:** Capta clientes en internet · **description:** Sitios web a la medida, rápidos y posicionados, conectados a WhatsApp y con analítica de resultados.
- **■** SOLUCIÓN 06
- **H1:** Capta clientes [lima]en internet.[/lima]
- **Lead:** Una web rápida, bien posicionada y conectada a WhatsApp, diseñada para convertir visitas en contactos.
- **El problema:** Tu web no aparece en Google o no convierte las visitas en contactos.
- **Qué incluye:** Diseño a la medida de tu marca · Carga rápida y posicionamiento local · WhatsApp y formularios conectados · Analítica para medir resultados
- **Resultado:** Visitas que se convierten en clientes.
- **Caso:** Brisas del Cerro — web del proyecto urbanístico con solares, viviendas, casa club y contacto directo con un asesor. ↗ brisasdelcerro.vercel.app
- **Tiempo típico:** 7 días.
- **Preguntas:** ¿Incluye dominio y hosting? Te ayudamos a configurarlos y lo dejamos funcionando. · ¿Puedo editar los textos? Sí, con un panel sencillo.

---

## 3. Servicios

### 3.1 Índice (`/servicios`)
- **SEO title:** Servicios · **description:** Ocho líneas de servicio integradas: estrategia, gestión de proyectos, desarrollo, automatización, infraestructura, diseño, marca y capacitación.
- **■** PORTAFOLIO DE SERVICIOS
- **H1:** Un solo aliado para toda tu tecnología
- **Lead:** (igual §1.6)

### 3.2 Detalle (`/servicios/[slug]`)
Estructura: Hero (línea + descripción) → Servicios (lista 2 columnas) → Entregables clave (píldoras lima) → Soluciones relacionadas → CTA.

| slug | Línea | Lead | Servicios | Entregables |
| --- | --- | --- | --- | --- |
| `estrategia-y-consultoria` | 01 · Estrategia y consultoría | Alineamos la tecnología con los objetivos del negocio antes de invertir. | Diagnóstico y auditoría tecnológica · Hoja de ruta de transformación digital · Arquitectura empresarial y de sistemas · Evaluación técnica de proveedores y software · Propuestas técnicas para licitaciones · Asesoría ejecutiva para la toma de decisiones | Informe de diagnóstico · Roadmap priorizado · Brief de decisión ejecutiva |
| `gestion-de-proyectos` | 02 · Gestión de proyectos | Dirigimos el proyecto de punta a punta con control de alcance, tiempos y calidad. | Planificación, cronograma e hitos · Levantamiento y trazabilidad de requerimientos · Gestión de riesgos y control de cambios · Matrices de calidad y aceptación · Reportes ejecutivos y tableros de avance · Coordinación de equipos y proveedores | Acta de inicio · Matriz de trazabilidad · Reporte semanal |
| `desarrollo-de-software` | 03 · Desarrollo de software | Construimos el sistema que tu operación necesita, listo para crecer. | Software y plataformas a la medida · ERP, CRM y sistemas de gestión · Aplicaciones móviles iOS y Android · Productos SaaS multiempresa · Integraciones, APIs y migraciones · Comercio electrónico y pasarelas de pago | Sistema en producción · Código y documentación · Manual de usuario |
| `automatizacion-y-datos` | 04 · Automatización e inteligencia de datos | Hacemos que los procesos repetitivos trabajen solos y que los datos hablen. | Automatización de procesos y flujos · Asistentes conversacionales para WhatsApp y web · Recepción y atención telefónica automatizada · Tableros de indicadores e inteligencia de negocio · Conciliación y reportes automáticos · Integración entre sistemas existentes | Mapa de procesos · Flujos automatizados · Tablero de KPIs |
| `infraestructura-seguridad-y-soporte` | 05 · Infraestructura, seguridad y soporte | Mantenemos tus sistemas disponibles, seguros y al día. | Nube, servidores y DevOps · Ciberseguridad y hardening de sistemas · Respaldos y recuperación ante desastres · Monitoreo de disponibilidad y rendimiento · Mesa de ayuda y soporte remoto · Mantenimiento correctivo y evolutivo | Plan de continuidad · Acuerdo de nivel de servicio · Informe mensual |
| `diseno-de-producto` | 06 · Diseño de producto y experiencia | Diseñamos interfaces claras que tus usuarios entienden sin capacitación. | Investigación y arquitectura de información · Prototipos y diseño UX/UI · Sistemas de diseño y componentes · Pruebas de usabilidad · Diseño de paneles y aplicaciones · Guías de estilo para desarrollo | Prototipo navegable · Sistema de diseño · Especificación visual |
| `marca-y-comunicacion` | 07 · Marca y comunicación corporativa | Construimos marcas y materiales que transmiten confianza desde el primer contacto. | Identidad visual y manual de marca · Dossiers y presentaciones corporativas · Catálogos y material comercial · Campañas y contenido para redes · Video corporativo y piezas animadas · Sitios web y páginas de captación | Brandbook · Kit de campaña · Presentación ejecutiva |
| `capacitacion-y-adopcion` | 08 · Capacitación y adopción | Aseguramos que tu equipo use el sistema desde el primer día. | Capacitación presencial y remota · Videos tutoriales por módulo · Manuales y guías de usuario · Documentación técnica y de procesos · Acompañamiento en la puesta en marcha · Gestión del cambio en el equipo | Plan de capacitación · Biblioteca de videos · Guías por rol |

---

## 4. Proyectos (`/proyectos`)
- **SEO title:** Proyectos · **description:** Sistemas en producción: CRM con WhatsApp, gestión industrial, ticketing, delivery, ERP, fintech y más.
- **■** PROYECTOS
- **H1:** Sistemas que ya [lima]trabajan.[/lima]
- **Lead:** Una muestra de los sistemas que diseñamos, construimos y mantenemos para nuestros clientes y para productos propios.
- **Filtros:** Todos · Gestión · Ventas · Móvil · Web · Producto propio

| # | Sector | Proyecto | Descripción | Tags | Enlace / estado |
| --- | --- | --- | --- | --- | --- |
| P.01 | CRM · Servicios funerarios | Puerta Divina CRM | Cada chat de WhatsApp entra como contacto y lead, avanza por un embudo de ventas y recibe seguimiento con IA y automatizaciones. | WhatsApp + IA · Web, Windows, Android e iOS | ● Uso interno del cliente |
| P.02 | Gestión industrial | Maderera Durán | Control de madera, ventas, facturación, clientes a crédito, nómina, gastos y reportes de un aserradero, con asistente de IA. | Datos en la nube · Funciona sin internet | ● App móvil y de escritorio |
| P.03 | Eventos y ticketing | INSIDE | Venta de boletos en línea con pago, boletos digitales con QR, verificación en puerta y cortesías desde un panel propio. | Pagos en RD$ · Validación QR | ↗ inside-event-tickets.vercel.app |
| P.04 | Logística y delivery | Punto Mandao | App de mandados y entregas con seguimiento GPS en tiempo real entre cliente y repartidor, y chat integrado. | GPS en vivo · Rutas optimizadas | ● App móvil · Android e iOS |
| P.05 | Educación y ventas | Eleva Tus Ventas | Landing de venta, cobro con Stripe, academia en línea con videos y progreso, CRM de prospectos y asistente de IA. | Pagos automáticos · Academia + IA | ● En desarrollo |
| P.06 | Bienes raíces | Brisas del Cerro | Web del proyecto urbanístico: solares, viviendas, casa club y contacto directo con un asesor. | Captación de clientes · WhatsApp directo | ↗ brisasdelcerro.vercel.app |
| P.07 | Gestión empresarial | MAYNODE ERP | Clientes, facturación con ITBIS, cotizaciones, cobros y libro mayor contable en tiempo real, con facturas PDF de marca. | Contabilidad automática · Multiplataforma | ● Producto interno |
| P.08 | Fintech · Crédito | Avance Credits | App de reparación de crédito para iOS, Android y web, con seguimiento por etapas del proceso del cliente. | Seguimiento por etapas · iOS, Android y web | ● Demo funcional |

- **CTA:** ¿Tu proyecto es el próximo? → Evaluar mi proyecto

> Nota: "MAYNODE ERP" sustituye a "ERP propio" del dossier. Si prefieres mantener "ERP propio", cámbialo aquí y en §2.2.

---

## 5. Productos (`/productos`, `/productos/bosqra`)
- **SEO title:** Productos · **description:** Productos propios de MAYNODE Labs. BOSQRA, el sistema de gestión para la industria maderera.
- **■** MAYNODE LABS
- **H1:** Productos que [lima]operamos.[/lima]
- **Lead:** Además de construir para clientes, diseñamos y operamos nuestros propios productos SaaS.
- **Tarjeta BOSQRA:** (contenido §1.12)
- **Landing `/productos/bosqra`:**
  - **H1:** Cada pie tablar [lima]cuenta.[/lima]
  - **Lead:** El sistema de gestión hecho para la industria maderera. Producción, inventario, ventas y cobros en una sola app para Android, iOS y web.
  - **Beneficios:** Ventas en segundos con factura automática (NCF e ITBIS) · Inventario en pies tablares por especie y medida · Crédito de clientes, abonos y cuentas por cobrar · Asistente de IA que responde por ti
  - **→** Solicitar demo · **○** ↗ bosqra.app

---

## 6. Cómo trabajamos (`/como-trabajamos`)
- **SEO title:** Cómo trabajamos · **description:** Método en 5 fases, gestión de proyectos con director asignado, entregas semanales y soporte con tiempos de respuesta definidos.
- **■** CÓMO TRABAJAMOS
- **H1:** Rápido, sin [lima]sorpresas.[/lima]
- **Lead:** De la primera reunión al plan técnico en una semana. Desde ahí, entregas funcionales cada semana y control total de tu inversión.

**Bloques en orden:**
1. **Método** (tabla §1.8 con duraciones).
2. **Gestión de proyectos**
   - **H1:** Control total, sin sorpresas
   - **Lead:** Cada proyecto tiene un director, un plan aprobado y entregables documentados. Sabes en qué punto está tu inversión en todo momento.
   - **Gobierno del proyecto:** Sponsor del cliente — Define prioridades y aprueba entregables. · Director de proyecto — Planifica, controla alcance, tiempos y riesgos. · Líder técnico — Garantiza la arquitectura y la calidad del código. · Calidad (QA) — Valida cada entrega contra los criterios de aceptación.
   - **Entregables por fase:** Inicio — Acta de inicio · Alcance · Cronograma. · Requerimientos — Especificación funcional · Matriz de trazabilidad. · Ejecución — Reporte semanal · Registro de riesgos · Control de cambios. · Calidad — Matriz de QA y aceptación · Demos por sprint. · Cierre — Acta de entrega · Manuales · Plan de soporte.
   - **Cadencia:** Diario — Avance en tu canal de comunicación. · Semanal — Demo funcional y reporte de riesgos. · Mensual — Comité ejecutivo de seguimiento.
3. **Modelos de contratación** (§1.13).
4. **Soporte y seguridad** (§1.14).
5. **CTA final** (§1.17).

---

## 7. Nosotros (`/nosotros`)
- **SEO title:** Nosotros · **description:** MAYNODE, antes Korsen Dev: grupo tecnológico con siete unidades, liderado por Ramger Deivi Durán Cortorreal, CEO y Fundador.

### 7.1 Hero
- **■** NOSOTROS
- **H1:** Convertimos problemas de negocio en software que produce [lima]resultados.[/lima]
- **Párrafos:** (§1.3)
- **Cifras:** (§1.2)

### 7.2 Nueva marca (`#nueva-marca`)
- **■** NUEVA ETAPA
- **H1:** Korsen Dev ahora es [lima]MAYNODE.[/lima]
- **Texto:** El 24 de noviembre de 2026 Korsen Dev pasó a llamarse MAYNODE. Cambiamos el nombre porque crecimos: hoy somos un grupo de unidades especializadas con un mismo método. El equipo, los contratos, el soporte y la calidad siguen siendo los mismos.
- **Qué cambia / qué no:**
  - Cambia: nombre, logo, dominio **maynode.dev** y correo **team@maynode.dev**.
  - No cambia: tu equipo de contacto, tus contratos, tus sistemas y tu soporte.
- **Nota:** korsen.dev redirige automáticamente a maynode.dev.

### 7.3 Liderazgo
- **■** LIDERAZGO
- **Nombre (H1):** Ramger Deivi Durán Cortorreal
- **Cargo (barra lima + mono):** CEO & Fundador
- **Bio:** Ingeniero de software full-stack y arquitecto de soluciones SaaS. Lidera la estrategia y la arquitectura de cada proyecto de MAYNODE, desde el diagnóstico del negocio hasta el sistema en producción.
- **Áreas:** Arquitectura de software y sistemas SaaS · Apps multiplataforma: web, móvil y escritorio · Sistemas de facturación, contabilidad y gestión · Automatización de procesos con IA · Desarrollo seguro y servidores en la nube
- **Foto:** `public/brand/ceo-ramger.jpg` (gorra y camisa MAYNODE, fondo oscuro).

### 7.4 Ecosistema (§1.7) · 7.5 Cobertura (§1.15)

### 7.6 Cómo pensamos (valores)
| Valor | Texto |
| --- | --- |
| Resultados primero | Medimos el éxito por lo que cambia en tu negocio, no por las líneas de código. |
| Transparencia total | Sabes qué se hace, cuándo y cuánto cuesta, en todo momento. |
| Velocidad con calidad | Entregamos rápido porque tenemos método, no porque recortamos pasos. |
| Responsables de punta a punta | Un solo equipo desde la estrategia hasta el soporte. |

---

## 8. Evaluar mi proyecto (`/diagnostico`)
- **SEO title:** Evaluar mi proyecto · **description:** Cuéntanos tu problema u objetivo. En menos de 24 horas agendamos una llamada y en 48 horas recibes una propuesta formal.
- **■** EVALUACIÓN DE PROYECTO
- **H1:** Cuéntanos qué quieres [lima]resolver.[/lima]
- **Lead:** Toma 3 minutos. En menos de 24 horas te contactamos para agendar la llamada de discovery.

**Formulario (pasos):**
1. **¿Qué necesitas?** (selección) Automatizar mi operación · Vender y cobrar en línea · Centralizar mi negocio · Atender y vender con IA · Una app móvil · Una web que capte clientes · Otro / no estoy seguro
2. **Cuéntanos más** — placeholder: *Describe el problema, cómo lo resuelves hoy y qué te gustaría lograr.*
3. **Tu empresa:** Nombre · Empresa · Sector (lista de industrias §1.10) · País · Tamaño del equipo (1–10 · 11–50 · 51–200 · 200+)
4. **Plazo:** Lo antes posible · 1–3 meses · Solo estoy explorando
5. **Presupuesto estimado (opcional):** Menos de US$3,000 · US$3,000–10,000 · US$10,000–30,000 · Más de US$30,000 · Aún no lo sé
6. **Contacto:** Correo · WhatsApp
- **Botón:** Enviar evaluación →
- **Legal bajo el botón:** Tus datos se usan solo para responder tu solicitud, conforme a la Ley 172-13.
- **Éxito:** **¡Recibido!** En menos de 24 horas te escribimos para agendar la llamada. Si es urgente, escríbenos por WhatsApp. → Abrir WhatsApp
- **Error:** No pudimos enviar el formulario. Intenta de nuevo o escríbenos a team@maynode.dev.
- **Validaciones:** Este campo es obligatorio · Escribe un correo válido · Escribe un número con código de país

---

## 9. Contacto (`/contacto` o sección en Inicio)
- **■** CONTACTO
- **H1:** Hablemos de tu [lima]proyecto.[/lima]
- **Lead:** Respondemos en menos de 24 horas, en tu zona horaria.
- **Canales:** Web — maynode.dev · Correo — team@maynode.dev · Teléfono / WhatsApp — +44 7848 445738 · Sede — República Dominicana · remoto global
- **→** Evaluar mi proyecto

---

## 10. Microcopy
- **404 — H1:** Esta página no [lima]existe.[/lima] · **Texto:** Puede que el enlace sea de korsen.dev o que la página haya cambiado. · **→** Volver al inicio
- **Cargando:** Cargando…
- **Leer más:** Ver solución → · Ver proyecto ↗ · Ver todos →
- **Cookies:** Usamos cookies esenciales y analítica anónima para mejorar el sitio. [Aceptar] [Solo esenciales]
- **Blog — H1:** Ideas para hacer crecer tu negocio con [lima]tecnología.[/lima] · **Lead:** Guías prácticas sobre automatización, ventas en línea y software a medida.

---

## 11. Reglas de contenido
- No mencionar herramientas internas ni decir que el trabajo lo produce una IA. La IA aparece solo como capacidad que se entrega al cliente.
- No publicar nombres de clientes que no estén en §4.
- Escribir "MAYNODE" siempre en mayúsculas. "Korsen Dev" solo en la firma de transición, la barra de transición y §7.2.
- Moneda en USD (US$) para el público internacional; RD$ solo en casos locales.
- Números: "48 h", "7 días", "2–3 sem." (guion corto), "24/7".
