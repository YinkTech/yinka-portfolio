import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Link,
  Button,
  Icon,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import Image from "next/image";
import NextLink from "next/link";
import { IoLogoGithub, IoLinkSharp } from "react-icons/io5";

export const NewHomeGridItem = ({
  description,
  href,
  title,
  thumbnail,
  stackList,
  githubLink,
}) => (
  <Box w="80%" margin="auto">
    <SimpleGrid columns={[1, 1, 2]} alignItems="center" gap={4}>
      <LinkBox
        as={NextLink}
        target="_blank"
        scroll={false}
        cursor="pointer"
        href={href}
      >
        {" "}
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail NewHomeImage"
          placeholder="blur"
        />
      </LinkBox>
      <Box>
        <Text mt={2} fontWeight="bold" fontSize={20}>
          {title}
        </Text>
        <Text fontSize={14}>{description}</Text>
        <Text fontSize={14}>
          {" "}
          <span style={{ fontWeight: "bold" }}> Stack/Tools: </span> {stackList}
        </Text>
        <Box>
          <span>
            <Link href={githubLink} target="_blank">
              <Button
                maxW={0}
                variant="ghost"
                colorScheme="red.500"
                fontSize={23}
                leftIcon={<Icon as={IoLogoGithub} />}
              ></Button>
            </Link>
          </span>

          <span>
            <Link href={href} target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue.200"
                fontSize={23}
                leftIcon={<Icon as={IoLinkSharp} />}
              ></Button>
            </Link>
          </span>
        </Box>
      </Box>
    </SimpleGrid>
  </Box>
);

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ id, title, thumbnail }) => (
  <Box w="100%" border="3px" textAlign="center">
    <Image
      src={thumbnail}
      alt={title}
      className="grid-item-thumbnail"
      placeholder="blur"
    />
    <Text mt={2} fontSize={20} fontWeight="bold">
      {title}
    </Text>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
