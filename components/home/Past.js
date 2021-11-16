import { styled } from '../../stitches.config.ts';
import Wrapper from '../Wrapper';
import ArrowLink from '../ArrowLink';

export default function Past() {
  return (
    <Container id="initiatives">
      <Wrapper>
        <Content>
          <Intro>
            <h2>Past initiatives</h2>
          </Intro>
          <Features>
            <Feature>
              <h3>Crowdfunded 3 one-month residencies</h3>
              <ArrowLink color="wheat" external target="_blank" href="https://creators.mirror.xyz/eS6lYIBycHEZmtGpRGwA9lCb3Y_8G4pddHWSKtmWP_I" label="Read more" />
            </Feature>
            <Feature>
              <h3>First living creature as an NFT</h3>
              <ArrowLink color="wheat" external target="_blank" href="https://creators.mirror.xyz/OmwhMeOpeK8MJTBhHV0RpQmqh1mYMMpcJir97pTZyEQ" label="Read more" />
            </Feature>
            <Feature>
              <h3>Buried treasure chest with an ETH wallet</h3>
              <ArrowLink color="wheat" external target="_blank" href="https://creators.mirror.xyz/5heGuW5JIkDp67D4j4DtRpAi4ToiJzCeNFunU4cjkBw" label="Read more" />
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
  backgroundImage: `url('./rings.svg')`,
  backgroundPosition: 'center',
  py: '$20',
  '@md': {
    py: '$32',
  },
});

const Content = styled('div', {
  position: 'relative',
  color: '$sand',
  zIndex: '$1',
  border: '1px solid $sprout',
  br: '$2',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '$forest',
    opacity: '0.7',
  },
  '@md': {
    br: '$3',
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
    lineHeight: '1.4',
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
    lineHeight: '1.4',
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

