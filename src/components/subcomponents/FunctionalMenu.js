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
    >
      {props.children}
    </Menu>
  );
}

export default FunctionalMenu;
