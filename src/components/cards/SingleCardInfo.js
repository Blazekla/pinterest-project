import React from "react";

//Import MaterialUI components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "502px",
  },
  topButtons: {
    justifyContent: "space-between",
  },
  middleSection: {
    //
  },
  bottomSection: {
    alignContent: "center",
    flexWrap: "nowrap",
  },
  bottomText: {
    paddingLeft: "1rem",
  },
}));

function SingleCardInfo(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
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
        <Grid container direction="column" item>
          <Typography>Description Here</Typography>
          <Grid container item>
            <Avatar />
            <Button>Following</Button>
          </Grid>
          <Grid container item>
            <Button>Photos</Button>
            <Button>Comments</Button>
            <Button>Add Photo</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item className={classes.bottomSection}>
        <Grid item>
          <Avatar />
        </Grid>
        <Grid container direction="column" item className={classes.bottomText}>
          <Grid container item>
            <Button>AvatarName</Button>
            <Button>Album Page</Button>
          </Grid>
          <Grid item>
            <Typography>Description here</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SingleCardInfo;
