import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"
import { Button } from "@/components/ui/button"
import { caseStudies, getCaseBySlug } from "@/lib/cases-data"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseBySlug(slug)
  if (!caseStudy) return { title: "Caso de Éxito — korsen.dev" }
  return {
    title: `${caseStudy.title} | Caso de Éxito | korsen.dev`,
    description: `Descubre cómo ayudamos a ${caseStudy.title} a resolver sus desafíos técnicos mediante software y soluciones a medida de alto rendimiento.`,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const caseStudy = getCaseBySlug(slug)
  
  if (!caseStudy) {
    notFound()
  }

  return (
    <PageWrapper showBgEffects={false}>
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-left">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-primary uppercase tracking-wider hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver a proyectos
            </Link>
          </div>
          
          <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold inline-block mb-4">
            {caseStudy.category}
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F7F7] uppercase tracking-tighter leading-none mb-6">
            {caseStudy.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {caseStudy.tags.map((t) => (
              <span
                key={t}
                className="text-[9px] font-mono text-[#A6A6A6] bg-[#0B0B0B] border border-white/5 px-2.5 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="text-lg text-[#A6A6A6] max-w-2xl leading-relaxed font-sans font-medium">
            {caseStudy.contexto}
          </p>
        </div>
      </section>

      {/* Case Details */}
      <section className="relative py-20 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            
            {/* Left Column: Challenge */}
            <div className="space-y-10 text-left">
              <div className="group p-6 border border-white/5 bg-[#0B0B0B] rounded-2xl relative">
                <div className="corner-bracket top-left opacity-35" />
                <div className="corner-bracket top-right opacity-35" />
                <div className="corner-bracket bottom-left opacity-35" />
                <div className="corner-bracket bottom-right opacity-35" />
                
                <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-4">// el desafío</h2>
                <h3 className="text-lg font-bold text-foreground mb-3">EL PROBLEMA</h3>
                <p className="text-sm text-[#A6A6A6] leading-relaxed font-sans font-medium">
                  {caseStudy.problema}
                </p>
              </div>

              <div className="group p-6 border border-white/5 bg-[#0B0B0B] rounded-2xl relative">
                <div className="corner-bracket top-left opacity-35" />
                <div className="corner-bracket top-right opacity-35" />
                <div className="corner-bracket bottom-left opacity-35" />
                <div className="corner-bracket bottom-right opacity-35" />
                
                <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-4">// meta del cliente</h2>
                <h3 className="text-lg font-bold text-foreground mb-3">EL OBJETIVO</h3>
                <p className="text-sm text-[#A6A6A6] leading-relaxed font-sans font-medium">
                  {caseStudy.objetivo}
                </p>
              </div>
            </div>

            {/* Right Column: Execution */}
            <div className="space-y-10 text-left">
              <div className="group p-6 border border-white/5 bg-[#0B0B0B] rounded-2xl relative">
                <div className="corner-bracket top-left opacity-35" />
                <div className="corner-bracket top-right opacity-35" />
                <div className="corner-bracket bottom-left opacity-35" />
                <div className="corner-bracket bottom-right opacity-35" />
                
                <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-4">// la entrega</h2>
                <h3 className="text-lg font-bold text-foreground mb-3">LA SOLUCIÓN</h3>
                <p className="text-sm text-[#A6A6A6] leading-relaxed font-sans font-medium">
                  {caseStudy.solucion}
                </p>
              </div>

              <div className="group p-6 border border-white/5 bg-[#0B0B0B] rounded-2xl relative">
                <div className="corner-bracket top-left opacity-35" />
                <div className="corner-bracket top-right opacity-35" />
                <div className="corner-bracket bottom-left opacity-35" />
                <div className="corner-bracket bottom-right opacity-35" />
                
                <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-4">// impacto comercial</h2>
                <h3 className="text-lg font-bold text-foreground mb-3">EL RESULTADO</h3>
                <p className="text-sm text-foreground font-bold leading-relaxed">
                  {caseStudy.resultado}
                </p>
              </div>
            </div>

          </div>

          {/* Core Features */}
          <div className="mt-16 group p-8 border border-white/5 bg-[#0B0B0B] rounded-3xl relative text-left">
            <div className="corner-bracket top-left opacity-35" />
            <div className="corner-bracket top-right opacity-35" />
            <div className="corner-bracket bottom-left opacity-35" />
            <div className="corner-bracket bottom-right opacity-35" />
            
            <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-6">// alcance implementado</h2>
            <h3 className="text-xl font-bold text-foreground mb-6">Funcionalidades Clave desarrolladas</h3>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.funcionalidades.map((func, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 stroke-[1.5]" />
                  <span className="text-sm text-[#A6A6A6] leading-snug font-sans font-medium">{func}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
            // similar_needs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter uppercase text-[#F7F7F7] mb-4">
            ¿Tienes un proyecto similar?
          </h2>
          <p className="text-md text-[#A6A6A6] leading-relaxed font-sans font-medium mb-8">
            Cuéntanos qué quieres construir y evaluemos juntos la mejor solución tecnológica para tu negocio.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary-light text-black font-bold font-sans rounded-xl px-8 py-3 shadow-[0_4px_12px_rgba(196,255,0,0.15)] hover:shadow-[0_6px_24px_rgba(196,255,0,0.3)] transition-all duration-300"
          >
            <Link href="/#contacto">
              Hablar con un especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  )
}
