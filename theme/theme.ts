import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import { Quattrocento_Sans, Merriweather_Sans } from "next/font/google";

const quattrocento = Quattrocento_Sans({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});
const merriweather = Merriweather_Sans({ subsets: ["latin"], display: "swap" });

const overrides: ThemeOverride = {
  components: {},
  fonts: {
    heading: quattrocento.style.fontFamily,
    body: merriweather.style.fontFamily,
  },
};

export default extendTheme(overrides);
