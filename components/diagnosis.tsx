import { ICONS } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { IconBox } from "@/components/ui/icon-box"
import { CardTop, MnCard } from "@/components/ui/mn-card"
import { DIAGNOSIS } from "@/lib/content/diagnosis"

export function Diagnosis() {
  return (
    <Section id="diagnostico" band>
      <SectionHeader label={DIAGNOSIS.label} title={DIAGNOSIS.title} intro={DIAGNOSIS.intro} />
      <div className="mn-sec-body">
        <ul className="mn-grid mn-grid--3">
          {DIAGNOSIS.items.map((it, i) => (
            <li key={it.kicker}>
              <Reveal delay={i * 60}>
                <MnCard>
                  <CardTop icon={<IconBox icon={ICONS[it.icon]} />} />
                  <p className="mn-kicker mt-10">{it.kicker}</p>
                  <h3 className="mn-h3 mt-2.5">{it.title}</h3>
                  <p className="mn-body mt-3">{it.text}</p>
                </MnCard>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          <p className="mn-h3 text-[22px]">{DIAGNOSIS.closing}</p>
          <Button href={DIAGNOSIS.cta.href} arrow>
            {DIAGNOSIS.cta.label}
          </Button>
        </div>
      </div>
    </Section>
  )
}
