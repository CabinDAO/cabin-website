import { styled } from '../stitches.config.ts';
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
    <Link  target={target} href={href}>
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
  // br: '$1',
  color: '$forest',
  backgroundColor: '$wheat',
  fontWeight: 600,
  fontSize: '$sm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  br: '$1',
});