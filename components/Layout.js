import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { styled } from '../stitches.config.ts';

export default function Layout({
  children,
  title = 'Cabin',
  description = 'A decentralized city built by creators, for creators',
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="./favicon.ico" />  

        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="creatorcabins" key="twhandle" />

        <meta property="og:url" content="https://www.creatorcabins.com/" key="ogurl" />
        <meta property="og:image" content="./socialShare" key="ogimage" />
        <meta property="og:site_name" content="Cabin" key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>

      <Container>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </Container>
    </>
  )
}

const Container = styled('footer', {
  fontFamily: '$sans',
  color: '$forest',
  backgroundColor: '$sand',
  a: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});