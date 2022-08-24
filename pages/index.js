import Layout from "../components/Layout";
import Hero from "../components/home/Hero";
import Vision from "../components/Vision";
import Reality from "../components/home/Reality";
import Spark from "../components/home/Spark";
import Contribute from "../components/home/Contribute";
import Media from "../components/home/Media";
import Join from "../components/home/Join";
import Collaborate from "../components/home/Collaborate";
import FeaturedNode from "../components/home/FeaturedNode";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Vision
        title={"The vision"}
        readMoreLink={
          "https://creators.mirror.xyz/-lNPJRz2GLWIcsuMTZqklGNEWRrY7Nk0Y33Qn6Lw4q4"
        }
        description="Today, Cabin is a place to get together IRL with your internet friends. In the future, our hope is that it becomes one node in a network of decentralized properties, owned and operated by small groups of independent online creators and entrepreneurs. The density of creative energy of San Francisco or New York, but wherever and whenever you want it to be. If you were designing a 21st century city from scratch, why would you put it all in one place?"
      />
      <Reality />
      <Contribute />
      <Spark />
      <Join />
      <Collaborate />
      <FeaturedNode />
      <Media />
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
