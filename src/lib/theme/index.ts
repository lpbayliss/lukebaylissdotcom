import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";

const overrides = {
  config: { initialColorMode: "dark", useSystemColorMode: false },
  styles,
};

export default extendTheme(overrides);
