import { Box } from "@chakra-ui/react";
import { NextPage } from "next";

import { Header } from "~/components/header";
import { Navbar } from "~/components/navbar";

const Index: NextPage = () => {
  return (
    <Box as="main" minW="sm">
      <Navbar />
      <Header />
      <Box px="5%" pt="5rem" transition="all .5s">
        {/* Content */}
      </Box>
    </Box>
  );
};

export default Index;
