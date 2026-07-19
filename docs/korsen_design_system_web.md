# Guía de Adaptación del Sistema de Diseño Korsen para Web

Este documento reúne todas las especificaciones de diseño, colores, fuentes, espaciados y componentes del sistema visual de Korsen para facilitar su implementación en proyectos web estándar (CSS vanilla, Sass o Tailwind CSS).

---

## 🎨 1. Variables de Color (CSS Custom Properties)

Añade estas propiedades en el archivo CSS global (ej. `index.css`) bajo la pseudo-clase `:root`:

```css
:root {
  /* Brand Colors */
  --korsen-primary: #c6fd0e;        /* Verde Neón Principal */
  --korsen-primary-dark: #b3eb00;   /* Verde Oscurecido (Pressed) */
  --korsen-primary-light: #d4ff42;  /* Verde Aclarado */
  --korsen-primary-container: rgba(24, 32, 0, 0.6);

  /* Backgrounds */
  --korsen-bg-main: #050505;        /* Negro Absoluto */
  --korsen-bg-secondary: #101010;   /* Negro Intermedio */
  --korsen-bg-tertiary: #151515;    /* Gris muy oscuro */

  /* Surfaces */
  --korsen-surface: #0a0a0a;
  --korsen-surface-light: #151515;
  --korsen-surface-container: #101010;

  /* Typography Colors */
  --korsen-text-primary: #ffffff;
  --korsen-text-secondary: #c5c5c5;
  --korsen-text-muted: #8b8b8b;
  --korsen-text-disabled: #4c4c4c;
  --korsen-text-placeholder: #666666;

  /* Borders & Dividers */
  --korsen-border: #1f1f1f;
  --korsen-border-strong: #232323;
  --korsen-border-subtle: #1c1c1c;
  --korsen-divider: #1c1c1c;

  /* Status Colors */
  --korsen-success: #46e45f;
  --korsen-warning: #ffd60a;
  --korsen-danger: #ff4d4d;
  --korsen-info: #4da3ff;

  /* Status Backgrounds (Opacity 12%) */
  --korsen-success-bg: rgba(70, 228, 95, 0.12);
  --korsen-warning-bg: rgba(255, 214, 10, 0.12);
  --korsen-danger-bg: rgba(255, 77, 77, 0.12);
  --korsen-info-bg: rgba(77, 163, 255, 0.12);

  /* Glassmorphism & Hover */
  --korsen-hover: #151515;
  --korsen-glow: rgba(198, 253, 14, 0.25);
}
```

---

## 📐 2. Radios de Borde (Border Radius)

El diseño de Korsen combina curvas orgánicas suaves para contenedores interactivos y bordes afilados para diseño técnico:

| Variable CSS | Valor | Uso del Componente |
| :--- | :---: | :--- |
| `--korsen-radius-xs` | `4px` | Pequeños detalles / Indicadores |
| `--korsen-radius-sm` | `8px` | Botones secundarios, Tooltips |
| `--korsen-radius-button` | `12px` | Botones principales |
| `--korsen-radius-input` | `14px` | Campos de formulario / Inputs |
| `--korsen-radius-card` | `18px` | Tarjetas informativas principales |
| `--korsen-radius-dialog` | `24px` | Modales y diálogos de alerta |
| `--korsen-radius-full` | `999px` | Badges, Chips de estado, Avatares |

---

## ✍️ 3. Fuentes e Importación de Tipografías

Korsen utiliza tipografías técnicas de alta legibilidad de Google Fonts. Añade el siguiente bloque de importación al inicio de tu CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&family=Space+Grotesk:wght@500;600;700&display=swap');

body {
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: var(--korsen-bg-main);
  color: var(--korsen-text-primary);
  margin: 0;
  -webkit-font-smoothing: antialiased;
}

/* Tipografía de código y montos monetarios */
.monospace, .numeric-value {
  font-family: 'JetBrains Mono', monospace;
}
```

### Escala Tipográfica Estándar

*   **Títulos de Display**: `font-weight: 700`, `letter-spacing: -0.02em` (Ej: `h1`, títulos de sección grandes).
*   **Cuerpo General**: `font-weight: 500`, `line-height: 1.45`.
*   **Etiquetas / Mini-Chips**: `font-weight: 600`, `text-transform: uppercase`, `letter-spacing: 0.05em`.

---

## 🛡️ 4. Patrones de Diseño Únicos (CSS Vanilla)

### A. La Grilla Tecnológica (`_TechnicalGrid`)
Este fondo punteado/cuadriculado verde sutil se utiliza para reforzar el carácter industrial y tecnológico de la aplicación:

```css
.technical-grid {
  position: relative;
  background-size: 32px 32px;
  background-image: 
    linear-gradient(to right, rgba(198, 253, 14, 0.035) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(198, 253, 14, 0.035) 1px, transparent 1px);
}
```

### B. Esquinas Korsen (Brackets Técnicos de Bordes)
Para recrear los corchetes verdes (`_Corner`) colocados en las esquinas de los contenedores principales:

```html
<div class="korsen-container">
  <div class="corner-bracket top-left"></div>
  <div class="corner-bracket top-right"></div>
  <div class="corner-bracket bottom-left"></div>
  <div class="corner-bracket bottom-right"></div>
  <!-- Contenido aquí -->
</div>
```

```css
.korsen-container {
  position: relative;
  border: 1px solid rgba(198, 253, 14, 0.45);
  background: linear-gradient(135deg, rgba(20, 20, 20, 0.55) 0%, rgba(10, 10, 10, 0.70) 100%);
  border-radius: var(--korsen-radius-card);
  padding: 24px;
}

.corner-bracket {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 3px solid var(--korsen-primary);
  pointer-events: none;
}

.top-left { top: 12px; left: 12px; border-right: none; border-bottom: none; }
.top-right { top: 12px; right: 12px; border-left: none; border-bottom: none; }
.bottom-left { bottom: 12px; left: 12px; border-right: none; border-top: none; }
.bottom-right { bottom: 12px; right: 12px; border-left: none; border-top: none; }
```

### C. Botón Estilo Korsen
```css
.korsen-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(180deg, var(--korsen-primary-light) 0%, var(--korsen-primary) 100%);
  color: var(--korsen-bg-main);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  border: none;
  border-radius: var(--korsen-radius-button);
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(198, 253, 14, 0.15);
}

.korsen-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(198, 253, 14, 0.30);
  background: var(--korsen-primary-light);
}

.korsen-btn:active {
  transform: translateY(0);
  background: var(--korsen-primary-dark);
}
```

---

## ⚡ 5. Configuración para Tailwind CSS (Opcional)

Si utilizas Tailwind CSS en tu desarrollo web, puedes mapear estas propiedades dentro de tu archivo `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        korsen: {
          primary: '#c6fd0e',
          'primary-dark': '#b3eb00',
          'primary-light': '#d4ff42',
          bg: '#050505',
          'bg-secondary': '#101010',
          'bg-tertiary': '#151515',
          surface: '#0a0a0a',
          'surface-light': '#151515',
          border: '#1f1f1f',
          success: '#46e45f',
          warning: '#ffd60a',
          danger: '#ff4d4d',
          info: '#4da3ff',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'korsen-button': '12px',
        'korsen-input': '14px',
        'korsen-card': '18px',
        'korsen-dialog': '24px',
      }
    },
  },
  plugins: [],
}
```
