import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '@cabindao/topo';

const globalStyles = `
  html, body, #__next {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
  }
`

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=Poppins:wght@400;600&display=swap" rel="stylesheet" /> 
          <style type='text/css'>{globalStyles}</style>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
