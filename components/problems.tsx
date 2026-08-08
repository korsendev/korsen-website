"use client"

import Link from "next/link"
import { ArrowRight, Settings, TrendingUp, Link2, Monitor, Brain, Lightbulb } from "lucide-react"

const problems = [
  {
    num: "01",
    label: "MANUAL",
    title: "Procesos manuales",
    desc: "Tu equipo pierde tiempo en tareas repetitivas y propensas a errores que podrían estar 100% automatizadas.",
    icon: Settings,
    link: "/soluciones/automatizacion-procesos",
  },
  {
    num: "02",
    label: "SCALE",
    title: "Sistemas que no escalan",
    desc: "Tu tecnología funcionaba bien al inicio, pero ahora limita la velocidad de operación y el crecimiento de tu negocio.",
    icon: TrendingUp,
    link: "/soluciones/arquitectura-software",
  },
  {
    num: "03",
    label: "SILOS",
    title: "Herramientas desconectadas",
    desc: "Tu información clave está repartida en múltiples plataformas que no se comunican entre sí de forma fluida.",
    icon: Link2,
    link: "/soluciones/integraciones-apis",
  },
  {
    num: "04",
    label: "OWNERSHIP",
    title: "Necesitas una plataforma propia",
    desc: "Tu negocio requiere un software diseñado exactamente a la medida de tu operación y lógica interna.",
    icon: Monitor,
    link: "/soluciones/desarrollo-software-a-medida",
  },
  {
    num: "05",
    label: "COGNITIVE",
    title: "Quieres incorporar IA",
    desc: "Buscas optimizar decisiones, clasificar información o automatizar flujos utilizando inteligencia artificial integrada.",
    icon: Brain,
    link: "/tecnologias/ia-ml",
  },
  {
    num: "06",
    label: "VISION",
    title: "Tienes una idea de producto",
    desc: "Tienes una idea de producto digital o nuevo negocio, pero necesitas el equipo técnico que la haga realidad.",
    icon: Lightbulb,
    link: "#contacto",
  },
]

export function Problems() {
  return (
    <section id="problemas" className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Grid Backdrop */}
      <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-left mb-20 max-w-4xl">
          <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
            // business_diagnosis
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter uppercase leading-none text-[#F7F7F7] mb-6">
            ¿QUÉ ESTÁ FRENANDO TU NEGOCIO?
          </h2>
          <p className="text-md text-[#A6A6A6] max-w-2xl leading-relaxed font-sans font-medium">
            No todos los problemas tecnológicos necesitan la misma solución. Primero entendemos el problema real. Después diseñamos la tecnología que realmente necesitas.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob) => {
            const Icon = prob.icon
            return (
              <div
                key={prob.num}
                className="group flex flex-col justify-between min-h-[320px] p-8 border border-white/5 bg-[#0B0B0B] hover:border-primary/30 transition-all duration-500 rounded-3xl relative text-left"
              >
                <div className="corner-bracket top-left opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket top-right opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket bottom-left opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket bottom-right opacity-30 group-hover:opacity-100 transition-opacity" />
                
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary stroke-[1.5]" />
                    </div>
                    <span className="text-[11px] font-mono text-[#A6A6A6] tracking-widest">
                      {prob.num} / {prob.label}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#F7F7F7] uppercase mb-3">
                    {prob.title}
                  </h3>
                  
                  <p className="text-sm text-[#A6A6A6] leading-relaxed font-sans font-medium text-balance">
                    {prob.desc}
                  </p>
                </div>
                
                <div className="mt-8">
                  <Link
                    href={prob.link}
                    className="inline-flex items-center gap-1 text-xs font-mono text-primary uppercase tracking-wider group-hover:gap-2 transition-all"
                  >
                    Resolver este problema
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
