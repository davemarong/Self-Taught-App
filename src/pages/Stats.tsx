import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
// Components
import { StatsContainer } from "../components/stats/StatsContainer";
import { StatsHeader } from "../components/stats/StatsHeader";
import { AllTopics } from "../components/stats/AllTopics";
import { StatsCard } from "../components/stats/StatsCard";
import { AllCompletedProjects } from "../components/stats/AllCompletedProjects";
import { AllFutureProjects } from "../components/stats/AllFutureProjects";
import { AllMainSubjects } from "../components/stats/AllMainSubjects";
import { AllSecondarySubjects } from "../components/stats/AllSecondarySubjects";
import { AllTopicsLearned } from "../components/stats/AllTopicsLearned";

const useStyles = makeStyles({
  full: {
    paddingLeft: 270,
    paddingRight: 20,
  },
  mobile: {
    padding: 20,
  },
});

interface SubjectInfo {
  subjectInfo: {
    learnedSkills: number;
    title: string;
    totalSkills: number;
  };
}
interface TopicInfo {
  topicInfo: {
    title: string;
    learned: boolean;
  };
}

export const Stats = () => {
  // UseState
  const [stats, setStats] = useState({});

  // Styles
  const matches = useMediaQuery("(min-width:1224px)");
  const classes = useStyles();
  return (
    <div className={matches ? classes.full : classes.mobile}>
      <StatsContainer>
        <StatsCard>
          <StatsHeader />
          <AllTopics />
          <AllTopicsLearned />
          <AllCompletedProjects />
          <AllFutureProjects />
          <AllMainSubjects />
          <AllSecondarySubjects />
        </StatsCard>
      </StatsContainer>
    </div>
  );
};
