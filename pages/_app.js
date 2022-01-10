import { globalCss } from '@stitches';

const globalStyles = globalCss({
  'body': {
    backgroundColor: '$sand',
  },
});

function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <Component {...pageProps} />
  );
}

export default MyApp
