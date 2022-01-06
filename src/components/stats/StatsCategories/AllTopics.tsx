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

type NumberOfTopics = {
  mainSubjects: number;
  secondarySubjects: number;
  totalTopics: number;
};

export const AllTopics = () => {
  // UseState
  const [numberOfTopics, setNumberOfTopics] = useState<NumberOfTopics>({
    mainSubjects: 0,
    secondarySubjects: 0,
    totalTopics: 0,
  });

  // Redux
  const mainSubjects = useSelector((state: any) => state.mainSubjects);
  const secondarySubjects = useSelector(
    (state: any) => state.secondarySubjects
  );

  // Functions
  const getTotalNumberOfTopics = (subjectType: any): number => {
    return subjectType.reduce((numberOfTopics: number, subject: any) => {
      return numberOfTopics + subject[0].totalSkills;
    }, 0);
  };
  // Variables
  const subjectsCombined = [...mainSubjects, ...secondarySubjects];
  // UseEffect
  useEffect(() => {
    const mainSubject: number = getTotalNumberOfTopics(mainSubjects);
    const secondarySubject: number = getTotalNumberOfTopics(secondarySubjects);
    const totalNumberOfTopics: number = mainSubject + secondarySubject;
    setNumberOfTopics({
      mainSubjects: mainSubject,
      secondarySubjects: secondarySubject,
      totalTopics: totalNumberOfTopics,
    });
  }, [mainSubjects, secondarySubjects]);

  // Return
  return (
    <Accordion style={{ margin: 20 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="h6">Total number of all topics:</Typography>
          <Typography style={{ paddingRight: 30 }} variant="h4">
            {numberOfTopics.totalTopics}
          </Typography>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container justify="space-between" alignItems="center">
          <Typography>Main subject topics: </Typography>
          <Typography style={{ paddingRight: 30 }} variant="h5">
            {numberOfTopics.mainSubjects}
          </Typography>
        </Grid>
        <Grid
          style={{ marginBottom: 20 }}
          container
          justify="space-between"
          alignItems="center"
        >
          <Typography>Secondary subject topics: </Typography>
          <Typography style={{ paddingRight: 30 }} variant="h5">
            {numberOfTopics.secondarySubjects}
          </Typography>
        </Grid>
        <Grid container>
          {subjectsCombined.map((item: any) => {
            return (
              <Grid
                container
                justify="space-between"
                alignItems="center"
                sm={6}
              >
                <Typography>{item[0].title}: </Typography>
                <Typography style={{ paddingRight: 30 }} variant="h5">
                  {item[0].totalSkills}{" "}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
