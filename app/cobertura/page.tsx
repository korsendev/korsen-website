import type { Metadata } from "next"
import { Coverage } from "@/components/coverage"
import { CtaFinal } from "@/components/cta-final"

export const metadata: Metadata = {
  title: "Cobertura",
  description: "Sede en República Dominicana y atención remota en Norteamérica, Latinoamérica y Europa, con reuniones en tu horario.",
  alternates: { canonical: "/cobertura" },
}

export default function CoberturaPage() {
  return (
    <>
      <Coverage as="h1" />
      <CtaFinal />
    </>
  )
}
