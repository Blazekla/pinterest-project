import React from "react";

//Import MaterialUI components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    //
  },
}));
function SavePinButton() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Typography>Album name here</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained">Save</Button>
      </Grid>
    </Grid>
  );
}

export default SavePinButton;
