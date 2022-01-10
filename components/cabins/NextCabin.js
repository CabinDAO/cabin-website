import { styled } from '@stitches';
import Wrapper from '@components/Wrapper';
import CabinPeek from '@components/cabins/CabinPeek';

export default function NextCabin(props) {
  return (
    <Wrapper>
      <Container>
        <h1>Next property</h1>
        <CabinPeek {...props} />
      </Container>
    </Wrapper>
  );
}

const Container = styled('section', {
  h1: {
    mt: '0',
    mb: '$8',
    fontFamily: '$mono',
    fontSize: '$xxl',
    fontWeight: 600,
    lineHeight: 1.6,
  },
  ul: {
    pl: '$6',
  },
  li: {
    mb: '$4',
  },
  '@md': {
    h1: {
      fontSize: '$xxxl',
    },
    ul: {
      'column-count': '3',
      'column-gap': '$24',
    },
  },
});