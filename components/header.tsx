"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HEADER_CTA, NAV, SITE } from "@/lib/content/global"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-50 h-[76px]">
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 -z-10 border-b backdrop-blur-[16px] transition-colors",
          scrolled || open ? "border-[var(--mn-border-1)] bg-[rgba(5,5,5,0.88)]" : "border-transparent bg-[rgba(5,5,5,0.72)]",
        )}
      />
      <div className="mn-container flex h-full items-center justify-between gap-6">
        <Link href="/" aria-label="MAYNODE — Inicio" className="flex shrink-0 items-center">
          <Image src="/brand/maynode-logo.svg" alt="MAYNODE" width={66} height={36} priority unoptimized className="h-9 w-auto" />
        </Link>

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-colors hover:text-[var(--mn-text)]",
                    isActive(item.href) ? "text-[var(--mn-text)]" : "text-[var(--mn-text-2)]",
                  )}
                >
                  {item.label}
                  {isActive(item.href) ? <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[var(--mn-lime)]" /> : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button href={HEADER_CTA.href} compact arrow className="hidden sm:inline-flex">
            {HEADER_CTA.label}
          </Button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--mn-border-2)] text-[var(--mn-text)] xl:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="menu-movil" className="fixed inset-x-0 bottom-0 top-[76px] z-40 overflow-y-auto bg-[var(--mn-bg)] xl:hidden" style={{ top: "76px" }}>
          <div className="mn-container flex min-h-full flex-col py-8">
            <nav aria-label="Móvil">
              <ul>
                {NAV.map((item) => (
                  <li key={item.href} className="border-b border-[var(--mn-border-1)]">
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn("block py-4 text-2xl font-extrabold uppercase tracking-tight", isActive(item.href) ? "text-[var(--mn-lime)]" : "text-[var(--mn-text)]")}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Button href={HEADER_CTA.href} arrow className="mt-8 w-full justify-center sm:hidden">
              {HEADER_CTA.label}
            </Button>
            <div className="mt-auto pt-10 font-semibold leading-relaxed text-[var(--mn-text)]">
              <a href={`mailto:${SITE.email}`} className="block hover:text-[var(--mn-lime)]">
                {SITE.email}
              </a>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="block hover:text-[var(--mn-lime)]">
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
