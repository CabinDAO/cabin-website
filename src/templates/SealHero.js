import { styled } from "@cabindao/topo";
import { Wrapper, HeroFrame } from "@components"
import heroImage from "../../public/hero.jpg";

export default function SealHero() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <HeroFrame src={heroImage} alt="A real view of a cabin" />
          <h1>A network city for <br />
            online creators</h1>
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
    mb: "$6",
  },
  "@md": {
    h1: {
      fontSize: "$xxxl",
      maxWidth: "32rem",
      mt: "$8",
      mb: "$12",
    },
  },
});
