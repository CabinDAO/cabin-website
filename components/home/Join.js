import Image from 'next/image'
import { styled } from '@stitches';
import Wrapper from '@components/Wrapper';
import ArrowLink from '@components/ArrowLink';
import find from '@public/find.svg';
import harmonize from '@public/harmonize.svg';
import shape from '@public/shape.svg';

export default function Join() {
  return (
    <Container id="community">
      <Wrapper>
        <Content>
          <Intro>
            <h2>Join the community</h2>
          </Intro>
          <Actions>
            <Action>
              <Image
                src={find}
                alt="An abstract find icon"
                quality={100}
                layout="fixed"
                width={82}
                height={82}
              />
              <div>
                <h3>Find</h3>
                <p>
                  Explore our wiki to learn about our community, people, model, and processes.
                </p>
                <ArrowLink external target="_blank" href="https://app.clarity.so/%E2%82%A1ABIN" label="View the wiki" />
              </div>
            </Action>
            <Action>
              <Image
                src={harmonize}
                alt="An abstract harmonize icon"
                quality={100}
                layout="fixed"
                width={82}
                height={82}
              />
              <div>
                <h3>Harmonize</h3>
                <p>
                  Tune into our community on discord to discover our mindset, culture and language.
                </p>
                <ArrowLink external target="_blank" href="https://discord.gg/N6hVmFygjR" label="Join Discord" />
              </div>
            </Action>
            <Action>
              <Image
                src={shape}
                alt="An abstract shape icon"
                quality={100}
                layout="fixed"
                width={82}
                height={82}
              />
              <div>
                <h3>Shape</h3>
                <p> 
                  Bring your own perspective and knowledge to the community by holding Cabin token.
                </p>
                <ArrowLink external target="_blank" href="https://snapshot.org/#/cabindao.eth" label="View proposals" />
              </div>
            </Action>
          </Actions>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled('section', {
  position: 'relative',
  bc: '$sand',
  py: '$20',
  '@md': {
    py: '$32',
  },
});

const Content = styled('div', {
  position: 'relative',
  color: '$forest',
});

const Intro = styled('div', {
  textAlign: 'center',
  h2: {
    m: 0,
    fontSize: '$xxl',
    fontFamily: '$mono',
    fontWeight: '$600',
    lineHeight: '1.4',
  },
  '@md': {
    h2: {
      fontSize: '$xxxl',
    },
  },
});

const Actions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '@md': {
    flexDirection: 'row',
  },
});

const Action = styled('div', {
  mt: '$10',
  div: {
    ml: '$10',
    mt: '-$12',
    position: 'relative',
    zIndex: '1',
    bc: '$sand', 
    pl: '$4',
    pt: '$4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  h3: {
    mt: '0',
    fontSize: '$xl',
    fontFamily: '$mono',
    fontWeight: '$600',
  },
  '@md': {
    mr: '$20',
    h3: {
      fontSize: '$xxl',
    },
    '&:last-of-type': {
      mr: 0,
    },
  },
});