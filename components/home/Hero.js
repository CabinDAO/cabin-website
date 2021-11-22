import { styled } from '../../stitches.config.ts';
import Wrapper from '../Wrapper';
import Image from 'next/image'
import heroImage from '../../public/heroImage.jpg';

export default function Hero() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <h1>
            A decentralized city built by creators, for creators
          </h1>
          <Frame>
            <Image
              src={heroImage}
              alt="An areal view of a cabin"
            />
          </Frame>
        </Content>
      </Wrapper>
    </Container>
  )
}

const Container = styled('section', {
  pt: '$12',
});

const Content = styled('div', {
  h1: {
    fontFamily: '$mono',
    fontSize: '$xxl',
    fontWeight: 600,
    lineHeight: 1.6,
    maxWidth: '24rem',
    mt: '0',
    mb: '$12',
  },
  '@md': {
    h1: {
      fontSize: '$xxxl',
      maxWidth: '32rem',
      mt: '$4',
      mb: '$24',
    },
  },
});

const Frame = styled('div', {
  boxShadow: '0 0 0 $sizes$px $colors$sprout',
  lineHeight: '0',
  br: '$2',
  overflow: 'hidden',
  bc: '$forest',
  '@md': {
    br: '$3',
  },
});