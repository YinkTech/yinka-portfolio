import React from "react";
import Section from "../components/section";
import { Box, Button, Heading, Icon } from "@chakra-ui/react";
import { IoLogoSass, IoLogoReact } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { DiResponsive, DiRubyRough } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";
import { AiFillApi } from "react-icons/ai";
import { SiRubyonrails, SiTailwindcss } from "react-icons/si";
import { FaWordpressSimple } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { BsFiletypeCss, BsGithub } from "react-icons/bs";
import {
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoGit,
  BiLogoFirebase,
} from "react-icons/bi";

const ToolBox = () => {
  return (
    <Section delay={0.4}>
      <Heading as="h3" variant="section-title">
        My Toolbox
      </Heading>

      <Box mt={5} style={{ textAlign: "center" }}>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            fontSize={50}
            mb={5}
            leftIcon={<Icon as={TiHtml5} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            fontSize={40}
            mb={5}
            leftIcon={<Icon as={BsFiletypeCss} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            fontSize={50}
            mb={5}
            leftIcon={<Icon as={BiLogoJavascript} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            fontSize={50}
            mb={5}
            leftIcon={<Icon as={IoLogoReact} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            fontSize={50}
            mb={5}
            leftIcon={<Icon as={BiLogoRedux} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            fontSize={50}
            mb={5}
            leftIcon={<Icon as={BiLogoGit} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            fontSize={40}
            mb={5}
            leftIcon={<Icon as={BsGithub} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            fontSize={50}
            mb={5}
            leftIcon={<Icon as={AiFillApi} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            fontSize={50}
            mb={5}
            leftIcon={<Icon as={BiLogoFirebase} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            fontSize={50}
            mb={5}
            leftIcon={<Icon as={IoLogoSass} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            fontSize={50}
            mb={5}
            leftIcon={<Icon as={HiOutlineCommandLine} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            mb={5}
            fontSize={50}
            leftIcon={<Icon as={TbBrandVscode} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            mb={5}
            fontSize={50}
            leftIcon={<Icon as={DiResponsive} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            fontSize={40}
            mb={5}
            leftIcon={<Icon as={FaWordpressSimple} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            fontSize={40}
            mb={5}
            leftIcon={<Icon as={FaFigma} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            fontSize={50}
            mb={5}
            leftIcon={<Icon as={DiRubyRough} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            mb={5}
            fontSize={50}
            leftIcon={<Icon as={SiRubyonrails} />}
          ></Button>
        </span>
        <span>
          {" "}
          <Button
            variant="ghost"
            colorScheme="teal"
            mb={5}
            fontSize={50}
            leftIcon={<Icon as={SiTailwindcss} />}
          ></Button>
        </span>
      </Box>
    </Section>
  );
};

export default ToolBox;
