"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react"
import { CodeEditor } from "./code-editor"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-[120vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80 backdrop-blur-3xl">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[200px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[250px] animate-pulse delay-2000"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,47,0.1),transparent_70%)]"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute top-1/4 left-1/4 animate-float">
        <Code className="w-8 h-8 text-primary/30" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float delay-1000">
        <Smartphone className="w-6 h-6 text-primary/30" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float delay-2000">
        <Globe className="w-10 h-10 text-primary/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-balance">Creando Proyectos </span>
            <span className="text-gradient text-balance">Dignos de Dioses</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Transformamos ideas en soluciones digitales escalables con tecnología de vanguardia.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg animate-glow"
            >
              Agenda una consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 text-lg border-primary/30 hover:border-primary"
            >
              Ver servicios
            </Button>
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-full max-w-3xl">
              <CodeEditor />
            </div>
          </div>

          <div className="bg-card/20 backdrop-blur-xl border border-border/30 rounded-2xl p-6 max-w-2xl mx-auto shadow-2xl shadow-primary/10">
            <p className="text-lg text-foreground leading-relaxed text-pretty">
              Korsen combina diseño, ingeniería y estrategia para crear software, apps móviles y plataformas web que
              impulsan el crecimiento de tu negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
