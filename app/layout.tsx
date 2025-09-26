// app/layout.tsx
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const site = {
  name: "Korsen",
  slogan: "Innovación y Desarrollo Tecnológico",
  url: "https://korsen.com", // cambia por tu dominio
  ogImage: "https://korsen.com/og-image.jpg",
  locale: "es_DO",
  twitter: "@korsen", // opcional
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.slogan}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Korsen transforma ideas en soluciones digitales. Software a medida, apps móviles y plataformas web escalables para impulsar tu negocio.",
  keywords: [
    "Korsen",
    "desarrollo de software",
    "aplicaciones móviles",
    "plataformas web",
    "innovación",
    "soluciones digitales",
  ],
  applicationName: site.name,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} | ${site.slogan}`,
    description:
      "Creamos software, apps y plataformas web listas para escalar.",
    siteName: site.name,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.slogan}`,
    description:
      "Transformamos ideas en productos digitales de alto impacto.",
    images: [site.ogImage],
    creator: site.twitter,
  },
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  category: "technology",
  other: { "theme-color": "#0B0B0F" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
