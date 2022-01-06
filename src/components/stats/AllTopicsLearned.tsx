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

type SubjectInfo = {
  subjectInfo: {
    learnedSkills: number;
    title: string;
    totalSkills: number;
  };
};
type TopicInfo = {
  topicInfo: {
    title: string;
    learned: boolean;
  };
};
type SubjectAndTopicInfo = (SubjectInfo & TopicInfo)[];

type LearnedTopics = {
  mainSubjects: number;
  secondarySubjects: number;
  totalLearned: number;
};
export const AllTopicsLearned = () => {
  // UseState
  const [learnedTopics, setLearnedTopics] = useState<LearnedTopics>({
    mainSubjects: 0,
    secondarySubjects: 0,
    totalLearned: 0,
  });
  // Redux
  const mainSubjects = useSelector((state: any) => state.mainSubjects);
  const secondarySubjects = useSelector(
    (state: any) => state.secondarySubjects
  );
  // Functions
  const getAllLearnedTopics = (subjectType: any) => {
    return subjectType.reduce((acc: number, subject: any) => {
      return acc + subject[0].learnedSkills;
    }, 0);
  };
  // Variables
  const subjectsCombined = [...mainSubjects, ...secondarySubjects];

  // UseEffect
  useEffect(() => {
    const mainSubjectsLearned: number = getAllLearnedTopics(mainSubjects);
    const secondarySubjectsLearned: number =
      getAllLearnedTopics(secondarySubjects);
    setLearnedTopics({
      mainSubjects: mainSubjectsLearned,
      secondarySubjects: secondarySubjectsLearned,
      totalLearned: mainSubjectsLearned + secondarySubjectsLearned,
    });
  }, [mainSubjects, secondarySubjects]);
  return (
    <Accordion style={{ margin: 20 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="h6">
            Total number of all learned topics:
          </Typography>
          <Typography style={{ paddingRight: 30 }} variant="h4">
            {learnedTopics.totalLearned}
          </Typography>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container justify="space-between" alignItems="center">
          <Typography>Main subject topics: </Typography>
          <Typography style={{ paddingRight: 30 }} variant="h5">
            {learnedTopics.mainSubjects}
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
            {learnedTopics.secondarySubjects}
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
                  {item[0].learnedSkills}{" "}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
