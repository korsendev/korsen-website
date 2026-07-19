import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Users, Award, Target } from "lucide-react"

const stats = [
  { icon: Rocket, label: "Proyectos completados", value: "50+" },
  { icon: Users, label: "Clientes satisfechos", value: "30+" },
  { icon: Award, label: "Años de experiencia", value: "5+" },
  { icon: Target, label: "Tecnologías dominadas", value: "20+" },
]

export function About() {
  return (
    <section id="nosotros" className="relative py-20 sm:py-32 scroll-mt-24 overflow-hidden bg-background">
      <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">Quiénes somos</h2>
            <p className="text-xl text-muted-foreground mb-4 text-pretty">De startup a referente tecnológico.</p>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-pretty">
                Nacimos como <span className="text-primary font-semibold">Koma Developers</span> y hoy evolucionamos a{" "}
                <span className="text-primary font-semibold">Korsen</span>, una marca más sólida y global.
              </p>
              <p className="text-pretty">
                Nuestro equipo multidisciplinario trabaja con pasión para construir productos digitales que marcan la
                diferencia. Combinamos creatividad, tecnología de vanguardia y metodologías ágiles para entregar
                soluciones que superan las expectativas.
              </p>
              <p className="text-pretty">
                En Korsen dominamos el desarrollo digital con rigor técnico y arquitectura de alta disponibilidad. Cada
                proyecto es un sistema optimizado diseñado para escalar y liderar.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="korsen-container text-center p-6 relative">
                  <div className="corner-bracket top-left opacity-60" />
                  <div className="corner-bracket top-right opacity-60" />
                  <div className="corner-bracket bottom-left opacity-60" />
                  <div className="corner-bracket bottom-right opacity-60" />
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1 numeric-value">{stat.value}</div>
                  <div className="text-sm text-muted-foreground text-balance">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="korsen-container p-6 relative">
              <div className="corner-bracket top-left opacity-60" />
              <div className="corner-bracket top-right opacity-60" />
              <div className="corner-bracket bottom-left opacity-60" />
              <div className="corner-bracket bottom-right opacity-60" />
              <h3 className="text-xl font-semibold mb-4">Nuestras tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "TypeScript",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                  "AWS",
                  "Docker",
                  "Kubernetes",
                ].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
