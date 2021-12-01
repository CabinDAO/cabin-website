import { styled } from '../../stitches.config.ts';
import Wrapper from '../Wrapper';
import Image from 'next/image'

export default function CabinIntro({ name, summary, image, imageAlt }) {
  return (
    <Wrapper>
      <Intro>
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          <p>{summary}</p>
        </div>
      </Intro>
      <Frame>
        <Image 
          src={image} 
          alt={imageAlt}
          layout="responsive"
          width={984}
          height={340}
        />
      </Frame>
    </Wrapper>
  );
}

const Intro = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  py: '$12',
  'div:first-of-type': {
    flex: '1',
    pt: '0',
  },
  'div:last-of-type': {
    flex: '2',
    pt: '0',
  },
  h1: {
    mt: '$1',
    fontFamily: '$mono',
    fontSize: '$xxl',
    fontWeight: 600,
    lineHeight: 1.6,
  },
  '@md': {
    flexDirection: 'row',
    pb: '$20',
    div: {
      pt: '$2',
    },
    h1: {
      pr: '$20',
      fontSize: '$xxxl',
    },
  },
});

const Frame = styled('div', {
  boxShadow: '0 0 0 $sizes$px $colors$sprout',
  lineHeight: '0',
  br: '$2',
  overflow: 'hidden',
  bc: '$forest',
  '@md': {
    br: '$3',
  },
});