"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PATH_SOLUCIONES_TECNOLOGIAS, pathSolucionLanding } from "@/lib/site-paths"
import { ArrowRight, Code, Smartphone, Globe, Cpu, MessageCircle } from "lucide-react"
import Image from "next/image"

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
    <section id="inicio" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-background">
      {/* Background grid */}
      <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] bg-primary/4 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-primary/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="w-full relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center max-w-6xl mx-auto">
            {/* Left Column: Bold Slogan (SOFTWARE QUE IMPULSA NEGOCIOS) */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-mono text-primary mb-8 tracking-widest uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                korsen // active_instance
              </div>
              
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase leading-[0.85] text-foreground mb-8">
                SOFTWARE<br/>
                <span className="text-primary">QUE</span><br/>
                IMPULSA<br/>
                NEGOCIOS
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md mb-10 font-sans leading-relaxed">
                Sistemas robustos de alta precisión técnica. Código que genera resultados. No diez frases.
              </p>
              
              <div className="flex gap-4 items-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary-light text-black font-bold font-sans rounded-[12px] px-8 py-3 shadow-[0_4px_12px_rgba(196,255,0,0.15)] hover:shadow-[0_6px_24px_rgba(196,255,0,0.3)] transition-all duration-300"
                >
                  <Link href="#contacto">
                    Iniciar proyecto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Floating high-fidelity UI widgets orbiting */}
            <div className="lg:col-span-5 relative flex flex-col gap-6 items-center">
              <div className="absolute -inset-10 bg-radial from-primary/5 to-transparent blur-3xl opacity-50 pointer-events-none" />
              <div className="animate-float w-full">
                <ServerMonitorWidget />
              </div>
              <div className="animate-float delay-1000 w-full">
                <ApiLoggerWidget />
              </div>
              <div className="animate-float delay-2000 w-full">
                <DbPerformanceWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
