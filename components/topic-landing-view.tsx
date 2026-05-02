import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  Code,
  Cpu,
  ExternalLink,
  FolderKanban,
  Globe,
  Layers,
  MessageCircle,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CotizarWhatsAppForm } from "@/components/cotizar-whatsapp-form"
import type { CotizarTopicDef } from "@/lib/cotizar-topics"
import type { TopicLandingCopy } from "@/lib/topic-landing-content"
import { getProjectsByIds, type ShowcaseProject } from "@/lib/projects-data"
import { PATH_SOLUCIONES_TECNOLOGIAS } from "@/lib/site-paths"

const DETAIL_ICONS = [Target, UsersRound, Sparkles] as const

function IntroText({ text }: { text: string }) {
  const segments = text.split(/\*\*(.+?)\*\*/g)
  return (
    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
      {segments.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-foreground font-semibold">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  )
}

function ProjectCard({ project }: { project: ShowcaseProject }) {
  return (
    <div className="group rounded-2xl border border-border bg-card/70 backdrop-blur-sm overflow-hidden hover:border-primary/45 hover:shadow-[0_0_32px_rgba(34,197,94,0.12)] hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-video relative bg-muted">
        <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width:768px) 100vw,33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold tracking-wide text-primary border border-primary/35 rounded-full px-3 py-1 bg-primary/5">
            {project.category}
          </span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl border border-border p-2.5 hover:bg-primary/12 hover:border-primary/45 transition-colors"
            aria-label={`Abrir ${project.title}`}
          >
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
        <h3 className="text-lg font-semibold text-balance mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed text-pretty line-clamp-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-muted/80 text-muted-foreground border border-border/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function TopicLandingView({ topic, copy }: { topic: CotizarTopicDef; copy: TopicLandingCopy }) {
  const projects = getProjectsByIds(copy.relatedProjectIds)
  const kindLabel = topic.kind === "servicio" ? "Solución" : "Tecnología"
  const KindIcon = topic.kind === "servicio" ? Layers : Cpu

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero — misma familia visual que la home; solo título + intro */}
      <section className="relative min-h-[min(72vh,44rem)] overflow-hidden border-b border-border/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,47,0.08),transparent_35%),radial-gradient(circle_at_80%_25%,rgba(0,255,47,0.06),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.08),transparent_45%),linear-gradient(135deg,rgba(4,12,10,0.98)_0%,rgba(3,9,8,0.94)_45%,rgba(2,8,7,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,47,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,47,0.06)_1px,transparent_1px)] bg-[size:42px_42px] opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_58%,rgba(0,255,47,0.14)_59%,transparent_61%),radial-gradient(circle_at_50%_50%,transparent_70%,rgba(0,255,47,0.1)_71%,transparent_73%)] opacity-20 animate-[spin_28s_linear_infinite]" />
        <div className="absolute -left-1/3 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-primary/18 to-transparent blur-2xl opacity-35 animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_45%,rgba(0,255,47,0.12)_50%,transparent_55%)] bg-[length:220%_100%] opacity-25 animate-[pulse_5s_ease-in-out_infinite]" />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle,rgba(0,255,47,0.75)_1px,transparent_1.5px)] bg-[size:34px_34px]" />
        <div className="absolute top-16 left-4 sm:left-10 w-[28rem] h-[28rem] bg-primary/12 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-10 right-4 sm:right-10 w-[32rem] h-[32rem] bg-emerald-400/11 rounded-full blur-[200px] animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-primary/6 rounded-full blur-[240px] animate-pulse [animation-delay:2s]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-primary/8" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,255,47,0.12),transparent_70%)]" />

        <div className="pointer-events-none absolute top-[22%] left-[12%] animate-float opacity-40 hidden md:block" aria-hidden>
          <Code className="h-9 w-9 text-primary/50" />
        </div>
        <div className="pointer-events-none absolute top-[38%] right-[14%] animate-float [animation-delay:1s] opacity-35 hidden lg:block" aria-hidden>
          <Globe className="h-8 w-8 text-primary/45" />
        </div>
        <div className="pointer-events-none absolute bottom-[26%] left-[18%] animate-float [animation-delay:2s] opacity-30 hidden sm:block" aria-hidden>
          <KindIcon className="h-7 w-7 text-primary/40" />
        </div>

        <article className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pb-24 lg:pb-28">
          <div className="container mx-auto max-w-7xl">
            <nav aria-label="Migas de pan" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground mb-8 sm:mb-10">
              <Link href="/" className="hover:text-primary transition-colors">
                Inicio
              </Link>
              <ChevronRight className="h-4 w-4 shrink-0 opacity-50" aria-hidden />
              <Link href={PATH_SOLUCIONES_TECNOLOGIAS} className="hover:text-primary transition-colors">
                Soluciones y tecnologías
              </Link>
              <ChevronRight className="h-4 w-4 shrink-0 opacity-50" aria-hidden />
              <span className="text-foreground/90 font-medium truncate max-w-[min(100%,14rem)] sm:max-w-none" title={topic.title}>
                {topic.title}
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_auto] gap-x-10 gap-y-10 lg:items-start">
              {/* Intro: columna izquierda arriba · móvil: primero */}
              <div className="order-1 space-y-8 lg:col-start-1 lg:row-start-1 min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-[0_0_22px_rgba(0,255,47,0.18)]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary/15">
                    <KindIcon className="h-4 w-4" aria-hidden />
                  </span>
                  {kindLabel}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-6xl font-extrabold text-balance tracking-tight leading-[1.06]">
                  <span className="text-gradient">{topic.title}</span>
                </h1>

                <div className="rounded-2xl border border-primary/20 bg-card/35 backdrop-blur-md p-6 sm:p-8 lg:p-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_0_1px_rgba(0,255,47,0.06)]">
                  <IntroText text={copy.intro} />
                </div>
              </div>

              {/* Formulario WhatsApp: derecha en desktop, tras intro en móvil */}
              <div className="order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-28 lg:self-start min-w-0">
                <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-primary/45 via-primary/15 to-border overflow-hidden shadow-[0_0_48px_rgba(34,197,94,0.12)]">
                  <div className="rounded-[calc(1.5rem-1px)] bg-card/90 backdrop-blur-xl border border-white/[0.06] px-5 py-8 sm:px-7 sm:py-9">
                    <div className="flex justify-center mb-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/35 bg-primary/10 text-primary shadow-[0_0_24px_rgba(0,255,47,0.18)]">
                        <MessageCircle className="h-6 w-6" aria-hidden />
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-center text-balance mb-2">Cotizar por WhatsApp</h2>
                    <p className="text-center text-sm sm:text-base text-muted-foreground mb-6 text-pretty leading-relaxed">
                      Completa el formulario y abrimos WhatsApp con el contexto de esta {kindLabel.toLowerCase()}.
                    </p>
                    <CotizarWhatsAppForm topicTitle={topic.title} topicKind={topic.kind} />
                    <p className="text-center text-xs text-muted-foreground mt-6">
                      ¿Prefieres la web?{" "}
                      <Link href="/#contacto" className="font-medium text-primary hover:underline underline-offset-4">
                        Formulario de contacto
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* En detalle: debajo del intro en desktop · móvil: después del form */}
              <div
                className="order-3 lg:col-start-1 lg:row-start-2 min-w-0"
                role="region"
                aria-labelledby="topic-detail-heading"
              >
                <h2 id="topic-detail-heading" className="text-lg sm:text-xl font-bold tracking-tight mb-5 sm:mb-6">
                  En detalle
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 lg:gap-5">
                  {copy.details.map((d, i) => {
                    const Icon = DETAIL_ICONS[i % DETAIL_ICONS.length]
                    return (
                      <section
                        key={d.title}
                        className="rounded-2xl border border-border/80 bg-background/40 backdrop-blur-sm p-5 sm:p-6 hover:border-primary/30 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" aria-hidden />
                          </span>
                          <div className="min-w-0">
                            <h3 className="text-lg font-semibold text-foreground mb-2">{d.title}</h3>
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">{d.text}</p>
                          </div>
                        </div>
                      </section>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Portafolio — debajo del hero */}
      <section id="portafolio" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 pb-12 scroll-mt-24">
        <div className="absolute inset-0 bg-muted/25 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

        <div className="relative container mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-3">
              <FolderKanban className="h-4 w-4" aria-hidden />
              Portafolio
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance tracking-tight">Proyectos realizados</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed text-pretty">
              Casos públicos donde aplicamos stack y prácticas similares a las que usaríamos contigo.
            </p>
          </div>

          {projects.length === 0 ? (
            <p className="text-muted-foreground text-sm py-10 px-4 rounded-2xl border border-dashed border-border bg-card/30 text-center max-w-2xl mx-auto">
              Pronto sumamos más referencias para esta línea.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
