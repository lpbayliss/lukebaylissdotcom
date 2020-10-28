import NextApp from 'next/app';
import { cache } from 'emotion';
import { CacheProvider } from '@emotion/core';
import { ChakraProvider } from '@chakra-ui/core';
import customTheme from '../utils/custom-theme';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        <ChakraProvider theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </CacheProvider>
    );
  }
}
