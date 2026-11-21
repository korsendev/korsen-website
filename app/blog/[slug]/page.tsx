import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CtaStrip } from "@/components/cta-strip"
import { Section } from "@/components/section"
import { blogPosts, getPostBySlug } from "@/lib/blog-data"
import { BLOG as C } from "@/lib/content/blog"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt, alternates: { canonical: `/blog/${post.slug}` } }
}

/** **negrita** inline → <strong> */
function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>))}
    </>
  )
}

function Content({ source }: { source: string }) {
  return (
    <div className="mn-prose">
      {source
        .split("\n\n")
        .map((b) => b.trim())
        .filter(Boolean)
        .map((block, i) => {
          if (block.startsWith("##")) return <h2 key={i}>{block.replace(/^##\s*/, "")}</h2>
          if (block.startsWith("-")) {
            return (
              <ul key={i}>
                {block.split("\n").map((li, j) => (
                  <li key={j}>
                    <Inline text={li.replace(/^-\s*/, "")} />
                  </li>
                ))}
              </ul>
            )
          }
          return (
            <p key={i}>
              <Inline text={block} />
            </p>
          )
        })}
    </div>
  )
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <>
      <section className="relative overflow-hidden pb-[clamp(40px,5vw,72px)] pt-[clamp(48px,6vw,96px)]">
        <div className="mn-columns pointer-events-none absolute inset-0" aria-hidden />
        <div className="mn-container relative">
          <Link href="/blog" className="mn-kicker transition-colors hover:text-[var(--mn-lime)]">
            ← {C.back}
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="mn-badge">{post.category}</span>
            <span className="mn-kicker">{post.date}</span>
            <span className="mn-kicker">{post.readTime}</span>
          </div>
          <h1 className="mn-h1 mt-6 max-w-[22ch]" style={{ fontSize: "clamp(30px, 4vw, 56px)" }}>
            {post.title}
          </h1>
        </div>
      </section>

      <Section line={false} className="!pt-0">
        <article className="max-w-[760px]">
          <Content source={post.content} />
        </article>
      </Section>

      <CtaStrip text={C.ctaText} label={C.ctaLabel} href="/diagnostico" />
    </>
  )
}
