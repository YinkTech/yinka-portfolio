import { Heading, Box, SimpleGrid, Divider, Container } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "./../components/grid-item";
import thumbInkdrop from "./../public/images/works/thumbInkdrop.png";
import thumbHeart from "./../public/images/works/thumbHeart.png";

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="InkDrop" thumbnail={thumbInkdrop}>
            This is a React-Redux app that displays all the cryptocurrency coins
            and display their details on a new page with trending coins list at
            the side.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="thumbHeart"
            title="Home-heart"
            thumbnail={thumbHeart}
          >
            This is a React-Redux app that allows users to sign up and sign in, allow only sign up users to add items, delete items and also make reservations for each item and view them later on. The APIs are built with Ruby on Rails.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
