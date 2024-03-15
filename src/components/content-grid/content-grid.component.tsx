import { Grid, GridProps } from "@chakra-ui/react";

const ContentGrid = (props: GridProps) => (
  <Grid
    {...props}
    columnGap={[0, 0, 0, 20]}
    templateColumns={["1.5fr", null, null, "1.5fr 1fr", "2.5fr 1fr"]}
  />
);

export default ContentGrid;
