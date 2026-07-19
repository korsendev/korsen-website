"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PATH_SOLUCIONES_TECNOLOGIAS } from "@/lib/site-paths"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageCircle, Send } from "lucide-react"

export function Contact() {
  const [isMounted, setIsMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (!isMounted) {
    return (
      <section id="contacto" className="relative py-32 bg-[#050505] overflow-hidden">
        {/* Subtle Grid */}
        <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Slogan Left */}
            <div className="lg:col-span-5 text-left space-y-8">
              <span className="text-[10px] font-mono text-primary tracking-widest uppercase block">
                // business_relations
              </span>
              <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tighter uppercase leading-[0.9] text-[#F7F7F7]">
                HABLEMOS<br/>
                DE TU<br/>
                PROYECTO.
              </h2>
              <p className="text-md text-[#A6A6A6] max-w-sm leading-relaxed font-sans font-medium">
                Escríbenos y nuestro equipo técnico te responderá en menos de 24 horas. Código y sistemas eficientes.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 text-xs font-mono text-[#A6A6A6]">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>team@korsen.dev</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#A6A6A6]">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>849-281-1452</span>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder Right */}
            <div className="lg:col-span-7 w-full">
              <div className="border border-white/5 bg-[#0B0B0B] p-8 rounded-3xl h-[480px] animate-pulse relative" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Subtle Grid */}
      <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Slogan Left */}
          <div className="lg:col-span-5 text-left space-y-8">
            <span className="text-[10px] font-mono text-primary tracking-widest uppercase block">
              // business_relations
            </span>
            <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tighter uppercase leading-[0.9] text-[#F7F7F7]">
              HABLEMOS<br/>
              DE TU<br/>
              PROYECTO.
            </h2>
            <p className="text-md text-[#A6A6A6] max-w-sm leading-relaxed font-sans font-medium">
              Escríbenos y nuestro equipo técnico te responderá en menos de 24 horas. Código y sistemas eficientes.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-xs font-mono text-[#A6A6A6]">
                <Mail className="w-4 h-4 text-primary" />
                <span>team@korsen.dev</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-[#A6A6A6]">
                <Phone className="w-4 h-4 text-primary" />
                <span>849-281-1452</span>
              </div>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="lg:col-span-7 w-full">
            <div className="border border-white/5 bg-[#0B0B0B] p-8 rounded-3xl relative text-left">
              <div className="corner-bracket top-left opacity-30" />
              <div className="corner-bracket top-right opacity-30" />
              <div className="corner-bracket bottom-left opacity-30" />
              <div className="corner-bracket bottom-right opacity-30" />
              
              <div className="mb-6">
                <span className="text-[10px] font-mono text-[#A6A6A6] tracking-widest uppercase block mb-1">
                  // communication_form
                </span>
                <h3 className="text-xl font-bold text-[#F7F7F7] uppercase tracking-tight">Envíanos un mensaje</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" suppressHydrationWarning>
                  <div suppressHydrationWarning>
                    <Input
                      name="name"
                      placeholder="Tu nombre *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      suppressHydrationWarning
                      className="bg-[#050505] border-white/10 focus:border-primary/50 text-[#F7F7F7] placeholder-[#525252] rounded-[12px] py-6 font-mono text-sm w-full outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <div suppressHydrationWarning>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Tu email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      suppressHydrationWarning
                      className="bg-[#050505] border-white/10 focus:border-primary/50 text-[#F7F7F7] placeholder-[#525252] rounded-[12px] py-6 font-mono text-sm w-full outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>
                <div suppressHydrationWarning>
                  <Input
                    name="company"
                    placeholder="Tu empresa (opcional)"
                    value={formData.company}
                    onChange={handleChange}
                    suppressHydrationWarning
                    className="bg-[#050505] border-white/10 focus:border-primary/50 text-[#F7F7F7] placeholder-[#525252] rounded-[12px] py-6 font-mono text-sm w-full outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div suppressHydrationWarning>
                  <Textarea
                    name="message"
                    placeholder="Cuéntanos sobre tu proyecto... *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    rows={5}
                    className="bg-[#050505] border-white/10 focus:border-primary/50 text-[#F7F7F7] placeholder-[#525252] rounded-[12px] font-mono text-sm w-full outline-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-b from-korsen-primary-light to-korsen-primary text-black font-bold font-sans rounded-[12px] py-6 text-xs uppercase tracking-widest shadow-[0_4px_12px_rgba(196,255,0,0.15)] hover:shadow-[0_6px_24px_rgba(196,255,0,0.3)] transition-all duration-300"
                >
                  Enviar mensaje
                  <Send className="ml-2 h-3.5 w-3.5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
