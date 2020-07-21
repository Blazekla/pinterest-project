import React from "react";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    flexGrow: 1,
    borderRadius: "8px",

    backgroundColor: "#efefef",

    marginRight: theme.spacing(2),
    marginLeft: 0,
    justifyContent: "flex-end",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "transparent",
      marginRight: `-${theme.spacing(2)}px`,
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#211922",
    [theme.breakpoints.down("xs")]: {
      position: "static",
    },
  },
  inputRoot: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      color: "#211922",
      display: "block",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
}));

function SearchBox() {
  const classes = useStyles();
  return (
    <Grid container className={classes.search}>
      <Grid item className={classes.searchIcon}>
        <SearchIcon />
      </Grid>

      <InputBase
        placeholder="Search for…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </Grid>
  );
}

export default SearchBox;
