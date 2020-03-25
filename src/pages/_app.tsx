import * as React from 'react';
import { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../utils/styled';
import { ScrolledProvider, MDComponents } from '../components';

const StyleReset = (): JSX.Element => (
  <Global
    styles={css`
      ${emotionNormalize}
    `}
  />
);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDComponents}>
        <ScrolledProvider>
          <StyleReset />
          <Component {...pageProps} />
        </ScrolledProvider>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
