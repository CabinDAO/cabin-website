import Image from 'next/image'
import { styled } from '../../stitches.config.ts';
import Wrapper from '../Wrapper';

export default function SideImage({ 
    title,
    content,
    bgImage,
    bgImageAlt,
    featureImage,
    featureImageAlt, 
    reversed,
  }) {
  return (
    <Container>
      <Image
        src={bgImage}
        alt={bgImageAlt}
        layout="fill"
        objectFit="cover"
        quality={50}
      />
      <Wrapper>
        <Content reversed={reversed}>
          <Text reversed={reversed}>
            <h2>{title}</h2>
            <p>{content}</p>
          </Text>
          <Frame>
            <Image
              src={featureImage}
              alt={featureImageAlt}
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
    background: 'rgba(0,0,0,0.6)',
  },
});

const Content = styled('div', {
  position: 'relative',
  zIndex: '$1',
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
    mb: 0,
  },
  '@md': {
    py: '$32',
    flexDirection: 'row',
    alignItems: 'center',
    '> div': {
      width: '50%',
    },
    h2: {
      fontSize: '$xxxl',
    },
  },
  variants: { 
    reversed: {
      true : {
        '@md': {
          flexDirection: 'row-reverse',
        },
      },
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
  variants: { 
    reversed: {
      true : {
        '@md': {
          pr: '0',
          pl: '$20',
        },
      },
    },
  },
});

const Frame = styled('div', {
  br: '$pill',
  boxShadow: '0 0 0 $sizes$px $colors$sprout',
  overflow: 'hidden',
  lineHeight: '0',
});

