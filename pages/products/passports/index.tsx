import Layout from "../../../components/Layout";
import { Button, Wrapper, Modal, Input } from "@cabindao/topo";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { styled } from "../../../stitches.config";
import HeroPattern from "../../../components/HeroPattern";
import { useCallback, useState } from "react";
import { useRouter } from "next/dist/client/router";
import controlAccessImg from "../../../public/products/passports/g-control-access.png";
import memWoTokensImg from "../../../public/products/passports/g-mem-wo-tokens.png";
import mgOnePlaceImg from "../../../public/products/passports/g-mg-one-place.png";
import Vision from "../../../components/Vision";
import SideImage from "../../../components/SideImage";
import axios from "axios";

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
  textAlign: "center",
});

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

const HeaderBackground = styled("div", {
  padding: "8px 16px",
  background: "$sand",
  maxWidth: "676px",
  width: "100%",
});

const BackButton = styled(Button, {
  marginBottom: 24,
  color: "$forest !important",
});

const ProductHero = ({ openModal }: { openModal: () => void }) => {
  const router = useRouter();
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
            </ProductHeading>
          </HeroContainer>
        </>
      </Wrapper>
    </Container>
  );
};

const FeatureRows = styled("div", {
  display: "grid",
  gridAutoRows: "1fr",
  marginBottom: "64px",
});

const FeatureRow = styled("div", {
  display: "flex",
  flex: "1 1 0px",
  marginTop: "24px",
  marginBottom: "16px",
  justifyContent: "space-between",
  flexDirection: "column",
  gap: "40px",
  "@md": {
    flexDirection: "row",
  },
});

const FeatureCellContainer = styled("div", {
  boxSizing: "border-box",
  flex: "1 1 0px",
  background: "rgb(253,198,123,0.1)",
  borderTop: "4px solid $sprout",
  padding: "32px",
  boxShadow: "0px 4px 0px #00000008;",
});

const Text = styled("div", {
  textAlign: "center",
  "@md": {
    mt: "0",
    textAlign: "start",
  },
  fontSize: 14,
  h2: {
    fontSize: 20,
    lineHeight: "32px",
    margin: 0,
    marginBottom: "8px",
  },
});

const FeatureParagraphContent = styled("p", {
  margin: 0,
});

const FeatureCell = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <FeatureCellContainer>
      <Text>
        <h2>{title}</h2>
        <FeatureParagraphContent>{content}</FeatureParagraphContent>
      </Text>
    </FeatureCellContainer>
  );
};

const Features = () => {
  return (
    <Container>
      <Wrapper>
        <Header>Core Features</Header>
        <FeatureRows>
          <FeatureRow>
            <FeatureCell
              title="Create and mint NFTs"
              content="Whether you have a single membership tier or a complex access system, NFT Passports helps you seamlessly mint and integrate your community’s NFTs."
            />
            <FeatureCell
              title="Set limits"
              content="You decide if an NFT is available to the public, or only to certain wallet addresses. Perfect for private passes or other segmenting needs."
            />
            <FeatureCell
              title="Sell memberships"
              content="Using your community to generate revenue? Sell your public NFTs by setting a mint fee, and combine membership payment and access in one transaction."
            />
          </FeatureRow>
          <FeatureRow>
            <FeatureCell
              title="Public mint page"
              content="Have a stable link to share with your community so they can easily mint public NFTs without you needing to build or maintain your own page. "
            />
            <FeatureCell
              title="Manage NFTs"
              content="See all of your NFT Passports in one place so you can manage existing memberships and create new types."
            />
            <FeatureCell
              title="Unbundle membership and governance"
              content="Using NFT Passports to represent membership separates membership from governance and incentive functions, allowing you to mitigate the risk of tokens until there is a clear reason to use them."
            />
          </FeatureRow>
        </FeatureRows>
      </Wrapper>
    </Container>
  );
};

const FinalCtaContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid $sprout",
  borderRadius: "48px",
  py: "64px",
  marginBottom: "$20",
  width: "100%",
});

const FinalCtaContentContainer = styled("div", {
  textAlign: "center",
  maxWidth: "588px",
  width: "100%",
});

const FinalCta = ({ openModal }: { openModal: () => void }) => {
  return (
    <Container>
      <Wrapper>
        <FinalCtaContent>
          <FinalCtaContentContainer>
            <Header>Unbundle membership from your social token</Header>
            <Button tone={"wheat"} type="primary" onClick={openModal}>
              Request Beta Access
            </Button>
          </FinalCtaContentContainer>
        </FinalCtaContent>
      </Wrapper>
    </Container>
  );
};

const AccessNameRow = styled("div", {
  display: "flex",
});

const AccessInput = styled(Input, {
  mr: 8,
  mb: 32,
});

const PassportsLandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), [setIsOpen]);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Layout>
      <ProductHero openModal={openModal} />
      <Vision
        title={"Why Passports?"}
        description="NFTs are the best way to grant and manage membership, but until now have been mired in complicated contracts and messy manual tracking. And while you may be web3 tech savvy, your growing community may not. You need a simple and effective way to grant access that reduces friction and seamlessly onboards new members. With NFT Passports, we're changing what's possible for on-chain membership, giving you one place to easily create, mint, and manage your membership NFTs—no fancy tech stuff required."
      />
      <SideImage
        title="Represent membership without tokens"
        content="Keep your community on-chain without worrying about securities regulations, airdrops, or inaccessible token prices. NFT Passports avoid these issues entirely by giving members a simple way to represent membership while leaving you the flexibility to use tokens for governance, incentives, or other purposes."
        featureImage={memWoTokensImg}
      />
      <SideImage
        title="Control content and access"
        content="Easily onboard and classify new and existing members. Whether your community is open to anyone, or you want to keep some parts private, NFT Passports give you the flexibility to create NFTs for public, gated, and even paid memberships."
        featureImage={controlAccessImg}
        reversed
      />
      <SideImage
        title="Mint and manage in one place"
        content="Mint and manage your NFT Passports in one location. Your use of NFT Passports includes a user-friendly stable link for public minting, so you won’t need to worry about building a custom front-end for your contracts. And your management is centralized, too, with a private dashboard where you can create new and see all existing NFTs in one place without having to wade through Etherscan."
        featureImage={mgOnePlaceImg}
      />
      <Features />
      <FinalCta openModal={openModal} />
      <Modal
        title="Request beta access"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        confirmText="Send request"
        onConfirm={() => {
          axios.post("/api/convertkit", {
            formId: "2893401",
            name,
            organization,
            email,
          });
        }}
      >
        <AccessNameRow>
          <AccessInput
            value={name}
            label="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <AccessInput
            value={organization}
            label="Organization"
            onChange={(e) => {
              setOrganization(e.target.value);
            }}
          />
        </AccessNameRow>
        <AccessInput
          value={email}
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Modal>
    </Layout>
  );
};

export default PassportsLandingPage;
