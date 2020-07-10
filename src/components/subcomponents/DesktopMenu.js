import React from "react";
import { NavLink } from "react-router-dom";
//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

//Import Custom Components
import PinterestIcon from "../icons/PinterestIcon";
import StaticButtons from "./StaticButtons";
import SearchBox from "./SearchBox";
import MainNavButtons from "./MainNavButtons";

const useStyles = makeStyles(theme => ({
  iconButton: {}
}));

function DesktopMenu(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <IconButton
        color="inherit"
        component={NavLink}
        to="/"
        className={classes.IconButton}
      >
        <PinterestIcon />
      </IconButton>

      <MainNavButtons />

      <SearchBox />
      <StaticButtons />
    </React.Fragment>
  );
}

export default DesktopMenu;
