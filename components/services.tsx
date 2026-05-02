import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BarChart3,
  Brain,
  Building2,
  CheckCircle,
  Cloud,
  Code,
  Compass,
  CreditCard,
  Globe,
  Home,
  Lightbulb,
  Lock,
  Palette,
  Settings,
  Shield,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Server,
  Stethoscope,
  TrendingUp,
  Users,
  Users2,
  Workflow,
  Zap,
} from "lucide-react"
import { pathSolucionLanding } from "@/lib/site-paths"

const services = [
  // DESARROLLO Y ARQUITECTURA
  {
    slug: "desarrollo-software-a-medida",
    icon: Code,
    title: "Desarrollo de software a medida",
    description: "Soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio, construidas con arquitectura escalable y tecnologías modernas.",
  },
  {
    slug: "apps-moviles",
    icon: Smartphone,
    title: "Aplicaciones móviles (iOS / Android)",
    description: "Apps nativas y multiplataforma con experiencias de usuario excepcionales, rendimiento optimizado y diseño centrado en el usuario.",
  },
  {
    slug: "plataformas-web",
    icon: Globe,
    title: "Plataformas web escalables",
    description: "Sitios web y aplicaciones web modernas, rápidas y preparadas para crecer con tu empresa, con seguridad empresarial.",
  },
  {
    slug: "arquitectura-software",
    icon: Building2,
    title: "Arquitectura y diseño de sistemas",
    description: "Diseño de arquitecturas robustas y escalables que soportan millones de transacciones, garantizando alta disponibilidad y rendimiento.",
  },
  {
    slug: "cloud-infrastructure",
    icon: Cloud,
    title: "Infraestructura y DevOps en la nube",
    description: "Migración, implementación y gestión de infraestructura en AWS, Google Cloud y Azure con CI/CD, containerización y orquestación.",
  },

  // TRANSFORMACIÓN DIGITAL
  {
    slug: "consultoria-transformacion-digital",
    icon: Settings,
    title: "Consultoría tecnológica y transformación digital",
    description: "Asesoramiento estratégico para modernizar tus procesos, adoptar nuevas tecnologías e implementar cambios organizacionales.",
  },
  {
    slug: "evaluacion-madurez-digital",
    icon: BarChart3,
    title: "Evaluación de madurez digital",
    description: "Diagnóstico profundo de tu posición tecnológica actual, identificando brechas y oportunidades de mejora con roadmap estratégico.",
  },
  {
    slug: "modernizacion-legado",
    icon: Zap,
    title: "Modernización de sistemas legacy",
    description: "Refactorización y migración de sistemas antiguos a tecnologías modernas sin interrumpir operaciones, reduciendo deuda técnica.",
  },
  {
    slug: "automatizacion-procesos",
    icon: Workflow,
    title: "Automatización de procesos empresariales",
    description: "Automatización inteligente de flujos de trabajo con RPA, IA y machine learning para reducir costos operacionales hasta 60%.",
  },

  // INTEGRACIONES Y DATOS
  {
    slug: "integraciones-apis",
    icon: Zap,
    title: "Integraciones y APIs",
    description: "Conectamos tus sistemas existentes y creamos APIs robustas para una comunicación fluida entre plataformas.",
  },
  {
    slug: "data-analytics",
    icon: TrendingUp,
    title: "Analytics y Business Intelligence",
    description: "Implementación de soluciones de BI, data warehousing y dashboards inteligentes para toma de decisiones basada en datos.",
  },
  {
    slug: "big-data-ml",
    icon: Brain,
    title: "Big Data y Machine Learning",
    description: "Soluciones de análisis de datos masivos, modelos predictivos e IA para optimizar operaciones y descubrir nuevas oportunidades.",
  },
  {
    slug: "integracion-ecommerce",
    icon: ShoppingCart,
    title: "Integración e-commerce y pagos",
    description: "Implementación de plataformas de comercio electrónico, gateways de pago, ERP y sistemas logísticos completamente integrados.",
  },

  // DISEÑO Y EXPERIENCIA
  {
    slug: "diseno-ux-ui",
    icon: Palette,
    title: "Diseño UX/UI y brand strategy",
    description: "Diseño centrado en usuario, investigación de comportamiento, wireframing y prototipado que maximiza conversiones.",
  },
  {
    slug: "experience-design",
    icon: Sparkles,
    title: "Diseño de experiencia digital (CX/DX)",
    description: "Estrategia holística de experiencia del cliente a través de todos los touchpoints digitales, aumentando satisfacción y lealtad.",
  },

  // SEGURIDAD Y COMPLIANCE
  {
    slug: "ciberseguridad-compliance",
    icon: Shield,
    title: "Ciberseguridad y compliance",
    description: "Auditorías de seguridad, penetration testing, implementación de GDPR, HIPAA y estándares ISO para proteger tus datos.",
  },
  {
    slug: "auditoria-seguridad",
    icon: Lock,
    title: "Auditoría y fortalecimiento de seguridad",
    description: "Evaluación completa de vulnerabilidades, implementación de arquitectura zero-trust y respuesta ante incidentes.",
  },

  // SOPORTE Y OPERACIÓN
  {
    slug: "soporte-mantenimiento",
    icon: Users,
    title: "Soporte y mantenimiento 24/7",
    description: "Acompañamiento continuo, monitoreo proactivo y soporte técnico garantizado para asegurar el óptimo funcionamiento de tus soluciones.",
  },
  {
    slug: "staffing-dedicado",
    icon: Users2,
    title: "Team extension y staff augmentation",
    description: "Expande tu equipo con desarrolladores, arquitectos y especialistas especializados bajo gestión dedicada, escalable según demanda.",
  },
  {
    slug: "managed-services",
    icon: Server,
    title: "Servicios gestionados (SLA guaranteed)",
    description: "Gestión integral de aplicaciones, infraestructura y operaciones con SLAs garantizados, escalamiento automático y monitoreo 24/7.",
  },

  // INDUSTRIA ESPECÍFICA
  {
    slug: "fintech-soluciones",
    icon: CreditCard,
    title: "Soluciones Fintech y Banking",
    description: "Plataformas de pagos, wallets digitales, blockchain y soluciones financieras cumpliendo con regulaciones internacionales.",
  },
  {
    slug: "healthcare-medtech",
    icon: Stethoscope,
    title: "HealthTech y soluciones médicas",
    description: "Aplicaciones HIPAA-compliant, telemedicina, EHR y sistemas de gestión hospitalaria con seguridad de nivel empresarial.",
  },
  {
    slug: "ecommerce-retail",
    icon: ShoppingCart,
    title: "Soluciones E-commerce y Retail",
    description: "Plataformas omnichannel, gestión de inventario, personalización con IA y optimización de conversión para retail.",
  },
  {
    slug: "proptech-realstate",
    icon: Home,
    title: "PropTech y soluciones inmobiliarias",
    description: "Plataformas de gestión inmobiliaria, virtual tours 3D, blockchain para títulos y soluciones de propiedad inteligente.",
  },

  // CONSULTORÍA ESTRATÉGICA
  {
    slug: "estrategia-digital",
    icon: Compass,
    title: "Estrategia digital y roadmap tecnológico",
    description: "Asesoramiento C-level sobre visión tecnológica, roadmap de 3-5 años, selección de tecnologías y presupuesto optimizado.",
  },
  {
    slug: "innovation-labs",
    icon: Lightbulb,
    title: "Innovation labs y proof of concept",
    description: "Exploración de nuevas tecnologías (blockchain, IoT, quantum) con MVP y PoC para validar antes de inversión mayor.",
  },
  {
    slug: "vendor-selection",
    icon: CheckCircle,
    title: "Evaluación y selección de vendors",
    description: "Análisis comparativo de soluciones SaaS, cloud providers y partners tecnológicos, RFP y negociación de contratos.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-32 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Lo que hacemos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Soluciones digitales adaptadas a tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.slug}
              id={`servicio-${service.slug}`}
              className="scroll-mt-28 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group flex flex-col"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-balance">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 gap-4">
                <CardDescription className="text-muted-foreground leading-relaxed text-pretty flex-1">
                  {service.description}
                </CardDescription>
                <Button variant="outline" size="sm" className="w-full border-primary/35 gap-2" asChild>
                  <Link href={pathSolucionLanding(service.slug)}>
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
