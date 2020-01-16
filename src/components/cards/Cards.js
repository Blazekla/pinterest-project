import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardMedia from "@material-ui/core/CardMedia";

import CardButtons from "./CardButtons";
function Cards() {
  return (
    <React.Fragment>
      <Card>
        <CardActionArea style={{ cursor: "zoom-in" }}>
          <div style={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="400"
              image="https://source.unsplash.com/random"
            />

            <CardButtons />
          </div>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}

export default Cards;
