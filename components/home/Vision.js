import { styled } from '../../stitches.config.ts';
import Wrapper from '../Wrapper';
import ArrowLink from '../ArrowLink';

export default function Vision() {
  return (
    <Container id="about">
      <Wrapper>
        <Content>
          <h2>
            The vision
          </h2>
          <div>
            <p>
              Today, Cabin is a place to get together IRL with your internet friends. In the future, our hope is that it becomes one node in a network of decentralized properties, owned and operated by small groups of independent online creators and entrepreneurs. The density of creative energy of San Francisco or New York, but wherever and whenever you want it to be. If you were designing a 21st century city from scratch, why would you put it all in one place?
            </p>
            <ArrowLink external target="_blank" href="https://creators.mirror.xyz/-lNPJRz2GLWIcsuMTZqklGNEWRrY7Nk0Y33Qn6Lw4q4" label="Read more" />
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled('section', {
  pt: '$10',
  pb: '$20',
  '@md': {
    pt: '$20',
    pb: '$24',
  },
});

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  px: '$10',
  py: '$8',
  border: '1px solid $sprout',
  br: '$2',
  h2: {
    mt: '$1',
    mb: '$0',
    fontFamily: '$mono',
    fontSize: '$xl',
    fontWeight: 600,
    lineHeight: 1.6,
    maxWidth: '28rem',
    flex: '1',
  },
  div: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  '@md': {
    flexDirection: 'row',
    br: '$3',
    h2: {
      fontSize: '$xxl',
      maxWidth: '40rem',
    },
  },
});