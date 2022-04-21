import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import theme from "../lib/theme";
import ColorModeButton from "../components/color-mode-button";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeButton />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
