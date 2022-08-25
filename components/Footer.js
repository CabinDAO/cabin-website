import Logo from "./Logo";
import Link from "next/link";
import { Wrapper, Button, Input } from "@cabindao/topo";
import { styled } from "@cabindao/topo";
import { useState } from "react";
import axios from "axios";

const Container = styled("footer", {
  bc: "$forest",
  color: "$sand",
  pt: "$12",
  pb: "$8",
  "@md": {
    pb: "$20",
  },
});

const Content = styled("div", {
  display: "flex",
  flexDirection: "column-reverse",
  width: "100%",
  mt: "$4",
  "@md": {
    flexDirection: "row",
    pb: "$20",
  },
});

const Nav = styled("div", {
  display: "flex",
  width: "100%",
  flexWrap: "wrap",
  "@md": {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
});

const News = styled("div", {
  flex: 2,
  display: "flex",
  flexDirection: "column",
  mb: "$8",
  h3: {
    fontSize: "$base",
    mb: "$2",
    fontFamily: "$mono",
    textTransform: "uppercase",
  },
  "& p": {
    fontSize: "$sm",
    my: "$2",
  },
});

const SignupRow = styled("div", {
  width: "100%",
  mt: 12,
  display: "flex",
  alignItems: "flex-end",
});

const SignupInput = styled("input", {
  fontFamily: "$sans",
  display: "flex",
  flex: 1,
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "$wheat",
  height: "$10",
  py: 0,
  px: "$3",
  mr: "$2",
  fontSize: "$base",
  color: "$sand",
  outline: "none",
  transition: "all 0.2s ease-in-out",
  background: "transparent",
  "&:focus": {
    boxShadow: "0px 0px 0px 1px $colors$wheat",
  },
  "&::placeholder": {
    color: "$sand",
    fontStyle: "italic",
    opacity: 0.75,
    fontWeight: 200,
  },
});

const Message = styled("p", {
  fontSize: "$xs",
});

const Links = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  fontFamily: "$mono",
  textTransform: "uppercase",
  mb: "$4",
  minWidth: "50%",
  h3: {
    fontSize: "$base",
    mb: "$2",
  },
  a: {
    display: "inline-block",
    fontSize: "$sm",
    opacity: "80%",
    my: "$2",
    "&:hover": {
      opacity: "100%",
      textDecoration: "underline",
    },
  },
  "@md": {
    minWidth: "0",
  },
});

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const onSubmit = async () => {
    setConfirmed(false);
    setError("");
    try {
      await axios.post("/api/convertkit", {
        formId: "2292308",
        email,
      });
      setConfirmed(true);
      setEmail("");
    } catch (err) {
      setError(err.message);
    }
  };

  const cabin = (
    <>
      <Link href="/vision">
        <a>Vision</a>
      </Link>
      <Link href="/contribute">
        <a>Contribute</a>
      </Link>
      <Link href="/visit">
        <a>Visit</a>
      </Link>
      <a target="_blank" rel="noreferrer" href="https://creators.mirror.xyz/">
        Media
      </a>
    </>
  );

  const products = (
    <>
      <Link href="/products/passports">
        <a>NFT Passports</a>
      </Link>
      <Link href="/products/daocamp">
        <a>DAO Camp</a>
      </Link>
    </>
  );

  const resources = (
    <>
      <a target="_blank" rel="noreferrer" href="https://app.clarity.so/cabin">
        Wiki
      </a>
      <a target="_blank" rel="noreferrer" href="https://creators.mirror.xyz/">
        Mirror
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://snapshot.org/#/cabindao.eth"
      >
        Snapshot
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/CabinDAO">
        Github
      </a>
    </>
  );

  const social = (
    <>
      <a target="_blank" rel="noreferrer" href="https://discord.gg/ttgRU7QKVE">
        Discord
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/creatorcabins"
      >
        Twitter
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/creatorcabins/"
      >
        Instagram
      </a>
    </>
  );

  return (
    <Container>
      <Wrapper>
        <Logo />
        <Content>
          <Nav>
            <Links>
              <h3>Cabin</h3>
              {cabin}
            </Links>
            <Links>
              <h3>Products</h3>
              {products}
            </Links>
            <Links>
              <h3>Resources</h3>
              {resources}
            </Links>
            <Links>
              <h3>Social</h3>
              {social}
            </Links>
          </Nav>
          <News>
            <h3>Weekly newsletter</h3>
            <p>Keep up with the latest news coming from the cabin community</p>
            <SignupRow>
              <SignupInput
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button tone={"wheat"} type="primary" onClick={onSubmit}>
                Submit
              </Button>
            </SignupRow>
            {error && <Message>{error}</Message>}
            {confirmed && <Message>Email subscribed</Message>}
          </News>
        </Content>
      </Wrapper>
    </Container>
  );
}
