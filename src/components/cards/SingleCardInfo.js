import React from "react";

//Import MaterialUI components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  topButtons: {
    justifyContent: "space-between",
  },
  middleSection: {
    //
  },
  bottomSection: {
    //
  },
}));

function SingleCardInfo(props) {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid container item className={classes.topButtons}>
        <Grid item>
          <Button>left side</Button>
        </Grid>
        <Grid item>
          <Button>Right Side</Button>
        </Grid>
      </Grid>
      <Grid container item className={classes.middleSection}>
        <Typography>Title Here</Typography>
        <Typography>Description Here</Typography>
        <Avatar />
        <Button>Following</Button>
        <Button>Photos</Button>
        <Button>Comments</Button>
        <Button>Add Photo</Button>
      </Grid>
      <Grid container item className={classes.bottomSection}>
        <Avatar />
        <Button>AvatarName</Button>
        <Button>Album Page</Button>
      </Grid>
    </Grid>
  );
}

export default SingleCardInfo;
