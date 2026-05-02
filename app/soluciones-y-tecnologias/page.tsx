import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Services } from "@/components/services"
import { Technologies } from "@/components/technologies"

export const metadata: Metadata = {
  title: "Soluciones y tecnologías — Korsen",
  description:
    "Catálogo de servicios y stacks: cada tarjeta enlaza a su landing con información, proyectos y formulario de cotización.",
}

export default function SolucionesYTecnologiasPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Soluciones y tecnologías</h1>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Cada tarjeta enlaza a su propia página: contexto del servicio o stack, proyectos de referencia y formularios
            (WhatsApp y enlace al contacto web).
          </p>
        </div>
      </div>
      <Services />
      <Technologies />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <p className="text-center text-sm text-muted-foreground">
          ¿Prefieres escribirnos sin entrar a una landing?{" "}
          <Link href="/#contacto" className="text-primary hover:underline font-medium">
            Formulario de contacto en la página principal
          </Link>
        </p>
      </div>
      <Footer />
    </main>
  )
}
