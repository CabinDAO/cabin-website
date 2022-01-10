import { styled } from '@stitches';
import Wrapper from '@components/Wrapper';

export default function Amenities({ list }) {
  return (
    <Wrapper>
      <Container>
        <h2>Amenities</h2>
        <ul>
          {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </Container>
    </Wrapper>
  );
}

const Container = styled('section', {
  py: '$12',
  h2: {
    mt: '0',
    mb: '$6',
    fontFamily: '$mono',
    fontSize: '$xl',
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
    py: '$20',
    h2: {
      mb: '$8',
      fontSize: '$xxl',
    },
    ul: {
      'column-count': '3',
      'column-gap': '$24',
    },
  },
});