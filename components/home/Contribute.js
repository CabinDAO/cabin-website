import bgImage from '@public/water.jpg';
import featureImage from '@public/guestsTable.jpg';
import SideImage from '@components/SideImage';

export default function Reality() {

  const title = 'Contribute, grow, and recharge';
  const content = 'We invest in up-and-coming web3 talent and connect them into a network of squads, guilds, and DAOs where they can contribute and grow. Entering web3 can feel like wandering through a dark forest without a map. We are a cabin in the woods where you can stop in for a drink and a warm bed, in the metaverse and IRL.';
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