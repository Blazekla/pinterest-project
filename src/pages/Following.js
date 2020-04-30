import React from "react";

//Import MaterialUI Components
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//Import Custom Components
import Layout from "../components/Layout";

const useStyles = makeStyles((theme) => ({
  outer: {
    marginTop: "5rem",
  },
}));

function Following() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.outer}>
        <Typography>This is the following page dude</Typography>
      </div>
    </Layout>
  );
}

export default Following;
