"use client"

import { Search, Compass, Cpu, Play, TrendingUp } from "lucide-react"

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Entendemos a fondo tu negocio, analizamos la operación y definimos el problema real antes de proponer código.",
    icon: Search,
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Diseñamos la estructura técnica del sistema, modelamos la base de datos y planificamos integraciones seguras.",
    icon: Compass,
  },
  {
    num: "03",
    title: "Build",
    desc: "Desarrollamos en ciclos ágiles de trabajo con código limpio, entregando avances funcionales y testeados de forma constante.",
    icon: Cpu,
  },
  {
    num: "04",
    title: "Launch",
    desc: "Realizamos pruebas de estrés en entornos simulados y desplegamos tu software en producción de manera segura y sin interrupciones.",
    icon: Play,
  },
  {
    num: "05",
    title: "Scale",
    desc: "Monitoreamos la infraestructura en tiempo real, corregimos fallos proactivamente y agregamos nuevas funcionalidades.",
    icon: TrendingUp,
  },
]

export function Process() {
  return (
    <section id="proceso" className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Grid Backdrop */}
      <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-left mb-20 max-w-4xl">
          <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
            // delivery_methodology
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter uppercase leading-none text-[#F7F7F7] mb-6">
            CÓMO TRABAJAMOS
          </h2>
          <p className="text-md text-[#A6A6A6] max-w-2xl leading-relaxed font-sans font-medium">
            No improvisamos. Aplicamos un proceso riguroso y transparente desde el descubrimiento inicial hasta la evolución del producto en producción.
          </p>
        </div>

        {/* Process Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                className="group p-6 border border-white/5 bg-[#0B0B0B] hover:border-primary/20 transition-all duration-300 rounded-3xl relative text-left"
              >
                <div className="corner-bracket top-left opacity-35 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket top-right opacity-35 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket bottom-left opacity-35 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket bottom-right opacity-35 group-hover:opacity-100 transition-opacity" />

                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary stroke-[1.5]" />
                  </div>
                  <span className="text-3xl font-extrabold text-white/5 font-mono numeric-value group-hover:text-primary/10 transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#F7F7F7] uppercase mb-3 tracking-wide">
                  {step.title}
                </h3>
                
                <p className="text-xs text-[#A6A6A6] leading-relaxed font-sans font-medium">
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
