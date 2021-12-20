import Layout from "../../components/Layout";
import { Wrapper } from "@cabindao/topo";
import { styled } from "../../stitches.config";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import ButtonLink from "../../components/ButtonLink";
import HeroPattern from "../../components/HeroPattern";
import guestsOutdoor from "../../public/guestsOutdoors.jpg";

const Container = styled("section", {
  pt: "$12",
});

const Header = styled("h1", {
  fontSize: 32,
  lineHeight: "44px",
  color: "$forest",
  fontFamily: "$mono",
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

const ProductsHero = () => (
  <Container>
    <Wrapper>
      <HeroContainer>
        <HeroPattern width={17} height={4} />
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

const PRODUCTS: ProductData[] = [
  {
    name: "NFT Passports",
    description: "Create and mint NFTs for membership—without the tech stuff",
    path: "passports",
  },
];

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
              src={guestsOutdoor}
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
