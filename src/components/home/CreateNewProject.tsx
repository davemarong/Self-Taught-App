// Imports

// React
import React from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

//  Icons
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

export const CreateNewProject = () => {
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
            Create new Project
          </Typography>
          <AddCircleOutlineRoundedIcon style={{ fontSize: 150 }} />
        </Grid>
      </Card>
    </Grid>
  );
};
