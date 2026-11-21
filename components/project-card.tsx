import { MnCard } from "@/components/ui/mn-card"
import { Badge } from "@/components/ui/pill"
import { Tag } from "@/components/ui/tag"
import { PROJECTS_COPY, type Project } from "@/lib/projects-data"

export function ProjectCard({ project }: { project: Project }) {
  const wip = project.status === "En desarrollo"
  return (
    <MnCard as="article">
      <div className="flex items-start justify-between gap-4">
        <p className="mn-kicker">{project.sector}</p>
        <span className="mn-ghostnum shrink-0" style={{ fontSize: 30 }} aria-hidden>
          {project.code}
        </span>
      </div>
      <h3 className="mn-h2 mt-8" style={{ fontSize: 28 }}>
        {project.name}
      </h3>
      <p className="mn-body mt-3">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>
      <div className="mn-card__foot flex items-center border-t border-[var(--mn-border-1)]">
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${PROJECTS_COPY.viewProject}: ${project.name}`}
            className="mn-code break-all text-[13px] text-[var(--mn-text)] transition-colors hover:text-[var(--mn-lime)]"
          >
            <span className="text-[var(--mn-lime)]">↗</span> {project.status}
          </a>
        ) : wip ? (
          <Badge tone="wip">{project.status}</Badge>
        ) : (
          <span className="mn-code flex items-center gap-2 text-[13px] text-[var(--mn-text-2)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--mn-lime)]" aria-hidden />
            {project.status}
          </span>
        )}
      </div>
    </MnCard>
  )
}
