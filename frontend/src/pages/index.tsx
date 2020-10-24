import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { Container, Header, Item } from "semantic-ui-react";

import BlankImage from "@assets/images/blank.png";
import { ArticleRepository } from "@repositories/article";

type ArtcileProps = {
  id: number;
  title: string;
  content: string;
};

type IndexProps = {
  articles: ArtcileProps[];
};

const IndexPage: NextPage<IndexProps> = (props: IndexProps) => (
  <Container text>
    <Header as="h1" dividing>
      My Blog
    </Header>

    <Item.Group>
      {props.articles.map((article, index: number) => {
        return (
          <Link href={`articles/${article.id}`} key={index}>
            <Item>
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
  const articleRepo = new ArticleRepository();
  const ret = articleRepo.findAll();

  return {
    props: {
      articles: ret,
    },
  };
};

export default IndexPage;
