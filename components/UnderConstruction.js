import Wrapper from "../components/Wrapper";
import HeroFrame from "../components/HeroFrame";
import constructionImage from "../public/constructionImage.jpg";
import { styled } from "../stitches.config";

export default function UnderConstruction() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <h1>Under construction</h1>
          <p>
            This page is currently under construction. Check back soon for the content you&apos;re seeking. Don&apos;t hesitate to join our discord and connect with our community members to learn more about us in the mean time!
          </p>
          <HeroFrame src={constructionImage} alt="A person buiding a cabin" />
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

