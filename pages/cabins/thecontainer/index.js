import { styled } from '../../../stitches.config.ts';
import Layout from '../../../components/Layout'
import containerImage from '../../../public/containerCabin.jpg';
import CallToAction from '../../../components/CallToAction';
import CabinIntro from '../../../components/cabins/CabinIntro';
import Amenities from '../../../components/cabins/CabinAmenities';
  
const amenities = [
  'Private suites with queen bed, office nook, and wardrobe',
  'En-suite bathroom with shower',
  'High-speed internet',
  'Private entrance to bedroom suite',
  'Towels, linens, blankets, pillows',
  'Soap, shampoo, toilet paper',
  'Coffee, tea, spices, and other kitchen essentials',
  'Washer & dryer',
  'Private suites with queen bed, office nook, and wardrobe',
  'En-suite bathroom with shower',
  'High-speed internet',
  'Private entrance to bedroom suite',
  'Towels, linens, blankets, pillows',
  'Soap, shampoo, toilet paper',
  'Coffee, tea, spices, and other kitchen essentials',
  'Washer & dryer',
  'Full kitchen with refrigerator, freezer, oven, stove, microwave, dishwasher, coffee maker, coffee grinder, and toaster',
  'Furnished dishes, utensils, pots & pans, baking equipment',
  'Multiple decks with lounge chairs, hammock, and outdoor BBQ grill',
  'Lending library',
  'Board games',
  'Heating & air-conditioning',
  'HDTV with Netflix',
  'Smoke alarms, carbon monoxide detectors, fire extinguishers',
  'Private water & septic',
];

export default function TheContainer() {
  return (
    <Layout>
      <CabinIntro 
        name="The Container"
        description="This cabin was designed from the ground up for a community of remote workers. It’s a 4-suite shipping container cabin with giant front and back decks, private entrances for each room, and beautiful modern interiors. The suites, office nooks, community spaces, and decks were all custom-built in partnership with Forte Shelter for the needs of remote workers. Rooms are furnished and include high-speed internet, utilities, and cleaning service."
        image={containerImage}
        imageAlt="The Container Cabin"
      />
      <Amenities list={amenities} />
      <CallToAction />
    </Layout>    
  )
}

export async function getServerSideProps() {
  return { props: {} }
}