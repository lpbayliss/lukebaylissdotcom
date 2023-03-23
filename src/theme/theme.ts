import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import { Quattrocento_Sans, Merriweather_Sans } from "next/font/google";

import semanticTokens from "./semantic-tokens";
import styles from "./styles";

const quattrocento = Quattrocento_Sans({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});
const merriweather = Merriweather_Sans({ subsets: ["latin"], display: "swap" });

const overrides: ThemeOverride = {
  styles,
  semanticTokens,
  components: {},
  fonts: {
    heading: quattrocento.style.fontFamily,
    body: merriweather.style.fontFamily,
  },
};

export default extendTheme(overrides);
