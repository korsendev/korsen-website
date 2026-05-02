"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { getAllCotizarTopics } from "@/lib/cotizar-topics"
import {
  PATH_SOLUCIONES_TECNOLOGIAS,
  pathSolucionLanding,
  pathTecnologiaLanding,
} from "@/lib/site-paths"

const menuContentClass =
  "min-w-[240px] rounded-lg border border-border bg-card/95 backdrop-blur-xl p-1 shadow-lg z-[100] data-[state=open]:animate-in fade-in-0 zoom-in-95"

const menuItemClass =
  "block w-full rounded-md px-3 py-2 text-sm text-foreground outline-none cursor-pointer hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const onSolucionesPage = pathname === PATH_SOLUCIONES_TECNOLOGIAS
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileSolOpen, setMobileSolOpen] = useState(false)
  const [mobileTechOpen, setMobileTechOpen] = useState(false)

  const { servicios, tecnologias } = getAllCotizarTopics()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (isHome) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMobileMenuOpen(false)
    setMobileSolOpen(false)
    setMobileTechOpen(false)
  }

  const sectionHref = (sectionId: string) => (isHome ? `#${sectionId}` : `/#${sectionId}`)

  const ofertaHref = (fragment: string) =>
    onSolucionesPage ? `#${fragment}` : `${PATH_SOLUCIONES_TECNOLOGIAS}#${fragment}`

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <Image src="/logo-korsen.svg" alt="Korsen" width={120} height={30} className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {isHome ? (
              <button
                type="button"
                onClick={() => scrollToSection("inicio")}
                className="px-2 py-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </button>
            ) : (
              <Link href="/" className="px-2 py-2 text-sm text-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
            )}

            <Link
              href={ofertaHref("servicios")}
              className="px-2 py-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </Link>

            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="flex items-center gap-0.5 px-2 py-2 text-sm text-foreground hover:text-primary transition-colors outline-none data-[state=open]:text-primary">
                Soluciones
                <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className={menuContentClass} sideOffset={8} align="start">
                  <DropdownMenu.Item asChild>
                    <Link href={ofertaHref("servicios")} className={menuItemClass}>
                      Ver todas las soluciones
                    </Link>
                  </DropdownMenu.Item>
                  <div className="my-1 h-px bg-border" />
                  {servicios.map((s) => (
                    <DropdownMenu.Item key={s.slug} asChild>
                      <Link href={pathSolucionLanding(s.slug)} className={menuItemClass}>
                        {s.title}
                      </Link>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="flex items-center gap-0.5 px-2 py-2 text-sm text-foreground hover:text-primary transition-colors outline-none data-[state=open]:text-primary">
                Tecnologías
                <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className={menuContentClass} sideOffset={8} align="start">
                  <DropdownMenu.Item asChild>
                    <Link href={ofertaHref("tecnologias")} className={menuItemClass}>
                      Ver todas las tecnologías
                    </Link>
                  </DropdownMenu.Item>
                  <div className="my-1 h-px bg-border" />
                  {tecnologias.map((t) => (
                    <DropdownMenu.Item key={t.slug} asChild>
                      <Link href={pathTecnologiaLanding(t.slug)} className={menuItemClass}>
                        {t.title}
                      </Link>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <Link
              href={sectionHref("proyectos")}
              className="px-2 py-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href={sectionHref("nosotros")}
              className="px-2 py-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </Link>
            <Button variant="outline" size="sm" asChild className="border-primary/40 shrink-0">
              <Link href={PATH_SOLUCIONES_TECNOLOGIAS}>Cotizar</Link>
            </Button>
            <Button size="sm" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
              <Link href={sectionHref("contacto")}>Contacto</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-2 max-h-[min(70vh,520px)] overflow-y-auto">
              {isHome ? (
                <button
                  type="button"
                  onClick={() => scrollToSection("inicio")}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left text-sm"
                >
                  Inicio
                </button>
              ) : (
                <Link
                  href="/"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Inicio
                </Link>
              )}
              <Link
                href={ofertaHref("servicios")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </Link>

              <button
                type="button"
                className="flex w-full items-center justify-between px-3 py-2 text-sm text-foreground hover:text-primary"
                onClick={() => setMobileSolOpen((o) => !o)}
              >
                Soluciones
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSolOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileSolOpen && (
                <div className="pl-2 border-l border-border ml-3 space-y-0.5">
                  <Link
                    href={ofertaHref("servicios")}
                    className="block py-1.5 pl-2 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Ver todas
                  </Link>
                  {servicios.map((s) => (
                    <Link
                      key={s.slug}
                      href={pathSolucionLanding(s.slug)}
                      className="block py-1.5 pl-2 text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}

              <button
                type="button"
                className="flex w-full items-center justify-between px-3 py-2 text-sm text-foreground hover:text-primary"
                onClick={() => setMobileTechOpen((o) => !o)}
              >
                Tecnologías
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileTechOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileTechOpen && (
                <div className="pl-2 border-l border-border ml-3 space-y-0.5 max-h-48 overflow-y-auto">
                  <Link
                    href={ofertaHref("tecnologias")}
                    className="block py-1.5 pl-2 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Ver todas
                  </Link>
                  {tecnologias.map((t) => (
                    <Link
                      key={t.slug}
                      href={pathTecnologiaLanding(t.slug)}
                      className="block py-1.5 pl-2 text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t.title}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href={sectionHref("proyectos")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href={sectionHref("nosotros")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Button variant="outline" asChild className="w-full mt-2 border-primary/40">
                <Link href={PATH_SOLUCIONES_TECNOLOGIAS} onClick={() => setIsMobileMenuOpen(false)}>
                  Cotizar
                </Link>
              </Button>
              <Button asChild className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={sectionHref("contacto")} onClick={() => setIsMobileMenuOpen(false)}>
                  Contacto
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
