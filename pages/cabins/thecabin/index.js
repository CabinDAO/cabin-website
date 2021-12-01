import Layout from '../../../components/Layout'
import CallToAction from '../../../components/CallToAction';
import CabinIntro from '../../../components/cabins/CabinIntro';
import Amenities from '../../../components/cabins/CabinAmenities';
import NextCabin from '../../../components/cabins/NextCabin';
import { theCabin, theContainer } from '../../../content/cabins';

export default function TheCabin() {
  const { amenities, ...others } = theCabin;
  return (
    <Layout>
      <CabinIntro { ...others } />
      <Amenities list={amenities} />
      <NextCabin { ...theContainer} />
      <CallToAction />
    </Layout>   
  )
}

export async function getServerSideProps() {
  return { props: {} }
}