import Layout from '@components/layout'
import CallToAction from '@components/CallToAction';
import CabinIntro from '@components/cabins/CabinIntro';
import Amenities from '@components/cabins/CabinAmenities';
import NextCabin from '@components/cabins/NextCabin';
import BackLink from '@components/BackLink';
import { theCabin, theContainer } from '@content/cabins';
import Gallery from '@components/cabins/Gallery';

export default function TheCabin() {
  const { amenities, gallery, ...others } = theCabin;
  return (
    <Layout>
      <BackLink label="Texas Hill Country" href="/cabins" />
      <CabinIntro { ...others } />
      <Gallery images={ gallery } />
      <Amenities list={amenities} />
      <NextCabin { ...theContainer} />
      <CallToAction />
    </Layout>   
  )
}

export async function getServerSideProps() {
  return { props: {} }
}