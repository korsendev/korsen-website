import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Sora, IBM_Plex_Mono, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { META, SITE } from "@/lib/content/global"
import { TransitionBar, TRANSITION_BAR_INIT } from "@/components/transition-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

/** Antes de pintar: recuerda el cierre de la barra y activa el modo ligero en equipos modestos. */
const LITE_SCRIPT = `try{var n=navigator,m=n.deviceMemory,c=n.hardwareConcurrency,k=n.connection,s=k&&(k.saveData||/(^|-)2g$/.test(k.effectiveType||""));if((m&&m<=4)||(c&&c<=4)||s)document.documentElement.classList.add("lite")}catch(e){}`
const INIT_SCRIPT = TRANSITION_BAR_INIT + LITE_SCRIPT

// Fuente variable: un solo archivo para todos los pesos
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})
const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
})
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: META.titleDefault, template: META.titleTemplate },
  description: META.description,
  keywords: [...META.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    title: META.titleDefault,
    description: META.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: META.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META.titleDefault,
    description: META.description,
  },
}

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  viewportFit: "cover",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sora.variable} ${plex.variable} ${jetbrains.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: INIT_SCRIPT }} />
        <noscript>
          <style>{`.mn-rv{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#contenido"
          className="sr-only z-[60] rounded-lg bg-[var(--mn-lime)] px-4 py-2 font-semibold text-[var(--mn-lime-ink)] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Saltar al contenido
        </a>
        <TransitionBar />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
