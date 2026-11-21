import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { CheckList } from "@/components/ui/check-list"
import { MnCard } from "@/components/ui/mn-card"
import type { LegalPage } from "@/lib/content/legal"

export function LegalView({ page }: { page: LegalPage }) {
  return (
    <>
      <PageHero label={page.label} title={page.title} accent={page.accent} intro={page.intro} />
      <Section line={false} className="!pt-0">
        <div className="max-w-[860px] space-y-[var(--mn-gap)]">
          {page.sections.map((s, i) => (
            <MnCard key={s.title} as="article">
              <span className="mn-ghostnum" style={{ fontSize: 30 }} aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mn-h2 mt-5" style={{ fontSize: 26 }}>
                {s.title}
              </h2>
              {s.paragraphs?.map((p) => (
                <p key={p} className="mn-body mt-3 text-base">
                  {p}
                </p>
              ))}
              {s.items ? <CheckList items={s.items} className="mt-3" /> : null}
            </MnCard>
          ))}
          <p className="mn-code pt-2 text-sm text-[var(--mn-text-3)]">Última actualización: {page.updated}</p>
        </div>
      </Section>
    </>
  )
}
