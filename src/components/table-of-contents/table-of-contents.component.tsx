import { Box, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

const TOCLevelIndents: Record<number, number> = {
  1: 2,
  2: 4,
  3: 6,
  4: 8,
  5: 10,
  6: 12,
};

interface TableOfContentsProps {
  headings: { level: number; text: string; id: string }[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => (
  <Box pos="sticky" top={0} pt="10">
    <Text
      mb={1}
      p={2}
      fontSize="xl"
      fontWeight="bold"
      borderColor="grey.900"
      borderBottom="1px solid"
    >
      Table of Contents
    </Text>
    <VStack alignItems="flex-start">
      {headings.map((heading, index) => (
        <Link
          key={`${heading.id}-${index}`}
          as={NextLink}
          w="full"
          ml={TOCLevelIndents[heading.level] ?? 0}
          p={2}
          borderColor="grey.300"
          borderBottom="1px solid"
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById(heading.id)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {heading.text}
        </Link>
      ))}
    </VStack>
  </Box>
);

export default TableOfContents;
