import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import { Navbar } from "../navbar";

const PageLayout = ({ children }: PropsWithChildren) => (
  <Box as="main" minW="sm">
    <Navbar />
    {children}
  </Box>
);

export default PageLayout;
