import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { ABOUT } from "@/lib/content/about"

export function About({ as = "h2", id = "quienes-somos" }: { as?: "h1" | "h2"; id?: string }) {
  return (
    <Section id={id} bg={<div className="mn-columns pointer-events-none absolute inset-0 opacity-60" aria-hidden />}>
      <SectionHeader label={ABOUT.label} title={ABOUT.title} accent={ABOUT.accent} as={as} />
      <div className="mn-sec-body">
        <Reveal className="!h-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {ABOUT.paragraphs.map((parts, i) => (
              <p key={i} className="mn-lead" style={{ maxWidth: "52ch" }}>
                {parts.map((part, j) =>
                  typeof part === "string" ? (
                    <span key={j}>{part}</span>
                  ) : (
                    <strong key={j} className="font-semibold text-[var(--mn-text)]">
                      {part.b}
                    </strong>
                  ),
                )}
              </p>
            ))}
          </div>
          <div className="mt-10">
            <Button href={ABOUT.cta.href} variant="ghost">
              {ABOUT.cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
