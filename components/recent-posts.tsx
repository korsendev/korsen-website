"use client"

import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RecentPosts() {
  // Show all 3 posts or the first 3
  const posts = blogPosts.slice(0, 3)

  return (
    <section id="blog-preview" className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Grid Backdrop */}
      <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Title */}
        <div className="text-left mb-20 max-w-4xl">
          <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
            // technical_journal
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter uppercase leading-none text-[#F7F7F7] mb-6">
            BLOG TÉCNICO
          </h2>
          <p className="text-md text-[#A6A6A6] max-w-2xl leading-relaxed font-sans font-medium">
            Compartimos nuestras investigaciones, metodologías de optimización y principios de arquitectura de software para sistemas en producción.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="group flex flex-col justify-between p-6 border border-white/5 bg-[#0B0B0B] hover:border-primary/20 transition-all duration-300 rounded-3xl relative text-left"
            >
              <div className="corner-bracket top-left opacity-35 group-hover:opacity-100 transition-opacity" />
              <div className="corner-bracket top-right opacity-35 group-hover:opacity-100 transition-opacity" />
              <div className="corner-bracket bottom-left opacity-35 group-hover:opacity-100 transition-opacity" />
              <div className="corner-bracket bottom-right opacity-35 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-muted-foreground mb-4">
                  <span className="text-primary bg-primary/5 border border-primary/20 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#F7F7F7] uppercase tracking-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs text-[#A6A6A6] leading-relaxed font-sans font-medium mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  {post.readTime}
                </span>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-[10px] font-mono text-primary uppercase tracking-wider group-hover:gap-2 transition-all font-bold"
                >
                  Leer
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border border-primary/25 bg-[#050505]/40 text-foreground/90 hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground hover:border-primary dark:hover:border-primary hover:shadow-[0_0_15px_rgba(196,255,0,0.3)] font-mono text-xs uppercase tracking-wider gap-2 transition-all duration-300"
            asChild
          >
            <Link href="/blog">
              Ver todos los artículos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
