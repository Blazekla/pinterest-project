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
          to={`${url}/Boards`}
          variant="contained"
          className={classes.button}
        >
          Boards
        </Button>
      </Grid>
      <Grid item>
        <Button
          component={NavLink}
          to={`${url}/Pins`}
          variant="contained"
          className={classes.button}
        >
          Pins
        </Button>
      </Grid>
      <Grid item>
        <Button
          component={NavLink}
          to={`${url}/Tries`}
          variant="contained"
          className={classes.button}
        >
          Tries
        </Button>
      </Grid>
      <Grid item>
        <Button
          component={NavLink}
          to={`${url}/Topics`}
          variant="contained"
          className={classes.button}
        >
          Topics
        </Button>
      </Grid>
    </>
  );
}

export default SelectionButtons;
