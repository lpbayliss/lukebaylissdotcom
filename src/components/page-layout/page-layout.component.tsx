import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import { Header } from "../header";
import { Navbar } from "../navbar";

const PageLayout = ({ children }: PropsWithChildren) => (
  <Box as="main" minW="sm">
    <Navbar />
    <Header />
    <Box px="5%" pt="5rem" transition="all .5s">
      {children}
    </Box>
  </Box>
);

export default PageLayout;
