import Layout from '../../../components/Layout'
import CallToAction from '../../../components/CallToAction';
import CabinIntro from '../../../components/cabins/CabinIntro';
import Amenities from '../../../components/cabins/CabinAmenities';
import NextCabin from '../../../components/cabins/NextCabin';
import BackLink from '../../../components/BackLink';
import { theContainer, theCabin } from '../../../content/cabins';
import Gallery from '../../../components/cabins/Gallery';

export default function TheContainer() {
  const { amenities, gallery, ...others } = theContainer;
  return (
    <Layout>
      <BackLink label="Texas Hill Country" href="/visit" />
      <CabinIntro { ...others } />
      <Gallery images={ gallery } />
      <Amenities list={amenities} />
      <NextCabin { ...theCabin} />
      <CallToAction />
    </Layout>    
  )
}

export async function getServerSideProps() {
  return { props: {} }
}