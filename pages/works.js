import { Heading, SimpleGrid, Container } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "./../components/grid-item";
import Layout from "../components/layouts/article";
import { WorkData } from "../components/Data";
import { shortenText } from "../components/layouts/shorthand";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {WorkData.map((data, id) => {
            return (
              <Section key={id}>
                <WorkGridItem
                  id={data.id}
                  title={data.title}
                  thumbnail={data.thumbnail}
                >
                   {shortenText(data.description, 51)}
                </WorkGridItem>
              </Section>
            );
          })}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
