import Hero from "../components/home/Hero";
import Media from "../components/home/Media";
import Join from "../components/home/Join";
import FeaturedNode from "../components/home/FeaturedNode";
import { FeaturedNeighborhood, CallToAction, DescriptiveSideImage, PageSummary, Marquee } from "@templates"

export default function Home() {

  return (
    <>
      <Hero />

      {/*
        * Call to Action
        */}
      <PageSummary
        title={"The vision"}
        readMoreLink={
          "/vision"
        }
        description="Today, Cabin is a place to get together IRL with your internet friends. In the future, our hope is that it becomes one node in a network of decentralized properties, owned and operated by small groups of independent online creators and entrepreneurs. The density of creative energy of San Francisco or New York, but wherever and whenever you want it to be. If you were designing a 21st century city from scratch, why would you put it all in one place?"
      />

      {/*
        * Colive with Cabin
        */}
      <DescriptiveSideImage
        title={"Colive with Cabin"}
        content={"Come spend some time in the Texas Hill Country at a beautiful, 28-acre retreat center with a group of like minded souls, just 45 mins outside of Austin"}
        bgImage={"/guestsOutdoors.jpg"}
        bgImageAlt={ 'People hanging out on a porch'}
        featureImage={"/guestsGroup.jpg"}
        featureImageAlt={ 'People sitting around a campfire'}
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
        reversed
      />

      {/*
        * Colive with Cabin CTA
        */}
      <CallToAction
        title="Colive with Cabin"
        description="We believe in the power of bringing people together IRL, especially for decentralized and distributed teams. While the vast majority of a DAO&apos;s work should be accomplished via asynchronous, remote, distributed work, there is tremendous leverage in getting together face-to-face for strategic thinking, team bonding, and deep collaboration. Cabin is the DAO to help other DAOs accelerate their work by getting together IRL."
        cta={{
          href: "/coliving-pass",
          label: "Apply for a Coliving Pass"
        }}
      />

      {/*
        * Featured Neighborhood
        */}
      <FeaturedNeighborhood
        neighborhood={{
          image: "/node.jpg",
          title: "Neighborhood 0",
          subtitle: "Cabin in the Texas Hill Country",
          description: "28-acres of private land in the Texas Hill Country about 45 minutes outside of Austin. We are located minutes away from Pedernales Falls State Park and have a seasonal creek, wildlife, and amazing stargazing on site.",
          cta: {
            href: "neighborhoods/neighborhood-zero",
            label: "Explore the cabins"
          }
        }}
        encroach
      />

      <Media />
    </>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
