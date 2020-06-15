import React from "react";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
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
import SelectionButtons from "../components/subcomponents/SelectionButtons";

const useStyles = makeStyles(theme => ({
  outer: {
    marginTop: "5rem"
  },
  mainSection: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  topSection: {
    maxWidth: "800px"
    // marginLeft: "auto",
    // marginRight: "auto"
  },
  topButtons: {},
  nameAvatar: {
    justifyContent: "space-between",
    maxWidth: "800px"
    // marginLeft: "auto",
    // marginRight: "auto"
  },
  selectionButtons: {},
  boardLayout: {}
}));

function UserPage() {
  const classes = useStyles();
  let { path } = useRouteMatch();
  return (
    <Layout>
      <Container maxWidth="xl" className={classes.outer}>
        <Grid
          container
          alignItems="center"
          className={classes.mainSection}
          direction="column"
        >
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
          <Grid
            container
            justify="center"
            item
            className={classes.selectionButtons}
          >
            <SelectionButtons />
          </Grid>
          <Grid container item className={classes.boardLayout}>
            <Switch>
              <Route exact path={path}>
                <h3>Default Route</h3>
              </Route>
              <Route path={`${path}/:topicId`}>
                <Topic />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

function Topic() {
  let { topicId } = useParams();
  return (
    <div>
      <h1>{topicId}</h1>
    </div>
  );
}

export default UserPage;
