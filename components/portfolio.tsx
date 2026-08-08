"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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

export function Portfolio() {
  return (
    <section id="proyectos" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Subtle Grid */}
      <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column: Metric and Text */}
          <div className="lg:col-span-6 text-left">
            <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
              // case_studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter uppercase leading-none text-[#F7F7F7] mb-8">
              CASOS DE ÉXITO
            </h2>
            
            <div className="mb-8">
              <span className="text-6xl sm:text-9xl font-extrabold tracking-tighter text-primary leading-none block font-sans">
                +85%
              </span>
              <span className="text-xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#F7F7F7] mt-2 block leading-none">
                DE EFICIENCIA
              </span>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed font-sans font-medium">
              Desarrollamos e integramos plataformas que optimizan procesos de negocio. Automatizamos flujos empresariales. Resultados tangibles en producción.
            </p>
            
            <div>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full border border-primary/25 bg-[#050505]/40 text-foreground/90 hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground hover:border-primary dark:hover:border-primary hover:shadow-[0_0_15px_rgba(196,255,0,0.25)] font-mono text-xs uppercase tracking-wider gap-2 transition-all duration-300"
              >
                <a href="#contacto">
                  Ver más casos
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
      </div>
    </section>
  )
}
