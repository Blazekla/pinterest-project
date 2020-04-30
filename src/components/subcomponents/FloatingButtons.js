import React from "react";

//Import MaterialUI Components
import Fab from "@material-ui/core/Fab";

function FloatingButtons() {
  return (
    <div
      style={{
        margin: "12px",
        position: "fixed",
        bottom: "0",
        right: "0",
        zIndex: "700",
      }}
    >
      <Fab
        style={{
          width: "40px",
          height: "40px",
          marginBottom: "8px",
          backgroundColor: "#fff",
        }}
      >
        +
      </Fab>
      <br />

      <Fab style={{ width: "40px", height: "40px", backgroundColor: "#fff" }}>
        ?
      </Fab>
    </div>
  );
}

export default FloatingButtons;
