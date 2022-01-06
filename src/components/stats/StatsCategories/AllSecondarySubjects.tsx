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

export const AllSecondarySubjects = () => {
  // UseState
  const [numberOfSecondarySubjects, setNumberOfSecondarySubjects] = useState();
  // Redux
  const secondarySubjects = useSelector(
    (state: any) => state.secondarySubjects
  );
  // Functions
  const getNumberOfSecondarySubjects = () => {
    return secondarySubjects.length;
  };
  // UseEffect
  useEffect(() => {
    setNumberOfSecondarySubjects(getNumberOfSecondarySubjects());
  }, [secondarySubjects]);
  return (
    <Accordion style={{ margin: 20 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="h6">
            Total number of secondary subjects:
          </Typography>
          <Typography style={{ paddingRight: 30 }} variant="h4">
            {numberOfSecondarySubjects}
          </Typography>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container justify="space-between" alignItems="center">
          {secondarySubjects.map((subject: any) => {
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
