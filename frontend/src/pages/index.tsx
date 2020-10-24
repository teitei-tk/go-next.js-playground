import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { Container, Header, Item } from "semantic-ui-react";

import BlankImage from "@assets/images/blank.png";

type ArtcileProps = {
  id: number;
  title: string;
  content: string;
};

type IndexProps = {
  articles: ArtcileProps[];
};

const ArticleList: NextPage<ArtcileProps> = (props: ArtcileProps) => {
  return (
    <Item>
      <Item.Image size="small" src={BlankImage} />
      <Item.Content header={props.title} description={props.content} />
    </Item>
  );
};

const IndexPage: NextPage<IndexProps> = (props: IndexProps) => (
  <Container text>
    <Header as="h1" dividing>
      My Blog
    </Header>

    <Item.Group>
      {props.articles.map((article, index: number) => {
        return (
          <Link href={`articles/${article.id}`}>
            <Item key={index}>
              <Item.Image size="tiny" src={BlankImage} />
              <Item.Content verticalAlign="middle">
                <Item.Header>{article.title}</Item.Header>
              </Item.Content>
            </Item>
          </Link>
        );
      })}
    </Item.Group>
  </Container>
);

export const getStaticProps: GetStaticProps = async (_) => {
  const description = [
    "Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their",
    "tiny stature, and even others for their massive size.",
  ].join(" ");

  const staticData: IndexProps = {
    articles: [
      {
        id: 1,
        title: "test",
        content: description,
      },
      {
        id: 1,
        title: "test 2",
        content: description,
      },
    ],
  };

  return {
    props: staticData,
  };
};

export default IndexPage;
