import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";

import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import CallMadeRoundedIcon from "@material-ui/icons/CallMadeRounded";

//Import Custom Components
import MessagesIcon from "../icons/MessagesIcon";
import FunctionalMenu from "./FunctionalMenu";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "auto",
  },
  iconBackground: {
    fill: "#111",
  },
  menuList: {
    minWidth: "180px",
    maxWidth: "360px",
    borderRadius: "16px",
    "&:focus": {
      outline: "none",
    },
  },
  checkedIcon: {
    justifyContent: "flex-end",
  },
}));

function StaticButtons(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuclose = () => {
    setAnchorEl(null);
  };

  const buttonSelection = () => (
    <MenuList className={classes.menuList}>
      <Typography>Accounts</Typography>
      <MenuItem
        button
        component={NavLink}
        aria-label="test item for now"
        exact
        to="/"
        onClick={handleMenuclose}
      >
        <ListItemText primary="Add another account" />
      </MenuItem>
      <MenuItem
        button
        component={NavLink}
        aria-label="test item for now"
        exact
        to="/"
        onClick={handleMenuclose}
      >
        <ListItemText primary="Add a free business account" />
      </MenuItem>
      <ListItemText>More Options</ListItemText>
      <MenuItem
        button
        component={NavLink}
        aria-label="test item for now"
        exact
        to="/"
        onClick={handleMenuclose}
      >
        <ListItemText primary="Settings" />
      </MenuItem>
      <MenuItem
        button
        component={NavLink}
        aria-label="test item for now"
        exact
        to="/"
        onClick={handleMenuclose}
      >
        <ListItemText primary="Tune your home feed" />
      </MenuItem>
      <MenuItem
        button
        component={NavLink}
        aria-label="test item for now"
        exact
        to="/"
        onClick={handleMenuclose}
      >
        <ListItemText primary="Install the Windows app" />
      </MenuItem>
      <MenuItem
        button
        component={NavLink}
        aria-label="test item for now"
        exact
        to="/"
        onClick={handleMenuclose}
      >
        <ListItemText primary="Get help" />
        <ListItemIcon className={classes.checkedIcon}>
          <CallMadeRoundedIcon />
        </ListItemIcon>
      </MenuItem>
      <MenuItem
        button
        component={NavLink}
        aria-label="test item for now"
        exact
        to="/"
        onClick={handleMenuclose}
      >
        <ListItemText primary="See terms and privacy" />
        <ListItemIcon className={classes.checkedIcon}>
          <CallMadeRoundedIcon />
        </ListItemIcon>
      </MenuItem>
      <MenuItem
        button
        component={NavLink}
        aria-label="test item for now"
        exact
        to="/"
        onClick={handleMenuclose}
      >
        <ListItemText primary="Log out" />
      </MenuItem>
    </MenuList>
  );
  const classes = useStyles();
  return (
    <React.Fragment>
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
            aria-label="show more options vertical icon"
            color="inherit"
            onClick={handleClick}
          >
            <ExpandMoreRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
      <FunctionalMenu
        id="minor functional menu"
        anchorEl={anchorEl}
        handleOpen={Boolean(anchorEl)}
        handleOnClose={handleMenuclose}
      >
        {buttonSelection()}
      </FunctionalMenu>
    </React.Fragment>
  );
}

export default StaticButtons;
