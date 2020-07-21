import React from "react";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "360px"
  }
}));

const UpdatesMenu = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      ref={ref}
      className={classes.root}
    >
      <Grid item>
        <Typography>Updates</Typography>
      </Grid>
      <Grid item>List of Boards here</Grid>
    </Grid>
  );
});

export default UpdatesMenu;
