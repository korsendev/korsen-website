import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cpu, ArrowRight } from "lucide-react"
import { getAllCotizarTopics } from "@/lib/cotizar-topics"
import { pathTecnologiaLanding } from "@/lib/site-paths"

export function Technologies() {
  const { tecnologias } = getAllCotizarTopics()

  return (
    <section id="tecnologias" className="py-20 sm:py-32 bg-muted/15 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Tecnologías</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Stacks y plataformas con las que trabajamos. Cada una tiene su landing con detalle, proyectos y cotización.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tecnologias.map((t) => (
            <Card
              key={t.slug}
              id={`tech-${t.slug}`}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 scroll-mt-28 flex flex-col"
            >
              <CardHeader className="pb-2">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold">{t.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 gap-3 pt-0">
                <CardDescription className="text-sm text-muted-foreground flex-1">
                  Cotización y equipos enfocados en {t.title}.
                </CardDescription>
                <Button variant="outline" size="sm" className="w-full border-primary/35 gap-2" asChild>
                  <Link href={pathTecnologiaLanding(t.slug)}>
                    Ver landing y cotizar
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
