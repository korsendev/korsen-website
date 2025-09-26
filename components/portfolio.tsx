"use client"

import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Plataforma E-commerce",
    description:
      "Sistema completo de comercio electrónico con gestión de inventario, pagos y analytics en tiempo real.",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web Platform",
  },
  {
    title: "App de Gestión Empresarial",
    description: "Aplicación móvil para gestión de equipos, proyectos y recursos con sincronización en tiempo real.",
    image: "/business-management-mobile-app.jpg",
    tags: ["React Native", "Firebase", "TypeScript"],
    category: "Mobile App",
  },
  {
    title: "Sistema de Análisis de Datos",
    description: "Dashboard interactivo para visualización y análisis de grandes volúmenes de datos empresariales.",
    image: "/data-analytics-dashboard.png",
    tags: ["Vue.js", "Python", "MongoDB", "D3.js"],
    category: "Data Platform",
  },
  {
    title: "API de Integración Bancaria",
    description: "API robusta para integración con múltiples entidades bancarias y procesamiento de transacciones.",
    image: "/banking-api-integration.jpg",
    tags: ["Node.js", "Express", "Redis", "Docker"],
    category: "Backend API",
  },
]

export function Portfolio() {
  return (
    <section id="proyectos" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background with acrylic effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[200px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,255,47,0.08),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Nuestros <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-pretty">
            Casos de éxito que hablan por sí mismos.
          </p>
          <p className="text-lg text-white/60 mt-4 max-w-3xl mx-auto text-pretty">
            Hemos trabajado junto a empresas de diferentes sectores para diseñar soluciones que mejoran procesos,
            optimizan recursos y generan valor real.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#0a0a0a]/80 via-[#111111]/60 to-[#0f0f0f]/70 backdrop-blur-3xl rounded-3xl border border-primary/20 shadow-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(0,255,47,0.3)]"
            >
              {/* Acrylic background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-all duration-700"></div>

              <div className="relative">
                {/* Project Image */}
                <div className="aspect-video overflow-hidden rounded-t-3xl bg-gradient-to-br from-[#111111] to-[#0a0a0a]">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                        <div className="w-8 h-8 bg-primary/40 rounded-lg"></div>
                      </div>
                      <p className="text-white/40 text-sm">Vista previa del proyecto</p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                      {project.category}
                    </span>
                    <div className="flex gap-3">
                      <button className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-200 group/btn">
                        <ExternalLink className="w-4 h-4 text-white/60 group-hover/btn:text-primary transition-colors" />
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-200 group/btn">
                        <Github className="w-4 h-4 text-white/60 group-hover/btn:text-primary transition-colors" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 text-balance group-hover:text-primary/90 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed mb-6 text-pretty">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-white/80 border border-white/10 hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all duration-200 animate-glow"
            >
              Ver más proyectos
            </button>
            <button
              onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-primary/30 rounded-xl font-semibold transition-all duration-200"
            >
              Nuestros servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
