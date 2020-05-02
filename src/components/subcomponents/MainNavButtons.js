import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import Menu from "@material-ui/core/Menu";
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
    color: "#FFF",
    "&:hover": {
      backgroundColor: "#111",
    },
    "&:focus": {
      border: "2px solid #0084ff",
    },
  },
}));

function MainNavButtons() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuclose = () => {
    setAnchorEl(null);
  };

  //Button list for mobile view
  const ButtonList = () => (
    <MenuList>
      <MenuItem
        button
        component={NavLink}
        aria-label="Show Projects Section"
        to="/"
        onClick={handleMenuclose}
      >
        <ListItemText primary="Home" />
        {/* <ListItemIcon>
          <CheckRoundedIcon color="secondary" />
        </ListItemIcon> */}
      </MenuItem>
      <MenuItem
        button
        component={NavLink}
        aria-label="Show Projects Section"
        to="/following"
        onClick={handleMenuclose}
      >
        <ListItemText primary="Following" />
        {/* <ListItemIcon>
          <CheckRoundedIcon color="secondary" />
        </ListItemIcon> */}
      </MenuItem>
    </MenuList>
  );

  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.sectionDesktop}>
        <Button
          exact
          component={NavLink}
          to="/"
          className={classes.test}
          activeClassName={classes.buttonBackground}
        >
          Home
        </Button>

        <Button
          component={NavLink}
          to="/following"
          activeClassName={classes.buttonBackground}
        >
          Following
        </Button>
      </Grid>
      <Grid container className={classes.sectionMobile}>
        <Button
          className={classes.mobileButton}
          endIcon={<ExpandMoreRoundedIcon />}
          onClick={handleClick}
        >
          Mobile!
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
