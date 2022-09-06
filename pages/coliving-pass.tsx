import { Heading, Wrapper, Text } from "@cabindao/topo"
import { ProductHero, InnerPageNav, DescriptiveSideImage, NeighborhoodHighlight, NeighborhoodPreview } from "@templates"
import { ColiveWithCabinCTA, NeighborhoodZeroFeature, CabinVision, MediaCallout } from "@sections"

export default function ColivingPass() {
  return (
    <>
      <ProductHero
        title="The Cabin Coliving Pass"
        content="For the first time, we are opening up Neighborhood Zero for long-term coliving. Come spend some time in the Texas Hill Country on a beautiful 28-acre retreat center with a group of like minded souls, just 45 mins outside of Austin."
        cta={{ href: "", label: "Apply to Colive" }}
      />

      {/*
        * Colive with Cabin
        */}
      <DescriptiveSideImage
        title={"Focus and Relax"}
        content={"Expect campfires, group meals, late-night conversations, and long expansive days to focus on whatever project has captured your imagination (or just your day job!)."}
        featureImage={"/guestsGroup.jpg"}
        featureImageAlt={'People sitting around a campfire'}
        cta={{
          href: "/coliving-pass",
          label: "Apply to Colive"
        }}
      />
      <DescriptiveSideImage
        title={"Anti-Creator House Creator House"}
        content={"Not just for extroverts, our locations feature common areas and we encourage connecting with your fellow residents. But our spaces also have single rooms and nooks for privacy and much needed recharging."}
        featureImage={"/guestsGroup.jpg"}
        featureImageAlt={'People sitting around a campfire'}
        cta={{
          href: "/coliving-pass",
          label: "Apply to Colive"
        }}
        reversed
      />
      <DescriptiveSideImage
        title={"Intentional Connection"}
        content={"Coliving at Cabin isn't like living with your college roommates. Say goodbye to that beer-soaked couch, and hello to mature conversations and people who clean up after themselves."}
        featureImage={"/guestsGroup.jpg"}
        featureImageAlt={'People sitting around a campfire'}
        cta={{
          href: "/coliving-pass",
          label: "Apply to Colive"
        }}
        bleedable
      />

      <NeighborhoodPreview encroach={true} />

      <ColiveWithCabinCTA />

    </>
  )
}


