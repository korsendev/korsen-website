import { PageWrapper } from "@/components/page-wrapper"
import { Hero } from "@/components/hero"
import { Problems } from "@/components/problems"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Process } from "@/components/process"
import { Technologies } from "@/components/technologies"
import { RecentPosts } from "@/components/recent-posts"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { CtaFinal } from "@/components/cta-final"

export default function Home() {
  return (
    <PageWrapper showBgEffects={false}>
      <Hero />
      <Problems />
      <Services />
      <Portfolio />
      <Process />
      <Technologies />
      <RecentPosts />
      <Faq />
      <Contact />
      <CtaFinal />
    </PageWrapper>
  )
}
