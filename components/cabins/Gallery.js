import { styled } from '../../stitches.config.ts';
import Wrapper from '../Wrapper';
import Image from 'next/image'

export default function Gallery({ images }) {
  return (
    <>
      <Wrapper>
        <Title>Gallery</Title>
      </Wrapper>
      <Container>
        {images.map((image, index) => (
          <Image 
            src={image.image} 
            alt={image.imageAlt}
            key={index}
            layout="responsive"
            width={400}
            height={266}
          />
        ))}
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  return { props: {} }
}

const Title = styled('h2', {
  mt: '$12',
  mb: '$6',
  fontFamily: '$mono',
  fontSize: '$xl',
  fontWeight: 600,
  lineHeight: 1.6,
  '@md': {
    mt: '$20',
    mb: '$8',
    fontSize: '$xxl',
  },
});

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  borderTop: '1px solid $sprout',
  borderBottom: '1px solid $sprout',
  bc: '$forest',
  '@md': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  '@xxl': {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },
});