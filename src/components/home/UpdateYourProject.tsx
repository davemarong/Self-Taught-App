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
// Redux
import { useSelector } from "react-redux";
import ProjectCard from "../projects/ProjectCard";

export const UpdateYourProject = () => {
  // Redux
  const projects = useSelector((state: any) => state.projects);

  return (
    <Grid item xs={12}>
      <Card style={{ padding: 30 }}></Card>
    </Grid>
  );
};
