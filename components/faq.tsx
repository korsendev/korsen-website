import { Plus } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { FAQ as C } from "@/lib/content/faq"

export function Faq({ id = "preguntas" }: { id?: string }) {
  return (
    <Section id={id} band>
      <SectionHeader label={C.label} title={C.title} />
      <div className="mn-sec-body max-w-[980px]">
        <div className="border-t border-[var(--mn-border-2)]">
          {C.items.map((it) => (
            <details key={it.q} className="group border-b border-[var(--mn-border-2)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <span className="text-lg font-semibold leading-snug sm:text-xl">{it.q}</span>
                <Plus size={22} strokeWidth={1.75} className="shrink-0 text-[var(--mn-lime)] transition-transform group-open:rotate-45" aria-hidden />
              </summary>
              <p className="mn-body pb-7 pr-10 text-base" style={{ maxWidth: "70ch" }}>
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}
