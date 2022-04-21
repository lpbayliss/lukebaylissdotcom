import { mode } from "@chakra-ui/theme-tools";

const Section = {
  // The styles all Cards have in common
  baseStyle: {
    px: { base: "4", md: "8" },
    py: { base: "12", md: "24" },
  },
  size: {},
  variants: {
    primary: {},
    secondary: {
      bg: "surface",
    },
  },
};

export default Section;
