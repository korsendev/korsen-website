import { ICONS } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { IconBox } from "@/components/ui/icon-box"
import { CardTop, MnCard } from "@/components/ui/mn-card"
import { ResultBox } from "@/components/ui/result-box"
import { SOLUCIONES, SOLUCIONES_INDEX as C } from "@/lib/content/soluciones"

const ICON_MAP = { refresh: ICONS.refresh, cart: ICONS.cart, database: ICONS.database, sparkles: ICONS.sparkles, phone: ICONS.phone, panels: ICONS.panels }

/** Rejilla 3×2 de soluciones (reutilizada en /soluciones). */
export function SolutionsGrid() {
  return (
    <ul className="mn-grid mn-grid--3">
      {SOLUCIONES.map((s, i) => (
        <li key={s.slug}>
          <Reveal delay={i * 60}>
            <MnCard href={`/soluciones/${s.slug}`} label={`${s.title}: ${C.cardLink}`}>
              <CardTop icon={<IconBox icon={ICON_MAP[s.icon]} />} ghost={s.n} />
              <h3 className="mn-h3 mt-8 text-[22px]">{s.title}</h3>
              <p className="mn-kicker mt-5">{C.problemKicker}</p>
              <p className="mn-body mt-1.5">{s.problem}</p>
              <div className="mt-5">
                <ResultBox>{s.result}</ResultBox>
              </div>
              <div className="mn-card__foot flex items-center justify-between gap-4 border-t border-[var(--mn-border-1)]">
                <span className="min-w-0">
                  <span className="mn-kicker block">{C.caseKicker}</span>
                  <span className="mt-0.5 block truncate text-sm font-semibold">{s.caseName}</span>
                </span>
                <span className="mn-code shrink-0 text-[13px] text-[var(--mn-lime)]">{C.cardLink} →</span>
              </div>
            </MnCard>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}

export function Solutions() {
  return (
    <Section id="soluciones">
      <SectionHeader label={C.label} title={C.title} accent={C.accent} intro={C.introHome} />
      <div className="mn-sec-body">
        <SolutionsGrid />
      </div>
    </Section>
  )
}
