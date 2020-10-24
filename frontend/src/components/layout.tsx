import * as React from "react";
import { NextPage } from "next";

import { Container, Header } from "semantic-ui-react";

const Layout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      <Container text style={{ marginTop: "2em" }}>
        <Container>
          <Header as="h1" dividing>
            Blog Example
          </Header>
        </Container>

        <Container style={{ marginTop: "1em" }}>{children}</Container>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
