// IMPORTS

// React
import React, { useEffect } from "react";

// Material UI
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default function InputFields({
  projectSummary,
  setProjectSummary,
  projectName,
  projectDescription,
  setProjectName,
  setProjectDescription,
  project,
}) {
  useEffect(() => {
    if (project) {
      setProjectDescription(project.description);
      setProjectName(project.title);
      setProjectSummary(project.summary);
    }
  }, []);
  const handleProjectNameUserInput = (event) => {
    setProjectName(event.target.value);
  };
  const handleProjectDescriptionUserInput = (event) => {
    setProjectDescription(event.target.value);
  };
  const handleProjectSummaryUserInput = (event) => {
    setProjectSummary(event.target.value);
  };
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item md={4} sm={5} xs={7}>
        <TextField
          onChange={handleProjectNameUserInput}
          value={projectName}
          fullWidth
          label="Project name"
        />
      </Grid>
      <Grid item md={8} sm={10} xs={12}>
        <TextField
          onChange={handleProjectSummaryUserInput}
          value={projectSummary}
          fullWidth
          multiline
          variant="outlined"
          label="Project summary"
          rows={3}
        />
      </Grid>
      <Grid item md={8} sm={10} xs={12}>
        <TextField
          onChange={handleProjectDescriptionUserInput}
          value={projectDescription}
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
