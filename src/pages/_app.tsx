import * as React from 'react';
import { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../utils/styled';
import { ScrolledProvider, MDComponents } from '../components';
import { StyleReset, GlobalStyles } from '../components/global-styles';

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
