import { styled } from '../../stitches.config.ts';
import Layout from '../../components/Layout'
import Wrapper from '../../components/Wrapper';
import Image from 'next/image'
import containerImage from '../../public/containerCabin.jpg';
import node from '../../public/node.jpg';
import CallToAction from '../../components/CallToAction';
import ArrowLink from '../../components/ArrowLink';

export default function Cabins() {
  return (
    <Layout>
      <Wrapper>
        <Intro>
          <div>
            <h1>Creator cabins in Texas Hill Country</h1>
          </div>
          <div>
            <p>
              Cabin’s first city node sits on 28-acres of Texas Hill Country,  about 45 minutes outside of Austin. We like to think of the land, infrastructure, and buildings as our hardware stack. The land is a beautiful piece of nature with a seasonal creek, wildlife, and amazing stargazing.
            </p>
            <p>
              Our city node has off-grid infrastructure, including solar energy, water and sewage treatment systems, and a private internet network providing &gt;200 Mbps of bandwidth. On top of this, we&apos;ve built custom modular prefab housing, designed from the ground up for a co-living community of independent creators. 
            </p>
            <p>
              Because we are building in an unincorporated area of Texas, there is very little regulation. The only government interaction required for this entire project was a septic & well permit, filed remotely for around $100.
            </p>
          </div>
        </Intro>
        <Cabin>
          <Frame>
            <Image
              src={containerImage}
              alt="An areal view of the container cabin"
            />
          </Frame>
          <CabinContent>
            <div>
              <h2>The Container</h2>
            </div>
            <div>
              <p>
                This cabin was designed from the ground up for a community of remote workers. It’s a 4-suite shipping container cabin with giant front and back decks, private entrances for each room, and beautiful modern interiors. The suites, office nooks, community spaces, and decks were all custom-built in partnership with Forte Shelter for the needs of remote workers. Rooms are furnished and include high-speed internet, utilities, and cleaning service.
              </p>
              <ArrowLink href="/cabins/thecontainer" color="forest" label="Learn more" />
            </div>
          </CabinContent>
        </Cabin>
        <Cabin>
          <Frame>
            <Image
              src={node}
              alt="An image of a cabin"
            />
          </Frame>
          <CabinContent>
            <div>
              <h2>The Cabin</h2>
            </div>
            <div>
              <p>
                This cabin offers 1250 square feet of indoor living space and an incredible 800 square foot deck with panoramic views. The house is an elevated split level with three bedrooms, two baths, an open floor plan living room, dining room, and kitchen. Rooms are furnished and include high-speed internet, utilities, and cleaning service.              
              </p>
              <ArrowLink href="/cabins/thecabin" color="forest" label="Learn more" />
            </div>
          </CabinContent>
        </Cabin>
      </Wrapper>
      <CallToAction />
    </Layout>    
  )
}

export async function getServerSideProps() {
  return { props: {} }
}

const Intro = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  py: '$12',
  div: {
    flex: '1',
    pt: '0',
  },
  h1: {
    mt: '$1',
    fontFamily: '$mono',
    fontSize: '$xxl',
    fontWeight: 600,
    lineHeight: 1.6,
  },
  '@md': {
    flexDirection: 'row',
    pb: '$20',
    div: {
      pt: '$2',
    },
    h1: {
      pr: '$20',
      fontSize: '$xxxl',
    },
  },
});

const Cabin = styled('section', {
  pb: '$12',
  '@md': {
    pb: '$20',
  },
});

const CabinContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  mt: '$6',
  div: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  h2: {
    mt: '$1',
    fontFamily: '$mono',
    fontSize: '$xl',
    fontWeight: 600,
    lineHeight: 1.6,
  },
  '& p': {
    mt: '0',
  },
  '@md': {
    mt: '$12',
    flexDirection: 'row',
    h2: {
      pr: '$20',
      fontSize: '$xxl',
    },
    '& p': {
      mt: '$4',
    },
  },
});

const Frame = styled('div', {
  boxShadow: '0 0 0 $sizes$px $colors$sprout',
  lineHeight: '0',
  br: '$2',
  overflow: 'hidden',
  bc: '$forest',
  '@md': {
    br: '$3',
  },
});
