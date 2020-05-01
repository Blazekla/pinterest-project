import React from "react";
import { NavLink } from "react-router-dom";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

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
    color: "white",
  },
  // iconBackground: {
  //   fill: "#111",
  // },
  test: {
    borderRadius: "24px",
  },
}));

function MainNavButtons() {
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
        <Button>Mobile!</Button>
      </Grid>
    </React.Fragment>
  );
}

export default MainNavButtons;
