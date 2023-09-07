import { Heading, Box, SimpleGrid, Divider, Container } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "./../components/grid-item";
import Layout from "../components/layouts/article";

import thumbInkdrop from "./../public/images/works/thumbInkdrop.png";
import thumbHeart from "./../public/images/works/thumbHeart.png";
import thumbWeb3 from "./../public/images/works/web3-project.png";
import thumbCoins from "./../public/images/works/coins-desktop1.png";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="stock-market"
              title="Stock-Market"
              thumbnail={thumbInkdrop}
            >
              This is a React-Redux app that displays all the cryptocurrency
              coins and display their details on a new page with....
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="home-heart"
              title="Home-heart"
              thumbnail={thumbHeart}
            >
              This is a React-Redux app that allows users to sign up and sign
              in, allow only sign up users to add items....
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="web3-project"
              title="web3-project"
              thumbnail={thumbWeb3}
            >
              web3-decentralize React page....
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="coins"
              title="Coins-Marketplace"
              thumbnail={thumbCoins}
            >
              This project is a captone project in javascript, where data is
              been fetched from api....
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
