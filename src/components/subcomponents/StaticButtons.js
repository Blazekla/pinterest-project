import React from "react";
import { NavLink } from "react-router-dom";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";

import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

//Import Custom Components
// import PinterestIcon from "../icons/PinterestIcon";
import MessagesIcon from "../icons/MessagesIcon";

const useStyles = makeStyles((theme) => ({
  iconBackground: {
    fill: "#111",
  },
}));

function StaticButtons(props) {
  const classes = useStyles();
  return (
    <div>
      <IconButton
        aria-label="show 17 new notifications"
        color="inherit"
        component={NavLink}
        activeClassName={classes.iconBackground}
        to="/pin"
      >
        <Badge badgeContent={17} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <MessagesIcon />

      <Button
        style={{ color: "#8e8e8e" }}
        component={NavLink}
        to="/user"
        activeClassName={classes.iconBackground}
      >
        <AccountCircle style={{ color: "#8e8e8e" }} />
      </Button>

      <IconButton
        aria-label="show more options horizontal icon"
        color="inherit"
      >
        <ExpandMoreRoundedIcon />
      </IconButton>
    </div>
  );
}

export default StaticButtons;
