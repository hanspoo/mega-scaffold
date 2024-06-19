import { Html, Heading, Text } from '@react-email/components';
const EmailTemplate = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  return (
    <Html lang="en">
      <Heading as="h1">New Form Submission</Heading>
      <Text>You just submitted a form. Here are the details:</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Message: {message}</Text>
    </Html>
  );
};
export default EmailTemplate;
