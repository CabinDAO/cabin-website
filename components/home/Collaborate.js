import { styled } from '../../stitches.config.ts';
import ButtonLink from '../ButtonLink';
import ArrowLink from '../ArrowLink';
import Wrapper from "../Wrapper";

export default function Collaborate() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <h2>
            Meet up and collaborate <abbr title="in real life">IRL</abbr>
          </h2> 
          <p>
            Access the high-bandwidth nature of IRL collaboration by purchasing a passport for your DAO, guild, team or squad and help us fund our vision of growing cabins into decentralized internet-first cities.
          </p>
          <Actions>
            <ButtonLink href="/" label="Purchase a passport" />
            <ArrowLink href="/" color="wheat" label="Learn more" />
          </Actions>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled('section', {
  position: 'relative',
  bc: '$forest',
  color: '$sand',
  py: '$20',
  backgroundImage: `url('./rings.svg')`,
  backgroundPosition: 'center',
  '@md': {
    py: '$32',
  },
});

const Content = styled('div', {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '40rem',
  margin: '0 auto',
  h2: {
    m: 0,
    fontSize: '$xxl',
    fontFamily: '$mono',
    fontWeight: '$600',
    lineHeight: '1.4',
    abbr: {
      textDecoration: 'none',
    },
  },
  '@md': {
    h2: {
      fontSize: '$xxxl',
    },
  },
});

const Actions = styled('div', {
  mt: '$8',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '> *': {
    mb: '$6',
  },
  '@md': {
    mt: '$10',
    flexDirection: 'row',
    '> *': {
      mb: '0',
      mr: '$6',
    },
  },
});