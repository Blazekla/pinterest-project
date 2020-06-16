import React from "react";

//import MaterialUI Components
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    //
  },
  gridImage: {
    paddingRight: "8px",
    paddingLeft: "8px"
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
    paddingRight: "8px",
    paddingLeft: "8px",
    width: "100%",
    marginTop: "10px"
  }
}));

function TopicsGrid() {
  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item className={classes.gridImage}>
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
    </Grid>
  );
}

export default TopicsGrid;
