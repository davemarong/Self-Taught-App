// Imports

// React
import React from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

//  Icons

import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";

export const UpdateYourSubject = () => {
  return (
    <Grid item xs={12} sm={4}>
      <Card style={{ padding: 30 }}>
        <Grid
          style={{ height: 250 }}
          container
          alignItems="center"
          justify="space-evenly"
          direction="column"
        >
          <Typography align="center" variant="h5">
            Update your subjects
          </Typography>
          <ModeEditRoundedIcon style={{ fontSize: 125 }} />
        </Grid>
      </Card>
    </Grid>
  );
};
