import { blogPosts } from "@/lib/blog-data"
import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "@/lib/og"
import { getPostBySlug } from "@/lib/blog-data"
import { splitAccent } from "@/lib/utils"

export const alt = "MAYNODE — Blog"
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getPostBySlug(slug)
  const t = splitAccent(p?.title ?? "Blog")
  return renderOg({ kicker: p ? `BLOG · ${p.category.toUpperCase()}` : "BLOG", title: t.title, accent: t.accent })
}
