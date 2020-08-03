import React from "react";

//Import MaterialUI Components
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";

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
  userContainer: {
    paddingTop: "4px",
    paddingBottom: "4px",
  },
  userInfo: {
    width: "auto",
    marginLeft: "16px",
  },
  userTitle: {
    fontWeight: "700",
  },
  subText: {
    color: "#767676",
  },
}));

const count = [
  "Alex B",
  "Rachael A",
  "Ady M",
  "Ivy V",
  "Marquis A",
  "Alexandra H",
  "Alexis L",
  "Allison C",
  "Jonathan N",
  "Kyle H",
  "Robert P",
];

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
        <Grid container direction="column" item>
          {count.map((user, id) => (
            <Grid container key={id} className={classes.userContainer}>
              <Grid item>
                <Avatar />
              </Grid>
              <Grid
                container
                direction="column"
                item
                className={classes.userInfo}
              >
                <Typography className={classes.userTitle}>{user}</Typography>
                <Typography className={classes.subText}>
                  In your network
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default InboxDrawer;
