import { GridItem, GridItemProps } from "@chakra-ui/react";

const AsideGridSection = (props: GridItemProps) => (
  <GridItem
    {...props}
    as="aside"
    pos="relative"
    px={8}
    pb={8}
    border="1px solid"
    borderColor="gray.300"
    borderRadius="6px"
    shadow="0 20px 24px -4px rgba(0,0,0,.08),0 8px 8px -4px rgba(0,0,0,.03)"
    gridColumnEnd={[1, null, null, 3]}
    gridColumnStart={[1, null, null, 2]}
    gridRowEnd={[1, null, null, 1]}
    gridRowStart={[1, null, null, 2]}
  />
);

export default AsideGridSection;
