import React from "react";

//import MaterialUI Components
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "24px",
    paddingBottom: "24px"
  },
  gridImage: {},
  singleTopic: {
    padding: "24px",
    marginLeft: "-24px"
  },
  card: {
    width: "236px",
    height: "236px",
    borderRadius: "16px"
  },
  button: {
    width: "100%",
    borderRadius: "24px"
  },
  gridText: {
    width: "100%",
    marginTop: "10px"
  }
}));

function TopicsGrid() {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      {count.map(id => {
        return (
          <div className={classes.singleTopic}>
            <Grid item key={id} className={classes.gridImage}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="236"
                    image="https://source.unsplash.com/random"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item className={classes.gridText}>
              <Button variant="contained" className={classes.button}>
                follow
              </Button>
            </Grid>
          </div>
        );
      })}
    </Grid>
  );
}

export default TopicsGrid;
