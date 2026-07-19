import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cpu, ArrowRight } from "lucide-react"
import { getAllCotizarTopics } from "@/lib/cotizar-topics"
import { pathTecnologiaLanding } from "@/lib/site-paths"

export function Technologies() {
  const { tecnologias } = getAllCotizarTopics()

  return (
    <section id="tecnologias" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Grid Backdrop */}
      <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-left mb-24 max-w-4xl">
          <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
            // stack_matrix
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter uppercase leading-none text-[#F7F7F7]">
            TECNOLOGÍAS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tecnologias.map((t) => (
            <div
              key={t.slug}
              id={`tech-${t.slug}`}
              className="scroll-mt-28 border border-white/5 bg-[#0B0B0B] hover:border-primary/30 transition-all duration-300 group flex flex-col p-6 rounded-3xl relative text-left"
            >
              <div className="corner-bracket top-left opacity-30 group-hover:opacity-100 transition-opacity" />
              <div className="corner-bracket top-right opacity-30 group-hover:opacity-100 transition-opacity" />
              <div className="corner-bracket bottom-left opacity-30 group-hover:opacity-100 transition-opacity" />
              <div className="corner-bracket bottom-right opacity-30 group-hover:opacity-100 transition-opacity" />

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Cpu className="w-5 h-5 text-primary stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F7F7F7] uppercase mb-2 group-hover:text-primary transition-colors">{t.title}</h3>
                  <p className="text-sm text-[#A6A6A6] leading-relaxed text-pretty mb-8 font-sans font-medium">
                    Cotización y equipos especializados en {t.title}.
                  </p>
                </div>

                <Button variant="outline" size="sm" className="w-full rounded-full border border-primary/25 bg-[#050505]/40 text-foreground/90 hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground hover:border-primary dark:hover:border-primary hover:shadow-[0_0_15px_rgba(196,255,0,0.25)] font-mono text-xs uppercase tracking-wider gap-2 transition-all duration-300" asChild>
                  <Link href={pathTecnologiaLanding(t.slug)}>
                    Ver landing y cotizar
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
