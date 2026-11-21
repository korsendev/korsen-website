import { MessageCircle } from "lucide-react"
import { WHATSAPP } from "@/lib/content/global"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

/** Botón flotante de WhatsApp: círculo lima de 56 px con ícono negro y tooltip. */
export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={WHATSAPP.tooltip}
      className="group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[var(--mn-lime)] text-[var(--mn-lime-ink)] shadow-[var(--mn-glow-btn)] transition-colors hover:bg-[var(--mn-lime-hover)] sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={26} strokeWidth={1.75} aria-hidden />
      <span
        role="tooltip"
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-[var(--mn-border-2)] bg-[var(--mn-surface-2)] px-3 py-2 text-xs font-medium text-[var(--mn-text)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
      >
        {WHATSAPP.tooltip}
      </span>
    </a>
  )
}
