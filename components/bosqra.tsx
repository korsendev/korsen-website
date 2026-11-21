import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { CheckList } from "@/components/ui/check-list"
import { MnCard } from "@/components/ui/mn-card"
import { Badge } from "@/components/ui/pill"
import { BOSQRA as C } from "@/lib/content/bosqra"

export function BosqraCard({ withLink = true }: { withLink?: boolean }) {
  return (
    <div className="grid gap-[var(--mn-gap)] lg:grid-cols-2">
      <MnCard hl>
        <div className="flex flex-wrap items-center gap-3">
          <span className="mn-kicker">{C.chip}</span>
          <Badge tone="ok">{C.badge}</Badge>
        </div>
        <h3 className="mn-display mt-10" style={{ fontSize: "clamp(44px, 6vw, 84px)" }}>
          {C.name}
        </h3>
        <p className="mn-lead mt-5">{C.text}</p>
        <div className="mn-card__foot flex flex-wrap items-center gap-x-6 gap-y-4">
          <Button href={C.demoHref} arrow>
            {C.demo}
          </Button>
          <Button href={C.url} variant="link" arrow>
            {C.urlLabel}
          </Button>
          {withLink ? (
            <Button href={`/productos/${C.slug}`} variant="link">
              {C.more} →
            </Button>
          ) : null}
        </div>
      </MnCard>
      <MnCard>
        <p className="mn-kicker">{C.panelKicker}</p>
        <h3 className="mn-h2 mt-4">{C.panelTitle}</h3>
        <p className="mn-body mt-4">{C.panelText}</p>
        <CheckList items={C.benefits} className="mt-6" />
      </MnCard>
    </div>
  )
}

export function Bosqra() {
  return (
    <Section id="bosqra" band>
      <SectionHeader label={C.label} title={C.title} accent={C.accent} intro={C.intro} />
      <div className="mn-sec-body">
        <Reveal className="!h-auto">
          <BosqraCard />
        </Reveal>
      </div>
    </Section>
  )
}
