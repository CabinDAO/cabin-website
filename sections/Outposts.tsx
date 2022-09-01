import { Box, Container, Heading, Text, Flex } from "@cabindao/topo";
import { NeighborhoodDetail } from "@templates"

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

export default function Outposts() {
  return (
    <Box css={{ background: "$forest", color: "$sand", py: "$12" }}>
      <Container>
        <Heading>Outposts</Heading>
        <Text css={{ maxWidth: 500, fontSize: "$lg" }}>We believe in the power of bringing people together IRL, especially for decentralized and distributed teams.</Text>
        <Flex>
          <Box css={{ mr: "$4" }}>
            <NeighborhoodDetail image={images[0]} title="Montaia" description="This cabin offers 1250 square feet of indoor living space and an incredible 800 square foot deck with panoramic views. The house is an elevated split level with three bedrooms, two baths, an open floor plan living room, dining room, and kitchen. Rooms are furnished and include high-speed internet, utilities, and cleaning service." cta={{ href: "/", label: "View more details" }} />
          </Box>
          <Box css={{ mr: "$4" }}>
            <NeighborhoodDetail image={images[0]} title="Montaia" description="This cabin offers 1250 square feet of indoor living space and an incredible 800 square foot deck with panoramic views. The house is an elevated split level with three bedrooms, two baths, an open floor plan living room, dining room, and kitchen. Rooms are furnished and include high-speed internet, utilities, and cleaning service." cta={{ href: "/", label: "View more details" }} />
          </Box>
          <Box css={{ ml: "$4" }}>
            <NeighborhoodDetail image={images[0]} title="Montaia" description="This cabin offers 1250 square feet of indoor living space and an incredible 800 square foot deck with panoramic views. The house is an elevated split level with three bedrooms, two baths, an open floor plan living room, dining room, and kitchen. Rooms are furnished and include high-speed internet, utilities, and cleaning service." cta={{ href: "/", label: "View more details" }} />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
