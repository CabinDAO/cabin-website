import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { styled } from '../../stitches.config.ts';

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

        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:creator" content="creatorcabins" key="twhandle" />

        <meta property="og:url" content="https://www.creatorcabins.com/" key="ogurl" />
        <meta property="og:image" content="https://creatorcabins.com/socialShare.jpg" key="ogimage" />
        <meta property="og:site_name" content="Cabin" key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>

      <Container>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </Container>
    </>
  )
}

const Container = styled('div', {
  fontFamily: '$sans',
  color: '$forest',
  backgroundColor: '$sand',
  flexDirection: 'column',
  display: 'flex',
  minHeight: '100%',
});

const Main = styled('main', {
  flexGrow: 1
});
