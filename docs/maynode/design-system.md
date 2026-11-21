# MAYNODE® — Sistema de diseño web

> Versión 1.0 · noviembre 2026 · reemplaza a `docs/korsen_design_system_web.md`
> Tokens listos para código: [`tokens.css`](./tokens.css) · Textos: [`web-copy.md`](./web-copy.md) · Plan: [`README.md`](./README.md)

MAYNODE es la evolución de Korsen Dev. El sistema hereda lo que funcionaba en korsen.dev (fondo negro absoluto, acento neón, carácter técnico) y lo lleva a un registro más **ejecutivo**: tipografía Sora en mayúsculas compactas, un solo acento lima, mucho aire y tarjetas de vidrio oscuro.

---

## 1. Principios

1. **Negro primero, lima con intención.** El lima `#C4FF00` es el único color de acento. Se usa en: palabra clave del titular, etiqueta de sección, CTA primario, un elemento destacado por grupo. Nunca más de ~5 % de la pantalla.
2. **Ejecutivo, no "hacker".** Nada de terminales falsas, matrix ni código decorativo. El código aparece solo como dato (URLs, duraciones, versiones) en JetBrains Mono.
3. **Resultados antes que tecnologías.** Cada bloque responde *qué problema resuelve* y *qué obtiene el cliente*. Las tecnologías van al final como prueba, nunca como titular.
4. **Rejilla estricta.** Mismo margen lateral, misma posición de etiqueta + título + intro en cada sección; las tarjetas de una fila tienen la misma altura y llenan su zona.
5. **Un solo destacado por grupo.** En cada fila de tarjetas, como máximo una lleva borde lima (`.mn-card--hl`): la recomendada o la principal.

---

## 2. Color

| Token | Valor | Uso |
| --- | --- | --- |
| `--mn-lime` | `#C4FF00` | Acento único: CTA, palabra clave, etiqueta, punto activo |
| `--mn-lime-hover` | `#D9FF00` | Hover de botón primario |
| `--mn-lime-press` | `#A9FF00` | Pressed |
| `--mn-bg` | `#050505` | Fondo de página |
| `--mn-surface-1` | `#0B0B0B` | Bandas alternas, footer |
| `--mn-surface-2` | `#111111` | Inputs, paneles internos |
| `--mn-surface-3` | `#1A1A1A` | Hover de filas |
| `--mn-border-1` | `#181818` | Divisores internos de lista |
| `--mn-border-2` | `#262626` | Borde de tarjeta, separadores de sección |
| `--mn-text` | `#F7F7F7` | Titulares y texto principal |
| `--mn-text-2` | `#A6A6A6` | Párrafos, descripciones |
| `--mn-text-3` | `#737373` | Etiquetas mono, metadatos |
| `--mn-ghost` | `#262626` | Numerales gigantes de fondo (01, 02…) |
| `--mn-success` | `#46E45F` | Badge "EN PRODUCCIÓN" |

**Contraste:** texto `#F7F7F7` y `#A6A6A6` sobre `#050505` cumplen AA. `#737373` solo para texto ≥ 11 px en mayúsculas mono (etiquetas), nunca para párrafos. Sobre lima, el texto siempre es `#050505`.

**Modo claro:** no hay. La marca es oscura; solo existen piezas claras para impresión (usar `maynode-logo-negro.svg`).

---

## 3. Tipografía

| Rol | Familia | Peso | Estilo |
| --- | --- | --- | --- |
| Display / H1 / H2 | **Sora** | 800 | MAYÚSCULAS, tracking −0.045em a −0.05em, interlineado 0.92–1.05 |
| Títulos de tarjeta | Sora | 700 | Tipo oración, 18–22 px |
| Párrafos | Sora | 300–400 | 15–19 px, interlineado 1.5–1.55, máx. 62 caracteres |
| Etiquetas / kickers | **IBM Plex Mono** | 500 | MAYÚSCULAS, tracking 0.12em, 11–13 px |
| Datos (URLs, tiempos, cifras técnicas) | **JetBrains Mono** | 500–700 | 13–18 px |
| Cifras grandes | Sora | 800 | 64–130 px, `+` en lima |

```tsx
// app/layout.tsx
import { Sora, IBM_Plex_Mono, JetBrains_Mono } from "next/font/google"
const sora = Sora({ subsets: ["latin"], weight: ["300","400","500","600","700","800"], variable: "--font-sora", display: "swap" })
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-plex", display: "swap" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["500","700"], variable: "--font-jetbrains", display: "swap" })
// <html className={`${sora.variable} ${plex.variable} ${jetbrains.variable}`}>
```

Se elimina **Space Grotesk** del sitio.

**Escala (desktop → móvil):**

| Clase | Desktop | Móvil |
| --- | --- | --- |
| `.mn-display` | 112 px | 44 px |
| `.mn-h1` | 66 px | 34 px |
| `.mn-h2` | 34 px | 22 px |
| `.mn-h3` | 20 px | 18 px |
| `.mn-lead` | 19 px | 16 px |
| `.mn-body` | 15 px | 15 px |
| `.mn-label` | 12 px | 11 px |

**Palabra clave en lima:** cada titular de sección puede llevar como máximo **una** palabra o frase final en lima (`<span class="mn-accent">resultados.</span>`), normalmente con punto final.

---

## 4. Logo

Archivos en `public/brand/`:

| Archivo | Uso |
| --- | --- |
| `maynode-logo.svg` | Logo principal (MAY / NODE + barra lima). Header, footer, OG |
| `maynode-logo-negro.svg` | Sobre fondos claros / impresión |
| `maynode-isotipo.svg` | "M" + barra. Favicon, avatar, app icon, loaders |

- **Tamaño mínimo:** 96 px de ancho (logo), 24 px (isotipo).
- **Área de respeto:** la altura de la barra lima × 2 alrededor.
- **Header:** logo a 32–36 px de alto.
- **No:** cambiar el color de la barra, poner el logo sobre lima, separar "MAY" y "NODE", usar el isotipo como foto de perfil corporativa (el perfil usa el logo completo).
- **Firma de transición** (hasta marzo 2027): `MAYNODE · antes Korsen Dev` en IBM Plex Mono, `--mn-text-3`.

---

## 5. Layout y rejilla

- **Contenedor:** `max-width: 1440px`, margen lateral `--mn-gutter` (120 px en desktop, 20 px en móvil).
- **Columnas:** 12 columnas, gap 18–24 px. Fondo decorativo opcional `.mn-columns` (líneas cada 160 px).
- **Sección:** padding vertical `--mn-section` (160 px desktop / 88 px móvil). Separador entre secciones: `border-top: 1px solid var(--mn-border-2)` o simplemente aire.
- **Cabecera de sección (siempre igual):**
  1. `.mn-label` → `■ 05 · PORTAFOLIO DE SERVICIOS`
  2. `.mn-h1` (margen superior 20 px)
  3. `.mn-lead` (margen superior 14 px, máx. 980 px)
  4. Zona de contenido a 56–72 px debajo.
- **Rejillas de tarjetas:**

| Contenido | Desktop | Tablet | Móvil |
| --- | --- | --- | --- |
| Problemas, soluciones, proyectos | 3 columnas | 2 | 1 |
| Servicios, ecosistema, stack | 4 columnas | 2 | 1 |
| Industrias | 5 columnas | 3 | 2 |
| Método | 5 columnas | carrusel horizontal | carrusel horizontal |
| Modelos de contratación, planes | 4 / 3 columnas | 2 | 1 |

- Todas las tarjetas de una fila con **misma altura** (`grid-auto-rows: 1fr`), contenido distribuido con `margin-top:auto` en el bloque inferior.

---

## 6. Componentes

### 6.1 Etiqueta de sección — `.mn-label`
Cuadrado lima de 10 px + texto mono lima en mayúsculas. Formato: `NN · NOMBRE`.

### 6.2 Botones — `.mn-btn`
| Variante | Estilo | Uso |
| --- | --- | --- |
| Primario | Fondo lima, texto negro, glow lima | 1 por vista: "Evaluar mi proyecto" |
| Fantasma | Borde `#262626`, texto blanco; hover borde lima | Acción secundaria: "Ver soluciones" |
| Enlace | Texto + `↗` lima, JetBrains Mono | Enlaces a proyectos en vivo |

Alto 52 px (44 px compacto), radio 12 px, peso 600. Ícono de flecha `→` al final del primario.

### 6.3 Tarjeta — `.mn-card`
Vidrio oscuro: gradiente `rgba(24,24,24,.72) → rgba(11,11,11,.72)`, borde `#262626`, radio 18 px, padding 24–36 px. Hover: borde `#333` y elevación −2 px. Variante destacada `.mn-card--hl`: borde lima 45 % + glow.

**Anatomía estándar:**
```
┌──────────────────────────────────────┐
│ [iconbox]                   01 (ghost)│  ← cabecera: icono + numeral/kicker
│                                       │
│                                       │  ← aire (flex)
│ TÍTULO EN MAYÚSCULAS                  │  ← .mn-h2 / .mn-h3
│ Descripción en gris 15 px.            │  ← .mn-body
│ ───────────────────────────────────── │
│ KICKER   dato / entregable / enlace   │  ← pie opcional
└──────────────────────────────────────┘
```

### 6.4 Caja de icono — `.mn-iconbox`
52 px, radio 14 px, fondo lima 8 %, borde lima 30 %, ícono lima a 52 % del tamaño. Íconos: **lucide-react** con trazo 1.75.

| Concepto | Ícono lucide |
| --- | --- |
| Estrategia / nodo | `Network` |
| Gestión de proyectos | `ChartNoAxesCombined` |
| Desarrollo | `Code2` |
| Automatización | `RefreshCcw` |
| Infraestructura / seguridad | `ShieldCheck` |
| Diseño de producto | `PanelsTopLeft` |
| Marca / comercio | `ShoppingCart` |
| Capacitación / datos | `Database` |
| Nube | `Cloud` |
| Móvil | `Smartphone` |
| API / integraciones | `Plug` |
| Inteligencia | `Sparkles` |

### 6.5 Chip de estado — `.mn-chip`
Píldora con borde lima 30 % y punto lima con glow. Hero: `● MAYNODE // SOFTWARE STUDIO`.

### 6.6 Tag tecnológico — `.mn-tag`
Rectángulo `#151515`, borde `#262626`, radio 8 px, 13 px. Solo en la sección Stack y en fichas de proyecto.

### 6.7 Píldora lima — `.mn-pill`
Fondo lima, texto negro, JetBrains Mono 700, radio 6 px. Para **entregables** ("Informe de diagnóstico") y **duraciones** ("2–3 días", "48 h").

### 6.8 Caja de resultado — `.mn-result`
Fondo lima 7 %, borde lima 25 %, radio 14 px. Kicker `RESULTADO` lima + frase de 1 línea en Sora 600 16 px.

### 6.9 Badge
| Badge | Color |
| --- | --- |
| `MÁS ELEGIDO` / `RECOMENDADO` | Lima sobre lima 12 % |
| `EN PRODUCCIÓN` | `#46E45F` sobre verde 12 % |
| `EN DESARROLLO` | `#FFD60A` sobre amarillo 12 % |

### 6.10 Cifra — Stat
Número Sora 800 (96–130 px) + `+` lima; debajo kicker mono gris. Separador vertical `1px #262626` a la izquierda de cada cifra.

### 6.11 Lista con marcas
Filas de 15–16 px con marca lima (`✓` para incluye, `›` para servicios), separador `1px #181818` entre filas.

### 6.12 Numeral fantasma
`01`, `02`… en Sora 800, 30–96 px, color `#262626`, esquina superior derecha de tarjetas.

### 6.13 Formularios — `.mn-input`
Alto 52 px, fondo `#111`, borde `#262626`, radio 14 px; foco con borde lima + halo lima 10 %. Etiquetas en `.mn-kicker` sobre el campo.

### 6.14 Header
Fijo, alto 76 px, fondo `rgba(5,5,5,.72)` + `backdrop-filter: blur(16px)`, borde inferior `#181818` al hacer scroll. Izquierda: logo. Centro: navegación Sora 500 14 px gris → blanco en hover, activo con subrayado lima de 2 px. Derecha: botón primario compacto "Evaluar proyecto".

### 6.15 Footer
Fondo `#0B0B0B`, logo grande (160 px), 4 columnas de enlaces, datos de contacto en Sora 600 y firma `© 2026 MAYNODE · antes Korsen Dev`.

### 6.16 Botón flotante de WhatsApp
Círculo 56 px fondo lima con ícono negro; tooltip "Hablemos por WhatsApp".

---

## 7. Fondos y efectos

| Efecto | Clase | Dónde |
| --- | --- | --- |
| Halo lima | `.mn-glow` (opacidad 0.12–0.18) | 1 por sección, detrás de la zona destacada |
| Líneas de columnas | `.mn-columns` | Hero, Quiénes somos |
| Grilla de nodos | `.mn-nodegrid` | Cobertura, CTA final |
| Grano | `.mn-grain` | Hero y bandas con foto |
| Barra enlace | `.mn-enlace` | Junto al cargo del CEO, separadores especiales |

**Mapas (Cobertura):** mapas de puntos (patrón de 5 px) con países atendidos en lima y el resto en `#3A3A3A`. Generados como SVG desde `world-atlas` + `d3-geo`.

**Fotografía:** renders reales de marca (recepción con letrero, escritorio con taza y libreta, merch). Siempre con degradado `#050505 → transparente` hacia el lado del texto. Nunca fotos de stock genéricas con personas sonriendo frente a laptops.

---

## 8. Movimiento

- Entrada de secciones: `mn-rise` (16 px, 600 ms, `cubic-bezier(.2,.7,.1,1)`), escalonado 60 ms entre tarjetas.
- Hover de tarjeta: borde + −2 px, 280 ms.
- Cifras: conteo de 0 al valor en 1.2 s al entrar en pantalla.
- Punto activo (sede, plan recomendado): `mn-pulse` suave.
- Respetar `prefers-reduced-motion`.

---

## 9. Voz y tono

- **Español neutro**, tuteo ("tu negocio", "tu equipo").
- Frases cortas, verbos de resultado: *automatiza, vende, centraliza, capta, escala*.
- Titulares en mayúsculas de 3–6 palabras.
- Cifras concretas en vez de adjetivos ("propuesta en 48 h", no "respuesta rápida").
- Presentar a MAYNODE como un grupo tecnológico con unidades, método y equipo propio.
- **No** mencionar herramientas internas ni cómo se produce el trabajo internamente. No decir que el trabajo lo hace una IA. La inteligencia artificial aparece **solo** como capacidad que se entrega al cliente (asistentes, automatizaciones, análisis).
- **No** inventar datos verificables: clientes con nombre que no aparecen en Proyectos, certificaciones, oficinas físicas fuera de RD, alianzas oficiales.

---

## 10. Checklist de implementación

- [ ] Sustituir tokens Korsen (`#C6FD0E`, Space Grotesk) por `tokens.css`.
- [ ] Cargar Sora 300–800, IBM Plex Mono y JetBrains Mono vía `next/font`.
- [ ] Reemplazar logo, favicon (`maynode-isotipo.svg`), OG image y `metadata` de `layout.tsx`.
- [ ] Cabecera de sección única en un componente `<SectionHeader label title intro />`.
- [ ] Componentes base: `Card`, `IconBox`, `Pill`, `Chip`, `Tag`, `Stat`, `ResultBox`, `CheckList`.
- [ ] Todas las rejillas de tarjetas con altura uniforme.
- [ ] Revisar contraste y foco visible en todos los controles.
- [ ] Redirecciones 301 de korsen.dev → maynode.dev (ver `README.md`).
