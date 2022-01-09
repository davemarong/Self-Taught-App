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
  name: string;
  description: string;
  icon: any;
};

export const TemplatesCard = ({ children, name, description, icon }: Props) => {
  return (
    <Grid item xs={6}>
      <Card>
        <Grid
          style={{ padding: 20, height: 350 }}
          container
          direction="column"
          alignItems="center"
          justify="space-evenly"
        >
          <Typography align="center" variant="h4">
            {name} Templates
          </Typography>
          {icon}
          <Typography align="center">{description}</Typography>

          <Grid item container justify="flex-end">
            {children}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
