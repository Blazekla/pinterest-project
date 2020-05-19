import React from "react";
import { NavLink } from "react-router-dom";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";

import CallMadeRoundedIcon from "@material-ui/icons/CallMadeRounded";

const useStyles = makeStyles((theme) => ({
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

const OptionsMenuItems = React.forwardRef(({ handleClose }, ref) => {
  const classes = useStyles();
  return (
    <MenuList className={classes.menuList}>
      <Typography>Accounts</Typography>
      <MenuItem
        button
        component={NavLink}
        aria-label="Add another account"
        exact
        to="/"
        onClick={handleClose}
      >
        <ListItemText primary="Add another account" />
      </MenuItem>
      <MenuItem
        button
        component={NavLink}
        aria-label="Add a free business account"
        exact
        to="/"
        onClick={handleClose}
      >
        <ListItemText primary="Add a free business account" />
      </MenuItem>
      <ListItemText>More Options</ListItemText>
      <MenuItem
        button
        component={NavLink}
        aria-label="Settings"
        exact
        to="/"
        onClick={handleClose}
      >
        <ListItemText primary="Settings" />
      </MenuItem>
      <MenuItem
        button
        component={NavLink}
        aria-label="Tune your home feed"
        exact
        to="/"
        onClick={handleClose}
      >
        <ListItemText primary="Tune your home feed" />
      </MenuItem>
      <MenuItem
        button
        component={NavLink}
        aria-label="Install the Windows app"
        exact
        to="/"
        onClick={handleClose}
      >
        <ListItemText primary="Install the Windows app" />
      </MenuItem>
      <MenuItem
        button
        component={NavLink}
        aria-label="Get help"
        exact
        to="/"
        onClick={handleClose}
      >
        <ListItemText primary="Get help" />
        <ListItemIcon className={classes.checkedIcon}>
          <CallMadeRoundedIcon />
        </ListItemIcon>
      </MenuItem>
      <MenuItem
        button
        component={NavLink}
        aria-label="See terms and privacy"
        exact
        to="/"
        onClick={handleClose}
      >
        <ListItemText primary="See terms and privacy" />
        <ListItemIcon className={classes.checkedIcon}>
          <CallMadeRoundedIcon />
        </ListItemIcon>
      </MenuItem>
      <MenuItem
        button
        component={NavLink}
        aria-label="Log out"
        exact
        to="/"
        onClick={handleClose}
      >
        <ListItemText primary="Log out" />
      </MenuItem>
    </MenuList>
  );
});

export default OptionsMenuItems;
