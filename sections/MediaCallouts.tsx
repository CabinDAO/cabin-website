import { styled } from '@cabindao/topo';
import { Wrapper, } from "@components"
import ArrowLink from "../components/ArrowLink"

export default function MediaCallout() {
  return (
    <Container id="initiatives">
      <Wrapper>
        <Content>
          <Intro>
            <h2>Community articles</h2>
            <ArrowLink color="wheat" external target="_blank" href="https://creators.mirror.xyz" label="Explore all media" />
          </Intro>
          <Features>
            <Feature>
              <h3>Your Squad Buys Property (w/ Help from Cabin)</h3>
              <ArrowLink color="wheat" external target="_blank" href="https://creators.mirror.xyz/SkkwTuVDk9p_P_0XAxWus5ffaJp1nOjB-MBYzoTGh00" label="Read more" />
            </Feature>
            <Feature>
              <h3>Join Us for a Magical Coliving Experience at Neighborhood Zero</h3>
              <ArrowLink color="wheat" external target="_blank" href="https://creators.mirror.xyz/4d6m6O62xH8nYT8XjyC99P0yMrXqwO78JR2r5yvafc0" label="Read more" />
            </Feature>
            <Feature>
              <h3>Coliving Case Study: A Lifelong City Dweller Reconnects with Himself, His Community & the Wilderness</h3>
              <ArrowLink color="wheat" external target="_blank" href="https://creators.mirror.xyz/g2aEnUtPqAgul_L5DJJOWgRiT5K9v50x_akbKeY171c" label="Read more" />
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
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  h2: {
    m: 0,
    fontSize: '$xxl',
    fontFamily: '$mono',
    fontWeight: '$600',
    lineHeight: '1.4',
    color: '$sand',
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
    color: '$sand',
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

