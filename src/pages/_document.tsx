/* eslint-disable @next/next/no-document-import-in-page */
import { ColorModeScript } from "@chakra-ui/react";
import Document, { Head, Html, Main, NextScript } from "next/document";

import theme from "~/theme";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Luke Bayliss!" />
          <link rel="icon" href="/favicon.ico" />
          {/* <meta property="og:image" content={imgURL} /> */}
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config!.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
