"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Cloud, Brain } from "lucide-react"
import { pathSolucionLanding } from "@/lib/site-paths"

export function Services() {
  return (
    <section id="servicios" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Subtle Grid */}
      <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visual Title */}
        <div className="text-left mb-24 max-w-4xl">
          <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
            // core_capabilities
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter uppercase leading-none text-[#F7F7F7]">
            SERVICIOS
          </h2>
        </div>

        {/* Visual-First Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {/* Service 1: Desarrollo a medida */}
          <div className="group flex flex-col justify-between min-h-[420px] p-8 border border-white/5 bg-[#0B0B0B] hover:border-primary/30 transition-all duration-500 rounded-3xl relative">
            <div className="corner-bracket top-left opacity-30 group-hover:opacity-100 transition-opacity" />
            <div className="corner-bracket top-right opacity-30 group-hover:opacity-100 transition-opacity" />
            <div className="corner-bracket bottom-left opacity-30 group-hover:opacity-100 transition-opacity" />
            <div className="corner-bracket bottom-right opacity-30 group-hover:opacity-100 transition-opacity" />
            
            <div>
              <div className="flex justify-between items-start mb-12">
                <Code className="w-16 h-16 text-primary stroke-[1.25]" />
                <span className="text-[11px] font-mono text-[#A6A6A6] tracking-widest">01 / DEV</span>
              </div>
              <span className="text-xs font-mono text-[#A6A6A6] tracking-widest uppercase block mb-4">
                Desarrollo a medida
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F7F7] leading-tight text-balance">
                Creamos software<br/>que hace crecer<br/>tu negocio.
              </h3>
            </div>
            
            <div className="mt-8">
              <Button variant="outline" size="sm" className="w-full rounded-full border border-primary/25 bg-[#050505]/40 text-foreground/90 hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground hover:border-primary dark:hover:border-primary hover:shadow-[0_0_15px_rgba(196,255,0,0.3)] font-mono text-xs uppercase tracking-wider gap-2 transition-all duration-300" asChild>
                <Link href={pathSolucionLanding("desarrollo-software-a-medida")}>
                  Ver landing y cotizar
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Service 2: Cloud + DevOps */}
          <div className="group flex flex-col justify-between min-h-[420px] p-8 border border-white/5 bg-[#0B0B0B] hover:border-primary/30 transition-all duration-500 rounded-3xl relative">
            <div className="corner-bracket top-left opacity-30 group-hover:opacity-100 transition-opacity" />
            <div className="corner-bracket top-right opacity-30 group-hover:opacity-100 transition-opacity" />
            <div className="corner-bracket bottom-left opacity-30 group-hover:opacity-100 transition-opacity" />
            <div className="corner-bracket bottom-right opacity-30 group-hover:opacity-100 transition-opacity" />
            
            <div>
              <div className="flex justify-between items-start mb-12">
                <Cloud className="w-16 h-16 text-primary stroke-[1.25]" />
                <span className="text-[11px] font-mono text-[#A6A6A6] tracking-widest">02 / OPS</span>
              </div>
              <span className="text-xs font-mono text-[#A6A6A6] tracking-widest uppercase block mb-4">
                Cloud + DevOps
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F7F7] leading-tight text-balance">
                Infraestructura elástica<br/>de alta disponibilidad.
              </h3>
            </div>
            
            <div className="mt-8">
              <Button variant="outline" size="sm" className="w-full rounded-full border border-primary/25 bg-[#050505]/40 text-foreground/90 hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground hover:border-primary dark:hover:border-primary hover:shadow-[0_0_15px_rgba(196,255,0,0.3)] font-mono text-xs uppercase tracking-wider gap-2 transition-all duration-300" asChild>
                <Link href={pathSolucionLanding("cloud-infrastructure")}>
                  Ver landing y cotizar
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Service 3: Inteligencia Artificial */}
          <div className="group flex flex-col justify-between min-h-[420px] p-8 border border-white/5 bg-[#0B0B0B] hover:border-primary/30 transition-all duration-500 rounded-3xl relative">
            <div className="corner-bracket top-left opacity-30 group-hover:opacity-100 transition-opacity" />
            <div className="corner-bracket top-right opacity-30 group-hover:opacity-100 transition-opacity" />
            <div className="corner-bracket bottom-left opacity-30 group-hover:opacity-100 transition-opacity" />
            <div className="corner-bracket bottom-right opacity-30 group-hover:opacity-100 transition-opacity" />
            
            <div>
              <div className="flex justify-between items-start mb-12">
                <Brain className="w-16 h-16 text-primary stroke-[1.25]" />
                <span className="text-[11px] font-mono text-[#A6A6A6] tracking-widest">03 / AI</span>
              </div>
              <span className="text-xs font-mono text-[#A6A6A6] tracking-widest uppercase block mb-4">
                Inteligencia Artificial
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F7F7] leading-tight text-balance">
                Automatizamos procesos<br/>con modelos cognitivos.
              </h3>
            </div>
            
            <div className="mt-8">
              <Button variant="outline" size="sm" className="w-full rounded-full border border-primary/25 bg-[#050505]/40 text-foreground/90 hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground hover:border-primary dark:hover:border-primary hover:shadow-[0_0_15px_rgba(196,255,0,0.3)] font-mono text-xs uppercase tracking-wider gap-2 transition-all duration-300" asChild>
                <Link href={pathSolucionLanding("automatizacion-procesos")}>
                  Ver landing y cotizar
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
