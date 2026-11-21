import Image from "next/image"
import { Section } from "@/components/section"
import { CheckList } from "@/components/ui/check-list"
import { NOSOTROS } from "@/lib/content/nosotros"

/** Liderazgo: la cabecera usa el mismo patrón (etiqueta + nombre como título). */
export function Leadership() {
  const L = NOSOTROS.leadership
  return (
    <Section id="liderazgo">
      <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="relative min-h-[420px] overflow-hidden rounded-[var(--mn-r-card)] border border-[var(--mn-border-2)]">
          <Image src={L.photo} alt={L.photoAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" aria-hidden />
        </div>
        <div className="flex flex-col justify-center">
          <span className="mn-label">{L.label}</span>
          <h2 className="mn-h1 mt-5" style={{ fontSize: "clamp(32px, 3.8vw, 56px)" }}>
            {L.name}
          </h2>
          <div className="mt-6 flex items-center gap-4">
            <span className="mn-enlace" aria-hidden />
            <span className="mn-code text-sm font-medium uppercase tracking-[0.12em]">{L.role}</span>
          </div>
          <p className="mn-lead mt-6" style={{ maxWidth: "58ch" }}>
            {L.bio}
          </p>
          <p className="mn-kicker mb-1 mt-8">{L.areasKicker}</p>
          <CheckList items={L.areas} variant="chev" />
        </div>
      </div>
    </Section>
  )
}
