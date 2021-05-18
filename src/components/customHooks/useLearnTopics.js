import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useGetSkillAndSubjectData from "./useGetSkillAndSubjectData";
import usePushDataToServer from "./usePushDataToServer";
import axios from "axios";
export default function useLearnTopics() {
  const {
    getTotalNumberOfLearnedSkills,
    getTotalNumberOfSkills,
    getTitleSubjectName,
  } = useGetSkillAndSubjectData();
  const topLevelIndex = useSelector((state) => state.topLevelIndex);
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);
  const userProfileData = useSelector((state) => state.userProfileData);
  const { updateMainSubjectsInServer, updateSecondarySubjectsInServer } =
    usePushDataToServer();
  const { id } = userProfileData;
  const handleToggleLearnedSkill = (
    topLevelIndex,
    task,
    lowLevelIndex,
    subject
  ) => {
    const currentLearnedValue =
      subject[topLevelIndex][1][lowLevelIndex].learned;
    const updatedSkill = { title: task, learned: !currentLearnedValue };
    subject[topLevelIndex][1].splice(lowLevelIndex, 1, updatedSkill);
    const subjectTitle = getTitleSubjectName(topLevelIndex, subject);
    const totalSkills = getTotalNumberOfSkills(topLevelIndex, subject);
    const learnedSkills = getTotalNumberOfLearnedSkills(topLevelIndex, subject);
    const updatedMainSubject = {
      title: subjectTitle,
      totalSkills: totalSkills,
      learnedSkills: learnedSkills,
    };
    subject[topLevelIndex].splice(0, 1, updatedMainSubject);
    if (subject === mainSubjects) {
      updateMainSubjectsInServer(subject);
    } else if (subject === secondarySubjects) {
      updateSecondarySubjectsInServer(subject);
    }
  };

  return { handleToggleLearnedSkill };
}
