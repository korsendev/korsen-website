/** Franja lima de datos clave (hero de Inicio y cabeceras de página). */
export function FactsStrip({ facts }: { facts: readonly string[] }) {
  const cols = facts.length >= 3 ? "sm:grid-cols-3" : facts.length === 2 ? "sm:grid-cols-2" : ""
  return (
    <div className="relative border-t border-[var(--mn-lime)] bg-[var(--mn-lime)] text-[var(--mn-lime-ink)]">
      <ul className={`mn-container mn-code grid text-[13px] font-bold uppercase tracking-[0.06em] ${cols}`}>
        {facts.map((f, i) => (
          <li key={f} className={`flex items-center justify-center gap-3 py-5 text-center ${i > 0 ? "border-t border-[rgba(5,5,5,0.2)] sm:border-l sm:border-t-0" : ""}`}>
            <span className="h-1.5 w-1.5 shrink-0 bg-[var(--mn-lime-ink)]" aria-hidden />
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}
