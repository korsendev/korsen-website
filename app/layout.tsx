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
  title: "korsen.dev | Software Studio Premium",
  description:
    "Convertimos problemas de negocio en software que produce resultados. Desarrollo de software a medida, plataformas web escalables y automatizaciones inteligentes con Inteligencia Artificial.",
  generator: "korsen.dev",
  keywords: ["desarrollo de software", "software a medida", "plataformas web", "automatización", "inteligencia artificial", "desarrollo web", "aplicaciones móviles", "Korsen", "korsen.dev"],
  authors: [{ name: "korsen.dev", url: "https://www.korsen.dev" }],
  creator: "korsen.dev",
  publisher: "korsen.dev",
  icons: {
    icon: "/logokorsen.png",
    shortcut: "/logokorsen.png",
    apple: "/logokorsen.png",
  },
  openGraph: {
    title: "korsen.dev | Software Studio Premium",
    description: "Convertimos problemas de negocio en software que produce resultados. Desarrollo de software a medida, plataformas web escalables y automatizaciones inteligentes con Inteligencia Artificial.",
    url: "https://www.korsen.dev/",
    siteName: "korsen.dev",
    images: [
      {
        url: "/previewweb.png",
        width: 1200,
        height: 630,
        alt: "korsen.dev - Software que produce resultados",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "korsen.dev | Software Studio Premium",
    description: "Convertimos problemas de negocio en software que produce resultados. Desarrollo de software a medida, plataformas web escalables y automatizaciones inteligentes con Inteligencia Artificial.",
    images: ["/previewweb.png"],
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
