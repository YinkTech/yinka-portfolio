import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";

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
        Hello, I&apos;m a full-stack developer based in Nigeria!
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
          <Link as={NextLink} href="/works/inkdrop">
            indrop
          </Link>
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
          <BioYear>2000</BioYear>
          Born in Ibadan, Nigeria.
        </BioSection>
        {/* <BioSection>
          <BioYear>2023 to present</BioYear>
          Product Development Intern Internship. <br /> • Reviewing and
          technically assisting the company to meet the customers need. <br /> •
          Worked with a team of three to visualize, review and analyze customers
          feedback. <br /> • Reading and understand the Role of a Product
          Manager.
          <br /> • Reviewing and technically assisting the company to meet the
          customers need.
          <br /> • Worked with a team of three to visualize, review and analyze
          customers feedback.
          <br /> • Reading and understand the Role of a Product Manager. <br />{" "}
          • Skills: Product ManagementSkills: Product Management
        </BioSection>
        <BioSection>
          <BioYear>2023 to present</BioYear>
          Technical Support Engineer & Mentorship • Internship <br />
          Delivered valuable and punctual feedback to junior web developers
          regarding their technical undertakings.
          <br /> • Guaranteed the excellence of source code and performed
          assessments of both code and UI design.
          <br /> • Employed GitHub's review functionalities and Slack to
          promptly address project-related queries for students.
        </BioSection>
        <BioSection>
          <BioYear>2021 to 2023 </BioYear>
          Program Remote Full Stack Web Development Program
          <br /> Activities and societies: Mentorship of junior
          developersActivities and societies: Mentorship of junior developers
          <br /> • Dedicated over 1300 hours to achieving proficiency in
          algorithms, data structures, and full-stack development, all the while
          actively working on projects involving Ruby, Rails, JavaScript, React,
          and Redux.
          <br /> • Gained expertise in remote pair-programming through the
          utilization of GitHub, industry-standard git-flow, and daily standups
          for effective communication and collaboration with fellow developers
          located internationally.
          <br /> • Dedicated over 1300 hours to achieving proficiency in
          algorithms, data structures, and full-stack development, all the while
          actively working on projects involving Ruby, Rails, JavaScript, React,
          and Redux. <br /> • Gained expertise in remote pair-programming through the
          utilization of GitHub, industry-standard git-flow, and daily standups
          for effective communication and collaboration with fellow developers
          located internationally. <br />  Skills: GitHub · Landing Page
          Optimization · Git · WordPress · Ruby · Product Management · Redux.js
          · React.js · Pair Programming · JavaScript · Ruby on Rails
        </BioSection> */}
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
            Music,{" "}
          </Link>
          Solving Problem, Games, Team Work.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Page;
