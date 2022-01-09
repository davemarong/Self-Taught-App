// Import

// React
import React, { ReactNode } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

// TYPES
type Props = {
  children: ReactNode;
};

export const TemplatesContainer = ({ children }: Props) => {
  return (
    <Grid
      container
      wrap="wrap"
      justify="space-evenly"
      alignContent="center"
      spacing={4}
    >
      {children}
    </Grid>
  );
};
