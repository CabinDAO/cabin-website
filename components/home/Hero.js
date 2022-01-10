import { styled } from "@stitches";
import Wrapper from "@components/Wrapper";
import heroImage from "@public/heroImage.jpg";
import HeroFrame from "@components/HeroFrame";

export default function Hero() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <h1>A decentralized city built by creators, for creators</h1>
          <HeroFrame src={heroImage} alt="A real view of a cabin" />
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled("section", {
  pt: "$12",
});

const Content = styled("div", {
  h1: {
    fontFamily: "$mono",
    fontSize: "$xxl",
    fontWeight: 600,
    lineHeight: 1.6,
    maxWidth: "24rem",
    mt: "0",
    mb: "$12",
  },
  "@md": {
    h1: {
      fontSize: "$xxxl",
      maxWidth: "32rem",
      mt: "$4",
      mb: "$24",
    },
  },
});
