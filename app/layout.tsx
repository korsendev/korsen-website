import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Sora, IBM_Plex_Mono, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { META, SITE } from "@/lib/content/global"

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: META.ogAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: META.titleDefault,
    description: META.description,
    images: ["/opengraph-image"],
  },
}

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sora.variable} ${plex.variable} ${jetbrains.variable}`}>
      <body>
        <noscript>
          <style>{`.mn-rv{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
