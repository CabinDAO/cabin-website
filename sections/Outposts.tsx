import { Box, Container, Heading, Text, Flex } from "@cabindao/topo";
import { NeighborhoodDetail } from "@templates"

const images = [
  {
    src: "/neighborhoods/Mana.jpeg",
    alt: "",
    width: 1200,
    height: 600,
  },
  {
    src: "/neighborhoods/web3-travelers.png",
    alt: "",
    width: 1024,
    height: 1024,
  },
  {
    src: "/neighborhoods/red-door-tv.jpeg",
    alt: "",
    width: 1677,
    height: 899,
  },
]

export default function Outposts() {
  return (
    <Box css={{ background: "$forest", color: "$sand", py: "$12" }}>
      <Container>
        <Heading>Outposts</Heading>
        <Text css={{ maxWidth: 500, fontSize: "$lg" }}>We believe in the power of bringing people together IRL, especially for decentralized and distributed teams.</Text>
        <Box
          css={{
            display: "grid",
            "@md": {
              gridTemplateColumns: "repeat(3, 1fr)"
            }
          }}
        >
          <Box css={{
            "@md": {
              mr: "$4"
            }
          }}>
            <NeighborhoodDetail
              image={images[0]}
              title="Mana Retreat Center"
              description="This cabin offers 1250 square feet of indoor living space and an incredible 800 square foot deck with panoramic views. The house is an elevated split level with three bedrooms, two baths, an open floor plan living room, dining room, and kitchen. Rooms are furnished and include high-speed internet, utilities, and cleaning service."
            />
          </Box>
          <Box css={{
            "@md": {
              mr: "$4"
            }
          }}>
            <NeighborhoodDetail
              image={images[1]}
              title="Web3 Travelers"
              description="A camping retreat on a mysterious Greek island where we will have a chance to deepen our relationships and our knowledge of Web3. Who’s excited already?"
            />
          </Box>
          <Box css={{
            "@md": {
              ml: "$4"
            }
          }}>
            <NeighborhoodDetail
              image={images[2]}
              title="Red Door TV"
              description="Red Door TV is a creative community based in Las Vegas, 10 minutes from the airport and 10 minutes from the strip. The main cast that live together in the house are artists, YouTubers,  musicians, dancers, models, and more. We’ve been hosting an average of 3-4 guests per month, mostly other creatives who want to meet like-minded folks and collaborate."
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
