"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// WIDGET 1: Server Telemetry Monitor
function ServerMonitorWidget() {
  const [cpu, setCpu] = useState(24)
  const [latency, setLatency] = useState(12)

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(Math.floor(Math.random() * (38 - 18) + 18))
      setLatency(Math.floor(Math.random() * (16 - 8) + 8))
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="korsen-container px-5 py-4 w-full max-w-sm mx-auto shadow-[0_0_30px_rgba(198,253,14,0.12)] text-left">
      <div className="corner-bracket top-left opacity-80" />
      <div className="corner-bracket top-right opacity-80" />
      <div className="corner-bracket bottom-left opacity-80" />
      <div className="corner-bracket bottom-right opacity-80" />
      
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Server Telemetry</span>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      </div>
      
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-foreground/80">CPU LOAD</span>
            <span className="numeric-value text-primary font-bold">{cpu}%</span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${cpu}%` }} />
          </div>
        </div>
        
        <div className="flex justify-between items-center text-xs">
          <span className="text-foreground/80">LATENCY</span>
          <span className="numeric-value text-foreground font-bold">{latency} ms</span>
        </div>
        
        <div className="flex justify-between items-center text-xs">
          <span className="text-foreground/80">MEMORY</span>
          <span className="numeric-value text-foreground font-bold">4.2 GB / 16.0 GB</span>
        </div>
      </div>
    </div>
  )
}

// WIDGET 2: API Stream Logger
const MOCK_LOGS = [
  { method: "GET", path: "/api/v1/auth", status: 200 },
  { method: "POST", path: "/api/v1/deploy", status: 201 },
  { method: "GET", path: "/api/v1/users/me", status: 200 },
  { method: "POST", path: "/api/v1/database/sync", status: 200 },
  { method: "GET", path: "/api/v1/analytics", status: 200 },
  { method: "PATCH", path: "/api/v1/settings", status: 200 },
  { method: "POST", path: "/api/v1/media/upload", status: 201 },
]

function ApiLoggerWidget() {
  const [logs, setLogs] = useState(MOCK_LOGS.slice(0, 4))

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextIndex = Math.floor(Math.random() * MOCK_LOGS.length)
        const nextLog = MOCK_LOGS[nextIndex]
        return [...prev.slice(1), nextLog]
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="korsen-container px-5 py-4 w-full max-w-sm mx-auto shadow-[0_0_30px_rgba(198,253,14,0.12)] text-left">
      <div className="corner-bracket top-left opacity-80" />
      <div className="corner-bracket top-right opacity-80" />
      <div className="corner-bracket bottom-left opacity-80" />
      <div className="corner-bracket bottom-right opacity-80" />
      
      <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
        <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">API Traffic Logs</span>
        <span className="text-[10px] numeric-value text-primary font-bold">LIVE STREAM</span>
      </div>
      
      <div className="space-y-2 monospace text-[11px]">
        {logs.map((log, idx) => (
          <div key={idx} className="flex justify-between items-center text-white/95">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className={`font-bold px-1 rounded-[4px] shrink-0 ${
                log.method === "POST" ? "text-emerald-400 bg-emerald-400/10" :
                log.method === "PATCH" ? "text-amber-400 bg-amber-400/10" : "text-sky-400 bg-sky-400/10"
              }`}>{log.method}</span>
              <span className="truncate text-white/70">{log.path}</span>
            </div>
            <span className="text-primary font-bold shrink-0">{log.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// WIDGET 3: DB & Cache Performance
function DbPerformanceWidget() {
  const [qps, setQps] = useState(1245)

  useEffect(() => {
    const interval = setInterval(() => {
      setQps(Math.floor(Math.random() * (1320 - 1180) + 1180))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="korsen-container px-5 py-4 w-full max-w-sm mx-auto shadow-[0_0_30px_rgba(198,253,14,0.12)] text-left">
      <div className="corner-bracket top-left opacity-80" />
      <div className="corner-bracket top-right opacity-80" />
      <div className="corner-bracket bottom-left opacity-80" />
      <div className="corner-bracket bottom-right opacity-80" />
      
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">DB Performance</span>
        <span className="text-[10px] text-emerald-400 font-bold bg-emerald-400/10 px-1.5 py-0.5 rounded">HEALTHY</span>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mt-3 text-center">
        <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2">
          <p className="text-[10px] text-muted-foreground uppercase">Queries/s</p>
          <p className="text-lg font-bold text-primary numeric-value mt-1">{qps}</p>
        </div>
        <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2">
          <p className="text-[10px] text-muted-foreground uppercase">Cache Hit</p>
          <p className="text-lg font-bold text-white numeric-value mt-1">99.2%</p>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-36 pb-24 bg-background">
      {/* Background grid */}
      <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none z-0" />
      <div className="absolute top-[15%] left-[5%] w-[35rem] h-[35rem] bg-primary/3 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[5%] w-[40rem] h-[40rem] bg-primary/3 rounded-full blur-[220px] pointer-events-none z-0" />

      {/* Floating Widgets in Background (Low Opacity, Animated) */}
      <div className="absolute left-[2%] top-[25%] w-72 lg:w-80 hidden md:block opacity-10 hover:opacity-30 transition-opacity duration-500 rotate-[-6deg] z-10 pointer-events-none animate-float">
        <ServerMonitorWidget />
      </div>
      <div className="absolute right-[2%] top-[20%] w-72 lg:w-80 hidden md:block opacity-15 hover:opacity-35 transition-opacity duration-500 rotate-[4deg] z-10 pointer-events-none animate-float delay-1000">
        <ApiLoggerWidget />
      </div>
      <div className="absolute left-[15%] bottom-[20%] w-72 lg:w-80 hidden lg:block opacity-10 hover:opacity-30 transition-opacity duration-500 rotate-[2deg] z-10 pointer-events-none animate-float delay-2000">
        <DbPerformanceWidget />
      </div>

      <div className="w-full relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          {/* Centered Content Column */}
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            
            {/* Active Capsule Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-[10px] font-mono text-primary tracking-widest uppercase shadow-[0_0_15px_rgba(196,255,0,0.03)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              korsen // active_instance
            </div>
            
            {/* Giant Bold H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter uppercase leading-[1.1] text-foreground">
              CONVERTIMOS PROBLEMAS DE NEGOCIO EN SOFTWARE QUE PRODUCE <span className="text-primary">RESULTADOS.</span>
            </h1>
            
            <p className="text-md sm:text-lg text-[#A6A6A6] max-w-3xl mx-auto leading-relaxed font-sans font-medium">
              Diseñamos y desarrollamos plataformas web, aplicaciones y sistemas a medida para empresas que necesitan automatizar, vender más y escalar sin depender de soluciones improvisadas.
            </p>
            
            {/* Centered Call to Actions */}
            <div className="flex flex-wrap gap-4 justify-center items-center pt-2">
              <Button
                size="lg"
                asChild
                className="relative group bg-primary hover:bg-primary-light text-black font-extrabold font-sans rounded-xl px-8 py-4 shadow-[0_4px_20px_rgba(196,255,0,0.25)] hover:shadow-[0_8px_32px_rgba(196,255,0,0.45)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <Link href="#contacto" className="flex items-center">
                  Hablar con un especialista
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border border-white/10 text-foreground/90 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 font-bold font-sans rounded-xl px-8 py-4 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <Link href="#proyectos">
                  Ver proyectos
                </Link>
              </Button>
            </div>

            {/* Centered Capability badges */}
            <div className="pt-8 border-t border-white/5 flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto">
              <span className="text-[10px] font-mono text-primary font-bold mr-2 uppercase tracking-widest">// enfoque:</span>
              {[
                "Software a medida",
                "Plataformas web",
                "Apps móviles",
                "Automatización",
                "IA"
              ].map((item) => (
                <span key={item} className="text-[10px] font-mono text-[#A6A6A6] bg-white/[0.01] border border-white/5 px-3 py-1 rounded-lg flex items-center gap-1.5 select-none hover:border-primary/20 hover:text-foreground transition-all duration-300">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Trust / Social Proof Section */}
          <div className="mt-28 pt-10 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-6 text-left relative z-20">
            {[
              { val: "50+", lbl: "proyectos entregados", color: "text-primary" },
              { val: "30+", lbl: "clientes de confianza", color: "text-foreground" },
              { val: "5+", lbl: "años de trayectoria", color: "text-foreground" },
              { val: "15+", lbl: "tecnologías", color: "text-foreground" },
            ].map((stat, i) => (
              <div key={i} className="group p-6 border border-white/5 bg-[#0B0B0B]/30 hover:bg-[#0B0B0B]/50 hover:border-primary/20 transition-all duration-300 rounded-2xl relative overflow-hidden">
                <div className="corner-bracket top-left opacity-20 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket top-right opacity-20 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket bottom-left opacity-20 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket bottom-right opacity-20 group-hover:opacity-100 transition-opacity" />
                
                <span className={`block text-4xl font-extrabold font-mono numeric-value ${stat.color}`}>
                  {stat.val}
                </span>
                <span className="block text-[10px] uppercase tracking-widest font-bold text-[#737373] mt-2 font-mono group-hover:text-primary transition-colors">
                  // {stat.lbl}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
