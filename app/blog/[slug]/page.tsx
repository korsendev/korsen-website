import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AdjacentNav } from "@/components/adjacent-nav"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CtaStrip } from "@/components/cta-strip"
import { Section } from "@/components/section"
import { MnCard } from "@/components/ui/mn-card"
import { blogPosts, getPostBySlug } from "@/lib/blog-data"
import { BLOG as C } from "@/lib/content/blog"
import { SITE } from "@/lib/content/global"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.isoDate, title: post.title, description: post.excerpt },
  }
}

/** **negrita** inline → <strong> */
function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>))}
    </>
  )
}

type Node = { t: "h2"; text: string } | { t: "p"; text: string } | { t: "ul"; items: string[] } | { t: "ol"; items: string[] }

/** Parser mínimo línea por línea: ## título, listas "-" y "1.", y párrafos. */
function parse(source: string): Node[] {
  const out: Node[] = []
  for (const raw of source.split(/\r?\n/)) {
    const line = raw.trim()
    if (!line) continue
    if (line.startsWith("##")) out.push({ t: "h2", text: line.replace(/^##\s*/, "") })
    else if (/^-\s/.test(line) || /^\d+\.\s/.test(line)) {
      const t = line.startsWith("-") ? "ul" : "ol"
      const text = line.replace(/^(-|\d+\.)\s*/, "")
      const last = out[out.length - 1]
      if (last && (last.t === "ul" || last.t === "ol") && last.t === t) last.items.push(text)
      else out.push({ t, items: [text] })
    } else out.push({ t: "p", text: line })
  }
  return out
}

function Content({ source }: { source: string }) {
  return (
    <div className="mn-prose">
      {parse(source).map((n, i) => {
        if (n.t === "h2") return <h2 key={i}>{n.text}</h2>
        if (n.t === "p")
          return (
            <p key={i}>
              <Inline text={n.text} />
            </p>
          )
        const List = n.t
        return (
          <List key={i} className={n.t === "ol" ? "mn-prose-ol" : undefined}>
            {n.items.map((it, j) => (
              <li key={j}>
                <Inline text={it} />
              </li>
            ))}
          </List>
        )
      })}
    </div>
  )
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const idx = blogPosts.findIndex((p) => p.slug === post.slug)
  const prev = blogPosts[(idx - 1 + blogPosts.length) % blogPosts.length]
  const next = blogPosts[(idx + 1) % blogPosts.length]

  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.isoDate,
    inLanguage: "es",
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  }

  return (
    <>
      <section className="relative overflow-hidden pb-[clamp(40px,5vw,72px)] pt-[clamp(48px,6vw,96px)]">
        <div className="mn-columns pointer-events-none absolute inset-0" aria-hidden />
        <div className="mn-container relative">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
          <div className="flex flex-wrap items-center gap-4">
            <span className="mn-badge">{post.category}</span>
            <time dateTime={post.isoDate} className="mn-kicker">
              {post.date}
            </time>
            <span className="mn-kicker">{post.readTime}</span>
          </div>
          <h1 className="mn-h1 mt-6 max-w-[22ch]" style={{ fontSize: "clamp(30px, 4vw, 56px)" }}>
            {post.title}
          </h1>
          <p className="mn-lead mt-5">{post.excerpt}</p>
        </div>
      </section>

      <Section line={false} className="!pt-0">
        <article className="max-w-[760px]">
          <Content source={post.content} />
        </article>
        <div className="mt-14 max-w-[760px]">
          <MnCard href={`/soluciones/${post.related.slug}`} label={`${C.relatedLabel}: ${post.related.title}`}>
            <p className="mn-kicker">{C.relatedLabel}</p>
            <p className="mn-h2 mt-3" style={{ fontSize: 26 }}>
              {post.related.title}
            </p>
            <span className="mn-code mt-4 text-[13px] text-[var(--mn-accent)]">Ver solución →</span>
          </MnCard>
        </div>
      </Section>

      <CtaStrip text={C.ctaText} label={C.ctaLabel} href="/diagnostico" />
      <AdjacentNav
        prev={{ label: "Artículo anterior", title: prev.title, href: `/blog/${prev.slug}` }}
        next={{ label: "Siguiente artículo", title: next.title, href: `/blog/${next.slug}` }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  )
}
