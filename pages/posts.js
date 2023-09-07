import { Heading, Box, SimpleGrid, Divider, Container } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import meduims from "./../public/images/works/meduim.png";

const Posts = () => {
  return (
    <Layout title="Post">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid column={[1, 2, 2]} gap={6}>
            <GridItem 
            title="What are 3 pieces of advice"
            thumbnail={meduims}
            href='https://medium.com/@layinka4dat/what-are-3-pieces-of-advice-that-you-would-give-someone-whos-just-beginning-their-journey-with-c8d450b83991'
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Posts;
