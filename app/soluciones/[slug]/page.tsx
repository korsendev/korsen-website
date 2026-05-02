import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllCotizarTopics, getTopicBySlug } from "@/lib/cotizar-topics"
import { getLandingCopy } from "@/lib/topic-landing-content"
import { TopicLandingView } from "@/components/topic-landing-view"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllCotizarTopics().servicios.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const topic = getTopicBySlug(slug)
  if (!topic || topic.kind !== "servicio") return { title: "Solución — Korsen" }
  return {
    title: `${topic.title} — Korsen`,
    description: `Información, proyectos y cotización para ${topic.title}.`,
  }
}

export default async function SolucionLandingPage({ params }: Props) {
  const { slug } = await params
  const topic = getTopicBySlug(slug)
  if (!topic || topic.kind !== "servicio") {
    notFound()
  }
  const copy = getLandingCopy(topic)
  return <TopicLandingView topic={topic} copy={copy} />
}
