import React, { useState } from "react";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

// import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {},
  paper: {
    marginTop: "64px",
    width: "240px"
  },
  list: {
    width: 250
  }
});

const FunctionalDrawer = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [open, setOpen] = useState();

  const handleClick = () => {
    console.log("clicked outside the area");
  };

  return (
    <React.Fragment>
      <ClickAwayListener onClickAway={props.close}>
        <Drawer
          ref={ref}
          anchor={props.anchor}
          variant="persistent"
          open={props.open}
          // onClose={props.close}
          className={classes.root}
          classes={{ paper: classes.paper, modal: classes.root }}
          ModalProps={{
            onBackdropClick: props.close,
            hideBackdrop: true
            // BackdropProps: { invisible: false, open: false }
          }}
        >
          {props.children}
        </Drawer>
      </ClickAwayListener>
    </React.Fragment>
  );
});

export default FunctionalDrawer;
