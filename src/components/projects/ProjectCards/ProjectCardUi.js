// IMPORTS

// React

import React, { useState, useMemo } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

// Components
import TransparentButton from "../../button/TransparentButton";
import RedButton from "../../button/RedButton";

// Icon
import DeleteIcon from "@material-ui/icons/Delete";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

export default function ProjectCardUi({ project, color, children }) {
  return (
    <Grid
      item
      xs={8}
      sm={6}
      md={4}
      container
      direction="column"
      style={{
        position: "relative",
        borderRadius: "10px",
        boxShadow: "0 0 3px",
        width: 250,
        padding: 20,
        margin: "20px",
        background: `linear-gradient(10deg, ${color} 10%, #c445fb 60%)`,
      }}
      spacing={3}
    >
      <Grid item>
        <Typography variant="h4">{project.title}</Typography>
      </Grid>

      <Grid item>
        <Typography>{project.summary}</Typography>
      </Grid>

      <Grid container direction="row" item spacing={2}>
        {project.topics.map((subject, id) => {
          return (
            <Grid key={id} item xs={12}>
              <Card>
                <Typography align="center">{subject[0].title}</Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {children}
    </Grid>
  );
}
