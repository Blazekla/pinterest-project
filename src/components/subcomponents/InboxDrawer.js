import React from "react";

//Import MaterialUI Components
import Grid from "@material-ui/core/Grid";

function InboxDrawer() {
  return (
    <Grid container direction="column">
      <Grid item>
        <div>Inbox</div>
      </Grid>
      <Grid item>
        <div>User name here</div>
      </Grid>
    </Grid>
  );
}

export default InboxDrawer;
