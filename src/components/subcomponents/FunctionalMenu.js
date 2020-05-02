import React from "react";

//Import MaterialUI Components
import Menu from "@material-ui/core/Menu";

function FunctionalMenu(props) {
  return (
    <Menu
      id="functional-menu"
      anchorEl={props.anchorEl}
      open={props.handleOpen}
      onClose={props.handleOnClose}
    >
      {props.children}
    </Menu>
  );
}

export default FunctionalMenu;
