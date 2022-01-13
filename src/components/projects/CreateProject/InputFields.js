// IMPORTS

// React
import React, { useState, useEffect } from "react";

// Material UI
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function InputFields({
  projectSummary,
  setProjectSummary,
  projectName,
  projectDescription,
  setProjectName,
  setProjectDescription,
  project,
  projectFinalDate,
  setProjectFinalDate,
  projectFinishedDate,
  setProjectFinishedDate,
}) {
  // UseState
  // const []
  // Use effect
  useEffect(() => {
    if (project) {
      setProjectDescription(project.description);
      setProjectName(project.title);
      setProjectSummary(project.summary);
      setProjectFinalDate(project.finalDate);
      setProjectFinishedDate(project.finishedDate);
    }
  }, []);
  // Functions
  // handle user input
  const handleProjectNameUserInput = (event) => {
    setProjectName(event.target.value);
  };
  const handleProjectDescriptionUserInput = (event) => {
    setProjectDescription(event.target.value);
  };
  const handleProjectSummaryUserInput = (event) => {
    setProjectSummary(event.target.value);
  };
  const handleProjectFinalDateUserInput = (date) => {
    setProjectFinalDate(date.toDateString().slice(4));
  };

  console.log(projectFinalDate);
  return (
    <Grid container direction="row" justify="center" spacing={4}>
      <Grid item md={6} sm={5} xs={7}>
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
      <Grid container justify="center" item xs={6}>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DatePicker
            label="Project due date"
            inputFormat="MM/dd/yyyy"
            value={projectFinalDate}
            onChange={handleProjectFinalDateUserInput}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
}
