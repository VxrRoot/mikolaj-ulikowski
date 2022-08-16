import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalStyles from '../src/styles/GlobalStyles.styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
     <>
       <GlobalStyles />
       <Component {...pageProps} />
     </>
  );
}

export default MyApp
