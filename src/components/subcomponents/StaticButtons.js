import React from "react";
import { NavLink } from "react-router-dom";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";

import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

//Import Custom Components
import MessagesIcon from "../icons/MessagesIcon";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "auto",
  },
  iconBackground: {
    fill: "#111",
  },
}));

function StaticButtons(props) {
  const classes = useStyles();
  return (
    <Grid container wrap="nowrap" className={classes.container}>
      <Grid item>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <MessagesIcon />
        </IconButton>
      </Grid>
      <Grid item></Grid>
      <Button
        style={{ color: "#8e8e8e" }}
        component={NavLink}
        to="/user"
        activeClassName={classes.iconBackground}
      >
        <AccountCircle style={{ color: "#8e8e8e" }} />
      </Button>
      <Grid item>
        <IconButton
          aria-label="show more options horizontal icon"
          color="inherit"
        >
          <ExpandMoreRoundedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default StaticButtons;
