import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Globe, Settings, Zap, Users } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Desarrollo de software a medida",
    description: "Soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones móviles (iOS / Android)",
    description: "Apps nativas y multiplataforma con experiencias de usuario excepcionales y rendimiento optimizado.",
  },
  {
    icon: Globe,
    title: "Plataformas web escalables",
    description: "Sitios web y aplicaciones web modernas, rápidas y preparadas para crecer con tu empresa.",
  },
  {
    icon: Settings,
    title: "Consultoría tecnológica y transformación digital",
    description: "Asesoramiento estratégico para modernizar tus procesos y adoptar las mejores tecnologías.",
  },
  {
    icon: Zap,
    title: "Integraciones y APIs",
    description: "Conectamos tus sistemas existentes y creamos APIs robustas para una comunicación fluida.",
  },
  {
    icon: Users,
    title: "Soporte y mantenimiento",
    description: "Acompañamiento continuo para asegurar el óptimo funcionamiento de tus soluciones digitales.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Lo que hacemos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Soluciones digitales adaptadas a tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-balance">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-pretty">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
