import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

//Import Custom Components
import CardButtons from "./CardButtons";

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    borderRadius: "16px",
  },
  actionArea: {
    cursor: "zoom-in",
  },
}));

function Cards() {
  const classes = useStyles();

  const [isInFocus, setIsInFocus] = useState(false);

  const handleMouseOut = () => {
    setIsInFocus(false);
  };

  const handleMouseOver = () => {
    setIsInFocus(true);
  };

  return (
    <React.Fragment>
      <Card
        className={classes.card}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
      >
        <CardActionArea
          className={classes.actionArea}
          component={NavLink}
          to="/pin"
        >
          <CardMedia
            component="img"
            height="400"
            image="https://source.unsplash.com/random"
          />
        </CardActionArea>
        {isInFocus ? <CardButtons /> : null}
      </Card>
    </React.Fragment>
  );
}

export default Cards;
