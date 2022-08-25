import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import CallToAction from '../components/CallToAction';
import visionImage from "../public/visionImage.jpg";
import visionStepImage from "../public/visionStepImage.jpg";
import Image from 'next/image'
import { styled } from "@cabindao/topo";
import { HomeIcon, Share1Icon, RocketIcon } from '@radix-ui/react-icons'

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

const FirstStep = styled("div", {
  bc: "$forest",
  color: "$sand",
  py: "$12",
  mb: "$24",
  "@md": {
    py: "$32",
    mb: "$32",
  },
});

const Step = styled("div", {
  display: "flex",
  flexDirection: "column",
  mb: "$12",
  h2: { 
    flex: "1",
    fontFamily: "$mono",
    fontSize: "$xxl",
    fontWeight: 600,
    lineHeight: 1.6,
  },
  "& p": {
    flex: "1",
  },
  "@md": {
    mb: "$24",
    flexDirection: "row",
    h2: {
      fontSize: "$xxxl",
      maxWidth: "40rem",
      mt: "$4",
      pr: "$24",
    },
  },
});

const Meaning = styled("div", {
  pt: "$12",
  h3: { 
    fontFamily: "$mono",
    fontSize: "$xl",
    fontWeight: 600,
    lineHeight: 1.6,
  },
  "> div": {
    display: "flex",
    flexDirection: "column",
  },
  "@md": {
    pt: "$24",
    h3: {
      fontSize: "$xxl",
      textAlign: "center",
    },
    "> div": {
      flexDirection: "row",
    },
  },
});

const MeaningItem = styled("div", {
  pt: "$10",
  div: {
    height: "$12",
    width: "$12",
    border: "1px solid $sprout",
    br: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  svg: {
    height: "$5",
    width: "$5",
    color: "$sprout",
  },
  "@md": {
    pt: "$12",
    mr: "$20",
    "&:last-child": {
      mr: 0,
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
                alt="Some trees backlit by a sunrise"
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
                When you think of cities, you may think of the boulevards of Paris or the skyscrapers of New York. But that&apos;s just the stage. Today, creativity and social interactions have increasingly shifted online—breaking geographic boundaries once held by traditional cities. Now, it&apos;s not the place that matters so much, but the density of creative ideas and interesting people residing in that space that define a city.
              </p>
            </div>
          </Followup>
        </Wrapper>
      </Intro>
      <FirstStep>
        <Wrapper>
          <Step>
            <h2>First step: building bridges and becoming an embassy</h2>
            <p>
              DAOs today are somewhat like disparate nations, all working toward goals of decentralization, innovation and new forms of collaboration, but operating in distinct silos. As a first step toward building a global decentralized city, Cabin will build bridges both online and IRL for DAO operators to collaborate and further their individual projects.
            </p>
          </Step>
          <Frame>
            <Image
              src={visionStepImage}
              alt="People sitting around a table solving problems"
              layout="responsive"
              width={984}
              height={340}
            />
          </Frame>
          <Meaning>
            <h3>What it means to be an embassy for DAOs</h3>
            <div>
              <MeaningItem>
                <div>
                  <HomeIcon />
                </div>
                <p>
                  Establishing embassies and ambassadorships to foster DAO to DAO collaboration
                </p>
              </MeaningItem>
              <MeaningItem>
                <div>
                  <Share1Icon />
                </div>
                <p>
                  Hosting conferences, retreats, and events to bring DAO operators together IRL at Cabin nodes
                </p>
              </MeaningItem>
              <MeaningItem>
                <div>
                  <RocketIcon />
                </div>
                <p>
                  Building products and tooling that support the development of the DAO ecosystem
                </p>
              </MeaningItem>
            </div>
          </Meaning>
        </Wrapper>
      </FirstStep>
      <CallToAction />
    </Layout>
  );
};

export default VisionPage;
