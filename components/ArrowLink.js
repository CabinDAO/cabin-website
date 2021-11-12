
import { styled } from '../stitches.config.ts';
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function ArrowLink({ label, href }) {
  return (
    <Link href={href}>
      <Container>
        <ArrowRightIcon />
        {label}
      </Container>
    </Link>
  )
}

const Container = styled('a', {
  height: '$10',
  color: '$wheat',
  fontWeight: 600,
  fontSize: '$sm',
  display: 'flex',
  alignItems: 'center', 
  svg: { 
    height: '$5',
    width: '$5',
    mr: '$2',
  },
});