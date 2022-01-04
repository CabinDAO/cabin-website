
import { styled } from '../stitches.config.ts';
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function ArrowLink({ 
  label, 
  href, 
  color = "forest", 
  external, 
  target = '_self'  
}) {
  return (
    external ? (
      <Container target={target} href={href} color={color}>
        <ArrowRightIcon />
        {label}
      </Container>
    ) : (
      <Link target={target} href={href} color={color} passHref>
        <Container>
          <ArrowRightIcon />
          {label}
        </Container>
      </Link>
    )
  )
}

const Container = styled('a', {
  height: '$10',
  fontWeight: 600,
  fontSize: '$sm',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', 
  svg: { 
    height: '$5',
    width: '$5',
    mr: '$2',
    position: 'relative',
    left: '0',
    transition : 'left 0.2s ease-in-out',
  },
  '&:hover svg': {
    left: '$1',
  },
  variants: { 
    color: {
      wheat : {
        color: '$wheat',
      },
      forest : {
        color: '$forest',
      },
    },
  },
});