// Imports

// React
import React from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

// Icon
import IconButton from "@mui/material/IconButton";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";

// React Router
import { useHistory, useLocation } from "react-router-dom";

export const UpdateYourSubject = () => {
  // React Router
  let history = useHistory();
  // Functions
  const sendUserToPage = () => {
    history.push("/subjects");
  };

  return (
    <Grid item xs={12} sm={4}>
      <Card style={{ padding: 30 }}>
        <Grid
          style={{ height: 350 }}
          container
          alignItems="center"
          justify="space-evenly"
          direction="column"
        >
          <Typography align="center" variant="h5">
            Update your subjects
          </Typography>
          <IconButton color="primary" onClick={sendUserToPage}>
            <ModeEditRoundedIcon style={{ fontSize: 125 }} />
          </IconButton>
          <Typography align="center">
            Mark topics as learned or add new topics!
          </Typography>
        </Grid>
      </Card>
    </Grid>
  );
};
