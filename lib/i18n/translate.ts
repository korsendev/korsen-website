/**
 * Traductor en el cliente (ES → EN) basado en diccionario (lib/i18n/en.json, claves = texto original).
 * Recorre los nodos de texto y los atributos visibles (alt, aria-label, placeholder, title) y los
 * sustituye; un MutationObserver traduce también lo que React pinta después (navegación, formularios).
 * El HTML del servidor sigue en español: buscadores y usuarios hispanohablantes no cargan nada extra.
 */

const ATTRS = ["alt", "aria-label", "placeholder", "title"] as const
const SKIP = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEMPLATE", "CODE", "PRE"])
const ATTR_SELECTOR = ATTRS.map((a) => `[${a}]`).join(",")

export function startTranslator(dict: Map<string, string>, root: HTMLElement = document.documentElement): () => void {
  /** Último valor escrito por nosotros en cada nodo, para no reprocesarlo. */
  const written = new WeakMap<Node, string>()

  const lookup = (raw: string): string | null => {
    const key = raw.replace(/\s+/g, " ").trim()
    if (!key) return null
    const t = dict.get(key)
    if (t === undefined) return null
    const lead = raw.match(/^\s*/)?.[0] ?? ""
    const trail = raw.length > lead.length ? (raw.match(/\s*$/)?.[0] ?? "") : ""
    return lead + t + trail
  }

  const text = (n: Node) => {
    const v = n.nodeValue
    if (!v || written.get(n) === v) return
    const t = lookup(v)
    if (t === null || t === v) return
    n.nodeValue = t
    written.set(n, t)
  }

  const attrs = (el: Element) => {
    for (const a of ATTRS) {
      const v = el.getAttribute(a)
      if (!v) continue
      const t = lookup(v)
      if (t !== null && t !== v) el.setAttribute(a, t)
    }
  }

  const tree = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      if (!SKIP.has((node.parentNode as Element | null)?.tagName ?? "")) text(node)
      return
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return
    const el = node as Element
    if (SKIP.has(el.tagName)) return
    if (el.matches(ATTR_SELECTOR)) attrs(el)
    el.querySelectorAll(ATTR_SELECTOR).forEach(attrs)
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (SKIP.has((n.parentNode as Element | null)?.tagName ?? "") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    })
    for (let n = walker.nextNode(); n; n = walker.nextNode()) text(n)
  }

  tree(root)

  const observer = new MutationObserver((records) => {
    for (const r of records) {
      if (r.type === "childList") r.addedNodes.forEach(tree)
      else if (r.type === "characterData") tree(r.target)
      else if (r.type === "attributes") attrs(r.target as Element)
    }
  })
  observer.observe(root, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: [...ATTRS] })
  return () => observer.disconnect()
}
