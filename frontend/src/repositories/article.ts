const description = [
  "Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their",
  "tiny stature, and even others for their massive size.",
].join(" ");

export type ArtcileProps = {
  id: number;
  title: string;
  content: string;
};

export type ArticleJSON = ArtcileProps;

export class Article {
  readonly id: number;
  readonly title: string;
  readonly content: string;

  constructor(props: ArtcileProps) {
    this.id = props.id;
    this.title = props.title;
    this.content = props.content;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
    };
  }

  static fromJSON(json: ArticleJSON) {
    return new Article(json);
  }
}

export class ArticleRepository {
  readonly rawRows: ArticleJSON[];
  readonly rows: Article[];

  constructor() {
    this.rawRows = [
      {
        id: 1,
        title: "test",
        content: description,
      },
      {
        id: 2,
        title: "test 2",
        content: description,
      },
    ];

    this.rows = this.rawRows.map((article) => {
      return Article.fromJSON(article);
    });
  }

  findAll() {
    const ret = this.rows.map((article) => {
      return article.toJSON();
    });

    return ret;
  }

  find(id: number) {
    return this.rows.find((article) => article.id == id);
  }
}
