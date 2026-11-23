import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { MnCard } from "@/components/ui/mn-card"
import { HERO } from "@/lib/content/hero"
import { CONTACTO as C } from "@/lib/content/contacto"

export const metadata: Metadata = {
  title: C.seoTitle,
  description: C.seoDescription,
  alternates: { canonical: "/contacto" },
}

export default function ContactoPage() {
  return (
    <>
      <PageHero label={C.label} title={C.title} accent={C.accent} intro={C.intro} facts={HERO.facts} />
      <Section line={false}>
        <ul className="mn-grid mn-grid--4">
          {C.channels.map((ch, i) => (
            <li key={ch.kicker}>
              <Reveal delay={i * 60}>
                <MnCard>
                  <p className="mn-kicker">{ch.kicker}</p>
                  {ch.href ? (
                    <a href={ch.href} className="mn-h3 mn-tap mt-3 break-words text-[20px] transition-colors hover:text-[var(--mn-accent)]">
                      {ch.value}
                    </a>
                  ) : (
                    <p className="mn-h3 mt-3 text-[20px]">{ch.value}</p>
                  )}
                </MnCard>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button href={C.cta.href} arrow>
            {C.cta.label}
          </Button>
        </div>
      </Section>
    </>
  )
}
