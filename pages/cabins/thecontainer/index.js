import Layout from '../../../components/Layout'
import CallToAction from '../../../components/CallToAction';
import CabinIntro from '../../../components/cabins/CabinIntro';
import Amenities from '../../../components/cabins/CabinAmenities';
import NextCabin from '../../../components/cabins/NextCabin';
import { theContainer, theCabin } from '../../../content/cabins';

export default function TheContainer() {
  const { amenities, ...others } = theContainer;
  return (
    <Layout>
      <CabinIntro { ...others } />
      <Amenities list={amenities} />
      <NextCabin { ...theCabin} />
      <CallToAction />
    </Layout>    
  )
}

export async function getServerSideProps() {
  return { props: {} }
}