"use client"

import { useEffect } from "react"

/**
 * Traducción automática según el idioma del navegador, sin subrutas.
 * El script de arranque (lib/i18n/boot.ts) decide el idioma y lo deja en <html data-lang>;
 * aquí solo se carga el diccionario cuando hace falta (los visitantes en español no descargan nada).
 */
export function AutoTranslate() {
  useEffect(() => {
    const root = document.documentElement
    if (root.getAttribute("data-lang") !== "en") {
      root.classList.remove("i18n-pending")
      return
    }
    let stop: (() => void) | undefined
    let cancelled = false
    Promise.all([import("@/lib/i18n/en.json"), import("@/lib/i18n/translate")])
      .then(([dict, mod]) => {
        if (cancelled) return
        stop = mod.startTranslator(new Map(Object.entries(dict.default as Record<string, string>)))
      })
      .catch(() => {
        /* sin diccionario: el sitio queda en español */
      })
      .finally(() => requestAnimationFrame(() => root.classList.remove("i18n-pending")))
    return () => {
      cancelled = true
      stop?.()
    }
  }, [])
  return null
}
