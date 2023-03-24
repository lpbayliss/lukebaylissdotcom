import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Flex as="main" flexDir="column" minW="md" px="4">
      {children}
    </Flex>
  );
};

export default Layout;
