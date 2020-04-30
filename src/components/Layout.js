import React from "react";

//Custom Components
import NavBar from "./AppBar";
import FloatingButtons from "./subcomponents/FloatingButtons";

function Layout(props) {
  return (
    <React.Fragment>
      <NavBar />
      {props.children}
      <FloatingButtons />
    </React.Fragment>
  );
}

export default Layout;
