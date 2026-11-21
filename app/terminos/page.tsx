import type { Metadata } from "next"
import { LegalView } from "@/components/legal-page"
import { TERMINOS } from "@/lib/content/legal"

export const metadata: Metadata = {
  title: TERMINOS.seoTitle,
  description: TERMINOS.seoDescription,
  alternates: { canonical: "/terminos" },
}

export default function TerminosPage() {
  return <LegalView page={TERMINOS} />
}
