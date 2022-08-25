import { Heading, Wrapper} from "@cabindao/topo"
import { PrimaryHero, InnerPageNav, DescriptiveSideImage } from "@templates"
import { ColiveWithCabinCTA, NeighborhoodZeroFeature, CabinVision, MediaCallout } from "@sections"

export default function LiveAtCabin() {
  return (
    <>
      <PrimaryHero
        title="Our vision is to build a decentralized city for creators."
        subtitle = "Cabin is an experiment in the future of cities: decentralized physical nodes tied together by a shared culture, economy, and governance structure."
        />

      <InnerPageNav
        ctas={[
          {
            href: "/live-at-cabin#coliving-pass",
            text: "Coliving Pass"
          },
          {
            href: "/live-at-cabin#start-a-neighborhood",
            text: "Start a Neighborhood"
          },
        ]}
        />

      <ColiveWithCabinCTA />
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
        reversed
      />

      <CabinVision theme="dark" />

      <MediaCallout />
    </>
  )
}
