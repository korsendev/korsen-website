"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// WIDGET: High-fidelity terminal-style dashboard mockup
function SystemDashboardMockup() {
  const [requests, setRequests] = useState(14820)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRequests(r => r + Math.floor(Math.random() * 5) + 1)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-xl mx-auto border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_24px_rgba(196,255,0,0.02)] overflow-hidden relative group text-left">
      {/* Window Controls */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/50" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <span className="w-3 h-3 rounded-full bg-green-500/50" />
          <span className="text-[11px] font-mono text-[#a6a6a6] ml-3 uppercase tracking-wider">Korsen Analytics v2.8</span>
        </div>
        <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded uppercase tracking-widest font-bold animate-pulse">Running</span>
      </div>

      <div className="p-6 space-y-6">
        {/* Metric Cards inside Mockup */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2 sm:p-3.5 text-left relative">
            <span className="text-[9px] font-mono text-[#a6a6a6] uppercase tracking-wider block">Latency</span>
            <span className="text-sm sm:text-xl font-bold text-[#F7F7F7] block mt-1 font-mono">11ms</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2 sm:p-3.5 text-left relative">
            <span className="text-[9px] font-mono text-[#a6a6a6] uppercase tracking-wider block">Uptime</span>
            <span className="text-sm sm:text-xl font-bold text-primary block mt-1 font-mono">99.98%</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2 sm:p-3.5 text-left relative">
            <span className="text-[9px] font-mono text-[#a6a6a6] uppercase tracking-wider block">Requests</span>
            <span className="text-sm sm:text-xl font-bold text-[#F7F7F7] block mt-1 font-mono">{requests}</span>
          </div>
        </div>

        {/* Animated SVG Sparkline Chart */}
        <div className="bg-white/[0.01] border border-white/5 rounded-xl p-4 text-left">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono text-[#a6a6a6] uppercase tracking-wider">System load query feed</span>
            <span className="text-[10px] font-mono text-primary font-bold">120 QPS average</span>
          </div>
          <div className="h-32 w-full relative overflow-hidden flex items-end">
            {/* SVG Grid lines */}
            <div className="absolute inset-0 grid grid-rows-3 opacity-20">
              <div className="border-b border-white/5 w-full h-full" />
              <div className="border-b border-white/5 w-full h-full" />
              <div className="border-b border-white/5 w-full h-full" />
            </div>
            
            {/* SVG Chart path with pulse animation */}
            <svg className="w-full h-full text-primary" viewBox="0 0 100 30" preserveAspectRatio="none">
              <defs>
                <linearGradient id="glow-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--korsen-primary)" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="var(--korsen-primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Fill path */}
              <path d="M 0 30 L 10 20 L 20 25 L 30 10 L 40 15 L 50 5 L 60 12 L 70 8 L 80 18 L 90 4 L 100 2 L 100 30 Z" fill="url(#glow-grad)" />
              {/* Line path */}
              <path d="M 0 30 L 10 20 L 20 25 L 30 10 L 40 15 L 50 5 L 60 12 L 70 8 L 80 18 L 90 4 L 100 2" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Console Logger */}
        <div className="bg-[#050505] border border-white/5 rounded-xl p-4 text-left font-mono text-[10px] text-white/50 space-y-1 max-h-24 overflow-y-auto">
          <p className="text-primary">&gt; system.init() - Success</p>
          <p>&gt; load_balancer: redirecting traffic to node_us_east_2</p>
          <p>&gt; DB pool connection active (18ms pool load)</p>
          <p className="text-white/35">&gt; cron_service.dbBackup() complete [04:00 UTC]</p>
        </div>
      </div>
    </div>
  )
}

const projects = [
  {
    slug: "raapydo",
    title: "Raapydo",
    category: "Logística y Delivery",
    problema: "Comercios y clientes en República Dominicana carecían de un canal ágil y de costo optimizado para automatizar pedidos y entregas en tiempo real.",
    solucion: "Plataforma transaccional de alto rendimiento que unifica paneles de administración para comercios, interfaz móvil interactiva y despacho logístico.",
    resultado: "Centralización completa de pedidos y logística, eliminando tareas manuales y permitiendo la operación continua de entrega rápida.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "dorka-jimenez",
    title: "Dr. Dorka Jiménez",
    category: "Salud y MedTech",
    problema: "Falta de una presencia en línea sólida y optimizada que reflejara el prestigio clínico y facilitara la captación directa de pacientes.",
    solucion: "Sitio web premium corporativo enfocado en la conversión, velocidad de carga óptima y optimización de SEO para posicionamiento local.",
    resultado: "Establecimiento de un canal digital de captación de leads médicos calificados para tratamientos de ortodoncia avanzada.",
    tags: ["Next.js", "TypeScript", "CSS"],
  },
  {
    slug: "raelix-drive",
    title: "Raelix Drive",
    category: "Marketplace Transaccional",
    problema: "Informalidad y desconfianza en el alquiler local de bienes por falta de una pasarela de pago segura y calendarios unificados.",
    solucion: "Marketplace interactivo peer-to-peer con pasarela de pagos integrada, control de reservas en tiempo real y panel de autogestión de inventarios.",
    resultado: "Plataforma transaccional robusta que automatiza el proceso completo de reservas y cobros sin intermediarios manuales.",
    tags: ["Next.js", "TypeScript", "Stripe API"],
  },
  {
    slug: "the-vortex-capital",
    title: "The Vortex Capital",
    category: "Fintech & Blockchain",
    problema: "Complejidad técnica para explicar e instrumentar la tokenización de activos del mundo real (RWA) bajo marcos regulatorios en El Salvador.",
    solucion: "Portal corporativo de alta fidelidad con flujos visuales interactivos y simulador para inversores interesados en activos digitales.",
    resultado: "Canal de captación institucional que simplifica la propuesta de tokenización y genera confianza regulatoria y técnica.",
    tags: ["Next.js", "TypeScript", "Blockchain API"],
  },
]

export function Portfolio() {
  return (
    <section id="proyectos" className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Subtle Grid */}
      <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metric and Text Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto mb-24">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-6 text-left">
            <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
              // case_studies
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter uppercase leading-none text-[#F7F7F7] mb-8">
              CASOS DE ÉXITO
            </h2>
            
            <div className="mb-8">
              <span className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-primary leading-none block font-sans">
                PRODUCCIÓN
              </span>
              <span className="text-lg sm:text-2xl font-extrabold uppercase tracking-tight text-[#F7F7F7] mt-2 block leading-none">
                SISTEMAS QUE TRABAJAN
              </span>
            </div>
            
            <p className="text-md text-[#A6A6A6] max-w-md mb-10 leading-relaxed font-sans font-medium">
              No mostramos métricas ficticias. Desarrollamos, integramos y desplegamos plataformas de software a medida que resuelven cuellos de botella reales de negocio.
            </p>
            
            <div>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full border border-primary/25 bg-[#050505]/40 text-foreground/90 hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground hover:border-primary dark:hover:border-primary hover:shadow-[0_0_15px_rgba(196,255,0,0.25)] font-mono text-xs uppercase tracking-wider gap-2 transition-all duration-300"
              >
                <a href="#contacto">
                  Evaluar mi proyecto
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-10 bg-radial from-primary/5 to-transparent blur-3xl opacity-50 pointer-events-none" />
            <div className="animate-float">
              <SystemDashboardMockup />
            </div>
          </div>
        </div>

        {/* Real Projects list section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-left mb-12">
            <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-2">
              // verified_work
            </span>
            <h3 className="text-2xl font-bold uppercase text-[#F7F7F7] tracking-tight">Proyectos Recientes</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj) => (
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

                  <h4 className="text-2xl font-extrabold text-[#F7F7F7] uppercase tracking-tight mb-6">
                    {proj.title}
                  </h4>

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
      </div>
    </section>
  )
}
