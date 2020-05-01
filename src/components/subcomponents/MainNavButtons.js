import React from "react";
import { NavLink } from "react-router-dom";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

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
        <Button className={classes.mobileButton}>
          Mobile!
          <ExpandMoreRoundedIcon />
        </Button>
      </Grid>
    </React.Fragment>
  );
}

export default MainNavButtons;
