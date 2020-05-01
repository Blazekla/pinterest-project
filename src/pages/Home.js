import React from "react";

//Import MaterialUI components
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

//Import Custom Components
import Layout from "../components/Layout";
import CardListGrid from "../components/CardListGrid";

const useStyles = makeStyles((theme) => ({
  outer: {
    marginTop: "5rem",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.outer}></div>
      <Container maxWidth="xl">
        <div>
          <CardListGrid />
        </div>
      </Container>
    </Layout>
  );
}

export default Home;
