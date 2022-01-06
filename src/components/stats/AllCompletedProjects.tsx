// Imports

// React
import React, { useState, useEffect } from "react";

// Material UI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Redux
import { useSelector } from "react-redux";
export const AllCompletedProjects = () => {
  // UseState
  const [numberOfCompletedProjects, setNumberOfCompletedProjects] = useState();
  // Redux
  const projects = useSelector((state: any) => state.projects);

  // Functions
  const getNumberOfCompletedProjects = (projects: any) => {
    return projects.completedProjects.length;
  };
  useEffect(() => {
    const numberOfCompletedProjects = getNumberOfCompletedProjects(projects);
    setNumberOfCompletedProjects(numberOfCompletedProjects);
  }, [projects]);
  return (
    <Accordion style={{ margin: 20 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="h6">
            Total number of completed projects:
          </Typography>
          <Typography style={{ paddingRight: 30 }} variant="h4">
            {numberOfCompletedProjects}
          </Typography>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          {projects.completedProjects.map((project: any) => {
            return (
              <Grid container justify="space-between" alignItems="center">
                <Typography>'{project.title}' was completed: </Typography>
                <Typography style={{ paddingRight: 30 }} variant="h5">
                  {project.finishedDate}{" "}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
