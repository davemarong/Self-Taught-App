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

export const AllMainSubjects = () => {
  // UseState
  const [numberOfMainSubjects, setNumberOfMainSubjects] = useState();
  // Redux
  const mainSubjects = useSelector((state: any) => state.mainSubjects);
  // Functions
  const getNumberOfMainSubjects = () => {
    return mainSubjects.length;
  };
  // UseEffect
  useEffect(() => {
    setNumberOfMainSubjects(getNumberOfMainSubjects());
  }, [mainSubjects]);
  return (
    <Accordion style={{ margin: 20 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="h6">Total number of main subjects:</Typography>
          <Typography style={{ paddingRight: 30 }} variant="h4">
            {numberOfMainSubjects}
          </Typography>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container justify="space-between" alignItems="center">
          {mainSubjects.map((subject: any) => {
            return (
              <Grid container justify="space-between" alignItems="center">
                <Typography>{subject[0].title} - topics learned: </Typography>
                <Typography style={{ paddingRight: 30 }} variant="h5">
                  {subject[0].learnedSkills} of {subject[0].totalSkills}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
