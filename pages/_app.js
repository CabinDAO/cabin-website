import Script from "next/script";
import { globalStyles } from "@cabindao/topo";
import BaseLayout from "../src/layouts/Base.js"

function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-EY99DH9D9N`}
      />

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EY99DH9D9N', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  );
}

export default MyApp;
