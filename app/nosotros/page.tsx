import { PageWrapper } from "@/components/page-wrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code2, HeartHandshake, ShieldCheck } from "lucide-react"

export const metadata = {
  title: "Quiénes Somos | nosotros | korsen.dev",
  description: "Conoce a Korsen. Somos un software studio premium enfocado en construir sistemas digitales robustos, automatizaciones con IA e infraestructura en la nube.",
}

const values = [
  {
    icon: Code2,
    title: "Precisión Técnica",
    desc: "Escribimos código limpio, desacoplado y documentado. Creemos en la ingeniería real de sistemas, no en parches de software temporales.",
  },
  {
    icon: HeartHandshake,
    title: "Transparencia Absoluta",
    desc: "Nos alineamos a tus plazos, costos y riesgos técnicos. Comunicamos con total honestidad la viabilidad de la arquitectura desde el día cero.",
  },
  {
    icon: ShieldCheck,
    title: "Enfoque de Negocio",
    desc: "Desarrollamos tecnología orientada a objetivos comerciales reales: automatizar flujos manuales, escalar operaciones y generar más valor.",
  },
]

export default function AboutPage() {
  return (
    <PageWrapper showBgEffects={false}>
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-left">
          <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
            // brand_philosophy
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F7F7] uppercase tracking-tighter leading-none mb-6">
            ENGINEERING, NO OUTSOURCING.
          </h1>
          <p className="text-md sm:text-lg text-[#A6A6A6] leading-relaxed font-sans font-medium">
            No somos una agencia digital genérica ni un proveedor temporal de programadores. Somos un software studio de alta fidelidad dedicado a diseñar y construir sistemas estables de producción.
          </p>
        </div>
      </section>

      {/* Philosophy Details */}
      <section className="relative py-20 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
            
            <div className="text-left space-y-6">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground">// ¿Por qué Korsen?</h2>
              <p className="text-sm text-[#A6A6A6] leading-relaxed font-sans font-medium">
                Korsen nació con el propósito de elevar los estándares técnicos del desarrollo de software empresarial. Entendemos que las plataformas de software de alto impacto requieren algo más que maquetación visual rápida: requieren solidez estructural en bases de datos, seguridad, integración de sistemas y escalabilidad de servidores en la nube.
              </p>
              <p className="text-sm text-[#A6A6A6] leading-relaxed font-sans font-medium">
                Diseñamos cada solución con un fuerte enfoque en el retorno de la inversión: si no automatiza procesos redundantes, si no escala operaciones o si no abre nuevos canales transaccionales reales, no lo construimos.
              </p>
            </div>

            <div className="group p-8 border border-white/5 bg-[#0B0B0B] rounded-3xl relative text-left">
              <div className="corner-bracket top-left opacity-35" />
              <div className="corner-bracket top-right opacity-35" />
              <div className="corner-bracket bottom-left opacity-35" />
              <div className="corner-bracket bottom-right opacity-35" />
              
              <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-3">// core_identity</span>
              <h3 className="text-xl font-bold text-foreground mb-4">DISEÑAMOS SISTEMAS LISTOS PARA ESCALAR</h3>
              <p className="text-xs text-[#A6A6A6] leading-relaxed font-sans font-medium">
                Nuestras plataformas operan con latencias mínimas, integraciones lógicas seguras y arquitecturas en la nube optimizadas para soportar alta carga operacional de consultas sin elevar costos excesivos de servidor.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="relative py-20 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-left mb-16">
            <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-2">// operational_standards</span>
            <h2 className="text-3xl font-extrabold uppercase text-[#F7F7F7]">Nuestros Valores</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon
              return (
                <div
                  key={idx}
                  className="group p-6 border border-white/5 bg-[#0B0B0B] hover:border-primary/20 transition-all duration-300 rounded-2xl relative text-left"
                >
                  <div className="corner-bracket top-left opacity-35 group-hover:opacity-100 transition-opacity" />
                  <div className="corner-bracket top-right opacity-35 group-hover:opacity-100 transition-opacity" />
                  <div className="corner-bracket bottom-left opacity-35 group-hover:opacity-100 transition-opacity" />
                  <div className="corner-bracket bottom-right opacity-35 group-hover:opacity-100 transition-opacity" />

                  <div className="w-10 h-10 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-primary stroke-[1.5]" />
                  </div>

                  <h3 className="text-sm font-bold text-foreground uppercase mb-3 tracking-wide">{v.title}</h3>
                  <p className="text-xs text-[#A6A6A6] leading-relaxed font-sans font-medium">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
            // start_consultation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter uppercase text-[#F7F7F7] mb-4">
            ¿Quieres diseñar tu solución con nosotros?
          </h2>
          <p className="text-md text-[#A6A6A6] leading-relaxed font-sans font-medium mb-8">
            Agendemos una breve sesión de descubrimiento para analizar tu problema de negocio y evaluar la viabilidad de la arquitectura.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary-light text-black font-bold font-sans rounded-xl px-8 py-3 shadow-[0_4px_12px_rgba(196,255,0,0.15)] hover:shadow-[0_6px_24px_rgba(196,255,0,0.3)] transition-all duration-300"
          >
            <Link href="/#contacto">
              Comenzar Evaluación
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  )
}
