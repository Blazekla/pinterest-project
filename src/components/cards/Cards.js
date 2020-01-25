import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";

import CardMedia from "@material-ui/core/CardMedia";

import CardButtons from "./CardButtons";

const useStyles = makeStyles(theme => ({
  image: {
    color: "blue",
    "&:hover": {
      opacity: 1
    }
  },
  floatingButtons: {
    visibility: "hidden"
  }
}));

function Cards() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card>
        <CardActionArea className={classes.image} style={{ cursor: "zoom-in" }}>
          <div style={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="400"
              image="https://source.unsplash.com/random"
            />
            <CardButtons
            // className={classes.floatingButtons}
            />
          </div>
        </CardActionArea>
        {/* <CardActions>
        </CardActions> */}
      </Card>
    </React.Fragment>
  );
}

export default Cards;
