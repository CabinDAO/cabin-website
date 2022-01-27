import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import visionImage from "../public/visionImage.jpg";
import Image from 'next/image'
import { styled } from "../stitches.config";

const Intro = styled("section", {
  pt: "$8",
  pb: "$12",
  "@md": {
    pt: "$12",
    pb: "$32",
  },
});

const IntroContent = styled("div", {
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

const Followup = styled("div", {
  mt: "$12",
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  h2: { 
    mt: "$1",
    mb: "$0",
    fontFamily: "$mono",
    fontSize: "$xl",
    fontWeight: 600,
    lineHeight: 1.6,
    maxWidth: "28rem",
    flex: "1",
  },
  "@md": {
    mt: "$20",
    h2: {
      fontSize: "$xxl",
      maxWidth: "40rem",
    },
    div: {
      ml: "33%",
    },
  },
});

const VisionPage = () => {
  return (
    <Layout>
      <Intro>
        <Wrapper>
          <IntroContent>
            <h1>Our vision is to build a decentralized city for creators.</h1>
            <p>
              Cabin is an experiment in the future of cities: decentralized physical nodes tied together by a shared culture, economy, and governance structure.            
            </p>
            <Frame>
              <Image
                src={visionImage}
                alt="Sime trees backlit by a sunrise"
                layout="responsive"
                width={984}
                height={340}
              />
            </Frame>
          </IntroContent>
          <Followup>
            <div>
              <h2>What defines a city?</h2>
              <p>
                When you think of cities, you may think of the boulevards of Paris or the skyscrapers of New York. But that's just the stage. Today, creativity and social interactions have increasingly shifted online—breaking geographic boundaries once held by traditional cities. Now, it&apos;s not the place that matters so much, but the density of creative ideas and interesting people residing in that space that define a city.
              </p>
            </div>
          </Followup>
        </Wrapper>
      </Intro>
    </Layout>
  );
};

export default VisionPage;
