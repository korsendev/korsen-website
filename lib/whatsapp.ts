/** E.164 digits only, sin + (ej. UK: 447848445738) */
export function getWhatsAppNumber(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "447848445738"
  return raw.replace(/\D/g, "")
}

export function buildWhatsAppUrl(message: string): string {
  const phone = getWhatsAppNumber()
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
