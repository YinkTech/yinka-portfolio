import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="web3-project">
      <Container>
        <Title>
          web3-project <Badge>2022</Badge>
        </Title>
        <P>
        web3-decentralize React page.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>website</Meta>
            <Link href="https://yinktech.github.io/web3-project/">
            https://yinktech.github.io/web3-project/ <ExternalLinkIcon mx="2pz" />{" "}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/YinkTech/web3-project">
            https://github.com/YinkTech/web3-project{" "}
              <ExternalLinkIcon mx="2pz" />{" "}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, HTML & CSS.</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/web3-project.png" alt="HomeHeart" />
        <WorkImage src="/images/works/web3-project2.png" alt="HomeHeart" />
        <WorkImage src="/images/works/web3-project3.png" alt="HomeHeart" />
      </Container>
    </Layout>
  );
};

export default Work;
