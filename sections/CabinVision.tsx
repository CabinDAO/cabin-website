import { PageSummary } from "@templates"
import type { iComponentTheme } from "src/templates/PageSummary"


export default function CabinVision({ theme = "light" }: iComponentTheme) {
  return (
    <PageSummary
      title={"The Vision"}
      readMoreLink={
        "/vision"
      }
      description="Cabin is building a network city for online creators. Our community is developing shared culture, economy, and governance across a global network of physical locations."
      theme={theme}
    />
  )
}
