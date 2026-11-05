import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { PageWrapper } from "@/components/page-wrapper"
import { getProduct, products } from "@/lib/products-data"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const p = getProduct((await params).slug)
  if (!p) return {}
  return { title: `${p.name} — ${p.tagline} | korsen.dev`, description: p.summary }
}

export default async function ProductPage({ params }: Props) {
  const p = getProduct((await params).slug)
  if (!p) notFound()

  return (
    <PageWrapper showBgEffects={false}>
      <section className="relative pt-36 pb-16 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-left">
          <Link href="/productos" className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A6A6A6] hover:text-primary uppercase tracking-wider mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Todos los productos
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold">{p.category}</span>
            <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold">{p.status}</span>
          </div>
          <div className="relative h-11 w-52 mb-6">
            <Image src={p.logo} alt={p.name} fill sizes="208px" className="object-contain object-left" priority />
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F7F7] tracking-tighter leading-none mb-6">{p.tagline}</h1>
          <p className="text-md sm:text-lg text-[#A6A6A6] max-w-2xl leading-relaxed font-medium">{p.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={p.url} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-light transition-colors">
              Visitar {p.name} <ArrowUpRight className="w-4 h-4" />
            </a>
            {p.appUrl ? (
              <a href={p.appUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border border-primary/35 px-6 py-3 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                Ingresar a la plataforma
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="relative pb-24 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pt-16 grid lg:grid-cols-[1.1fr_1fr] gap-12 text-left">
          <div>
            <h2 className="text-xs font-mono text-primary tracking-widest uppercase mb-4">// about</h2>
            <p className="text-[#A6A6A6] leading-relaxed font-medium">{p.description}</p>
            <h2 className="text-xs font-mono text-primary tracking-widest uppercase mt-10 mb-4">// para quién</h2>
            <p className="text-[#F7F7F7] font-medium leading-relaxed">{p.audience}</p>
            <h2 className="text-xs font-mono text-primary tracking-widest uppercase mt-10 mb-4">// stack</h2>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="text-[10px] font-mono text-[#A6A6A6] bg-[#0B0B0B] border border-white/5 px-2.5 py-1 rounded">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xs font-mono text-primary tracking-widest uppercase mb-4">// funciones</h2>
            <ul className="space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 border border-white/5 bg-[#0B0B0B] rounded-2xl p-4 text-sm text-[#A6A6A6]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
