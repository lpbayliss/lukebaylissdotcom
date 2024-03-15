import { GridItem, GridItemProps } from "@chakra-ui/react";

const ArticleGridSection = (props: GridItemProps) => (
  <GridItem
    {...props}
    as="article"
    mt={[null, null, null, -12]}
    px={12}
    pt={12}
  />
);

export default ArticleGridSection;
