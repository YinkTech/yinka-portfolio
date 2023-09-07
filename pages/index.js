import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  ListItem,
  List,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import {
  IoLogoDiscord,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { GridItem } from "../components/grid-item";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in Nigeria!{" "}
        <span className="waving-hand">👋</span>
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Olayinka Ayeni
          </Heading>
          <p>( Engineering / Developer / Designer ) </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            whileHover={{ scale: 1.2 }}
            display="inline-block"
            borderRadius="full"
            src="/images/pass.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Yinka is a full-stack software developer passionate about creating
          innovative, user-friendly websites, features, and products. My
          portfolio showcases a selection of my work and demonstrates my
          technical skills and experience.{" "}
          <Link as={NextLink} href="/works/home-heart">
            <Button
              color="inherit"
              colorScheme="inherit"
              margin="0"
              padding="0"
              mb={1}
            >
              Home
            </Button>
          </Link>{" "}
          .
        </Paragraph>
        <Box align="center" my={4}>
          <Link as={NextLink} href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </Link>
        </Box>
      </Section>
      <Section delay={0.2} textAlign="justify">
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>March 3,</BioYear>
          Born in Ibadan, Nigeria.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♡
        </Heading>
        <Paragraph>
          Coding,{" "}
          <Link
            target="_blank"
            href="https://open.spotify.com/playlist/37i9dQZF1DWXnexX7CktaI?si=p_nIE4GRRP225Pf7nfstPw"
          >
            <Button color="inherit" colorScheme="inherit" m={0} p="0" mb={1}>
              Music,
            </Button>
          </Link>{" "}
          Solving Problem, Games, Team Work.
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the Web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/YinkTech" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @YinkTech
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/yinktech.inc/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @YinkTech
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.discord.com/yinktech/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                @YinkTech
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/yinktech/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @YinkTech
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/olayinkaayeni00" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @Olayinka Ayeni
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Page;
