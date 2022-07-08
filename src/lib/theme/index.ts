import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import semanticTokens from "./semantic-tokens";
import Section from "./components/section";
import Card from "./components/card";
import Heading from "./components/heading";
import { H1, H2, H3 } from "./components/markdown";

const overrides = {
  styles,
  semanticTokens,
  components: {
    H1,
    H2,
    H3,
    Section,
    Card,
    Heading,
  },
};

export default extendTheme(overrides);
