import Layout from "../../../components/Layout";
import { Button, Wrapper, Heading, Modal } from "@cabindao/topo";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { styled } from "../../../stitches.config";
import HeroPattern from "../../../components/HeroPattern";
import { useCallback, useContext, useState } from "react";
import { useRouter } from "next/dist/client/router";

const Container = styled("section", {
  pt: "$12",
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

const Header = styled("h1", {
  fontSize: 32,
  lineHeight: "44px",
  color: "$forest",
  fontFamily: "$mono",
  mt: 0,
  mb: 24,
  background: "$sand",
});

const HeroContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: 328,
  position: "relative",
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
});

const HeaderBackground = styled("div", {
  padding: "8px 16px",
  background: "$sand",
  width: "676px",
});

const BackButton = styled(Button, {
  marginBottom: 24,
  color: "$forest !important",
});

const ProductHero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const openModal = useCallback(() => setIsOpen(true), [setIsOpen]);
  const goBack = useCallback(() => router.push("/products"), [router]);
  return (
    <Container>
      <Wrapper>
        <>
          <BackButton
            leftIcon={<ArrowLeftIcon />}
            type="secondary"
            onClick={goBack}
            tone="wheat"
          >
            PRODUCTS
          </BackButton>
          <HeroContainer>
            <HeroPattern width={17} height={6} />
            <ProductHeading>
              <Title>NFT PASSPORTS</Title>
              <HeaderBackground>
                <Header>
                  Create and mint NFTs for membership—without the tech stuff
                </Header>
                <Button tone={"wheat"} type="primary" onClick={openModal}>
                  Request Beta Access
                </Button>
              </HeaderBackground>
              <Modal
                title="Request beta access"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                confirmText="Send request"
              ></Modal>
            </ProductHeading>
          </HeroContainer>
        </>
      </Wrapper>
    </Container>
  );
};

const PassportsLandingPage = () => {
  return (
    <Layout>
      <ProductHero />
    </Layout>
  );
};

export default PassportsLandingPage;
