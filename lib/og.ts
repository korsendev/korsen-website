import { readFile } from "node:fs/promises"
import path from "node:path"

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = "image/png"

/**
 * Sirve la imagen Open Graph pre-generada de `public/og/<section>/<slug>.png`.
 * Las páginas estáticas usan `opengraph-image.png` en su carpeta; las de [slug] pasan por aquí
 * para que cada entrada tenga su propia imagen sin renderizar nada en tiempo de ejecución.
 */
export async function ogFromFile(section: string, slug: string) {
  const file = path.join(process.cwd(), "public/og", section, `${path.basename(slug)}.png`)
  const data = await readFile(file).catch(() => readFile(path.join(process.cwd(), "app/opengraph-image.png")))
  return new Response(new Uint8Array(data), {
    headers: { "Content-Type": OG_CONTENT_TYPE, "Cache-Control": "public, max-age=31536000, immutable" },
  })
}
