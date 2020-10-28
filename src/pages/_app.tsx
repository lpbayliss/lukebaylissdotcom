import NextApp from 'next/app';
import { cache } from 'emotion';
import { CacheProvider } from '@emotion/core';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        <ThemeProvider>
          <CSSReset />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    );
  }
}
