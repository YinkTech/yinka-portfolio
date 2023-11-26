import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="stock-market">
      <Container>
        <Title>
          stock-market <Badge>2022</Badge>
        </Title>
        <P>
          This is a React-Redux app that display all the crytopcurrency coins
          and display it details on a new page with trending coins list at the
          side.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>website</Meta>
            <Link href="https://yinktech.github.io/Stock-Market">
              https://yinktech.github.io/Stock-Market{" "}
              <ExternalLinkIcon mx="2pz" />{" "}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/YinkTech/Stock-Market">
              https://github.com/YinkTech/Stock-Market{" "}
              <ExternalLinkIcon mx="2pz" />{" "}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, Redux, HTML & CSS.</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/thumbInkdrop.png" alt="HomeHeart" />
        <WorkImage src="/images/works/stock-desktop2.png" alt="HomeHeart" />
      </Container>
    </Layout>
  );
};

export default Work;
