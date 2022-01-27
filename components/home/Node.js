import { styled } from '../../stitches.config.ts';
import Wrapper from '../Wrapper';
import Image from 'next/image'
import node from '../../public/node.jpg';
import ArrowLink from '../ArrowLink';

export default function Node() {
  return (
    <Container>
      <Wrapper>
        <Frame>
          <Image
            src={node}
            alt="An image of a cabin"
            layout="responsive"
            width={984}
            height={340}
          />
        </Frame>
        <Content>
          <div>
            <h2>Node 1</h2>
            <h3>Creator cabins in Texas Hill Country</h3>
            <ArrowLink href="/visit" label="Explore the cabins" />
          </div>
          <div>
            <p>
              28-acres of private land in the Texas Hill Country about 45 minutes outside of Austin. We are located minutes away from Pedernales Falls State Park and have a seasonal creek, wildlife, and amazing stargazing on site.
            </p> 
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled('section', {
  pb: '$20',
  '@md': {
    pb: '$24',
  },
});

const Frame = styled('div', {
  boxShadow: '0 0 0 $sizes$px $colors$sprout',
  lineHeight: '0',
  br: '$2',
  mt: '-$24',
  overflow: 'hidden',
  position: 'relative',
  bc: '$forest',
  '@md': {
    br: '$3',
    mt: '-$48',
  },
});

const Content = styled('div', {
  pt: '$8',
  pb: '0',
  display: 'flex',
  flexDirection: 'column',
  div: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  h2: {
    mt: '$4',
    mb: 0,
    fontSize: '$sm',
    fontFamily: '$mono',
    fontWeight: '$600',
    lineHeight: '1.4',
    textTransform: 'uppercase',
  },
  h3: {
    mt: '$1',
    fontFamily: '$mono',
    fontSize: '$xl',
    fontWeight: 600,
    lineHeight: 1.6,
  },
  '@md': {
    pt: '$12',
    flexDirection: 'row',
    h3: {
      fontSize: '$xxl',
      maxWidth: '24rem',
    },
  },
});