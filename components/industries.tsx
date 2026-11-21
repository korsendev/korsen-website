import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { MnCard } from "@/components/ui/mn-card"
import { INDUSTRIES as C } from "@/lib/content/industries"

export function Industries() {
  return (
    <Section id="industrias" band>
      <SectionHeader label={C.label} title={C.title} intro={C.intro} />
      <div className="mn-sec-body">
        <ul className="mn-grid mn-grid--5 mn-grid--m2">
          {C.items.map((it, i) => (
            <li key={it.name}>
              <Reveal delay={(i % 5) * 50}>
                <MnCard className="!p-5 sm:!p-6">
                  <span className="mn-ghostnum" style={{ fontSize: 30 }} aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mn-h3 mt-6 text-[17px]">{it.name}</h3>
                  <p className="mn-body mt-2 text-[14px]">{it.text}</p>
                </MnCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
