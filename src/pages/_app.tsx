import * as React from 'react';
import { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import { ThemeProvider } from 'emotion-theming';

import CodeBlock from '../components/code-block/code-block.component';
import { theme } from '../utils/styled';
import { ScrolledProvider } from '../components/is-scrolled/is-scrolled.component';

const components = {
  code: CodeBlock,
};

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
      <MDXProvider components={components}>
        <ScrolledProvider>
          <StyleReset />
          <Component {...pageProps} />
        </ScrolledProvider>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
