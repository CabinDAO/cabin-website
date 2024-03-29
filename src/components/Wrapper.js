import { styled } from '@cabindao/topo';

export default function Wrapper({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled('div', {
  width: '100%',
  maxWidth: '64rem',
  mx: 'auto',
  px: '$5',
});
