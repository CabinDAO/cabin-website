import { styled, Box, Flex, Heading, Text, Wrapper, Button } from "@cabindao/topo"
// Gallery
import { PreviewGallery, ImageCard } from "@components"
import { ArrowRightIcon } from '@radix-ui/react-icons'
// Image Cards
// NeighborhoodDetailCard

const galleryImages = [
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
  {
    src: "/neighborhood-zero-gallery/03.jpg",
    alt: "",
    width: 1,
    height: 1
  },
  {
    src: "/neighborhood-zero-gallery/04.jpg",
    alt: "",
    width: 1,
    height: 1
  },
  {
    src: "/neighborhood-zero-gallery/05.jpg",
    alt: "",
    width: 1,
    height: 1
  },
  {
    src: "/neighborhood-zero-gallery/06.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/07.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/08.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/09.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/10.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/11.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/12.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/13.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/14.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/15.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/16.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/17.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/18.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/19.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/20.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/21.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/22.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/23.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/24.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/25.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/26.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/27.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/28.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/29.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/30.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/31.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/32.jpg",
    alt: "",
    width: 4,
    height: 3
  },
  {
    src: "/neighborhood-zero-gallery/33.jpg",
    alt: "",
    width: 4,
    height: 3
  },
]

export default function NeighborhoodPreview() {
  return (
    <>
      <Box as="section" css={{ position: "relative", pb: "$20" }}>
        <Wrapper>
          <Box css={{mb: "$20"}}>
            <PreviewGallery images={galleryImages} />
          </Box>
          <Box>
            <Box css={{
              mb: "$12",
              "@md": {
                width: "50%",
                float: "right",
                ml: "$6"
              }
            }}>
              <DetailBox />
            </Box>
            <Heading as="h5" mono uppercase css={{m:0}}>Neighborhood Zero</Heading>
            <Heading as="h1" sans css={{fontSize: "$xxl", mt: "$2", mb: "$8"}}>Cabin in the Texas Hill Country</Heading>
            <Text css={{fontSize: "$lg"}}>
              Neighborhood Zero is the first node in Cabin’s decentralized city. It is Cabin’s home away from home — the place we go back to for retreats, residencies, and build weeks. For the first time, we are opening it up to the wider Cabin network and establishing the first long-term coliving neighborhood in our community.
            </Text>
            <Text css={{fontSize: "$lg"}}>
              The property sits on 28 rolling acres in the Texas Hill Country — secluded enough to see every star in the night sky, but still only 45 minutes from downtown Austin.
            </Text>
            <Button leftIcon={<ArrowRightIcon />} type="link">
              <Text weight="bold">Show More</Text>
            </Button>
          </Box>
        </Wrapper>
      </Box>
      <Box as="section" css={{pb: "$20"}}>
        <Wrapper>
          <Box css={{
            display: "grid",
            gridTemplateRows: "repeat(2, 1fr)",
            rowGap: "$8",
            "@md": {
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "unset",
              columnGap: "$8"
            }
          }}>
            <ImageCard {...galleryImages[0]} ratio={16 / 9}/>
            <ImageCard {...galleryImages[1]} ratio={16 / 9}/>
          </Box>
        </Wrapper>
      </Box>
      </>
  )
}

function DetailBox() {
  return (
    <Box css={{background: "$forest", color: "$sand", padding: "$4 $6"}}>
      <Heading css={{fontSize: "$xxl"}}>$1,250 - 1,500 / Month</Heading>
      <Flex content="space-between">
        <Box>
          <Heading as="h6" css={{fontSize: "$xs", m: 0}} uppercase mono>Start Date</Heading>
          <Text css={{fontSize: "$xxl", my: "$2"}}>10/1/2022</Text>
        </Box>
        <Box>
          <Heading as="h6" css={{fontSize: "$xs", m: 0}} uppercase mono>Start Date</Heading>
          <Text css={{fontSize: "$xxl", my: "$2"}}>9/31/2022</Text>
        </Box>
      </Flex>
      <Heading css={{display: "block", fontSize: "$xxl", mt: "$2"}}>No. of Bedrooms: 8</Heading>
      <Box css={{display: "block", mb: "$8", mt: "$12"}}>
        <Button tone="wheat" css={{ width: "100%" }}>Apply</Button>
      </Box>
      <Box>
        <Flex content="space-between">
          <Text css={{my: "$2"}}>All-inclusive Food Budget</Text>
          <Text css={{my: "$2"}}>$300 / month</Text>
        </Flex>
        <Flex content="space-between">
          <Text css={{my: "$2"}}>Unlimited Sauna Use</Text>
          <Text css={{my: "$2"}}>Included</Text>
        </Flex>
        <Flex content="space-between">
          <Text css={{my: "$2"}}>Unlimited Cow Rides</Text>
          <Text css={{my: "$2"}}>Included</Text>
        </Flex>
        <Flex content="space-between">
          <Text css={{my: "$2"}}>200mb/s Internet</Text>
          <Text css={{my: "$2"}}>Included</Text>
        </Flex>
      </Box>
    </Box>
  )
}
