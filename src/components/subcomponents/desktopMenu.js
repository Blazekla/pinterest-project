import React from "react";
import { NavLink } from "react-router-dom";
//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";

// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";

import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Button from "@material-ui/core/Button";
// import MailIcon from "@material-ui/icons/Mail";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

//Import Custom Components
import PinterestIcon from "../icons/PinterestIcon";
import MessagesIcon from "../icons/MessagesIcon";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#FFF",
    color: "#8E8E8E",
    fontSize: "12px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    // display: "flex",
    flexGrow: 1,
    borderRadius: "8px",

    backgroundColor: "#efefef",

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#211922",
  },
  inputRoot: {
    color: "#211922",
    // color:"inherit",
    // display: "flex"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
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
}));

function DesktopMenu() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <IconButton color="inherit" component={NavLink} to="/">
        <PinterestIcon />
      </IconButton>

      <div className="mobilesection">
        <Button style={{ color: "#333" }} component={NavLink} to="/">
          Home
        </Button>
        <Button
          component={NavLink}
          to="/following"
          style={{ color: "#8e8e8e" }}
        >
          Following
        </Button>
      </div>

      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search for…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>

      <div className={classes.sectionDesktop}>
        <IconButton
          aria-label="show 17 new notifications"
          color="inherit"
          component={NavLink}
          to="/pin"
        >
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <MessagesIcon />

        <Button style={{ color: "#8e8e8e" }} component={NavLink} to="/user">
          <AccountCircle style={{ color: "#8e8e8e" }} />
        </Button>

        <IconButton
          aria-label="show more options horizontal icon"
          color="inherit"
        >
          <ExpandMoreRoundedIcon />
        </IconButton>
      </div>
    </React.Fragment>
  );
}

export default DesktopMenu;
