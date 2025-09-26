import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    <section id="proyectos" className="py-20 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Nuestros proyectos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Casos de éxito que hablan por sí mismos.
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto text-pretty">
            Hemos trabajado junto a empresas de diferentes sectores para diseñar soluciones que mejoran procesos,
            optimizan recursos y generan valor real.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2">
                    <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    <Github className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-balance">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-4 text-pretty">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
