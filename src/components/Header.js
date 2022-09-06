import Link from "next/link";
import { useState } from "react";
import { styled, Button } from "@cabindao/topo";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import ButtonLink from "./ButtonLink";
import Wrapper from "./Wrapper";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nav = (
    <Nav>
      <Link href="/vision">
        <a>Vision</a>
      </Link>
      <Link href="/coliving-pass">
        <a>Coliving Pass</a>
      </Link>
      <Link href="neighborhoods/become-a-neighborhood">
        <a>Become a Neighborhood</a>
      </Link>
    </Nav>
  );

  const joinButton = (
    <Link href="/live-at-cabin" passHref>
      <Button as="a" tone="wheat">Join Cabin</Button>
    </Link>
  );

  const toggle = (
    <MenuToggle onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
      {mobileMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
    </MenuToggle>
  );

  const mobileNav = (
    <MobileNav>
      <Container>
        <Wordmark>
          <Link href="/">
            <a>Cabin</a>
          </Link>
        </Wordmark>
        {toggle}
      </Container>
      <MobileMenu open={mobileMenuOpen}>
        {nav}
        {joinButton}
      </MobileMenu>
    </MobileNav>
  );

  const desktopNav = (
    <DesktopNav>
      <Container>
        <Wordmark>
          <Link href="/">
            <a>Cabin</a>
          </Link>
        </Wordmark>
        <Links>{nav}</Links>
        {joinButton}
      </Container>
    </DesktopNav>
  );

  return (
    <Bar>
      <Wrapper>
        {mobileNav}
        {desktopNav}
      </Wrapper>
    </Bar>
  );
}

const Bar = styled("header", {
  display: "flex",
  alignItems: "center",
  backgroundColor: "$sand",
  borderBottom: "1px solid $sprout",
  "@md": {
    border: "none",
  },
});

const MobileNav = styled("nav", {
  display: "flex",
  flexDirection: "column",
  "@md": {
    display: "none",
  },
});

const DesktopNav = styled("div", {
  display: "none",
  "@md": {
    display: "flex",
  },
});

const Container = styled("div", {
  height: "4rem",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@md": {
    height: "$20",
  },
});

const Wordmark = styled("div", {
  fontSize: "$xxl",
  fontWeight: 600,
  m: "0",
  "@md": {
    fontSize: "$xxxl",
    justifyContent: "center",
  },
});

const Links = styled("div", {
  display: "flex",
  alignItems: "center",
});

const Nav = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "$mono",
  fontSize: "$sm",
  textTransform: "uppercase",
  mb: "$4",
  a: {
    display: "flex",
    height: "$10",
    px: "$4",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      textDecoration: "underline",
    },
    span: {
      fontFamily: "$sans",
    },
  },
  "@md": {
    ml: "$6",
    mb: "0",
    flexDirection: "row",
  },
});

const MenuToggle = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "$10",
  width: "$10",
  border: "none",
  background: "none",
  svg: {
    height: "$6",
    width: "$6",
    color: "$forest",
  },
  "@md": {
    display: "none",
  },
});

const MobileMenu = styled("div", {
  display: "none",
  flexDirection: "column",
  alignItems: "center",
  mb: "$6",
  variants: {
    open: {
      true: {
        display: "flex",
      },
    },
  },
});
