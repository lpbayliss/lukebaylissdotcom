import { ComponentStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Card: ComponentStyleConfig = {
  baseStyle: (props: any) => ({
    display: "flex",
    flexDirection: "column",
    background: mode("white", "gray.900")(props),
    boxShadow: mode("md", "none")(props),
    padding: 6,
    borderRadius: "base",
  }),
};

export default Card;
