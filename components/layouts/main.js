import Head from "next/head";
import NavBar from "./../navbar.js";
import { Box, Container } from "@chakra-ui/react";

const Layout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Ayeni Olayinka - Homepage </title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="Container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};
export default Layout;
