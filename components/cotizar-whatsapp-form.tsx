"use client"

import type React from "react"
import { useState } from "react"
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
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [details, setDetails] = useState("")

  const openWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const text = composeMessage({ topicTitle, topicKind, name, email, company, details })
    const url = buildWhatsAppUrl(text)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const heading =
    topicTitle && topicKind === "servicio"
      ? `Cotizar: ${topicTitle}`
      : topicTitle && topicKind === "tecnologia"
        ? `Cotizar con ${topicTitle}`
        : topicTitle
          ? `Cotizar: ${topicTitle}`
          : "Cotizar proyecto"

  const description =
    topicTitle != null
      ? "Completa el formulario y te llevamos a WhatsApp con el mensaje listo para enviar."
      : "Describe tu idea; abriremos WhatsApp con un mensaje estructurado para el equipo de Korsen."

  return (
    <Card className="max-w-xl mx-auto bg-card/60 backdrop-blur-md border-border">
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-2xl">{heading}</CardTitle>
            <CardDescription className="mt-2 text-base">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={openWhatsApp} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Input
                placeholder="Tu nombre *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-background/50"
              />
            </div>
            <Input
              type="email"
              placeholder="Email (opcional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/50"
            />
            <Input
              placeholder="Empresa (opcional)"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="bg-background/50"
            />
          </div>
          <Textarea
            placeholder="Cuéntanos plazos, presupuesto aproximado, integraciones necesarias…"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={5}
            className="bg-background/50 resize-y min-h-[120px]"
          />
          <Button type="submit" size="lg" className="w-full gap-2">
            <MessageCircle className="h-4 w-4" />
            Continuar en WhatsApp
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            No enviamos datos a servidores: solo se abre WhatsApp con tu mensaje.
          </p>
        </form>
        <div className="mt-6 pt-6 border-t border-border">
          <Button variant="ghost" asChild className="w-full gap-2 text-muted-foreground">
            <Link href={PATH_SOLUCIONES_TECNOLOGIAS}>
              <ArrowLeft className="h-4 w-4" />
              Volver a soluciones y tecnologías
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
