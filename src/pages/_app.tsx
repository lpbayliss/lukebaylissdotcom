import * as React from 'react';
import { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../utils/styled';
import { ScrolledProvider, MDComponents, StyleReset, GlobalStyles } from '../components';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDComponents}>
        <ScrolledProvider>
          <StyleReset />
          <GlobalStyles />
          <Component {...pageProps} />
        </ScrolledProvider>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
