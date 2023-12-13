import { SimpleGrid } from "@chakra-ui/react";
import { homeData } from "../components/Data";
import Section from "../components/section";
import { NewHomeGridItem } from "../components/grid-item";

const FrontWork = () => {
  return (
    <Section delay={0.1}>
      <SimpleGrid marginTop="10px" columns={[1, 1, 1, 1]} gap={6}>
        {homeData.map((data, id) => {
          return (
            <NewHomeGridItem
              key={id}
              title={data.titles}
              thumbnail={data.thumbnails}
              href={data.hrefLinks}
              description={data.description}
              stackList={data.stackList}
              githubLink={data.githubLink}
            />
          );
        })}
      </SimpleGrid>
    </Section>
  );
};

export default FrontWork;
