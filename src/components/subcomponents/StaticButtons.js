import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
// import MenuList from "@material-ui/core/MenuList";
// import MenuItem from "@material-ui/core/MenuItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import Typography from "@material-ui/core/Typography";

import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
// import CallMadeRoundedIcon from "@material-ui/icons/CallMadeRounded";

//Import Custom Components
import MessagesIcon from "../icons/MessagesIcon";
import FunctionalMenu from "./FunctionalMenu";
import OptionMenuItems from "./OptionsMenuItems";

const useStyles = makeStyles(theme => ({
  container: {
    width: "auto"
  },
  iconBackground: {
    fill: "#111"
  }
}));

function StaticButtons(props) {
  const [anchorExpandEl, setAnchorExpandEl] = useState(null);
  const [anchorUpdateEl, setAnchorUpdateEl] = useState(null);

  const handleExpandMoreClick = e => {
    setAnchorExpandEl(e.currentTarget);
  };

  const handleUpdateClick = e => {
    setAnchorUpdateEl(e.currentTarget);
  };

  const handleMenuclose = () => {
    setAnchorExpandEl(null);
    setAnchorUpdateEl(null);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container wrap="nowrap" className={classes.container}>
        <Grid item>
          <IconButton
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={handleUpdateClick}
          >
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
            aria-label="show more options vertical icon"
            color="inherit"
            onClick={handleExpandMoreClick}
          >
            <ExpandMoreRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
      <FunctionalMenu
        id="Update menu"
        anchorEl={anchorUpdateEl}
        handleOpen={Boolean(anchorUpdateEl)}
        handleOnClose={handleMenuclose}
      >
        {/* <OptionMenuItems handleClose={handleMenuclose} /> */}
        <div>howdy</div>
      </FunctionalMenu>
      <FunctionalMenu
        id="Expand More menu"
        anchorEl={anchorExpandEl}
        handleOpen={Boolean(anchorExpandEl)}
        handleOnClose={handleMenuclose}
      >
        <OptionMenuItems handleClose={handleMenuclose} />
      </FunctionalMenu>
    </React.Fragment>
  );
}

export default StaticButtons;
