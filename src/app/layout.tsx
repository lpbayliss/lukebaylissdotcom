import { fonts } from "./fonts";
import { Providers } from "./providers";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={fonts.comfortaa.variable}>
      <body>
        <Providers>{children}</Providers>
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
