import { ICONS } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { IconBox } from "@/components/ui/icon-box"
import { MnCard } from "@/components/ui/mn-card"
import { Tag } from "@/components/ui/tag"
import { STACK as C, TECH_SLUGS } from "@/lib/content/stack"

export function Stack() {
  return (
    <Section id="stack">
      <SectionHeader label={C.label} title={C.title} accent={C.accent} intro={C.intro} />
      <div className="mn-sec-body">
        <ul className="mn-grid mn-grid--4">
          {C.areas.map((a, i) => (
            <li key={a.area}>
              <Reveal delay={(i % 4) * 60}>
                <MnCard>
                  <IconBox icon={ICONS[a.icon]} />
                  <h3 className="mn-h3 mt-6">{a.area}</h3>
                  <ul className="mt-5 flex flex-wrap content-start gap-2">
                    {a.tags.map((t) => (
                      <li key={t}>
                        <Tag href={TECH_SLUGS[t] ? `/tecnologias/${TECH_SLUGS[t]}` : undefined}>{t}</Tag>
                      </li>
                    ))}
                  </ul>
                </MnCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
