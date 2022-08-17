import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalStyles from '../src/styles/GlobalStyles.styles';
import {ThemeProvider} from 'styled-components';

// Theme
import {theme} from '../src/utility/theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
     <ThemeProvider theme={theme}>
       <GlobalStyles />
       <Component {...pageProps} />
     </ThemeProvider>
  );
}

export default MyApp
