import type { Metadata } from "next"
import { LegalView } from "@/components/legal-page"
import { PRIVACIDAD } from "@/lib/content/legal"

export const metadata: Metadata = {
  title: PRIVACIDAD.seoTitle,
  description: PRIVACIDAD.seoDescription,
  alternates: { canonical: "/privacidad" },
}

export default function PrivacidadPage() {
  return <LegalView page={PRIVACIDAD} />
}
