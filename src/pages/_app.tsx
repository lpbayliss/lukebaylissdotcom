import { ChakraProvider } from "@chakra-ui/react";
import { type AppType } from "next/app";

import theme from "~/theme";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
