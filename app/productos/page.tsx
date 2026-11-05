import { PageWrapper } from "@/components/page-wrapper"
import { ProductCard } from "@/components/products"
import { products } from "@/lib/products-data"

export const metadata = {
  title: "Productos | korsen.dev",
  description: "Software propio de korsen.dev: plataformas listas para usar, operadas y mejoradas continuamente. Conoce BOSQRA, el sistema de gestión para aserraderos.",
}

export default function ProductosPage() {
  return (
    <PageWrapper showBgEffects={false}>
      <section className="relative pt-36 pb-16 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-left">
          <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">// products</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F7F7] uppercase tracking-tighter leading-none mb-6">Productos</h1>
          <p className="text-md sm:text-lg text-[#A6A6A6] max-w-2xl leading-relaxed font-medium">
            Software propio que diseñamos, operamos y mejoramos. Cada producto nace de un problema real del mercado dominicano y se ofrece por suscripción, con soporte directo del equipo que lo construyó.
          </p>
        </div>
      </section>

      <section className="relative pb-24 bg-[#050505] overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl grid gap-8">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
