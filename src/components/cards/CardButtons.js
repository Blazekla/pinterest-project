import React from "react";
import Fab from "@material-ui/core/Fab";

import CallMadeIcon from "@material-ui/icons/CallMade";
import Typography from "@material-ui/core/Typography";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
function CardButtons() {
  return (
    <React.Fragment>
      <div style={{ position: "absolute", top: "0", right: "0" }}>
        <Fab
          variant="extended"
          style={{ backgroundColor: "#e60023", color: "#fff" }}
        >
          Save
        </Fab>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0"
        }}
      >
        <Fab
          variant="extended"
          style={{
            height: "40px",
            backgroundColor: "#fff"
          }}
        >
          <CallMadeIcon />
          <Typography>URL Here</Typography>
        </Fab>

        {/* Expand the items across */}

        <Fab
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#fff"
          }}
        >
          +
        </Fab>
        {/* <br /> */}

        <Fab style={{ width: "40px", height: "40px", backgroundColor: "#fff" }}>
          <MoreHorizIcon />
        </Fab>
      </div>
    </React.Fragment>
  );
}

export default CardButtons;
