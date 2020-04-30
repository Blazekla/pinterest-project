import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";

import CardMedia from "@material-ui/core/CardMedia";

import CardButtons from "./CardButtons";

function Cards() {
  const [isInFocus, setIsInFocus] = useState(false);

  const handleMouseOut = () => {
    setIsInFocus(false);
  };

  const handleMouseOver = () => {
    setIsInFocus(true);
  };
  console.warn(`Curent State: ${isInFocus}`);

  return (
    <React.Fragment>
      <Card>
        <CardActionArea
          style={{ cursor: "zoom-in" }}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
        >
          <CardMedia
            component="img"
            height="400"
            image="https://source.unsplash.com/random"
          />
          {isInFocus ? <CardButtons /> : null}
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}

export default Cards;
