"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, ArrowLeft, ArrowRight, MessageCircle } from "lucide-react"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function Contact() {
  const [isMounted, setIsMounted] = useState(false)
  const [step, setStep] = useState(1)
  
  // Diagnostic form state
  const [tipo, setTipo] = useState("")
  const [objetivo, setObjetivo] = useState("")
  const [etapa, setEtapa] = useState("")
  const [presupuesto, setPresupuesto] = useState("")
  
  // Contact details state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [details, setDetails] = useState("")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleNext = () => {
    if (step < 5) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const isUnsure = tipo.includes("No estoy seguro")
    const introText = isUnsure
      ? "Hola, necesito ayuda para definir mi proyecto con korsen.dev. No estoy seguro de qué solución técnica necesito exactamente."
      : "Hola, estoy interesado en desarrollar un proyecto con korsen.dev."

    const message = [
      introText,
      "",
      `Requerimiento: ${tipo || "No especificado"}`,
      `Objetivo de negocio: ${objetivo || "No especificado"}`,
      `Etapa actual: ${etapa || "No especificada"}`,
      `Presupuesto aproximado: ${presupuesto || "No especificado"}`,
      "",
      `Nombre: ${name}`,
      `Email: ${email}`,
      company ? `Empresa: ${company}` : "",
      "",
      "Detalles del problema o idea:",
      details || "Sin detalles adicionales",
      "",
      isUnsure ? "Me gustaría agendar una llamada con un ingeniero." : "Me gustaría evaluar la factibilidad del proyecto.",
      "",
      "Enviado desde el formulario de evaluación de korsen.dev"
    ].filter(Boolean).join("\n")

    const url = buildWhatsAppUrl(message)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const renderDiagnosticStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">// 1. ¿Qué quieres construir?</h4>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                "Software a medida",
                "Plataforma web",
                "Aplicación móvil",
                "E-commerce",
                "Automatización",
                "IA / Machine Learning",
                "No estoy seguro (quiero asesoría)",
              ].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setTipo(opt)
                    handleNext()
                  }}
                  className={`py-4 px-3 rounded-xl border text-[10px] sm:text-xs font-mono uppercase tracking-wider text-left transition-all duration-300 ${
                    tipo === opt
                      ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(196,255,0,0.15)] col-span-2 sm:col-span-1"
                      : "border-white/5 bg-[#050505] text-[#A6A6A6] hover:border-white/15"
                  } ${opt.includes("No estoy seguro") ? "col-span-2" : ""}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">// 2. ¿Cuál es tu objetivo principal?</h4>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                "Vender más",
                "Automatizar procesos",
                "Crear un nuevo producto",
                "Mejorar sistema existente",
                "Integrar herramientas",
                "Reducir costos",
                "Otro / No estoy seguro",
              ].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setObjetivo(opt)
                    handleNext()
                  }}
                  className={`py-4 px-3 rounded-xl border text-[10px] sm:text-xs font-mono uppercase tracking-wider text-left transition-all duration-300 ${
                    objetivo === opt
                      ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(196,255,0,0.15)]"
                      : "border-white/5 bg-[#050505] text-[#A6A6A6] hover:border-white/15"
                  } ${opt.includes("Otro") ? "col-span-2" : ""}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">// 3. ¿En qué etapa estás?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                "Solo tengo una idea",
                "Tengo requerimientos definidos",
                "Tengo diseños",
                "Tengo un sistema existente",
                "Quiero reemplazar un sistema",
              ].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setEtapa(opt)
                    handleNext()
                  }}
                  className={`py-4 px-4 rounded-xl border text-[10px] sm:text-xs font-mono uppercase tracking-wider text-left transition-all duration-300 ${
                    etapa === opt
                      ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(196,255,0,0.15)]"
                      : "border-white/5 bg-[#050505] text-[#A6A6A6] hover:border-white/15"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">// 4. Presupuesto estimado</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                "US$1,000 – US$3,000",
                "US$3,000 – US$10,000",
                "US$10,000 – US$25,000",
                "US$25,000+",
                "No estoy seguro / A evaluar",
              ].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setPresupuesto(opt)
                    handleNext()
                  }}
                  className={`py-4 px-4 rounded-xl border text-[10px] sm:text-xs font-mono uppercase tracking-wider text-left transition-all duration-300 ${
                    presupuesto === opt
                      ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(196,255,0,0.15)]"
                      : "border-white/5 bg-[#050505] text-[#A6A6A6] hover:border-white/15"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )
      case 5:
        return (
          <div className="space-y-4" suppressHydrationWarning>
            <h4 className="text-lg font-bold text-foreground">// 5. Datos de contacto</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" suppressHydrationWarning>
              <div suppressHydrationWarning>
                <Input
                  name="name"
                  placeholder="Tu nombre *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  suppressHydrationWarning
                  className="bg-[#050505] border-white/10 focus:border-primary/50 text-[#F7F7F7] placeholder-[#525252] rounded-xl py-5 font-mono text-xs w-full outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div suppressHydrationWarning>
                <Input
                  name="email"
                  type="email"
                  placeholder="Tu email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  suppressHydrationWarning
                  className="bg-[#050505] border-white/10 focus:border-primary/50 text-[#F7F7F7] placeholder-[#525252] rounded-xl py-5 font-mono text-xs w-full outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
            <div suppressHydrationWarning>
              <Input
                name="company"
                placeholder="Tu empresa (opcional)"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                suppressHydrationWarning
                className="bg-[#050505] border-white/10 focus:border-primary/50 text-[#F7F7F7] placeholder-[#525252] rounded-xl py-5 font-mono text-xs w-full outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div suppressHydrationWarning>
              <Textarea
                name="message"
                placeholder={
                  tipo.includes("No estoy seguro")
                    ? "Explícanos brevemente qué procesos quieres digitalizar o qué problema tiene tu empresa... *"
                    : "Cuéntanos sobre tu proyecto o idea... *"
                }
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
                suppressHydrationWarning
                rows={4}
                className="bg-[#050505] border-white/10 focus:border-primary/50 text-[#F7F7F7] placeholder-[#525252] rounded-xl font-mono text-xs w-full outline-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
              />
            </div>
            
            <Button
              type="submit"
              disabled={!name || !email || !details}
              className="w-full bg-gradient-to-b from-korsen-primary-light to-korsen-primary text-black font-bold font-sans rounded-xl py-5 text-xs uppercase tracking-widest shadow-[0_4px_12px_rgba(196,255,0,0.15)] hover:shadow-[0_6px_24px_rgba(196,255,0,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {tipo.includes("No estoy seguro") ? "Hablar con un ingeniero" : "Solicitar evaluación"}
              <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )
      default:
        return null
    }
  }

  if (!isMounted) {
    return (
      <section id="contacto" className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 text-left space-y-8 animate-pulse">
              <div className="h-4 w-28 bg-white/5 rounded" />
              <div className="h-16 w-full bg-white/5 rounded" />
              <div className="h-12 w-64 bg-white/5 rounded" />
            </div>
            <div className="lg:col-span-7 w-full">
              <div className="border border-white/5 bg-[#0B0B0B] p-8 rounded-3xl h-[400px] animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Subtle Grid */}
      <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Slogan Left */}
          <div className="lg:col-span-5 text-left space-y-8">
            <span className="text-[10px] font-mono text-primary tracking-widest uppercase block">
              // project_evaluation
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter uppercase leading-[0.9] text-[#F7F7F7]">
              EVALUACIÓN<br/>
              DE TU<br/>
              <span className="text-primary">PROYECTO.</span>
            </h2>
            <p className="text-md text-[#A6A6A6] max-w-sm leading-relaxed font-sans font-medium">
              Antes de invertir en desarrollo, te ayudamos a definir la arquitectura técnica de tu software, estimar plazos y calcular el presupuesto requerido.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-xs font-mono text-[#A6A6A6]">
                <Mail className="w-4 h-4 text-primary" />
                <span>team@korsen.dev</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-[#A6A6A6]">
                <Phone className="w-4 h-4 text-primary" />
                <span>+44 7848 445738</span>
              </div>
            </div>
          </div>

          {/* Diagnostic Contact Form Right */}
          <div className="lg:col-span-7 w-full">
            <div className="border border-white/5 bg-[#0B0B0B] p-6 sm:p-8 rounded-3xl relative text-left">
              <div className="corner-bracket top-left opacity-35" />
              <div className="corner-bracket top-right opacity-35" />
              <div className="corner-bracket bottom-left opacity-35" />
              <div className="corner-bracket bottom-right opacity-35" />
              
              <div className="mb-6 flex justify-between items-center border-b border-white/5 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#A6A6A6] tracking-widest uppercase block mb-1">
                    // diagnostic_form
                  </span>
                  <h3 className="text-base font-bold text-[#F7F7F7] uppercase tracking-tight">Cuestionario de Diagnóstico</h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-primary font-bold">PASO {step} DE 5</span>
                  <div className="w-20 bg-white/10 h-1 rounded-full mt-1 overflow-hidden">
                    <div className="bg-primary h-full transition-all duration-300" style={{ width: `${step * 20}%` }} />
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                <div className="min-h-[250px] flex flex-col justify-between">
                  {renderDiagnosticStep()}
                  
                  {/* Step Navigation buttons */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center gap-4">
                    {step > 1 ? (
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={handleBack}
                        className="text-xs font-mono text-muted-foreground hover:text-primary uppercase tracking-wider gap-1.5"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Atrás
                      </Button>
                    ) : (
                      <div />
                    )}

                    {step < 5 ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="bg-primary hover:bg-primary-light text-black font-bold font-sans rounded-xl px-5 py-2.5 text-xs uppercase tracking-widest gap-1.5 transition-all duration-300"
                      >
                        Siguiente
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    ) : null}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
