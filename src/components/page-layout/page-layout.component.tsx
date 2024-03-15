import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import { MaxWidthContainer } from "../max-width-container";
import { Navbar } from "../navbar";

const PageLayout = ({ children }: PropsWithChildren) => (
  <Box as="main" minW="sm">
    <MaxWidthContainer>
      <Navbar />
    </MaxWidthContainer>
    {children}
  </Box>
);

export default PageLayout;
