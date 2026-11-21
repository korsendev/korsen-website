import type { ReactNode } from "react"

export function Chip({ children }: { children: ReactNode }) {
  return <span className="mn-chip">{children}</span>
}
