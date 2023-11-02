import { VStack } from "@chakra-ui/react";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Contentlayer Next.js Example</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <VStack as="body">
        <Providers>{children}</Providers>
      </VStack>
    </html>
  );
}
