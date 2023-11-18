import { Heading, SimpleGrid, Container } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import { PostData } from "../components/Data";

const Posts = () => {
  return (
    <Layout title="Post">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid column={[1, 2, 2]} gap={6}>
            {PostData.map((data, id) => {
              return (
                <GridItem
                  key={id}
                  title={data.titles}
                  thumbnail={data.thumbnails}
                  href={data.hrefLinks}
                />
              );
            })}
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Posts;
