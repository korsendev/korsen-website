import { WHATSAPP } from "@/lib/content/global"

/** E.164 solo dígitos, sin + (ej. UK: 447848445738) */
export function getWhatsAppNumber(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "447848445738"
  return raw.replace(/\D/g, "")
}

export function buildWhatsAppUrl(message: string = WHATSAPP.message): string {
  return `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(message)}`
}
