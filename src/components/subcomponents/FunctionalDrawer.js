import React from "react";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    marginTop: "56px",
    width: "240px",
    "@media(min-width:600px)": {
      marginTop: "64px",
    },
    boxShadow: "rgba(0, 0, 0, 0.1) -3px 4px 14px 0px",
  },
  list: {
    width: 250,
  },
}));

const FunctionalDrawer = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Drawer
        ref={ref}
        anchor={props.anchor}
        variant="persistent"
        open={props.open}
        className={classes.root}
        classes={{ paper: classes.paper, modal: classes.root }}
      >
        {props.children}
      </Drawer>
    </React.Fragment>
  );
});

export default FunctionalDrawer;
