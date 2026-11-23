import Image from "next/image"
import Link from "next/link"
import { FOOTER, SITE } from "@/lib/content/global"

export function Footer() {
  return (
    <footer className="border-t border-[var(--mn-border-2)] bg-[var(--mn-surface-1)]">
      <div className="mn-container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2.9fr] lg:gap-16">
          <div>
            <Image src="/brand/maynode-logo.svg" alt="MAYNODE" width={160} height={87} unoptimized className="mn-logo--dark h-auto w-[160px]" />
            <Image src="/brand/maynode-logo-negro.svg" alt="MAYNODE" width={160} height={87} unoptimized className="mn-logo--light h-auto w-[160px]" />
            <p className="mn-body mt-6 max-w-[34ch]">{FOOTER.phrase}</p>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {FOOTER.columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="mn-kicker mb-5">{col.title}</h2>
                <ul className="space-y-0.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="mn-tap text-sm text-[var(--mn-text-2)] transition-colors hover:text-[var(--mn-text)]">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <div>
              <h2 className="mn-kicker mb-5">{FOOTER.contactTitle}</h2>
              <ul className="space-y-3 text-sm font-semibold">
                <li>
                  <Link href="/" className="transition-colors hover:text-[var(--mn-accent)]">
                    {SITE.domain}
                  </Link>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="break-all transition-colors hover:text-[var(--mn-accent)]">
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-[var(--mn-accent)]">
                    {SITE.phone}
                  </a>
                </li>
                <li className="font-normal text-[var(--mn-text-2)]">{SITE.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--mn-border-2)] pt-6 text-xs text-[var(--mn-text-3)] sm:flex-row sm:items-center sm:justify-between">
          <p className="mn-code">{FOOTER.legal}</p>
          <p className="mn-code flex gap-4">
            {FOOTER.legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-[var(--mn-accent)]">
                {l.label}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </footer>
  )
}
