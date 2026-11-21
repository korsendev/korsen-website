import type { ReactNode } from "react"

export function ResultBox({ children, kicker = "Resultado" }: { children: ReactNode; kicker?: string }) {
  return (
    <div className="mn-result">
      <span className="mn-kicker" style={{ color: "var(--mn-lime)" }}>
        {kicker}
      </span>
      <p className="mt-1.5 text-base font-semibold leading-snug text-[var(--mn-text)]">{children}</p>
    </div>
  )
}
