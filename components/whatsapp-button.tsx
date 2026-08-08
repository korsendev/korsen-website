"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, Send, ArrowRight } from "lucide-react"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

type Message = {
  sender: "kori" | "user"
  text: string
}

export function WhatsAppButton() {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  
  // Chat flow state
  const [currentStep, setCurrentStep] = useState(1)
  const [messages, setMessages] = useState<Message[]>([
    { sender: "kori", text: "¡Hola! Soy Kori, asistente de korsen.dev. ¿Qué te gustaría construir?" },
  ])
  
  // Collected data
  const [tipo, setTipo] = useState("")
  const [objetivo, setObjetivo] = useState("")
  const [etapa, setEtapa] = useState("")
  const [presupuesto, setPresupuesto] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  if (!isMounted) return null

  const handleSelectOption = (option: string) => {
    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: option }])
    
    if (currentStep === 1) {
      setTipo(option)
      setCurrentStep(2)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "kori", text: "¿Cuál es el objetivo principal de este proyecto?" },
        ])
      }, 600)
    } else if (currentStep === 2) {
      setObjetivo(option)
      setCurrentStep(3)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "kori", text: "¿En qué etapa se encuentra actualmente?" },
        ])
      }, 600)
    } else if (currentStep === 3) {
      setEtapa(option)
      setCurrentStep(4)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "kori", text: "¿Qué presupuesto estimado tienes contemplado?" },
        ])
      }, 600)
    } else if (currentStep === 4) {
      setPresupuesto(option)
      setCurrentStep(5)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "kori", text: "¡Entendido! Por último, ingresa tu nombre para saber con quién hablo:" },
        ])
      }, 600)
    }
  }

  const handleTextInputSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const value = inputValue.trim()
    setInputValue("")
    
    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: value }])

    if (currentStep === 5) {
      setName(value)
      setCurrentStep(6)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "kori", text: "Excelente. Por favor, escribe tu correo electrónico:" },
        ])
      }, 600)
    } else if (currentStep === 6) {
      setEmail(value)
      setCurrentStep(7)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "kori",
            text: "¡Perfecto! Ya sinteticé la información. Haz clic abajo para abrir nuestro chat de WhatsApp con un ingeniero.",
          },
        ])
      }, 600)
    }
  }

  const handleWhatsAppRedirect = () => {
    const isUnsure = tipo.includes("No estoy seguro")
    const introText = isUnsure
      ? "Hola, necesito ayuda de un ingeniero para definir mi proyecto técnico con korsen.dev."
      : "Hola, quiero iniciar una evaluación técnica para mi proyecto con korsen.dev."

    const message = [
      introText,
      "",
      `Requerimiento: ${tipo || "No especificado"}`,
      `Objetivo: ${objetivo || "No especificado"}`,
      `Etapa: ${etapa || "No especificada"}`,
      `Presupuesto: ${presupuesto || "No especificado"}`,
      "",
      `Nombre: ${name}`,
      `Email: ${email}`,
      "",
      "Me gustaría agendar una breve sesión de descubrimiento.",
      "",
      "Enviado desde el asistente virtual Kori // korsen.dev"
    ].filter(Boolean).join("\n")

    const url = buildWhatsAppUrl(message)
    window.open(url, "_blank", "noopener,noreferrer")
    
    // Reset chat
    setIsOpen(false)
    setCurrentStep(1)
    setMessages([
      { sender: "kori", text: "¡Hola! Soy Kori, asistente de korsen.dev. ¿Qué te gustaría construir?" },
    ])
    setTipo("")
    setObjetivo("")
    setEtapa("")
    setPresupuesto("")
    setName("")
    setEmail("")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono">
      {/* Chat Window Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[330px] sm:w-[360px] h-[480px] bg-[#0B0B0B] border border-white/15 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden z-50 text-left">
          <div className="corner-bracket top-left opacity-35" />
          <div className="corner-bracket top-right opacity-35" />
          <div className="corner-bracket bottom-left opacity-35" />
          <div className="corner-bracket bottom-right opacity-35" />

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-white/[0.01]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <div>
                <span className="text-xs font-bold text-foreground block">kori</span>
                <span className="text-[9px] text-muted-foreground block">// assistant_instance</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="Cerrar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/5 scroll-smooth">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed font-sans ${
                    msg.sender === "user"
                      ? "bg-primary/10 border border-primary/20 text-foreground text-right"
                      : "bg-white/[0.02] border border-white/5 text-[#A6A6A6] text-left"
                  }`}
                >
                  {msg.sender === "kori" && (
                    <span className="block text-[8px] font-mono text-primary uppercase tracking-widest mb-1">
                      kori:
                    </span>
                  )}
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Interactive Input Options Area */}
          <div className="p-4 border-t border-white/5 bg-white/[0.01]">
            
            {/* Step 1: Qué quieres construir */}
            {currentStep === 1 && (
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Software a medida",
                  "Plataforma web",
                  "Aplicación móvil",
                  "E-commerce",
                  "Automatización",
                  "IA / ML",
                  "No estoy seguro",
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelectOption(opt)}
                    className={`py-2.5 px-2 border border-white/5 hover:border-primary/30 rounded-xl bg-[#050505] text-[10px] text-left text-muted-foreground hover:text-primary transition-all duration-300 font-mono uppercase tracking-wider ${
                      opt.includes("No estoy seguro") ? "col-span-2 text-center" : ""
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Objetivo */}
            {currentStep === 2 && (
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Vender más",
                  "Automatizar",
                  "Nuevo producto",
                  "Reducir costos",
                  "Otro",
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelectOption(opt)}
                    className="py-2.5 px-2 border border-white/5 hover:border-primary/30 rounded-xl bg-[#050505] text-[10px] text-left text-muted-foreground hover:text-primary transition-all duration-300 font-mono uppercase tracking-wider"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Etapa */}
            {currentStep === 3 && (
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Idea inicial",
                  "Requerimientos",
                  "Diseño listo",
                  "Sistema actual",
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelectOption(opt)}
                    className="py-2.5 px-2 border border-white/5 hover:border-primary/30 rounded-xl bg-[#050505] text-[10px] text-left text-muted-foreground hover:text-primary transition-all duration-300 font-mono uppercase tracking-wider"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* Step 4: Presupuesto */}
            {currentStep === 4 && (
              <div className="grid grid-cols-2 gap-2">
                {[
                  "US$1k – US$3k",
                  "US$3k – US$10k",
                  "US$10k – US$25k",
                  "US$25k+",
                  "No estoy seguro",
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelectOption(opt)}
                    className={`py-2.5 px-2 border border-white/5 hover:border-primary/30 rounded-xl bg-[#050505] text-[10px] text-left text-muted-foreground hover:text-primary transition-all duration-300 font-mono uppercase tracking-wider ${
                      opt.includes("No estoy seguro") ? "col-span-2 text-center" : ""
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* Step 5 & 6: TextInput Inputs */}
            {(currentStep === 5 || currentStep === 6) && (
              <form onSubmit={handleTextInputSubmit} className="flex gap-2">
                <input
                  type={currentStep === 6 ? "email" : "text"}
                  placeholder={currentStep === 6 ? "Ingresa tu email *" : "Ingresa tu nombre *"}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  required
                  className="flex-1 bg-[#050505] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-foreground placeholder-[#525252] font-mono outline-none focus:border-primary/50"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-light text-black font-bold p-3 rounded-xl transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Step 7: Redirection WhatsApp */}
            {currentStep === 7 && (
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-korsen-primary-light to-korsen-primary text-black font-bold font-sans rounded-xl py-3.5 text-xs uppercase tracking-widest shadow-[0_4px_12px_rgba(196,255,0,0.2)] hover:shadow-[0_6px_20px_rgba(196,255,0,0.35)] transition-all duration-300 cursor-pointer"
              >
                {tipo.includes("No estoy seguro") ? "Hablar con un ingeniero" : "Iniciar chat de WhatsApp"}
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

          </div>
        </div>
      )}

      {/* Floating Kori Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-[#0B0B0B]/90 hover:bg-[#050505] border border-primary/20 hover:border-primary/50 text-foreground font-mono rounded-full px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_15px_rgba(196,255,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(196,255,0,0.15)] hover:-translate-y-0.5 transition-all duration-300 select-none cursor-pointer"
        aria-label="Toggle Kori chatbot window"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <MessageCircle className="h-4 w-4 text-primary" />
        <span className="text-[10px] uppercase tracking-widest font-extrabold">
          {isOpen ? "Cerrar asistente" : "kori // chat"}
        </span>
      </button>
    </div>
  )
}
