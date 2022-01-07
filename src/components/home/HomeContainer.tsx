// Imports

// React
import React from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

export const HomeContainer = ({ children }: any) => {
  return (
    <Grid container direction="row" justify="space-evenly" wrap="wrap">
      {children}
    </Grid>
  );
};
