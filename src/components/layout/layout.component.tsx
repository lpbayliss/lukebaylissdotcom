import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return <Flex as="main">{children}</Flex>;
};

export default Layout;
