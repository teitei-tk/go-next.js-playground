import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { Container, Header, Item } from "semantic-ui-react";

import { ArtcileProps, ArticleRepository } from "@repositories/article";

const Artcile: NextPage<ArtcileProps> = (props) => {
  return (
    <Container text>
      <Header as="h1">{props.title}</Header>
      <p>{props.content}</p>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const repo = new ArticleRepository();
  const ret = repo.findAll();

  const paths = ret.map((article) => {
    return {
      params: {
        id: article.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const repo = new ArticleRepository();
  const entity = repo.find(Number(context.params.id));

  return {
    props: entity.toJSON(),
  };
};

export default Artcile;
