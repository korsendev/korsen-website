"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, ArrowLeft } from "lucide-react"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import type { CotizarKind } from "@/lib/cotizar-topics"
import { PATH_SOLUCIONES_TECNOLOGIAS } from "@/lib/site-paths"

type Props = {
  topicTitle: string | null
  topicKind: CotizarKind | null
}

function composeMessage(params: {
  topicTitle: string | null
  topicKind: CotizarKind | null
  name: string
  email: string
  company: string
  details: string
}): string {
  const lines: string[] = ["Hola Korsen,", "", "Quiero recibir una cotización:"]

  if (params.topicTitle && params.topicKind) {
    const tipo = params.topicKind === "servicio" ? "Servicio / proyecto" : "Stack o tecnología"
    lines.push("", `• ${tipo}: ${params.topicTitle}`)
  } else if (params.topicTitle) {
    lines.push("", `• Interés: ${params.topicTitle}`)
  } else {
    lines.push("", "• Proyecto o necesidad: (a definir en detalle abajo)")
  }

  lines.push("", "---", `Nombre: ${params.name || "(no indicado)"}`)

  if (params.email.trim()) {
    lines.push(`Email: ${params.email.trim()}`)
  }
  if (params.company.trim()) {
    lines.push(`Empresa: ${params.company.trim()}`)
  }

  lines.push("", "Detalle / alcance:", params.details.trim() || "(pendiente)")

  lines.push("", "---", "Enviado desde korsen.dev")

  return lines.join("\n")
}

export function CotizarWhatsAppForm({ topicTitle, topicKind }: Props) {
  const [isMounted, setIsMounted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [details, setDetails] = useState("")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const openWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const text = composeMessage({ topicTitle, topicKind, name, email, company, details })
    const url = buildWhatsAppUrl(text)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  if (!isMounted) {
    return (
      <div className="w-full space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <div className="bg-[#050505] border border-white/5 h-12 rounded-[12px] animate-pulse" />
          </div>
          <div className="bg-[#050505] border border-white/5 h-12 rounded-[12px] animate-pulse" />
          <div className="bg-[#050505] border border-white/5 h-12 rounded-[12px] animate-pulse" />
        </div>
        <div className="bg-[#050505] border border-white/5 h-32 rounded-[12px] animate-pulse" />
        <div className="bg-primary/10 border border-primary/20 h-12 rounded-[12px] animate-pulse" />
      </div>
    )
  }

  return (
    <div className="w-full">
      <form onSubmit={openWhatsApp} className="space-y-4" suppressHydrationWarning>
        <div className="grid gap-4 sm:grid-cols-2" suppressHydrationWarning>
          <div className="sm:col-span-2" suppressHydrationWarning>
            <Input
              placeholder="Tu nombre *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              suppressHydrationWarning
              className="bg-[#050505] border-white/10 focus:border-primary/50 text-[#F7F7F7] placeholder-[#525252] rounded-[12px] py-6 font-mono text-sm w-full outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div suppressHydrationWarning>
            <Input
              type="email"
              placeholder="Email (opcional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              suppressHydrationWarning
              className="bg-[#050505] border-white/10 focus:border-primary/50 text-[#F7F7F7] placeholder-[#525252] rounded-[12px] py-6 font-mono text-sm w-full outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div suppressHydrationWarning>
            <Input
              placeholder="Empresa (opcional)"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              suppressHydrationWarning
              className="bg-[#050505] border-white/10 focus:border-primary/50 text-[#F7F7F7] placeholder-[#525252] rounded-[12px] py-6 font-mono text-sm w-full outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
        <div suppressHydrationWarning>
          <Textarea
            placeholder="Cuéntanos plazos, presupuesto aproximado, integraciones necesarias…"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={5}
            suppressHydrationWarning
            className="bg-[#050505] border-white/10 focus:border-primary/50 text-[#F7F7F7] placeholder-[#525252] rounded-[12px] font-mono text-sm w-full outline-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none min-h-[120px]"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-b from-korsen-primary-light to-korsen-primary text-black font-bold font-sans rounded-[12px] py-6 text-xs uppercase tracking-widest shadow-[0_4px_12px_rgba(196,255,0,0.15)] hover:shadow-[0_6px_24px_rgba(196,255,0,0.3)] transition-all duration-300"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          Continuar en WhatsApp
        </Button>
        <p className="text-[10px] font-mono text-muted-foreground text-center uppercase tracking-wider">
          // No enviamos datos a servidores: solo abre WhatsApp con tu mensaje.
        </p>
      </form>
      <div className="mt-6 pt-6 border-t border-white/5">
        <Button variant="ghost" asChild className="w-full gap-2 text-muted-foreground hover:text-primary hover:bg-primary/5 font-mono text-xs uppercase tracking-wider rounded-full transition-colors">
          <Link href={PATH_SOLUCIONES_TECNOLOGIAS}>
            <ArrowLeft className="h-4 w-4" />
            Volver a soluciones y tecnologías
          </Link>
        </Button>
      </div>
    </div>
  )
}
