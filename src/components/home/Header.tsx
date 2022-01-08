// Imports

// React
import React from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
export const Header = () => {
  return (
    <Grid item xs={12}>
      <Typography align="center" style={{ marginBottom: 10 }} variant="h2">
        Welcome back
      </Typography>
    </Grid>
  );
};
