import {
  ChartNoAxesCombined,
  Cloud,
  Code2,
  Database,
  Network,
  PanelsTopLeft,
  Plug,
  RefreshCcw,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react"

/** Claves de icono usadas en lib/content/* → íconos lucide (design-system §6.4). */
export const ICONS = {
  network: Network,
  chart: ChartNoAxesCombined,
  code: Code2,
  refresh: RefreshCcw,
  shield: ShieldCheck,
  panels: PanelsTopLeft,
  cart: ShoppingCart,
  database: Database,
  cloud: Cloud,
  phone: Smartphone,
  plug: Plug,
  sparkles: Sparkles,
} satisfies Record<string, LucideIcon>

export type IconKey = keyof typeof ICONS
