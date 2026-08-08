import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"
import { PATH_SOLUCIONES_TECNOLOGIAS } from "@/lib/site-paths"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <div className="relative h-12 w-36 overflow-hidden flex items-center justify-start">
                <Image
                  src="/logo-korsen.png"
                  alt="Korsen"
                  fill
                  className="object-contain object-left scale-[1.8] origin-left transform"
                />
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md text-pretty">
              Transformamos ideas en soluciones digitales escalables. Creando software de alta precisión técnica desde 2019.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>team@korsen.dev</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+44 7848 445738</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={PATH_SOLUCIONES_TECNOLOGIAS} className="hover:text-primary transition-colors">
                  Soluciones y tecnologías
                </Link>
              </li>
              <li>Desarrollo Web</li>
              <li>Apps Móviles</li>
              <li>Software a Medida</li>
              <li>Consultoría Tech</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#proyectos" className="hover:text-primary transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2026 Korsen. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacidad
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Términos
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
