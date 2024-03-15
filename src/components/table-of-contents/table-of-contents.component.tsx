import { Box, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

const TOCLevelIndents: Record<number, number> = {
  1: 2,
  2: 6,
  3: 10,
  4: 14,
  5: 16,
  6: 20,
};

interface TableOfContentsProps {
  headings: { level: number; text: string; id: string }[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => (
  <Box pos="sticky" top={0} pt="10">
    <Text
      mb={2}
      p={2}
      fontSize="xl"
      fontWeight="bold"
      borderColor="grey.900"
      borderBottom="1px dashed"
    >
      Table of Contents
    </Text>
    <VStack alignItems="flex-start" gap={0}>
      {headings.map((heading, index) => (
        <Link
          key={`${heading.id}-${index}`}
          as={NextLink}
          w="full"
          px={2}
          pt={3}
          pb={2}
          pl={TOCLevelIndents[heading.level] ?? 0}
          borderBottom="1px solid"
          borderBottomColor="primary.100"
          _hover={{
            textDecoration: "none",
            borderBottomColor: "primary.300",
            color: "primary.500",
          }}
          transition={"all 0.3s ease"}
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
