import React from "react";
import CardContent from "./cards/Cards";
import { Container, Grid } from "@material-ui/core";

const count = [1, 2, 3, 4];
function Projects() {
  return (
    <React.Fragment>
      <Container maxWidth="lg" style={{ backgroundColor: "inherit" }}>
        {/* Grid Section Start */}
        <Grid container spacing={8}>
          {count.map(id => (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <CardContent />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Projects;
