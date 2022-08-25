import { styled } from '@cabindao/topo';
import Link from 'next/link'

export default function ButtonLink({ 
  label, 
  href, 
  external, 
  target = '_self' 
}) {
  return (
    external ? (
      <Container target={target} href={href}>
        {label}
      </Container>
    ) : (
      <Link target={target} href={href} passHref>
        <Container>
          {label}
        </Container>
      </Link>
    )
  )
}

const Container = styled('a', {
  height: '$10',
  px: '$4',
  color: '$forest',
  backgroundColor: '$wheat',
  fontWeight: 600,
  fontSize: '$sm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition : 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.0325)',
  },
});
