import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { MnCard } from "@/components/ui/mn-card"
import { CTA, SITE } from "@/lib/content/global"
import { CTA_FINAL as C } from "@/lib/content/cta-final"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function CtaFinal({ id = "empecemos" }: { id?: string }) {
  return (
    <Section
      id={id}
      bg={
        <>
          <div className="mn-nodegrid pointer-events-none absolute inset-0" aria-hidden />
          <div className="mn-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden />
        </>
      }
    >
      <SectionHeader label={C.label} title={C.title} accent={C.accent} intro={C.intro} />
      <div className="mn-sec-body">
        <ol className="mn-grid mn-grid--3x">
          {C.steps.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 60}>
                <MnCard>
                  <span className="mn-ghostnum" style={{ fontSize: 64 }} aria-hidden>
                    {s.n}
                  </span>
                  <h3 className="mn-h3 mt-6 text-[22px]">{s.title}</h3>
                  <p className="mn-body mt-3">{s.text}</p>
                </MnCard>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Button href={C.primary.href} arrow>
            {C.primary.label}
          </Button>
          <Button href={buildWhatsAppUrl()} variant="ghost">
            {CTA.whatsapp}
          </Button>
        </div>
        <p className="mn-code mt-8 text-sm text-[var(--mn-text-2)]">
          {SITE.email} · {SITE.phone}
        </p>
      </div>
    </Section>
  )
}
