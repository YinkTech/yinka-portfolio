import Head from "next/head";
import NavBar from "./../navbar.js";
import { Box, Container } from "@chakra-ui/react";
import YinkTech from "../yink-tech.js";
import NoSsr from "../no-ssr.js";

const Layout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Ayeni Olayinka - Homepage </title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <YinkTech />
        </NoSsr>
        {children}
      </Container>
    </Box>
  );
};
export default Layout;
