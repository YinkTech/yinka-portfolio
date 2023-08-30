import { Box, Container, Heading } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center" color="#fff">
        Hello, I&apos;m a full-stack developer based in Nigeria!
      </Box>

      <box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Olayinka Ayeni
          </Heading>
          <p>( Engineering / Developer / Designer ) </p>
        </Box>
      </box>
    </Container>
  );
};

export default Page;
