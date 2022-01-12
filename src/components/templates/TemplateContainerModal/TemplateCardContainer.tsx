// Import

// React
import React, { ReactNode } from "react";

// Material UI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

// Icon
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// TYPE
type Props = {
  children: ReactNode;
  toggleModal: () => void;
};

export const TemplateCardContainer = ({ children, toggleModal }: Props) => {
  return (
    <Container maxWidth="lg" style={{ marginTop: 70 }}>
      <Card style={{ padding: 20, height: 600, overflowY: "auto" }}>
        <Grid container direction="row" spacing={4} justify="space-evenly">
          <Grid container justify="flex-end">
            <IconButton>
              <CloseRoundedIcon onClick={toggleModal} />
            </IconButton>
          </Grid>
          {children}
        </Grid>
      </Card>
    </Container>
  );
};
