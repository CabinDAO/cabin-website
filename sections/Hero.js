import { styled, Wrapper } from "@cabindao/topo";
import { HeroFrame } from "@components"

export default function Hero() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <HeroFrame src={"/hero.jpg"} alt="A real view of a cabin" />
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
