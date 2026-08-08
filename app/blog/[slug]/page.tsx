import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"
import { Button } from "@/components/ui/button"
import { blogPosts, getPostBySlug } from "@/lib/blog-data"
import { ArrowLeft, Calendar, Clock, ArrowRight, Terminal } from "lucide-react"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Blog Técnico — korsen.dev" }
  return {
    title: `${post.title} | Blog Técnico | korsen.dev`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Helper to split text by paragraphs and render headers and lists
  const renderContent = (contentStr: string) => {
    return contentStr.split("\n\n").map((block, idx) => {
      const trimmed = block.trim()
      if (!trimmed) return null
      
      // Render Section Titles (##) in Technical Style
      if (trimmed.startsWith("##")) {
        const titleText = trimmed.replace("##", "").trim()
        return (
          <div key={idx} className="mt-12 mb-6 text-left border-l-2 border-primary pl-4">
            <span className="block text-[10px] font-mono text-primary uppercase tracking-widest mb-1.5 font-extrabold">
              // sub_topic
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#F7F7F7]">
              {titleText}
            </h2>
          </div>
        )
      }
      
      // Render Lists in Technical Style
      if (trimmed.startsWith("-")) {
        return (
          <ul key={idx} className="list-none pl-1 space-y-4 my-8 text-sm sm:text-base text-[#D4D4D4] font-sans font-medium text-left">
            {trimmed.split("\n").map((li, liIdx) => (
              <li key={liIdx} className="flex items-start gap-3.5">
                <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 shadow-[0_0_8px_rgba(196,255,0,0.8)]" />
                <span className="leading-relaxed text-[#E5E5E5]">{li.replace("-", "").trim()}</span>
              </li>
            ))}
          </ul>
        )
      }

      // Render standard paragraph text
      return (
        <p key={idx} className="text-base sm:text-[17px] text-[#D4D4D4] leading-relaxed font-sans font-medium mb-6 text-pretty text-left">
          {trimmed}
        </p>
      )
    })
  }

  return (
    <PageWrapper showBgEffects={false}>
      {/* Article Header */}
      <section className="relative pt-40 pb-20 bg-[#050505] overflow-hidden">
        {/* Background grid and glowing gradient behind container */}
        <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-primary/3 rounded-full blur-[200px] pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-left">
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-primary uppercase tracking-wider transition-colors hover:underline font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mb-6">
            <span className="text-primary bg-primary/10 border border-primary/30 px-3 py-1 rounded-full uppercase tracking-wider font-extrabold text-[10px]">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="font-bold text-[#F7F7F7]">{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              <span className="font-bold text-[#F7F7F7]">{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F7F7F7] uppercase tracking-tighter leading-tight mb-6 text-pretty">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <section className="relative py-12 bg-[#050505] overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="group p-8 sm:p-12 border border-white/10 bg-[#0B0B0B]/90 backdrop-blur-md rounded-3xl relative shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="corner-bracket top-left opacity-35" />
            <div className="corner-bracket top-right opacity-35" />
            <div className="corner-bracket bottom-left opacity-35" />
            <div className="corner-bracket bottom-right opacity-35" />
            
            <div className="flex items-center gap-2 border-b border-white/10 pb-6 mb-8 text-left">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono text-neutral-400">
                korsen // post_reader // slug: {post.slug}
              </span>
            </div>

            <article className="space-y-6">
              {renderContent(post.content)}
            </article>

            {/* Note / Callout inside article body */}
            <div className="mt-12 p-6 border-l-2 border-primary bg-white/[0.02] rounded-r-2xl text-left">
              <span className="block text-[10px] font-mono text-primary uppercase tracking-widest mb-1.5 font-bold">// nota del equipo</span>
              <p className="text-sm text-[#D4D4D4] leading-relaxed font-sans font-medium">
                En korsen.dev desarrollamos software de alta precisión aplicando estas metodologías en todos nuestros flujos de trabajo. Si buscas asesoría técnica para tu infraestructura o aplicación, no dudes en contactarnos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
            // startup_consultation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter uppercase text-[#F7F7F7] mb-4">
            ¿Necesitas ayuda con tu arquitectura?
          </h2>
          <p className="text-md text-[#D4D4D4] leading-relaxed font-sans font-medium mb-8">
            Diseñamos soluciones eficientes a medida y automatizaciones con IA preparadas para producción.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary-light text-black font-bold font-sans rounded-xl px-8 py-3 shadow-[0_4px_12px_rgba(196,255,0,0.15)] hover:shadow-[0_6px_24px_rgba(196,255,0,0.3)] transition-all duration-300"
          >
            <Link href="/#contacto">
              Hablar con un especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  )
}
