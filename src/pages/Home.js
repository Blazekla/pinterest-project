import React from "react";

//Import MaterialUI components
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//Import Custom Components
import Layout from "../components/Layout";

const useStyles = makeStyles((theme) => ({
  outer: {
    marginTop: "5rem",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.outer}>
        <Typography>This is the home page dude</Typography>
      </div>
    </Layout>
  );
}

export default Home;
