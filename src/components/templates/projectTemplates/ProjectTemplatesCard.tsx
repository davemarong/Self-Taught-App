// Import

// React
import React, { ReactNode } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

// TYPES
type Props = {
  children: ReactNode;
};

export const ProjectTemplatesCard = ({ children }: Props) => {
  return (
    <Grid item xs={4}>
      <Card style={{ marginBottom: 100, paddingBottom: 50 }}>
        Project templates
        {children}
      </Card>
    </Grid>
  );
};
