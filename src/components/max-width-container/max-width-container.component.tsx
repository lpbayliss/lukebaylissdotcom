import { Container, ContainerProps } from "@chakra-ui/react";

const MaxWidthContainer = ({ children, ...props }: ContainerProps) => (
  <Container maxW="80rem" px="5%" {...props}>
    {children}
  </Container>
);

export default MaxWidthContainer;
