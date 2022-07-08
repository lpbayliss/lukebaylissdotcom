import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";

import theme from "@lib/theme";
import components from "@components/markdown";

config.autoAddCss = false;

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
