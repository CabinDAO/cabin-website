import Wrapper from "../components/Wrapper";
import { HeroFrame } from "@components"
import Image from "next/image";
import { styled } from "@cabindao/topo";

export default function UnderConstruction({
  title,
  description,
  src,
}: {
  title: string;
  description?: string;
  src: string;
}) {
  return (
    <Container>
      <Wrapper>
        <Content>
          <h1>{title}</h1>
          <p>{description}</p>
          <HeroFrame src={src} alt="A person buiding a cabin" />
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled("section", {
  pt: "$8",
  pb: "$12",
  "@md": {
    pt: "$12",
    pb: "$32",
  },
});

const Content = styled("div", {
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
      maxWidth: "32rem",
      mt: "$4",
    },
    '& p': {
      maxWidth: "48rem",
      mb: "$24",
    },
  },
});

