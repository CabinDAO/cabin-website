import Image from 'next/image'
import bgImage from '../../public/guestsOutdoors.jpg';
import featureImage from '../../public/guestsGroup.jpg';
import { styled } from '../../stitches.config.ts';
import Wrapper from '../Wrapper';

export default function SideImage() {
  return (
    <Container>
      <Image
        src={bgImage}
        alt="People sitting around a campfire"
        layout="fill"
        objectFit="cover"
        quality={1}
      />
      <Wrapper>
        <Content>
          <Text>
            <h2>Reality is much higher bandwidth</h2>
            <p>
              The metaverse is the best place to meet people and find your tribe. But reality is much higher bandwidth. Once you’ve made connections online, we believe in coming together in person to deepen relationships and experience the liminal space and time that leads to creative breakthroughs and the best conversations.
            </p>
          </Text>
          <Frame>
            <Image
              src={featureImage}
              alt="People hanging out on a porch"
              quality={100}
            />
          </Frame>
        </Content>
      </Wrapper>
    </Container>
  )
}

const Container = styled('section', {
  position: 'relative',
  bc: '$forest',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.5)',
  },
});

const Content = styled('div', {
  position: 'relative',
  zIndex: '$1',
  minHeight: '500px',
  color: '$sand',
  py: '$20',
  display: 'flex',
  flexDirection: 'column-reverse',
  h2: {
    fontSize: '$xxl',
    fontFamily: '$mono',
    fontWeight: '$600',
  },
  p: {
    lineHeight: 1.6,
  },
  '@md': {
    py: '$32',
    flexDirection: 'row',
    alignItems: 'center',
    '> div': {
      width: '50%',
    },
  },
});

const Text = styled('div', {
  mt: '$12',
  textAlign: 'center',
  '@md': {
    mt: '0',
    pr: '$20',
    textAlign: 'start',
  },
});

const Frame = styled('div', {
  br: '$pill',
  boxShadow: '0 0 0 $sizes$px $colors$sprout',
  overflow: 'hidden',
  lineHeight: '0',
});

