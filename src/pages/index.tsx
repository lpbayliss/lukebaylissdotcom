/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import { Box, Button, Divider, Heading, Link, List, ListItem, Text } from '@chakra-ui/react';
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
        <PageHeading>Luke Bayliss 👈</PageHeading>
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
          <ListItem>Facilitates existing, and introduced new team rituals</ListItem>
          <ListItem>Continuously promoting an agile philosophy among the team</ListItem>
          <ListItem>Developed and implemented ways of working documentation; specifically regarding how the engineering team can coordinate, develop, test, and deliver their work effectively</ListItem>
          <ListItem>Lead product initiatives where I have been at the core of discovery, design, and delivery</ListItem>
          <ListItem>Designed and built new, and developed existing front-end applications and back-end systems</ListItem>
          </List>
        </SubSection>
        <SubSection>
          <SectionSubHeading>AGL Energy</SectionSubHeading>
          <Text fontWeight="bold">Application Developer</Text>
          <Text fontStyle="italic">December 2019 - February 2021</Text>
          <List styleType="disc" p="2" pl="8">
          <ListItem>Built and piloted innovative product ideas; with a focus on integrating new technologies and exploring new business possibilities</ListItem>
          <ListItem>Frequently acted as a mentor for JavaScript based technologies due to my deep experience</ListItem>
<ListItem>Developed orchestration systems involved in the Australian Government's ‘ARENA' program</ListItem>
<ListItem>Designed & built services based on the CQRS pattern to super power the identity platform</ListItem>
          </List>
        </SubSection>
        <SubSection>
          <SectionSubHeading>AGL Energy</SectionSubHeading>
          <Text fontWeight="bold">Digital Developer</Text>
          <Text fontStyle="italic">March 2019 - December 2019</Text>
          <List styleType="disc" p="2" pl="8">
          <ListItem>Promoted and facilitated an agile practice; often leading discussions and orchestrating team SCRUM events</ListItem>
            <ListItem>Took lead on a variety of initiatives through discovery, design, and implementation phases</ListItem>
            <ListItem>Introduced and facilitated a DevOps philosophy within the engineering team</ListItem>
            <ListItem>Supported a business wide Identity Platform, often collaborating with stake holders from across the business</ListItem>
            <ListItem>Re-engineered a number of out of date systems within the Identity platform</ListItem>
          </List>
        </SubSection>
        <SubSection>
          <SectionSubHeading>YOUniverse</SectionSubHeading>
          <Text fontWeight="bold">Full Stack Developer</Text>
          <Text fontStyle="italic">July 2018 - March 2019</Text>
          <List styleType="disc" p="2" pl="8">
          <ListItem>Actively participated in product discussions, feature discovery, requirement gathering and story mapping as part of a LEAN agile workplace</ListItem>
            <ListItem>Acted as the lead developer for front-end technologies. Implementing and supporting a variety of front-end frameworks and related tooling</ListItem>
            <ListItem>Developed an extensible design system for our React front-end</ListItem>
            <ListItem>Re-engineered a monolith into a system of microservices with a strong focus on domain driven design</ListItem>
          </List>
        </SubSection>
        <SubSection>
          <SectionSubHeading>Unico Computer Systems</SectionSubHeading>
          <Text fontWeight="bold">Digital Engineer</Text>
          <Text fontStyle="italic">December 2017 - July 2018</Text>
          <List styleType="disc" p="2" pl="8">
          <ListItem>Worked on a variety of telecommunication systems using Java</ListItem>
            <ListItem>Developed on a number of AngularJS and React applications for different clients</ListItem>
            <ListItem>Maintained an extensive automated testing suite using Robot Framework and Python</ListItem>
            
          </List>
        </SubSection>
      </Section>
      <Divider />
      <Section>
        <SectionHeading>🎤 Have Something to Say?</SectionHeading>
        <Text>
          I'm always happy to discuss new opportunities so my inbox is always open! Even if you just want to say hello,
          show me a cool project, or just tell me a joke. Given you're not some automation robot trying to take over the
          world I'll do my best to respond to any mail sent my way.
        </Text>
        <Box textAlign="center" p="10">
          <Button as={Link} href="mailto:hello@lukebayliss.com">
            ✉️ Message Me
          </Button>
        </Box>
      </Section>
    </DefaultLayout>
  );
};

export default IndexPage;
