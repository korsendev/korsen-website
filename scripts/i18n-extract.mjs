// Extrae los textos visibles (HTML renderizado) de todas las rutas del sitemap y lista los que
// aún no tienen traducción en lib/i18n/en.json. Uso: node scripts/i18n-extract.mjs [baseUrl]
import { readFileSync, existsSync, writeFileSync } from "node:fs"

const base = process.argv[2] || "http://localhost:3111"
const dictPath = new URL("../lib/i18n/en.json", import.meta.url)
const dict = existsSync(dictPath) ? JSON.parse(readFileSync(dictPath, "utf8")) : {}

const decode = (s) =>
  s
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'").replace(/&#39;/g, "'").replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
const norm = (s) => s.replace(/\s+/g, " ").trim()

const sitemap = await (await fetch(base + "/sitemap.xml")).text()
const routes = [...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1].replace(/^https?:\/\/[^/]+/, "") || "/")
routes.push("/ruta-inexistente")

const found = new Map()
const add = (t, r) => {
  const k = norm(decode(t))
  if (!k || !/\p{L}/u.test(k)) return
  if (!found.has(k)) found.set(k, new Set())
  found.get(k).add(r)
}
for (const r of routes) {
  const html = await (await fetch(base + r)).text()
  const title = html.match(/<title>([^<]*)<\/title>/)
  if (title) add(title[1], r)
  const body = html.slice(html.indexOf("<body"))
  for (const m of body.matchAll(/\s(?:alt|aria-label|placeholder|title)="([^"]*)"/g)) add(m[1], r)
  const text = body
    .replace(/<script[\s\S]*?<\/script>/g, "<")
    .replace(/<style[\s\S]*?<\/style>/g, "<")
    .replace(/<svg[\s\S]*?<\/svg>/g, "<")
  for (const chunk of text.split(/<!--[\s\S]*?-->|<[^>]*>/)) add(chunk, r)
}
const missing = [...found.keys()].filter((k) => !(k in dict))
writeFileSync(new URL("./i18n-missing.json", import.meta.url), JSON.stringify(missing, null, 1))
console.log(`rutas: ${routes.length} · textos únicos: ${found.size} · sin traducir: ${missing.length}`)
