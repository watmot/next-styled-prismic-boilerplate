import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/base';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
