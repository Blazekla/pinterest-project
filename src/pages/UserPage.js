import React from "react";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";

//Import Custom Components
import Layout from "../components/Layout";

const useStyles = makeStyles((theme) => ({
  outer: {
    marginTop: "5rem",
  },
}));

function UserPage() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.outer}></div>
    </Layout>
  );
}

export default UserPage;
