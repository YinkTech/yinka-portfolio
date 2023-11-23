import {  SimpleGrid } from "@chakra-ui/react";
import { homeData } from "../components/Data";
import Section from "../components/section";
import { HomeGridItem } from "../components/grid-item";
import { shortenText } from "../components/layouts/shorthand";

const FrontWork = () => {
  return (
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {homeData.map((data, id) => {
            return (
              <HomeGridItem
                key={id}
                title={data.titles}
                thumbnail={data.thumbnails}
                href={data.hrefLinks}
                description={shortenText(data.description, 70)}
              />
            );
          })}
        </SimpleGrid>
      </Section>
  );
};

export default FrontWork;
