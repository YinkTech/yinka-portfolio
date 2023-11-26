import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="home-heart">
      <Container>
        <Title>
          home-heart <Badge>2023</Badge>
        </Title>
        <P>
          This is a React-Redux app that allows users to sign up and sign in,
          allow only sign up users to add items, delete items and also make
          reservations for each item and view them later on. The APIs are built
          with Ruby on Rails.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>website</Meta>
            <Link href="https://home-heart.netlify.app/">
              https://home-heart.netlify.app/ <ExternalLinkIcon mx="2pz" />{" "}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/YinkTech/Home-heart">
              https://github.com/YinkTech/Home-heart{" "}
              <ExternalLinkIcon mx="2pz" />{" "}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, Redux, HTML & CSS, Ruby on Rails</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/thumbHeart.png" alt="HomeHeart" />
        <WorkImage src="/images/works/thumbHeart2.png" alt="HomeHeart" />
      </Container>
    </Layout>
  );
};

export default Work;
