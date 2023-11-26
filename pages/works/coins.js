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
          home-heart <Badge>2022</Badge>
        </Title>
        <P>
          This project is a captone project in javascript, where data is been
          fetched from api and a data is also passed. It also including
          searching the name.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>website</Meta>
            <Link href="https://yinktech.github.io/Coins-Marketplace/">
              https://yinktech.github.io/Coins-Marketplace/{" "}
              <ExternalLinkIcon mx="2pz" />{" "}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/YinkTech/Coins-Marketplace">
              https://github.com/YinkTech/Coins-Marketplace{" "}
              <ExternalLinkIcon mx="2pz" />{" "}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, JavaScript, Webpack</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/coins-desktop1.png"
          alt="Coins-Marketplace"
        />
        <WorkImage
          src="/images/works/coins-desktop2.png"
          alt="Coins-Marketplace"
        />
      </Container>
    </Layout>
  );
};

export default Work;
