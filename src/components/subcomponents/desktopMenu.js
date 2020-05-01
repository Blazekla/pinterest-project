import React from "react";
import { NavLink } from "react-router-dom";
//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
// import InputBase from "@material-ui/core/InputBase";
// import Badge from "@material-ui/core/Badge";

// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";

// import SearchIcon from "@material-ui/icons/Search";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import MailIcon from "@material-ui/icons/Mail";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

//Import Custom Components
import PinterestIcon from "../icons/PinterestIcon";
// import MessagesIcon from "../icons/MessagesIcon";
import StaticButtons from "./StaticButtons";
import SearchBox from "./SearchBox";
import MainNavButtons from "./MainNavButtons";

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  buttonBackground: {
    backgroundColor: "#111",
    color: "white",
  },
  iconBackground: {
    fill: "#111",
  },
  test: {
    borderRadius: "24px",
  },
}));

function DesktopMenu(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <IconButton color="inherit" component={NavLink} to="/">
        <PinterestIcon />
      </IconButton>

      <MainNavButtons />

      <SearchBox />
      <StaticButtons />
      {/* //separation desktop above and mobile below */}
      {/* <div className={classes.sectionMobile}>
        <Button>Test</Button>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
      </div> */}
    </React.Fragment>
  );
}

export default DesktopMenu;
