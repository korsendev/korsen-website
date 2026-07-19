import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Space_Grotesk, Sora, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Korsen - Innovación y Desarrollo Tecnológico",
  description:
    "Transformamos ideas en soluciones digitales escalables. Desarrollo de software, aplicaciones móviles y plataformas web.",
  generator: "Korsen",
  keywords: ["desarrollo web", "aplicaciones móviles", "software", "tecnología", "Korsen", "Korsen Dev", "Korsen Dev Studio", "Korsen Dev Studio Studio", "Korsen Dev Studio Studio Studio"],
  authors: [{ name: "Korsen", url: "https://korsen.dev" }],
  creator: "Korsen",
  publisher: "Korsen",
  openGraph: {
    title: "Korsen - Innovación y Desarrollo Tecnológico",
    description: "Transformamos ideas en soluciones digitales escalables. Desarrollo de software, aplicaciones móviles y plataformas web.",
    url: "https://korsen.dev",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`dark ${spaceGrotesk.variable} ${sora.variable} ${ibmPlexMono.variable}`}>
      <body className={`antialiased`}>
        <Suspense>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
