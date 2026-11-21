import { Button } from "@/components/ui/button"

/** Cierre breve de página: frase + botón primario. */
export function CtaStrip({ text, label, href }: { text: string; label: string; href: string }) {
  return (
    <section className="mn-section--line border-t">
      <div className="mn-container flex flex-wrap items-center justify-between gap-6 py-[clamp(56px,7vw,96px)]">
        <p className="mn-h1 max-w-[18ch]">{text}</p>
        <Button href={href} arrow>
          {label}
        </Button>
      </div>
    </section>
  )
}
