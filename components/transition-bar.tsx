"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { TRANSITION_BAR } from "@/lib/content/global"

export function TransitionBar() {
  function close() {
    document.documentElement.setAttribute("data-bar-closed", "")
    try {
      localStorage.setItem(TRANSITION_BAR.storageKey, "1")
    } catch {
      /* sin almacenamiento: se cierra solo en esta visita */
    }
  }

  return (
    <div className="mn-bar relative border-b border-[var(--mn-border-2)] bg-[var(--mn-surface-1)]" role="region" aria-label="Aviso de cambio de marca">
      <div className="mn-container flex items-center justify-center gap-3 py-2.5 pr-12 text-center text-[13px] leading-snug sm:pr-[var(--mn-gutter)]">
        <p className="text-[var(--mn-text-2)]">
          <strong className="font-semibold text-[var(--mn-text)]">{TRANSITION_BAR.strong}</strong> {TRANSITION_BAR.text}{" "}
          <Link href={TRANSITION_BAR.href} className="whitespace-nowrap font-medium text-[var(--mn-accent)] underline-offset-4 hover:underline">
            {TRANSITION_BAR.cta} →
          </Link>
        </p>
      </div>
      <button
        type="button"
        onClick={close}
        aria-label="Cerrar aviso"
        className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-md text-[var(--mn-text-2)] hover:text-[var(--mn-text)] sm:right-[max(12px,calc(var(--mn-gutter)-40px))]"
      >
        <X size={16} strokeWidth={1.75} />
      </button>
    </div>
  )
}
