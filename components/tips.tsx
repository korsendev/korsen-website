"use client"

export function Tips() {
  const errors = [
    {
      num: "01",
      title: "SOBRE-INGENIERÍA INICIAL",
      desc: "Construir para millones de usuarios antes de validar con el primero. Genera deuda técnica y retrasa el lanzamiento.",
    },
    {
      num: "02",
      title: "IGNORAR LA INTEGRACIÓN",
      desc: "Crear silos de información cerrados. El software moderno debe comunicarse fluidamente vía APIs con todo el ecosistema.",
    },
    {
      num: "03",
      title: "SOPORTE MANUAL CONTINUO",
      desc: "Depender de personas para mantener el sistema vivo en lugar de automatizar el despliegue (CI/CD) y el monitoreo.",
    },
  ]

  return (
    <section id="tips" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Headline Left */}
          <div className="lg:col-span-5 text-left">
            <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
              // industry_insights
            </span>
            <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tighter uppercase leading-[0.9] text-[#F7F7F7] mb-8">
              3 ERRORES<br/>
              <span className="text-primary">AL CREAR</span><br/>
              SOFTWARE<br/>
              EMPRESARIAL.
            </h2>
            <p className="text-md text-[#A6A6A6] max-w-sm leading-relaxed font-sans font-medium">
              Estrategia editorial para evitar sobrecostos y retrasos en lanzamientos de productos digitales.
            </p>
          </div>

          {/* List Right */}
          <div className="lg:col-span-7 space-y-12 text-left">
            {errors.map((err) => (
              <div key={err.num} className="border-b border-white/5 pb-8 last:border-0 last:pb-0">
                <div className="flex gap-6 items-start">
                  <span className="text-2xl font-mono text-primary font-bold shrink-0">{err.num}</span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight text-[#F7F7F7] uppercase">
                      {err.title}
                    </h3>
                    <p className="text-sm text-[#A6A6A6] leading-relaxed max-w-xl font-sans font-medium">
                      {err.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
