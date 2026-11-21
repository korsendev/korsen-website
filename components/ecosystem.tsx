import { ICONS } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { IconBox } from "@/components/ui/icon-box"
import { CardTop, MnCard } from "@/components/ui/mn-card"
import { ECOSYSTEM as C } from "@/lib/content/ecosystem"

export function Ecosystem({ id = "ecosistema" }: { id?: string }) {
  return (
    <Section id={id}>
      <SectionHeader label={C.label} title={C.title} accent={C.accent} intro={C.intro} />
      <div className="mn-sec-body">
        <ul className="mn-grid mn-grid--4">
          {C.units.map((u, i) => (
            <li key={u.name}>
              <Reveal delay={(i % 4) * 60}>
                <MnCard>
                  <CardTop icon={<IconBox icon={ICONS[u.icon]} />} ghost={String(i + 1).padStart(2, "0")} />
                  <h3 className="mn-h3 mt-8">{u.name}</h3>
                  <p className="mn-body mt-3">{u.text}</p>
                </MnCard>
              </Reveal>
            </li>
          ))}
          <li>
            <Reveal delay={180}>
              <div
                className="mn-card justify-end"
                style={{ background: "var(--mn-lime)", borderColor: "var(--mn-lime)", color: "var(--mn-lime-ink)", minHeight: 200 }}
              >
                <span className="mn-enlace mb-auto" style={{ background: "var(--mn-lime-ink)", height: 12, width: 36 }} aria-hidden />
                <p className="mn-h2 mt-10">{C.final.title}</p>
                <p className="mt-2 text-base font-semibold">{C.final.text}</p>
              </div>
            </Reveal>
          </li>
        </ul>
      </div>
    </Section>
  )
}
