import { PageWrapper } from "@/components/page-wrapper"
import { blogPosts } from "@/lib/blog-data"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Terminal } from "lucide-react"

export const metadata = {
  title: "Blog de Ingeniería y Software | korsen.dev",
  description: "Artículos técnicos detallados sobre arquitectura de software, optimización en Next.js, automatizaciones de procesos con IA y DevOps en la nube.",
}

export default function BlogIndexPage() {
  return (
    <PageWrapper showBgEffects={false}>
      {/* Header / Hero Section */}
      <section className="relative pt-40 pb-24 bg-[#050505] overflow-hidden">
        {/* Background Grid and Glowing Orb */}
        <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-primary/4 rounded-full blur-[200px] pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-[10px] font-mono text-primary tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(196,255,0,0.05)] backdrop-blur-md">
            <Terminal className="w-4 h-4" />
            korsen // journal_system_active
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F7F7] uppercase tracking-tighter leading-none mb-6">
            Blog Técnico
          </h1>
          
          <p className="text-base sm:text-lg text-[#D4D4D4] max-w-2xl leading-relaxed font-sans font-medium">
            Artículos, investigaciones y metodologías de ingeniería escritos por desarrolladores. Compartimos nuestra experiencia construyendo software robusto, escalable y optimizado para producción.
          </p>
        </div>
      </section>

      {/* Articles List Section */}
      <section className="relative py-16 bg-[#050505] overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group p-8 sm:p-10 border border-white/10 bg-[#0B0B0B]/90 hover:bg-[#0E0E0E] hover:border-primary/40 transition-all duration-300 rounded-3xl relative text-left shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(196,255,0,0.08)]"
              >
                {/* Custom glowing corner brackets matching Korsen design system */}
                <div className="corner-bracket top-left opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket top-right opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket bottom-left opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="corner-bracket bottom-right opacity-30 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mb-5">
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

                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#F7F7F7] mb-4 group-hover:text-primary transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`} className="focus:outline-none focus:ring-2 focus:ring-primary rounded-lg">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed font-sans font-medium mb-8 max-w-4xl text-pretty">
                  {post.excerpt}
                </p>

                <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    // slug: {post.slug}
                  </span>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-primary uppercase tracking-wider group-hover:gap-2.5 transition-all font-extrabold focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  >
                    Leer artículo completo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
