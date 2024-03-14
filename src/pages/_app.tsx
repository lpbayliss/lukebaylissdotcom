import { ChakraProvider } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { type AppType } from "next/app";

import theme from "~/theme";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
};

export default MyApp;
