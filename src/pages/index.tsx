/* eslint-disable react/no-unescaped-entities */
import { GetServerSideProps, NextPage } from "next";
import {
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import Section from "../components/section";
import Card from "../components/card";
import Experience from "../components/experience";
import ColorModeButton from "../components/color-mode-button";

const IndexPage: NextPage = () => {
  return (
    <Flex flexDir="column">
      <Section>
        <Container maxW="4xl">
          <ColorModeButton />
          <Heading size="4xl" pb="none">
            Hello! I'm Luke.
          </Heading>
          <Stack maxW="md" fontSize={{ base: "xl", md: "2xl" }}>
            <Text>I am a software engineer from Melbourne, Australia.</Text>
            <Text>
              I have a passion for building high quality digital products,
              challenging projects, and experimenting with exciting new
              technologies.
            </Text>
          </Stack>
        </Container>
      </Section>
      <Section variant="secondary">
        <Container maxW="4xl">
          <Heading size="2xl">About Me</Heading>
          <Stack spacing="8" fontSize={{ base: "lg", md: "xl" }}>
            <Text>
              I am a Software Engineer currently working at Xero where I am
              primarily focused on building out an exciting new tax product.
            </Text>
            <Text>
              I love building effective and high quality digital products,
              especially when I get to work with a great team of like minded
              individuals. Team work and collaboration is something I relish.
            </Text>
            <Text>
              I also have a passion for improving processes. Continuous
              improvement is something I believe to be a core quality of a
              highly effective team, and I aspire to be the most supportive team
              member that not only delivers my best work, but enables my team to
              be their best also.
            </Text>
          </Stack>
        </Container>
      </Section>
      <Section>
        <Container maxW="4xl">
          <Heading size="2xl">Experience</Heading>
        </Container>
        <Container maxW="8xl">
          <Wrap spacing={5} justify="center">
            <Card maxW="sm" minH="md">
              <Experience
                business="Xero"
                position="Engineer"
                start="February 2021"
                end="Present"
                comments={[
                  "Facilitates existing, and introduced new team rituals",
                  "Continuously promoting an agile philosophy among the team",
                  "Developed and implemented ways of working documentation; specifically regarding how the engineering team can coordinate, develop, test, and deliver their work effectively",
                  "Lead product initiatives where I have been at the core of discovery, design, and delivery",
                  "Designed and built new, and developed existing front-end applications and back-end systems",
                ]}
              />
            </Card>
            <Card maxW="sm">
              <Experience
                business="AGL Energy"
                position="Application Developer"
                start="December 2019"
                end="February 2021"
                comments={[
                  "Built and piloted innovative product ideas; with a focus on integrating new technologies and exploring new business possibilities",
                  "Frequently acted as a mentor for JavaScript based technologies due to my deep experience",
                  "Developed orchestration systems involved in the Australian Government's ‘ARENA' program",
                  "Designed & built services based on the event sourcing pattern to super power the identity platform",
                ]}
              />
            </Card>
            <Card maxW="sm">
              <Experience
                business="AGL Energy"
                position="Digital Developer"
                start="March 2019"
                end="December 2019"
                comments={[
                  "Promoted and facilitated an agile practice; often leading discussions and orchestrating team SCRUM events",
                  "Took lead on a variety of initiatives through discovery, design, and implementation phases",
                  "Introduced and facilitated a DevOps philosophy within the engineering team",
                  "Supported a business wide Identity Platform, often collaborating with stake holders from across the business",
                  "Re-engineered a number of out of date systems within the Identity platform",
                ]}
              />
            </Card>
            <Card maxW="sm">
              <Experience
                business="YOUniverse Solutions"
                position="Full-Stack Developer"
                start="July 2019"
                end="March 2019"
                comments={[
                  "Actively participated in product discussions, feature discovery, requirement gathering and story mapping as part of a LEAN agile workplace",
                  "Acted as the lead developer for front-end technologies. Implementing and supporting a variety of front-end frameworks and related tooling",
                  "Developed an extensible design system for our React front-end",
                  "Re-engineered a monolith into a system of micro-services with a strong focus on domain driven design",
                ]}
              />
            </Card>
            <Card maxW="sm" minH="md">
              <Experience
                business="Unico Computer Systems"
                position="Application Developer"
                start="December 2017"
                end="February 2018"
                comments={[
                  "Worked on a variety of telecommunication systems using Java",
                  "Developed on a number of AngularJS and React applications for different clients",
                  "Maintained an extensive automated testing suite using Robot Framework and Python",
                ]}
              />
            </Card>
          </Wrap>
        </Container>
      </Section>
      <Section variant="secondary">
        <Container maxW="4xl">
          <Heading size="2xl">Want to get in touch?</Heading>
          <Stack spacing={8}>
            <Text fontSize="xl">
              My inbox is always open! If you have an exciting new opportunity,
              or you just want to say hello, feel free to drop me a message and
              I'll do my very best to get back to you. Bonus points for a good
              joke!
            </Text>
            <Link fontSize="xl" href="mailto:hello@lukebayliss.com">
              Find me at hello@lukebayliss.com
            </Link>
          </Stack>
        </Container>
      </Section>
    </Flex>
  );
};

export default IndexPage;
