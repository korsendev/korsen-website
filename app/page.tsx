import { PageWrapper } from "@/components/page-wrapper"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Tips } from "@/components/tips"
import { IaPost } from "@/components/ia-post"
import { WebDevPost } from "@/components/webdev-post"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <PageWrapper showBgEffects={false}>
      <Hero />
      <Services />
      <Portfolio />
      <Tips />
      <IaPost />
      <WebDevPost />
      <Contact />
    </PageWrapper>
  )
}
