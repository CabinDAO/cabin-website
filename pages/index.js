import Layout from '../components/Layout'
import Hero from '../components/home/Hero'
import Vision from '../components/home/Vision'
import Reality from '../components/home/Reality'
import Spark from '../components/home/Spark'
import Contribute from '../components/home/Contribute'
import Past from '../components/home/Past'
import Join from '../components/home/Join'
import Collaborate from '../components/home/Collaborate'
import Node from '../components/home/Node'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Vision />
      <Reality />
      <Contribute />
      <Spark />
      <Join />
      <Past />
      <Collaborate />
      <Node />
    </Layout>    
  )
}

export async function getServerSideProps() {
  return { props: {} }
}


