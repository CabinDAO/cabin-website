import { styled } from '@stitches';
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Wrapper from '@components/Wrapper';

export default function BackLink({ 
  label, 
  href, 
  target = '_self'  
}) {
  return (
    <Wrapper>
      <Link target={target} href={href} passHref>
        <Container>
          <ArrowLeftIcon />
          {label}
        </Container>
      </Link>
    </Wrapper>
  )
}

const Container = styled('a', {
  height: '$10',
  fontWeight: 600,
  fontSize: '$sm',
  fontFamily: '$mono',
  textTransform: 'uppercase',
  display: 'inline-flex',
  alignItems: 'center',
  px: '$4',
  mt: '$8',
  border: '1px solid $wheat',
  svg: { 
    height: '$5',
    width: '$5',
    mr: '$2',
    position: 'relative',
    left: '0',
    transition : 'left 0.2s ease-in-out',
  },
  '&:hover svg': {
    left: '-$1',
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