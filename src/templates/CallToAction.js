import { styled, Heading, Text } from '@cabindao/topo';
import { Wrapper, ArrowLink, ButtonLink } from "@components"
import Image from 'next/image'
import { slugify } from "../../lib/slugify"

export default function CallToAction({
  title,
  description,
  cta,
  bgImage = "/stars.jpg",
  bgImageAlt = "A stary night sky in the Texas Hill Country"
}) {
  return (
    <Container id={slugify(title)}>
      <Image
        src={bgImage}
        alt={bgImageAlt}
        layout="fill"
        objectFit="cover"
        objectPosition="50% 100%"
        quality={50}
      />
      <Wrapper>
        <Content>
          <Heading css={{ fontSize: "$xxxl"}}>{title}</Heading>
          <Text>{description}</Text>
          <Actions>
            <ButtonLink external target="_blank" href={cta.href} label={ cta.label } />
          </Actions>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled('section', {
  position: 'relative',
  bc: '$forest',
  color: '$sand',
  pt: '$20',
  pb: '$32',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '$forest',
    opacity: '0.50',
  },
  img: {
    filter: 'grayscale(0.75) contrast(0.75) brightness(0.25)',
  },
  '@md': {
    pt: '$32',
    pb: '20rem',
  },
});

const Content = styled('div', {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '48rem',
  margin: '0 auto',
  position: 'relative',
  zIndex: '$1',
  h2: {
    m: 0,
    fontSize: '$xxl',
    fontFamily: '$mono',
    fontWeight: '$600',
    lineHeight: '1.4',
    abbr: {
      textDecoration: 'none',
    },
  },
  '@md': {
    h2: {
      fontSize: '$xxxl',
    },
  },
});

const Actions = styled('div', {
  mt: '$8',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '> *': {
    mb: '$6',
  },
  '@md': {
    mt: '$10',
    flexDirection: 'row',
    '> *': {
      mb: '0',
      mr: '$6',
    },
  },
});
