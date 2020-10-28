import { NextPage } from 'next';
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/core';

const Page = (props) => <Box as="main" margin="auto" maxW="3xl" px="6" {...props} />;
const Section = (props) => <Box as="section" py="6" {...props} />;
const SubSection = (props) => <Box py="3" {...props} />;
const PageHeading = (props) => <Heading as="h1" size="2xl" mb="2" {...props} />;
const SectionHeading = (props) => <Heading as="h2" size="xl" mb="2" {...props} />;
const SectionSubHeading = (props) => <Heading as="h3" size="lg" mb="2" {...props} />;

const IndexPage: NextPage = () => {
  return (
    <Page>
      <Section>
        <PageHeading>👉Luke Bayliss👈</PageHeading>
        <Text>
          I'm a software engineer from Melbourne, Australia 🦘! I love challenging ideas, building high quality digital
          products with meaningful impacts, and experimenting with exciting new technologies. I also love coffee ☕️.
        </Text>
      </Section>
      <Section>
        <SectionHeading>👨‍🚀 About Me</SectionHeading>
        <Text>Hello Stranger! I'm Luke Bayliss, nice to meet you!</Text>
        <Text>I am a software engineer from Melbourne, Australia and I...</Text>
        <List styleType="disc">
          <ListItem>Greatly enjoy working on challenging projects</ListItem>
          <ListItem>Have a passion for developing products</ListItem>
          <ListItem>Always Jump on opportunities to work with new technologies</ListItem>
          <ListItem>Am a driven individual who puts a great deal of pride in my work</ListItem>
          <ListItem>Believes there is always more to learn and room to improve</ListItem>
          <ListItem>Uses far too many gifs in Slack 😅</ListItem>
        </List>
        <Text>
          I've had an interesting and varied journey in my career so far. I spent time working on integration systems
          for a telecommunication company. Worked on a workforce managment system powered by machine learning. Helped
          develop a large scale identity platform. And now I work with voice assistants and home automation systems!
        </Text>
      </Section>
      <Section>
        <SectionHeading>👨‍💻 Work Experience</SectionHeading>
        <SubSection>
          <SectionSubHeading>AGL Energy</SectionSubHeading>
          <Text fontWeight="bold">Application Developer</Text>
          <Text fontStyle="italic">December 2019 - Present</Text>
          <List styleType="disc">
            <ListItem>Principal React and Node.js developer</ListItem>
            <ListItem>Support and extend the Voice and Home automation platforms</ListItem>
            <ListItem>
              Development of orchestration and analytical systems involved in the Australian Governments ‘ARENA’ program
            </ListItem>
            <ListItem>
              Designed and built a service based on CQRS patterns to super power the identity platform
            </ListItem>
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
          <List styleType="disc">
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
          <List styleType="disc">
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
          <List styleType="disc">
            <ListItem>Supported various .NET and .NET MVC projects</ListItem>
            <ListItem>Supported and extended AngularJS applications</ListItem>
            <ListItem>Supported various telecommunication systems</ListItem>
            <ListItem>Maintained an extensive test automation suite with Robot Framework</ListItem>
          </List>
        </SubSection>
      </Section>
      <Section>
        <SectionHeading>🎤 Have Something to Say?</SectionHeading>
        <Text>
          I'm always happy to discuss new opportunities so my inbox is always open! Even if you just want to say hello,
          show me a cool project, or just tell me a joke. Given you're not some automation robot trying to take over the
          world I'll do my best to respond to any mail sent my way ✉️.
        </Text>
      </Section>
    </Page>
  );
};

export default IndexPage;
