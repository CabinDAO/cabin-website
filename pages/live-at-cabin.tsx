import { Heading, Wrapper } from "@cabindao/topo"
import { PrimaryHero, InnerPageNav, DescriptiveSideImage } from "@templates"
import { ColiveWithCabinCTA, NeighborhoodZeroFeature, CabinVision, MediaCallout } from "@sections"

const image = {
  src: "/neighborhood-zero-gallery/01.jpg",
  alt: "",
  width: 800,
  height: 532,
}

export default function LiveAtCabin() {
  return (
    <>
      <PrimaryHero
        title="Help us build a network city for online creators"
        subtitle="Join the Cabin experiment by becoming a resident of starting a neighborhood. Learn more about either option below."
        image={image}
      />

      <InnerPageNav
        ctas={[
          {
            href: "/live-at-cabin#colive-with-cabin",
            label: "Become a Resident"
          },
          {
            href: "/live-at-cabin#start-a-neighborhood",
            label: "Start a Neighborhood"
          },
        ]}
      />

      <DescriptiveSideImage
        title={"Colive with Cabin"}
        content={"Come spend some time in the Texas Hill Country at a beautiful, 28-acre retreat center with a group of like minded souls, just 45 mins outside of Austin"}
        bgImage={"/guestsOutdoors.jpg"}
        bgImageAlt={'People hanging out on a porch'}
        featureImage={"/guestsGroup.jpg"}
        featureImageAlt={'People sitting around a campfire'}
        cta={{
          href: "/coliving-pass",
          label: "Apply to Colive"
        }}
      />
      <NeighborhoodZeroFeature />

      <DescriptiveSideImage
        title={"Start a Neighborhood"}
        content={"It's time for you and your squad to build some Squad Wealth by buying property in the real world, with help from Cabin"}
        bgImage={"/water.jpg"}
        bgImageAlt={"People talking around a table"}
        featureImage={"/guestsTable.jpg"}
        featureImageAlt={"Texas hill country scenery"}
        cta={{
          href: "/neighborhoods/become-a-neighborhood",
          label: "Start a Neighborhood"
        }}
      />

      <CabinVision theme="dark" />

      <MediaCallout />
    </>
  )
}
