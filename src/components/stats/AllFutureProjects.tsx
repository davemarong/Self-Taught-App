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
export const AllFutureProjects = () => {
  // UseState
  const [numberOfFutureProjects, setNumberOfFutureProjects] = useState();
  // Redux
  const projects = useSelector((state: any) => state.projects);

  // Functions
  const getNumberOfFutureProjects = (projects: any) => {
    return projects.futureProjects.length;
  };
  useEffect(() => {
    const numberOfFutureProjects = getNumberOfFutureProjects(projects);
    setNumberOfFutureProjects(numberOfFutureProjects);
  }, [projects]);
  return (
    <Accordion style={{ margin: 20 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="h6">Total number of future projects:</Typography>
          <Typography style={{ paddingRight: 30 }} variant="h4">
            {numberOfFutureProjects}
          </Typography>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          {projects.futureProjects.map((project: any) => {
            return (
              <Grid container justify="space-between" alignItems="center">
                <Typography>'{project.title}'s final date: </Typography>
                <Typography style={{ paddingRight: 30 }} variant="h5">
                  {project.finalDate}{" "}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
