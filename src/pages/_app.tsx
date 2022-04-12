import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../lib/theme";


function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ScaleFade key={router.route} initialScale={0.9} in={true}>
        <Component {...pageProps} />
      </ScaleFade>
    </ChakraProvider>
  );
}

export default MyApp;
