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

//Import Custom Components
import FunctionalDrawer from "./FunctionalDrawer";

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
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = () => {
    return setDrawerState(!drawerState);
  };

  //Button list for mobile view
  const ButtonList = () => (
    <List>
      <ListItem>
        <ListItemText primary="Home" />
        <ListItemIcon>
          <ExpandMoreRoundedIcon />
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemText primary="Following" />
        <ListItemIcon>
          <ExpandMoreRoundedIcon />
        </ListItemIcon>
      </ListItem>
    </List>
  );

  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.sectionDesktop}>
        <Button
          style={{ color: "#333" }}
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
          style={{ color: "#8e8e8e" }}
          activeClassName={classes.buttonBackground}
        >
          Following
        </Button>
      </Grid>
      <Grid container className={classes.sectionMobile}>
        <Button
          className={classes.mobileButton}
          endIcon={<ExpandMoreRoundedIcon />}
          onClick={toggleDrawer}
        >
          Mobile!
        </Button>
      </Grid>
      <FunctionalDrawer anchor="top" open={drawerState} close={toggleDrawer}>
        <ButtonList />
      </FunctionalDrawer>
    </React.Fragment>
  );
}

export default MainNavButtons;
