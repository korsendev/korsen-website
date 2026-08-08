"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaFinal() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Subtle Grid */}
      <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-primary/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
          // start_consultation
        </span>
        
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter uppercase text-[#F7F7F7] mb-6">
          ¿QUÉ QUIERES CONSTRUIR?
        </h2>
        
        <p className="text-md text-[#A6A6A6] max-w-2xl mx-auto leading-relaxed font-sans font-medium mb-10 text-pretty">
          Cuéntanos qué problema quieres resolver, qué procesos quieres automatizar o qué producto digital quieres crear. Te ayudamos a definir el mejor camino técnico.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary-light text-black font-bold font-sans rounded-xl px-8 py-3 shadow-[0_4px_12px_rgba(196,255,0,0.15)] hover:shadow-[0_6px_24px_rgba(196,255,0,0.3)] transition-all duration-300"
          >
            <Link href="#contacto">
              Hablar con un especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border border-white/10 text-foreground hover:bg-white/5 font-bold font-sans rounded-xl px-8 py-3 transition-all duration-300"
          >
            <Link href="#contacto">
              Evaluar mi proyecto
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
