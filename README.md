# MAYNODE — maynode.dev

Sitio web corporativo de MAYNODE (Next.js 16 + Tailwind v4). Lanzamiento: 24 de noviembre de 2026.

## Desarrollo
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
```

## Estructura
- `app/`: rutas (`/`, `/soluciones`, `/servicios`, `/proyectos`, `/productos`, `/como-trabajamos`, `/nosotros`, `/diagnostico`, `/contacto`, `/blog`, `/tecnologias/[slug]`).
- `components/`: secciones y `components/ui/` (primitivos del sistema de diseño).
- `lib/content/*.ts`: textos, uno por sección o página. `lib/projects-data.ts`: proyectos.
- `docs/maynode/`: sistema de diseño, tokens y copy (fuente de verdad).
- `public/brand/`: logos, isotipo, foto del CEO y mapas.

Los videos de marca no se versionan (`*.mp4` en `.gitignore`).
