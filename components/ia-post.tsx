"use client"

import { Cpu, Sparkles, Workflow } from "lucide-react"

export function IaPost() {
  return (
    <section id="ia" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Subtle Grid backdrop */}
      <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
      <div className="absolute top-[30%] right-[10%] w-[35rem] h-[35rem] bg-primary/4 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Left */}
          <div className="lg:col-span-6 text-left space-y-8">
            <span className="text-[10px] font-mono text-primary tracking-widest uppercase block">
              // cognitive_systems
            </span>
            <h2 className="text-4xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter uppercase leading-[0.85] text-[#F7F7F7]">
              INTELIGENCIA<br/>
              <span className="text-primary">ARTIFICIAL</span><br/>
              INTEGRADA.
            </h2>
            <p className="text-lg text-[#A6A6A6] max-w-md leading-relaxed font-sans font-medium">
              Modelos predictivos y agentes cognitivos integrados directamente en tu lógica de negocio. Automatización inteligente.
            </p>
          </div>

          {/* Visual Right: Brain & Circuit Vector Representation */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[400px]">
            {/* Glowing orb backdrop */}
            <div className="absolute w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            
            {/* Neural Net SVG Circuit Graphic */}
            <svg viewBox="0 0 200 200" className="w-full max-w-[340px] text-primary relative z-10 animate-float" fill="none" stroke="currentColor">
              {/* Brain Outline Contour */}
              <path 
                d="M100 30 C75 30 50 45 50 75 C50 85 55 95 60 100 C50 115 55 135 70 145 C80 155 90 160 100 160 C110 160 120 155 130 145 C145 135 150 115 140 100 C145 95 150 85 150 75 C150 45 125 30 100 30 Z" 
                strokeWidth="1" 
                strokeOpacity="0.25" 
                strokeDasharray="4 4"
              />
              
              {/* Central Microprocessor */}
              <rect x="85" y="85" width="30" height="30" rx="4" fill="#0b0b0b" strokeWidth="1.5" className="animate-pulse" />
              <circle cx="100" cy="100" r="4" fill="currentColor" />
              
              {/* Circuit connections leading from CPU */}
              <path d="M85 100 H60 V75" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M115 100 H140 V75" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M100 85 V60 H75" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M100 115 V140 H125" strokeWidth="1.5" strokeLinecap="round" />
              
              {/* Microcircuit nodes/dots */}
              <circle cx="60" cy="75" r="3" fill="#050505" strokeWidth="1.5" />
              <circle cx="140" cy="75" r="3" fill="#050505" strokeWidth="1.5" />
              <circle cx="75" cy="60" r="3" fill="#050505" strokeWidth="1.5" />
              <circle cx="125" cy="140" r="3" fill="#050505" strokeWidth="1.5" />
              
              {/* Node Indicators */}
              <circle cx="100" cy="50" r="2" fill="currentColor" className="animate-ping" />
              <circle cx="150" cy="100" r="2" fill="currentColor" className="animate-ping [animation-delay:0.5s]" />
              <circle cx="50" cy="100" r="2" fill="currentColor" className="animate-ping [animation-delay:1s]" />
            </svg>
            
            {/* Technical Labels Orbiting */}
            <div className="absolute top-10 left-2 sm:left-10 bg-[#0b0b0b]/80 border border-white/5 px-3 py-1.5 rounded-lg text-[9px] font-mono text-[#A6A6A6] tracking-wider uppercase">
              NLP_ENGINE: ACTIVE
            </div>
            <div className="absolute bottom-10 right-2 sm:right-10 bg-[#0b0b0b]/80 border border-white/5 px-3 py-1.5 rounded-lg text-[9px] font-mono text-[#A6A6A6] tracking-wider uppercase">
              AGENT_RESOLVER: OK
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
