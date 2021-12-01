import { styled } from '../../stitches.config.ts';
import Layout from '../../components/Layout'
import Wrapper from '../../components/Wrapper';
import CallToAction from '../../components/CallToAction';
import CabinPeek from '../../components/cabins/CabinPeek';
import { theCabin, theContainer } from '../../content/cabins';

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
        <CabinPeek {...theContainer} />
        <CabinPeek {...theCabin} />
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