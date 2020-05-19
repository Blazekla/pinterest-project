import React from "react";

//Import MaterialUI Components
import Menu from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  style: {
    borderRadius: "16px",
  },
}));

function FunctionalMenu(props) {
  const classes = useStyles();
  return (
    <Menu
      id="functional-menu"
      anchorEl={props.anchorEl}
      open={props.handleOpen}
      onClose={props.handleOnClose}
      anchorReference="anchorEl"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      getContentAnchorEl={null}
      classes={{ paper: classes.style }}
    >
      {props.children}
    </Menu>
  );
}

export default FunctionalMenu;
