import {
  Box,
  Container,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

type Props = {
  business: string;
  position: string;
  start: string;
  end: string;
  comments: string[];
};

const Experience = ({ business, position, start, end, comments }: Props) => {
  return (
    <>
      <Heading pb={{ base: "1", md: "3" }}>{business}</Heading>
      <Box pb="3">
        <Text color="subtext">{position}</Text>
        <Text color="subtext">
          {start} - {end}
        </Text>
      </Box>
      <Container fontSize="md">
        <List styleType="disc" spacing="3">
          {comments.map((c, i) => (
            <ListItem key={`business-comment-${i}`}>{c}</ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};

export default Experience;
