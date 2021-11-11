import { styled } from '../stitches.config.ts';
import Link from 'next/link'

export default function ButtonLink({ label, href }) {
  return (
    <Link href={href}>
      <Container>
        {label}
      </Container>
    </Link>
  )
}

const Container = styled('a', {
  height: '$10',
  px: '$4',
  // br: '$1',
  backgroundColor: '$wheat',
  fontWeight: 600,
  fontSize: '$sm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});