import Layout from "../../components/Layout";
import { Wrapper } from "@cabindao/topo";
import { styled } from "../../stitches.config";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import ButtonLink from "../../components/ButtonLink";

const Container = styled("section", {
  pt: "$12",
});

const Header = styled("h1", {
  fontSize: 32,
  lineHeight: "44px",
  color: "$forest",
  mt: 0,
  mb: 16,
});

const HeroContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: 200,
  position: "relative",
  h1: {
    position: "absolute",
    left: 4,
    top: "calc(50% - 22px)",
  },
});

const Row = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

const HeroElement = styled("div", {
  marginTop: 2.31,
  width: 8,
  height: 4.62,
  backgroundColor: "$sprout",
  position: "relative",
  "&:before": {
    content: "",
    borderLeft: "4px solid transparent",
    borderRight: "4px solid transparent",
    position: "absolute",
    top: -2.31,
    borderBottom: "2.31px solid $sprout",
  },
  "&:after": {
    content: "",
    borderLeft: "4px solid transparent",
    borderRight: "4px solid transparent",
    position: "absolute",
    bottom: -2.31,
    borderTop: "2.31px solid $sprout",
  },
});

const InnerHeroElement = styled(HeroElement, {
  transform: "scale(0.7,0.7)",
  backgroundColor: "$sand",
  zIndex: 1,
  marginTop: 0,
  "&:before": {
    borderBottomColor: "$sand",
  },
  "&:after": {
    borderTopColor: "$sand",
  },
});

const ProductsHero = () => (
  <Container>
    <Wrapper>
      <HeroContainer>
        {Array(4).fill(
          <Row>
            {Array(17).fill(
              <HeroElement>
                <InnerHeroElement />
              </HeroElement>
            )}
          </Row>
        )}
        <Header>Products built by Cabin</Header>
      </HeroContainer>
    </Wrapper>
  </Container>
);

type ProductData = {
  name: string;
  description: string;
  path: string;
};

const PRODUCTS: ProductData[] = [];
/*
[
  {
    name: "NFT Passports",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    path: "passports",
  },
];
*/

const ProductInfoContainer = styled("section", {
  pt: "$20",
});

const ProductInfoInnerContainer = styled("section", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const ProductImageContainer = styled("div", {
  textAlign: "end",
  minWidth: "50%",
});

const ProductInfo = (props: ProductData) => {
  return (
    <ProductInfoContainer>
      <Wrapper>
        <ProductInfoInnerContainer>
          <div>
            <Header>{props.name}</Header>
            <p>{props.description}</p>
            <Link href={`/products/${props.path}`} passHref>
              <a>
                <ArrowRightIcon /> Read More
              </a>
            </Link>
          </div>
          <ProductImageContainer>
            <Image
              src={`/products/${props.path}.png`}
              alt={`Image for ${props.name}`}
              width={"100%"}
              height={"100%"}
            />
          </ProductImageContainer>
        </ProductInfoInnerContainer>
      </Wrapper>
    </ProductInfoContainer>
  );
};

const ProductCTAContainer = styled("section", {
  pt: "$20",
});

const ProductCTAInnerContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid $sprout",
  borderRadius: "48px",
  padding: "64px",
  marginBottom: "$20",
  textAlign: "center",
});

const CTAHeader = styled(Header, {
  marginBottom: 24,
});

const ProductCTA = () => {
  return (
    <ProductCTAContainer>
      <Wrapper>
        <ProductCTAInnerContainer>
          <CTAHeader>Interested in helping us build out products?</CTAHeader>
          <ButtonLink
            external
            label="Join the community"
            href="https://discord.gg/N6hVmFygjR"
            target="_blank"
          />
        </ProductCTAInnerContainer>
      </Wrapper>
    </ProductCTAContainer>
  );
};

const PassportsLandingPage = () => {
  return (
    <Layout>
      <ProductsHero />
      {PRODUCTS.map((p) => (
        <ProductInfo {...p} key={p.name} />
      ))}
      <ProductCTA />
    </Layout>
  );
};

export default PassportsLandingPage;
