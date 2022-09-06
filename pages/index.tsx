import Hero from "../components/home/Hero";
import Media from "../components/home/Media";
import Join from "../components/home/Join";
import { FeaturedNeighborhood, DescriptiveSideImage, PageSummary, Marquee } from "@templates"
import { ColiveWithCabinCTA, NeighborhoodZeroFeature, CabinVision, MediaCallout } from "@sections"

export default function Home() {

  return (
    <>
      <Hero />

      {/*
        * Call to Action
        */}
      <CabinVision />

      {/*
        * Colive with Cabin
        */}
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

      {/*
        * Become a Neighborhood
        */}
      <DescriptiveSideImage
        title={"Become a Neighborhood"}
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

      {/*
        * Colive with Cabin CTA
        */}
      <ColiveWithCabinCTA />

      {/*
        * Featured Neighborhood
        */}
      <NeighborhoodZeroFeature />

      <MediaCallout />
    </>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
