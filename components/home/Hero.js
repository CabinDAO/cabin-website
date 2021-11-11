import Image from 'next/image'
import heroBackground from '../../public/heroBackground.png'
import { styled } from '../../stitches.config.ts';

export default function Hero() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Image
            src={heroBackground}
            alt="Illustration of a solarpunk village"
          />
          <h1>
            <span>
              Building shelter and community for online creators
            </span>
          </h1>
        </Content>
      </Wrapper>
    </Container>
  )
}

const Container = styled('section', {
  backgroundColor: '$sand',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const Wrapper = styled('div', {
  width: '100%',
  maxWidth: '64rem',
  mx: 'auto',
  '@md': {
    px: '$4',
  },
});

const Content = styled('div', {
  overflow: 'hidden',
  position: 'relative',
  h1: {
    fontFamily: '$mono',
    fontSize: '$xxl',
    fontWeight: 600,
    lineHeight: 1.6,
    m: '0',
    position: 'absolute',
    width: '100%',
    maxWidth: '28rem',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '$sand',
    span: {
      bc: '$forest',
      boxShadow: '$sizes$4 $sizes$3 $colors$forest, -$sizes$4 -$sizes$2 $colors$forest, -$sizes$4 $sizes$3 $colors$forest, $sizes$4 -$sizes$2 $colors$forest',
    }
  },
  '@md': {
    br: '$pill',
    boxShadow: '0 0 0 $sizes$px $colors$sprout',
    h1: {
      fontSize: '$xxxl',
      maxWidth: '40rem',
    },
  },
});