import { styled, Heading, Text, Box } from '@cabindao/topo';
import { Wrapper, } from "@components"
import Image from 'next/image'
import { slugify } from "../../lib/slugify"

export default function FeaturedNeighborhood({
  neighborhood,
  encroach = false
}) {
  return (
    <Container css={{
      pt: encroach ? 0 : "$20",
      '@md': {
        pt: encroach ? 0 : "$24",
      },
    }}
    id={slugify(neighborhood.title)}
    >
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
          <Box>
            <Heading mono uppercase css={{fontSize: "$sm"}}>{neighborhood.title}</Heading>
            <Heading as="h3">{neighborhood.subtitle}</Heading>
            {
            //<ArrowLink href={neighborhood.cta.href} label={neighborhood.cta.label}/>
          }
          </Box>
          <Box>
            <Text>{neighborhood.description}</Text> 
          </Box>
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