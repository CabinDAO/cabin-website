import { styled, Wrapper, Button } from "@cabindao/topo"
import Link from "next/link"
import { HeroPattern } from "@components"

const HeroContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: 328,
  position: "relative",
  marginBottom: 80,
});

const ProductHeading = styled("div", {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textAlign: "center",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

const Title = styled("h2", {
  background: "$sand",
  fontFamily: "$mono",
  fontSize: "16px",
  lineHeight: "21px",
  padding: "8px 16px",
  margin: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "fit-content",
});

const HeaderBackground = styled("div", {
  padding: "8px 16px",
  background: "$sand",
  maxWidth: "676px",
  width: "100%",
});

const Header = styled("h1", {
  fontSize: 32,
  lineHeight: "44px",
  color: "$forest",
  fontFamily: "$mono",
  mt: 0,
  mb: 24,
  background: "$sand",
  textAlign: "center",
});

export default function AnnouncementHero() {
  return (
    <Wrapper>
      <HeroContainer>
        <HeroPattern width={17} height={6} />
        <ProductHeading>
          <Title>Friends LLC</Title>
          <HeaderBackground>
            <Header>Buy a place with your friends Become a Caretaker at Cabin</Header>
            <Link href="https://creatorcabins.typeform.com/to/kvLtc3xG?utm_source=website" passHref>
              <Button as="a" tone={"wheat"} type="primary">Get Started</Button>
            </Link>
          </HeaderBackground>
        </ProductHeading>
      </HeroContainer>
    </Wrapper>
  )
}
