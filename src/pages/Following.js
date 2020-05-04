import React from "react";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

//Import Custom Components
import Layout from "../components/Layout";
import CardListGrid from "../components/CardListGrid";
import FollowUsers from "../components/subcomponents/FollowUsers";

const useStyles = makeStyles((theme) => ({
  outer: {
    marginTop: "5rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

function Following() {
  const classes = useStyles();
  return (
    <Layout>
      <Container className={classes.outer}>
        <FollowUsers />
      </Container>
      <div className={classes.outer}></div>
      <Container maxWidth="xl">
        <div>
          <CardListGrid />
        </div>
      </Container>
    </Layout>
  );
}

export default Following;
