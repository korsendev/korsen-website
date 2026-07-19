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
  "min-w-[250px] rounded-2xl border border-white/[0.08] bg-background/95 backdrop-blur-2xl p-2 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_12px_rgba(198,253,14,0.05)] z-[100] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"

const menuItemClass =
  "block w-full rounded-xl px-4 py-2 text-sm text-foreground/90 outline-none cursor-pointer hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary transition-all"

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
      setIsScrolled(window.scrollY > 40)
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
      className={`fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "top-4 bg-background/85 backdrop-blur-xl border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(198,253,14,0.03)] py-1.5"
          : "top-4 sm:top-6 bg-background/40 backdrop-blur-md border border-white/[0.05] py-2.5"
      } ${isMobileMenuOpen ? "rounded-3xl" : "rounded-full"}`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <Link href="/" className="flex items-center hover:opacity-85 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="relative h-9 w-28 overflow-hidden flex items-center justify-center">
              <Image
                src="/logo-korsen.png"
                alt="Korsen"
                fill
                className="object-contain scale-[1.8] transform"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {isHome ? (
              <button
                type="button"
                onClick={() => scrollToSection("inicio")}
                className="px-3.5 py-1.5 rounded-full text-sm font-medium text-foreground/80 hover:text-primary transition-all hover:bg-white/[0.03]"
              >
                Inicio
              </button>
            ) : (
              <Link href="/" className="px-3.5 py-1.5 rounded-full text-sm font-medium text-foreground/80 hover:text-primary transition-all hover:bg-white/[0.03]">
                Inicio
              </Link>
            )}

            <Link
              href={ofertaHref("servicios")}
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-foreground/80 hover:text-primary transition-all hover:bg-white/[0.03]"
            >
              Servicios
            </Link>

            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-medium text-foreground/80 hover:text-primary transition-all hover:bg-white/[0.03] outline-none data-[state=open]:text-primary data-[state=open]:bg-white/[0.03]">
                Soluciones
                <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className={menuContentClass} sideOffset={12} align="start">
                  <DropdownMenu.Item asChild>
                    <Link href={ofertaHref("servicios")} className={menuItemClass}>
                      Ver todas las soluciones
                    </Link>
                  </DropdownMenu.Item>
                  <div className="my-1 h-px bg-white/5" />
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
              <DropdownMenu.Trigger className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-medium text-foreground/80 hover:text-primary transition-all hover:bg-white/[0.03] outline-none data-[state=open]:text-primary data-[state=open]:bg-white/[0.03]">
                Tecnologías
                <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className={menuContentClass} sideOffset={12} align="start">
                  <DropdownMenu.Item asChild>
                    <Link href={ofertaHref("tecnologias")} className={menuItemClass}>
                      Ver todas las tecnologías
                    </Link>
                  </DropdownMenu.Item>
                  <div className="my-1 h-px bg-white/5" />
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
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-foreground/80 hover:text-primary transition-all hover:bg-white/[0.03]"
            >
              Proyectos
            </Link>
            <Link
              href={sectionHref("nosotros")}
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-foreground/80 hover:text-primary transition-all hover:bg-white/[0.03]"
            >
              Nosotros
            </Link>
            
            <div className="h-5 w-px bg-white/10 mx-2" />

            <Button variant="outline" size="sm" asChild className="rounded-full border-primary/35 hover:bg-primary/10 hover:text-primary shrink-0 transition-all duration-300">
              <Link href={PATH_SOLUCIONES_TECNOLOGIAS}>Cotizar</Link>
            </Button>
            <Button size="sm" asChild className="rounded-full bg-primary hover:bg-primary-light text-primary-foreground shrink-0 shadow-[0_0_15px_rgba(198,253,14,0.15)] hover:shadow-[0_0_25px_rgba(198,253,14,0.3)] transition-all duration-300">
              <Link href={sectionHref("contacto")}>Contacto</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="rounded-full">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-3 border-t border-white/5 mt-3">
            <div className="px-2 space-y-1 max-h-[min(65vh,460px)] overflow-y-auto">
              {isHome ? (
                <button
                  type="button"
                  onClick={() => scrollToSection("inicio")}
                  className="block w-full px-4 py-2 rounded-xl text-foreground/90 hover:text-primary hover:bg-primary/10 text-left text-sm transition-all"
                >
                  Inicio
                </button>
              ) : (
                <Link
                  href="/"
                  className="block w-full px-4 py-2 rounded-xl text-foreground/90 hover:text-primary hover:bg-primary/10 text-left text-sm transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Inicio
                </Link>
              )}
              <Link
                href={ofertaHref("servicios")}
                className="block w-full px-4 py-2 rounded-xl text-foreground/90 hover:text-primary hover:bg-primary/10 text-left text-sm transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </Link>

              {/* Mobile solutions list */}
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-2 rounded-xl text-foreground/90 hover:text-primary hover:bg-primary/10 text-left text-sm transition-all"
                onClick={() => setMobileSolOpen((o) => !o)}
              >
                Soluciones
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSolOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileSolOpen && (
                <div className="pl-3 border-l border-white/10 ml-5 space-y-1 py-1">
                  <Link
                    href={ofertaHref("servicios")}
                    className="block py-1.5 px-3 text-xs text-muted-foreground hover:text-primary rounded-lg hover:bg-white/5 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Ver todas
                  </Link>
                  {servicios.map((s) => (
                    <Link
                      key={s.slug}
                      href={pathSolucionLanding(s.slug)}
                      className="block py-1.5 px-3 text-xs text-muted-foreground hover:text-primary rounded-lg hover:bg-white/5 transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}

              {/* Mobile technologies list */}
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-2 rounded-xl text-foreground/90 hover:text-primary hover:bg-primary/10 text-left text-sm transition-all"
                onClick={() => setMobileTechOpen((o) => !o)}
              >
                Tecnologías
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileTechOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileTechOpen && (
                <div className="pl-3 border-l border-white/10 ml-5 space-y-1 py-1 max-h-48 overflow-y-auto">
                  <Link
                    href={ofertaHref("tecnologias")}
                    className="block py-1.5 px-3 text-xs text-muted-foreground hover:text-primary rounded-lg hover:bg-white/5 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Ver todas
                  </Link>
                  {tecnologias.map((t) => (
                    <Link
                      key={t.slug}
                      href={pathTecnologiaLanding(t.slug)}
                      className="block py-1.5 px-3 text-xs text-muted-foreground hover:text-primary rounded-lg hover:bg-white/5 transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t.title}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href={sectionHref("proyectos")}
                className="block w-full px-4 py-2 rounded-xl text-foreground/90 hover:text-primary hover:bg-primary/10 text-left text-sm transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href={sectionHref("nosotros")}
                className="block w-full px-4 py-2 rounded-xl text-foreground/90 hover:text-primary hover:bg-primary/10 text-left text-sm transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>

              <div className="h-px bg-white/5 my-2" />

              <Button variant="outline" asChild className="w-full mt-1 border-primary/40 rounded-full">
                <Link href={PATH_SOLUCIONES_TECNOLOGIAS} onClick={() => setIsMobileMenuOpen(false)}>
                  Cotizar
                </Link>
              </Button>
              <Button asChild className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
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
