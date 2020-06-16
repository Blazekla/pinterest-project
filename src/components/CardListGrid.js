import React from "react";

//import MaterialUI components
import CardContent from "./cards/Card";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  gridItem: {
    width: "236px"
  }
}));

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
function Projects() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container
        maxWidth="xl"
        style={{ backgroundColor: "inherit", paddingTop: "90px" }}
      >
        {/* Grid Section Start */}
        <Grid container justify="center" spacing={2}>
          {count.map(id => (
            <Grid
              item
              key={id}
              className={classes.gridItem}
              // xs={12} sm={6} md={2}
            >
              <CardContent />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Projects;
