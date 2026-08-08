"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, BrainCircuit, Cloud } from "lucide-react"

const pillars = [
  {
    id: "01",
    label: "DEV",
    title: "DESARROLLO & PLATAFORMAS",
    desc: "Diseñamos y construimos productos digitales y plataformas web robustas a la medida exacta de tu negocio.",
    icon: Code2,
    links: [
      { name: "Desarrollo de software a medida", slug: "desarrollo-software-a-medida" },
      { name: "Plataformas web escalables", slug: "plataformas-web" },
      { name: "Aplicaciones móviles iOS/Android", slug: "apps-moviles" },
      { name: "Integración de e-commerce y pagos", slug: "integracion-ecommerce" },
    ],
  },
  {
    id: "02",
    label: "AI",
    title: "INTELIGENCIA & AUTOMATIZACIÓN",
    desc: "Optimizamos tu operación e integramos inteligencia artificial para automatizar procesos y decisiones.",
    icon: BrainCircuit,
    links: [
      { name: "Automatización de procesos", slug: "automatizacion-procesos" },
      { name: "IA y Machine Learning", slug: "big-data-ml" },
      { name: "Integraciones y APIs", slug: "integraciones-apis" },
      { name: "Analytics y Business Intelligence", slug: "data-analytics" },
    ],
  },
  {
    id: "03",
    label: "OPS",
    title: "INFRAESTRUCTURA & MODERNIZACIÓN",
    desc: "Diseñamos arquitecturas en la nube preparadas para crecer sin fallas de rendimiento en producción.",
    icon: Cloud,
    links: [
      { name: "Arquitectura y diseño de sistemas", slug: "arquitectura-software" },
      { name: "Infraestructura y DevOps en la nube", slug: "cloud-infrastructure" },
      { name: "Modernización de sistemas legacy", slug: "modernizacion-legado" },
      { name: "Ciberseguridad y compliance", slug: "ciberseguridad-compliance" },
    ],
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Grid Backdrop */}
      <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-left mb-20 max-w-4xl">
          <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
            // core_capabilities
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter uppercase leading-none text-[#F7F7F7] mb-6">
            NUESTRAS CAPACIDADES
          </h2>
          <p className="text-md text-[#A6A6A6] max-w-2xl leading-relaxed font-sans font-medium">
            No hacemos 27 cosas genéricas. Nos enfocamos en construir software, automatizar procesos con IA y diseñar infraestructuras robustas que resuelvan problemas reales de negocio.
          </p>
        </div>

        {/* 3-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.id}
                className="group flex flex-col justify-between p-8 border border-white/5 bg-[#0B0B0B] hover:border-primary/20 transition-all duration-300 rounded-3xl relative text-left"
              >
                <div className="corner-bracket top-left opacity-35 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket top-right opacity-35 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket bottom-left opacity-35 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket bottom-right opacity-35 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary stroke-[1.5]" />
                    </div>
                    <span className="text-[10px] font-mono text-[#A6A6A6] tracking-widest">
                      {pillar.id} / {pillar.label}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#F7F7F7] uppercase mb-4">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#A6A6A6] leading-relaxed mb-8 font-sans font-medium">
                    {pillar.desc}
                  </p>

                  <ul className="space-y-3.5 border-t border-white/5 pt-6">
                    {pillar.links.map((link) => (
                      <li key={link.slug}>
                        <Link
                          href={`/soluciones/${link.slug}`}
                          className="group/link text-xs text-[#A6A6A6] hover:text-primary transition-all flex items-center gap-1.5 leading-snug font-sans font-medium"
                        >
                          <span className="opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all text-primary font-bold">›</span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border border-primary/25 bg-[#050505]/40 text-foreground/90 hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground hover:border-primary dark:hover:border-primary hover:shadow-[0_0_15px_rgba(196,255,0,0.3)] font-mono text-xs uppercase tracking-wider gap-2 transition-all duration-300"
            asChild
          >
            <Link href="/soluciones-y-tecnologias">
              Explorar todas las soluciones
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
