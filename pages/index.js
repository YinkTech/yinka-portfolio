import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Textarea,
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
          I&apos;m a skilled software developer with expertise in multiple
          websites and web application development platforms. I am an avid
          reader with a strong work ethic. I have knowledge of technologies
          including React, JavaScript, Ruby, and Ruby on Rails. Through my
          experience in the field, I have developed a strong understanding of
          the development process and the ability to deliver high-quality
          solutions. I am excited to use my skills to help bring your ideas to
          life. Please feel free to contact me if you are impressed by my
          qualifications and need assistance with a programming project.
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
        <Box >
          <span>
            <Link href="https://github.com/YinkTech" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
              </Button>
            </Link>
          </span>
          <span>
            <Link
              href="https://www.instagram.com/yinktech.inc/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
              </Button>
            </Link>
          </span>
          <span>
            <Link href="https://www.discord.com/yinktech/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
              </Button>
            </Link>
          </span>
          <span>
            <Link href="https://www.linkedin.com/in/yinktech/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
              </Button>
            </Link>
          </span>
          <span>
            <Link href="https://twitter.com/olayinkaayeni00" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
              </Button>
            </Link>
          </span>
        </Box>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <form
          action="https://formsubmit.co/layinka4dat@gmail.com"
          method="post"
        >
          <FormControl mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input
              required
              name="Email"
              placeholder="Enter Your Email"
              type="email"
            />
          </FormControl>
          <FormControl>
            <FormLabel> Message</FormLabel>
            <Textarea
              name="Message"
              required
              placeholder="Enter Message "
              type="text"
            />
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </Section>

      <Section>
        <Box align="center">Copyright &copy; 2023 YinkTech.</Box>
      </Section>
    </Container>
  );
};

export default Page;
