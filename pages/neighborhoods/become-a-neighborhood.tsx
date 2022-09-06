import { styled } from "@cabindao/topo"
import { AnnouncementHero, Features, SimpleCallToAction, ThreeColumnItems } from "@templates"

export default function BecomeANeighborhood() {
  return (
    <>
      <AnnouncementHero />

      <Features
        features= {[
          {
            title: "No more revolving door of strangers",
            content: "Airbnb guests are hit or miss. Some read the description, most are just looking for a good deal. With Cabin, you'll rest assured that any residents we send your way are in it for the full experience of your property."
          },
          {
            title: "Intentional, like-minded communities",
            content: "Cabin's motto is \"Conserve, colive, create.\" Our community members are made up of solarpunk tech workers and nature-lovers who are trying to spend less time on their computer screens. We're excited for you to meet them!"
          },
          {
            title: "More than guests",
            content: "Our community doesn't just want a place to lay our heads. We've held build weeks to help put up saunas, blaze trails, and dig fire pits to help our caretakers develop their properties. We want a place where we can contribute to the experience and call their own. And that could be yours."
          },
        ]}
      />

      <SimpleCallToAction
        title="Buy a place with your friends"
        cta={{ 
          href: "https://creatorcabins.typeform.com/to/kvLtc3xG?utm_source=website",
          label: "Get Started" 
        }}
      />
    </>
  )
}


