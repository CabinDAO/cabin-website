import { styled } from '@cabindao/topo';
import { Wrapper, ArrowLink } from "@components"
import Image from 'next/image'

export default function FeaturedNode({
  neighborhood,
  encroach = false
}) {
  return (
    <Container css={{
      pt: encroach ? 0 : "$20",
      '@md': {
        pt: encroach ? 0 : "$24",
      },
    }}>
      <Wrapper>
        <Frame css={{
          mt: encroach ? "-$24" : 0,
          '@md': {
            mt: encroach ? '-$48' : 0,
          },
        }}>
          <Image
            src={neighborhood.image}
            alt="An image of a cabin"
            layout="responsive"
            width={984}
            height={340}
          />
        </Frame>
        <Content>
          <div>
            <h2>{neighborhood.title}</h2>
            <h3>{neighborhood.subtitle}</h3>
            <ArrowLink href={neighborhood.cta.href} label={neighborhood.cta.label}/>
          </div>
          <div>
            <p>{neighborhood.description}</p> 
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
