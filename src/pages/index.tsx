/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import {
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  Wrap,
  Box,
} from "@chakra-ui/react";
import Section from "@components/section";
import Card from "@components/card";
import Experience from "@components/experience";
import ColorModeButton from "@components/color-mode-button";
import { css } from "@emotion/react";

const IndexPage: NextPage = () => {
  return (
    <Flex flexDir="column">
      <Box position="relative" zIndex="hide">
        <Box position="absolute" width="full">
          <svg
            preserveAspectRatio="none"
            style={{ position: "absolute", width: "100%", minWidth: "300px" }}
            width="1440"
            height="600"
            viewBox="0 0 1440 600"
          >
            <path
              d="M0 553L24.7 549C49.3 545 98.7 537 147.8 526C197 515 246 501 295.2 493.2C344.3 485.3 393.7 483.7 443 498C492.3 512.3 541.7 542.7 590.8 554.2C640 565.7 689 558.3 738.2 558.8C787.3 559.3 836.7 567.7 886 557.5C935.3 547.3 984.7 518.7 1034 501.8C1083.3 485 1132.7 480 1181.8 474.8C1231 469.7 1280 464.3 1329.2 476.8C1378.3 489.3 1427.7 519.7 1477 539.3C1526.3 559 1575.7 568 1624.8 562.3C1674 556.7 1723 536.3 1772.2 523C1821.3 509.7 1870.7 503.3 1895.3 500.2L1920 497L1920 0L1895.3 0C1870.7 0 1821.3 0 1772.2 0C1723 0 1674 0 1624.8 0C1575.7 0 1526.3 0 1477 0C1427.7 0 1378.3 0 1329.2 0C1280 0 1231 0 1181.8 0C1132.7 0 1083.3 0 1034 0C984.7 0 935.3 0 886 0C836.7 0 787.3 0 738.2 0C689 0 640 0 590.8 0C541.7 0 492.3 0 443 0C393.7 0 344.3 0 295.2 0C246 0 197 0 147.8 0C98.7 0 49.3 0 24.7 0L0 0Z"
              fill="#a067ff"
            ></path>
            <path
              d="M0 402L24.7 397.8C49.3 393.7 98.7 385.3 147.8 386.8C197 388.3 246 399.7 295.2 396.8C344.3 394 393.7 377 443 374.2C492.3 371.3 541.7 382.7 590.8 394.7C640 406.7 689 419.3 738.2 413C787.3 406.7 836.7 381.3 886 387.3C935.3 393.3 984.7 430.7 1034 435.2C1083.3 439.7 1132.7 411.3 1181.8 392.5C1231 373.7 1280 364.3 1329.2 368.2C1378.3 372 1427.7 389 1477 394C1526.3 399 1575.7 392 1624.8 397.3C1674 402.7 1723 420.3 1772.2 418.5C1821.3 416.7 1870.7 395.3 1895.3 384.7L1920 374L1920 0L1895.3 0C1870.7 0 1821.3 0 1772.2 0C1723 0 1674 0 1624.8 0C1575.7 0 1526.3 0 1477 0C1427.7 0 1378.3 0 1329.2 0C1280 0 1231 0 1181.8 0C1132.7 0 1083.3 0 1034 0C984.7 0 935.3 0 886 0C836.7 0 787.3 0 738.2 0C689 0 640 0 590.8 0C541.7 0 492.3 0 443 0C393.7 0 344.3 0 295.2 0C246 0 197 0 147.8 0C98.7 0 49.3 0 24.7 0L0 0Z"
              fill="#8642ff"
            ></path>
            <path
              d="M0 352L24.7 338.8C49.3 325.7 98.7 299.3 147.8 295.3C197 291.3 246 309.7 295.2 320.3C344.3 331 393.7 334 443 332C492.3 330 541.7 323 590.8 318.2C640 313.3 689 310.7 738.2 311.3C787.3 312 836.7 316 886 311.7C935.3 307.3 984.7 294.7 1034 288.7C1083.3 282.7 1132.7 283.3 1181.8 280.8C1231 278.3 1280 272.7 1329.2 287C1378.3 301.3 1427.7 335.7 1477 341.2C1526.3 346.7 1575.7 323.3 1624.8 320.3C1674 317.3 1723 334.7 1772.2 336.5C1821.3 338.3 1870.7 324.7 1895.3 317.8L1920 311L1920 0L1895.3 0C1870.7 0 1821.3 0 1772.2 0C1723 0 1674 0 1624.8 0C1575.7 0 1526.3 0 1477 0C1427.7 0 1378.3 0 1329.2 0C1280 0 1231 0 1181.8 0C1132.7 0 1083.3 0 1034 0C984.7 0 935.3 0 886 0C836.7 0 787.3 0 738.2 0C689 0 640 0 590.8 0C541.7 0 492.3 0 443 0C393.7 0 344.3 0 295.2 0C246 0 197 0 147.8 0C98.7 0 49.3 0 24.7 0L0 0Z"
              fill="#6600ff"
            ></path>
            <path
              d="M0 158L24.7 173.2C49.3 188.3 98.7 218.7 147.8 230.8C197 243 246 237 295.2 224.5C344.3 212 393.7 193 443 190.3C492.3 187.7 541.7 201.3 590.8 207.8C640 214.3 689 213.7 738.2 217.2C787.3 220.7 836.7 228.3 886 230.7C935.3 233 984.7 230 1034 218.2C1083.3 206.3 1132.7 185.7 1181.8 184C1231 182.3 1280 199.7 1329.2 211.7C1378.3 223.7 1427.7 230.3 1477 224.7C1526.3 219 1575.7 201 1624.8 200.5C1674 200 1723 217 1772.2 220.7C1821.3 224.3 1870.7 214.7 1895.3 209.8L1920 205L1920 0L1895.3 0C1870.7 0 1821.3 0 1772.2 0C1723 0 1674 0 1624.8 0C1575.7 0 1526.3 0 1477 0C1427.7 0 1378.3 0 1329.2 0C1280 0 1231 0 1181.8 0C1132.7 0 1083.3 0 1034 0C984.7 0 935.3 0 886 0C836.7 0 787.3 0 738.2 0C689 0 640 0 590.8 0C541.7 0 492.3 0 443 0C393.7 0 344.3 0 295.2 0C246 0 197 0 147.8 0C98.7 0 49.3 0 24.7 0L0 0Z"
              fill="#5802dc"
            ></path>
            <path
              d="M0 66L24.7 74C49.3 82 98.7 98 147.8 100.7C197 103.3 246 92.7 295.2 99C344.3 105.3 393.7 128.7 443 134.5C492.3 140.3 541.7 128.7 590.8 124.3C640 120 689 123 738.2 126.7C787.3 130.3 836.7 134.7 886 138.3C935.3 142 984.7 145 1034 143.5C1083.3 142 1132.7 136 1181.8 120.7C1231 105.3 1280 80.7 1329.2 75.3C1378.3 70 1427.7 84 1477 99.5C1526.3 115 1575.7 132 1624.8 133.3C1674 134.7 1723 120.3 1772.2 111.7C1821.3 103 1870.7 100 1895.3 98.5L1920 97L1920 0L1895.3 0C1870.7 0 1821.3 0 1772.2 0C1723 0 1674 0 1624.8 0C1575.7 0 1526.3 0 1477 0C1427.7 0 1378.3 0 1329.2 0C1280 0 1231 0 1181.8 0C1132.7 0 1083.3 0 1034 0C984.7 0 935.3 0 886 0C836.7 0 787.3 0 738.2 0C689 0 640 0 590.8 0C541.7 0 492.3 0 443 0C393.7 0 344.3 0 295.2 0C246 0 197 0 147.8 0C98.7 0 49.3 0 24.7 0L0 0Z"
              fill="#4b03ba"
            ></path>
          </svg>
        </Box>
      </Box>
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
