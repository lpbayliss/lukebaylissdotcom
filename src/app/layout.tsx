import "~/styles/globals.css";

import { Comfortaa } from "next/font/google";
import NextLink from "next/link";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaRss } from "react-icons/fa6";

const comfortaa = Comfortaa({
  weight: "variable",
  subsets: ["latin"],
  adjustFontFallback: true,
  variable: "--font-comfortaa",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${comfortaa.variable}`}>
      <body className="px-4 pb-14">
        <nav className="container mx-auto grid min-h-16 grid-cols-1 gap-4 py-4 md:grid-cols-2">
          <div className="flex justify-center md:justify-start">
            <NextLink
              href="/"
              className="flex place-content-center items-center text-4xl font-bold text-purple-800"
            >
              Luke Bayliss
            </NextLink>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 md:justify-end">
            <NextLink
              href="https://github.com/lpbayliss"
              className="flex text-2xl text-purple-800"
            >
              <FaGithub />
            </NextLink>
            <NextLink
              href="https://www.linkedin.com/in/lpbayliss/"
              className="flex text-2xl text-purple-800"
            >
              <FaLinkedinIn />
            </NextLink>
            <NextLink
              href="mailto:hello@lukebayliss.com"
              className="flex text-2xl text-purple-800"
            >
              <FaEnvelope />
            </NextLink>
            <NextLink
              href="/feed.xml"
              className="flex text-2xl text-purple-800"
            >
              <FaRss />
            </NextLink>
          </div>
        </nav>
        <main className="container mx-auto flex flex-col">{children}</main>
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
    locale: "en_AU",
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
  icons: {
    shortcut:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧟</text></svg>",
  },
  alternates: {
    types: {
      "application/rss+xml": "https://lukebayliss.com/feed.xml",
    },
  },
};

export default RootLayout;
