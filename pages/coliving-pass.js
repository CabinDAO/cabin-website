import { Heading, Wrapper } from "@cabindao/topo"
import { ProductHero, InnerPageNav, DescriptiveSideImage, NeighborhoodHighlight } from "@templates"
import { ColiveWithCabinCTA, NeighborhoodZeroFeature, CabinVision, MediaCallout } from "@sections"

export default function ColivingPass() {
  return (
    <>
      <ProductHero
        title="The Cabin Coliving Pass"
        content="Now is your chance to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        cta={{ href: "", label: "Apply to Colive" }}
      />

      <NeighborhoodHighlight />
      </>
  )
}


