import { cn } from "@/lib/utils"

/** Lista con marcas lima: ✓ (incluye) o › (servicios). */
export function CheckList({ items, variant = "check", className }: { items: readonly string[]; variant?: "check" | "chev"; className?: string }) {
  return (
    <ul className={cn("mn-checklist", variant === "chev" && "mn-checklist--chev", className)}>
      {items.map((item) => (
        <li key={item}>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
