import * as React from 'react';
import { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

import CodeBlock from '../components/code-block/code-block.component';

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
    <MDXProvider components={components}>
      <StyleReset />
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
