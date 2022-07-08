import { Heading, useStyleConfig } from "@chakra-ui/react";

const H1 = (props) => <Heading __css={useStyleConfig("H1")} {...props} />;
const H2 = (props) => <Heading __css={useStyleConfig("H2")} {...props} />;
const H3 = (props) => <Heading __css={useStyleConfig("H3")} {...props} />;

const components = {
  H1,
  H2,
  H3,
};

export default components;
