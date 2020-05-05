import React from "react";

//Import MaterialUI components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#e60023",
    borderTopRightRadius: "12px",
    borderBottomRightRadius: "12px",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    "& span": {
      color: "#fff",
    },
    "&:hover": {
      backgroundColor: "#e60023",
    },
  },
  albumButton: {
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    borderTopLeftRadius: "12px",
    borderBottomLeftRadius: "12px",
    backgroundColor: "#fff",
  },
}));
function SavePinButton() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Button variant="contained" className={classes.albumButton}>
          Album{" "}
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" className={classes.saveButton}>
          Save
        </Button>
      </Grid>
    </Grid>
  );
}

export default SavePinButton;
