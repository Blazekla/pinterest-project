import React from "react";
import "typeface-roboto";
// import Typography from "@material-ui/core/Typography";
import PrimarySearchAppBar from "./components/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";
import CardContent from "./components/cards/Card";
import CardListGrid from "./components/CardListGrid";
import Fab from "@material-ui/core/Fab";

function App() {
  return (
    <React.Fragment>
      <CssBaseline>
        {/* <div className="App"> */}
        <PrimarySearchAppBar />

        <Container maxWidth="xl">
          {/* <CardContent /> */}
          {/* <ImageGridList /> */}
          <div>
            <CardListGrid />
          </div>
          {/* </div> */}
        </Container>
        <div
          style={{
            margin: "12px",
            position: "fixed",
            bottom: "0",
            right: "0",
            zIndex: "700"
          }}
        >
          <Fab
            style={{
              width: "40px",
              height: "40px",
              marginBottom: "8px",
              backgroundColor: "#fff"
            }}
          >
            +
          </Fab>
          <br />

          <Fab
            style={{ width: "40px", height: "40px", backgroundColor: "#fff" }}
          >
            ?
          </Fab>
        </div>
      </CssBaseline>
    </React.Fragment>
  );
}

export default App;
