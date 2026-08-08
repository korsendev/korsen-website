import { PageWrapper } from "@/components/page-wrapper"
import { caseStudies } from "@/lib/cases-data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Proyectos y Casos de Éxito | korsen.dev",
  description: "Explora los sistemas de software, plataformas y soluciones a medida que hemos construido y desplegado con éxito en producción.",
}

export default function ProjectsPage() {
  return (
    <PageWrapper showBgEffects={false}>
      {/* Header Section */}
      <section className="relative pt-36 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-left">
          <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
            // verified_work
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F7F7] uppercase tracking-tighter leading-none mb-6">
            Proyectos & Casos
          </h1>
          <p className="text-md sm:text-lg text-[#A6A6A6] max-w-2xl leading-relaxed font-sans font-medium">
            No inventamos métricas ni compramos testimonios. Diseñamos, construimos y escalamos plataformas que están operando actualmente en producción sin fallos.
          </p>
        </div>
      </section>

      {/* Grid of Projects */}
      <section className="relative py-16 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((proj) => (
              <div
                key={proj.slug}
                className="group flex flex-col justify-between p-8 border border-white/5 bg-[#0B0B0B] hover:border-primary/20 transition-all duration-500 rounded-3xl relative text-left"
              >
                <div className="corner-bracket top-left opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket top-right opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket bottom-left opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket bottom-right opacity-30 group-hover:opacity-100 transition-opacity" />
                
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold">
                      {proj.category}
                    </span>
                    <span className="text-xs font-mono text-[#737373]">/ {proj.title.toLowerCase()}</span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-[#F7F7F7] uppercase tracking-tight mb-6">
                    {proj.title}
                  </h2>

                  {/* Problema -> Solucion -> Resultado block */}
                  <div className="space-y-4 font-sans text-xs">
                    <div className="border-l-2 border-red-500/30 pl-3">
                      <span className="block font-mono text-[9px] text-[#737373] uppercase tracking-wider mb-0.5">Problema</span>
                      <p className="text-[#A6A6A6] font-medium leading-relaxed">{proj.problema}</p>
                    </div>

                    <div className="border-l-2 border-primary/30 pl-3">
                      <span className="block font-mono text-[9px] text-[#737373] uppercase tracking-wider mb-0.5">Solución</span>
                      <p className="text-[#A6A6A6] font-medium leading-relaxed">{proj.solucion}</p>
                    </div>

                    <div className="border-l-2 border-emerald-500/30 pl-3">
                      <span className="block font-mono text-[9px] text-[#737373] uppercase tracking-wider mb-0.5">Resultado</span>
                      <p className="text-[#F7F7F7] font-semibold leading-relaxed">{proj.resultado}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((t) => (
                      <span key={t} className="text-[9px] font-mono text-[#737373] bg-[#050505] border border-white/5 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/casos/${proj.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-mono text-primary uppercase tracking-wider group-hover:gap-2 transition-all"
                  >
                    Ver caso completo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
