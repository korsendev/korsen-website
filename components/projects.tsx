import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { FEATURED_PROJECT_IDS, PROJECTS, PROJECTS_COPY as C } from "@/lib/projects-data"

/** Inicio: 4 proyectos destacados en 2×2 (sin huecos). */
export function Projects() {
  const featured = FEATURED_PROJECT_IDS.map((id) => PROJECTS.find((p) => p.id === id)!).filter(Boolean)
  return (
    <Section id="proyectos">
      <SectionHeader label={C.homeLabel} title={C.title} accent={C.accent} intro={C.intro} />
      <div className="mn-sec-body">
        <ul className="mn-grid mn-grid--2">
          {featured.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={(i % 2) * 60}>
                <ProjectCard project={p} />
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button href={C.homeCta.href} variant="ghost">
            {C.homeCta.label}
          </Button>
        </div>
      </div>
    </Section>
  )
}
