import bgImage from '@public/guestsOutdoors.jpg';
import featureImage from '@public/guestsGroup.jpg';
import SideImage from '@components/SideImage';

export default function Reality() {

  const title = 'Reality is much higher bandwidth';
  const content = 'The metaverse is the best place to meet people and find your tribe. But reality is much higher bandwidth. Once you’ve made connections online, we believe in coming together in person to deepen relationships and experience the liminal space and time that leads to creative breakthroughs and the best conversations.';
  const featureImageAlt = 'People hanging out on a porch';
  const bgImageAlt = 'People sitting around a campfire';
  
  return (
    <SideImage 
      title={title}
      content={content}
      bgImage={bgImage}
      bgImageAlt={bgImageAlt}
      featureImage={featureImage}
      featureImageAlt={featureImageAlt}
    />
  )
}