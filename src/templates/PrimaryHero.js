import Image from 'next/image'
import { styled, Heading, Wrapper } from "@cabindao/topo"

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

const Frame = styled('div', {
  boxShadow: '0 0 0 $sizes$px $colors$sprout',
  lineHeight: '0',
  br: '$2',
  overflow: 'hidden',
  bc: '$forest',
  '@md': {
    br: '$3',
  },
});


export default function PrimaryHero({
  title,
  subtitle,
  imageUrl = "/visionImage.jpg",
  imageAlt = "Some trees backlit by a sunrise"
}) {
  return (
    <Wrapper>
      <IntroContent>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Frame>
          <Image
            src={imageUrl}
            alt={imageAlt}
            layout="responsive"
            width={984}
            height={340}
            />
        </Frame>
      </IntroContent>
    </Wrapper>
  )
}
