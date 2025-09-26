import { Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Image src="/logo-korsen.svg" alt="Korsen" width={150} height={37} className="h-10 w-auto" />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md text-pretty">
              Transformamos ideas en soluciones digitales escalables. Creando proyectos dignos de dioses desde 2019.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>team@korsen.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>849-281-1452</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Desarrollo Web</li>
              <li>Apps Móviles</li>
              <li>Software a Medida</li>
              <li>Consultoría Tech</li>
              <li>APIs e Integraciones</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Sobre Nosotros</li>
              <li>Proyectos</li>
              <li>Blog</li>
              <li>Carreras</li>
              <li>Contacto</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 Korsen. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Términos
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
