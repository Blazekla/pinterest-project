import React from "react";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";

import CreateRoundedIcon from "@material-ui/icons/CreateRounded";

//Import Custom Components
import Layout from "../components/Layout";
import SendIcon from "../components/icons/SendIcon";
import AddIcon from "../components/icons/AddIcon";

const useStyles = makeStyles((theme) => ({
  outer: {
    marginTop: "5rem",
  },
  mainSection: {
    //
  },
  topSection: {
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  topButtons: {},
  nameAvatar: {
    justifyContent: "space-between",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  selectionButtons: {},
  boardLayout: {},
}));

function UserPage() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="xl" className={classes.outer}>
        <Grid container className={classes.mainSection} direction="column">
          <Grid container item className={classes.topSection}>
            <Grid container item className={classes.topButtons}>
              <IconButton>
                <AddIcon />
              </IconButton>
              <IconButton>
                <CreateRoundedIcon />
              </IconButton>
              <IconButton>
                <SendIcon />
              </IconButton>
            </Grid>
            <Grid container item></Grid>
          </Grid>
          <Grid container item className={classes.nameAvatar}>
            <Typography>John Jones</Typography>
            <Avatar />
          </Grid>
          <Grid container item className={classes.selectionButtons}></Grid>
          <Grid container item className={classes.boardLayout}></Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default UserPage;
