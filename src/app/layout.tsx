import { ColorModeScript, VStack } from "@chakra-ui/react";

import Navbar from "~/components/navbar.component";
import theme from "~/theme";

import { fonts } from "./fonts";
import { Providers } from "./providers";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={fonts.comfortaa.variable}>
      <body>
        <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
        <Providers>
          <Navbar />
          <VStack as="main" minW="sm">
            {children}
          </VStack>
        </Providers>
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "6bd435909639410bba74fe20d7ddcf61", "spa": true}'
        />
      </body>
    </html>
  );
};

export const metadata = {
  metadataBase: new URL("https://lukebayliss.com"),
  title: {
    template: "%s | Luke Bayliss",
    default: "Luke Bayliss",
  },
  description: "A website by Luke Bayliss.",
  openGraph: {
    title: "Luke Bayliss",
    url: "https://lukebayliss.com",
    siteName: "Luke Bayliss's website",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default RootLayout;
