// Import

// React
import React, { useState, ReactNode } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

// TYPE
type Props = { children: ReactNode };

export const TemplateHeader = ({ children }: Props) => {
  return (
    <Grid xs={12} style={{ margin: 20 }}>
      <Typography align="center" variant="h3">
        {children}
      </Typography>
    </Grid>
  );
};
