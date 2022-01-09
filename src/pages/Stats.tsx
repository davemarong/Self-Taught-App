// Imports

// React
import React, { useState } from "react";

// Material UI
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";

// Components
import { StatsContainer } from "../components/stats/StatsContainer";
import { StatsHeader } from "../components/stats/StatsHeader";
import { AllTopics } from "../components/stats/StatsCategories/AllTopics";
import { StatsCard } from "../components/stats/StatsCard";
import { AllCompletedProjects } from "../components/stats/StatsCategories/AllCompletedProjects";
import { AllFutureProjects } from "../components/stats/StatsCategories/AllFutureProjects";
import { AllMainSubjects } from "../components/stats/StatsCategories/AllMainSubjects";
import { AllSecondarySubjects } from "../components/stats/StatsCategories/AllSecondarySubjects";
import { AllTopicsLearned } from "../components/stats/StatsCategories/AllTopicsLearned";
import useScrollToTop from "../components/customHooks/useScrollToTop";

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
  // Custom hook
  useScrollToTop();

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
