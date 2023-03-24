import useTicker from "@/hooks/useTicker";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import NextLink from "next/link";
import { PropsWithChildren } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const ExperienceContent = ({
  role,
  workplace,
  period,
  children,
}: PropsWithChildren<{
  role: string;
  workplace: string;
  period: string;
}>) => (
  <>
    <Heading as="h2" size="lg">
      {role}
    </Heading>
    <Heading as="h3" size="md">
      {workplace}
    </Heading>
    <Text>{period}</Text>
    <Box>{children}</Box>
  </>
);

export default function Home() {
  const { value } = useTicker({ length: 3, delay: 15000 });
  return (
    <>
      <Head>
        <title>Luke Bayliss</title>
      </Head>
      <Center mt="8">
        <Heading as="h1">{`<LukeBayliss/>`}</Heading>
      </Center>
      <Center my="8">
        <Divider maxW="2xl" borderColor="gray.500" />
      </Center>
      <Flex
        as="section"
        margin="auto"
        justifyContent="center"
        alignItems="center"
        w="2xl"
        color="gray.500"
      >
        <AnimatePresence initial={false} mode="wait">
          {value === 0 && (
            <motion.div
              key="0"
              transition={{
                duration: 0.5,
              }}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
            >
              <Text>
                {`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                laudantium dicta animi modi, odio nisi ea nemo ipsam,
                repudiandae cumque iste veniam eum aspernatur, natus
                perspiciatis reprehenderit sequi? Officiis, vel."`}
              </Text>
            </motion.div>
          )}
          {value === 1 && (
            <motion.div
              key="1"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
            >
              <Text>
                {`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                laudantium dicta animi modi, odio nisi ea nemo ipsam,
                repudiandae cumque iste veniam eum aspernatur, natus
                perspiciatis reprehenderit sequi? Officiis, vel."`}
              </Text>
            </motion.div>
          )}
          {value === 2 && (
            <motion.div
              key="2"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
            >
              <Text>
                {`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                laudantium dicta animi modi, odio nisi ea nemo ipsam,
                repudiandae cumque iste veniam eum aspernatur, natus
                perspiciatis reprehenderit sequi? Officiis, vel."`}
              </Text>
            </motion.div>
          )}
        </AnimatePresence>
      </Flex>
      <Center my="8">
        <Divider maxW="2xl" borderColor="gray.500" />
      </Center>
      <VStack
        as="section"
        margin="auto"
        justifyContent="center"
        alignItems="center"
        spacing={8}
        w="2xl"
      >
        <Box w="full">
          <ExperienceContent
            role="Senior Software Engineer"
            workplace="Mr Yum"
            period="2022 - Present"
          >
            <List>
              <ListItem>
                Facilitated existing and introduced new team rituals
              </ListItem>
              <ListItem>Promoted agile philosophy among the team</ListItem>
              <ListItem>
                Developed and implemented ways of working documentation
              </ListItem>
              <ListItem>
                Led product initiatives through discovery, design, and delivery
              </ListItem>
              <ListItem>
                Designed, built, and developed front-end applications and
                back-end systems
              </ListItem>
            </List>
          </ExperienceContent>
        </Box>
        <Box w="full">
          <ExperienceContent
            role="Software Engineer"
            workplace="Xero"
            period="2021 - 2022"
          >
            <List>
              <ListItem>Maintained an existing loyalty platform</ListItem>
              <ListItem>
                Designed and developed integrations for a new loyalty platform
              </ListItem>
              <ListItem>
                Designed event-driven architecture and systems built on Temporal
              </ListItem>
              <ListItem>
                Facilitated and introduced team rituals and processes
              </ListItem>
              <ListItem>Actively contributed to a code quality guild</ListItem>
            </List>
          </ExperienceContent>
        </Box>
        <Box w="full">
          <ExperienceContent
            role="Application Developer"
            workplace="AGL Energy"
            period="2020 - 2021"
          >
            <List>
              <ListItem>Built and piloted innovative product ideas</ListItem>
              <ListItem>
                Mentored team members in JavaScript-based technologies
              </ListItem>
              <ListItem>
                Developed orchestration systems for the Australian Governments
                ARENA program
              </ListItem>
              <ListItem>
                Designed and built services based on event driven architecture
                patterns
              </ListItem>
              <ListItem>
                Supported and re-engineered systems within the Identity platform
              </ListItem>
            </List>
          </ExperienceContent>
        </Box>
        <Box w="full">
          <ExperienceContent
            role="Digital Developer"
            workplace="AGL Energy"
            period="2019 - 2020"
          >
            <List>
              <ListItem>
                Promoted and facilitated agile practice and team SCRUM events
              </ListItem>
              <ListItem>
                Led initiatives through discovery, design, and implementation
              </ListItem>
              <ListItem>
                Introduced and facilitated a DevOps philosophy within the
                identity team
              </ListItem>
              <ListItem>
                Collaborated frequently with stakeholders from across the
                business
              </ListItem>
            </List>
          </ExperienceContent>
        </Box>
      </VStack>
    </>
  );
}
