import React from "react";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

// import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    marginTop: "64px"
  },
  list: {
    width: 250
  }
});

function FunctionalDrawer(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Drawer
        anchor={props.anchor}
        open={props.open}
        onClose={props.close}
        className={classes.root}
        classes={{ paper: classes.root, backrop: classes.root }}
        ModalProps={{ BackdropProps: { invisible: true, open: false } }}
      >
        {props.children}
      </Drawer>
    </React.Fragment>
  );
}

export default FunctionalDrawer;
