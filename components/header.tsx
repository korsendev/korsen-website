"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image src="/logo-korsen.svg" alt="Korsen" width={120} height={30} className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Contacto
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Nosotros
              </button>
              <Button
                onClick={() => scrollToSection("contacto")}
                className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Contacto
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
