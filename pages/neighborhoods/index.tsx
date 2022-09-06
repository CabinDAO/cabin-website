import { Heading, Wrapper, Container, Flex, Box } from "@cabindao/topo"
import { PrimaryHero, SimpleCallToAction, NeighborhoodDetail } from "@templates"
import { NeighborhoodZeroFeature } from "@sections"
import Outposts from "sections/Outposts"

const images = [
  {
    src: "/neighborhoods/montaia.jpg",
    alt: "",
    width: 750,
    height: 562,
  },
  {
    src: "/neighborhoods/radish.png",
    alt: "",
    width: 992,
    height: 638,
  },

]

export default function Neighborhoods() {
  return (
    <>
      <PrimaryHero
        title="Cabin is a network of independent neighborhoods in a network city"
        subtitle="We call the properties in our network Neighborhoods: organizations that own and operate independent properties in the network."
      />

      <NeighborhoodZeroFeature />

        <Wrapper>
          <Box css={{
            "@lg": {
              display: "flex"
            }
          }}>
            <Box css={{
              "@lg": {
                mr: "$6"
              }
            }}>
              <NeighborhoodDetail image={images[0]} title="Montaia" description=" Montaia Basecamp is a regenerative co-living community nestled remotely in the Eastern           Sierra Mountains  of California. This space offers a unique foundation that allows allows its community members to thrive in their remote work lifestyle while simultaneously diving into processes of personal, cultural, and ecological transformation." />
            </Box>
            <Box css={{
              "@lg": {
                ml: "$6"
              }
            }}>
              <NeighborhoodDetail image={images[1]} title="Radish" description="Radish has been called a retirement home for millenials OR a dinner party masquerading as a
                colliving community. At its core is what we call the “Obvious Truth” - “We are happiest surrounded by people we love and admire. These people make us the best possible versions of ourselves.” Don’t worry, we are #notacult and we chant this every night." />
            </Box>
          </Box>
        </Wrapper>

      <Outposts />

      <SimpleCallToAction
        title="Want to become a Caretaker in the Cabin Network?"
        cta={{ href: "/neighborhoods/become-a-neighborhood", label: "Start a Neighborhood" }}
        theme="dark"
      />
    </>
  )
}


