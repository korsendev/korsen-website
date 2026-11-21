import { CoverageMap } from "@/components/coverage-map"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { COVERAGE as C } from "@/lib/content/coverage"

export function Coverage({ id = "cobertura", as = "h2" }: { id?: string; as?: "h1" | "h2" }) {
  return (
    <Section id={id} bg={<div className="mn-glow -left-[300px] top-1/3" aria-hidden />}>
      <SectionHeader label={C.label} title={C.title} intro={C.intro} as={as} />
      <div className="mn-sec-body">
        <Reveal className="!h-auto">
          <CoverageMap />
        </Reveal>
      </div>
    </Section>
  )
}
