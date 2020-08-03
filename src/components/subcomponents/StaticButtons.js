import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

//Import Custom Components
import MessagesIcon from "../icons/MessagesIcon";
import FunctionalMenu from "./FunctionalMenu";
import FunctionalDrawer from "./FunctionalDrawer";
import OptionMenuItems from "./OptionsMenuItems";
import UpdatesMenu from "./UpdatesMenu";
import InboxDrawer from "./InboxDrawer";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "auto",
  },
  iconBackground: {
    "& span": {
      "& svg": {
        fill: "#111",
      },
    },
  },
  buttonSpacing: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-6px",
      marginRight: "-6px",
    },
  },
}));

function StaticButtons(props) {
  const [anchorExpandEl, setAnchorExpandEl] = useState(null);
  const [anchorUpdateEl, setAnchorUpdateEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleExpandMoreClick = (e) => {
    setAnchorExpandEl(e.currentTarget);
  };
  const handleExpandMoreClose = () => {
    setAnchorExpandEl(null);
  };

  const handleUpdateClick = (e) => {
    setAnchorUpdateEl(e.currentTarget);
  };

  const handleUpdateClose = () => {
    setAnchorUpdateEl(null);
  };

  const toggleDrawer = (e) => {
    setOpen((prev) => !prev);
  };
  const toggleDrawerClose = (e) => {
    if (e.type === "touchend") {
      return;
    }

    setOpen(false);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container wrap="nowrap" className={classes.container}>
        <Grid item>
          <IconButton
            aria-label="show 4 new notifications"
            color="inherit"
            onClick={handleUpdateClick}
            className={classes.buttonSpacing}
          >
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Grid>

        <ClickAwayListener
          mouseEvent="onMouseDown"
          touchEvent="onTouchStart"
          onClickAway={(e) => toggleDrawerClose(e)}
        >
          <div>
            <Grid item>
              <IconButton onClick={toggleDrawer}>
                <MessagesIcon />
              </IconButton>
            </Grid>
            {open && (
              <FunctionalDrawer anchor="right" open={open}>
                <InboxDrawer />
              </FunctionalDrawer>
            )}
          </div>
        </ClickAwayListener>

        <Grid item></Grid>
        <IconButton
          style={{
            color: "#8e8e8e",
          }}
          component={NavLink}
          to="/user"
          className={classes.buttonSpacing}
          activeClassName={classes.iconBackground}
        >
          <AccountCircle />
        </IconButton>
        <Grid item>
          <IconButton
            aria-label="show more options vertical icon"
            color="inherit"
            onClick={handleExpandMoreClick}
            className={classes.buttonSpacing}
          >
            <ExpandMoreRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
      <FunctionalMenu
        id="Update menu"
        anchorEl={anchorUpdateEl}
        handleOpen={Boolean(anchorUpdateEl)}
        handleOnClose={handleUpdateClose}
      >
        <UpdatesMenu />
      </FunctionalMenu>
      <FunctionalMenu
        id="Expand More menu"
        anchorEl={anchorExpandEl}
        handleOpen={Boolean(anchorExpandEl)}
        handleOnClose={handleExpandMoreClose}
      >
        <OptionMenuItems handleClose={handleExpandMoreClose} />
      </FunctionalMenu>
    </React.Fragment>
  );
}

export default StaticButtons;
