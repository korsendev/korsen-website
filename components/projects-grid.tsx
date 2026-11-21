"use client"

import { useState, type CSSProperties } from "react"
import { ProjectCard } from "@/components/project-card"
import { cn } from "@/lib/utils"
import { PROJECTS, PROJECTS_COPY, PROJECT_FILTERS, type ProjectFilter } from "@/lib/projects-data"

/** Columnas de escritorio: el mayor divisor de n (≤4) para no dejar huecos en la última fila. */
function colsFor(n: number) {
  return [4, 3, 2, 1].find((c) => n % c === 0) ?? 1
}

export function ProjectsGrid() {
  const [active, setActive] = useState<ProjectFilter | "todos">("todos")
  const list = active === "todos" ? PROJECTS : PROJECTS.filter((p) => p.filters.includes(active))
  const style = { "--cols": colsFor(list.length), "--cols-md": list.length % 2 === 0 ? 2 : 1 } as CSSProperties

  return (
    <div>
      <div role="group" aria-label={PROJECTS_COPY.filterLabel} className="flex flex-wrap gap-2.5">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={active === f.id}
            onClick={() => setActive(f.id)}
            className={cn(
              "h-11 rounded-full border px-5 text-sm font-medium transition-colors",
              active === f.id
                ? "border-[var(--mn-lime)] bg-[var(--mn-lime)] text-[var(--mn-lime-ink)]"
                : "border-[var(--mn-border-2)] text-[var(--mn-text-2)] hover:border-[var(--mn-lime-45)] hover:text-[var(--mn-text)]",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <ul className="mn-grid mn-grid--cols mt-10" style={style} aria-live="polite">
        {list.map((p) => (
          <li key={p.id}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </div>
  )
}
