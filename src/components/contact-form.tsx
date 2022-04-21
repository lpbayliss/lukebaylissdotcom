import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { faPaperPlane } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () => {
  return (
    <form name="contact" action="/success" method="POST" data-netlify="true">
      <Input type="hidden" name="form-name" value="contact" />
      <Stack spacing={4}>
        <Stack direction={{ base: "column", md: "row" }}>
          <FormControl>
            <FormLabel htmlFor="name">Your Name</FormLabel>
            <Input id="name" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
          </FormControl>
        </Stack>
        <FormControl>
          <FormLabel htmlFor="subject">Subject</FormLabel>
          <Input id="subject" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="body">Your Message</FormLabel>
          <Textarea
            id="body"
            size="lg"
            resize="none"
            minH="3xs"
            placeholder="What did the fish say when he swam into a wall? Dam."
          />
        </FormControl>
        <FormControl>
          <Button
            w="full"
            leftIcon={<FontAwesomeIcon icon={faPaperPlane} />}
            type="submit"
            size="lg"
          >
            Send
          </Button>
        </FormControl>
      </Stack>
    </form>
  );
};

export default ContactForm;
