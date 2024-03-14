import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  weight: "variable",
  subsets: ["latin"],
  adjustFontFallback: true,
});

const theme: ThemeOverride = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    text: {
      main: "#110e1b",
    },
    background: {
      main: "#f2effb",
      50: "#eeebfa",
      100: "#ded6f5",
      200: "#bdadeb",
      300: "#9c85e0",
      400: "#7a5cd6",
      500: "#5933cc",
      600: "#4729a3",
      700: "#361f7a",
      800: "#241452",
      900: "#120a29",
    },
    primary: {
      main: "#583fca",
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
    secondary: {
      main: "#9d8cde",
      50: "#eeebf9",
      100: "#ddd7f4",
      200: "#bbb0e8",
      300: "#9988dd",
      400: "#7761d1",
      500: "#5539c6",
      600: "#442e9e",
      700: "#332277",
      800: "#22174f",
      900: "#110b28",
    },
    accent: {
      main: "#7f68df",
      50: "#edeafb",
      100: "#dcd5f6",
      200: "#b8abed",
      300: "#9581e4",
      400: "#7157db",
      500: "#4e2dd2",
      600: "#3e24a8",
      700: "#2f1b7e",
      800: "#1f1254",
      900: "#10092a",
    },
  },
  semanticTokens: {},
  fonts: {
    heading: comfortaa.style.fontFamily,
    body: comfortaa.style.fontFamily,
  },
  styles: {
    global: {
      body: {
        bg: "background.main",
        color: "text.main",
      },
    },
  },
});

export default theme;
