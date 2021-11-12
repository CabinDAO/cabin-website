import Image from 'next/image'
import { styled } from '../../stitches.config.ts';
import Wrapper from '../Wrapper';
import bgImage from '../../public/stars.jpg';
import ArrowLink from '../ArrowLink';

export default function Past() {
  return (
    <Container>
      <Image
        src={bgImage}
        alt="A stary night sky in Texas hill country"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={50}
      />
      <Wrapper>
        <Content>
          <Intro>
            <h2>Past initiatives & research</h2>
          </Intro>
          <Features>
            <Feature>
              <h3>Crowdfunded 12 one-month residencies</h3>
              <ArrowLink href="/" label="Read more" />
            </Feature>
            <Feature>
              <h3>First living creature as an NFT</h3>
              <ArrowLink href="/" label="Read more" />
            </Feature>
            <Feature>
              <h3>Buried treasure chest with an ETH wallet</h3>
              <ArrowLink href="/" label="Read more" />
            </Feature>
          </Features>
        </Content>
      </Wrapper>
    </Container>
  )
}

const Container = styled('section', {
  position: 'relative',
  bc: '$forest',
  py: '$20',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '$forest',
    opacity: '0.50',
  },
  img: {
    filter: 'grayscale(1) contrast(0.5) brightness(0.5)',
  },
  '@md': {
    py: '$24',
  },
});

const Content = styled('div', {
  position: 'relative',
  color: '$sand',
  zIndex: '$1',
  border: '1px solid $sprout',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '$forest',
    opacity: '0.50',
  },
});

const Intro = styled('div', {
  px: '$8',
  py: '$6',
  borderBottom: '1px solid $sprout',
  position: 'relative',
  zIndex: '$1',
  h2: {
    m: 0,
    fontSize: '$xxl',
    fontFamily: '$mono',
    fontWeight: '$600',
  },
  '@md': {
    px: '$10',
    py: '$8',
  },
});

const Features = styled('div', {
  display: 'flex',
  position: 'relative',
  zIndex: '$1',
  flexDirection: 'column',
  '@md': {
    flexDirection: 'row',
  },
});

const Feature = styled('div', {
  px: '$8',
  pt: '$6',
  pb: '$4',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flex: '1',
  borderBottom: '1px solid $sprout',
  h3: {
    mt: 0,
    mb: '$3',
    fontSize: '$xl',
    fontFamily: '$mono',
    fontWeight: '$600',
  },
  '&:last-of-type': {
    border: 'none',
  },
  '@md': {
    px: '$10',
    pt: '$8',
    pb: '$6',
    borderBottom: 'none',
    borderRight: '1px solid $sprout',
    h3: {
      mb: '$4',
    },
  },
});

