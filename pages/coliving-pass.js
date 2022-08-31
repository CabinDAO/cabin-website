import { Heading, Wrapper } from "@cabindao/topo"
import { ProductHero, InnerPageNav, DescriptiveSideImage, NeighborhoodHighlight, NeighborhoodPreview } from "@templates"
import { ColiveWithCabinCTA, NeighborhoodZeroFeature, CabinVision, MediaCallout } from "@sections"

export default function ColivingPass() {
  return (
    <>
      <ProductHero
        title="The Cabin Coliving Pass"
        content="Now is your chance to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        cta={{ href: "", label: "Apply to Colive" }}
      />

      {/*
        * Colive with Cabin
        */}
      <DescriptiveSideImage
        title={"Colive with Cabin"}
        content={"Come spend some time in the Texas Hill Country at a beautiful, 28-acre retreat center with a group of like minded souls, just 45 mins outside of Austin"}
        featureImage={"/guestsGroup.jpg"}
        featureImageAlt={ 'People sitting around a campfire'}
      />
      <DescriptiveSideImage
        title={"Colive with Cabin"}
        content={"Come spend some time in the Texas Hill Country at a beautiful, 28-acre retreat center with a group of like minded souls, just 45 mins outside of Austin"}
        featureImage={"/guestsGroup.jpg"}
        featureImageAlt={ 'People sitting around a campfire'}
        cta={{
          href:"/coliving-pass",
          label:"Apply to Colive"
        }}
        reversed
        bleedable
      />

      <NeighborhoodPreview />

      <ColiveWithCabinCTA />

    </>
  )
}


