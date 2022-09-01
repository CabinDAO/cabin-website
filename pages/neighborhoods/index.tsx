import { Heading, Container, Flex, Box } from "@cabindao/topo"
import { PrimaryHero, SimpleCallToAction, NeighborhoodDetail } from "@templates"
import { NeighborhoodZeroFeature } from "@sections"
import Outposts from "sections/Outposts"

const images = [
  {
    src: "/neighborhood-zero-gallery/01.jpg",
    alt: "",
    width: 800,
    height: 532,
  },
  {
    src: "/neighborhood-zero-gallery/02.jpg",
    alt: "",
    width: 4,
    height: 3,
  },

]

export default function Neighborhoods() {
  return (
    <>
      <PrimaryHero
        title="Our vision is to build a decentralized city for creators."
        subtitle="Cabin is an experiment in the future of cities: decentralized physical nodes tied together by a shared culture, economy, and governance structure."
      />

      <NeighborhoodZeroFeature />

      <Container css={{ mb: "$20" }}>
        <Flex>
          <Box css={{mr: "$6"}}>
            <NeighborhoodDetail image={images[0]} title="Montaia" description="This cabin offers 1250 square feet of indoor living space and an incredible 800 square foot deck with panoramic views. The house is an elevated split level with three bedrooms, two baths, an open floor plan living room, dining room, and kitchen. Rooms are furnished and include high-speed internet, utilities, and cleaning service." cta={{href:"/", label: "View more details"}} />
          </Box>
          <Box css={{ml: "$6"}}>
            <NeighborhoodDetail image={images[0]} title="Montaia" description="This cabin offers 1250 square feet of indoor living space and an incredible 800 square foot deck with panoramic views. The house is an elevated split level with three bedrooms, two baths, an open floor plan living room, dining room, and kitchen. Rooms are furnished and include high-speed internet, utilities, and cleaning service." cta={{href:"/", label: "View more details"}} />
          </Box>
        </Flex>
      </Container>

      <Outposts />

      <SimpleCallToAction
        title="Want to become a Caretaker in the Cabin Network?"
        cta={{ href: "/neighborhoods/become-a-neighborhood", label: "Start a Neighborhood" }}
        theme="dark"
      />
    </>
  )
}


