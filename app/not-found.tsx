import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { NOT_FOUND as C } from "@/lib/content/global"

export default function NotFound() {
  return (
    <PageHero
      label="404"
      title={C.title}
      accent={C.accent}
      intro={C.text}
      actions={
        <Button href="/" arrow>
          {C.cta}
        </Button>
      }
    />
  )
}
