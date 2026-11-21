import type { LucideIcon } from "lucide-react"

export function IconBox({ icon: Icon, size = 52 }: { icon: LucideIcon; size?: number }) {
  return (
    <span className="mn-iconbox" style={{ width: size, height: size }} aria-hidden>
      <Icon size={Math.round(size * 0.52)} strokeWidth={1.75} />
    </span>
  )
}
