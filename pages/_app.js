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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=Poppins:wght@400;600&display=swap" rel="stylesheet" /> 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
