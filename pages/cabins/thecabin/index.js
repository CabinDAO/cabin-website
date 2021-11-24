import { styled } from '../../../stitches.config.ts';
import Layout from '../../../components/Layout'
import node from '../../../public/node.jpg';
import CallToAction from '../../../components/CallToAction';
import CabinIntro from '../../../components/cabins/CabinIntro';
import CabinAmenities from '../../../components/cabins/CabinAmenities';

const amenities = [
  'Private bedroom with queen bed, desk space, and closet',
  'High-speed internet',
  'En-suite or shared bathroom with shower and bathtub',
  'Towels, linens, blankets, pillows',
  'Soap, shampoo, toilet paper',
  'Coffee, tea, spices, and other kitchen essentials',
  'Washer & dryer',
  'Full kitchen with refrigerator, freezer, oven, stove, microwave, dishwasher, coffee maker, coffee grinder, and toaster',
  'Furnished dishes, utensils, pots & pans, baking equipment',
  'Wrap-around deck with lounge chairs, hammock, and outdoor BBQ grill',
  'Lending library',
  'Ping pong table',
  'Board games',
  'Indoor fireplace',
  'HDTV with Netflix',
  'Heating & air-conditioning',
  'Smoke alarms, carbon monoxide detectors, fire extinguishers',
  'Private water & septic',
];

export default function TheCabin() {
  return (
    <Layout>
      <CabinIntro 
        name="The Cabin"
        description="This cabin offers 1250 square feet of indoor living space and an incredible 800 square foot deck with panoramic views. The house is an elevated split level with three bedrooms, two baths, an open floor plan living room, dining room, and kitchen. Rooms are furnished and include high-speed internet, utilities, and cleaning service."
        image={node}
        imageAlt="The Container Cabin"
      />
      <CabinAmenities list={amenities} />
      <CallToAction />
    </Layout>    
  )
}

export async function getServerSideProps() {
  return { props: {} }
}