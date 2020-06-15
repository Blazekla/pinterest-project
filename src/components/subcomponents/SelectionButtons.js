import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
// import MaterialUI Components
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    //
  },
  button: {
    borderRadius: "32px"
  },
  buttonBackground: {
    backgroundColor: "#111",
    "&:hover": {
      backgroundColor: "#111"
    },
    "& span": {
      color: "#fff"
    }
  }
}));

function SelectionButtons() {
  const classes = useStyles();
  let { url } = useRouteMatch();
  return (
    <>
      <Grid item>
        <Button
          component={NavLink}
          to={`${url}/boards`}
          className={classes.button}
          activeClassName={classes.buttonBackground}
        >
          Boards
        </Button>
      </Grid>
      <Grid item>
        <Button
          component={NavLink}
          to={`${url}/pins`}
          className={classes.button}
          activeClassName={classes.buttonBackground}
        >
          Pins
        </Button>
      </Grid>
      <Grid item>
        <Button
          component={NavLink}
          to={`${url}/tries`}
          className={classes.button}
          activeClassName={classes.buttonBackground}
        >
          Tries
        </Button>
      </Grid>
      <Grid item>
        <Button
          component={NavLink}
          to={`${url}/topics`}
          className={classes.button}
          activeClassName={classes.buttonBackground}
        >
          Topics
        </Button>
      </Grid>
    </>
  );
}

export default SelectionButtons;
