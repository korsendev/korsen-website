import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { MnCard } from "@/components/ui/mn-card"
import { blogPosts } from "@/lib/blog-data"
import { BLOG as C } from "@/lib/content/blog"

export const metadata: Metadata = {
  title: C.seoTitle,
  description: C.seoDescription,
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  return (
    <>
      <PageHero label={C.label} title={C.title} accent={C.accent} intro={C.intro} />
      <Section line={false} className="!pt-0">
        <ul className="mn-grid mn-grid--3x">
          {blogPosts.map((post, i) => (
            <li key={post.slug}>
              <Reveal delay={i * 60}>
                <MnCard href={`/blog/${post.slug}`} label={post.title}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="mn-badge">{post.category}</span>
                    <span className="mn-kicker">{post.readTime}</span>
                  </div>
                  <h2 className="mn-h3 mt-8 text-[21px] leading-snug">{post.title}</h2>
                  <p className="mn-body mt-3">{post.excerpt}</p>
                  <div className="mn-card__foot flex items-center justify-between gap-3 border-t border-[var(--mn-border-1)]">
                    <span className="mn-kicker">{post.date}</span>
                    <span className="mn-code text-[13px] text-[var(--mn-accent)]">{C.readMore} →</span>
                  </div>
                </MnCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
