const theme = {
  colors: {
    background: {
      50: "#e6e6e7",
      100: "#cdcdcf",
      200: "#b5b4b7",
      300: "#9c9b9f",
      400: "#838288",
      500: "#6a6870",
      600: "#514f58",
      700: "#393640",
      800: "#201d28",
      900: "#070410",
    },
    primary: {
      50: "#eeebfa",
      100: "#dcd7f4",
      200: "#baafe9",
      300: "#9787de",
      400: "#745fd3",
      500: "#5137c8",
      600: "#412ca0",
      700: "#312178",
      800: "#211650",
      900: "#100b28",
    },
  },
  semanticTokens: {
    colors: {
      text: { default: "background.900", _dark: "background.50" },
      background: { default: "background.50", _dark: "background.900" },
      "background-hover": {
        default: "background.100",
        _dark: "background.800",
      },
      primary: { default: "primary.500", _dark: "primary.500" },
      "primary-hover": { default: "primary.300", _dark: "primary.300" },
      link: "primary.400",
      surface: { default: "background.100", _dark: "background.800" },
    },
  },
  fonts: {
    heading: "var(--font-comfortaa)",
    body: "var(--font-comfortaa)",
  },
  styles: {
    global: {
      body: {
        bg: "background",
        color: "text",
      },
    },
  },
};

export default theme;
