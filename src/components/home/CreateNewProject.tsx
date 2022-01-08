// Imports

// React
import React from "react";

// React Router
import { useHistory, useLocation } from "react-router-dom";

// Material UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import IconButton from "@mui/material/IconButton";

//  Icons
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

export const CreateNewProject = () => {
  // React Router
  let history = useHistory();
  // Functions
  const sendUserToPage = () => {
    history.push("/projects?createProject");
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
            Create new Project
          </Typography>
          <IconButton color="secondary" onClick={sendUserToPage}>
            <AddCircleOutlineRoundedIcon style={{ fontSize: 150 }} />
          </IconButton>
          <Typography align="center">
            Learn new skills and track your progress!
          </Typography>
        </Grid>
      </Card>
    </Grid>
  );
};
