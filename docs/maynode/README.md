# MAYNODE — Paquete para reconstruir korsen.dev → maynode.dev

Este paquete contiene lo necesario para reconstruir el sitio en este repositorio con la nueva marca.

| Archivo | Contenido |
| --- | --- |
| [`design-system.md`](./design-system.md) | Sistema de diseño: color, tipografía, logo, rejilla, componentes, efectos, movimiento y voz |
| [`tokens.css`](./tokens.css) | Tokens listos para usar (CSS vars + `@theme` de Tailwind v4 + clases `.mn-*`) |
| [`web-copy.md`](./web-copy.md) | Todos los textos del sitio por página, con SEO, formularios y microcopy |
| `public/brand/` | `maynode-logo.svg`, `maynode-logo-negro.svg`, `maynode-isotipo.svg`, `ceo-ramger.jpg`, `maps/*.svg` |

Lanzamiento de la nueva marca: **martes 24 de noviembre de 2026**.

---

## 1. Mapa de rutas

| Ruta nueva | Contenido (`web-copy.md`) | Ruta actual / acción |
| --- | --- | --- |
| `/` | §1 Inicio | Reconstruir `app/page.tsx` |
| `/soluciones` | §2.1 | Nueva |
| `/soluciones/[slug]` (6) | §2.2 | Reemplazar contenido de `app/soluciones/[slug]` |
| `/servicios` | §3.1 | Nueva |
| `/servicios/[slug]` (8) | §3.2 | Nueva |
| `/proyectos` | §4 | Reconstruir `app/proyectos` con datos nuevos |
| `/productos`, `/productos/bosqra` | §5 | Reconstruir `app/productos` |
| `/como-trabajamos` | §6 | Nueva |
| `/nosotros` | §7 | Reconstruir `app/nosotros` |
| `/diagnostico` | §8 | Reconstruir formulario |
| `/contacto` | §9 | Nueva (o ancla `#contacto` en inicio) |
| `/blog`, `/blog/[slug]` | §10 | Conservar, aplicar nuevo estilo |
| `/tecnologias/[slug]` | — | Conservar como páginas SEO del stack |
| `/soluciones-y-tecnologias` | — | 301 → `/servicios` |
| `/casos/[slug]` | — | 301 → `/proyectos` |

### Orden de secciones en Inicio
Hero → Cifras → Quiénes somos → Diagnóstico → Soluciones → Servicios → Ecosistema → Método → Proyectos destacados → Industrias → Stack → BOSQRA → Modelos de contratación → Soporte → Cobertura (mapas) → Preguntas frecuentes → CTA final.

---

## 2. Componentes

| Componente actual | Nuevo | Notas |
| --- | --- | --- |
| `header.tsx` | `header.tsx` | Logo SVG, nueva navegación, CTA "Evaluar proyecto", barra de transición |
| `hero.tsx` | `hero.tsx` | Sin editor de código; titular display + chip + datos de tiempo |
| `problems.tsx` | `diagnosis.tsx` | 6 tarjetas, 3×2 |
| `services.tsx` | `solutions.tsx` + `service-lines.tsx` | Soluciones (resultados) y líneas de servicio por separado |
| `portfolio.tsx` | `projects.tsx` | Datos en `lib/projects-data.ts` (reescribir con §4) |
| `products.tsx` | `bosqra.tsx` | — |
| `process.tsx` | `method.tsx` | 5 fases con píldora de duración |
| `technologies.tsx` | `stack.tsx` | 8 áreas con tags |
| `faq.tsx` | `faq.tsx` | 8 preguntas nuevas |
| `cta-final.tsx` | `cta-final.tsx` | 3 pasos + CTA |
| `footer.tsx` | `footer.tsx` | Nueva estructura de 4 columnas |
| — | `section-header.tsx` | `label`, `title`, `accent`, `intro`: la misma cabecera en todas las secciones |
| — | `ecosystem.tsx`, `industries.tsx`, `engagement.tsx`, `support.tsx`, `coverage.tsx`, `stats.tsx`, `leadership.tsx` | Nuevos |
| — | `ui/mn-card.tsx`, `ui/icon-box.tsx`, `ui/pill.tsx`, `ui/chip.tsx`, `ui/stat.tsx`, `ui/result-box.tsx` | Primitivos del sistema |

Recomendación: mover los textos de `web-copy.md` a `lib/content/*.ts` (un archivo por sección) para que el diseño y el copy queden separados.

---

## 3. Cambios globales

1. **Tokens:** sustituir el bloque de variables de `app/globals.css` por `docs/maynode/tokens.css`. Eliminar `#C6FD0E` y Space Grotesk.
2. **Fuentes:** Sora 300–800, IBM Plex Mono y JetBrains Mono (ver `design-system.md` §3).
3. **Metadata:** `app/layout.tsx` con los valores de `web-copy.md` §0.1. URL base `https://maynode.dev`.
4. **Iconos:** favicon y apple-touch a partir de `maynode-isotipo.svg`. Nueva OG image de 1200×630: fondo `#050505`, logo y la frase "Software que hace crecer tu negocio".
5. **WhatsApp:** actualizar `lib/whatsapp.ts` con el mensaje de §0.5.
6. **Correo:** usar team@maynode.dev en todo el sitio.

### Redirecciones (`next.config.mjs`)
```js
async redirects() {
  return [
    { source: "/cotizar/:topic", destination: "/diagnostico?tema=:topic", permanent: false },
    { source: "/cotizar", destination: "/diagnostico", permanent: false },
    { source: "/soluciones-y-tecnologias", destination: "/servicios", permanent: true },
    { source: "/casos/:slug", destination: "/proyectos", permanent: true },
    // En el proyecto de Vercel de korsen.dev: redirigir todo el dominio
    // { source: "/:path*", has: [{ type: "host", value: "(www\\.)?korsen\\.dev" }], destination: "https://maynode.dev/:path*", permanent: true },
  ]
}
```

---

## 4. Limpieza del repositorio
- Mover a almacenamiento externo los videos `.mp4` de la raíz (≈230 MB): no deben estar en el repo del sitio.
- Retirar de `public/` los assets de Korsen que ya no se usen (`logo-korsen.png`, `logokorsen.png`, `previewweb.png` y los placeholders).
- `docs/korsen_design_system_web.md` queda como histórico; la referencia vigente es `docs/maynode/design-system.md`.

---

## 5. Criterios de aceptación
- [ ] Todas las secciones usan `SectionHeader`, con la etiqueta, el título y la introducción en la misma posición.
- [ ] Las tarjetas de una misma fila tienen la misma altura y no dejan huecos.
- [ ] Solo hay un botón primario lima por vista y solo una palabra en lima por titular.
- [ ] El sitio funciona bien desde 360 px de ancho y las rejillas se adaptan según `design-system.md` §5.
- [ ] Lighthouse: rendimiento ≥ 90 y accesibilidad ≥ 95.
- [ ] No se mencionan herramientas internas ni que el trabajo lo hace una IA.
- [ ] `korsen.dev/*` redirige con 301 a `maynode.dev/*`.
