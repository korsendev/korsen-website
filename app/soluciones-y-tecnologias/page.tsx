import type { Metadata } from "next"
import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"
import { Services } from "@/components/services"
import { Technologies } from "@/components/technologies"

export const metadata: Metadata = {
  title: "Soluciones y tecnologías — Korsen",
  description:
    "Catálogo de servicios y stacks: cada tarjeta enlaza a su landing con información, proyectos y formulario de cotización.",
}

export default function SolucionesYTecnologiasPage() {
  return (
    <PageWrapper showBgEffects={false}>
      <div className="relative pt-36 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-left">
          <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
            // capability_catalog
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F7F7] uppercase tracking-tighter leading-none mb-6">
            SOLUCIONES Y<br/>TECNOLOGÍAS
          </h1>
          <p className="text-md text-[#A6A6A6] max-w-2xl leading-relaxed font-sans font-medium">
            Cada módulo enlaza a su propia página técnica: contexto de la solución o stack tecnológico, proyectos de referencia y formularios de cotización inmediata.
          </p>
        </div>
      </div>
      <Services />
      <Technologies />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          ¿Prefieres escribirnos sin entrar a una landing?{" "}
          <Link href="/#contacto" className="text-primary hover:underline font-bold">
            Formulario de contacto en el inicio
          </Link>
        </p>
      </div>
    </PageWrapper>
  )
}
