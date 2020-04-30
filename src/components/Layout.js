import React from "react";

//Custom Components
import NavBar from "./AppBar";

function Layout(props) {
  return (
    <React.Fragment>
      <NavBar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
