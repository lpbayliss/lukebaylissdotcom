import * as React from 'react';
import { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import { ThemeProvider } from 'emotion-theming';

import CodeBlock from '../components/code-block/code-block.component';
import { Theme } from '../utils/styled';
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

const theme: Theme = {
  colors: {
    primary: 'blue',
  },
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <ScrolledProvider offset={10}>
          <StyleReset />
          <Component {...pageProps} />
        </ScrolledProvider>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
