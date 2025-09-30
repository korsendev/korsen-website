import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Korsen - Innovación y Desarrollo Tecnológico",
  description:
    "Transformamos ideas en soluciones digitales escalables. Desarrollo de software, aplicaciones móviles y plataformas web.",
  generator: "Korsen",
  keywords: ["desarrollo web", "aplicaciones móviles", "software", "tecnología", "Korsen"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`antialiased`}>
        <Suspense>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
