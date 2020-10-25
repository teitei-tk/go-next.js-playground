import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { Container, Header, Item } from "semantic-ui-react";

import BlankImage from "@assets/images/blank.png";
import { ArticleRepository, ArtcileProps } from "@repositories/article";

import Layout from "@components/layout";

type IndexProps = {
  articles: ArtcileProps[];
};

const IndexPage: NextPage<IndexProps> = (props: IndexProps) => (
  <>
    <Layout>
      <Item.Group>
        {props.articles.map((article, index: number) => {
          return (
            <Link href={`articles/${article.id}`} key={index}>
              <Item>
                <Item.Image size="tiny" src={BlankImage} />
                <Item.Content verticalAlign="middle">
                  <Item.Header>
                    <a>{article.title}</a>
                  </Item.Header>
                </Item.Content>
              </Item>
            </Link>
          );
        })}
      </Item.Group>
    </Layout>
  </>
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
