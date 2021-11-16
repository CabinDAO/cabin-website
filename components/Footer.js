import Logo from "./Logo";
import { styled } from '../stitches.config.ts';
import Wrapper from '../components/Wrapper';
import Link from 'next/link'

export default function Footer() {

  const nav = (
    <Nav>
      <a external target="_blank" href="https://app.clarity.so/%E2%82%A1ABIN">
        Wiki
      </a>
      <a external target="_blank" href="https://creators.mirror.xyz/">
        Mirror
      </a>
      <a external target="_blank" href="https://discord.gg/N6hVmFygjR">
        Discord
      </a>
      <a external target="_blank" href="https://github.com/CabinDAO">
        Github
      </a>
      <a external target="_blank" href="https://twitter.com/creatorcabins">
        Twitter
      </a>  
      <a external target="_blank" href="https://www.instagram.com/creatorcabins/">
        Instagram
      </a>  
    </Nav>
  ); 

  return (
    <Container>
      <Wrapper>
        <Content>
          <Logo />
          <Links>
            {nav}
          </Links>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled('footer', {
  bc: '$forest',
  color: '$sand',
  pt: '$12',
  pb: '$6',
  '@md': {
    pb: '$8',
  },
});

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Nav = styled('div', {
  mt: '$6',
  display: 'flex',
  flexDirection: 'column',
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
  '@md': {
    flexDirection: 'row',
  },
});

const Links = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flex: 2,
});