import { styled } from '../../stitches.config.ts';
import Image from 'next/image'
import ArrowLink from '../ArrowLink';

export default function CabinPeek({ name, slug, summary, image, imageAlt }) {
  return (
    <Cabin>
      <Frame>
        <Image
          src={image}
          alt={imageAlt}
          layout="responsive"
          width={984}
          height={340}
        />
      </Frame>
      <CabinContent>
        <div>
          <h2>{name}</h2>
        </div>
        <div>
          <p>{summary}</p>
          <ArrowLink href={`/visit/${slug}`} color="forest" label="Learn more" />
        </div>
      </CabinContent>
    </Cabin>
  );
}

const Cabin = styled('section', {
  pb: '$12',
  '@md': {
    pb: '$20',
  },
});

const CabinContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  mt: '$6',
  div: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  h2: {
    mt: '$1',
    fontFamily: '$mono',
    fontSize: '$xl',
    fontWeight: 600,
    lineHeight: 1.6,
  },
  '& p': {
    mt: '0',
  },
  '@md': {
    mt: '$12',
    flexDirection: 'row',
    h2: {
      pr: '$20',
      fontSize: '$xxl',
    },
    '& p': {
      mt: '$4',
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