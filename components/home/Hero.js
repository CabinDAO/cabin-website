import Image from 'next/image'
import Wrapper from '../../components/Wrapper'
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

const Content = styled('div', {
  br: '$pill',
  boxShadow: '0 0 0 $sizes$px $colors$sprout',
  overflow: 'hidden',
  position: 'relative',
  h1: {
    fontFamily: '$mono',
    fontSize: '$xxxl',
    fontWeight: 600,
    lineHeight: 1.5,
    m: '0',
    position: 'absolute',
    width: '100%',
    maxWidth: '40rem',
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
});