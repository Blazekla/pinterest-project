import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";

import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CallMadeIcon from "@material-ui/icons/CallMade";

function Cards() {
  return (
    <React.Fragment>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image="https://source.unsplash.com/random"
          />
        </CardActionArea>
        <CardActions>
          <Fab variant="extended">
            <CallMadeIcon />
            <Typography>URL Here</Typography>
          </Fab>
          <Fab variant="extended">
            <AddIcon />
          </Fab>
          <Fab variant="extended">
            <MoreHorizIcon />
          </Fab>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

export default Cards;
