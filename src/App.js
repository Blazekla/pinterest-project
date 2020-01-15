import React from "react";
import "typeface-roboto";
// import Typography from "@material-ui/core/Typography";
import PrimarySearchAppBar from "./components/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import ImageGridList from "./components/ImageGridList";
import Container from "@material-ui/core/Container";
import CardContent from "./components/cards/Cards";
import CardListGrid from "./components/CardListGrid";

function App() {
  return (
    <React.Fragment>
      <CssBaseline>
        <div className="App">
          <PrimarySearchAppBar />

          <Container maxWidth="lg">
            {/* <CardContent /> */}
            {/* <ImageGridList /> */}
            <CardListGrid />
          </Container>
        </div>
      </CssBaseline>
    </React.Fragment>
  );
}

export default App;
