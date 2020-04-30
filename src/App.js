import React from "react";

import { Route, Switch } from "react-router-dom";

//Import MaterialUI Components
import CssBaseline from "@material-ui/core/CssBaseline";

//Import Custom Components
import Home from "./pages/Home";
import Following from "./pages/Following";
import SinglePin from "./pages/SinglePin";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Switch>
          <Route path="/following">
            <Following />
          </Route>

          <Route path="/pin">
            <SinglePin />
          </Route>

          <Route path="/user">
            <UserPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
