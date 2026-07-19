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
import { PageWrapper } from "@/components/page-wrapper"
import { CotizarWhatsAppForm } from "@/components/cotizar-whatsapp-form"
import type { CotizarTopicDef } from "@/lib/cotizar-topics"
import type { TopicLandingCopy } from "@/lib/topic-landing-content"
import { getProjectsByIds, type ShowcaseProject } from "@/lib/projects-data"
import { PATH_SOLUCIONES_TECNOLOGIAS } from "@/lib/site-paths"

const DETAIL_ICONS = [Target, UsersRound, Sparkles] as const

function IntroText({ text }: { text: string }) {
  const segments = text.split(/\*\*(.+?)\*\*/g)
  return (
    <p className="text-base sm:text-lg text-[#A6A6A6] leading-relaxed text-pretty font-sans font-medium">
      {segments.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-[#F7F7F7] font-bold">
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
    <div className="group relative rounded-3xl border border-white/5 bg-[#0B0B0B] overflow-hidden hover:border-primary/30 hover:shadow-[0_0_24px_rgba(196,255,0,0.05)] transition-all duration-300 text-left">
      <div className="corner-bracket top-left opacity-30 group-hover:opacity-100 transition-opacity z-20"></div>
      <div className="corner-bracket top-right opacity-30 group-hover:opacity-100 transition-opacity z-20"></div>
      <div className="corner-bracket bottom-left opacity-30 group-hover:opacity-100 transition-opacity z-20"></div>
      <div className="corner-bracket bottom-right opacity-30 group-hover:opacity-100 transition-opacity z-20"></div>
      
      <div className="aspect-video relative bg-[#050505]">
        <Image src={project.image} alt={project.title} fill className="object-cover opacity-80 group-hover:opacity-95 transition-opacity" sizes="(max-width:768px) 100vw,33vw" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] font-mono tracking-widest text-primary border border-primary/20 rounded-full px-3 py-1 bg-primary/5 uppercase">
            {project.category}
          </span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full border border-white/10 p-2.5 hover:bg-primary/10 hover:border-primary/30 transition-colors"
            aria-label={`Abrir ${project.title}`}
          >
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
        <h3 className="text-lg font-bold text-[#F7F7F7] uppercase mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-sm text-[#A6A6A6] leading-relaxed text-pretty line-clamp-3 font-sans font-medium">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#050505] text-[#A6A6A6] border border-white/5"
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
    <PageWrapper showBgEffects={false}>

      {/* Hero section */}
      <section className="relative min-h-[min(72vh,44rem)] overflow-hidden border-b border-white/5 bg-[#050505] pt-12">
        <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
        <div className="absolute top-[20%] left-[10%] w-[25rem] h-[25rem] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[28rem] h-[28rem] bg-primary/3 rounded-full blur-[160px] pointer-events-none" />

        <article className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pb-24 lg:pb-28">
          <div className="container mx-auto max-w-7xl">
            <nav aria-label="Migas de pan" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono uppercase tracking-wider text-muted-foreground mb-8">
              <Link href="/" className="hover:text-primary transition-colors">
                Inicio
              </Link>
              <ChevronRight className="h-3 w-3 shrink-0 opacity-55" aria-hidden />
              <Link href={PATH_SOLUCIONES_TECNOLOGIAS} className="hover:text-primary transition-colors">
                Soluciones y tecnologías
              </Link>
              <ChevronRight className="h-3 w-3 shrink-0 opacity-55" aria-hidden />
              <span className="text-[#F7F7F7] font-bold truncate max-w-[min(100%,14rem)] sm:max-w-none" title={topic.title}>
                {topic.title}
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10 lg:items-start text-left">
              {/* Intro: Left Column */}
              <div className="lg:col-span-7 space-y-8 min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-mono text-primary shadow-[0_0_15px_rgba(196,255,0,0.1)] uppercase tracking-wider">
                  <KindIcon className="h-3.5 w-3.5" aria-hidden />
                  {kindLabel}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F7F7F7] uppercase tracking-tighter leading-[0.95] select-all">
                  {topic.title}
                </h1>

                <div className="border border-white/5 bg-[#0B0B0B] p-6 sm:p-8 rounded-3xl relative">
                  <div className="corner-bracket top-left opacity-30"></div>
                  <div className="corner-bracket top-right opacity-30"></div>
                  <div className="corner-bracket bottom-left opacity-30"></div>
                  <div className="corner-bracket bottom-right opacity-30"></div>
                  <IntroText text={copy.intro} />
                </div>
              </div>

              {/* Form: Right Column */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start min-w-0">
                <div className="relative border border-white/5 bg-[#0B0B0B] p-8 rounded-3xl text-left shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                  <div className="corner-bracket top-left opacity-30" />
                  <div className="corner-bracket top-right opacity-30" />
                  <div className="corner-bracket bottom-left opacity-30" />
                  <div className="corner-bracket bottom-right opacity-30" />
                  
                  <div className="flex justify-center mb-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary shadow-[0_0_15px_rgba(196,255,0,0.1)]">
                      <MessageCircle className="h-6 w-6" aria-hidden />
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-center uppercase tracking-tight text-[#F7F7F7] mb-2">Cotizar por WhatsApp</h2>
                  <p className="text-center text-xs text-[#A6A6A6] mb-6 leading-relaxed font-sans font-medium">
                    Completa el formulario y abrimos WhatsApp con el contexto de esta {kindLabel.toLowerCase()}.
                  </p>
                  <CotizarWhatsAppForm topicTitle={topic.title} topicKind={topic.kind} />
                  <p className="text-center text-[10px] font-mono uppercase tracking-wider text-muted-foreground mt-6">
                    ¿Prefieres la web?{" "}
                    <Link href="/#contacto" className="font-bold text-primary hover:underline underline-offset-4">
                      Formulario de contacto
                    </Link>
                  </p>
                </div>
              </div>

              {/* Detail: Below intro in Left Column */}
              <div
                className="lg:col-span-7 min-w-0"
                role="region"
                aria-labelledby="topic-detail-heading"
              >
                <h2 id="topic-detail-heading" className="text-xs font-mono uppercase tracking-widest text-[#A6A6A6] mb-6">
                  // in_depth_overview
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {copy.details.map((d, i) => {
                    const Icon = DETAIL_ICONS[i % DETAIL_ICONS.length]
                    return (
                      <section
                        key={d.title}
                        className="rounded-3xl border border-white/5 bg-[#0B0B0B]/50 p-6 hover:border-primary/20 transition-all duration-300 relative group"
                      >
                        <div className="corner-bracket top-left opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="corner-bracket top-right opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="corner-bracket bottom-left opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="corner-bracket bottom-right opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="flex items-start gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/5 text-primary">
                            <Icon className="h-5 w-5" aria-hidden />
                          </span>
                          <div className="min-w-0">
                            <h3 className="text-md font-bold text-[#F7F7F7] uppercase mb-2">{d.title}</h3>
                            <p className="text-sm text-[#A6A6A6] leading-relaxed font-sans font-medium">{d.text}</p>
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

      {/* Portfolio section */}
      <section id="portafolio" className="relative py-24 bg-[#050505] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-white/5" />
        <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />

        <div className="relative container mx-auto max-w-6xl text-left">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-primary text-[10px] font-mono uppercase tracking-widest mb-4">
              <FolderKanban className="h-4 w-4" aria-hidden />
              // related_case_studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tighter text-[#F7F7F7]">PROYECTOS REALIZADOS</h2>
          </div>

          {projects.length === 0 ? (
            <p className="text-[#A6A6A6] text-xs font-mono uppercase tracking-wider py-12 px-6 rounded-3xl border border-dashed border-white/10 bg-[#0B0B0B]/40 text-center max-w-2xl mx-auto">
              // Pronto sumamos referencias para esta línea.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}
        </div>
      </section>

    </PageWrapper>
  )
}
