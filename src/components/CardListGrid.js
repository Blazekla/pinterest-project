import React from "react";
import CardContent from "./cards/Card";
import { Container, Grid } from "@material-ui/core";

//TODO:
//use JSON file to feed images to grid
const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
function Projects() {
  return (
    <React.Fragment>
      <Container
        maxWidth="xl"
        style={{ backgroundColor: "inherit", paddingTop: "90px" }}
      >
        {/* Grid Section Start */}
        <Grid container spacing={2}>
          {count.map(id => (
            <Grid item key={id} xs={12} sm={6} md={2}>
              <CardContent />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Projects;
