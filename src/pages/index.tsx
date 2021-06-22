import { NextPage } from 'next';
import { Box, Button, Divider, Heading, Link, List, ListItem, Text } from '@chakra-ui/core';
import DefaultLayout from '../layouts/default.layout';

const Section = (props) => <Box as="section" py="10" {...props} />;
const SubSection = (props) => <Box py="3" {...props} />;
const PageHeading = (props) => <Heading as="h1" size="2xl" mb="2" {...props} />;
const SectionHeading = (props) => <Heading as="h2" size="xl" mb="2" pb="4" {...props} />;
const SectionSubHeading = (props) => <Heading as="h3" size="lg" mb="2" {...props} />;

const IndexPage: NextPage = () => {
  return (
    <DefaultLayout>
      <Section>
        <PageHeading>Luke Bayliss👈</PageHeading>
        <Text>
          Software engineer from <Link href="https://goo.gl/maps/URKckHCRdajjMQs39">Melbourne, Australia</Link>🦘
        </Text>
        <Text>
          I love challenging ideas, building high quality digital products, and experimenting with exciting new
          technologies. And I obviously also love coffee ☕️.
        </Text>
      </Section>
      <Divider />
      <Section>
        <SectionHeading>👨‍🚀 About Me</SectionHeading>
        <Text>Hello Stranger! I'm Luke Bayliss!</Text>
        <Text>I am a software engineer from Melbourne, Australia and I...</Text>
        <List styleType="disc" p="2" pl="8">
          <ListItem>Greatly enjoy working on challenging projects</ListItem>
          <ListItem>Have a passion for developing products</ListItem>
          <ListItem>Always ready to jump into interesting opportunities and work with new technologies</ListItem>
          <ListItem>Am a driven individual who puts a great deal of pride into my work</ListItem>
          <ListItem>Believes there is always Something more to learn and room to improve</ListItem>
          <ListItem>Uses far too many gifs in all Slack channel's I frequent 😅</ListItem>
        </List>
        <Text>
          I've had an interesting and varied journey in my career so far. I spent time working on integration systems
          for a telecommunication company. Worked on a workforce management system powered by AI. Helped develop a large
          scale identity platform taking advantage of event sourcing patterns. Built out voice assistants and home
          automation integrations to help people keep on top and reduce of their energy usage! And now I am hard at work
          at building out some exciting new features for Xero to really bolster their growth into new markets!
        </Text>
      </Section>
      <Divider />
      <Section>
        <SectionHeading>👨‍💻 Work Experience</SectionHeading>
        <SubSection>
          <SectionSubHeading>Xero</SectionSubHeading>
          <Text fontWeight="bold">Engineer</Text>
          <Text fontStyle="italic">February 2021 - Present</Text>
          <List styleType="disc" p="2" pl="8">
            <ListItem>Developing against multiple projects alongside many different teams</ListItem>
            <ListItem>Working with a variety of technologies new and old, both frontend and backend!</ListItem>
            <ListItem>
              Hard at work at building out some exciting new feature sets to help solidify Xero's growth into new
              markets
            </ListItem>
            <ListItem>Facilitate many team rituals and help push a mindset of being as agile as possible</ListItem>
            <ListItem>
              Frequently getting answers wrong in team trivia. But my general knowledge is always improving!
            </ListItem>
          </List>
        </SubSection>
        <SubSection>
          <SectionSubHeading>AGL Energy</SectionSubHeading>
          <Text fontWeight="bold">Application Developer</Text>
          <Text fontStyle="italic">December 2019 - January 2021</Text>
          <List styleType="disc" p="2" pl="8">
            <ListItem>Principal React and Node.js developer</ListItem>
            <ListItem>Support and extend the Voice and Home automation platforms</ListItem>
            <ListItem>Developed orchestration systems involved in the Australian Governments ‘ARENA’ program</ListItem>
            <ListItem>Designed & built services based on CQRS patterns to super power the identity platform</ListItem>
            <ListItem>Maintain fully automated build and release pipelines</ListItem>
            <ListItem>Mentor developers on JavaScript based technologies</ListItem>
            <ListItem>
              Built and pilot innovative ideas and applications; integrating new technologies and exploring their
              possibilities
            </ListItem>
          </List>
        </SubSection>
        <SubSection>
          <SectionSubHeading>AGL Energy</SectionSubHeading>
          <Text fontWeight="bold">Digital Developer</Text>
          <Text fontStyle="italic">December 2019 - Present</Text>
          <List styleType="disc" p="2" pl="8">
            <ListItem>Led various initiatives through conception, design, and implementation phases</ListItem>
            <ListItem>Supported company wide OAuth platform</ListItem>
            <ListItem>Introduced and promoted a DevOps mentality within my team</ListItem>
            <ListItem>Designed and built applications with Angular, RxJS and Typecript</ListItem>
            <ListItem>Refactored and reengineered out of date core systems</ListItem>
            <ListItem>
              Promoted and led an agile practice; often leading discussions and orchestrating retrospectives
            </ListItem>
          </List>
        </SubSection>
        <SubSection>
          <SectionSubHeading>YOUniverse</SectionSubHeading>
          <Text fontWeight="bold">Full Stack Developer</Text>
          <Text fontStyle="italic">December 2019 - Present</Text>
          <List styleType="disc" p="2" pl="8">
            <ListItem>Principal React developer; implement and support front-end frameworks and tooling</ListItem>
            <ListItem>Follow user centered design and support usability testing</ListItem>
            <ListItem>Developed a design system for React</ListItem>
            <ListItem> Developed various microservices following a domain driven design paradigm</ListItem>
            <ListItem>
              Actively particpated in product discussions, feature discovery sessions, requirement gathering and story
              mapping
            </ListItem>
          </List>
        </SubSection>
        <SubSection>
          <SectionSubHeading>Unico Computer Systems</SectionSubHeading>
          <Text fontWeight="bold">Digital Engineer</Text>
          <Text fontStyle="italic">December 2019 - Present</Text>
          <List styleType="disc" p="2" pl="8">
            <ListItem>Supported various .NET and .NET MVC projects</ListItem>
            <ListItem>Supported and extended AngularJS applications</ListItem>
            <ListItem>Supported various telecommunication systems</ListItem>
            <ListItem>Maintained an extensive test automation suite with Robot Framework</ListItem>
          </List>
        </SubSection>
      </Section>
      <Divider />
      <Section>
        <SectionHeading>🎤 Have Something to Say?</SectionHeading>
        <Text>
          I'm always happy to discuss new opportunities so my inbox is always open! Even if you just want to say hello,
          show me a cool project, or just tell me a joke. Given you're not some automation robot trying to take over the
          world I'll do my best to respond to any mail sent my way ✉️.
        </Text>
        <Box textAlign="center" p="10">
          <Button as={Link} href="mailto:lukepbayliss@gmail.com" color="gray.900">
            ✉️ Message Me
          </Button>
        </Box>
      </Section>
    </DefaultLayout>
  );
};

export default IndexPage;
