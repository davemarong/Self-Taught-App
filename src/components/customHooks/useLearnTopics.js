import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useGetSkillAndSubjectData from "./useGetSkillAndSubjectData";

export default function useLearnTopics() {
  const {
    getTotalNumberOfLearnedSkills,
    getTotalNumberOfSkills,
    getTitleSubjectName,
  } = useGetSkillAndSubjectData();
  const topLevelIndex = useSelector((state) => state.topLevelIndex);
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const handleToggleLearnedSkill = (topLevelIndex, task, lowLevelIndex) => {
    const currentLearnedValue =
      mainSubjects[topLevelIndex][1][lowLevelIndex].learned;
    const updatedSkill = { title: task, learned: !currentLearnedValue };
    mainSubjects[topLevelIndex][1].splice(lowLevelIndex, 1, updatedSkill);
    const subjectTitle = getTitleSubjectName(topLevelIndex);
    const totalSkills = getTotalNumberOfSkills(topLevelIndex);
    const learnedSkills = getTotalNumberOfLearnedSkills(topLevelIndex);
    const updatedMainSubject = {
      title: subjectTitle,
      totalSkills: totalSkills,
      learnedSkills: learnedSkills,
    };
    mainSubjects[topLevelIndex].splice(0, 1, updatedMainSubject);
  };

  return { handleToggleLearnedSkill };
}
