import Wrapper from "../src/components/Wrapper"
import { PrimaryHero, SimpleCallToAction } from "@templates"

import Image from 'next/image'
import { styled } from "@cabindao/topo";
import { HomeIcon, SunIcon, LightningBoltIcon } from '@radix-ui/react-icons'

const Intro = styled("section", {
  pt: "$8",
  pb: "$12",
  "@md": {
    pt: "$12",
    pb: "$32",
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
  "@md": {
    py: "$32",
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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  pt: "$10",
  textAlign: "center",
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
    <>
      <Intro>
        <Wrapper>
          <PrimaryHero
            title="Our vision is to build a network city for creators"
            subtitle="Cabin is an experiment in the future of cities: decentralized, physical nodes tied together by a shared culture, economy, and governance structure."
          />

          <Followup>
            <div>
              <h2>Defining our Network City</h2>
              <p>Cities are places with a high density of shared culture, economy, and governance. Creating this density historically required a city to be located in one place—but cities adapt to new technologies. The cities we live in today are designed around cars. We believe cities of the future will be physically decentralized and organized online.</p>
            </div>
          </Followup>
        </Wrapper>
      </Intro>

      <FirstStep>
        <Wrapper>
          <Step>
            <h2>Cabin is building a global, network city for online creators</h2>
            <p>Location-flexible knowledge workers who make a living online. Our city’s community, culture, and economy starts online and then build physical hubs IRL.</p>
          </Step>
          <Frame>
            <Image
              src={"/visionStepImage.jpg"}
              alt="People sitting around a table solving problems"
              layout="responsive"
              width={984}
              height={340}
            />
          </Frame>
          <Meaning>
            <h3>Cabin neighborhoods that typically share three characteristics:</h3>
            <div>
              <MeaningItem>
                <div>
                  <HomeIcon />
                </div>
                <p>Strong community</p>
              </MeaningItem>
              <MeaningItem>
                <div>
                  <LightningBoltIcon />
                </div>
                <p>Fast Internet</p>
              </MeaningItem>
              <MeaningItem>
                <div>
                  <SunIcon />
                </div>
                <p>Access to Nature</p>
              </MeaningItem>
            </div>
          </Meaning>
        </Wrapper>
      </FirstStep>

      <SimpleCallToAction
        title="Interested in learning more?"
        cta={{
          href: "https://docs.google.com/document/d/1VadHFZTnvmIRWLqmKcaDa1HXtr7LxK1WuXbW1HURFWM/edit#",
          label: "Read the Litepaper"
        }}
      />
    </>
  );
};

export default VisionPage;
