import { ICONS } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { IconBox } from "@/components/ui/icon-box"
import { CardTop, MnCard } from "@/components/ui/mn-card"
import { SERVICIOS, SERVICIOS_INDEX as C } from "@/lib/content/servicios"

/** Rejilla 4×2 de líneas de servicio (reutilizada en /servicios). */
export function ServiceGrid() {
  return (
    <ul className="mn-grid mn-grid--4">
      {SERVICIOS.map((s, i) => (
        <li key={s.slug}>
          <Reveal delay={(i % 4) * 60}>
            <MnCard href={`/servicios/${s.slug}`} label={`${s.title}: ${C.cardLink}`}>
              <CardTop icon={<IconBox icon={ICONS[s.icon]} />} ghost={s.n} />
              <h3 className="mn-h3 mt-8">{s.title}</h3>
              <p className="mn-body mt-3">{s.short}</p>
              <div className="mn-card__foot">
                <span className="mn-code text-[13px] text-[var(--mn-lime)]">{C.cardLink} →</span>
              </div>
            </MnCard>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}

export function ServiceLines() {
  return (
    <Section id="servicios" band>
      <SectionHeader label={C.label} title={C.title} intro={C.intro} />
      <div className="mn-sec-body">
        <ServiceGrid />
      </div>
    </Section>
  )
}
