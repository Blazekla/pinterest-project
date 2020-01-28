import React from "react";
import Fab from "@material-ui/core/Fab";

import CallMadeIcon from "@material-ui/icons/CallMade";
import Typography from "@material-ui/core/Typography";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
function CardButtons() {
  return (
    <React.Fragment>
      <Fab
        variant="extended"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "#e60023",
          color: "#fff"
        }}
      >
        Save
      </Fab>

      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Fab
            variant="extended"
            style={{
              height: "40px",
              backgroundColor: "#fff",
              marginRight: "10px"
            }}
          >
            <CallMadeIcon />
            <Typography>URL Here</Typography>
          </Fab>

          {/* Expand the items across */}
          <div
            style={{
              // flexGrow: "1",
              display: "flex",
              justifyContent: "space-evenly"
            }}
          >
            <Fab
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#fff",
                marginRight: "5px"
              }}
            >
              +
            </Fab>
            <Fab
              style={{ width: "40px", height: "40px", backgroundColor: "#fff" }}
            >
              <MoreHorizIcon />
            </Fab>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CardButtons;
