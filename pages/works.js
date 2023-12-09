import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Heading,
  SimpleGrid,
  Container,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Image,
  Box,
  Icon,
  LinkBox,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Section from "../components/section";
import { WorkGridItem } from "./../components/grid-item";
import Layout from "../components/layouts/article";
import { WorkData } from "../components/Data";
import { shortenText } from "../components/layouts/shorthand";
import React, { useState } from "react";
import { IoLinkSharp, IoLogoGithub } from "react-icons/io5";

const Works = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(5px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={12}>
          {WorkData.map((data, id) => {
            return (
              <Section key={id}>
                <div
                  onClick={() => {
                    setOverlay(<OverlayOne />);
                    onOpen();
                  }}
                >
                  <WorkGridItem
                    id={data.id}
                    title={data.title}
                    thumbnail={data.thumbnail}
                  >
                    {shortenText(data.description, 51)}
                  </WorkGridItem>
                </div>
                <Modal isCentered isOpen={isOpen} size="xl" onClose={onClose}>
                  {overlay}
                  <ModalContent className="ModalSet">
                    <ModalCloseButton />
                    <ModalHeader> {" "} </ModalHeader>
                    <ModalBody>
                      <SimpleGrid
                        columns={[1, 1, 2]}
                        alignItems="center"
                        gap={4}
                      >
                        <Box>
                          <LinkBox
                            as={NextLink}
                            scroll={false}
                            cursor="pointer"
                            href={data.hrefLink}
                          >
                            <Image
                              src={data.thumbnails}
                              alt={data.title}
                              className="grid-item-thumbnail"
                              placeholder="blur"
                            />
                          </LinkBox>
                        </Box>
                        <Box>
                          <Text mt={2} fontWeight="bold" fontSize={20}>
                            {data.title}
                          </Text>
                          <Text fontSize={14}>{data.description}</Text>
                          <Text fontSize={14}>
                            {" "}
                            <span style={{ fontWeight: "bold" }}>
                              {" "}
                              Stack/Tools:{" "}
                            </span>{" "}
                            {data.stackList}
                          </Text>
                          <Box>
                            <span>
                              <Link href={data.githubLink} target="_blank">
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
                              <Link href={data.hrefLink} target="_blank">
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
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Section>
            );
          })}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
