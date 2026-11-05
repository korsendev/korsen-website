import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { products, type Product } from "@/lib/products-data"

const statusStyle: Record<Product["status"], string> = {
  "En producción": "text-primary bg-primary/10 border-primary/25",
  Beta: "text-amber-300 bg-amber-300/10 border-amber-300/25",
  Próximamente: "text-[#A6A6A6] bg-white/5 border-white/10",
}

export function ProductCard({ product: p }: { product: Product }) {
  return (
    <article className="group relative grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-white/5 bg-[#0B0B0B] hover:border-primary/25 transition-all duration-500 text-left">
      <div className="corner-bracket top-left opacity-30 group-hover:opacity-100 transition-opacity" />
      <div className="corner-bracket top-right opacity-30 group-hover:opacity-100 transition-opacity" />
      <div className="corner-bracket bottom-left opacity-30 group-hover:opacity-100 transition-opacity" />
      <div className="corner-bracket bottom-right opacity-30 group-hover:opacity-100 transition-opacity" />

      <div className="p-8 sm:p-10 flex flex-col justify-between gap-8 order-2 lg:order-1">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full border text-primary bg-primary/10 border-primary/20">{p.category}</span>
            <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full border ${statusStyle[p.status]}`}>{p.status}</span>
          </div>

          <div className="relative h-9 w-44 mb-5">
            <Image src={p.logo} alt={p.name} fill sizes="176px" className="object-contain object-left" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F7F7F7] tracking-tight leading-tight mb-3">{p.tagline}</h3>
          <p className="text-sm sm:text-base text-[#A6A6A6] leading-relaxed font-medium">{p.summary}</p>

          <ul className="mt-6 space-y-2">
            {p.features.slice(0, 4).map((f) => (
              <li key={f} className="flex gap-2.5 text-xs sm:text-sm text-[#A6A6A6]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span key={t} className="text-[9px] font-mono text-[#737373] bg-[#050505] border border-white/5 px-2 py-0.5 rounded">{t}</span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link href={`/productos/${p.slug}`} className="inline-flex items-center gap-1 text-xs font-mono text-[#F7F7F7] hover:text-primary uppercase tracking-wider transition-colors">
              Detalles <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={p.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-xs font-mono text-primary uppercase tracking-wider hover:gap-2 transition-all">
              Visitar sitio <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <a href={p.url} target="_blank" rel="noopener" aria-label={`Visitar ${p.name}`} className="relative min-h-[240px] lg:min-h-full order-1 lg:order-2 overflow-hidden bg-[#050505] border-b lg:border-b-0 lg:border-l border-white/5">
        <Image src={p.image} alt={`Vista de ${p.name}`} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-contain object-center p-2 transition-transform duration-700 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 via-transparent to-transparent pointer-events-none" />
      </a>
    </article>
  )
}

/** Sección de la página principal. */
export function Products() {
  return (
    <section id="productos" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-12 text-left">
          <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">// our_products</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F7F7F7] uppercase tracking-tighter leading-none mb-5">Productos korsen.dev</h2>
          <p className="text-md sm:text-lg text-[#A6A6A6] max-w-2xl leading-relaxed font-medium">
            Además de construir software a medida, diseñamos y operamos nuestros propios productos: plataformas listas para usar, con soporte y mejoras continuas.
          </p>
        </div>

        <div className="grid gap-8">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="mt-10 text-left">
          <Link href="/productos" className="inline-flex items-center gap-1 text-xs font-mono text-primary uppercase tracking-wider hover:gap-2 transition-all">
            Ver todos los productos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
