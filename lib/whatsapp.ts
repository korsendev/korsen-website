/** E.164 digits only, sin + (ej. República Dominicana NANP: 18492811452) */
export function getWhatsAppNumber(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "18492811452"
  return raw.replace(/\D/g, "")
}

export function buildWhatsAppUrl(message: string): string {
  const phone = getWhatsAppNumber()
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
