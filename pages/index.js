import NextLink from "next/link";
import {
  Box,
  Button,
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
import { BioSection, BioYear, WorksShow } from "../components/bio";
import {
  IoLogoDiscord,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import FrontWork from "./FrontWork";
import ToolBox from "../components/ToolBox";

const Page = () => {
  return (
    <>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Hello there <span className="waving-hand">👋</span>! I&apos;m Olayinka,
        a passionate Frontend Developer <span className="waving-hand">🚀</span>{" "}
        who crafts web experiences!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Olayinka Ayeni
          </Heading>
          <p>( Developer / Designer / Engineer ) </p>
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
          About
        </Heading>
        <Paragraph>
          I&apos;m a dedicated Frontend Developer with a deep passion for
          crafting engaging and user-friendly web experiences. Proficient in
          cutting-edge technologies such as React & Redux, HTML5, CSS3, and
          JavaScript, I specialize in building responsive and visually appealing
          web applications. I bring a keen eye for design and a commitment to
          creating seamless user interfaces for every project. With a track
          record of delivering high-quality frontend solutions, I&apos;m driven
          by a relentless pursuit of excellence in the ever-evolving world of
          web development.
        </Paragraph>
      </Section>
      <Section delay={0.2} textAlign="justify">
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>
            Who Is Olayinka? An inquisitive Front-End Developer with a flair for
            design.
          </BioYear>

          <Paragraph>
            {" "}
            With an unwavering passion for web development, I've dedicated
            myself to the art of creating exceptional digital experiences that
            seamlessly blend cutting-edge technologies like React & Redux,
            HTML5, CSS3, and JavaScript to craft responsive and visually
            captivating web applications. As a Frontend Developer, I bring not
            only technical proficiency but also a keen eye for design,
            consistently striving to deliver high-quality solutions that not
            only meet but exceed user expectations. My journey in this
            ever-evolving world of web development has been marked by a
            relentless pursuit of excellence, as I tackle complex challenges,
            build engaging user interfaces, and leave a lasting mark on the
            digital landscape.
          </Paragraph>
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
      <ToolBox />
      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <BioYear>Currently working on:</BioYear>

        <Paragraph>
          "Continuously enhancing my expertise in various JavaScript libraries
          and having a blast crafting and animating elements using GSAP and
          Framer Motion. Join me on my journey!"
        </Paragraph>
        <WorksShow> A Showcase of My Creations:</WorksShow>
        <Box>
          <FrontWork />
        </Box>
      </Section>
      <Box align="center" my={4}>
        <Link as={NextLink} href="/works">
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            My Portfolio
          </Button>
        </Link>
      </Box>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          On the Web
        </Heading>
        <Box>
          <span>
            <Link href="https://github.com/YinkTech" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              ></Button>
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
              ></Button>
            </Link>
          </span>
          <span>
            <Link href="https://www.discord.com/yinktech/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              ></Button>
            </Link>
          </span>
          <span>
            <Link href="https://www.linkedin.com/in/yinktech/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              ></Button>
            </Link>
          </span>
          <span>
            <Link href="https://twitter.com/yinkabayeni" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              ></Button>
            </Link>
          </span>
        </Box>
      </Section>
      <Section delay={0.5}>
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
    </>
  );
};

export default Page;
