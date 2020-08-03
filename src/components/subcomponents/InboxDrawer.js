import React from "react";

//Import MaterialUI Components
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  inboxTitle: {
    textAlign: "center",
    fontWeight: "700",
  },
  gridContainer: {
    paddingLeft: "8px",
    paddingRight: "8px",
  },
  title: {
    marginTop: "48px",
  },
  search: {
    border: "1px solid #ddd",
    borderRadius: "999px",
  },
}));

function InboxDrawer() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.inboxTitle}>Inbox</Typography>
      <Grid container direction="column" className={classes.gridContainer}>
        <Grid item></Grid>
        <Grid item className={classes.title}>
          <Typography component="h1" variant="h4">
            Share ideas with your friends
          </Typography>
        </Grid>
        <Grid container item className={classes.search}>
          <Grid item className={classes.searchIcon}>
            <SearchIcon />
          </Grid>

          <InputBase
            placeholder="Search by name or email"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Grid>
        <Grid item>
          <Typography>Suggested</Typography>
        </Grid>
        <Grid item>
          <Typography>User1...</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default InboxDrawer;
