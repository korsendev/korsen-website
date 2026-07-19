"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Laptop, Terminal } from "lucide-react"

export function WebDevPost() {
  return (
    <section id="desarrollo-web" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Grid backdrop */}
      <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[35rem] h-[35rem] bg-primary/4 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Visual Left: Floating Screens & Code editor representation */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] order-2 lg:order-none">
            {/* Defocused Background Code Box */}
            <div className="w-[85%] border border-white/5 bg-[#0b0b0b]/60 rounded-xl p-5 font-mono text-[9px] text-[#A6A6A6]/35 filter blur-[1.5px] select-none text-left leading-relaxed">
              <p className="text-primary/40">import &#123; createEngine &#125; from &apos;@/lib/korsen-core&apos;</p>
              <p>const config = &#123; port: 8080, workers: 8, secure: true &#125;;</p>
              <p>const system = await createEngine(config);</p>
              <p>system.on(&apos;request&apos;, (req, res) =&gt; &#123;</p>
              <p className="pl-4">res.header(&apos;x-powered-by&apos;, &apos;korsen&apos;);</p>
              <p className="pl-4">res.send(&#123; status: &apos;running&apos;, performance: &apos;optimum&apos; &#125;);</p>
              <p>&#125;);</p>
            </div>

            {/* Floating Glassmorphic UI 1 (Performance Card) */}
            <div className="absolute top-10 right-4 w-52 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl animate-float text-left">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] font-mono text-[#A6A6A6] uppercase tracking-wider">Interface Performance</span>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>
              <div className="text-xl font-bold font-mono text-[#F7F7F7]">120 FPS</div>
              <p className="text-[10px] text-[#A6A6A6] mt-1">Renderizado acelerado por GPU.</p>
            </div>

            {/* Floating Glassmorphic UI 2 (User stats widget) */}
            <div className="absolute bottom-6 left-2 w-48 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl animate-float delay-1500 text-left">
              <div className="text-xs font-bold text-[#F7F7F7] uppercase tracking-wider mb-2 font-mono">NODE_RESOLVER</div>
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mb-2">
                <div className="w-[85%] bg-primary h-full" />
              </div>
              <span className="text-[9px] font-mono text-[#A6A6A6]">Core latency: 0.14ms</span>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 text-left space-y-8">
            <span className="text-[10px] font-mono text-primary tracking-widest uppercase block">
              // interactive_interfaces
            </span>
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter uppercase leading-[0.85] text-[#F7F7F7]">
              CREAMOS<br/>
              INTERFACES<br/>
              DE ALTO<br/>
              RENDIMIENTO.
            </h2>
            <p className="text-lg text-[#A6A6A6] max-w-md leading-relaxed font-sans font-medium">
              Desarrollamos interfaces web rápidas, fluidas y responsivas. Diseñamos con un enfoque en rendimiento gráfico y animaciones fluidas a 120fps.
            </p>
            <div>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full border border-primary/25 bg-[#050505]/40 text-foreground/90 hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground hover:border-primary dark:hover:border-primary hover:shadow-[0_0_15px_rgba(196,255,0,0.25)] font-mono text-xs uppercase tracking-wider gap-2 transition-all duration-300"
              >
                <a href="#contacto">
                  Iniciar proyecto
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
