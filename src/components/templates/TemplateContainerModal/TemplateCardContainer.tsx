// Import

// React
import React, { ReactNode } from "react";

// Material UI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

// TYPE
type Props = {
  children: ReactNode;
};

export const TemplateCardContainer = ({ children }: Props) => {
  return (
    <Container maxWidth="lg" style={{ marginTop: 70 }}>
      <Card style={{ padding: 20, height: 600, overflowY: "auto" }}>
        <Grid container direction="row" spacing={4} justify="space-evenly">
          {children}
        </Grid>
      </Card>
    </Container>
  );
};
