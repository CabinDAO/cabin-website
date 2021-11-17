import { globalCss } from '../stitches.config.ts';

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
