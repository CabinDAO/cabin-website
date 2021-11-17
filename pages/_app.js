import { globalCss } from '../stitches.config.ts';

const globalStyles = globalCss({
  'html, body': {
    padding: 0,
    margin: 0,
    fontFamily: '$sans',
    color: '$forest',
    backgroundColor: '$sand',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  '*': {
    boxSizing: 'border-box',
  },
});

function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
