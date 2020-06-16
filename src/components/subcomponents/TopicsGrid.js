import React from "react";

//import MaterialUI Components
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    //
  },
  gridItem: {
    padding: "1rem"
  }
}));

function TopicsGrid() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item className={classes.gridItem}></Grid>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image="https://source.unsplash.com/random"
        />
      </Card>
      <Grid item className={classes.gridItem}></Grid>
    </Grid>
  );
}

export default TopicsGrid;
