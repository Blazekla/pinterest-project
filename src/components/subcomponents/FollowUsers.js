import React from "react";

//Import MaterialUI components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CreateIcon from "@material-ui/icons/Create";

//Import Custom Components

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "800px",
  },
  followerActions: {
    justifyContent: "space-between",
  },
  followerBadges: {
    width: "auto",
  },
  emptyFollower: {
    width: " 60px",
    height: "60px",
    border: "2px dashed rgb(118, 118, 118)",
    borderRadius: "50%",
    backgroundColor: "white",
    marginLeft: "-12px",
  },
  button: {
    borderRadius: "24px",
    backgroundColor: "#e60023",
    "& span": {
      color: "#fff",
    },
  },
}));
function FollowUsers() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>From people you follow</Typography>
      <Grid container className={classes.followerActions}>
        <Grid container item className={classes.followerBadges}>
          <Grid item>item 1</Grid>
          <Grid item>
            <div className={classes.emptyFollower}></div>
          </Grid>
          <Grid item>
            <div className={classes.emptyFollower}></div>
          </Grid>
          <Grid item>
            <div className={classes.emptyFollower}></div>
          </Grid>
          <Grid item>
            <div className={classes.emptyFollower}></div>
          </Grid>
          <Grid item>
            <div className={classes.emptyFollower}></div>
          </Grid>

          <Grid item>
            <CreateIcon />
          </Grid>
        </Grid>
        <Grid item>
          <Button className={classes.button} variant="contained">
            Find People to follow
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default FollowUsers;
