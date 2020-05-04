import React from "react";

//Import MaterialUI components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

//Import Custom Components

const useStyles = makeStyles((theme) => ({
  root: {
    //
  },
}));
function FollowUsers() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>From people you follow</Typography>
      <Grid container>
        <Grid container item>
          <Grid item>item 1</Grid>
          <Grid item>item 2</Grid>
          <Grid item>item 3</Grid>
          <Grid item>item 4</Grid>
        </Grid>
        <Grid item>
          <Button>Find People to follow</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default FollowUsers;
