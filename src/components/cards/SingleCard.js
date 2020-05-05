import React from "react";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

//Import custom components
import CardInfo from "./SingleCardInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "508px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    borderRadius: "32px",
    [theme.breakpoints.up("1075")]: {
      maxWidth: "1016px",
    },
  },
  actionArea: {
    width: "508px",
    borderRadius: "32px",
    padding: "20px",
  },
  mediaArea: {
    borderRadius: "32px",
  },
  actionSection: {
    width: "508px",
  },
}));

function SingleCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item>
          <CardActionArea className={classes.actionArea}>
            <CardMedia
              component="img"
              height="400"
              image="https://source.unsplash.com/random"
              className={classes.mediaArea}
            />
          </CardActionArea>
        </Grid>
        <Grid item>
          <CardInfo />
        </Grid>
      </Grid>
    </Card>
  );
}

export default SingleCard;
