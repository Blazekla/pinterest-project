import React from "react";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

function FunctionalDrawer(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Drawer anchor={props.anchor} open={props.open} onClose={props.close}>
        {props.children}
      </Drawer>
    </React.Fragment>
  );
}

export default FunctionalDrawer;
