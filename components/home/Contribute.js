import Image from 'next/image'
import bgImage from '../../public/water.jpg';
import featureImage from '../../public/guestsTable.jpg';
import SideImage from '../SideImage';


export default function Reality() {

  const title = 'Contribute, grow, and recharge';
  const content = 'Web3 can feel like wandering through a dark forest without a map. We are a cabin in the woods where you can stop in for a drink and a warm bed, in the metaverse and IRL. Cross paths with other creators and DAOs to share learnings, build mutal financial incentives and develop the culture of web3.';
  const featureImageAlt = 'People talking around a table';
  const bgImageAlt = 'Texas hill country scenery';
  
  return (
    <SideImage 
      title={title}
      content={content}
      bgImage={bgImage}
      bgImageAlt={bgImageAlt}
      featureImage={featureImage}
      featureImageAlt={featureImageAlt}
      reversed
    />
  )
}