import Link from 'next/link'
import { styled } from '../stitches.config.ts';
import ButtonLink from './ButtonLink';
import Wrapper from './Wrapper';

export default function Header() {
  return (
    <Bar>
      <Wrapper>
        <Container>
          <Links>
            <Logo>
              <Link href="/">
                <a>Cabin</a>
              </Link>
            </Logo>
            <Nav>
              <Link href="/about">
                <a>About</a>
              </Link>
              <Link href="/cabins">
                <a>Cabins</a>
              </Link>
              <Link href="/programs">
                <a>Programs</a>
              </Link>
              <Link href="/community">
                <a>Community</a>
              </Link>
            </Nav>
          </Links>
          <ButtonLink label="Join the community" href="/join" />
        </Container>
      </Wrapper>
    </Bar>
  )
}

const Bar = styled('header', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$sand',
});

const Container = styled('div', {
  height: '$20',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Logo = styled('div', {
  fontSize: '$xxxl',
  fontWeight: 600,
  m: '0',
});

const Links = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const Nav = styled('div', {
  display: 'flex',
  ml: '$6',
  alignItems: 'center',
  fontFamily: '$mono',
  fontSize: '$sm',
  textTransform: 'uppercase',
  a: {
    display: 'flex',
    height: '$10',
    px: '$4',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': { 
      textDecoration: 'underline',
    },
  },
});