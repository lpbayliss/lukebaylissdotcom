import * as React from 'react';
import { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from '../components/code-block/code-block.component';

const components = {
  code: CodeBlock,
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
