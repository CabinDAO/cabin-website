import { styled } from "../stitches.config.ts";
import Wrapper from "../components/Wrapper";
import ButtonLink from "./ButtonLink";
import ArrowLink from "./ArrowLink";

export default function CallToAction() {
  return (
    <Wrapper>
      <Container>
        <h2>Meet up and collaborate in Texas Hill Country</h2>
        <Actions>
          <ButtonLink
            external
            target="_blank"
            href="https://discord.gg/ttgRU7QKVE"
            label="Join the community"
          />
        </Actions>
      </Container>
    </Wrapper>
  );
}

const Container = styled("div", {
  mb: "$24",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  px: "$10",
  pt: "$10",
  pb: "$1",
  border: "1px solid $sprout",
  br: "$2",
  h2: {
    fontFamily: "$mono",
    fontSize: "$xxl",
    fontWeight: 600,
    lineHeight: 1.6,
    mt: "0",
  },
  "@md": {
    br: "$3",
    mb: "$32",
    py: "$12",
    h2: {
      fontSize: "$xxxl",
      maxWidth: "40rem",
    },
  },
});

const Actions = styled("div", {
  mt: "$2",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "> *": {
    mb: "$6",
  },
  "@md": {
    flexDirection: "row",
    "> *": {
      mb: "$0",
      mr: "$6",
    },
  },
});
