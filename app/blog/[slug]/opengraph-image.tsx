import { blogPosts } from "@/lib/blog-data"
import { OG_CONTENT_TYPE, OG_SIZE, ogFromFile } from "@/lib/og"

export const alt = "MAYNODE — Blog"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return ogFromFile("blog", slug)
}
