import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";
import * as React from "react";

type Props = { variant?: "primary" | "secondary" | "default" } & BoxProps;

const Section = ({ variant = "default", ...rest }: Props) => {
  const styles = useStyleConfig("Section", { variant });

  return <Box as="section" __css={styles} {...rest} />;
};

export default Section;
