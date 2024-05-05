import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  weight: "variable",
  subsets: ["latin"],
  adjustFontFallback: true,
  variable: "--font-comfortaa",
});

export const fonts = {
  comfortaa,
};
