import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";

import theme from "../lib/theme";

config.autoAddCss = false;

const components = {
  h1: Heading,
  h2: Heading
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </MDXProvider>
  );
}

export default MyApp;
