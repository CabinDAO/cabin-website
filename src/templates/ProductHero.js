import Image from 'next/image'
import Link from "next/link"
import { styled, Wrapper, Box, Heading, Text, Button, Flex } from "@cabindao/topo"
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

const IntroContent = styled("div", {
  margin: "$12 0",
  h1: {
    fontFamily: "$mono",
    fontSize: "$xxl",
    fontWeight: 600,
    lineHeight: 1.6,
    maxWidth: "24rem",
    mt: "0",
  },
  '& p': {
    lineHeight: 1.6,
    mb: "$12",
  },
  "@md": {
    h1: {
      fontSize: "$xxxl",
      maxWidth: "40rem",
      mt: "$4",
    },
    '& p': {
      maxWidth: "48rem",
      mb: "$24",
    },
  },
});

export default function ProductHero({
  title,
  content,
  cta,
  src
}) {
  return (
    <Wrapper>
      <IntroContent>
        <Flex>
          <Box css={{ flex: 1 }}>
            <Heading as="h1">{title}</Heading>
            <Text>{content}</Text>
            <Link href={cta.href} passHref>
              <Button tone="wheat">{cta.label}</Button>
            </Link>
          </Box>

          <Box css={{ position: "relative", flex: 1, maxWidth: 200 }}>
            <AspectRatio.Root ratio={9/16}/>
            <Image
              src={"/passport.png"}
              alt={"Picture of Cabin's Passport card"}
              layout="fill"
              width="300"
              height="300"
            />
          </Box>
        </Flex>
      </IntroContent>
    </Wrapper>
  )
}
