import React, { useState } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

//Import Custom Components
import FunctionalMenu from "./FunctionalMenu";

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      width: "auto",
    },
  },
  sectionMobile: {
    display: "flex",
    width: "auto",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  buttonBackground: {
    backgroundColor: "#111",
    "& span": {
      color: "#fff",
    },
  },

  mobileButton: {
    borderRadius: "24px",
    backgroundColor: "#111",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#111",
    },
    "&:focus": {
      border: "2px solid #0084ff",
    },
  },
  mobileActive: {
    borderRadius: "24px",
    backgroundColor: "rgba(0,0,0,)",
    "&:hover": {
      backgroundColor: "#efefef",
    },
  },
  menuList: {
    minWidth: "180px",
    borderRadius: "16px",
    "&:focus": {
      outline: "none",
    },
  },

  checkedIcon: {
    justifyContent: "flex-end",
  },
  buttonDefault: {
    borderRadius: "24px",
  },
}));

function MainNavButtons() {
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  //Used to check route and grant css to mobile button
  const following = useRouteMatch("/following");
  const home = useRouteMatch("/").isExact;

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuclose = () => {
    setAnchorEl(null);
  };

  //Button list for mobile view
  const ButtonList = () => (
    <MenuList className={classes.menuList}>
      <MenuItem
        button
        component={NavLink}
        aria-label="Show Projects Section"
        exact
        to="/"
        onClick={handleMenuclose}
      >
        <ListItemText primary="Home" />
        {useRouteMatch("/").isExact && (
          <ListItemIcon className={classes.checkedIcon}>
            <CheckRoundedIcon color="secondary" />
          </ListItemIcon>
        )}
      </MenuItem>

      <MenuItem
        button
        component={NavLink}
        aria-label="Show Projects Section"
        to="/following"
        onClick={handleMenuclose}
      >
        <ListItemText primary="Following" />
        {useRouteMatch("/following") && (
          <ListItemIcon className={classes.checkedIcon}>
            <CheckRoundedIcon color="secondary" />
          </ListItemIcon>
        )}
      </MenuItem>
    </MenuList>
  );

  return (
    <React.Fragment>
      <Grid container className={classes.sectionDesktop}>
        <Button
          exact
          component={NavLink}
          to="/"
          className={classes.buttonDefault}
          activeClassName={classes.buttonBackground}
        >
          Home
        </Button>

        <Button
          component={NavLink}
          to="/following"
          className={classes.buttonDefault}
          activeClassName={classes.buttonBackground}
        >
          Following
        </Button>
      </Grid>
      <Grid container className={classes.sectionMobile}>
        <Button
          className={
            following || home ? classes.mobileButton : classes.mobileActive
          }
          endIcon={<ExpandMoreRoundedIcon />}
          onClick={handleClick}
        >
          {useRouteMatch("/following") ? "Following" : "Home"}
        </Button>
      </Grid>

      <FunctionalMenu
        id="functional-menu"
        anchorEl={anchorEl}
        handleOpen={Boolean(anchorEl)}
        handleOnClose={handleMenuclose}
      >
        {ButtonList()}
      </FunctionalMenu>
    </React.Fragment>
  );
}

export default MainNavButtons;
