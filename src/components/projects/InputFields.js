// IMPORTS

// React
import React from "react";

// Material UI
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default function InputFields({ setProjectName, setProjectDescription }) {
  const handleProjectNameUserInput = (event) => {
    setProjectName(event.target.value);
  };
  const handleProjectDescriptionUserInput = (event) => {
    setProjectDescription(event.target.value);
  };
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item xs={12}>
        <TextField
          onChange={handleProjectNameUserInput}
          fullWidth
          label="Project name"
        />
      </Grid>
      <Grid item xs={10}>
        <TextField
          onChange={handleProjectDescriptionUserInput}
          fullWidth
          multiline
          variant="outlined"
          label="Project description"
          rows={10}
        />
      </Grid>
    </Grid>
  );
}
