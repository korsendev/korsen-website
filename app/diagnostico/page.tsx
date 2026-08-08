"use client"

import { useState, useEffect } from "react"
import { PageWrapper } from "@/components/page-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Database, 
  CreditCard, 
  Layers, 
  Globe, 
  Bot, 
  Check,
  Send,
  Sparkles,
  MessageSquareQuote
} from "lucide-react"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

// Define interfaces for options
interface OptionCard {
  id: string
  title: string
  desc: string
  icon?: React.ComponentType<any>
}

export default function DiagnosticoPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [step, setStep] = useState(1)
  
  // High-precision diagnostic choices
  const [projectType, setProjectType] = useState<string>("")
  const [requirements, setRequirements] = useState<string[]>([])
  const [painPoint, setPainPoint] = useState<string>("")
  const [timeline, setTimeline] = useState<string>("")
  const [budget, setBudget] = useState<string>("")
  
  // Contact info
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [details, setDetails] = useState("")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  // Option lists
  const projectTypes: OptionCard[] = [
    { id: "software", title: "Software a Medida", desc: "ERP, CRM, gestores internos o sistemas de logística a medida.", icon: Layers },
    { id: "saas", title: "Plataforma Web / SaaS", desc: "Portales de clientes, dashboards y herramientas por suscripción.", icon: Globe },
    { id: "mobile", title: "Aplicación Móvil", desc: "Apps nativas o híbridas para iOS y Android.", icon: Code2 },
    { id: "ecommerce", title: "E-commerce & Pagos", desc: "Tiendas en línea, cobros recurrentes y facturación electrónica.", icon: CreditCard },
    { id: "automation", title: "Automatización & APIs", desc: "Integraciones de sistemas, sincronización de stock y flujos automáticos.", icon: Database },
    { id: "ai", title: "Inteligencia Artificial", desc: "Integración de LLMs, chatbots inteligentes y automatización cognitiva.", icon: Bot },
  ]

  const reqOptions: OptionCard[] = [
    { id: "auth", title: "Control de Usuarios", desc: "Registro, login con Google/Apple y roles con permisos diferenciados." },
    { id: "db", title: "Base de Datos", desc: "Almacenamiento seguro de transacciones, inventarios o clientes." },
    { id: "payments", title: "Pasarela de Pagos", desc: "Integración con Stripe, PayPal o bancos locales." },
    { id: "dashboard", title: "Panel Administrativo", desc: "Dashboard privado para gestionar datos y exportar reportes." },
    { id: "realtime", title: "Tiempo Real & Chats", desc: "Notificaciones instantáneas o chat interno entre usuarios." },
    { id: "thirdparty", title: "APIs de Terceros", desc: "Conexión con ERPs (SAP, Odoo), CRMs o sistemas de envío." },
    { id: "cloud", title: "Infraestructura Cloud", desc: "Alojamiento escalable en la nube (AWS, Azure) listo para picos de carga." },
    { id: "multitenant", title: "Multi-inquilino (SaaS)", desc: "Soporte para múltiples empresas bajo un mismo sistema." },
  ]

  const painPoints: OptionCard[] = [
    { id: "slow", title: "Mi sistema actual es lento o se cae constantemente." },
    { id: "manual", title: "Perdemos mucho tiempo en tareas manuales y archivos Excel." },
    { id: "disconnected", title: "Mis herramientas de software no se comunican entre sí." },
    { id: "newidea", title: "Tengo una idea de producto pero no sé cómo estructurarla técnicamente." },
    { id: "legacy", title: "Quiero migrar o actualizar mi código antiguo y desactualizado." },
  ]

  const timelines: OptionCard[] = [
    { id: "fast", title: "Lanzamiento Rápido (MVP)", desc: "Entrar al mercado rápido para probar con usuarios (6-8 semanas)." },
    { id: "standard", title: "Plazo Estándar de Ingeniería", desc: "Desarrollo completo planificado por fases (3-5 meses)." },
    { id: "continuous", title: "Soporte & Desarrollo Continuo", desc: "Equipo técnico dedicado para evolucionar un sistema existente." },
  ]

  const budgets: OptionCard[] = [
    { id: "b1", title: "US$1,000 – US$3,000" },
    { id: "b2", title: "US$3,000 – US$10,000" },
    { id: "b3", title: "US$10,000 – US$25,000" },
    { id: "b4", title: "US$25,000+" },
    { id: "b5", title: "A evaluar con un ingeniero" },
  ]

  const toggleRequirement = (reqTitle: string) => {
    if (requirements.includes(reqTitle)) {
      setRequirements(requirements.filter((r) => r !== reqTitle))
    } else {
      setRequirements([...requirements, reqTitle])
    }
  }

  // Auto-recommendation system based on inputs
  const getRecommendation = () => {
    const isMobile = projectType.includes("Móvil") || projectType.includes("mobile")
    const isAI = projectType.includes("Inteligencia") || requirements.includes("IA")
    const isEcommerce = projectType.includes("E-commerce") || requirements.includes("Pasarela de Pagos")

    if (isAI) {
      return {
        stack: "Next.js + Python (FastAPI/LangChain) + PostgreSQL + OpenAI/Claude API + Vercel / AWS",
        desc: "Arquitectura híbrida optimizada para el procesamiento inteligente de datos. Separamos la interfaz del motor cognitivo para asegurar velocidad y modularidad."
      }
    }
    if (isMobile) {
      return {
        stack: "Flutter / React Native + Node.js (TypeScript) + NestJS + PostgreSQL + AWS Cloud",
        desc: "Ideal para mantener una base de código unificada para iOS y Android, respaldada por un servidor transaccional robusto y seguro en AWS."
      }
    }
    if (isEcommerce) {
      return {
        stack: "Next.js (App Router) + Stripe API + Tailwind CSS + PostgreSQL + Supabase / Vercel",
        desc: "Plataforma de comercio electrónico con carga ultra rápida, optimizada para SEO técnico y procesamiento seguro de cobros mediante pasarelas mundiales."
      }
    }
    return {
      stack: "Next.js (React) + Node.js (TypeScript) + PostgreSQL + Vercel / Docker en AWS",
      desc: "Nuestra arquitectura estándar de alto rendimiento: código fuertemente tipado en TypeScript, base de datos relacional robusta y hosting escalable sin servidores dedicados."
    }
  }

  const handleWhatsAppSend = () => {
    const isUnsure = projectType.includes("No estoy seguro")
    const introText = isUnsure 
      ? "Hola, necesito ayuda para definir mi proyecto técnico con korsen.dev. Adjunto mi diagnóstico:"
      : "Hola, he generado una ficha de diagnóstico técnico y me gustaría cotizar mi proyecto con un ingeniero:"

    const message = [
      introText,
      "",
      `📝 FICHA DE DIAGNÓSTICO KORSEN`,
      `===============================`,
      `• Tipo de Proyecto: ${projectType}`,
      `• Requerimientos Técnicos:`,
      requirements.length > 0 ? requirements.map(r => `  - ${r}`).join("\n") : "  - Ninguno seleccionado",
      `• Dolor Operacional: ${painPoint}`,
      `• Plazos: ${timeline}`,
      `• Presupuesto Estimado: ${budget}`,
      `===============================`,
      `• Nombre: ${name}`,
      `• Email: ${email}`,
      company ? `• Empresa: ${company}` : "",
      phone ? `• Teléfono: ${phone}` : "",
      `• Detalles del Proyecto:`,
      details || "Sin comentarios adicionales",
      "",
      `Enviado desde el sistema de diagnóstico de korsen.dev`
    ].filter(Boolean).join("\n")

    const url = buildWhatsAppUrl(message)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <PageWrapper showBgEffects={false}>
      <section className="relative pt-36 pb-32 bg-[#050505] min-h-screen overflow-hidden">
        {/* Background Grid and Glowing Orb */}
        <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-primary/3 rounded-full blur-[200px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Header */}
          <div className="text-left mb-12 border-b border-white/5 pb-8">
            <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-3">// project_evaluator_v2.0</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase text-[#F7F7F7] tracking-tight">Evaluador de Proyecto</h1>
            <p className="text-sm text-[#A6A6A6] mt-2 font-sans">
              Responde las especificaciones técnicas para generar tu Ficha de Diagnóstico. Te ayudará a estimar costos y plazos reales.
            </p>

            {/* Stepper bar */}
            {step <= 6 && (
              <div className="mt-8 flex items-center justify-between gap-4 max-w-3xl">
                <div className="flex-1 bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full transition-all duration-300" style={{ width: `${(step / 6) * 100}%` }} />
                </div>
                <span className="text-[10px] font-mono text-primary font-bold whitespace-nowrap">PASO {step} DE 6</span>
              </div>
            )}
          </div>

          <div className="min-h-[380px] flex flex-col justify-between">
            {/* Step 1: Tipo de Proyecto */}
            {step === 1 && (
              <div className="space-y-6 text-left">
                <h3 className="text-lg font-bold text-foreground font-sans uppercase tracking-tight">// 1. Selecciona el tipo de solución</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {projectTypes.map((t) => {
                    const Icon = t.icon || Layers
                    const isSelected = projectType === t.title
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => {
                          setProjectType(t.title)
                          setStep(2)
                        }}
                        className={`group p-5 rounded-2xl border text-left transition-all duration-300 relative ${
                          isSelected
                            ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(196,255,0,0.1)]"
                            : "border-white/5 bg-[#0B0B0B] text-foreground hover:border-white/20"
                        }`}
                      >
                        <div className="corner-bracket top-left opacity-30 group-hover:opacity-100 transition-opacity" />
                        <div className="corner-bracket top-right opacity-30 group-hover:opacity-100 transition-opacity" />
                        <div className="corner-bracket bottom-left opacity-30 group-hover:opacity-100 transition-opacity" />
                        <div className="corner-bracket bottom-right opacity-30 group-hover:opacity-100 transition-opacity" />

                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-primary/30 transition-colors">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <h4 className="text-sm font-bold uppercase tracking-wide mb-1.5">{t.title}</h4>
                        <p className="text-[11px] text-muted-foreground leading-normal font-sans font-medium">{t.desc}</p>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Requerimientos Técnicos (Multiselección) */}
            {step === 2 && (
              <div className="space-y-6 text-left">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-foreground font-sans uppercase tracking-tight">// 2. Componentes y Módulos requeridos</h3>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">(Multiselección)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {reqOptions.map((t) => {
                    const isSelected = requirements.includes(t.title)
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => toggleRequirement(t.title)}
                        className={`group p-4 rounded-xl border text-left transition-all duration-300 relative ${
                          isSelected
                            ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(196,255,0,0.1)]"
                            : "border-white/5 bg-[#0B0B0B] text-foreground hover:border-white/20"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider">{t.title}</h4>
                          <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                            isSelected ? "border-primary bg-primary" : "border-white/20 bg-transparent"
                          }`}>
                            {isSelected && <Check className="w-2.5 h-2.5 text-black stroke-[3]" />}
                          </div>
                        </div>
                        <p className="text-[10px] text-muted-foreground leading-snug font-sans font-medium">{t.desc}</p>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Dolor Operacional */}
            {step === 3 && (
              <div className="space-y-6 text-left">
                <h3 className="text-lg font-bold text-foreground font-sans uppercase tracking-tight">// 3. ¿Cuál es el problema principal a resolver?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {painPoints.map((t) => {
                    const isSelected = painPoint === t.title
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => {
                          setPainPoint(t.title)
                          setStep(4)
                        }}
                        className={`group p-5 rounded-2xl border text-left transition-all duration-300 relative ${
                          isSelected
                            ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(196,255,0,0.1)]"
                            : "border-white/5 bg-[#0B0B0B] text-foreground hover:border-white/20"
                        }`}
                      >
                        <div className="corner-bracket top-left opacity-30" />
                        <div className="corner-bracket top-right opacity-30" />
                        <div className="corner-bracket bottom-left opacity-30" />
                        <div className="corner-bracket bottom-right opacity-30" />

                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <h4 className="text-xs font-bold uppercase tracking-wider leading-relaxed">{t.title}</h4>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Plazos */}
            {step === 4 && (
              <div className="space-y-6 text-left">
                <h3 className="text-lg font-bold text-foreground font-sans uppercase tracking-tight">// 4. Plazos estimados de entrega</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {timelines.map((t) => {
                    const isSelected = timeline === t.title
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => {
                          setTimeline(t.title)
                          setStep(5)
                        }}
                        className={`group p-5 rounded-2xl border text-left transition-all duration-300 relative ${
                          isSelected
                            ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(196,255,0,0.1)]"
                            : "border-white/5 bg-[#0B0B0B] text-foreground hover:border-white/20"
                        }`}
                      >
                        <div className="corner-bracket top-left opacity-30 animate-pulse" />
                        <div className="corner-bracket top-right opacity-30 animate-pulse" />
                        <div className="corner-bracket bottom-left opacity-30 animate-pulse" />
                        <div className="corner-bracket bottom-right opacity-30 animate-pulse" />

                        <h4 className="text-xs font-bold uppercase tracking-wider mb-2">{t.title}</h4>
                        <p className="text-[10px] text-muted-foreground leading-normal font-sans font-medium">{t.desc}</p>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 5: Presupuesto */}
            {step === 5 && (
              <div className="space-y-6 text-left">
                <h3 className="text-lg font-bold text-foreground font-sans uppercase tracking-tight">// 5. Presupuesto estimado</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {budgets.map((t) => {
                    const isSelected = budget === t.title
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => {
                          setBudget(t.title)
                          setStep(6)
                        }}
                        className={`group p-5 rounded-xl border text-left transition-all duration-300 ${
                          isSelected
                            ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(196,255,0,0.1)]"
                            : "border-white/5 bg-[#0B0B0B] text-foreground hover:border-white/20"
                        }`}
                      >
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider">{t.title}</h4>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 6: Información de Contacto */}
            {step === 6 && (
              <div className="space-y-6 text-left max-w-2xl mx-auto w-full">
                <h3 className="text-lg font-bold text-foreground font-sans uppercase tracking-tight">// 6. Completa tus datos</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Tu nombre *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-[#0B0B0B] border-white/10 text-white rounded-xl py-5 font-mono text-xs focus:border-primary/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Input
                    type="email"
                    placeholder="Tu email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-[#0B0B0B] border-white/10 text-white rounded-xl py-5 font-mono text-xs focus:border-primary/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Empresa (opcional)"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="bg-[#0B0B0B] border-white/10 text-white rounded-xl py-5 font-mono text-xs focus:border-primary/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Input
                    placeholder="Teléfono / WhatsApp *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="bg-[#0B0B0B] border-white/10 text-white rounded-xl py-5 font-mono text-xs focus:border-primary/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <Textarea
                  placeholder="Explícanos brevemente la idea del sistema o los cuellos de botella de tu negocio... *"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  required
                  rows={4}
                  className="bg-[#0B0B0B] border-white/10 text-white rounded-xl font-mono text-xs focus:border-primary/50 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                />

                <Button
                  onClick={() => setStep(7)}
                  disabled={!name || !email || !phone || !details}
                  className="w-full bg-gradient-to-r from-korsen-primary-light to-korsen-primary text-black font-extrabold font-sans rounded-xl py-6 text-xs uppercase tracking-widest shadow-[0_4px_12px_rgba(196,255,0,0.2)] hover:shadow-[0_6px_20px_rgba(196,255,0,0.35)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Generar Ficha de Diagnóstico
                  <Sparkles className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Step 7: Ficha de Diagnóstico & Recomendación de Arquitectura */}
            {step === 7 && (
              <div className="space-y-8 text-left max-w-3xl mx-auto w-full">
                <div className="border border-white/10 bg-[#0B0B0B] p-6 sm:p-8 rounded-3xl relative shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                  <div className="corner-bracket top-left opacity-35" />
                  <div className="corner-bracket top-right opacity-35" />
                  <div className="corner-bracket bottom-left opacity-35" />
                  <div className="corner-bracket bottom-right opacity-35" />

                  {/* Header of diagnostics */}
                  <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-6">
                    <div>
                      <span className="text-[9px] font-mono text-primary uppercase tracking-widest block mb-1">// diagnostics_sheet_v2.0</span>
                      <h3 className="text-xl font-extrabold uppercase text-foreground">Ficha de Diagnóstico Técnico</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-mono text-muted-foreground uppercase block">Estado</span>
                      <span className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded uppercase tracking-wider font-extrabold">Evaluado</span>
                    </div>
                  </div>

                  {/* Data grids */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-sans mb-8">
                    <div>
                      <span className="block font-mono text-[9px] text-[#737373] uppercase tracking-wider mb-1.5">Proyecto</span>
                      <p className="text-foreground font-bold">{projectType}</p>
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] text-[#737373] uppercase tracking-wider mb-1.5">Dolor Operacional</span>
                      <p className="text-[#A6A6A6] font-medium">{painPoint}</p>
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] text-[#737373] uppercase tracking-wider mb-1.5">Plazos</span>
                      <p className="text-[#A6A6A6] font-medium">{timeline}</p>
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] text-[#737373] uppercase tracking-wider mb-1.5">Presupuesto</span>
                      <p className="text-[#F7F7F7] font-bold">{budget}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="block font-mono text-[9px] text-[#737373] uppercase tracking-wider mb-1.5">Componentes Seleccionados</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {requirements.length > 0 ? (
                          requirements.map((r) => (
                            <span key={r} className="text-[9px] font-mono text-primary bg-primary/5 border border-primary/15 px-2 py-0.5 rounded">
                              {r}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-muted-foreground">Ningún requerimiento específico seleccionado</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Architecture recommendations */}
                  <div className="bg-[#050505] border border-white/5 rounded-2xl p-5 mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Terminal className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-mono text-primary uppercase tracking-widest font-bold">// recomendación_de_arquitectura</span>
                    </div>
                    <div className="space-y-3 font-sans">
                      <div>
                        <span className="block font-mono text-[9px] text-[#737373] uppercase tracking-wider">Stack Recomendado</span>
                        <p className="text-sm font-mono text-[#F7F7F7] font-bold mt-0.5">{getRecommendation().stack}</p>
                      </div>
                      <div>
                        <span className="block font-mono text-[9px] text-[#737373] uppercase tracking-wider">Justificación Técnica</span>
                        <p className="text-xs text-[#A6A6A6] leading-relaxed mt-0.5 font-medium">{getRecommendation().desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Submit to WhatsApp */}
                  <Button
                    onClick={handleWhatsAppSend}
                    className="w-full bg-primary hover:bg-primary-light text-black font-extrabold font-sans rounded-xl py-6 text-xs uppercase tracking-widest shadow-[0_4px_16px_rgba(196,255,0,0.25)] hover:shadow-[0_8px_24px_rgba(196,255,0,0.45)] transition-all duration-300 cursor-pointer"
                  >
                    Enviar diagnóstico a un ingeniero por WhatsApp
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => {
                      setStep(1)
                      setRequirements([])
                    }}
                    className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
                  >
                    Reiniciar Diagnóstico
                  </button>
                </div>
              </div>
            )}

            {/* Steps navigation footer (inside card layout) */}
            {step < 6 && (
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center gap-4">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setStep(step - 1)}
                    className="text-xs font-mono text-muted-foreground hover:text-primary uppercase tracking-wider gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Atrás
                  </Button>
                ) : (
                  <div />
                )}

                {step === 2 && (
                  <Button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={requirements.length === 0}
                    className="bg-primary hover:bg-primary-light text-black font-bold font-sans rounded-xl px-5 py-2.5 text-xs uppercase tracking-widest gap-1.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Siguiente
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )
                // Note: Other steps proceed automatically when options are clicked, or use step-based button like Step 6
                }
              </div>
            )}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
